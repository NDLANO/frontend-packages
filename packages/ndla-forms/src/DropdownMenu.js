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
import { injectT } from '@ndla/i18n';
import { colors, fonts, spacing, shadows, misc, animations } from '@ndla/core';
import DropdownMenuItem from './DropdownMenuItem';

const StyledDropDownContainer = styled.div`
  font-family: ${fonts.sans};
  background: #fff;
  border-radius: ${misc.borderRadius};
  box-shadow: ${shadows.levitate1};
  transition: height 100ms ease;
  ${props => props.positionAbsolute && 'position: absolute; z-index: 1;'}
  width: 100%;
`;

const StyledResultList = styled.div`
  overflow-y: scroll;
  ${animations.fadeInLeft(animations.durations.fast)};
  border-top: 1px solid ${colors.brand.greyLightest};
  max-height: ${props => props.menuHeight}px;
`;

const CreateButton = styled.button`
  border: 0;
  border-bottom: 1px solid ${colors.brand.greyLightest};
  border-top: 1px solid ${colors.brand.greyLightest};
  padding: ${spacing.small};
  width: 100%;
  transition: background 200ms ease;
  &:focus,
  &:hover {
    background: ${colors.brand.lighter};
  }
`;

const StyledResultFooter = styled.div`
  ${fonts.sizes(14, 1.1)};
  color: ${colors.text.light};
  padding: ${spacing.small};
  border-top: 1px solid ${colors.brand.greyLightest};
`;

const DropdownMenu = ({
  items,
  isOpen,
  selectedItem,
  selectedItems,
  loading,
  getItemProps,
  getMenuProps,
  t,
  maxRender,
  multiSelect,
  onCreate,
  positionAbsolute,
  menuHeight,
}) => {
  const checkIsSelected = item => {
    if (multiSelect) {
      return selectedItems.includes(item.title);
    } else if (typeof selectedItem === 'string') {
      return selectedItem === item.title;
    }
    return selectedItem && selectedItem.id === item.id;
  };

  if (!isOpen) return null;
  return (
    <StyledDropDownContainer
      positionAbsolute={positionAbsolute}
      {...getMenuProps({ isOpen })}
      data-testid="dropdown-items">
      <StyledResultList menuHeight={menuHeight}>
        {items.slice(0, maxRender).map(item => {
          const isSelected = checkIsSelected(item);
          return (
            <DropdownMenuItem
              {...getItemProps({ item, isSelected })}
              item={item}
            />
          );
        })}
      </StyledResultList>
      <StyledResultFooter>
        {loading
          ? t('dropdown.searching')
          : t('dropdown.numberHits', { hits: items.length })}
      </StyledResultFooter>
      {onCreate && (
        <CreateButton type="button" onClick={onCreate}>
          {t('dropdown.create')}
        </CreateButton>
      )}
    </StyledDropDownContainer>
  );
};

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ).isRequired,
  absolute: PropTypes.bool,
  onCreate: PropTypes.func,
  isOpen: PropTypes.bool,
  multiSelect: PropTypes.bool,
  selectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  selectedItems: PropTypes.array,
  loading: PropTypes.bool,
  getItemProps: PropTypes.func.isRequired,
  getMenuProps: PropTypes.func.isRequired,
  maxRender: PropTypes.number,
};

DropdownMenu.defaultProps = {
  maxRender: 10,
  menuHeight: 500,
};

export default injectT(DropdownMenu);
