/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq, spacing, breakpoints } from "@ndla/core";

interface Props extends ComponentPropsWithoutRef<"div"> {
  wide?: boolean;
}

const StyledOneColumn = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: ${spacing.nsmall};
  padding-right: ${spacing.nsmall};

  ${mq.range({ from: breakpoints.mobileWide })} {
    padding-left: ${spacing.normal};
    padding-right: ${spacing.normal};
  }
  &::after {
    content: "" !important;
    display: block !important;
    clear: both !important;
  }
`;

const wideStyle = css`
  max-width: 1150px;
`;

export const OneColumn = ({ wide, ...rest }: Props) => <StyledOneColumn css={wide ? wideStyle : undefined} {...rest} />;

export default OneColumn;
