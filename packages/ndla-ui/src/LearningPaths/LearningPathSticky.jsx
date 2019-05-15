/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, spacing, animations, typography } from '@ndla/core';
import { SafeLink } from '@ndla/ui';
import { Back, Forward } from '@ndla/icons/common';

const FOOTER_HEIGHT = 87;

const StyledFooter = styled.nav`
  display: flex;
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${FOOTER_HEIGHT}px;
  background: ${colors.brand.lighter};
  align-items: center;
  justify-content: space-between;
  ${animations.fadeInBottom()}
`;

export const LearningPathSticky = ({ children }) => (
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
  height: ${FOOTER_HEIGHT}px;
  padding: 0 ${spacing.medium} 0 ${spacing.medium};
  transition: background 200ms ease;
  > .c-icon--medium {
    transition: transform 200ms ease;
  }
  > div {
    display: flex;
    flex-direction: column;
    padding: 0 ${spacing.small};
    span:last-child {
      box-shadow: inset 0 -1px;
    }
  }
  &:hover, &:focus {
    background: rgba(0,0,0,0.1);
    > div span:last-child {
      box-shadow: none:
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



export const LearningPathStickySibling = ({ name, to, arrow, label }) => (
  <SafeLink to={to} css={SafeLinkCSS}>
    {arrow === 'left' && <Back className="c-icon--medium" />}
    <div>
      <span css={typography.smallHeading}>{label || ''}</span>
      <span>{name}</span>
    </div>
    {arrow === 'right' && <Forward className="c-icon--medium" />}
  </SafeLink>
);

LearningPathSticky.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  arrow: PropTypes.oneOf(['left', 'right']),
  label: PropTypes.string,
};