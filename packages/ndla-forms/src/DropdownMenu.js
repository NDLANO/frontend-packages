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
import { useTranslation } from 'react-i18next';
import { colors, fonts, spacing, shadows, misc, animations } from '@ndla/core';
import Pager from '@ndla/pager';
import DropdownMenuItem from './DropdownMenuItem';
import { getFieldValue, checkIfItemIsSelected } from './dropdownHelper';

const StyledDropDownContainer = styled.div`
  font-family: ${fonts.sans};
  background: #fff;
  border-radius: ${misc.borderRadius};
  box-shadow: ${shadows.levitate1};
  transition: height 100ms ease;
  ${(props) => props.positionAbsolute && 'position: absolute; z-index: 99;'}
  width: ${(props) => (props.wide ? '120%' : '100%')};
`;

const StyledResultList = styled.div`
  overflow-y: scroll;
  ${animations.fadeInLeft(animations.durations.fast)};
  border-top: 1px solid ${colors.brand.greyLightest};
  max-height: ${(props) => props.menuHeight}px;
`;

const StyledCreateButton = styled.button`
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
  labelField,
  idField,
  isOpen,
  selectedItem,
  selectedItems,
  loading,
  getItemProps,
  getMenuProps,
  maxRender,
  multiSelect,
  onCreate,
  positionAbsolute,
  menuHeight,
  disableSelected,
  totalCount,
  customCreateButtonText,
  hideTotalSearchCount,
  handlePageChange,
  page,
  highlightedIndex,
  wide,
}) => {
  const { t } = useTranslation();
  if (!isOpen) {
    return null;
  }
  return (
    <StyledDropDownContainer
      positionAbsolute={positionAbsolute}
      wide={wide}
      {...getMenuProps({ isOpen })}
      data-testid="dropdown-items"
    >
      <StyledResultList menuHeight={menuHeight}>
        {items.slice(0, maxRender).map((item, index) => (
          <DropdownMenuItem
            {...getItemProps({
              item,
              isSelected: checkIfItemIsSelected(item, selectedItem, selectedItems, multiSelect, idField),
            })}
            disableSelected={disableSelected}
            highlighted={highlightedIndex === index}
            item={{
              ...item,
              title: getFieldValue(item, labelField),
              id: getFieldValue(item, idField),
            }}
            key={`${getFieldValue(item, labelField)}${index}`}
          />
        ))}
      </StyledResultList>
      {page && totalCount > maxRender && (
        <Pager
          page={parseInt(page, 10)}
          lastPage={totalCount ? Math.ceil(totalCount / maxRender) : 1}
          onClick={handlePageChange}
          pageItemComponentClass="button"
        />
      )}
      {!hideTotalSearchCount && (
        <StyledResultFooter>
          {loading ? t('dropdown.searching') : t('dropdown.numberHits', { hits: totalCount || items.length })}
        </StyledResultFooter>
      )}
      {onCreate && (
        <StyledCreateButton type="button" onClick={onCreate}>
          {customCreateButtonText ? customCreateButtonText : t('dropdown.create')}
        </StyledCreateButton>
      )}
    </StyledDropDownContainer>
  );
};

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
  idField: PropTypes.string,
  labelField: PropTypes.string,
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
  disableSelected: PropTypes.bool,
  totalCount: PropTypes.number,
  customCreateButtonText: PropTypes.string,
  hideTotalSearchCount: PropTypes.bool,
  handlePageChange: PropTypes.func,
  page: PropTypes.number,
  wide: PropTypes.bool,
};

DropdownMenu.defaultProps = {
  maxRender: 10,
  menuHeight: 500,
  disableSelected: false,
};

export default DropdownMenu;
