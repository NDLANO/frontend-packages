/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import FocusTrapReact from 'focus-trap-react';
import { ButtonV2 as Button, appearances } from '@ndla/button';
import { spacing, misc, colors, mq, breakpoints, animations, fonts, spacingUnit } from '@ndla/core';
import { ChevronDown } from '@ndla/icons/common';
import { useTranslation } from 'react-i18next';
import LanguageSelectorContent from './LanguageSelectorContent';

type StyledWrapperProps = {
  alwaysVisible?: boolean;
};

const StyledWrapper = styled.div<StyledWrapperProps>`
  position: relative;
  ${(props) =>
    !props.alwaysVisible &&
    css`
      ${mq.range({ until: breakpoints.wide })} {
        display: none;
      }
    `}
`;

type StyledModalProps = {
  animateIn: boolean;
  centered?: boolean;
};

const StyledModal = styled.div<StyledModalProps>`
  background: ${colors.brand.light};
  position: absolute;
  z-index: 9999;
  right: 0;
  top: ${-spacingUnit * 0.75}px;
  padding: ${spacingUnit * 0.75}px ${spacing.normal} ${spacing.normal};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  border-radius: ${misc.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${(props) =>
    props.animateIn &&
    css`
      ${animations.fadeInTop(animations.durations.superFast)}
    `};
  ${(props) =>
    props.centered &&
    css`
      right: calc(50% - 225px);
      left: calc(50% - 225px);
      ${mq.range({ until: breakpoints.mobileWide })} {
        right: calc(50% - 150px);
        left: calc(50% - 150px);
      }
    `};
  nav {
    width: 100%;
    padding: ${spacing.medium} ${spacing.large} ${spacing.small};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ul {
      margin: 0 ${spacing.large};
      padding: 0;
      list-style: none;
      li {
        margin: 0 0 ${spacing.xsmall};
        padding: 0;
      }
      button {
        border: none;
        width: 100%;
        padding: ${spacingUnit / 2 + 5}px ${spacingUnit * 2.5}px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${misc.borderRadius};
      }
    }
  }
`;

const StyledSpan = styled.span`
  font-weight: ${fonts.weight.semibold};
`;

const styledInvertedOutlineLargeScreensOnly = css`
  ${mq.range({ from: breakpoints.tablet })} {
    ${appearances.ghostPillOutlineInverted}
  }
`;

type Props = {
  options: {
    [key: string]: {
      name: string;
      url: string;
    };
  };
  currentLanguage: string;
  inverted?: boolean;
  invertedOutlineLargeScreensOnly?: boolean;
  outline?: boolean;
  center?: boolean;
  alwaysVisible?: boolean;
};

const StyledButton = styled(Button)`
  border-color: ${({ inverted }) => (inverted ? colors.white : colors.brand.primary)};
`;

const LanguageSelector = ({
  currentLanguage,
  outline,
  center,
  inverted,
  invertedOutlineLargeScreensOnly,
  alwaysVisible,
}: Props) => {
  const { t, i18n } = useTranslation();
  const [infoLocale, setInfoLocale] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledWrapper alwaysVisible={alwaysVisible}>
      <StyledButton
        inverted={inverted}
        variant="ghost"
        size="medium"
        colorTheme="lighter"
        shape="pill"
        css={invertedOutlineLargeScreensOnly && styledInvertedOutlineLargeScreensOnly}
        onClick={() => setIsOpen(true)}>
        <StyledSpan>
          {t(`languages.prefixChangeLanguage`)}: {t(`languages.${infoLocale}`)}
        </StyledSpan>
        <ChevronDown />
      </StyledButton>
      {isOpen && (
        <FocusTrapReact
          active
          focusTrapOptions={{
            onDeactivate: () => {
              setIsOpen(false);
            },
            clickOutsideDeactivates: true,
            escapeDeactivates: true,
          }}>
          <StyledModal animateIn={isOpen} centered={center}>
            <Button
              variant="link"
              onClick={() => {
                setIsOpen(false);
              }}>
              {t('masthead.menu.close')}
            </Button>
            <LanguageSelectorContent
              currentLanguage={currentLanguage}
              setInfoLocale={setInfoLocale}
              infoLocale={infoLocale}
              close={() => setIsOpen(false)}
            />
          </StyledModal>
        </FocusTrapReact>
      )}
    </StyledWrapper>
  );
};

export default LanguageSelector;
