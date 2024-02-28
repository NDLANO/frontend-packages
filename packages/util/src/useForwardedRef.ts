/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ForwardedRef, useEffect, useRef } from "react";

const useForwardedRef = <T>(ref?: ForwardedRef<T>) => {
  const innerRef = useRef<T | null>(null);

  useEffect(() => {
    if (!ref) return;
    if (typeof ref === "function") {
      ref(innerRef.current);
    } else {
      ref.current = innerRef.current;
    }
  });
  return innerRef;
};

export default useForwardedRef;
