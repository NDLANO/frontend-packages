/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from '@emotion/react';
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

export const LetterCSS = css`
  padding-left: ${spacing.medium};
  > li {
    counter-increment: level1;
    padding: ${spacing.nsmall} 0 0 0;

    :before {
      content: counter(level1, upper-alpha) '.';
      padding-right: ${spacing.small};
    }
    > ol[data-type='letters'] > li {
      :before {
        content: counter(level1, lower-alpha) '.';
      }
      > ol[data-type='letters'] > li {
        padding-left: ${spacing.normal};
        :before {
          position: absolute;
          content: counter(level1, lower-roman) '.';
          transform: translateX(-100%);
        }
        > ol[data-type='letters'] > li {
          padding-left: ${spacing.normal};
          :before {
            position: absolute;
            content: counter(level1, lower-roman) '.';
            transform: translateX(-100%);
          }
        }
      }
    }
  }
`;

export const NumberCSS = css`
  padding-left: ${spacing.nsmall};
  > li {
    counter-increment: level1;
    padding-top: ${spacing.nsmall};
    :before {
      content: counter(level1, decimal) '.';
      padding-right: ${spacing.nsmall};
    }
    > ol:not([data-type='letters']) {
      counter-reset: level2;
      ${generateListResets('level2')};
      > li {
        padding-left: ${spacing.nsmall};
        counter-increment: level2;
        :before {
          content: counter(level1, decimal) '.' counter(level2, decimal) '.';
        }
        > ol:not([data-type='letters']) {
          counter-reset: level3;
          ${generateListResets('level3')};
          > li {
            padding-left: ${spacing.medium};
            counter-increment: level3;
            :before {
              content: counter(level1, decimal) '.' counter(level2, decimal) '.' counter(level3, decimal) '.';
            }
            > ol:not([data-type='letters']) {
              counter-reset: level4;
              ${generateListResets('level4')};
              > li {
                padding-left: ${spacing.large};
                counter-increment: level4;
                :before {
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

const StyledOl = styled.ol`
  ${fonts.sizes('18px', '29px')};
  ${generateListResets('level1')};
  list-style-type: none;
  counter-reset: level1;

  padding-bottom: ${spacing.nsmall};

  &:not([data-type='letters']) {
    ${NumberCSS}
  }

  &[data-type='letters'] {
    ${LetterCSS}
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
