/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { SafeLink, ContentTypeBadge } from '@ndla/ui';
import Button from '@ndla/button';
import { Time } from '@ndla/icons/common';
import { colors, spacing, fonts, misc, typography, mq, breakpoints } from '@ndla/core';

const StyledMenu = styled.div`
  max-width: 378px;
  width: 378px;
  > nav {
    > ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
  ${mq.range({ until: breakpoints.desktop })} {
    ${props => !props.isOpen && `
      width: 60px;
      ${StyledMenuIntro} {
        display: none;
      }
      ${StyledMenuItem} {
        a, small {
          display: none;
        }
        &:first-of-type {
          &:after {
            display: none;
          }
        }
        &:hover {
          background: ${colors.brand.greyLighter};
          a, small {
            display: flex;
          }
        }
      }
    `}
  }
`;

const StyledMenuItem = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${spacing.small};
  small {
    ${typography.smallHeading}
  }
  a {
    ${fonts.sizes(14, 1.2)};
    font-weight: ${fonts.weight.semibold};
    color: ${colors.brand.primary};
  }
  ${props => props.current && `
    &:before {
      content: '';
      display: block;
      width: 6px;
      height: 6px;
      background: red;
      position: absolute;
      border-radius: 100%;
      transform: translateX(-${spacing.small});
    }
  `}
  ${props => !props.afterCurrent && `
    a {
      font-weight: ${fonts.weight.normal};
      color: ${colors.text.primary};
    }
    &:after {
      content: '';
      display: block;
      height: 60px;
      width: 4px;
      background: ${colors.brand.grey};
      position: absolute;
      transform: translate(15px, -30px);
    }
  `}
`;

const StyledMenuIntro = styled.div`
    margin-left: 28px;
    border-left: 4px solid ${colors.brand.grey};
    &:before {
      content: '';
      display: block;
      background: ${colors.brand.grey};
      border-radius: 100%;
      height: 12px;
      width: 12px;
      position: absolute;
      transform: translate(-8px, -8px);
    }
    > div {
      padding: ${spacing.medium} 0 ${spacing.medium} 50px;
    }
`;

const StyledTimeBox = styled.div`
  background: ${colors.brand.lighter};
  border: 1px solid ${colors.brand.light};
  border-radius: ${misc.borderRadius};
  ${fonts.sizes(14, 1.2)};
  font-weight: ${fonts.weight.normal};
  padding: ${spacing.small} ${spacing.spacingUnit * 0.75}px ${spacing.small} ${spacing.small};
  display: inline-flex;
  svg {
    margin-right: ${spacing.xsmall};
  }
`;

const ContentTypeCSS = css`
  position: relative;
  z-index: 1;
  margin-right: ${spacing.small};
`;

const renderMenuItems = menuItems => {
  let foundCurrent = false;
  return menuItems.map(({ url, name, contentType, current }) => {
    if (current) {
      foundCurrent = true;
    }
    return (
      <StyledMenuItem current={current} afterCurrent={foundCurrent && !current} key={url}>
        <div css={ContentTypeCSS}>
          <ContentTypeBadge type={contentType} background />
        </div>
        <SafeLink to={url}>{name}</SafeLink>
        {current && <small>Du er her</small>}
      </StyledMenuItem>
    );
  });
};

export const LearningPathMenu = ({ menuItems, name, estimatedTime }) => {
  const [isOpen, toggleOpenState] = useState(false);
  return (
    <StyledMenu isOpen={isOpen}>
      <Button onClick={() => toggleOpenState(!isOpen)}>
        OPEN MENU
      </Button>
      <StyledMenuIntro>
        <div>
          <p css={typography.smallHeading}>Du er nå inne i en læringssti</p>
          <h1>{name}</h1>
          <StyledTimeBox>
            <Time /> {Math.round((estimatedTime / 0.75) * 10) / 10} Skoletimer = {estimatedTime * 60} min
          </StyledTimeBox>
        </div>
      </StyledMenuIntro>
      <nav>
        <ul>
          {renderMenuItems(menuItems)}
        </ul>
      </nav>
    </StyledMenu>
  );
};

LearningPathMenu.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  name: PropTypes.string.isRequired,
  estimatedTime: PropTypes.number,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    contentType: PropTypes.string.isRequired,
    current: PropTypes.bool,
  })).isRequired,
};