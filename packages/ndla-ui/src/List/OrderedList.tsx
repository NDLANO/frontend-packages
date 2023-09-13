/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { fonts, spacing } from '@ndla/core';
import { forwardRef, HTMLAttributes } from 'react';

export const generateListResets = (counterName: string) => {
  let styles = '';
  for (let $i = 0; $i < 50; $i++) {
    styles += ` 
      &.ol-reset-${$i} { counter-reset: ${counterName} ${$i - 1}; }  
    `;
  }

  return styles;
};

const StyledOl = styled.ol`
  margin-top: 0;
  margin-left: ${spacing.normal};
  ${fonts.sizes('18px', '29px')};
  list-style-type: none;
  padding-left: ${spacing.medium} !important;

  // Child ordered lists
  ol {
    padding-left: ${spacing.medium};
    margin-left: 0;
  }
  // List item
  li {
    margin-top: ${spacing.nsmall};

    p {
      margin-bottom: ${spacing.nsmall} !important;
    }
  }
  counter-reset: level1;
  ${generateListResets('level1')};

  &[data-type='letters'] {
    > li {
      &:before {
        content: counter(level1, upper-alpha) '.';
      }

      > ol[data-type='letters'] {
        > li:before {
          content: counter(level1, lower-alpha) '.';
        }
        ol[data-type='letters'] {
          > li:before {
            content: counter(level1, lower-roman) '.';
          }
        }
      }
    }
  }

  > li {
    min-height: ${spacing.normal};
    counter-increment: level1;
    &:before {
      position: absolute;
      transform: translateX(-100%);
      content: counter(level1, decimal) '.';
      padding-right: ${spacing.nsmall};
    }

    > ol:not([data-type='letters']) {
      counter-reset: level2;
      ${generateListResets('level2')};
      > li {
        padding-left: ${spacing.nsmall};
        counter-increment: level2;
        &:before {
          content: counter(level1, decimal) '.' counter(level2, decimal) '.';
        }
        > ol:not([data-type='letters']) {
          counter-reset: level3;
          ${generateListResets('level3')};
          > li {
            padding-left: ${spacing.medium};
            counter-increment: level3;
            &:before {
              content: counter(level1, decimal) '.' counter(level2, decimal) '.' counter(level3, decimal) '.';
            }
            > ol:not([data-type='letters']) {
              counter-reset: level4;
              ${generateListResets('level4')};
              > li {
                padding-left: ${spacing.large};
                counter-increment: level4;
                &:before {
                  content: counter(level1, decimal) '.' counter(level2, decimal) '.' counter(level3, decimal) '.'
                    counter(level4, decimal) '.';
                }
              }
            }
          }
        }
      }
    }
  }
`;

interface Props extends HTMLAttributes<HTMLOListElement> {
  type?: 'letters';
  start?: number;
}

const OrderedList = forwardRef<HTMLOListElement, Props>(({ type, children, ...rest }, ref) => {
  return (
    <StyledOl data-type={type} ref={ref} {...rest}>
      {children}
    </StyledOl>
  );
});

export default OrderedList;
