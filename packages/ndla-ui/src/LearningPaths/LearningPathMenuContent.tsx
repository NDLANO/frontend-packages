/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors, spacing, spacingUnit, fonts, mq, breakpoints, animations, utils } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { LearningPathRead } from '@ndla/icons/contentType';
import { StepProps } from './LearningPathMenu';
import ContentTypeBadge from '../ContentTypeBadge';
import constants from '../model';

const SIDE_NAV_WIDTH = '372px';

type StyledMenuItemProps = {
  current?: boolean;
  isOpen: boolean;
  afterCurrent: boolean;
  indexNumber: number;
  hasRead?: boolean;
  invertedStyle?: boolean;
};

const StyledMenuItem = styled.li<StyledMenuItemProps>`
  padding: 0;
  a {
    box-shadow: none;
    display: inline-flex;
    align-items: center;
    padding: ${spacing.small};
    > span {
      display: flex;
      align-items: center;
      ${fonts.sizes(14, 1.2)};
      color: ${colors.brand.primary};
      ${mq.range({ from: breakpoints.tablet })} {
        color: ${({ invertedStyle }) => (invertedStyle ? '#fff' : colors.brand.primary)};
        font-weight: ${fonts.weight.semibold};
      }
    }
    &:hover,
    &:focus {
      > span {
        text-decoration: underline;
      }
    }
  }
  ${mq.range({ until: breakpoints.desktop })} {
    ${(props) =>
      !props.isOpen &&
      `
      margin-bottom: -${spacing.xsmall};
      margin-top: -${spacing.xsmall};
      transition: margin ${animations.durations.superFast} ease;
    `}
    ${(props) =>
      props.isOpen &&
      `
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
  ${(props) =>
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
  ${(props) =>
    props.current &&
    `
      background: #fff;
  `}
  &:after {
    content: '';
    display: block;
    height: ${spacing.large};
    width: 2px;
    background: ${colors.brand.greyLight};
    position: absolute;
    transform: translate(29px, -${spacingUnit * 3}px);
  }
  ${(props) =>
    !props.afterCurrent &&
    `
    a {
      > span {
        color: ${colors.text.primary};
        font-weight: ${fonts.weight.normal};
      }
      color: ${colors.text.primary};
      font-weight: ${fonts.weight.normal};
    }
    &:after {
      width: 4px;
      background: ${colors.text.light};
      transform: translate(28px, -${spacingUnit * 3}px);
    }
  `}
  ${(props) =>
    !props.afterCurrent &&
    !props.current &&
    props.invertedStyle &&
    `
    ${mq.range({ from: breakpoints.tablet })} {
      a {
        > span {
          color: #fff;
        }
        color: #fff;
      }
    }
    `}
`;

const StyledContentType = styled.div`
  position: relative;
  z-index: 1;
  margin-right: ${spacingUnit * 0.75}px;
  max-height: 35px;
`;

const HiddenSpan = styled.span`
  ${utils.visuallyHidden};
`;

type StyledNavigationProps = {
  isOpen: boolean;
  invertedStyle?: boolean;
};

const StyledNavigation = styled.nav<StyledNavigationProps>`
  > ul {
    list-style: none;
    padding: 0;
  }
  margin-bottom: ${spacing.medium};
  ${(props) =>
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

const ReadIcon = styled.div`
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -6px;
  right: 0;
  width: 16px;
  height: 16px;
  background: ${colors.brand.secondary};
  color: ${colors.text.light};
  transform: translateX(4px);
  svg {
    width: 12px;
    height: 12px;
    fill: ${colors.brand.lighter};
  }
`;

type Props = {
  learningsteps: StepProps[];
  learningPathId: number;
  isOpen: boolean;
  toLearningPathUrl(pathId: number, stepId: number): string;
  currentIndex: number;
  invertedStyle?: boolean;
  cookies: {
    [key: string]: string;
  };
  onStepNavigate: () => void;
};

const hasRead = (
  id: number,
  cookies: {
    [key: string]: string;
  },
) => !!cookies[id];

const LearningPathMenuContent = ({
  isOpen,
  currentIndex,
  cookies,
  learningPathId,
  learningsteps,
  toLearningPathUrl,
  invertedStyle,
  onStepNavigate,
}: Props) => {
  return (
    <StyledNavigation isOpen={isOpen} invertedStyle={invertedStyle}>
      <ul>
        {learningsteps.map(({ id, title, type }: StepProps, index: number) => (
          <StyledMenuItem
            key={id}
            current={index === currentIndex}
            afterCurrent={index > currentIndex}
            isOpen={isOpen}
            invertedStyle={invertedStyle}
            indexNumber={index}
          >
            <SafeLink
              onClick={onStepNavigate}
              to={toLearningPathUrl(learningPathId, id)}
              aria-describedby={`read-${id}`}
            >
              <StyledContentType>
                <ContentTypeBadge type={type ?? constants.contentTypes.LEARNING_PATH} background size="small" />
                {hasRead(id, cookies) && (
                  <div id={`read-${id}`} aria-hidden>
                    <HiddenSpan>Lest</HiddenSpan>
                    <ReadIcon>
                      <LearningPathRead />
                    </ReadIcon>
                  </div>
                )}
              </StyledContentType>
              <span>{title}</span>
            </SafeLink>
          </StyledMenuItem>
        ))}
      </ul>
    </StyledNavigation>
  );
};

export default LearningPathMenuContent;
