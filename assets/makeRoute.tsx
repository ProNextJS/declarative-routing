/*
Derived from: https://www.flightcontrol.dev/blog/fix-nextjs-routing-to-have-full-type-safety
*/
import { z } from "zod";
import {
  useParams as useNextParams,
  useSearchParams as useNextSearchParams,
} from "next/navigation";
import queryString from "query-string";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

export type RouteInfo<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema
> = {
  name: string;
  fn: (p: z.input<Params>) => string;
  params: Params;
  search?: Search;
  description?: string;
};

export type GetInfo<Result extends z.ZodSchema> = {
  result: Result;
};

export type PostInfo<Body extends z.ZodSchema, Result extends z.ZodSchema> = {
  body: Body;
  result: Result;
  description?: string;
};

export type PutInfo<Body extends z.ZodSchema, Result extends z.ZodSchema> = {
  body: Body;
  result: Result;
  description?: string;
};

type FetchOptions = Parameters<typeof fetch>[1];

type PushOptions = Parameters<ReturnType<typeof useRouter>["push"]>[1];

type PutRouteBuilder<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema,
  Body extends z.ZodSchema,
  Result extends z.ZodSchema
> = {
  (
    body: z.input<Body>,
    p?: z.input<Params>,
    search?: z.input<Search>,
    options?: FetchOptions
  ): Promise<z.output<Result>>;
  params: z.output<Params>;
  body: z.output<Body>;
  result: z.output<Result>;
};

type PostRouteBuilder<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema,
  Body extends z.ZodSchema,
  Result extends z.ZodSchema
> = {
  (
    body: z.input<Body>,
    p?: z.input<Params>,
    search?: z.input<Search>,
    options?: FetchOptions
  ): Promise<z.output<Result>>;
  params: z.output<Params>;
  body: z.output<Body>;
  result: z.output<Result>;
};

type GetRouteBuilder<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema,
  Result extends z.ZodSchema
> = {
  (
    p?: z.input<Params>,
    search?: z.input<Search>,
    options?: FetchOptions
  ): Promise<z.output<Result>>;
  params: z.output<Params>;
  result: z.output<Result>;
};

type DeleteRouteBuilder<Params extends z.ZodSchema> = {
  (p?: z.input<Params>, options?: FetchOptions): Promise<void>;
  params: z.output<Params>;
};

type RouteBuilder<Params extends z.ZodSchema, Search extends z.ZodSchema> = {
  (p?: z.input<Params>, search?: z.input<Search>): string;
  params: z.output<Params>;
  useParams: () => z.output<Params>;
  useSearchParams: () => z.output<Search>;
  usePush: () => (
    params: z.input<Params>,
    search?: z.input<Search>,
    options?: PushOptions
  ) => void;
  Link: React.FC<
    Omit<LinkProps, "href"> & {
      params?: z.input<Params>;
      search?: z.input<Search>;
    } & { children?: React.ReactNode }
  >;
  QLink: React.FC<
    Omit<LinkProps, "href"> &
      z.input<Params> & {
        search?: z.input<Search>;
      } & { children?: React.ReactNode }
  >;
};

function createRouteBuilder<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema
>(info: RouteInfo<Params, Search>) {
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
    const safeSearch = info.search ? info.search?.safeParse(search) : null;
    if (info.search && !safeSearch?.success) {
      throw new Error(
        `Invalid search params for route ${info.name}: ${safeSearch?.error.message}`
      );
    }

    const baseUrl = info.fn(checkedParams);
    const searchString = search && queryString.stringify(search);
    return [baseUrl, searchString ? `?${searchString}` : ""].join("");
  };
}

export function makePostRoute<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema,
  Body extends z.ZodSchema,
  Result extends z.ZodSchema
>(
  info: RouteInfo<Params, Search>,
  postInfo: PostInfo<Body, Result>
): PostRouteBuilder<Params, Search, Body, Result> {
  const urlBuilder = createRouteBuilder(info);

  const routeBuilder: PostRouteBuilder<Params, Search, Body, Result> = (
    body: z.input<Body>,
    p?: z.input<Params>,
    search?: z.input<Search>,
    options?: FetchOptions
  ): Promise<z.output<Result>> => {
    console.log(1);
    const safeBody = postInfo.body.safeParse(body);
    if (!safeBody.success) {
      throw new Error(
        `Invalid body for route ${info.name}: ${safeBody.error.message}`
      );
    }

    console.log(2);
    return fetch(urlBuilder(p, search), {
      ...options,
      method: "POST",
      body: JSON.stringify(safeBody.data),
      headers: {
        ...(options?.headers || {}),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error(`Failed to fetch ${info.name}: ${res.statusText}`);
        }
        return res.json() as Promise<z.output<Result>>;
      })
      .then((data) => {
        console.log(data);
        const result = postInfo.result.safeParse(data);
        console.log(4);
        if (!result.success) {
          throw new Error(
            `Invalid response for route ${info.name}: ${result.error.message}`
          );
        }
        console.log(5);
        return result.data;
      });
  };

  // set the params type
  routeBuilder.params = undefined as z.output<Params>;
  // set the runtime getter
  Object.defineProperty(routeBuilder, "params", {
    get() {
      throw new Error(
        "Routes.[route].params is only for type usage, not runtime. Use it like `typeof Routes.[routes].params`"
      );
    },
  });

  // set the body type
  routeBuilder.body = undefined as z.output<Body>;
  // set the runtime getter
  Object.defineProperty(routeBuilder, "body", {
    get() {
      throw new Error(
        "Routes.[route].body is only for type usage, not runtime. Use it like `typeof Routes.[routes].params`"
      );
    },
  });

  // set the result type
  routeBuilder.result = undefined as z.output<Result>;
  // set the runtime getter
  Object.defineProperty(routeBuilder, "result", {
    get() {
      throw new Error(
        "Routes.[route].result is only for type usage, not runtime. Use it like `typeof Routes.[routes].params`"
      );
    },
  });

  return routeBuilder;
}

export function makePutRoute<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema,
  Body extends z.ZodSchema,
  Result extends z.ZodSchema
>(
  info: RouteInfo<Params, Search>,
  putInfo: PutInfo<Body, Result>
): PutRouteBuilder<Params, Search, Body, Result> {
  const urlBuilder = createRouteBuilder(info);

  const routeBuilder: PutRouteBuilder<Params, Search, Body, Result> = (
    body: z.input<Body>,
    p?: z.input<Params>,
    search?: z.input<Search>,
    options?: FetchOptions
  ): Promise<z.output<Result>> => {
    const safeBody = putInfo.body.safeParse(body);
    if (!safeBody.success) {
      throw new Error(
        `Invalid body for route ${info.name}: ${safeBody.error.message}`
      );
    }

    return fetch(urlBuilder(p, search), {
      ...options,
      method: "PUT",
      body: JSON.stringify(safeBody.data),
      headers: {
        ...(options?.headers || {}),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch ${info.name}: ${res.statusText}`);
        }
        return res.json() as Promise<z.output<Result>>;
      })
      .then((data) => {
        const result = putInfo.result.safeParse(data);
        if (!result.success) {
          throw new Error(
            `Invalid response for route ${info.name}: ${result.error.message}`
          );
        }
        return result.data;
      });
  };

  // set the params type
  routeBuilder.params = undefined as z.output<Params>;
  // set the runtime getter
  Object.defineProperty(routeBuilder, "params", {
    get() {
      throw new Error(
        "Routes.[route].params is only for type usage, not runtime. Use it like `typeof Routes.[routes].params`"
      );
    },
  });

  // set the body type
  routeBuilder.body = undefined as z.output<Body>;
  // set the runtime getter
  Object.defineProperty(routeBuilder, "body", {
    get() {
      throw new Error(
        "Routes.[route].body is only for type usage, not runtime. Use it like `typeof Routes.[routes].params`"
      );
    },
  });

  // set the result type
  routeBuilder.result = undefined as z.output<Result>;
  // set the runtime getter
  Object.defineProperty(routeBuilder, "result", {
    get() {
      throw new Error(
        "Routes.[route].result is only for type usage, not runtime. Use it like `typeof Routes.[routes].params`"
      );
    },
  });

  return routeBuilder;
}

export function makeGetRoute<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema,
  Result extends z.ZodSchema
>(
  info: RouteInfo<Params, Search>,
  getInfo: GetInfo<Result>
): GetRouteBuilder<Params, Search, Result> {
  const urlBuilder = createRouteBuilder(info);

  const routeBuilder: GetRouteBuilder<Params, Search, Result> = (
    p?: z.input<Params>,
    search?: z.input<Search>,
    options?: FetchOptions
  ): Promise<z.output<Result>> => {
    return fetch(urlBuilder(p, search), options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch ${info.name}: ${res.statusText}`);
        }
        return res.json() as Promise<z.output<Result>>;
      })
      .then((data) => {
        const result = getInfo.result.safeParse(data);
        if (!result.success) {
          throw new Error(
            `Invalid response for route ${info.name}: ${result.error.message}`
          );
        }
        return result.data;
      });
  };

  // set the params type
  routeBuilder.params = undefined as z.output<Params>;
  // set the runtime getter
  Object.defineProperty(routeBuilder, "params", {
    get() {
      throw new Error(
        "Routes.[route].params is only for type usage, not runtime. Use it like `typeof Routes.[routes].params`"
      );
    },
  });

  // set the result type
  routeBuilder.result = undefined as z.output<Result>;
  // set the runtime getter
  Object.defineProperty(routeBuilder, "result", {
    get() {
      throw new Error(
        "Routes.[route].result is only for type usage, not runtime. Use it like `typeof Routes.[routes].params`"
      );
    },
  });

  return routeBuilder;
}

export function makeDeleteRoute<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema
>(info: RouteInfo<Params, Search>): DeleteRouteBuilder<Params> {
  const urlBuilder = createRouteBuilder(info);

  const routeBuilder: DeleteRouteBuilder<Params> = (
    p?: z.input<Params>,
    search?: z.input<Search>,
    options?: FetchOptions
  ): Promise<void> => {
    return fetch(urlBuilder(p, search), options).then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch ${info.name}: ${res.statusText}`);
      }
    });
  };

  // set the params type
  routeBuilder.params = undefined as z.output<Params>;
  // set the runtime getter
  Object.defineProperty(routeBuilder, "params", {
    get() {
      throw new Error(
        "Routes.[route].params is only for type usage, not runtime. Use it like `typeof Routes.[routes].params`"
      );
    },
  });

  return routeBuilder;
}

export function makeRoute<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema
>(info: RouteInfo<Params, Search>): RouteBuilder<Params, Search> {
  const routeBuilder: RouteBuilder<Params, Search> = createRouteBuilder(
    info
  ) as RouteBuilder<Params, Search>;

  routeBuilder.useParams = function useParams(): z.output<Params> {
    const res = info.params.safeParse(useNextParams());
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
        const res = info.search!.safeParse(
          convertURLSearchParamsToObject(useNextSearchParams())
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

  routeBuilder.Link = function RouteLink({
    params: linkParams,
    search: linkSearch,
    children,
    ...props
  }: Omit<LinkProps, "href"> & {
    params?: z.input<Params>;
    search?: z.input<Search>;
  } & { children?: React.ReactNode }) {
    return (
      <Link {...props} href={routeBuilder(linkParams, { search: linkSearch })}>
        {children}
      </Link>
    );
  };

  routeBuilder.QLink = function RouteLink({
    search: linkSearch,
    children,
    ...props
  }: Omit<LinkProps, "href"> &
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
        href={routeBuilder(info.params.parse(props), { search: linkSearch })}
      >
        {children}
      </Link>
    );
  };

  routeBuilder.usePush = function usePush() {
    const { push } = useRouter();
    return (
      p: z.input<Params>,
      search?: z.input<Search>,
      options?: PushOptions
    ) => {
      push(routeBuilder(p, { search }), options);
    };
  };

  // set the params type
  routeBuilder.params = undefined as z.output<Params>;
  // set the runtime getter
  Object.defineProperty(routeBuilder, "params", {
    get() {
      throw new Error(
        "Routes.[route].params is only for type usage, not runtime. Use it like `typeof Routes.[routes].params`"
      );
    },
  });

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
