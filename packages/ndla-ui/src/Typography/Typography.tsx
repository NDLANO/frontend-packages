/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentProps, ElementType, ReactNode } from 'react';
import { css } from '@emotion/react';
import { breakpoints, colors, fonts, mq } from '@ndla/core';

interface StyleProps {
  element: string;
}

const style = ({ element }: StyleProps) => css`
  font-family: ${fonts.sans};
  color: ${colors.text.primary};
  font-weight: ${fonts.weight.normal};

  ${element === 'h1' &&
  css`
    font-family: ${fonts.serif};
    font-weight: ${fonts.weight.bold};
    ${fonts.sizes('48px', '60px')};

    ${mq.range({ until: breakpoints.tablet })} {
      ${fonts.sizes('30px', '36px')};
    }
  `}
  ${element === 'h1-resource' &&
  css`
    font-weight: ${fonts.weight.bold};
    ${fonts.sizes('38px', '48px')};

    ${mq.range({ until: breakpoints.tablet })} {
      ${fonts.sizes('30px', '36px')};
    }
  `}
${element === 'h2' &&
  css`
    font-weight: ${fonts.weight.bold};
    ${fonts.sizes('30px', '38px')};

    ${mq.range({ until: breakpoints.tablet })} {
      ${fonts.sizes('28px', '36px')};
    }
  `}
${element === 'h3' &&
  css`
    font-weight: ${fonts.weight.bold};
    ${fonts.sizes('26px', '36px')};

    ${mq.range({ until: breakpoints.tablet })} {
      ${fonts.sizes('26px', '35px')};
    }
  `}
  ${element === 'h4' &&
  css`
    font-weight: ${fonts.weight.bold};
    ${fonts.sizes('22px', '30px')};

    ${mq.range({ until: breakpoints.tablet })} {
      ${fonts.sizes('22px', '30px')};
    }
  `}
 ${element === 'list-title' &&
  css`
    font-weight: ${fonts.weight.bold};
    ${fonts.sizes('18px', '24px')};
    text-transform: uppercase;
  `}
  ${element === 'ingress' &&
  css`
    ${fonts.sizes('24px', '35px')};

    ${mq.range({ until: breakpoints.tablet })} {
      ${fonts.sizes('20px', '31px')};
    }
  `}
  ${element === 'button-text' &&
  css`
    font-weight: ${fonts.weight.semibold};
    ${fonts.sizes('16px', '24px')};
    color: ${colors.brand.primary};
  `}
${element === 'content' &&
  css`
    font-family: ${fonts.serif};
    ${fonts.sizes('18px', '29px')};

    > a {
      color: ${colors.brand.primary};
    }
  `}
  ${element === 'content-alt' &&
  css`
    ${fonts.sizes('18px', '24px')};

    > a {
      color: ${colors.brand.primary};
    }
  `}
  ${element === 'meta-text-small' &&
  css`
    ${fonts.sizes('16px', '24px')};
  `}
  ${element === 'meta-text-large' &&
  css`
    ${fonts.sizes('18px', '24px')};
  `}
`;

const ElementMap = {
  h1: 'h1',
  'h1-resource': 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'list-title': 'h2',
  ingress: 'p',
  'button-text': 'span',
  content: 'p', // Brødtekst
  'content-alt': 'p', // Brødtekst alt
  'meta-text-small': 'p',
  'meta-text-large': 'p',
} as const;

type AllowedElements = keyof typeof ElementMap;
type MappedToValidHtmlElement<T extends AllowedElements> = (typeof ElementMap)[T];

interface Props<T extends AllowedElements> {
  element: T;
  children: ReactNode;
}

/**
 * Typography-komponent som definerer styling for alle tekst-elementer som brukes i ed, ndla-frontend, listing.
 * Resize siden for å se font-størrelser på mindre skjermer.
 */
const Typography = <T extends AllowedElements>({
  element,
  children,
  ...rest
}: Props<T> & ComponentProps<MappedToValidHtmlElement<T>>) => {
  const Element = ElementMap[element] as ElementType;
  return (
    <Element css={style({ element })} {...rest}>
      {children}
    </Element>
  );
};

export default Typography;
