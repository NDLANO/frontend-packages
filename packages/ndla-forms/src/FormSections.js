/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { colors, spacing } from 'ndla-core';

const Wrapper = styled.div`
  margin-bottom: ${spacing.small};
  display: flex;
  > div {
    &:first-child {
      width: 75%;
      + div {
        width: 25%;
        padding-left: ${spacing.normal};
        display: flex;
        align-items: flex-start;
      }
    }
  }
  &:empty {
    margin: 0;
  }
`;

const siblingCSS = css`
  + ${Wrapper} {
    > div {
      padding-top: ${spacing.small};
      &:first-child {
        border-top: 1px solid ${colors.brand.greyLight};
      }
    }
  }
`;

const FormSections = ({ children }) => (
  <Wrapper className={siblingCSS}>{children}</Wrapper>
);

FormSections.propTypes = {
  children: PropTypes.node,
};

export default FormSections;
