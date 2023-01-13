import { useRef, useState, useCallback, useEffect } from 'react';

const DEFAULT_ROOT_MARGIN = '0px';
const DEFAULT_THRESHOLD = [0];

export type IntersectionObserverHookRefCallback = (node: Element | null) => void;

interface Props extends IntersectionObserverInit {
  target?: HTMLElement | null;
}

export function useIntersectionObserver({
  root = null,
  target = null,
  rootMargin = DEFAULT_ROOT_MARGIN,
  threshold = DEFAULT_THRESHOLD,
}: Props = {}) {
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

  useEffect(() => {
    const observer = getObserver();

    if (target) {
      observer.observe(target);
    }
  }, [target, getObserver]);

  return { entry };
}
