/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ComponentPropsWithRef, forwardRef, useMemo } from "react";
import { cx } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { type JsxStyleProps } from "@ndla/styled-system/types";

interface Props extends JsxStyleProps, ComponentPropsWithRef<"pre"> {
  highlightedCode: string;
  format: string;
}

const Pre = styled("pre", {
  base: {
    border: "1px solid",
    borderColor: "stroke.subtle",
    borderLeft: "4px solid",
    borderLeftColor: "stroke.default",
    borderRadius: "xsmall",
    boxSizing: "border-box",
    overflowX: "auto",
    textStyle: "label.medium",
    fontFamily: "code",
    display: "block",
    whiteSpace: "pre",
    "& .linenumber": {
      display: "inline-block",
      paddingBlock: "0",
      paddingInline: "small",
      borderRight: "1px solid",
      borderColor: "stroke.subtle",
      width: "xxlarge",
      textAlign: "right",
      marginInlineEnd: "xsmall",
    },
    "& .linenumber[data-first]": {
      paddingBlockStart: "xsmall",
    },
    "& .linenumber[data-last]": {
      paddingBlockEnd: "xsmall",
    },
    // The remaining css is copied from the coy theme in prismjs. A lot of css is omitted due to styling clashes
    "& .token.comment, .token.block-comment, .token.prolog, .token.doctype, .token.cdata": {
      color: "#7d8b99",
    },
    "& .token.punctuation": {
      color: "#5f6364",
    },
    "& .token.property, .token.tag, .token.boolean, .token.number, .token.function-name, .token.constant, .token.symbol, .token.deleted":
      {
        color: "#c92c2c",
      },
    "& .token.selector, .token.attr-name, .token.string, .token.char, .token.function, .token.builtin, .token.inserted":
      {
        color: "#2f9c0a",
      },
    "& .token.operator, .token.entity, .token.url, .token.variable": {
      color: "#a67f59",
      background: "rgba(255, 255, 255, 0.5)",
    },
    "& .token.atrule, .token.attr-value, .token.keyword, .token.class-name": {
      color: "#1990b8",
    },
    "& .token.regex, .token.important": {
      color: "#e90",
    },
    "& .language-css .token.string, .style .token.string": {
      color: "#a67f59",
      background: "rgba(255, 255, 255, 0.5)",
    },
    "& .token.important": {
      fontWeight: "normal",
    },
    "& .token.bold": {
      fontWeight: "bold",
    },
    "& .token.italic": {
      fontStyle: "italic",
    },
    "& .token.entity": {
      cursor: "help",
    },
    "& .token.namespace": {
      opacity: "0.7",
    },
  },
});

export const Codeblock = forwardRef<HTMLPreElement, Props>(({ highlightedCode, format, className, ...props }, ref) => {
  const codeWithLineNumbers = useMemo(() => {
    return highlightedCode
      .split("\n")
      .map((line, i, arr) => {
        return `<span><span class="linenumber" ${i === 0 ? 'data-first=""' : ""} ${
          i === arr.length - 1 ? 'data-last=""' : ""
        }>${i + 1}</span>${line}</span>`;
      })
      .join("\n");
  }, [highlightedCode]);

  return (
    <Pre
      className={cx(`language-${format}`, className)}
      {...props}
      dangerouslySetInnerHTML={{ __html: codeWithLineNumbers }}
      ref={ref}
    />
  );
});

export default Codeblock;
