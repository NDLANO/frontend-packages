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
import { Heading } from "@ndla/typography";

interface Props extends HTMLAttributes<HTMLDetailsElement> {}

export const ExpandableBox = ({ children, ...rest }: Props) => {
  return <details {...rest}>{children}</details>;
};

interface SummaryProps extends HTMLAttributes<HTMLElement> {}

const StyledHeading = styled(Heading)`
  font-weight: ${fonts.weight.normal};
  text-transform: none !important;
`;

export const ExpandableBoxSummary = ({ children, ...rest }: SummaryProps) => {
  return (
    <summary {...rest}>
      <StyledHeading element="h3" headingStyle="list-title" margin="none">
        {children}
      </StyledHeading>
    </summary>
  );
};
