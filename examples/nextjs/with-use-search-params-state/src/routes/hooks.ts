import { useRouter } from "next/navigation";
import {
  useParams as useNextParams,
  useSearchParams as useNextSearchParams,
} from "next/navigation";
import { z } from "zod";
import { useCallback, useEffect, useMemo, useRef } from "react";

import type { RouteBuilder } from "./makeRoute";
import {
  ZodArray,
  type ZodTypeAny,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodEffects,
} from "zod";

import debounce from "lodash.debounce";
import throttle from "lodash.throttle";
const emptySchema = z.object({});

type PushOptions = Parameters<ReturnType<typeof useRouter>["push"]>[1];

export function usePush<
  Params extends z.ZodSchema,
  Search extends z.ZodSchema = typeof emptySchema,
>(builder: RouteBuilder<Params, Search>) {
  const router = useRouter();
  return (
    p: z.input<Params>,
    search?: z.input<Search>,
    options?: PushOptions,
  ) => {
    router.push(builder(p, search), options);
  };
}

type UseParamsConfig = {
  partial?: boolean;
};
const defaultUseParamsConfig = {
  partial: false,
} as const satisfies UseParamsConfig;

export function useParams<
  Params extends z.AnyZodObject,
  Search extends z.AnyZodObject = typeof emptySchema,
  TConfig extends UseParamsConfig = typeof defaultUseParamsConfig,
>(
  builder: RouteBuilder<Params, Search>,
  _config?: TConfig,
): TConfig["partial"] extends true
  ? Partial<z.output<Params>>
  : z.output<Params> {
  const nextParams = useNextParams();
  const shouldUsePartial = _config?.partial ?? defaultUseParamsConfig.partial;
  const targetSchema = shouldUsePartial
    ? builder.paramsSchema.partial()
    : builder.paramsSchema;
  const isSafeParsedWithPartial = builder.paramsSchema
    .partial()
    .safeParse(nextParams).success;
  const res = targetSchema.safeParse(nextParams);
  if (!res.success) {
    throw new Error(
      [
        `Invalid route params for route ${builder.routeName}: ${res.error.message}.`,
        `${isSafeParsedWithPartial ? "ℹ️ If you wanted to use partial params, pass {partial:true} as second parameter." : ""}`,
      ]
        .filter(Boolean)
        .join(" "),
    );
  }
  return res.data;
}

export function useSearchParams<
  Params extends z.AnyZodObject,
  Search extends z.AnyZodObject = typeof emptySchema,
>(
  builder: RouteBuilder<Params, Search>,
  config?: UseParamsConfig,
): z.output<Search> {
  const searchSchema = useMemo(
    () => (config?.partial ? builder.searchSchema : builder.searchSchema),
    [config?.partial, builder.searchSchema],
  );

  const rawParams = convertURLSearchParamsToObject(
    useNextSearchParams(),
    searchSchema,
  );

  const res = builder.searchSchema.safeParse(rawParams);
  if (!res.success) {
    throw new Error(
      `Invalid search params for route ${builder.routeName}: ${res.error.message}`,
    );
  }
  return res.data;
}
export function useSearchParamsState<
  Params extends z.AnyZodObject,
  Search extends z.AnyZodObject = typeof emptySchema,
>(
  builder: RouteBuilder<Params, Search>,
  useParamsConfig?: UseParamsConfig,
  useDebounceCallbackConfig?: DebounceCallbackParam,
) {
  const _searchParams = useSearchParams(builder, useParamsConfig);
  const push = usePush(builder);
  const params = useParams(builder, useParamsConfig);
  const searchParams = useMemo(() => _searchParams, [_searchParams]);

  /**
   * @param newValues - The new values to set. If you want to unset a value, pass `null`. If you want to dynamically set or not set a value, use `undefined` because `undefined` values will be omitted.
   */
  const setSearchParams = useCallback(
    (
      newValues: Partial<{
        [K in keyof z.output<Search>]: z.output<Search>[K] | null | undefined;
      }>,
    ) => {
      if (Object.keys(newValues).every((val) => val === undefined)) {
        return;
      }
      const updatedValues: Partial<z.output<Search>> = builder.searchSchema
        .partial()
        .parse({ ..._searchParams, ...newValues });
      for (const [key, value] of Object.entries(updatedValues)) {
        if (value === null) {
          delete updatedValues[key];
        }

        if (
          value === "" &&
          builder.searchSchema.shape[key] instanceof ZodOptional
        ) {
          delete updatedValues[key];
        }
      }

      push(params, updatedValues);
    },
    [_searchParams, push, params, builder.searchSchema],
  );

  const debouncedSetSearchParams = useDebounceCallback(
    setSearchParams,
    useDebounceCallbackConfig,
  ) as typeof setSearchParams;
  const resetAllValues = useCallback(() => {
    push(params, builder.searchSchema.parse({}) as z.output<Search>);
  }, [push, params, builder]);

  return {
    searchParams,
    setSearchParams,
    resetAllValues,
    debouncedSetSearchParams,
  } as const;
}
export type DebounceOptions = {
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
  delay?: number;
  // debounceOrThrottle?: "debounce" | "throttle";
};
type DebounceCallbackParam = DebounceOptions & {
  debounceOrThrottle?: "debounce" | "throttle";
};

type ControlFunctions = {
  cancel: () => void;
  flush: () => void;
  isPending: () => boolean;
};

export type DebouncedState<T extends (...args: any) => ReturnType<T>> = ((
  ...args: Parameters<T>
) => ReturnType<T> | undefined) &
  ControlFunctions;

const defaultDebounceCallbackParam: DebounceCallbackParam = {
  delay: 500,
  debounceOrThrottle: "debounce",
};
export function useDebounceCallback<T extends (...args: any) => ReturnType<T>>(
  func: T,
  _options: DebounceCallbackParam = {},
): DebouncedState<T> {
  const options = useMemo(
    () => ({ ...defaultDebounceCallbackParam, ..._options }),
    [_options],
  );
  const debounceOrThrottle = useMemo(
    () => options.debounceOrThrottle,
    [options.debounceOrThrottle],
  );
  const delay = useMemo(() => options.delay, [options.delay]);
  const debounceOptions = useMemo(() => {
    return {
      ...options,
      leading: options.leading ?? false,
      debounceOrThrottle,
      delay,
    };
  }, [options, debounceOrThrottle, delay]);
  const debouncedFunc = useRef<ReturnType<typeof debounce>>(undefined);

  useEffect(() => {
    if (debouncedFunc.current) {
      debouncedFunc.current.cancel();
    }
  });

  const debounced = useMemo(() => {
    const debouncedFuncInstance =
      debounceOrThrottle === "throttle"
        ? throttle(func, delay, debounceOptions)
        : debounce(func, delay, debounceOptions);

    const wrappedFunc: DebouncedState<T> = (...args: Parameters<T>) => {
      return debouncedFuncInstance(...args);
    };

    wrappedFunc.cancel = () => {
      debouncedFuncInstance.cancel();
    };

    wrappedFunc.isPending = () => {
      return !!debouncedFunc.current;
    };

    wrappedFunc.flush = () => {
      return debouncedFuncInstance.flush();
    };

    return wrappedFunc;
  }, [debounceOrThrottle, func, delay, debounceOptions]);

  // Update the debounced function ref whenever func, wait, or options change
  useEffect(() => {
    debouncedFunc.current =
      debounceOrThrottle === "throttle"
        ? throttle(func, delay, debounceOptions)
        : debounce(func, delay, debounceOptions);
  }, [func, delay, debounceOptions, debounceOrThrottle]);

  return debounced;
}

function convertURLSearchParamsToObject(
  params: Readonly<URLSearchParams> | null,
  schema: z.ZodTypeAny,
): Record<string, string | string[]> {
  if (!params) {
    return {};
  }

  const obj: Record<string, string | string[]> = {};
  const arrayKeys = getArrayKeysFromZodSchema(schema);
  const uniqueKeys = [...new Set(params.keys())];
  for (const key of uniqueKeys) {
    if (arrayKeys.includes(key)) {
      obj[key] = params.getAll(key).filter(Boolean);
    } else {
      const value = params.get(key);
      if (value) {
        obj[key] = value;
      }
    }
  }
  return obj;
}
export function getArrayKeysFromZodSchema(schema: z.ZodTypeAny): string[] {
  if (!(schema instanceof z.ZodObject)) return [];
  return Object.entries(schema.shape).flatMap(([key, value]) => {
    const unwrapped = unwrapZodType(
      value as Parameters<typeof unwrapZodType>[0],
    );
    return unwrapped instanceof ZodArray ? [key] : [];
  });
}
function unwrapZodType(schema: ZodTypeAny): ZodTypeAny {
  const unwrappableInstances = [
    ZodOptional,
    ZodNullable,
    ZodDefault,
    ZodEffects,
  ];
  if (unwrappableInstances.some((instance) => schema instanceof instance)) {
    return unwrapZodType(schema._def.innerType || schema._def.schema);
  }
  return schema;
}
