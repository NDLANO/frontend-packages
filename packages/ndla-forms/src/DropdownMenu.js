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
  > div {
    display: flex;
    flex-direction: column;
    > div {
      &:first-child {
        flex-grow: 1;
        overflow-y: scroll;
        ${animations.fadeInLeft(animations.durations.fast)};
        border-top: 1px solid ${colors.brand.greyLightest};
      }
      &:last-child {
        padding: ${spacing.small};
        border-top: 1px solid ${colors.brand.greyLightest};
      }
    }
  }
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

const StyledResult = styled.div`
  ${fonts.sizes(14, 1.1)};
  color: ${colors.text.light};
`;

const DropdownMenu = ({
  items,
  isOpen,
  selectedItem,
  selectedItems,
  loading,
  renderImage,
  renderDescription,
  dontShowOnEmptyFilter,
  inputValue,
  getItemProps,
  getMenuProps,
  t,
  maxRender,
  multiSelect,
  onCreate,
}) => {
  const checkIsSelected = item => {
    if (multiSelect) {
      return selectedItems.includes(item.title);
    } else if (typeof selectedItem === 'string') {
      return selectedItem === item.title;
    }
    return selectedItem && selectedItem.id === item.id;
  };

  if (!isOpen || (dontShowOnEmptyFilter && !inputValue)) return null;
  return (
    <StyledDropDownContainer data-testid="dropdown-items">
      <div {...getMenuProps({ isOpen })}>
        {items.slice(0, maxRender).map(item => {
          const isSelected = checkIsSelected(item);
          return (
            <DropdownMenuItem
              {...getItemProps({ item, isSelected })}
              item={item}
              renderImage={renderImage}
              renderDescription={renderDescription}
            />
          );
        })}
        <StyledResult>
          {loading
            ? t('dropdown.searching')
            : t('dropdown.numberHits', { hits: items.length })}
        </StyledResult>
        {onCreate && (
          <CreateButton type="button" onClick={onCreate}>
            {t('dropdown.create')}
          </CreateButton>
        )}
      </div>
    </StyledDropDownContainer>
  );
};

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ),
};

DropdownMenu.defaultProps = {
  maxRender: 10,
};

export default injectT(DropdownMenu);
