/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { HTMLArkProps, ark } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "../createStyleContext";
import { Heading, Text, TextProps } from "../Text";

const errorMessageRecipe = sva({
  slots: ["root", "content", "actions", "title", "description"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "xxlarge",
      alignItems: "center",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "medium",
      alignItems: "center",
    },
    actions: {
      display: "flex",
      flexDirection: "column",
      gap: "xsmall",
      alignItems: "center",
    },
    title: {
      textAlign: "center",
    },
    description: {
      textAlign: "center",
    },
  },
});

const { withProvider, withContext } = createStyleContext(errorMessageRecipe);

export const ErrorMessageRoot = withProvider<HTMLElement, HTMLArkProps<"article"> & JsxStyleProps>(
  ark.article,
  "root",
  { baseComponent: true },
);

export const ErrorMessageContent = withContext<HTMLDivElement, HTMLArkProps<"div"> & JsxStyleProps>(
  ark.div,
  "content",
  { baseComponent: true },
);

export const ErrorMessageActions = withContext<HTMLDivElement, HTMLArkProps<"div"> & JsxStyleProps>(
  ark.div,
  "actions",
  { baseComponent: true },
);

const InternalErrorMessageTitle = forwardRef<HTMLHeadingElement, HTMLArkProps<"h1"> & JsxStyleProps & TextProps>(
  ({ textStyle = "heading.small", ...props }, ref) => <Heading textStyle={textStyle} {...props} ref={ref} />,
);

export const ErrorMessageTitle = withContext<HTMLHeadingElement, HTMLArkProps<"h1"> & JsxStyleProps & TextProps>(
  InternalErrorMessageTitle,
  "title",
);

const InternalErrorMessageDescription = forwardRef<HTMLParagraphElement, HTMLArkProps<"p"> & JsxStyleProps & TextProps>(
  ({ textStyle = "body.xlarge", ...props }, ref) => <Text textStyle={textStyle} {...props} ref={ref} />,
);

export const ErrorMessageDescription = withContext<HTMLParagraphElement, HTMLArkProps<"p"> & JsxStyleProps & TextProps>(
  InternalErrorMessageDescription,
  "description",
);
