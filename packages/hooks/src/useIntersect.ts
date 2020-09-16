import { useRef, useState, useCallback, useEffect } from 'react';
import { isIE, browserVersion } from 'react-device-detect';

const DEFAULT_ROOT = null;
const DEFAULT_ROOT_MARGIN = '0px';
const DEFAULT_THRESHOLD = [0];

export type IntersectionObserverHookRefCallbackNode = Element | null;
export type IntersectionObserverHookRefCallback = (
  node: IntersectionObserverHookRefCallbackNode,
) => void;

export type IntersectionObserverHookResult = [
  IntersectionObserverHookRefCallback,
  { entry: IntersectionObserverEntry | undefined },
];

// For more info:
// https://developers.google.com/web/updates/2016/04/intersectionobserver
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
export function useIntersectionObserver({
  root = DEFAULT_ROOT,
  rootMargin = DEFAULT_ROOT_MARGIN,
  threshold = DEFAULT_THRESHOLD,
}: IntersectionObserverInit = {}): IntersectionObserverHookResult {
  const isIE11 = isIE && parseInt(browserVersion) < 12;
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    return () => {
      const observer = observerRef.current;
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const refCallback = useCallback(
    (node: IntersectionObserverHookRefCallbackNode) => {
      function getObserver() {
        // If there is no observer, then create it.
        // So, we only create it only once.
        if (!observerRef.current) {
          observerRef.current = new IntersectionObserver(
            ([entry]) => {
              setEntry(entry);
            },
            { root, rootMargin, threshold },
          );
        }
        return observerRef.current;
      }
      const observer = getObserver();
      observer.disconnect();
      if (node) {
        observer.observe(node);
      }
    },
    [root, rootMargin, threshold],
  );
  if (isIE11) {
    return [() => {}, { entry }];
  }
  return [refCallback, { entry }];
}
