/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { css } from '@emotion/core';
// @ts-ignore
import { buttonStyle, appearances } from '@ndla/button';
import SafeLink from './SafeLink';

interface StylesProps {
  [key: string]: boolean | undefined;
}

const getStyles = (modifiers: StylesProps) =>
  Object.keys(modifiers)
    .map(key => (modifiers[key] ? appearances[key] : undefined))
    .filter(appearance => !!appearance);

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
};

const SafeLinkButton: React.FunctionComponent<Props & React.HTMLProps<HTMLAnchorElement>> = ({
  outline,
  stripped,
  link,
  lighter,
  children,
  inverted,
  invertedOutline,
  to,
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

  return (
    <SafeLink
      to={to}
      css={css`
        ${buttonStyle}
        ${modifierStyles}
      `}
      {...rest}>
      {children}
    </SafeLink>
  );
};

export default SafeLinkButton;
