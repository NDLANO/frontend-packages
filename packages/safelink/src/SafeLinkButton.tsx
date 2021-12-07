/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLProps, ReactNode } from 'react';
import { css } from '@emotion/core';
// @ts-ignore
import { appearances, ButtonStyles } from '@ndla/button';
import SafeLink from './SafeLink';

interface StylesProps {
  [key: string]: boolean | undefined;
}

const getStyles = (modifiers: StylesProps) =>
  Object.keys(modifiers)
    .map((key) => (modifiers[key] ? appearances[key] : undefined))
    .filter((appearance) => !!appearance);

interface Props {
  outline?: boolean;
  stripped?: boolean;
  link?: boolean;
  lighter?: boolean;
  inverted?: boolean;
  invertedOutline?: boolean;
  children: ReactNode;
  to: string;
  className?: string;
  buttonSize?: 'normal' | 'medium' | 'large';
  borderShape?: 'normal' | 'rounded' | 'sharpened';
  width?: 'auto' | 'full';
  textAlign?: 'center' | 'left' | 'right';
  darker?: boolean;
  greyLighter?: boolean;
  greyLightest?: boolean;
}

const SafeLinkButton = ({
  outline,
  stripped,
  link,
  lighter,
  children,
  inverted,
  invertedOutline,
  to,
  buttonSize,
  borderShape,
  width,
  textAlign,
  darker,
  greyLighter,
  greyLightest,
  ...rest
}: Props & HTMLProps<HTMLAnchorElement>) => {
  const modifierStyles = getStyles({
    link,
    outline,
    lighter,
    stripped,
    inverted,
    invertedOutline,
  });

  const buttonStyleProps = {
    outline,
    lighter,
    size: buttonSize,
    borderShape,
    width,
    textAlign,
    darker,
    greyLighter,
    greyLightest,
  };
  const styles = ButtonStyles(buttonStyleProps);

  return (
    <SafeLink
      to={to}
      css={css`
        ${modifierStyles}
        ${styles}
      `}
      {...rest}>
      {children}
    </SafeLink>
  );
};

export default SafeLinkButton;
