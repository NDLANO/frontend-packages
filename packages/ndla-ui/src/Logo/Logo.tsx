/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/* eslint-disable max-len */

import BEMHelper from 'react-bem-helper';
import SafeLink from '@ndla/safelink';
import SvgLogo from './SvgLogo';

export const logoClasses = new BEMHelper({
  name: 'logo',
  prefix: 'c-',
});

interface Props {
  to?:
    | string
    | {
        pathname: string;
        search?: string;
        hash?: string;
      };
  label: string;
  locale?: string;
  cssModifier?: string;
  large?: boolean;
  name?: boolean;
  color?: string;
}

export const Logo = ({ name = true, to, cssModifier, color, large = false, locale, label }: Props) => {
  const modifiers: Record<string, boolean> = { large };

  if (cssModifier) {
    modifiers[cssModifier] = true;
  }

  const logo = to ? (
    <SafeLink to={to} aria-label={label}>
      <SvgLogo name={name} color={color} locale={locale} />
    </SafeLink>
  ) : (
    <>
      <SvgLogo name={name} color={color} locale={locale} />
    </>
  );
  return <div {...logoClasses('', modifiers)}>{logo}</div>;
};

export default Logo;
