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

const smallerHeadingUppercase = (margin?: string) => (css`
  ${fonts.sizes('18px', '26px')};
  font-weight: ${fonts.weight.normal};
  color: ${colors.text.light};
  text-transform: uppercase;
  margin: ${margin || `0 0 ${spacing.normal} 0`};
`);

const mediumHeaderUppercase = (margin?: string) => (
  css`
    color: ${colors.text.primary};
    font-weight: ${fonts.weight.bold};
    text-transform: uppercase;
    padding-right: ${spacing.small};
    margin: ${margin || '0'};
    ${fonts.sizes(20, 1.1)};
  `
)

export default {
  smallHeading,
  smallerHeadingUppercase,
  mediumHeaderUppercase,
};