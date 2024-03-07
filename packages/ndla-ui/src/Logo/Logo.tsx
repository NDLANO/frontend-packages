/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useMemo } from "react";
import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "@ndla/core";
import { SafeLink } from "@ndla/safelink";
import SvgLogo from "./SvgLogo";

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

const StyledLogoWrapper = styled.div`
  a {
    box-shadow: none;
  }
  width: 120px;
  margin: 0;
  position: relative;
`;

const modifierStyles: Record<string, SerializedStyles> = {
  large: css`
    width: 287px;
  `,
  white: css`
    svg {
      fill: ${colors.white};
    }
  `,
};

export const Logo = ({ name = true, to, cssModifier, color, large = false, locale, label }: Props) => {
  const modifiers = useMemo(() => {
    const mods = [];
    if (large) {
      mods.push(modifierStyles.large);
    }
    if (cssModifier && modifierStyles[cssModifier]) {
      mods.push(modifierStyles[cssModifier]);
    }
    return mods;
  }, [large, cssModifier]);

  const logo = to ? (
    <SafeLink to={to} aria-label={label} title={label}>
      <SvgLogo name={name} color={color} locale={locale} />
    </SafeLink>
  ) : (
    <SvgLogo name={name} color={color} locale={locale} />
  );
  return <StyledLogoWrapper css={modifiers}>{logo}</StyledLogoWrapper>;
};

export default Logo;
