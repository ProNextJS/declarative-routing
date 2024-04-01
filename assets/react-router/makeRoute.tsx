/*
Derived from: https://www.flightcontrol.dev/blog/fix-nextjs-routing-to-have-full-type-safety
*/
import { ZodSchema, z } from "zod";
import queryString from "query-string";
import {
  Link,
  NavLink,
  useParams as useParmsRR,
  useSearchParams as useSearchParamsRR,
  RouteObject,
} from "react-router-dom";

type LinkProps = Parameters<typeof Link>[0];
type NavLinkProps = Parameters<typeof NavLink>[0];

export type RouteInfo<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema
> = {
  name: string;
  params: Params;
  search: Search;
};

export type RouteBuilder<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema
> = {
  (p?: z.input<Params>, search?: z.input<Search>): string;

  useParams: () => z.output<Params>;
  useSearchParams: () => z.output<Search>;
  useSetSearch: () => (search?: z.input<Search>) => void;

  Link: React.FC<
    Omit<LinkProps, "to"> &
      z.input<Params> & {
        search?: z.input<Search>;
      } & { children?: React.ReactNode }
  >;
  ParamsLink: React.FC<
    Omit<LinkProps, "to"> & {
      params?: z.input<Params>;
      search?: z.input<Search>;
    } & { children?: React.ReactNode }
  >;
  NavLink: React.FC<
    Omit<NavLinkProps, "to"> &
      z.input<Params> & {
        search?: z.input<Search>;
      } & { children?: React.ReactNode }
  >;
  NavParamsLink: React.FC<
    Omit<NavLinkProps, "to"> & {
      params?: z.input<Params>;
      search?: z.input<Search>;
    } & { children?: React.ReactNode }
  >;

  params: z.output<Params>;
  paramsSchema: Params;
  search: z.output<Search>;
  searchSchema: Search;
};

function createPathBuilder<T extends Record<string, string | string[]>>(
  route: string
): (params: T) => string {
  const pathArr = route.split("/");

  let catchAllSegment: ((params: T) => string) | null = null;
  if (pathArr.at(-1) === "*") {
    const catchKey = "*";
    catchAllSegment = (params: T) => {
      const catchAll = params[catchKey] as unknown as string[];
      return catchAll ? `/${catchAll.join("/")}` : "";
    };
  }

  const elems: ((params: T) => string | null)[] = [];
  for (const elem of pathArr) {
    if (elem.endsWith("?")) {
      const key = elem.replace("?", "");
      elems.push((params: T) => {
        if (params[key]) {
          return params[key as unknown as string] as string;
        } else {
          return null;
        }
      });
    } else if (elem.startsWith(":")) {
      const key = elem.replace(":", "");
      elems.push((params: T) => params[key as unknown as string] as string);
    } else {
      elems.push(() => elem);
    }
  }

  return (params: T): string => {
    const p = elems
      .map((e) => e(params))
      .filter((v) => v)
      .join("/");
    if (catchAllSegment) {
      return p + catchAllSegment(params);
    } else {
      return p;
    }
  };
}

const emptySchema = z.object({});

export function makeRoute<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema = typeof emptySchema
>(
  route: string,
  info: RouteInfo<Params, Search>
): RouteBuilder<Params, Search> {
  const fn = createPathBuilder<z.output<Params>>(route);

  const routeBuilder: RouteBuilder<Params, Search> = (
    params?: z.input<Params>,
    search?: z.input<Search>
  ) => {
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

  routeBuilder.useParams = function useParams(): z.output<Params> {
    const res = info.params.safeParse(useParmsRR());
    if (!res.success) {
      throw new Error(
        `Invalid route params for route ${info.name}: ${res.error.message}`
      );
    }
    return res.data;
  };

  if (info?.search) {
    routeBuilder.useSearchParams =
      function useSearchParams(): z.output<Search> {
        const [searchParams] = useSearchParamsRR();
        const res = info.search!.safeParse(
          convertURLSearchParamsToObject(searchParams)
        );
        if (!res.success) {
          throw new Error(
            `Invalid search params for route ${info.name}: ${res.error.message}`
          );
        }
        return res.data;
      };
  } else {
    routeBuilder.useSearchParams = function useSearchParams() {
      throw new Error(`Route ${info.name} does not have search params`);
    };
  }

  routeBuilder.useSetSearch = function useSetSearch() {
    const [_, setSearch] = useSearchParamsRR();
    return (search?: z.input<Search>) => {
      setSearch(search);
    };
  };

  routeBuilder.ParamsLink = function RouteLink({
    params: linkParams,
    search: linkSearch,
    children,
    ...props
  }: Omit<LinkProps, "to"> & {
    params?: z.input<Params>;
    search?: z.input<Search>;
  } & { children?: React.ReactNode }) {
    return (
      <Link {...props} to={routeBuilder(linkParams, linkSearch)}>
        {children}
      </Link>
    );
  };

  routeBuilder.Link = function RouteLink({
    search: linkSearch,
    children,
    ...props
  }: Omit<LinkProps, "to"> &
    z.input<Params> & {
      search?: z.input<Search>;
    } & { children?: React.ReactNode }) {
    const params = info.params.parse(props);
    const extraProps = { ...props };
    for (const key of Object.keys(params)) {
      delete extraProps[key];
    }
    return (
      <Link
        {...extraProps}
        to={routeBuilder(info.params.parse(props), linkSearch)}
      >
        {children}
      </Link>
    );
  };

  routeBuilder.NavParamsLink = function RouteLink({
    params: linkParams,
    search: linkSearch,
    children,
    ...props
  }: Omit<NavLinkProps, "to"> & {
    params?: z.input<Params>;
    search?: z.input<Search>;
  } & { children?: React.ReactNode }) {
    return (
      <NavLink {...props} to={routeBuilder(linkParams, linkSearch)}>
        {children}
      </NavLink>
    );
  };

  routeBuilder.NavLink = function RouteLink({
    search: linkSearch,
    children,
    ...props
  }: Omit<NavLinkProps, "to"> &
    z.input<Params> & {
      search?: z.input<Search>;
    } & { children?: React.ReactNode }) {
    const params = info.params.parse(props);
    const extraProps = { ...props };
    for (const key of Object.keys(params)) {
      delete extraProps[key];
    }
    return (
      <NavLink
        {...extraProps}
        to={routeBuilder(info.params.parse(props), linkSearch)}
      >
        {children}
      </NavLink>
    );
  };

  routeBuilder.params = undefined as z.output<Params>;
  routeBuilder.paramsSchema = info.params;
  routeBuilder.search = undefined as z.output<Search>;
  routeBuilder.searchSchema = info.search;

  return routeBuilder;
}

function convertURLSearchParamsToObject(
  params: Readonly<URLSearchParams> | null
): Record<string, string | string[]> {
  if (!params) {
    return {};
  }

  const obj: Record<string, string | string[]> = {};
  for (const [key, value] of params.entries()) {
    if (params.getAll(key).length > 1) {
      obj[key] = params.getAll(key);
    } else {
      obj[key] = value;
    }
  }
  return obj;
}

// Super hairy TypeScript generic code to convert a route tree into a map of route builders

type RouteNode = Omit<RouteObject, "children"> & {
  name: string;
  params: ZodSchema;
  search: ZodSchema;
  children?: RouteNode[];
};

type RouteNodeInfer<S extends string> = Omit<RouteObject, "children"> & {
  name: S;
  params: ZodSchema;
  search: ZodSchema;
  children?: RouteNodeInfer<S>[] | [];
};

type RouteNodeArrToMap<T extends RouteNode[]> = {
  [I in keyof T]: (x: RouteNodeToMap<T[I]>) => void;
}[number] extends (x: infer I) => void
  ? { [K in keyof I]: I[K] }
  : never;

type RouteNodeToMap<T extends RouteNode> = T extends {
  children: infer R extends RouteNode[];
}
  ? {
      [P in T["name"]]: RouteBuilder<T["params"], T["search"]>;
    } & RouteNodeArrToMap<R>
  : { [P in T["name"]]: RouteBuilder<T["params"], T["search"]> };

export function parseRoutes<T extends RouteNodeInfer<S>[], S extends string>(
  routes: [...T]
): {
  routes: RouteObject[];
  declarativeRoutes: RouteNodeArrToMap<T>;
} {
  const declarativeRoutes = {} as RouteNodeArrToMap<T>;

  function buildRoutes(
    routes: RouteNode[],
    pathStack: (string | undefined)[]
  ): RouteObject[] {
    function makePath(pathStack: (string | undefined)[]) {
      const path = pathStack
        .filter((x) => x)
        .map((x) => (x === "/" ? "" : x))
        .join("/");
      return path;
    }

    // @ts-ignore
    return routes.map((route) => {
      const { name, params, search, ...rest } = route;
      // @ts-ignore
      declarativeRoutes[route.name as unknown as keyof RouteNodeArrToMap<T>] =
        makeRoute<typeof route.params, typeof route.search>(
          makePath([...pathStack, rest.path]),
          {
            name,
            params,
            search,
          }
        ) as unknown as keyof RouteNodeArrToMap<T>;
      if (rest.children) {
        return {
          ...rest,
          children: buildRoutes(rest.children, [...pathStack, rest.path]),
        };
      }
      return rest;
    });
  }

  const simplifiedRoutes = buildRoutes(routes, []);

  return {
    routes: simplifiedRoutes,
    declarativeRoutes,
  };
}
