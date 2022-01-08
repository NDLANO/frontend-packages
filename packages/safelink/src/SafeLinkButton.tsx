/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { css } from '@emotion/core';
import { appearances, ButtonStyles, ButtonAppearance } from '@ndla/button';
import SafeLink from './SafeLink';

type StylesProps = Record<ButtonAppearance, boolean | undefined>;

const getStyles = (modifiers: Partial<StylesProps>) =>
  (Object.keys(modifiers) as ButtonAppearance[])
    .map((key) => (modifiers[key] ? appearances[key] : undefined))
    .filter((appearance) => !!appearance);

interface Props {
  outline?: boolean;
  stripped?: boolean;
  link?: boolean;
  lighter?: boolean;
  inverted?: boolean;
  invertedOutline?: boolean;
  children: React.ReactNode;
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

const SafeLinkButton: React.FunctionComponent<Props & React.HTMLProps<HTMLAnchorElement>> = ({
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
}) => {
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
