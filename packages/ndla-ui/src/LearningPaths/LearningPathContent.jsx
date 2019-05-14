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
import { mq, breakpoints } from '@ndla/core';

const StyledContent = styled.div`
  ${mq.range({ from: breakpoints.tabletWide })} {
    display: flex;
  }
  .c-article {
    // remove margin-top rule for .c-articles
    margin-top: 0;
  }
`;

export const LearningPathContent = ({ children }) => (
  <StyledContent>{children}</StyledContent>
);

LearningPathContent.propTypes = {
  children: PropTypes.node.isRequired,
};