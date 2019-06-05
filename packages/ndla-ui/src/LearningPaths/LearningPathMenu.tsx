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
import { injectT } from '@ndla/i18n';
import { SafeLink } from '@ndla/ui';
import { SafeLinkButton } from '@ndla/button';
import Tooltip from '@ndla/tooltip';
import { useWindowSize } from '@ndla/hooks';
import { Time, User } from '@ndla/icons/common';
import { colors, spacing, fonts, misc, typography, mq, breakpoints, animations } from '@ndla/core';
import { ArrowExpandRight, ArrowExpandLeft } from '@ndla/icons/action';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { LearningPathIcon } from './LearningPathIcon';

const SIDE_NAV_WIDTH = '372px';

type StyledMenuProps = {
  isOpen?: Boolean;
};

const StyledMenu = styled.div<StyledMenuProps>`
  width: 100%;
  flex-shrink: 0;
  transition: all 200ms ease;
  ${mq.range({ from: breakpoints.tablet })} {
    max-width: ${SIDE_NAV_WIDTH};
    width: ${SIDE_NAV_WIDTH};
  }
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    min-width: ${SIDE_NAV_WIDTH};
    margin-right: ${spacing.xsmall};
    ${props => !props.isOpen && `
      width: ${spacing.large};
      min-width: ${spacing.large};
      ${StyledMenuIntro} {
        display: none;
      }
    `}
  }
  ${mq.range({ from: breakpoints.desktop })} {
    margin-right: ${spacing.small};
  }
`;

const infoTextCSS = css`
  ${fonts.sizes(18, 1.3)};
  font-weight: ${fonts.weight.semibold};
  width: calc(100% - ${spacing.medium});
  border-top: 2px solid ${colors.brand.greyLight};
  margin-top: ${spacing.normal};
  padding: ${spacing.normal} 0 0;
`;

const learningPathDetailsCSS = css`
  ${fonts.sizes(14, 1.1)};
  font-weight: ${fonts.weight.normal};
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-items: flex-start;
  margin-bottom: ${spacing.xsmall};
  p {
    margin: 0;
    padding-left: ${spacing.xsmall};
  }
  span {
    display: block;
  }
`;

const numbersButtonCSS = css`
  display: flex;
  align-items: center;
  background: ${colors.brand.light};
  padding: ${spacing.xsmall} ${spacing.small};
  color: ${colors.brand.primary};
  font-weight: ${fonts.weight.semibold};
  border-radius: ${misc.borderRadius};
  small {
    display: flex;
    padding: 0 3px;
  }
`;

const navCSS = css`
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  margin-bottom: ${spacing.medium};
`;

type StyledAsideProps = {
  isOpen: boolean;
};

const StyledAside = styled.aside<StyledAsideProps>`
  display: none;
  padding-left: ${spacing.spacingUnit * 2.25}px;
  ${mq.range({ from: breakpoints.desktop })} {
    display: block;
  }
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    ${props => props.isOpen && css`
      display: block;
      opacity: 0;
      ${animations.fadeIn()}
      animation-fill-mode: forwards;
      animation-delay: 450ms;
    `}
  }
  ${mq.range({ until: breakpoints.tablet })} {
    display: block;
  }
`;

type StyledMenuItemProps = {
  current?: boolean;
  isOpen: boolean;
  afterCurrent: boolean;
  indexNumber: number;
  hasRead?: boolean;
}

const StyledMenuItem = styled.li<StyledMenuItemProps>`
  margin: 0;
  a {
    box-shadow: none;
    height: ${spacing.large};
    display: inline-flex;
    align-items: center;
    padding: ${spacing.small};
    > span {
      ${fonts.sizes(14, 1.2)};
      color: ${colors.text.primary};
    }
    &:hover, &:focus {
      > span > span {
        box-shadow: ${colors.link};
      }
    }
  }
  ${mq.range({ until: breakpoints.desktop })} {
    ${props => !props.isOpen && `
      margin-bottom: -${spacing.xsmall};
      margin-top: -${spacing.xsmall};
      transition: margin ${animations.durations.superFast} ease;
    `}
    ${props => props.isOpen && `
      a span {
        ${animations.fadeInLeftFromZero()}
        animation-delay: ${parseInt(animations.durations.superFast) * 1.5 + 20 * props.indexNumber}ms;
      }
    `}
    &:first-of-type, &:last-of-type {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  ${props => props.current && props.isOpen && `
    a {
      &:before {
        position: absolute;
        content: '';
        display: block;
        background: #fff;
        height: ${spacing.large};
        width: calc(${SIDE_NAV_WIDTH} - ${spacing.small});
        transform: translateX(-${spacing.small});
      }
    }
  `}
  ${props => props.current && `
    ${mq.range({ from: breakpoints.desktop })} {
      background: #fff;
    }
  `}
  &:after {
    content: '';
    display: block;
    height: ${spacing.large};
    width: 2px;
    background: ${colors.brand.primary};
    position: absolute;
    transform: translate(29px, -${spacing.spacingUnit * 3}px);
  }
  ${props => !props.afterCurrent && `
    a {
      > span {
        color: ${colors.text.primary};
      }
      color: ${colors.text.primary};
    }
    &:after {
      width: 4px;
      background: ${colors.brand.primary};
      transform: translate(28px, -${spacing.spacingUnit * 3}px);
    }
  `}
`;

type StyledMenuIntroProps = {
  isOpen?: Boolean;
};

const StyledMenuIntro = styled.div<StyledMenuIntroProps>`
    margin-left: 28px;
    margin-top: ${spacing.normal};
    border-left: 4px solid ${colors.brand.primary};
    &:before {
      content: '';
      display: block;
      background: ${colors.brand.primary};
      border-radius: 100%;
      height: 12px;
      width: 12px;
      position: absolute;
      transform: translate(-8px, -8px);
    }
    > div {
      padding: 0 0 ${spacing.medium} ${spacing.normal};
    }
    ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
      ${props => props.isOpen && css`
        animation-duration: ${animations.durations.superFast};
        animation-name: StyledMenuIntroAnimationHeight;
        @keyframes StyledMenuIntroAnimationHeight {
          0% {
            height: ${spacing.normal};
            width: 0;
          }
          99% {
            overflow: hidden;
            height: 118px;
            width: 200px;
          }
          100% {
            height: auto;
            width: auto;
          }
        }
        > * {
          opacity: 0;
          ${animations.fadeInBottom()}
          animation-fill-mode: forwards;
          animation-delay: ${animations.durations.superFast};
        }
        `
    }
`;

const StyledTimeBox = styled.div`
  background: ${colors.brand.lighter};
  border: 1px solid ${colors.brand.light};
  border-radius: ${misc.borderRadius};
  ${fonts.sizes(14, 1.2)};
  font-weight: ${fonts.weight.normal};
  padding: ${spacing.small} ${spacing.spacingUnit * 0.75}px ${spacing.small} ${spacing.small};
  display: inline-flex;
  svg {
    margin-right: ${spacing.xsmall};
  }
`;

const StyledToggleMenubutton = styled.button`
  background: ${colors.brand.light};
  color: ${colors.brand.primary};
  width: ${spacing.medium};
  height: ${spacing.medium};
  margin-left: ${spacing.small};
  align-items: center;
  justify-content: center;
  border-radius: ${misc.borderRadius};
  display: none;
  border: none;
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    display: flex;
    &:hover, &:focus {
      background: ${colors.brand.primary};
      color: #fff;
    }
  }
`;

const navCSSClosed = css`
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    ${StyledMenuItem} {
      span {
        display: none;
      }
      &:first-child {
        &:after {
          display: none !important;
        }
      }
      a:hover, a:focus {
        position: relative;
        z-index: 1;
        width: ${SIDE_NAV_WIDTH};
        background: ${colors.brand.greyLighter};
        span {
          display: flex;
        }
      }
    }
  }
`;

const ContentTypeCSS = css`
  position: relative;
  z-index: 1;
  margin-right: ${spacing.spacingUnit * 0.75}px;
`;

const wrapperCSS = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 -${spacing.normal} ${spacing.medium};
  background: ${colors.brand.lighter};
  padding: ${spacing.xsmall} ${spacing.normal};
`;

const styledIntroHeaderCSS = css`
  ${fonts.sizes(18, 1.1)};
  line-height: 20px;
  margin: ${spacing.small} 0 ${spacing.normal};
`;

interface ModalWrapperProps {
  innerWidth: number;
  currentIndex: number;
  learningstepsTotal: number;
  closeLabel: string;
  children: React.ReactNode;
};

const ModalWrapperComponent: React.FunctionComponent<ModalWrapperProps> = ({
  innerWidth, currentIndex, learningstepsTotal, closeLabel, children
}) => (
  innerWidth < 601 ? (
    <div css={wrapperCSS}>
      <Modal
        backgroundColor="grey"
        animation="slide-up"
        animationDuration={200}
        size="fullscreen"
        activateButton={
          <button type="button" css={numbersButtonCSS}>{currentIndex}<small> av </small>{learningstepsTotal}</button>
        }>
        {(onClose: Function) => (
          <>
            <ModalHeader>
              <ModalCloseButton title={closeLabel} onClick={onClose} />
            </ModalHeader>
            <ModalBody>
              {children}
            </ModalBody>
          </>
        )}
      </Modal>
      <div css={typography.smallHeading}>Du er nå inne i en læringssti</div>
    </div>
  ) : <>{children}</>
);

type StepProps = {
  url: string;
  title: {
    title: string;
  },
  type: string;
  id: string | number;
  current?: boolean;
}

interface Props {
  learningsteps: StepProps[];
  stepId: string | number;
  name: string;
  duration: number;
  lastUpdated: string[];
  language: string;
  copyright: {
    contributors: {
      type: string;
      name: string;
    }[],
    license: {
      license: string;
      description: string;
      url: string;
    },
  };
  learningPathURL: string;
  cookies: {
    [key: string]: string;
  };
  t: any;
}

type renderMenuProps = {
  learningsteps: StepProps[];
  isOpen: boolean;
  currentIndex: number;
  cookies: {
    [key: string]: string;
  };
}

const renderMenu = ({ learningsteps, currentIndex, isOpen, cookies }:renderMenuProps) => (
  <nav css={[navCSS, !isOpen && navCSSClosed]}>
    <ul>
      {learningsteps.map(({ id, url, title, type }:StepProps, index:number) => {
        let iconType = type;
        if (index === currentIndex) {
          iconType = 'CURRENT';
        } else if (cookies[id]) {
          iconType = 'HAS_READ';
        }
        return (
          <StyledMenuItem
            key={id}
            current={index === currentIndex}
            afterCurrent={index > currentIndex}
            isOpen={isOpen}
            indexNumber={index}>
            <SafeLink to={url}>
              <div css={ContentTypeCSS}>
                <LearningPathIcon type={iconType} current={index === currentIndex} beforeCurrent={index <= currentIndex} />
              </div>
              <span>
                <span>{title.title}</span>
              </span>
            </SafeLink>
          </StyledMenuItem>
        );
      })}
    </ul>
  </nav>
);

const LearningPathMenu: React.FunctionComponent<Props> = ({
  learningsteps, name, duration, lastUpdated, copyright, stepId, learningPathURL, cookies, t,
}) => {
  const [isOpen, toggleOpenState] = useState(false);
  const { innerWidth } = useWindowSize(100);
  const currentIndex = learningsteps.findIndex(learningStep => learningStep.id === stepId);

  return (
    <StyledMenu isOpen={isOpen}>
      <ModalWrapperComponent innerWidth={innerWidth} currentIndex={currentIndex} learningstepsTotal={learningsteps.length} closeLabel={t('modal.closeModal')}>
        <Tooltip align="right" tooltip="åpne">
          <StyledToggleMenubutton type="button" onClick={() => toggleOpenState(!isOpen)}>
            {!isOpen ? <ArrowExpandRight /> : <ArrowExpandLeft />}
          </StyledToggleMenubutton>
        </Tooltip>
        <StyledMenuIntro isOpen={isOpen}>
          <div>
            <p css={typography.smallHeading}>{t('learningPath.youAreInALearningPath')}</p>
            <h1 css={styledIntroHeaderCSS}>{name}</h1>
            <StyledTimeBox>
              <Time /> {t('learningPath.readTime', {
                  hours: Math.round((duration / 45) * 10) / 10,
                  minutes: duration,
                })}
            </StyledTimeBox>
          </div>
        </StyledMenuIntro>
        {renderMenu({ learningsteps, isOpen, currentIndex, cookies })}
        <StyledAside isOpen={isOpen}>
          <div css={learningPathDetailsCSS}>
            <Time />
            <p>
              {t('learningPath.lastUpdated')}: {lastUpdated}
            </p>
          </div>
          {copyright.contributors && (
            <div css={learningPathDetailsCSS}>
              <User />
              <p>
                {copyright.contributors.map(contributor => (
                  <span key={contributor.name}>{contributor.name}</span>
                ))}
                <span>{copyright.license.license}</span>
              </p>
            </div>
          )}
          <p css={infoTextCSS}>
            {t('learningPath.createLearningPathText')}
          </p>
          <SafeLinkButton to={learningPathURL} outline>{t('learningPath.createLearningPathButtonText')}</SafeLinkButton>
        </StyledAside>
      </ModalWrapperComponent>
    </StyledMenu>
  );
};

export default injectT(LearningPathMenu);