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

  // Child ordered lists
  ol {
    padding-left: 20px;
  }
  // List item
  li {
    margin-top: 24px;
  }

  &[data-type='letters'] {
    list-style-type: none;
    counter-reset: item;
    > li {
      counter-increment: item;
      &:before {
        position: absolute;
        transform: translateX(-100%);
        content: counter(item, upper-alpha) '.';
        padding-right: 0.25em;
      }

      > ol.ol-list--roman {
        > li {
          &:before {
            content: counter(item, lower-alpha) '.';
          }
          ol.ol-list--roman {
            padding-left: 28px;
            > li {
              &:before {
                content: counter(item, lower-roman) '.';
              }
            }
          }
        }
      }
    }
  }

  &:not([data-type='letters']) {
    list-style-type: none;
    counter-reset: item;
    li {
      counter-increment: item;
      &:before {
        position: absolute;
        transform: translateX(-100%);
        padding-right: 0.25em;
        content: counters(item, '.') '.';
      }

      > ol:not(.ol-list--roman) {
        padding-left: 32px;
        > li {
          > ol:not(.ol-list--roman) {
            padding-left: 48px;
            > li {
              > ol:not(.ol-list--roman) {
                padding-left: 64px;
                ol:not(.ol-list--roman) {
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
  start?: number;
  type?: 'letters';
}

const OrderedList = ({ type, children, start, ...rest }: Props) => {
  return <StyledOl {...rest}>{children}</StyledOl>;
};

export default OrderedList;
