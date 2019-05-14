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
import { spacing } from '@ndla/core';

const StyledWrapper = styled.section`
  max-width: ${1402 + spacing.spacingUnit}px;
  padding: 0 ${spacing.normal};
  margin: 0 auto;
  .o-wrapper {
    padding-right: 0;
    padding-left: ${spacing.small};
  }
`;

export const LearningPathWrapper = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);

LearningPathWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};