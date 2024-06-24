/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLArkProps, ark } from "@ark-ui/react";
import { cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps, RecipeVariantProps } from "@ndla/styled-system/types";

const messageBoxRecipe = cva({
  base: {
    display: "flex",
    alignItems: "flex-start",
    gap: "small",
    padding: "medium",
    border: "1px solid",
    borderRadius: "xsmall",
  },
  defaultVariants: {
    variant: "info",
  },
  variants: {
    variant: {
      info: {
        background: "surface.infoSubtle",
        borderColor: "stroke.subtle",
      },
      warning: {
        background: "surface.warningSubtle",
        borderColor: "stroke.warning",
      },
      success: {
        background: "surface.successSubtle",
        borderColor: "stroke.success",
      },
      error: {
        background: "surface.errorSubtle",
        borderColor: "stroke.error",
      },
    },
  },
});

export type MessageBoxVariantProps = RecipeVariantProps<typeof messageBoxRecipe>;

export type MessageBoxProps = HTMLArkProps<"div"> & JsxStyleProps & MessageBoxVariantProps;

export const MessageBox = styled(ark.div, messageBoxRecipe);
