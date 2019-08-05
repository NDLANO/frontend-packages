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
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import Button from '@ndla/button';
import { spacing, misc, colors, mq, breakpoints, animations, fonts } from '@ndla/core';
// @ts-ignore
import { ChevronDown } from '@ndla/icons/common';

type StyledWrapperProps = {
  alwaysVisible?: boolean;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  position: relative;
  ${props => !props.alwaysVisible && css`
    padding-right: ${spacing.large};
    ${mq.range({ until: breakpoints.desktop })} {
      display: none;
    }
  `}
`;

type StyledModalProps = {
  animateIn: boolean;
  centered?: boolean;
}

const StyledModal = styled.div<StyledModalProps>`
  background: ${colors.brand.light};
  position: absolute;
  z-index: 9999;
  right: ${spacing.normal};
  top: ${-spacing.spacingUnit * 0.75}px;
  padding: ${spacing.spacingUnit * 0.75}px ${spacing.normal} ${spacing.normal};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  border-radius: ${misc.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${props => props.animateIn && css`
    ${animations.fadeInTop()}
  `};
  ${props => props.centered && css`
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
      a, span {
        width: 100%;
        padding: ${spacing.small} ${spacing.spacingUnit * 2.5}px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${misc.borderRadius};
      }
      a {
        background: transparent;
        color: ${colors.brand.dark};
        box-shadow: none;
        transition: background 200ms ease;
        &:hover, &:focus {
          background: ${colors.brand.tertiary};
        }
      }
      span {
        background: ${colors.brand.primary};
        color: #fff;
        &:before {
          content: "";
          position: absolute;
          display: block;
          @include svg_icon(done, #fff);
          width: ${spacing.normal};
          height: ${spacing.normal};
          background-size: ${spacing.spacingUnit - 2}px ${spacing.spacingUnit - 2}px;
          left: ${spacing.spacingUnit * 6}px;
          background-position-x: center;
          background-position-y: center;
        }
      }
    }
  }
`;

const StyledSpan = styled.span`
  font-weight: ${fonts.weight.semibold};
`;


export type optionsProps = {
  name: string;
  url: string;
};

type Props = {
  options: {
    [key: string]: optionsProps;
  };
  currentLanguage: string;
  inverted?: boolean;
  outline?: boolean;
  center?: boolean;
  alwaysVisible?: boolean;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

const LanguageSelector: React.FunctionComponent<Props> = ({
  options,
  currentLanguage,
  outline,
  center,
  inverted,
  alwaysVisible,
  t,
}) => {
  const [infoLocale, setInfoLocale] = useState(currentLanguage);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWrapper alwaysVisible={alwaysVisible}>
      <Button
        ghostPillOutline={outline && !inverted}
        ghostPill={!outline && !inverted}
        ghostPillOutlineInverted={outline && inverted}
        ghostPillInverted={!outline && inverted}
        onClick={() => setIsOpen(true)}>
        <StyledSpan>{t(`languages.prefixChangeLanguage`)}: {t(`languages.${infoLocale}`)}</StyledSpan>
        <ChevronDown />
      </Button>
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
              link
              onClick={() => {
                setIsOpen(false);
              }}>
              {t('masthead.menu.close')}
            </Button>
            <nav>
              <ul>
                {Object.keys(options).map(key => (
                  <li key={key}>
                    {key === currentLanguage ? (
                      <span>{options[key].name}</span>
                    ) : (
                      <a
                        href={options[key].url}
                        onMouseOver={() => {
                          setInfoLocale(key);
                        }}
                        onMouseOut={() => {
                          setInfoLocale(currentLanguage);
                        }}
                        aria-label={t(`changeLanguage.${key}`)}>
                        {options[key].name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <p>{t(`currentLanguageText.${infoLocale}`)}</p>
            </nav>
          </StyledModal>
        </FocusTrapReact>
      )}
    </StyledWrapper>
  );
};

export default injectT(LanguageSelector);