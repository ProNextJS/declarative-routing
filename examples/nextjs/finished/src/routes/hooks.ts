import { useRouter } from "next/navigation";
import {
  useParams as useNextParams,
  useSearchParams as useNextSearchParams
} from "next/navigation";
import { z } from "zod";

import { RouteBuilder } from "./makeRoute";

const emptySchema = z.object({});

type PushOptions = Parameters<ReturnType<typeof useRouter>["push"]>[1];

export function usePush<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema = typeof emptySchema
>(builder: RouteBuilder<Params, Search>) {
  const { push } = useRouter();
  return (
    p: z.input<Params>,
    search?: z.input<Search>,
    options?: PushOptions
  ) => {
    push(builder(p, search), options);
  };
}

export function useParams<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema = typeof emptySchema
>(builder: RouteBuilder<Params, Search>): z.output<Params> {
  const res = builder.paramsSchema.safeParse(useNextParams());
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
  const res = builder.searchSchema!.safeParse(
    convertURLSearchParamsToObject(useNextSearchParams())
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
