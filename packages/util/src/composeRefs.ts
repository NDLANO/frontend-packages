/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Ref, RefObject } from "react";

type PossibleRef<T> = Ref<T> | undefined;

const setRef = <T>(ref: PossibleRef<T>, value: T) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    const mutableRef = ref as RefObject<T>;
    mutableRef.current = value;
  }
};

/**
 * Applies multiple refs to a single element. This is useful for when you need to utilize a local ref
 * and a forwarded ref simultaneously.
 * Taken from https://github.com/chakra-ui/ark/blob/main/packages/frameworks/react/src/compose-refs.ts
 */
export const composeRefs = <T>(...refs: PossibleRef<T>[]) => {
  return (node: T): void => refs.forEach((ref) => setRef(ref, node));
};
