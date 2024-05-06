/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithoutRef, ReactNode } from "react";
import styled from "@emotion/styled";

interface Props extends ComponentPropsWithoutRef<"p"> {
  children?: ReactNode;
}

const StyledParagraph = styled.p`
  &[data-align="center"] {
    text-align: center;
  }
`;

export const ArticleParagraph = (props: Props) => <StyledParagraph {...props} />;
