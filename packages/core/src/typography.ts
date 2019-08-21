import { css } from '@emotion/core';
import fonts from './fonts';
import colors from './colors';
import spacing from './spacing';

const smallHeading = css`
  ${fonts.sizes(14, 1.1)};
  font-weight: ${fonts.weight.normal};
  color: ${colors.text.light};
  text-transform: uppercase;
`;

const smallerHeadingUppercase = css`
  ${fonts.sizes('18px', '26px')};
  font-weight: ${fonts.weight.normal};
  color: ${colors.text.light};
  text-transform: uppercase;
  margin: ${spacing.xsmall} 0 ${spacing.normal} 0;
`;

export default {
  smallHeading,
  smallerHeadingUppercase,
};