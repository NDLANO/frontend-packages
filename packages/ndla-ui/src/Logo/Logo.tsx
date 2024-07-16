/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
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

export const Logo = ({ name = true, to, color, locale, label }: Props) => {
  const logo = to ? (
    <SafeLink to={to} aria-label={label} title={label}>
      <SvgLogo name={name} color={color} locale={locale} />
    </SafeLink>
  ) : (
    <SvgLogo name={name} color={color} locale={locale} />
  );
  return <StyledLogoWrapper>{logo}</StyledLogoWrapper>;
};

export default Logo;
