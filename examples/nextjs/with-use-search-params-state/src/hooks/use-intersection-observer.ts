import { useEffect, useState, type RefObject } from "react";

import type { TypedOmit } from "@/types";

export type UseIntersectionObserverProps = {
  freezeOnceVisible?: boolean;
  elementRef: RefObject<Element | null>;
  /**
   * The threshold value(s) at which to trigger the intersection callback.
   * Value(s) must be between 0 and 1 inclusive.
   *
   * - A value of 0 means the callback will be triggered as soon as any part
   *   of the target element becomes visible in the root's viewport.
   * - A value of 1 means the callback will only be triggered when the entire
   *   target element is visible in the root's viewport.
   * - Values in between determine the percentage of the target element's
   *   visibility at which the callback should trigger.
   * - An array of numbers can be used to trigger the callback at multiple
   *   visibility thresholds.
   */
  threshold?: number | number[];
} & TypedOmit<IntersectionObserverInit, "threshold">;

export function useIntersectionObserver({
  elementRef,
  threshold = 0,
  root = null,
  rootMargin = "0%",
  freezeOnceVisible = false,
}: UseIntersectionObserverProps): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    elementRef?.current,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
  ]);

  return entry;
}
