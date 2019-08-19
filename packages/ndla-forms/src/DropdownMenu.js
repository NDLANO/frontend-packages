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
import { checkIfItemIsSelected } from './checkIfItemIsSelected';

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
  t,
  maxRender,
  multiSelect,
  onCreate,
  positionAbsolute,
  menuHeight,
  disableSelected,
}) => {
  if (!isOpen) {
    return null;
  }
  return (
    <StyledDropDownContainer
      positionAbsolute={positionAbsolute}
      {...getMenuProps({ isOpen })}
      data-testid="dropdown-items">
      <StyledResultList menuHeight={menuHeight}>
        {items.slice(0, maxRender).map((item, index) => (
          <DropdownMenuItem
            {...getItemProps({
              item,
              isSelected: checkIfItemIsSelected(
                item,
                selectedItem,
                selectedItems,
                multiSelect,
                idField,
              ),
            })}
            disableSelected={disableSelected}
            item={
              idField && labelField
                ? { ...item, title: item[labelField], id: item[idField] }
                : { title: item, id: item }
            }
            key={`${labelField ? item[labelField] : item}${index}`}
          />
        ))}
      </StyledResultList>
      <StyledResultFooter>
        {loading
          ? t('dropdown.searching')
          : t('dropdown.numberHits', { hits: items.length })}
      </StyledResultFooter>
      {onCreate && (
        <StyledCreateButton type="button" onClick={onCreate}>
          {t('dropdown.create')}
        </StyledCreateButton>
      )}
    </StyledDropDownContainer>
  );
};

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ).isRequired,
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
};

DropdownMenu.defaultProps = {
  maxRender: 10,
  menuHeight: 500,
  disableSelected: false,
};

export default injectT(DropdownMenu);
