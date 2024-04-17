import { useLocation } from "@builder.io/qwik-city";
import type { z } from "zod";
import type { RouteBuilder, emptySchema } from "./makeRoute";

export function useParams<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema = typeof emptySchema
>(builder: RouteBuilder<Params, Search>): z.output<Params> {
  const location = useLocation();
  const res = builder.paramsSchema.safeParse(location.params);
  if (!res.success) {
    throw new Error(
      `Invalid route params for route ${builder.routeName}: ${res.error.message}`
    );
  }
  return res.data;
}

export function useSearchParams<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema = typeof emptySchema
>(builder: RouteBuilder<Params, Search>): z.output<Search> {
  const location = useLocation();

  const res = builder.searchSchema!.safeParse(
    convertURLSearchParamsToObject(location.url.searchParams)
  );
  if (!res.success) {
    throw new Error(
      `Invalid search params for route ${builder.routeName}: ${res.error.message}`
    );
  }
  return res.data;
}

function convertURLSearchParamsToObject(
  params: Readonly<URLSearchParams> | null
): Record<string, string | string[]> {
  if (!params) {
    return {};
  }

  const obj: Record<string, string | string[]> = {};
  // @ts-ignore
  for (const [key, value] of params.entries()) {
    if (params.getAll(key).length > 1) {
      obj[key] = params.getAll(key);
    } else {
      obj[key] = value;
    }
  }

  return obj;
}
