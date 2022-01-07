import React from 'react';
import { colors, spacing, fonts, spacingUnit } from '@ndla/core';
import { css } from '@emotion/core';
// @ts-ignore
import Button from '@ndla/button';

interface Props extends Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'width' | 'type'> {
  children: React.ReactNode;
  bold: boolean;
}

const buttonStyle = css`
  padding: ${spacingUnit / 8}px 0;
  white-space: nowrap;
  margin: -${spacingUnit / 8}px 0;
`;

const linkStyle = css`
  ${fonts.sizes(16, 1.25)};
  height: ${spacing.large};
  color: ${colors.brand.primary};
  font-weight: ${fonts.weight.semibold};
  box-shadow: none;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const boldLink = css`
  color: ${colors.brand.primary};
  text-decoration: underline;
  font-weight: ${fonts.weight.bold};
  font-size: inherit;
  line-height: inherit;
  &:focus,
  &:hover {
    text-decoration: none;
  }
`;

const FooterLinkButton: React.FC<Props> = ({ children, bold, ...rest }) => {
  return (
    <Button
      css={css`
        ${buttonStyle};
        ${bold ? boldLink : linkStyle}
      `}
      stripped
      {...rest}>
      {children}
    </Button>
  );
};

export default FooterLinkButton;
