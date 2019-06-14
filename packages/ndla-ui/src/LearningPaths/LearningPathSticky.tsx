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
import { colors, spacing, animations, typography, mq, breakpoints } from '@ndla/core';
// @ts-ignore
import { SafeLink } from '@ndla/ui';
// @ts-ignore
import { Back, Forward } from '@ndla/icons/common';

const FOOTER_HEIGHT = '78px';
const FOOTER_HEIGHT_MOBILE = spacing.large;

const StyledFooter = styled.nav`
  display: flex;
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${FOOTER_HEIGHT};
  ${mq.range({ until: breakpoints.tablet })} {
    height: ${FOOTER_HEIGHT_MOBILE};
  }
  background: ${colors.brand.lighter};
  align-items: center;
  justify-content: space-between;
  ${animations.fadeInBottom()}
`;

interface Props {
  children: React.ReactNode;
}

export const LearningPathSticky = ({ children }:Props) => (
  <StyledFooter>{children}</StyledFooter>
);

LearningPathSticky.propTypes = {
  children: PropTypes.node,
};

const SafeLinkCSS = css`
  display: flex;
  box-shadow: none;
  align-items: center;
  color: ${colors.brand.primary};
  height: ${FOOTER_HEIGHT};
  ${mq.range({ until: breakpoints.tablet })} {
    height: ${FOOTER_HEIGHT_MOBILE};
  }
  padding: 0 ${spacing.normal} 0 ${spacing.normal};
  ${mq.range({ until: breakpoints.tablet })} {
    padding: 0 ${spacing.small} 0 ${spacing.small};
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
  }
  &:hover,
  &:focus {
    hr {
      opacity: 0;
    }
    background: rgba(0,0,0,0.1);
    div {
      span:last-child {
        box-shadow: none;
      }
    }
    > .c-icon--medium {
      transform: translateX(${spacing.xsmall});
    }
    &:first-of-type {
      > .c-icon--medium {
        transform: translateX(-${spacing.xsmall});
      }
    }
  }
`;

const labelCSS = css`
  ${typography.smallHeading}
  display: none;
  ${mq.range({ until: breakpoints.tablet })} {
    display: flex;
    color: ${colors.brand.primary};
  }
`;

const titleCSS = css`
  ${mq.range({ until: breakpoints.tablet })} {
    display: none;
  }
`;

interface PropsSiblings {
  title: string;
  to: string;
  arrow?: 'left' | 'right';
  label: string;
}

export const LearningPathStickySibling = ({ title, to, arrow, label }:PropsSiblings) => (
  <SafeLink to={to} css={SafeLinkCSS}>
    {arrow === 'left' && <Back className="c-icon--medium" />}
    <div>
      <span css={labelCSS}>{label}</span>
      <span css={titleCSS}>{title}</span>
    </div>
    {arrow === 'right' && <Forward className="c-icon--medium" />}
  </SafeLink>
);