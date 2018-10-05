/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css, cx } from 'react-emotion';
import { spacing, colors, fonts, shadows, animations } from 'ndla-core';
import { Plus } from 'ndla-icons/action';

const ICON_SIZE = '48px';

const Wrapper = styled.div`
  position: absolute;
  transform: translate(
    calc(${ICON_SIZE} + ${spacing.small}),
    calc(-${ICON_SIZE} - (${spacing.large} + ${spacing.small}))
  );
  display: inline-block;
  z-index: 10;
  > div {
    padding: ${spacing.normal} 0;
    background: #fff;
    box-shadow: ${shadows.levitate1};
    ${animations.fadeInLeft(animations.durations.fast)};
  }
`;

const HeaderLabel = styled.div`
  font-weight: ${fonts.weight.normal};
  text-transform: uppercase;
  font-family: ${fonts.sans};
  color: ${colors.text.light};
  ${fonts.sizes(16, 1.1)};
  margin: 0 ${spacing.normal} ${spacing.normal} ${spacing.normal};
`;

const Item = styled.div`
  display: flex;
  height: 42px;
  align-items: flex-start;
  justify-content: space-between;
`;

const itemButton = css`
  padding: ${spacing.xsmall} ${spacing.large} ${spacing.xsmall}
    ${spacing.normal};
  border: 0;
  background: 0;
  color: ${colors.brand.primary};
  ${fonts.sizes(18, 1.1)};
  font-weight: ${fonts.weight.semibold};
  span {
    box-shadow: inset 0 -1px;
  }
  .c-icon {
    color: ${colors.brand.tertiary};
    margin-right: ${spacing.xsmall};
    width: ${spacing.normal};
    height: ${spacing.normal};
  }
  &:hover,
  &:focus {
    span {
      box-shadow: none;
    }
    .c-icon {
      color: ${colors.brand.primary};
    }
  }
`;

const buttonCSS = css`
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.brand.light};
  border: 2px solid ${colors.brand.primary};
  border-radius: 100%;
  transition: background 200ms ease, transform 200ms ease;
  .c-icon {
    width: ${spacing.medium};
    height: ${spacing.medium};
    color: ${colors.brand.primary};
    transition: transform 200ms ease;
  }
  &.--open {
    .c-icon {
      transform: rotate(135deg);
    }
  }
  &:hover,
  &:focus {
    background: ${colors.brand.tertiary};
  }
  &:active {
    transform: scale(0.9);
  }
`;

const SlateBlockMenu = ({
  heading,
  actions,
  clickItem,
  onToggleOpen,
  isOpen,
}) => (
  <Fragment>
    <button
      className={cx(buttonCSS, { '--open': isOpen })}
      type="button"
      onClick={onToggleOpen}>
      <Plus />
    </button>
    {isOpen && (
      <Wrapper>
        <div>
          <HeaderLabel>{heading}</HeaderLabel>
          {actions.map(action => (
            <Item key={action.data.object}>
              <button
                className={itemButton}
                type="button"
                onClick={() => clickItem(action.data)}>
                {action.icon && action.icon}
                <span>{action.label}</span>
              </button>
              {action.helpIcon}
            </Item>
          ))}
        </div>
      </Wrapper>
    )}
  </Fragment>
);

SlateBlockMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggleOpen: PropTypes.func.isRequired,
  heading: PropTypes.string,
  clickItem: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
      data: PropTypes.shape({
        type: PropTypes.string.isRequired,
        object: PropTypes.string.isRequired,
      }).isRequired,
      helpIcon: PropTypes.node,
    }),
  ),
};

export default SlateBlockMenu;
