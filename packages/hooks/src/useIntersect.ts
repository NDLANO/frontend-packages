import { useRef, useState, useCallback, useEffect, RefObject } from 'react';
import { isIE, browserVersion } from 'react-device-detect';

const DEFAULT_ROOT_MARGIN = '0px';
const DEFAULT_THRESHOLD = [0];

export type IntersectionObserverHookRefCallbackNode = Element | null;
export type IntersectionObserverHookRefCallback = (node: IntersectionObserverHookRefCallbackNode) => void;

export type IntersectionObserverHookResult = [
  IntersectionObserverHookRefCallback,
  { entry: IntersectionObserverEntry | undefined },
];

const IntersectionObserverBrowserSupport = () =>
  !(typeof window === 'undefined' || !('IntersectionObserver' in window) || !('IntersectionObserverEntry' in window));

// For more info:
// https://developers.google.com/web/updates/2016/04/intersectionobserver
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

interface Props extends IntersectionObserverInit {
  target?: HTMLElement | Document | null;
}

export function useIntersectionObserver({
  root = null,
  target = null,
  rootMargin = DEFAULT_ROOT_MARGIN,
  threshold = DEFAULT_THRESHOLD,
}: Props = {}): IntersectionObserverHookResult {
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

  const getObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
      },
      { root, rootMargin, threshold },
    );
    return observerRef.current;
  }, [root, rootMargin, threshold]);

  const refCallback = useCallback(
    (node: IntersectionObserverHookRefCallbackNode) => {
      const observer = getObserver();
      if (node) {
        observer.observe(node);
      }
    },
    [getObserver],
  );

  if (isIE11 || !IntersectionObserverBrowserSupport()) {
    return [() => {}, { entry }];
  }
  return [refCallback, { entry }];
}
