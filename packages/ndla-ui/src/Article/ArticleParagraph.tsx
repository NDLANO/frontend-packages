/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithoutRef, ReactNode } from "react";
import { styled } from "@ndla/styled-system/jsx";

interface Props extends ComponentPropsWithoutRef<"p"> {
  children?: ReactNode;
}

const StyledParagraph = styled("p", {
  base: {
    '&[data-align="center"]': {
      textAlign: "center",
    },
    '&:has(span[dir="rtl"])': {
      direction: "rtl",
    },
  },
});

export const ArticleParagraph = (props: Props) => <StyledParagraph {...props} />;
