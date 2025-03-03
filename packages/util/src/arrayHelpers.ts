/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const groupBy = <T, K extends PropertyKey>(arr: T[] | undefined, predicate: (item: T) => K): Record<K, T[]> => {
  const result = {} as Record<K, T[]>;
  if (!arr) return result;

  for (const item of arr) {
    const key = predicate(item);
    if (!Object.hasOwn(result, key)) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
};

export const uniq = <T>(arr: T[] | undefined): T[] => Array.from(new Set(arr));

export const uniqBy = <T, K>(arr: T[] | undefined, predicate: (item: T) => K): T[] => {
  if (!arr || !arr.length) return [];
  const result = new Map<K, T>();

  for (const item of arr) {
    const key = predicate(item) as K;
    if (!result.has(key)) {
      result.set(key as K, item);
    }
  }

  return Array.from(result.values());
};

export const partition = <T>(arr: T[] | undefined, predicate: (item: T) => boolean): [T[], T[]] => {
  const truthy: T[] = [];
  const falsy: T[] = [];

  for (const item of arr ?? []) {
    if (predicate(item)) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  }

  return [truthy, falsy];
};

export const keyBy = <T, K extends PropertyKey>(arr: T[] | undefined, predicate: (item: T) => K): Record<K, T> => {
  const result = {} as Record<K, T>;
  if (!arr) return result;

  for (const item of arr) {
    const key = predicate(item);
    result[key] = item;
  }
  return result;
};

export const sortBy = <T, K>(arr: T[] | undefined, predicate: (value: T) => K): T[] => {
  if (!arr) return [];

  return [...arr].sort((a, b) => {
    const valA = predicate(a);
    const valB = predicate(b);

    // Handle null and undefined values like Lodash
    if (valA == null && valB == null) return 0;
    if (valA == null) return 1;
    if (valB == null) return -1;

    return valA < valB ? -1 : valA > valB ? 1 : 0;
  });
};
