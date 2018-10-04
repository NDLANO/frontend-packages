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
    calc(${ICON_SIZE} + ${spacing.normal}),
    calc(-${ICON_SIZE} - ${spacing.small})
  );
  display: inline-block;
  z-index: 10;
  > div {
    padding: ${spacing.small} ${spacing.normal};
    background: #fff;
    box-shadow: ${shadows.levitate1};
    ${animations.fadeInLeft(animations.durations.fast)};
  }
`;

const HeaderLabel = styled.div`
  margin: 0 0 ${spacing.normal} 0;
`;

const Item = styled.div`
  display: flex;
  height: ${spacing.medium};
  align-items: space-between;
  justify-content: center;
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
            <Item key={action.data.type}>
              <button type="button" onClick={() => clickItem(action.data)}>
                {action.icon}
                {action.label}
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
