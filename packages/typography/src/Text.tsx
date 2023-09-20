/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentProps, ElementType, ReactNode, ComponentPropsWithoutRef } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { MarginVariant } from './Heading';

const baseStyle = css`
  font-family: ${fonts.sans};
  color: ${colors.text.primary};
  font-weight: ${fonts.weight.normal};
`;

const elementStyle: { [key in TextVariant]: SerializedStyles } = {
  ingress: css`
    ${fonts.size.text.ingress};
    ${mq.range({ from: breakpoints.tablet })} {
      ${fonts.sizes('24px', '35px')};
    }
  `,
  button: css`
    font-weight: ${fonts.weight.semibold};
    ${fonts.size.text.button};
    color: ${colors.brand.primary};
  `,
  content: css`
    font-family: ${fonts.serif};
    ${fonts.size.text.content};
  `,
  'content-alt': css`
    ${fonts.size.text.metaTextLarge};
  `,
  'meta-text-small': css`
    ${fonts.size.text.metaTextSmall};
  `,
  'meta-text-large': css`
    ${fonts.size.text.metaTextLarge};
  `,
};

const elementMarginStyle: { [key in MarginVariant]: SerializedStyles } = {
  xlarge: css`
    margin: ${spacing.normal} 0 ${spacing.small} 0;
    ${mq.range({ from: breakpoints.tablet })} {
      margin-bottom: ${spacing.normal};
    }
  `,
  large: css`
    margin-top: ${spacing.large};
    margin-bottom: ${spacing.small};
  `,
  small: css`
    margin-top: ${spacing.normal};
    margin-bottom: ${spacing.small};
  `,
  none: css`
    margin: 0px;
  `,
  normal: css``,
};

type TextVariant = 'ingress' | 'button' | 'content' | 'content-alt' | 'meta-text-small' | 'meta-text-large';

interface Props<T extends ElementType> {
  element?: T;
  textStyle: TextVariant;
  margin?: MarginVariant;
  children: ReactNode;
}

/**
 * Text-komponent som definerer styling for alle tekst-elementer (ingress, brødtekst, metatekst, knappetekst) som brukes i ed, ndla-frontend, listing.
 */
const Text = <T extends ElementType>({
  element,
  textStyle,
  margin = 'normal',
  children,
  ...rest
}: Props<T> & Omit<ComponentProps<T>, 'children'>) => {
  const Element = element ?? 'p';
  return (
    <Element css={[baseStyle, elementStyle[textStyle], elementMarginStyle[margin]]} {...rest}>
      {children}
    </Element>
  );
};

export default Text;
