/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { WithInjectedTProps } from '@ndla/i18n/lib/injectT';
// @ts-ignore
import { Time } from '@ndla/icons/common';
import {
  colors,
  spacing,
  fonts,
  misc,
  typography,
  mq,
  breakpoints,
  animations,
} from '@ndla/core';

const StyledInfoHeader = styled.p`
  ${typography.smallHeading}
`;

type StyledMenuIntroProps = {
  isOpen?: boolean;
  invertedStyle?: boolean;
};

const BORDER_WIDTH = 4;

const StyledMenuIntro = styled.div<StyledMenuIntroProps>`
  ${mq.range({ from: breakpoints.tablet })} {
    ${props =>
      props.invertedStyle &&
      css`
        color: #fff;
        ${StyledInfoHeader} {
          color: #fff;
        }
      `}
  }
  border-left: ${BORDER_WIDTH}px solid ${colors.brand.primary};
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
    margin-left: ${spacing.spacingUnit + BORDER_WIDTH / 2}px;
    margin-top: ${spacing.normal};
  }
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    ${props =>
      !props.isOpen &&
      css`
        display: none;
      `}
    ${props =>
      props.isOpen &&
      css`
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
      `}
`;

const StyledTimeBox = styled.div`
  background: ${colors.brand.lighter};
  border: 1px solid ${colors.brand.light};
  border-radius: ${misc.borderRadius};
  ${fonts.sizes(14, 1.2)};
  font-weight: ${fonts.weight.normal};
  padding: ${spacing.small} ${spacing.spacingUnit * 0.75}px ${spacing.small}
    ${spacing.small};
  display: inline-flex;
  color: ${colors.text.primary};
  svg {
    margin-right: ${spacing.xsmall};
  }
`;

const StyledIntroHeader = styled.h1`
  ${fonts.sizes(18, 1.1)};
  line-height: 20px;
  margin: ${spacing.small} 0 ${spacing.normal};
`;

interface Props {
  duration: number;
  isOpen: boolean;
  invertedStyle?: boolean;
  name: string;
}

const LearningPathMenuIntro: React.FunctionComponent<
  WithInjectedTProps<Props>
> = ({ duration, isOpen, name, invertedStyle, t }) => {
  const hours = Math.floor(duration / 60);
  const usePluralsForHours = hours !== 1;
  const minutes = duration % 60;
  return (
    <StyledMenuIntro isOpen={isOpen} invertedStyle={invertedStyle}>
      <div>
        <StyledInfoHeader>
          {t('learningPath.youAreInALearningPath')}
        </StyledInfoHeader>
        <StyledIntroHeader>{name}</StyledIntroHeader>
        <StyledTimeBox>
          <Time />
          {hours}{' '}
          {t(
            usePluralsForHours
              ? 'learningPath.readTimeHour_plurals'
              : 'learningPath.readTimeHour',
          )}
          {minutes > 0 &&
            ` ${minutes} ${t('learningPath.readTimeMinutesShort')}`}
        </StyledTimeBox>
      </div>
    </StyledMenuIntro>
  );
};

export default injectT(LearningPathMenuIntro);
