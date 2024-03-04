/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { ButtonV2 } from "@ndla/button";
import { colors, fonts, spacing, stackOrder } from "@ndla/core";
import { DropdownMenu, DropdownTrigger, DropdownContent, DropdownItem } from "@ndla/dropdown-menu";
import { ChevronDown } from "@ndla/icons/common";

interface Props<T extends string> {
  locales: T[];
  onSelect: (locale: T) => void;
  inverted?: boolean;
  triggerId?: string;
}

const StyledDropdownContent = styled(DropdownContent)`
  border-radius: ${spacing.small};
  border: 1px solid ${colors.brand.tertiary};
  [data-arrow] {
    fill: ${colors.brand.tertiary};
  }
  z-index: ${stackOrder.modal};
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
  ${fonts.sizes("20px", "24px")};
  font-weight: ${fonts.weight.semibold};
`;

const LanguageSelector = <T extends string>({ locales, onSelect, inverted, triggerId }: Props<T>) => {
  const { t, i18n } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownTrigger>
        <ButtonV2
          variant="outline"
          shape="pill"
          inverted={inverted}
          aria-label={t("footer.selectLanguage")}
          id={triggerId}
        >
          {t(`languages.prefixChangeLanguage`)} <ChevronDown />
        </ButtonV2>
      </DropdownTrigger>
      <StyledDropdownContent sideOffset={4} showArrow>
        {locales.map((locale) => (
          <DropdownItem key={locale}>
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
          </DropdownItem>
        ))}
      </StyledDropdownContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
