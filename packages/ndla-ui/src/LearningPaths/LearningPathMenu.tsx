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
import { LearningPathSticky, LearningPathStickySibling } from '@ndla/ui';
// @ts-ignore
import Tooltip from '@ndla/tooltip';
import { useWindowSize } from '@ndla/hooks';
import { colors, spacing, fonts, misc, mq, breakpoints, animations } from '@ndla/core';
// @ts-ignore
import { ArrowExpandRight, ArrowExpandLeft } from '@ndla/icons/action';
import LearningPathMenuModalWrapper from './LearningPathMenuModalWrapper';
import LearningPathMenuAside from './LearningPathMenuAside';
import LearningPathMenuIntro from './LearningPathMenuIntro';
import LearningPathMenuContent from './LearningPathMenuContent';

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
    `}
  }
  ${mq.range({ from: breakpoints.desktop })} {
    margin-right: ${spacing.small};
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

export type StepProps = {
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
          <Tooltip align="right" tooltip={t('learningPath.openMenuTooltip')}>
            <StyledToggleMenubutton type="button" onClick={() => toggleOpenState(!isOpen)}>
              {!isOpen ? <ArrowExpandRight /> : <ArrowExpandLeft />}
            </StyledToggleMenubutton>
          </Tooltip>
        </div>
        <LearningPathMenuIntro isOpen={isOpen} duration={duration} name={name} />
        <LearningPathMenuContent learningsteps={learningsteps} isOpen={isOpen} currentIndex={currentIndex} cookies={cookies} />
        <LearningPathMenuAside isOpen={isOpen} lastUpdated={lastUpdated} copyright={copyright} learningPathURL={learningPathURL} />
      </LearningPathMenuModalWrapper>
      <LearningPathSticky>
        {currentIndex > 0 ? (
          <LearningPathStickySibling
            arrow="left"
            label={t('learningPath.previousArrow')}
            to={learningsteps[currentIndex - 1].metaUrl}
            title={learningsteps[currentIndex - 1].title.title}
          />
        ) : (
          <div />
        )}
        {currentIndex < learningsteps.length - 1 && (
          <LearningPathStickySibling
            arrow="right"
            label={t('learningPath.nextArrow')}
            to={learningsteps[currentIndex + 1].metaUrl}
            title={learningsteps[currentIndex + 1].title.title}
          />
        )}
      </LearningPathSticky>
    </StyledMenu>
  );
};

export default injectT(LearningPathMenu);