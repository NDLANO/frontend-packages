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
import { colors, mq, breakpoints } from "@ndla/core";

interface Props extends ComponentPropsWithoutRef<"div"> {
  backgroundWide?: boolean;
}

const StyledPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const backgroundWideStyle = css`
  ${mq.range({ from: breakpoints.tablet })} {
    background-color: ${colors.brand.greyLightest};
  }
`;

export const PageContainer = ({ backgroundWide = false, ...rest }: Props) => (
  <StyledPageContainer css={backgroundWide ? backgroundWideStyle : undefined} {...rest} />
);

export default PageContainer;
