/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { spacing, colors, fonts } from '@ndla/core';
import { Star } from '@ndla/icons/editor';

const itemTitleArrow = css`
  &:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 9px solid ${colors.text.primary};
    margin-right: ${spacing.xsmall};
  }
`;

const itemTitleLinked = css`
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-bottom: 2px solid ${colors.brand.light};
    border-left: 2px solid ${colors.brand.light};
    border-bottom-left-radius: 2px;
    margin-right: ${spacing.xsmall};
    margin-left: 7px;
  }
`;

const ItemTitleButton = styled.button`
  ${fonts.sizes(16, 1)};
  font-weight: ${fonts.weight.semibold};
  border: 0;
  background: 0;
  color: ${props =>
    !props.isVisible ? colors.brand.grey : colors.brand.primary};
  display: flex;
  align-items: center;
  text-align: left;
  white-space: nowrap;
  font-style: ${props => !props.isVisible && 'italic'};

  ${props => props.hasSubtopics && itemTitleArrow};
  ${props =>
    props.lastItemClickable &&
    css`
      cursor: pointer;
    `};
  ${props => !props.hasSubtopics && !props.isSubject && itemTitleLinked};

  &:before {
    transition: transform 200ms ease;
    transform: rotate(
      ${props => props.hasSubtopics && props.arrowDirection}deg
    );
  }
`;

const RoundIcon = ({ smallIcon, ...rest }) => (
  <StyledIcon {...rest}> {smallIcon}</StyledIcon>
);

RoundIcon.propTypes = {
  smallIcon: PropTypes.node,
  clicked: PropTypes.bool,
};

const StyledIcon = styled.button`
  display: flex;
  align-items: center;

  border: 0;
  background: 0;

  svg:hover {
    fill: #fcba03;
    cursor: pointer;
  }
`;

const StyledItemBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${spacing.small} 0
    calc(${props => props.level} * 17px + ${spacing.small});
  height: 40px;
  border-bottom: 1px solid ${colors.brand.greyLighter};
  background: ${props => props.highlight && colors.brand.light};

  &:hover {
    background: ${props => (props.highlight ? colors.brand.light : '#f1f5f8')};
  }
`;

const ItemTitleSpan = ItemTitleButton.withComponent('span');

const ItemNameBar = ({
  title,
  children,
  path,
  toggleOpen,
  hasSubtopics,
  highlight,
  isOpen,
  isSubject,
  lastItemClickable,
  id,
  level,
  isVisible,
  favoriteSubjectIds,
  toggleFavorite,
}) => (
  <StyledItemBar level={level} highlight={highlight}>
    {favoriteSubjectIds && (
      <RoundIcon
        onClick={() => toggleFavorite()}
        smallIcon={
          favoriteSubjectIds.includes(id) ? (
            <Star color="#fcba03" />
          ) : (
            <Star color={colors.brand.greyDark} />
          )
        }
      />
    )}
    {lastItemClickable || hasSubtopics ? (
      <ItemTitleButton
        type="button"
        id={id}
        hasSubtopics={hasSubtopics}
        isSubject={isSubject}
        lastItemClickable={lastItemClickable}
        arrowDirection={isOpen ? 90 : 0}
        onClick={() => toggleOpen(path)}
        isVisible={isVisible}>
        {title}
      </ItemTitleButton>
    ) : (
      <ItemTitleSpan isVisible={isVisible}>{title}</ItemTitleSpan>
    )}
    {children}
  </StyledItemBar>
);

ItemNameBar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  path: PropTypes.string.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  hasSubtopics: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool,
  lastItemClickable: PropTypes.bool,
  id: PropTypes.string,
  isSubject: PropTypes.bool,
  isVisible: PropTypes.bool,
  favoriteSubjectIds: PropTypes.arrayOf(PropTypes.string),
  toggleFavorite: PropTypes.func,
};

export default ItemNameBar;
