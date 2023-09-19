/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentProps, ElementType, ReactNode, ComponentPropsWithoutRef } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { breakpoints, colors, fonts, mq } from '@ndla/core';

const baseStyle = css`
  all: unset;
  font-family: ${fonts.sans};
  color: ${colors.text.primary};
  font-weight: ${fonts.weight.normal};
`;

const elementStyle: { [key in AllowedElements]: SerializedStyles } = {
  ingress: css`
    ${fonts.sizes('20px', '31px')};

    ${mq.range({ from: breakpoints.tablet })} {
      ${fonts.sizes('24px', '35px')};
    }
  `,
  button: css`
    font-weight: ${fonts.weight.semibold};
    ${fonts.sizes('16px', '24px')};
    color: ${colors.brand.primary};
  `,
  content: css`
    font-family: ${fonts.serif};
    ${fonts.sizes('18px', '29px')};

    > a {
      color: ${colors.brand.primary};
    }
  `,
  'content-alt': css`
    ${fonts.sizes('18px', '24px')};

    > a {
      color: ${colors.brand.primary};
    }
  `,
  'meta-text-small': css`
    ${fonts.sizes('16px', '24px')};
  `,
  'meta-text-large': css`
    ${fonts.sizes('18px', '24px')};
  `,
};

type AllowedElements = 'ingress' | 'button' | 'content' | 'content-alt' | 'meta-text-small' | 'meta-text-large';

interface Props<T extends ElementType> {
  element?: T;
  textStyle: AllowedElements;
  children: ReactNode;
}

/**
 * Text-komponent som definerer styling for alle tekst-elementer (ingress, brødtekst, metatekst, knappetekst) som brukes i ed, ndla-frontend, listing.
 */
const Text = <T extends ElementType>({
  element,
  textStyle,
  children,
  ...rest
}: Props<T> & Omit<ComponentProps<T>, keyof Props<T>>) => {
  const Element = element ?? 'p';
  return (
    <Element css={[baseStyle, elementStyle[textStyle]]} {...rest}>
      {children}
    </Element>
  );
};

export default Text;
