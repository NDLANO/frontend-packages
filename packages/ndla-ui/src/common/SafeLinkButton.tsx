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

const getStyles = (modifiers: any) =>
  Object.keys(modifiers)
    .map(key => (modifiers[key] ? appearances[key] : undefined))
    .filter(appearance => !!appearance);

type Props = {
  outline?: boolean;
  stripped?: boolean;
  link?: boolean;
  lighter?: boolean;
  children: React.ReactNode;
  inverted?: boolean;
  invertedOutline?: boolean;
  to: string;
  className?: string;
};

const SafeLinkButton: React.FunctionComponent<Props> = ({
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
