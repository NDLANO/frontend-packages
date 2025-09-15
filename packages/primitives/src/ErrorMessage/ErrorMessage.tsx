/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { type HTMLArkProps, ark } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";
import { Heading, Text, type TextProps } from "../Text";

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

export const ErrorMessageRoot = withProvider(ark.article, "root", { baseComponent: true });

export const ErrorMessageContent = withContext(ark.div, "content", { baseComponent: true });

export const ErrorMessageActions = withContext(ark.div, "actions", { baseComponent: true });

const InternalErrorMessageTitle = forwardRef<HTMLHeadingElement, HTMLArkProps<"h1"> & StyledProps & TextProps>(
  ({ textStyle = "heading.small", ...props }, ref) => <Heading textStyle={textStyle} {...props} ref={ref} />,
);

export const ErrorMessageTitle = withContext(InternalErrorMessageTitle, "title");

const InternalErrorMessageDescription = forwardRef<HTMLParagraphElement, HTMLArkProps<"p"> & StyledProps & TextProps>(
  ({ textStyle = "body.xlarge", ...props }, ref) => <Text textStyle={textStyle} {...props} ref={ref} />,
);

export const ErrorMessageDescription = withContext(InternalErrorMessageDescription, "description");
