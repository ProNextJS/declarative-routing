/*
Derived from: https://www.flightcontrol.dev/blog/fix-nextjs-routing-to-have-full-type-safety
*/
import type { Component } from "@builder.io/qwik";
import type { LinkProps } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import queryString from "query-string";
import { z } from "zod";

export type RouteInfo<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema
> = {
  name: string;
  params: Params;
  search: Search;
  description?: string;
};

type CoreRouteElements<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema = typeof emptySchema
> = {
  params: z.output<Params>;
  paramsSchema: Params;
  search: z.output<Search>;
  searchSchema: Search;
};

export type RouteBuilder<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema
> = CoreRouteElements<Params, Search> & {
  (p?: z.input<Params>, search?: z.input<Search>): string;

  routeName: string;

  Link: Component<
    Omit<LinkProps, "href" | "search"> &
      z.input<Params> & {
        search?: z.input<Search>;
      }
  >;
  ParamsLink: Component<
    Omit<LinkProps, "href" | "search"> & {
      params?: z.input<Params>;
      search?: z.input<Search>;
    }
  >;
};

function createPathBuilder<T extends Record<string, string | string[]>>(
  route: string
): (params: T) => string {
  const pathArr = route.split("/");

  let catchAllSegment: ((params: T) => string) | null = null;
  if (pathArr.at(-1)?.startsWith("[[...")) {
    const catchKey = pathArr.pop()!.replace("[[...", "").replace("]]", "");
    catchAllSegment = (params: T) => {
      const catchAll = params[catchKey] as unknown as string[];
      return catchAll ? `/${catchAll.join("/")}` : "";
    };
  }

  const elems: ((params: T) => string)[] = [];
  for (const elem of pathArr) {
    const catchAll = elem.match(/\[\.\.\.(.*)\]/);
    const param = elem.match(/\[(.*)\]/);
    if (catchAll?.[1]) {
      const key = catchAll[1];
      elems.push((params: T) =>
        (params[key as unknown as string] as string[]).join("/")
      );
    } else if (param?.[1]) {
      const key = param[1];
      elems.push((params: T) => params[key as unknown as string] as string);
    } else if (!(elem.startsWith("(") && elem.endsWith(")"))) {
      elems.push(() => elem);
    }
  }

  return (params: T): string => {
    const p = elems.map((e) => e(params)).join("/");
    if (catchAllSegment) {
      return p + catchAllSegment(params);
    } else {
      return p;
    }
  };
}

function createRouteBuilder<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema
>(route: string, info: RouteInfo<Params, Search>) {
  const fn = createPathBuilder<z.output<Params>>(route);

  return (params?: z.input<Params>, search?: z.input<Search>) => {
    let checkedParams = params || {};
    if (info.params) {
      const safeParams = info.params.safeParse(checkedParams);
      if (!safeParams?.success) {
        throw new Error(
          `Invalid params for route ${info.name}: ${safeParams.error.message}`
        );
      } else {
        checkedParams = safeParams.data;
      }
    }
    const safeSearch = info.search
      ? info.search?.safeParse(search || {})
      : null;
    if (info.search && !safeSearch?.success) {
      throw new Error(
        `Invalid search params for route ${info.name}: ${safeSearch?.error.message}`
      );
    }

    const baseUrl = fn(checkedParams);
    const searchString = search && queryString.stringify(search);
    return [baseUrl, searchString ? `?${searchString}` : ""].join("");
  };
}

export const emptySchema = z.object({});

export function makeRoute<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema = typeof emptySchema
>(
  route: string,
  info: RouteInfo<Params, Search>
): RouteBuilder<Params, Search> {
  const urlBuilder: RouteBuilder<Params, Search> = createRouteBuilder(
    route,
    info
  ) as RouteBuilder<Params, Search>;

  urlBuilder.routeName = info.name;

  urlBuilder.ParamsLink = function RouteLink({
    params: linkParams,
    search: linkSearch,
    ...props
  }: Omit<LinkProps, "href"> & {
    params?: z.input<Params>;
    search?: z.input<Search>;
  }) {
    return <Link {...props} href={urlBuilder(linkParams, linkSearch)} />;
  };

  urlBuilder.Link = function RouteLink({
    search: linkSearch,
    ...props
  }: Omit<LinkProps, "href"> &
    z.input<Params> & {
      search?: z.input<Search>;
    }) {
    const params = info.params.parse(props);
    const extraProps = { ...props };
    for (const key of Object.keys(params)) {
      delete extraProps[key];
    }

    return (
      <Link
        {...extraProps}
        href={urlBuilder(info.params.parse(props), linkSearch)}
      />
    );
  };

  urlBuilder.params = undefined as z.output<Params>;
  urlBuilder.paramsSchema = info.params;
  urlBuilder.search = undefined as z.output<Search>;
  urlBuilder.searchSchema = info.search;

  return urlBuilder;
}
