import React from 'react';
import { colors, spacing, fonts, spacingUnit } from '@ndla/core';
import { ButtonProps, ButtonV2 } from '@ndla/button';
import styled from '@emotion/styled';

interface Props extends ButtonProps {
  bold: boolean;
}

const StyledButton = styled(ButtonV2)`
  padding: ${spacingUnit / 8}px 0;
  white-space: nowrap;
  margin: -${spacingUnit / 8}px 0;

  &[data-bold='true'] {
    color: ${colors.brand.primary};
    text-decoration: underline;
    font-weight: ${fonts.weight.bold};
    font-size: inherit;
    line-height: inherit;
    &:focus,
    &:hover {
      text-decoration: none;
    }
  }

  &[data-bold='false'] {
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
  }
`;

const FooterLinkButton = ({ children, bold, ...rest }: Props) => {
  return (
    <StyledButton variant="stripped" data-bold={bold} {...rest}>
      {children}
    </StyledButton>
  );
};

export default FooterLinkButton;
