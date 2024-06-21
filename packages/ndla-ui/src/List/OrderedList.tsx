/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CSSProperties, forwardRef, HTMLAttributes, useMemo } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts, spacing } from "@ndla/core";

export const LetterCSS = css`
  padding-left: ${spacing.medium};
  > li {
    counter-increment: level1;

    :before {
      content: counter(level1, upper-alpha) ".";
    }
    > ol[data-type="letters"] {
      > li {
        :before {
          content: counter(level1, lower-alpha) ".";
        }
        > ol[data-type="letters"] {
          padding-left: 0;
          > li {
            padding-left: ${spacing.normal};
            :before {
              left: ${spacing.small};
              position: absolute;
              content: counter(level1, lower-roman) ".";
              transform: translateX(-100%);
            }
            > ol[data-type="letters"] {
              padding-left: 0;
              > li {
                padding-left: ${spacing.normal};
                :before {
                  left: ${spacing.small};
                  position: absolute;
                  content: counter(level1, lower-roman) ".";
                  transform: translateX(-100%);
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const NumberCSS = css`
  padding-left: ${spacing.normal};
  > li {
    counter-increment: level1;
    :before {
      content: counter(level1, decimal) ".";
    }
    > ol:not([data-type="letters"]) {
      counter-reset: level2;
      &[data-count="true"] {
        counter-reset: level2 var(--start, 0);
      }
      > li {
        padding-left: ${spacing.nsmall};
        counter-increment: level2;
        :before {
          content: counter(level1, decimal) "." counter(level2, decimal) ".";
        }
        > ol:not([data-type="letters"]) {
          counter-reset: level3;
          &[data-count="true"] {
            counter-reset: level3 var(--start, 0);
          }
          > li {
            padding-left: ${spacing.medium};
            counter-increment: level3;
            :before {
              content: counter(level1, decimal) "." counter(level2, decimal) "." counter(level3, decimal) ".";
            }
            > ol:not([data-type="letters"]) {
              counter-reset: level4;
              &[data-count="true"] {
                counter-reset: level4 var(--start, 0);
              }

              > li {
                padding-left: ${spacing.large};
                counter-increment: level4;
                :before {
                  content: counter(level1, decimal) "." counter(level2, decimal) "." counter(level3, decimal) "."
                    counter(level4, decimal) ".";
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
  ${fonts.sizes("18px", "29px")};
  padding: 0;
  list-style-type: none;
  counter-reset: level1;
  margin: ${spacing.normal} 0 ${spacing.normal} ${spacing.normal};

  &[data-count="true"] {
    counter-reset: level1 var(--start, 0);
  }

  > li {
    margin-top: ${spacing.nsmall};
    padding-top: 0;
    position: relative;
    ::before {
      position: absolute;
      left: -${spacing.normal};
    }
    > ol {
      padding-bottom: 0;
      margin-left: 0;
    }
  }

  &:not([data-type="letters"]) {
    ${NumberCSS}
  }

  &[data-type="letters"] {
    ${LetterCSS}
  }
`;

interface Props extends HTMLAttributes<HTMLOListElement> {
  type?: "letters";
  start?: number;
}

const OrderedList = forwardRef<HTMLOListElement, Props>(({ type, children, start, ...rest }, ref) => {
  const style = useMemo(() => {
    return { "--start": start ? start - 1 : undefined } as CSSProperties;
  }, [start]);

  return (
    <StyledOl data-type={type} data-count={start != null} style={style} ref={ref} {...rest}>
      {children}
    </StyledOl>
  );
});

export default OrderedList;
