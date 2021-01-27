import { useRef, useEffect } from 'react';
import { uuid } from '@ndla/util';

const mountedInstances = [];

export function useRunOnlyOnce(id, callback) {
  const idRef = useRef(uuid());

  useEffect(() => {
    mountedInstances.push(idRef.current);
    const index = mountedInstances.indexOf(idRef.current);
    if (mountedInstances.length === 1) {
      callback();
    }

    return () => {
      mountedInstances.splice(index, 1);
    };
  }, [callback]);

  return idRef.current;
}
