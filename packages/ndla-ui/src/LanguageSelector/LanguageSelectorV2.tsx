import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, MenuPopover } from '@reach/menu-button';
import { buttonStyleV2 } from '@ndla/button';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from '@ndla/icons/lib/common';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';

interface Props<T extends string> {
  locales: T[];
  onSelect: (locale: T) => void;
  inverted?: boolean;
}

const StyledMenuPopover = styled(MenuPopover)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.brand.greyLightest};
  padding: ${spacing.mediumlarge} ${spacing.medium};
  border-radius: ${spacing.small};
  max-width: 300px;
  min-width: 300px;
`;

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.brand.primary};
  gap: ${spacing.large};
  color: ${colors.brand.primary};
  background-color: ${colors.brand.greyLightest};
  border: 1px solid ${colors.brand.tertiary};
  padding: ${spacing.small} ${spacing.normal};
  flex: 1;
  :focus-within,
  :focus,
  :active,
  :hover {
    color: ${colors.white};
  }
  :not(:last-of-type) {
    border-bottom: 0px;
  }
  :first-of-type {
    border-top-left-radius: ${spacing.small};
    border-top-right-radius: ${spacing.small};
  }
  :last-of-type {
    border-bottom-left-radius: ${spacing.small};
    border-bottom-right-radius: ${spacing.small};
  }
`;

const StyledMenuItems = styled(MenuItems)`
  background-color: ${colors.brand.greyLightest};
  border: 0px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledParagraph = styled.p`
  ${fonts.sizes('26px', '36px')};
  font-weight: ${fonts.weight.bold};
  margin: 0;
`;

interface MenuButtonProps {
  inverted?: boolean;
}

const shouldForwardProp = (p: string) => p !== 'inverted';

const StyledMenuButton = styled(MenuButton, { shouldForwardProp })<MenuButtonProps>`
  display: flex;
  justify-items: center;
  ${({ inverted }) =>
    buttonStyleV2({ variant: 'outline', shape: 'pill', inverted, colorTheme: inverted ? 'light' : 'primary' })};
`;

const ActivityIndicator = styled.div`
  width: ${spacing.normal};
  height: ${spacing.normal};
  border: 1.5px solid currentColor;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ActiveIndicator = styled.div`
  width: 50%;
  height: 50%;
  border: ${spacing.xsmall} solid currentColor;
  border-radius: 100%;
`;

const Text = styled.span`
  ${fonts.sizes('20px', '24px')};
  font-weight: ${fonts.weight.semibold};
`;

const LanguageSelectorV2 = <T extends string>({ locales, onSelect, inverted }: Props<T>) => {
  const { t, i18n } = useTranslation();
  const [hoverLanguage, setHoverLanguage] = useState(i18n.language);
  return (
    <Menu>
      <StyledMenuButton inverted={inverted}>
        {t(`languages.${i18n.language}`)} <ChevronDown />
      </StyledMenuButton>
      <StyledMenuPopover portal={true}>
        <StyledParagraph>{t('languages.prefixChangeLanguage')}</StyledParagraph>
        <StyledMenuItems>
          {locales.map((locale) => (
            <StyledMenuItem
              aria-current={i18n.language === locale}
              key={locale}
              onSelect={() => onSelect(locale)}
              onMouseOver={() => setHoverLanguage(locale)}
              onMouseOut={() => setHoverLanguage(locale)}>
              <Text>{t(`languages.${locale}`)}</Text>
              <ActivityIndicator>{i18n.language === locale && <ActiveIndicator />}</ActivityIndicator>
            </StyledMenuItem>
          ))}
        </StyledMenuItems>
        <p>{t(`currentLanguageText.${hoverLanguage}`)}</p>
      </StyledMenuPopover>
    </Menu>
  );
};

export default LanguageSelectorV2;
