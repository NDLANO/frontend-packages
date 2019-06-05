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

const FOOTER_HEIGHT = '87px';
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
    &:first-child {
      > .c-icon--medium {
        transform: translateX(-${spacing.xsmall});
      }
    }
  }
`;

const lineCSS = css`
  height: ${spacing.large};
  width: 1px;
  background: ${colors.brand.tertiary};
  margin-right: ${spacing.normal};
  margin-left: -${spacing.normal};
  border: 0;
  transition: opacity 200ms ease;
  &:before {
    display: none;
  }
`;

const labelCSS = css`
  ${typography.smallHeading}
  ${mq.range({ until: breakpoints.tablet })} {
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
  icon?: React.ReactNode;
}

export const LearningPathStickySibling = ({ title, to, arrow, label, icon }:PropsSiblings) => (
  <SafeLink to={to} css={SafeLinkCSS}>
    {arrow === 'left' && <Back className="c-icon--medium" />}
    {icon && <hr css={lineCSS} />}
    {icon && icon}
    <div>
      <span css={labelCSS}>{label}</span>
      <span css={titleCSS}>{title}</span>
    </div>
    {arrow === 'right' && <Forward className="c-icon--medium" />}
  </SafeLink>
);