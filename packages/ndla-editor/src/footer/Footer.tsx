/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, colors } from '@ndla/core';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: -10px;
  right: -10px;
  background: #fff;
  z-index: 100;
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
`;

const StyledContentWrapper = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: ${spacing.small};
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    > hr {
      width: 1px;
      height: ${spacing.medium};
      background: ${colors.brand.greyLight};
      margin: 0 ${spacing.normal} 0 ${spacing.small};
      &:before {
        content: none;
      }
    }
  }
`;

type Props = {
  children: JSX.Element;
};

const Footer: React.FC<Props> = ({ children }) => (
  <StyledFooter>
    <StyledContentWrapper>{children}</StyledContentWrapper>
  </StyledFooter>
);

export default Footer;
