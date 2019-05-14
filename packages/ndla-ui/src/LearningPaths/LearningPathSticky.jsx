/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { colors, spacing, animations } from '@ndla/core';
import { SafeLink } from '@ndla/ui';

const StyledFooter = styled.nav`
  display: flex;
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  padding: 0 ${spacing.medium};
  background: ${colors.brand.lighter};
  align-items: center;
  justify-content: space-between;
  ${animations.fadeInBottom()}
`;

export const LearningPathSticky = ({ children }) => (
  <StyledFooter>{children}</StyledFooter>
);

LearningPathSticky.propTypes = {
  children: PropTypes.node,
};

export const LearningPathStickySibling = ({ name, to }) => (
  <SafeLink to={to}>
    {name}
  </SafeLink>
);

LearningPathSticky.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};