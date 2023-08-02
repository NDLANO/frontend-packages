/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLProps, ReactNode } from 'react';
import { css } from '@emotion/react';
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

interface Props extends Omit<HTMLProps<HTMLButtonElement>, 'type'> {
  children?: ReactNode;
  type?: 'submit' | 'reset' | 'button';
}
const FieldRemoveButton = ({ children, type = 'button', ...rest }: Props) => (
  // eslint-disable-next-line react/button-has-type
  <button css={buttonCSS} type={type} {...rest}>
    <Cross className="c-icon--medium" aria-hidden={true} />
    <span>{children}</span>
  </button>
);

export default FieldRemoveButton;
