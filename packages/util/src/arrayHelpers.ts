/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Groups an array of items by a key returned by the predicate function.
 * @param arr The array of items to group.
 * @param predicate A function converts the item to a key to group it by.
 * @returns An object where the keys are the result of the predicate function and the values are arrays of items with that key.
 * @example const grouped = groupBy([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 1, name: 'Charlie' }], item => item.id)
 * // => { 1: [{ id: 1, name: 'Alice' }, { id: 1, name: 'Charlie' }], 2: [{ id: 2, name: 'Bob' }] }
 */
export const groupBy = <T, K extends string | number>(
  arr: readonly T[] | undefined | null,
  predicate: (item: T) => K,
): Record<K, T[]> => {
  const result = {} as Record<K, T[]>;
  if (!arr || !Array.isArray(arr)) return result;

  for (const item of arr) {
    const key = predicate(item);
    if (!Object.hasOwn(result, key)) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
};
/**
 * Remove duplicate items from an array.
 * @param arr The array to remove duplicates from.
 * @returns A new array with duplicate items removed.
 * @example const unique = uniq([1, 2, 3, 1, 2, 4])
 * // => [1, 2, 3, 4]
 */
export const uniq = <T>(arr: readonly T[] | undefined | null): T[] =>
  Array.isArray(arr) ? Array.from(new Set(arr)) : [];

/**
 * Removes duplicate items from an array based the result of a predicate function. The predicate function is called with each item in the array and should return a key to compare items by.
 * The first item with a given key is kept, and all subsequent items with the same key are removed.
 * @param arr The array to remove duplicates from.
 * @param predicate A function that converts an item to a key to compare items by.
 * @returns A new array with duplicate items removed.
 * @example const unique = uniqBy([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 1, name: 'Charlie' }], item => item.id)
 * // => [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
 */
export const uniqBy = <T, K = any>(arr: readonly T[] | undefined | null, predicate: (item: T) => K): T[] => {
  if (!arr || !Array.isArray(arr) || !arr.length) return [];
  const result = new Map<K, T>();

  for (const item of arr) {
    const key = predicate(item) as K;
    if (!result.has(key)) {
      result.set(key as K, item);
    }
  }

  return Array.from(result.values());
};

/**
 * Separates an array into two arrays based on the result of a predicate function. The first array contains items where the predicate function returns true, and the second array contains items where the predicate function returns false.
 * @param arr The array to partition.
 * @param predicate A function that returns true or false for each item.
 * @returns A tuple containing two arrays: the first array contains items where the predicate function returns true, and the second array contains items where the predicate function returns false.
 * @example const [even, odd] = partition([1, 2, 3, 4, 5], n => n % 2 === 0)
 * // => [ [2, 4], [1, 3, 5] ]
 */
export const partition = <T>(arr: readonly T[] | undefined | null, predicate: (item: T) => boolean): [T[], T[]] => {
  const truthy: T[] = [];
  const falsy: T[] = [];

  if (Array.isArray(arr)) {
    for (const item of arr) {
      if (predicate(item)) {
        truthy.push(item);
      } else {
        falsy.push(item);
      }
    }
  }

  return [truthy, falsy];
};

/**
 * Converts an array of items into an object where the keys are the result of a predicate function and the values are the items.
 * The last item with a given key is kept, and all previous items with the same key are overwritten.
 * @param arr The array of items to convert.
 * @param predicate A function that converts an item to a key.
 * @returns An object where the keys are the result of the predicate function and the values are the items.
 * @example const keyed = keyBy([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], item => item.id)
 * // => { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }
 */
export const keyBy = <T, K extends string | number = string>(
  arr: readonly T[] | undefined | null,
  predicate: (item: T) => K,
): Record<K, T> => {
  const result = {} as Record<K, T>;
  if (!arr || !Array.isArray(arr)) return result;

  for (const item of arr) {
    const key = predicate(item);
    result[key] = item;
  }
  return result;
};

/**
 * Sorts an array of items based on the result of a predicate function. This is a stable sort, so items with the same value will retain their original order.
 * Beware; Returning mixed values from the predicate function can yield unexpected results. For best results, return strings, booleans, numbers or null/undefined.
 * @param arr The array of items to sort.
 * @param predicate A function that converts an item to a value to sort by.
 * @returns A new array with the items sorted by the result of the predicate function.
 * @example const sorted = sortBy([{ id: 2, name: 'Bob' }, { id: 1, name: 'Alice' }], item => item.id)
 * // => [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
 */
export const sortBy = <T, K = any>(arr: readonly T[] | undefined | null, predicate: (value: T) => K): T[] => {
  if (!arr || !Array.isArray(arr)) return [];

  return [...arr].sort((a, b) => {
    const valA = predicate(a);
    const valB = predicate(b);

    // Handle NaN values like Lodash
    if (Number.isNaN(valA) && Number.isNaN(valB)) return 0;
    if (Number.isNaN(valA)) return 1;
    if (Number.isNaN(valB)) return -1;

    // Handle null and undefined values like Lodash
    if (valA == null && valB == null) return 0;
    if (valA == null) return 1;
    if (valB == null) return -1;

    return valA < valB ? -1 : valA > valB ? 1 : 0;
  });
};
