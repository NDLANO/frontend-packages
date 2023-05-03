/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { fonts } from '@ndla/core';
import { HTMLAttributes } from 'react';

export const generateListResets = () => {
  let styles = '';
  for (let $i = 0; $i < 50; $i++) {
    styles += ` 
      ol.ol-reset-${$i} { counter-reset: item ${$i - 1} }  
    `;
  }

  return styles;
};

const StyledOl = styled.ol`
  margin-top: 0;
  margin-left: 0;
  ${fonts.sizes('18px', '29px')};
  list-style-type: none;
  padding-left: 24px;

  // Child ordered lists
  ol {
    padding-left: 24px;
  }
  // List item
  li {
    margin-top: 24px;
  }

  &[data-type='letters'] {
    counter-reset: item 0;
    > li {
      counter-increment: item;
      &:before {
        position: absolute;
        transform: translateX(-100%);
        content: counter(item, upper-alpha) '.';
        padding-right: 0.25em;
      }

      > ol[data-type='letters'] {
        > li:before {
          content: counter(item, lower-alpha) '.';
        }
        ol[data-type='letters'] {
          padding-left: 28px;
          > li:before {
            content: counter(item, lower-roman) '.';
          }
        }
      }
    }
  }

  &:not([data-type='letters']) {
    counter-reset: item 0;
    > li {
      counter-increment: item;
      &:before {
        position: absolute;
        transform: translateX(-100%);
        padding-right: 0.25em;
        content: counters(item, '.') '.';
      }

      > ol:not([data-type='letters']) {
        padding-left: 32px;
        > li {
          > ol:not([data-type='letters']) {
            padding-left: 48px;
            > li {
              > ol:not([data-type='letters']) {
                padding-left: 64px;
                ol:not([data-type='letters']) {
                  padding-left: 80px;
                }
              }
            }
          }
        }
      }
    }
  }
  // List reset classes
  ${generateListResets()}
`;

interface Props extends HTMLAttributes<HTMLOListElement> {
  type?: 'letters';
  start?: number;
}

const OrderedList = ({ type, children, ...rest }: Props) => {
  return (
    <StyledOl data-type={type} {...rest}>
      {children}
    </StyledOl>
  );
};

export default OrderedList;
