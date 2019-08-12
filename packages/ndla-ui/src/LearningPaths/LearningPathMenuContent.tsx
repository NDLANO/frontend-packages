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
import { injectT } from '@ndla/i18n';
import {
  colors,
  spacing,
  fonts,
  mq,
  breakpoints,
  animations,
} from '@ndla/core';
import { LearningPathIcon } from './LearningPathIcon';
import { StepProps } from './LearningPathMenu';
// @ts-ignore
import { SafeLink } from '../index';

const SIDE_NAV_WIDTH = '372px';

type StyledMenuItemProps = {
  current?: boolean;
  isOpen: boolean;
  afterCurrent: boolean;
  indexNumber: number;
  hasRead?: boolean;
};

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
    &:hover,
    &:focus {
      > span {
        box-shadow: ${colors.link};
      }
    }
  }
  ${mq.range({ until: breakpoints.desktop })} {
    ${props =>
      !props.isOpen &&
      `
      margin-bottom: -${spacing.xsmall};
      margin-top: -${spacing.xsmall};
      transition: margin ${animations.durations.superFast} ease;
    `}
    ${props =>
      props.isOpen &&
      `
      a span {
        ${animations.fadeInLeftFromZero()}
        animation-delay: ${parseInt(animations.durations.superFast) * 1.5 +
          20 * props.indexNumber}ms;
      }
    `}
    &:first-of-type, &:last-of-type {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  ${props =>
    props.current &&
    props.isOpen &&
    `
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
  ${props =>
    props.current &&
    `
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
  ${props =>
    !props.afterCurrent &&
    `
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

const StyledContentType = styled.div`
  position: relative;
  z-index: 1;
  margin-right: ${spacing.spacingUnit * 0.75}px;
`;

type StyledNavigationProps = {
  isOpen: boolean;
};

const StyledNavigation = styled.nav<StyledNavigationProps>`
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  margin-bottom: ${spacing.medium};
  ${props =>
    !props.isOpen &&
    css`
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
          a:hover,
          a:focus {
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
    `}
`;

type Props = {
  learningsteps: StepProps[];
  learningPathId: number;
  isOpen: boolean;
  toLearningPathUrl(pathId: number, stepId: number): string;
  currentIndex: number;
  cookies: {
    [key: string]: string;
  };
};

const getIconType = (
  id: number,
  index: number,
  currentIndex: number,
  cookies: {
    [key: string]: string;
  },
  type: string,
) => {
  if (index === currentIndex) {
    return 'CURRENT';
  } else if (cookies[id]) {
    return 'HAS_READ';
  }
  return type;
};

const LearningPathMenuContent: React.FunctionComponent<Props> = ({
  isOpen,
  currentIndex,
  cookies,
  learningPathId,
  learningsteps,
  toLearningPathUrl,
}) => (
  <StyledNavigation isOpen={isOpen}>
    <ul>
      {learningsteps.map(({ id, title, type }: StepProps, index: number) => (
        <StyledMenuItem
          key={id}
          current={index === currentIndex}
          afterCurrent={index > currentIndex}
          isOpen={isOpen}
          indexNumber={index}>
          <SafeLink to={toLearningPathUrl(learningPathId, id)}>
            <StyledContentType>
              <LearningPathIcon
                type={getIconType(id, index, currentIndex, cookies, type)}
                current={index === currentIndex}
                beforeCurrent={index <= currentIndex}
              />
            </StyledContentType>
            <span>{title}</span>
          </SafeLink>
        </StyledMenuItem>
      ))}
    </ul>
  </StyledNavigation>
);

export default injectT(LearningPathMenuContent);
