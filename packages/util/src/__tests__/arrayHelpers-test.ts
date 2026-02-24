/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { describe, it, expect } from "vitest";
import { groupBy, keyBy, partition, sortBy, uniq, uniqBy } from "../arrayHelpers";

describe("arrayHelpers", () => {
  describe("groupBy", () => {
    it("groups an array of items by a key returned by the predicate function", () => {
      const items = [
        { id: 1, name: "foo" },
        { id: 2, name: "bar" },
        { id: 3, name: "foo" },
      ] as const;
      const result = groupBy(items, (item) => item.name);
      expect(result).toEqual({
        foo: [
          { id: 1, name: "foo" },
          { id: 3, name: "foo" },
        ],
        bar: [{ id: 2, name: "bar" }],
      });
      // asserts that the type generated from the predicate function is used as the key type
      expect(result.foo).toHaveLength(2);
    });
    it("groups with case sensitivity", () => {
      const items = [
        { id: 1, name: "Foo" },
        { id: 2, name: "bar" },
        { id: 3, name: "foo" },
      ] as const;
      const result = groupBy(items, (item) => item.name);
      expect(result).toEqual({
        foo: [{ id: 3, name: "foo" }],
        Foo: [{ id: 1, name: "Foo" }],
        bar: [{ id: 2, name: "bar" }],
      });
    });
    it("returns an empty object if the input array is undefined or empty", () => {
      expect(groupBy(undefined, () => "")).toEqual({});
      expect(groupBy([], () => "")).toEqual({});
    });
    it("handles undefined predicate results", () => {
      const items = [
        { id: 1, name: undefined },
        { id: 2, name: "bar" },
        { id: 3, name: "foo" },
      ] as const;
      const result = groupBy(items, (item) => item.name ?? "undefined");
      expect(result).toEqual({
        undefined: [{ id: 1, name: undefined }],
        bar: [{ id: 2, name: "bar" }],
        foo: [{ id: 3, name: "foo" }],
      });
    });
    it("handles empty string as a key", () => {
      const items = [
        { id: 1, name: "" },
        { id: 2, name: "foo" },
        { id: 3, name: "" },
      ] as const;
      const result = groupBy(items, (item) => item.name);
      expect(result).toEqual({
        "": [
          { id: 1, name: "" },
          { id: 3, name: "" },
        ],
        foo: [{ id: 2, name: "foo" }],
      });
      expect(result[""]).toHaveLength(2);
    });
    it("gracefully handles non-array values", () => {
      const result = groupBy(2 as any, (x: any) => x);
      expect(result).toEqual({});
    });
    it("handles dynamically computed keys", () => {
      const items = [
        { id: 1, value: 5 },
        { id: 2, value: 10 },
        { id: 3, value: 5 },
      ] as const;
      const result = groupBy(items, (item) => `group${item.value}`);
      expect(result).toEqual({
        group5: [
          { id: 1, value: 5 },
          { id: 3, value: 5 },
        ],
        group10: [{ id: 2, value: 10 }],
      });
      // type safety
      expect(result.group5.length).toBe(2);
    });
    it("does not mutate the input array", () => {
      const items = [
        { id: 1, type: "A" },
        { id: 2, type: "B" },
      ];
      const copy = [...items];
      groupBy(items, (item) => item.type);
      expect(items).toEqual(copy);
    });
  });
  describe("uniq", () => {
    it("removes duplicate numbers from an array", () => {
      const arr = [1, 2, 3, 1, 2, 4];
      const res = uniq(arr);
      expect(res).toEqual([1, 2, 3, 4]);
    });
    it("removes duplicate strings from an array", () => {
      const arr = ["foo", "bar", "foo", "baz"];
      const res = uniq(arr);
      expect(res).toEqual(["foo", "bar", "baz"]);
    });
    it("removes duplicate objects from an array", () => {
      const obj1 = { id: 1, name: "foo" };
      const obj2 = { id: 2, name: "bar" };
      const arr = [obj1, obj2, obj1];
      const res = uniq(arr);
      expect(res).toEqual([
        { id: 1, name: "foo" },
        { id: 2, name: "bar" },
      ]);
    });
    it("gracefully handles non array values", () => {
      expect(uniq(2 as any)).toEqual([]);
    });
    it("returns an empty array if the input array is undefined or empty", () => {
      expect(uniq(undefined)).toEqual([]);
      expect(uniq([])).toEqual([]);
    });
    it("removes duplicate null or undefined values from an array", () => {
      const arr = [null, undefined, null, undefined, 1, 2];
      const res = uniq(arr);
      expect(res).toEqual([null, undefined, 1, 2]);
    });
    it("removes duplicates from an array with mixed types", () => {
      const arr = [1, "foo", 2, "bar", 1, "foo"];
      const res = uniq(arr);
      expect(res).toEqual([1, "foo", 2, "bar"]);
    });
    it("deduplicates NaN values", () => {
      const arr = [NaN, 1, NaN, 2];
      const res = uniq(arr);
      expect(res).toEqual([NaN, 1, 2]);
    });
    it("removes duplicate NaN along with other values", () => {
      const arr = [NaN, null, NaN, undefined, NaN, 42];
      const res = uniq(arr);
      expect(res).toEqual([NaN, null, undefined, 42]);
    });
    it("removes duplicates from an array with mixed primitives and objects", () => {
      const obj = { id: 1 };
      const arr = [1, obj, 1, obj];
      const res = uniq(arr);
      expect(res).toEqual([1, obj]);
    });
  });
  describe("uniqBy", () => {
    it("removes duplicate items from an array based on the result of a predicate function", () => {
      const arr = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 1, name: "Charlie" },
      ];
      const res = uniqBy(arr, (item) => item.id);
      expect(res).toEqual([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]);
    });
    it("should return an empty array for an empty input array", () => {
      const result = uniqBy<{ id: string }>([], (item) => item.id);
      expect(result).toEqual([]);
    });
    it("should handle `null` and `undefined` as valid keys", () => {
      const arr = [null, undefined, null, undefined, 1];
      const result = uniqBy(arr, (item) => item);
      expect(result).toEqual([null, undefined, 1]);
    });
    it("should handle falsy values correctly", () => {
      const arr = [{}, { name: "John" }];
      const result = uniqBy(arr, (_) => "");
      expect(result).toEqual([{}]);
    });
    it("should treat different object references as distinct keys", () => {
      const arr = [{}, {}, {}];
      const result = uniqBy(arr, (item) => item);
      expect(result).toEqual([{}, {}, {}]);
    });
    it("should handle object key comparison properly", () => {
      const arr = [{ id: 1 }, { id: 1 }];
      const result = uniqBy(arr, (item) => ({ id: item.id }));
      expect(result).toEqual([{ id: 1 }, { id: 1 }]);
    });
    it("should gracefully handle non-array values", () => {
      const result = uniqBy(2 as any, (item) => item);
      expect(result).toEqual([]);
    });
    it("should handle deep object equality using a serialized key", () => {
      const arr = [
        { id: 1, nested: { key: "value" } },
        { id: 1, nested: { key: "value" } },
      ];
      const result = uniqBy(arr, (item) => JSON.stringify(item.nested));
      expect(result).toEqual([{ id: 1, nested: { key: "value" } }]);
    });
    it("should handle NaN correctly as a key", () => {
      const arr = [NaN, NaN, 1];
      const result = uniqBy(arr, (item) => item);
      expect(result).toEqual([NaN, 1]);
    });
    it("should retain the first item when multiple items have the same key", () => {
      const arr = [
        { id: 1, name: "Alice" },
        { id: 1, name: "Bob" },
      ];
      const result = uniqBy(arr, (item) => item.id);
      expect(result).toEqual([{ id: 1, name: "Alice" }]);
    });
    it("should deduplicate based on computed key", () => {
      const arr = [
        { id: 1, name: "Alice" },
        { id: 1, name: "Bob" },
      ];
      const result = uniqBy(arr, (item) => `${item.id}_${item.name[0]}`);
      expect(result).toEqual([
        { id: 1, name: "Alice" },
        { id: 1, name: "Bob" },
      ]);
    });
  });
  describe("partition", () => {
    it("partitions an array based on a predicate function", () => {
      const arr = [1, 2, 3, 4, 5];
      const [even, odd] = partition(arr, (n) => n % 2 === 0);
      expect(even).toEqual([2, 4]);
      expect(odd).toEqual([1, 3, 5]);
    });
    it("returns an empty array for an empty or undefined input array", () => {
      const [even, odd] = partition(undefined, (_) => true);
      expect(even).toEqual([]);
      expect(odd).toEqual([]);

      const [even2, odd2] = partition([], (_) => true);
      expect(even2).toEqual([]);
      expect(odd2).toEqual([]);
    });
    it("should handle arrays with mixed truthy and falsy values", () => {
      const result = partition([0, 1, false, true, "", "hello"], Boolean);
      expect(result).toEqual([
        [1, true, "hello"],
        [0, false, ""],
      ]);
    });
    it("should handle arrays with only falsy values", () => {
      const result = partition([0, false, "", null, undefined], (item: any) => item);
      expect(result).toEqual([[], [0, false, "", null, undefined]]);
    });
    it("should handle arrays with only truthy values", () => {
      const result = partition([1, "hello", true, {}], (item: any) => item);
      expect(result).toEqual([[1, "hello", true, {}], []]);
    });
    it("should handle arrays with non-array-like values", () => {
      const result = partition(null as any, (item: any) => item);
      expect(result).toEqual([[], []]);
    });
    it("should gracefully handle non-array values", () => {
      const result = partition(2 as any, (_) => true);
      expect(result).toEqual([[], []]);
    });
  });
  describe("keyBy", () => {
    it("converts an array of items into an object where the keys are the result of a predicate function", () => {
      const arr = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ];
      const res = keyBy(arr, (item) => item.id);
      expect(res).toEqual({
        1: { id: 1, name: "Alice" },
        2: { id: 2, name: "Bob" },
      });
    });
    it("should return an empty object when the input is undefined or an empty array", () => {
      const arr: any[] = [];
      const result = keyBy(arr, (item) => item.id);
      expect(result).toEqual({});
      const nullRes = keyBy<{ id: string }>(null, (item) => item.id);
      expect(nullRes).toEqual({});
    });
    it("should overwrite items with the same key", () => {
      const arr = [
        { id: 1, name: "John" },
        { id: 1, name: "Jane" },
      ];
      const result = keyBy(arr, (item) => item.id);
      expect(result).toEqual({ 1: { id: 1, name: "Jane" } });
    });
    it("should handle an array of primitives (strings)", () => {
      const arr = ["a", "b", "c"];
      const result = keyBy(arr, (item) => item);
      expect(result).toEqual({ a: "a", b: "b", c: "c" });
    });
    it("should work when the key is a string or number not related to object properties", () => {
      const arr = [{ name: "John" }, { name: "Ola" }];
      const result = keyBy(arr, (item) => item.name.length);
      expect(result).toEqual({ 4: { name: "John" }, 3: { name: "Ola" } });
    });
    it("should be case-sensitive for string keys", () => {
      const arr = [{ name: "john" }, { name: "John" }];
      const result = keyBy(arr, (item) => item.name);
      expect(result).toEqual({ john: { name: "john" }, John: { name: "John" } });
    });
    it("should gracefully handle non-array values", () => {
      const result = keyBy(2 as any, (_) => 0);
      expect(result).toEqual({});
    });
    // TODO: Lodash falls back to index of the item if the key is undefined
    // it("should handle undefined or null as key values correctly", () => {
    // const arr = [{ id: undefined }, { id: null }];
    //   const result = keyBy(arr, (item) => item.id);
    //   expect(result).toEqual({ undefined: { id: undefined }, null: { id: null } });
    // });
  });
  describe("sortBy", () => {
    it("should sort an array of items based on the result of a predicate function", () => {
      const arr = [
        { id: 2, name: "Bob" },
        { id: 1, name: "Alice" },
      ];
      const res = sortBy(arr, (item) => item.id);
      expect(res).toEqual([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]);
    });
    it("should return an empty array for an empty or undefined input array", () => {
      const result = sortBy(undefined, (_) => 0);
      expect(result).toEqual([]);

      const result2 = sortBy([], (_) => 0);
      expect(result2).toEqual([]);
    });
    it("should place null and undefined at the end in ascending order", () => {
      const result = sortBy([1, null, 3, undefined, 2], (x) => x);
      expect(result).toEqual([1, 2, 3, null, undefined]);
    });
    it("should place truthy values at the end of the array. The result should be stable (order of appearance)", () => {
      const arr = [1, 4, 5, 2, 3, 8];
      const result = sortBy(arr, (x) => x % 2 === 0);
      expect(result).toEqual([1, 5, 3, 4, 2, 8]);
    });
    it("places truthy values after falsy values", () => {
      const arr = [true, false, false, true, true, false];
      const result = sortBy(arr, (x) => x);
      expect(result).toEqual([false, false, false, true, true, true]);
    });
    it("NaN should be moved to the end of the array", () => {
      const arr = [
        { count: NaN },
        { count: 5 },
        { count: null },
        { count: 3 },
        { count: undefined },
        { count: NaN },
        { count: 1 },
      ];
      const result = sortBy(arr, (x) => x.count);
      expect(result).toEqual([
        { count: 1 },
        { count: 3 },
        { count: 5 },
        { count: null },
        { count: undefined },
        { count: NaN },
        { count: NaN },
      ]);
    });
    it("should handle a complex predicate and sort by object properties", () => {
      const obj1 = { age: 25, name: "Alice" };
      const obj2 = { age: 30, name: "Bob" };
      const result = sortBy([obj2, obj1], (x) => x.age);
      expect(result).toEqual([obj1, obj2]); // Sort by age
    });
    it("should sort objects with custom toString() methods", () => {
      const obj1 = { toString: () => "a" };
      const obj2 = { toString: () => "b" };
      const obj3 = { toString: () => "c" };
      const result = sortBy([obj3, obj1, obj2], (x) => x.toString());
      expect(result).toEqual([obj1, obj2, obj3]);
    });
    it("should gracefully handle non-array values", () => {
      const res = sortBy(2 as any, (_) => 0);
      expect(res).toEqual([]);
    });
  });
});
