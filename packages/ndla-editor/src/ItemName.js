/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { spacing, colors, fonts } from '@ndla/core';

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
${fonts.sizes(16, 1)} font-weight: ${fonts.weight.semibold};
border: 0;
background: 0;
color: ${colors.brand.primary};
display: flex;
align-items: center;
text-align: left;
white-space: nowrap;
cursor: pointer;

${props => props.hasSubtopics && itemTitleArrow};
${props => !props.hasSubtopics && props.level !== 0 && itemTitleLinked};
&:before {
  transition: transform 200ms ease;
  transform: rotate(${props => props.hasSubtopics && props.arrowDirection}deg);
}
`;

const itemNameStyling = css`
  display: flex;
  justify-content: space-between;
`;

const ItemName = ({
  title,
  children,
  path,
  toggleOpen,
  hasSubtopics,
  isOpen,
  level,
  isMainActive,
}) => (
  <div className={itemNameStyling}>
    <ItemTitleButton
      type="button"
      hasSubtopics={hasSubtopics}
      level={level}
      arrowDirection={isOpen ? 90 : 0}
      isMainActive={isMainActive}
      onClick={() => toggleOpen(path)}>
      {title}
    </ItemTitleButton>

    {children}
  </div>
);

ItemName.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  path: PropTypes.string.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  hasSubtopics: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool,
  level: PropTypes.number,
  isMainActive: PropTypes.bool,
};

export default ItemName;
