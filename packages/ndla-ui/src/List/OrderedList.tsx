/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { fonts, spacing, spacingUnit } from '@ndla/core';
import { forwardRef, HTMLAttributes } from 'react';

export const generateListResets = () => {
  let styles = '';
  for (let $i = 0; $i < 50; $i++) {
    styles += ` 
      ol.ol-reset-${$i} { counter-reset: item ${$i - 1} }  
    `;
  }

  return styles;
};

const listSpacing = {
  xlarge: `${spacingUnit * 2.5}px`,
  xxlarge: `${spacingUnit * 3.5}px`,
};

const StyledOl = styled.ol`
  margin-top: 0;
  margin-left: 0;
  ${fonts.sizes('18px', '29px')};
  list-style-type: none;
  padding-left: ${spacing.normal};

  // Child ordered lists
  ol {
    padding-left: ${spacing.medium};
  }
  // List item
  li {
    margin-top: ${spacing.normal};

    p {
      margin-bottom: ${spacing.normal} !important;
    }
  }

  &[data-type='letters'] {
    counter-reset: item 0;
    > li {
      counter-increment: item;
      &:before {
        position: absolute;
        transform: translateX(-100%);
        content: counter(item, upper-alpha) '.';
        padding-right: ${spacing.nsmall};
      }

      > ol[data-type='letters'] {
        > li:before {
          content: counter(item, lower-alpha) '.';
        }
        ol[data-type='letters'] {
          padding-left: ${spacing.normal};
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
        padding-right: ${spacing.nsmall};
        content: counters(item, '.') '.';
      }

      > ol:not([data-type='letters']) {
        padding-left: ${spacing.medium};
        > li {
          > ol:not([data-type='letters']) {
            padding-left: ${spacing.large};
            > li {
              > ol:not([data-type='letters']) {
                padding-left: ${listSpacing.xlarge};
                ol:not([data-type='letters']) {
                  padding-left: ${listSpacing.xxlarge};
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

const OrderedList = forwardRef<HTMLOListElement, Props>(({ type, children, ...rest }, ref) => {
  return (
    <StyledOl data-type={type} ref={ref} {...rest}>
      {children}
    </StyledOl>
  );
});

export default OrderedList;
