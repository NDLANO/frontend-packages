/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { Cross } from '@ndla/icons/action';
import { colors, spacing, fonts } from '@ndla/core';

const buttonCSS = css`
  border: 0;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${spacing.medium};
  margin: 0;
  padding-top: ${spacing.small};
  span {
    color: ${colors.brand.primary};
    box-shadow: inset 0 -1px;
    font-weight: ${fonts.weight.semibold};
    ${fonts.sizes(16, 1.1)};
    padding-bottom: 2px;
  }
  .c-icon {
    fill: ${colors.text.light};
    margin-right: ${spacing.small};
  }
  &:hover,
  &:focus {
    span {
      box-shadow: none;
    }
    .c-icon {
      fill: ${colors.text.primary};
    }
  }
`;

const FieldRemoveButton = ({ children, type, ...rest }) => (
  // eslint-disable-next-line
  <button className={buttonCSS} type={type} {...rest}>
    <Cross className="c-icon--medium" />
    <span>{children}</span>
  </button>
);

FieldRemoveButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

FieldRemoveButton.defaultProps = {
  type: 'button',
};

export default FieldRemoveButton;
