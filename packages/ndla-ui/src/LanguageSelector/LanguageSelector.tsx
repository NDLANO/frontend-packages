/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { memo } from 'react';
import { Root, Trigger, Item, Content, Portal, Arrow } from '@radix-ui/react-dropdown-menu';
import { ButtonV2 } from '@ndla/button';
import { TFunction, useTranslation } from 'react-i18next';
import { ChevronDown } from '@ndla/icons/common';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';

interface Props<T extends string> {
  locales: T[];
  onSelect: (locale: T) => Promise<TFunction>;
  inverted?: boolean;
}

const PopoverContent = styled(Content)`
  z-index: 9999;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${colors.white};
  border-radius: ${spacing.small};
  border: 1px solid ${colors.brand.tertiary};
  fill: ${colors.brand.tertiary};
`;

const LanguageChoice = styled(ButtonV2)`
  padding: ${spacing.small} ${spacing.normal} ${spacing.small} ${spacing.nsmall};
  justify-content: flex-start;
  gap: ${spacing.small};
  border: none;
  outline: none;
  :not(:last-of-type) {
    border-bottom: 1px solid ${colors.brand.tertiary};
  }
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
  background-color: currentColor;
  border-radius: 100%;
`;

const Text = styled.span`
  ${fonts.sizes('20px', '24px')};
  font-weight: ${fonts.weight.semibold};
`;

const LanguageSelector = <T extends string>({ locales, onSelect, inverted }: Props<T>) => {
  const { t, i18n } = useTranslation();
  return (
    <Root>
      <Trigger asChild>
        <ButtonV2 variant="outline" shape="pill" inverted={inverted} aria-label={t('footer.selectLanguage')}>
          {t(`languages.prefixChangeLanguage`)} <ChevronDown />
        </ButtonV2>
      </Trigger>
      <Portal>
        <PopoverContent sideOffset={4}>
          <Arrow aria-hidden />
          {locales.map((locale) => (
            <Item asChild key={locale}>
              <LanguageChoice
                role="link"
                aria-current={i18n.language === locale}
                variant="ghost"
                shape="sharp"
                aria-label={t(`changeLanguage.${locale}`)}
                onClick={() => onSelect(locale)}
              >
                <ActivityIndicator>{i18n.language === locale && <ActiveIndicator />}</ActivityIndicator>
                <Text>{t(`languages.${locale}`)}</Text>
              </LanguageChoice>
            </Item>
          ))}
        </PopoverContent>
      </Portal>
    </Root>
  );
};

export default memo(LanguageSelector);
