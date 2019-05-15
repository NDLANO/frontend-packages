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
import { useWindowSize } from '@ndla/hooks';
import { Time } from '@ndla/icons/common';
import { colors, spacing, fonts, misc, typography, mq, breakpoints } from '@ndla/core';
import { ArrowExpandRight, ArrowExpandLeft } from '@ndla/icons/action';
import Modal from '@ndla/modal';

const StyledMenu = styled.div`
  width: 100%;
  ${mq.range({ from: breakpoints.tablet })} {
    max-width: 378px;
    width: 378px;
  }
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    ${props => !props.isOpen && `
      width: 60px;
      ${StyledMenuIntro} {
        display: none;
      }
    `}
  }
`;

const numbersButtonCSS = css`
  display: flex;
  align-items: center;
  background: ${colors.brand.light};
  padding: ${spacing.xsmall} ${spacing.small};
  color: ${colors.brand.primary};
  font-weight: ${fonts.weight.semibold};
  border-radius: ${misc.borderRadius};
  small {
    display: flex;
    padding: 0 3px;
  }
`;

const navCSS = css`
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const navCSSClosed = css`
  ${mq.range({ until: breakpoints.desktop })} {
    ${StyledMenuItem} {
      span {
        display: none;
      }
      &:first-child {
        &:after {
          display: none !important;
        }
      }
      a:hover, a:focus {
        position: relative;
        z-index: 1;
        width: 378px;
        background: ${colors.brand.greyLighter};
        span {
          display: flex;
        }
      }
    }
  }
`;

const asideCSS = css`
  display: none;
  flex-direction: column;
  padding-left: ${spacing.spacingUnit * 2.25}px;
  ${mq.range({ from: breakpoints.tablet })} {
    ${props => props.isOpen && `
      display: flex;
    `}
  }
  ${mq.range({ from: breakpoints.desktop })} {
    display: flex;
  }
`;

const StyledMenuItem = styled.li`
  a {
    box-shadow: none;
    height: 60px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: ${spacing.small};
    span {
      ${fonts.sizes(14, 1.2)};
      font-weight: ${fonts.weight.semibold};
      color: ${colors.brand.primary};
      align-items: center;
    }
    small {
      ${typography.smallHeading}
      padding-left: ${spacing.xsmall};
    }
  }
  ${props => props.current && props.isOpen && `
    a {
      background: #fff;
      &:before {
        position: absolute;
        content: '';
        display: block;
        background: #fff;
        height: 60px;
        width: ${spacing.small};
        transform: translateX(-${spacing.normal});
      }
    }
  `}
  ${props => props.current && `
    &:before {
      content: '';
      display: block;
      width: 6px;
      height: 6px;
      background: red;
      position: absolute;
      border-radius: 100%;
      transform: translate(0, 27px);
      z-index: 2;
    }
  `}
  &:after {
    content: '';
    display: block;
    height: 60px;
    width: 2px;
    background: ${colors.brand.greyLight};
    position: absolute;
    transform: translate(29px, -90px);
  }
  ${props => !props.afterCurrent && `
    a {
      font-weight: ${fonts.weight.normal};
      color: ${colors.text.primary};
    }
    &:after {
      width: 4px;
      background: ${colors.brand.grey};
      transform: translate(28px, -90px);
    }
  `}
`;

const StyledMenuIntro = styled.div`
    margin-left: 28px;
    margin-top: ${spacing.normal};
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
      padding: 0 0 ${spacing.medium} ${spacing.normal};
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

const StyledToggleMenubutton = styled.button`
  background: ${colors.brand.primary};
  color: #fff;
  display: none;
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    display: flex;
  }
`;

const ContentTypeCSS = css`
  position: relative;
  z-index: 1;
  margin-right: ${spacing.small};
`;

const wrapperCSS = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 -${spacing.normal} ${spacing.medium};
  background: ${colors.brand.lighter};
  padding: ${spacing.xsmall} ${spacing.normal};
`;

const ModalWrapperComponent = ({ innerWidth, currentIndex, learningStepsTotal, children }) => (
  innerWidth < 601 ? (
    <div css={wrapperCSS}>
      <Modal
        backgroundColor="grey"
        animation="slide-up"
        animationDuration={200}
        size="fullscreen"
        activateButton={
          <button type="button" css={numbersButtonCSS}>{currentIndex}<small> av </small>{learningStepsTotal}</button>
        }>
        {onClose => (
          <div>
            <button onClick={onClose}>Close</button>
            {children}
          </div>
        )}
      </Modal>
      <div css={typography.smallHeading}>Du er nå inne i en læringssti</div>
    </div>
  ) : children
);

const renderMenu = ({ learningSteps, currentIndex, isOpen }) => (
  <nav css={[navCSS, !isOpen && navCSSClosed]}>
    <ul>
      {learningSteps.map(({ id, url, title, type, current }, index) => (
        <StyledMenuItem
          key={id}
          current={index === currentIndex}
          afterCurrent={index > currentIndex}
          isOpen={isOpen}>
          <SafeLink to={url}>
            <div css={ContentTypeCSS}>
              <ContentTypeBadge type={type} background />
            </div>
            <span>
              {title}
              {current && <small>Du er her</small>}
            </span>
          </SafeLink>
        </StyledMenuItem>
      ))}
    </ul>
  </nav>
);

export const LearningPathMenu = ({ learningSteps, name, estimatedTime, lastUpdated, authors, license }) => {
  const [isOpen, toggleOpenState] = useState(false);
  const { innerWidth } = useWindowSize(100);
  const currentIndex = learningSteps.findIndex(menuItem => menuItem.current);
  return (
    <StyledMenu isOpen={isOpen}>
      <ModalWrapperComponent innerWidth={innerWidth} currentIndex={currentIndex} learningStepsTotal={learningSteps.length}>
        <StyledToggleMenubutton type="button" onClick={() => toggleOpenState(!isOpen)}>
          {!isOpen ? <ArrowExpandRight /> : <ArrowExpandLeft />}
        </StyledToggleMenubutton>
        <StyledMenuIntro isOpen={isOpen}>
          <div>
            <p css={typography.smallHeading}>Du er nå inne i en læringssti</p>
            <h1>{name}</h1>
            <StyledTimeBox>
              <Time /> {Math.round((estimatedTime / 0.75) * 10) / 10} Skoletimer = {estimatedTime * 60} min
            </StyledTimeBox>
          </div>
        </StyledMenuIntro>
        {renderMenu({ learningSteps, isOpen, currentIndex })}
        <aside css={asideCSS}>
          sist oppdatert: {lastUpdated}
          {authors.map(author => (
            <p>{author}</p>
          ))}
          {license}
        </aside>
      </ModalWrapperComponent>
    </StyledMenu>
  );
};

LearningPathMenu.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  name: PropTypes.string.isRequired,
  estimatedTime: PropTypes.number,
  lastUpdated: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  learningSteps: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    current: PropTypes.bool,
  })).isRequired,
};