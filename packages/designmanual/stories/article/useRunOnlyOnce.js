import { useRef, useEffect } from 'react';
import { uuid } from '@ndla/util';

const mountedInstances = [];

export function useRunOnlyOnce(id, callback) {
  const idRef = useRef(uuid());

  useEffect(() => {
    mountedInstances.push(idRef.current);
    if (mountedInstances.length === 1) {
      callback();
    }

    return () => {
      const index = mountedInstances.indexOf(idRef.current);
      mountedInstances.splice(index, 1);
    };
  }, []);

  return idRef.current;
}
