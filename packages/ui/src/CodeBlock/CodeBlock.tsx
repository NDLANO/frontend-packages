/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { cx } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";
import { type ComponentPropsWithRef, forwardRef, useMemo } from "react";

interface Props extends StyledProps, ComponentPropsWithRef<"pre"> {
  highlightedCode: string;
  format: string;
}

const Pre = styled("pre", {});

export const CodeBlock = forwardRef<HTMLPreElement, Props>(({ highlightedCode, format, className, ...props }, ref) => {
  const codeWithLineNumbers = useMemo(() => {
    return highlightedCode
      .split("\n")
      .map((line, i) => {
        return `<span class="linenumber">${i + 1}</span>${line}`;
      })
      .join("\n");
  }, [highlightedCode]);

  return (
    <Pre
      className={cx("codeblock", `language-${format}`, className)}
      {...props}
      dangerouslySetInnerHTML={{ __html: codeWithLineNumbers }}
      ref={ref}
    />
  );
});
