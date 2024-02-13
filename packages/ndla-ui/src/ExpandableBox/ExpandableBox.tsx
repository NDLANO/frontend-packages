/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { fonts } from "@ndla/core";

interface Props extends HTMLAttributes<HTMLDetailsElement> {}

export const ExpandableBox = ({ children, ...rest }: Props) => {
  return <details {...rest}>{children}</details>;
};

interface SummaryProps extends HTMLAttributes<HTMLElement> {}

const StyledSummary = styled.summary`
  & > * {
    display: inline;
    font-size: ${fonts.size.text.metaText.medium};
    font-weight: ${fonts.weight.normal};
  }
`;

export const ExpandableBoxSummary = ({ children, ...rest }: SummaryProps) => {
  return <StyledSummary {...rest}>{children}</StyledSummary>;
};
