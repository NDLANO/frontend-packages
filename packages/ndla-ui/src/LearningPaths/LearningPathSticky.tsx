/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, spacing, animations, mq, breakpoints } from '@ndla/core';
// @ts-ignore
import { Back, Forward } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';

const FOOTER_HEIGHT = '78px';
const FOOTER_HEIGHT_MOBILE = spacing.large;

const StyledFooter = styled.nav`
  display: flex;
  height: ${FOOTER_HEIGHT};
  width: 100%;
  ${mq.range({ until: breakpoints.tablet })} {
    --safe-area-inset-bottom: env(safe-area-inset-bottom);
    height: calc(${FOOTER_HEIGHT_MOBILE} + var(--safe-area-inset-bottom));
    min-height: var(-webkit-fill-available);
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: flex-end;
    padding-bottom: env(safe-area-inset-bottom);
  }
  background: ${colors.brand.lighter};
  align-items: center;
  justify-content: space-between;
  ${animations.fadeInBottom()}
`;

interface Props {
  children: React.ReactNode;
}

export const LearningPathSticky: React.FunctionComponent<Props> = ({
  children,
}) => <StyledFooter>{children}</StyledFooter>;

LearningPathSticky.propTypes = {
  children: PropTypes.node,
};

const SafeLinkCSS = css`
  display: flex;
  box-shadow: none;
  align-items: center;
  justify-content: center;
  color: ${colors.brand.primary};
  height: ${FOOTER_HEIGHT};
  ${mq.range({ until: breakpoints.tablet })} {
    height: ${FOOTER_HEIGHT_MOBILE};
    width: ${FOOTER_HEIGHT_MOBILE};
  }
  padding: 0 ${spacing.normal} 0 ${spacing.normal};
  ${mq.range({ until: breakpoints.tablet })} {
    padding: 0;
  }
  transition: background 200ms ease;
  > .c-icon--medium {
    transition: transform 200ms ease;
  }
  div {
    display: flex;
    flex-direction: column;
    padding: 0 ${spacing.small};
    span:last-child {
      box-shadow: inset 0 -1px;
    }
    ${mq.range({ until: breakpoints.tablet })} {
      display: none;
    }
  }
  &:hover,
  &:focus {
    hr {
      opacity: 0;
    }
    background: rgba(0, 0, 0, 0.1);
    div {
      span:last-child {
        box-shadow: none;
      }
    }
    ${mq.range({ from: breakpoints.tablet })} {
      > .c-icon--medium {
        transform: translateX(${spacing.xsmall});
      }
      &:first-of-type {
        > .c-icon--medium {
          transform: translateX(-${spacing.xsmall});
        }
      }
    }
  }
`;

const StyledTitle = styled.span`
  ${mq.range({ until: breakpoints.tablet })} {
    display: none;
  }
`;

type PropsSiblings = {
  title: string;
  toLearningPathUrl(pathId: number, stepId: number): string;
  arrow?: 'left' | 'right';
  pathId: number;
  stepId: number;
};

export const LearningPathStickySibling: React.FunctionComponent<PropsSiblings> = ({
  title,
  toLearningPathUrl,
  pathId,
  stepId,
  arrow,
}) => (
  <SafeLink to={toLearningPathUrl(pathId, stepId)} css={SafeLinkCSS}>
    {arrow === 'left' && <Back className="c-icon--medium" />}
    <div>
      <StyledTitle>{title}</StyledTitle>
    </div>
    {arrow === 'right' && <Forward className="c-icon--medium" />}
  </SafeLink>
);

export const LearningPathStickyPlaceholder: React.FunctionComponent = () => (
    <div css={SafeLinkCSS} />
)
