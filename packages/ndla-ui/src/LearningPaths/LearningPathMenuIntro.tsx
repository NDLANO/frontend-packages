/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { colors, spacing, spacingUnit, fonts, typography, mq, breakpoints, animations } from '@ndla/core';

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
    ${(props) =>
      props.invertedStyle &&
      css`
        color: #fff;
        ${StyledInfoHeader} {
          color: #fff;
        }
      `}
  }
  border-left: ${BORDER_WIDTH}px solid ${colors.text.light};
  &:before {
    content: '';
    display: block;
    background: ${colors.text.light};
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
    margin-left: ${spacingUnit + BORDER_WIDTH}px;
    margin-top: ${spacing.normal};
  }
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    ${(props) =>
      !props.isOpen &&
      css`
        display: none;
      `}
    ${(props) =>
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
  }
`;

const StyledIntroHeader = styled.h1`
  ${fonts.sizes(18, 1.1)};
  line-height: 20px;
  margin: ${spacing.small} 0 ${spacing.normal};
`;

const StyledRow = styled.div`
  display: flex;
  gap: ${spacing.small};
`;

interface Props {
  isOpen: boolean;
  invertedStyle?: boolean;
  name: string;
  id: number;
  heartButton?: ReactNode;
}

const LearningPathMenuIntro = ({ isOpen, name, invertedStyle, heartButton }: Props) => {
  const { t } = useTranslation();
  return (
    <StyledMenuIntro isOpen={isOpen} invertedStyle={invertedStyle}>
      <div>
        <StyledRow>
          <StyledInfoHeader>{t('learningPath.youAreInALearningPath')}</StyledInfoHeader>
          {heartButton}
        </StyledRow>
        <StyledIntroHeader>{name}</StyledIntroHeader>
      </div>
    </StyledMenuIntro>
  );
};

export default LearningPathMenuIntro;
