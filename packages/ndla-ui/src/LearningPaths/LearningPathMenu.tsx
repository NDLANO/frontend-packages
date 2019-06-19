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
import Tooltip from '@ndla/tooltip';
import { useWindowSize } from '@ndla/hooks';
import { colors, spacing, misc, mq, breakpoints } from '@ndla/core';
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
  currentIndex: boolean;
  cookies: {
    [key: string]: string;
  };
  t: any;
}

const LearningPathMenu: React.FunctionComponent<Props> = ({
  learningsteps, currentIndex, name, duration, lastUpdated, copyright, stepId, learningPathURL, cookies, t,
}) => {
  const [isOpen, toggleOpenState] = useState(false);
  const { innerWidth } = useWindowSize(100);

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
    </StyledMenu>
  );
};

export default injectT(LearningPathMenu);