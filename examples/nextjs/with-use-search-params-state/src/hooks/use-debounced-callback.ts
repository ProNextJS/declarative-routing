/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useRef } from "react";
import debounce from "lodash.debounce";
import throttle from "lodash.throttle";

import { useUnmount } from "@/hooks/use-unmount";
import type { DebounceOptions } from "@/routes/hooks";
type DebounceCallbackParam = DebounceOptions & {
  debounceOrThrottle?: "debounce" | "throttle";
};
const defaultDebounceCallbackParam: DebounceCallbackParam = {
  delay: 500,
  debounceOrThrottle: "debounce",
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

  useUnmount(() => {
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
    debouncedFunc.current = debounce(func, delay, debounceOptions);
  }, [func, delay, debounceOptions]);

  return debounced;
}
