/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from '@emotion/react';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';
import { ComponentProps, ElementType, ReactNode } from 'react';
import { HeadingLevel, MarginVariant } from './types';

const style = css`
  font-weight: ${fonts.weight.bold};
  font-family: ${fonts.sans};
  ${fonts.sizes('22px', '30px')};
  margin: ${spacing.normal} 0 ${spacing.normal} 0;

  &[data-margin='none'] {
    margin: 0px;
  }
  &[data-margin='xlarge'] {
    margin: ${spacing.normal} 0 ${spacing.small} 0;
    ${mq.range({ from: breakpoints.tablet })} {
      margin-bottom: ${spacing.normal};
    }
  }
  &[data-margin='large'] {
    margin-top: ${spacing.large};
    margin-bottom: ${spacing.small};
  }
  &[data-margin='small'] {
    margin-top: ${spacing.normal};
    margin-bottom: ${spacing.small};
  }
  &[data-style='h1'] {
    font-family: ${fonts.serif};
    ${fonts.sizes('30px', '36px')};
    ${mq.range({ from: breakpoints.tablet })} {
      ${fonts.sizes('48px', '60px')};
      margin-bottom: ${spacing.normal};
    }
  }
  &[data-style='h1-resource'] {
    ${fonts.sizes('30px', '36px')};
    ${mq.range({ from: breakpoints.tablet })} {
      ${fonts.sizes('38px', '48px')};
    }
  }
  &[data-style='h2'] {
    ${fonts.sizes('28px', '36px')};
    ${mq.range({ from: breakpoints.tablet })} {
      ${fonts.sizes('30px', '38px')};
    }
  }
  &[data-style='h3'] {
    ${fonts.sizes('26px', '35px')};
    ${mq.range({ from: breakpoints.tablet })} {
      ${fonts.sizes('26px', '36px')};
    }
  }
  &[data-style='h4'] {
    ${fonts.sizes('22px', '30px')};
  }
  &[data-style='list-title'] {
    ${fonts.sizes('18px', '24px')};
    text-transform: uppercase;
  }
`;

type AllowedElements = HeadingLevel | 'p' | 'span';

interface Props<T extends AllowedElements> {
  element: T;
  headingStyle: 'h1' | 'h2' | 'h3' | 'h4' | 'h1-resource' | 'list-title' | 'default';
  serif?: boolean;
  /**
   * General usage
   * xlarge -> h1
   * large -> h2
   * normal -> anything else
   */
  margin?: MarginVariant;
  children: ReactNode;
}

/**
 * Heading-komponent som definerer styling for alle heading-elementer (h1, h1-ressurs, h2, h3, listetittel) som brukes i ed, ndla-frontend, listing.
 */
const Heading = <T extends AllowedElements>({
  element,
  children,
  headingStyle,
  margin = 'normal',
  serif,
  ...rest
}: Props<T> & ComponentProps<T>) => {
  const Element = element as ElementType;
  return (
    <Element css={style} data-serif={serif} data-style={headingStyle} data-margin={margin} {...rest}>
      {children}
    </Element>
  );
};

export default Heading;
