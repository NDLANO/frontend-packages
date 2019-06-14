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
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import {
  SafeLink,
  LearningPathSticky,
  LearningPathStickySibling,
} from '@ndla/ui';
// @ts-ignore
import Tooltip from '@ndla/tooltip';
import { useWindowSize } from '@ndla/hooks';
// @ts-ignore
import { Time } from '@ndla/icons/common';
import { colors, spacing, fonts, misc, typography, mq, breakpoints, animations } from '@ndla/core';
// @ts-ignore
import { ArrowExpandRight, ArrowExpandLeft } from '@ndla/icons/action';
import LearningPathMenuModalWrapper from './LearningPathMenuModalWrapper';
import LearningPathMenuAside from './LearningPathMenuAside';
import { LearningPathIcon } from './LearningPathIcon';

const SIDE_NAV_WIDTH = '372px';

type StyledMenuProps = {
  isOpen?: Boolean;
};

const StyledMenu = styled.div<StyledMenuProps>`
  width: 100%;
  flex-shrink: 0;
  transition: all 200ms ease;
  margin-bottom: ${spacing.large};
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

const navCSS = css`
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  margin-bottom: ${spacing.medium};
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
    ${mq.range({ from: breakpoints.tablet })} {
      margin-left: 28px;
      margin-top: ${spacing.normal};
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
  align-items: center;
  justify-content: center;
  border-radius: ${misc.borderRadius};
  display: none;
  border: none;
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    display: inline-flex;
    &:hover, &:focus {
      background: ${colors.brand.primary};
      color: #fff;
    }
  }
`;

const navCSSClosed = css`
  ${mq.range({ until: breakpoints.tablet })} {
    margin-left: -28px;
  }
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    ${StyledMenuItem} {
      span {
        display: none;
      }
      &:first-of-type {
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

const styledIntroHeaderCSS = css`
  ${fonts.sizes(18, 1.1)};
  line-height: 20px;
  margin: ${spacing.small} 0 ${spacing.normal};
`;

type StepProps = {
  metaUrl: string;
  title: {
    title: string;
  },
  metaUrl: string;
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
      {learningsteps.map(({ id, metaUrl, title, type }:StepProps, index:number) => {
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
            <SafeLink to={metaUrl}>
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
      <LearningPathMenuModalWrapper
        innerWidth={innerWidth}
        currentIndex={currentIndex}
        learningstepsTotal={learningsteps.length}
        closeLabel={t('modal.closeModal')}
        outOfLabel={t('learningPath.pageOf')}
      >
        <div css={css`padding-left: ${spacing.small};`}>
          <Tooltip align="right" tooltip="åpne">
            <StyledToggleMenubutton type="button" onClick={() => toggleOpenState(!isOpen)}>
              {!isOpen ? <ArrowExpandRight /> : <ArrowExpandLeft />}
            </StyledToggleMenubutton>
          </Tooltip>
        </div>
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
        <LearningPathMenuAside isOpen={isOpen} lastUpdated={lastUpdated} copyright={copyright} learningPathURL={learningPathURL} />
      </LearningPathMenuModalWrapper>
      <LearningPathSticky>
        {currentIndex > 0 ? (
          <LearningPathStickySibling
            arrow="left"
            label="forrige"
            to={learningsteps[currentIndex - 1].metaUrl}
            title={learningsteps[currentIndex - 1].title.title}
          />
        ) : (
          <div />
        )}
        {currentIndex < learningsteps.length - 1 && (
          <LearningPathStickySibling
            arrow="right"
            label="neste"
            to={learningsteps[currentIndex + 1].metaUrl}
            title={learningsteps[currentIndex + 1].title.title}
          />
        )}
      </LearningPathSticky>
    </StyledMenu>
  );
};

export default injectT(LearningPathMenu);