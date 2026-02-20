/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type HTMLArkProps, ark } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";
import { forwardRef } from "react";
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

interface ErrorMessageTitleProps extends Omit<HTMLArkProps<"h1">, "color">, StyledProps, TextProps {}

const InternalErrorMessageTitle = forwardRef<HTMLHeadingElement, ErrorMessageTitleProps>(
  ({ textStyle = "heading.small", ...props }, ref) => <Heading textStyle={textStyle} {...props} ref={ref} />,
);

export const ErrorMessageTitle = withContext(InternalErrorMessageTitle, "title");

interface ErrorMessageDescriptionProps extends Omit<HTMLArkProps<"p">, "color">, StyledProps, TextProps {}

const InternalErrorMessageDescription = forwardRef<HTMLParagraphElement, ErrorMessageDescriptionProps>(
  ({ textStyle = "body.xlarge", ...props }, ref) => <Text textStyle={textStyle} {...props} ref={ref} />,
);

export const ErrorMessageDescription = withContext(InternalErrorMessageDescription, "description");
