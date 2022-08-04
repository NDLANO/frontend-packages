/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import SafeLink from '@ndla/safelink';
import { colors, fonts, misc, spacing } from '@ndla/core';
import { Search } from '@ndla/icons/common';

const Wrapper = styled.div`
  a {
    border: 2px solid ${colors.brand.tertiary};
    border-radius: 5px;
    font-weight: 600;
    ${fonts.sizes('16px', '24px')};
    padding: 10px 16px;
    box-shadow: none;
    transition: ${misc.transition.default};
    display: inline-flex;
    &:hover {
      border: 2px solid ${colors.brand.primary};
      color: ${colors.white};
      background: ${colors.brand.primary};
    }
  }
`;

const IconWrapper = styled.span`
  margin-right: ${spacing.xsmall};
`;

type Props = {
  to: string;
  text: string;
  target?: string;
};

const SearchButton = ({ to, text, target = '_self' }: Props) => (
  <Wrapper>
    <SafeLink to={to} target={target}>
      <IconWrapper>
        <Search style={{ width: '24px', height: '24px' }} />
      </IconWrapper>
      <span>{text}</span>
    </SafeLink>
  </Wrapper>
);

export default SearchButton;
