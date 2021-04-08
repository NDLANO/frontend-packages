/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, spacing } from '@ndla/core';

const Wrapper = styled.div`
  margin-bottom: ${spacing.small};
  display: flex;
  > div {
    &:first-of-type {
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
      &:first-of-type {
        border-top: 1px solid ${colors.brand.greyLight};
      }
    }
  }
`;

const FieldSection = ({ children }) => <Wrapper css={siblingCSS}>{children}</Wrapper>;

FieldSection.propTypes = {
  children: PropTypes.node,
};

export default FieldSection;
