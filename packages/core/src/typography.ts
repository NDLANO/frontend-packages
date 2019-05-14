import { css } from '@emotion/core';
import fonts from './fonts';
import colors from './colors';

const smallHeading = css`
  ${fonts.sizes(14, 1.1)};
  font-weight: ${fonts.weight.normal};
  color: ${colors.text.light};
  text-transform: uppercase;
`;

export default {
  smallHeading,
};