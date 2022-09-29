/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  AriaGuidanceProps,
  AriaOnChangeProps,
  AriaOnFilterProps,
  AriaOnFocusProps,
  GroupBase,
  OptionsOrGroups,
} from 'react-select';
import { TagType } from './types';

export const createAriaMessages = {
  guidance: (props: AriaGuidanceProps) => {
    const { isSearchable, isMulti, isDisabled, tabSelectsValue, context } = props;
    switch (context) {
      case 'menu':
        return `Use Up and Down to choose options${
          isDisabled ? '' : ', press Enter to select the currently focused option'
        }, press Escape to exit the menu${
          tabSelectsValue ? ', press Tab to select the option and exit the menu' : ''
        }.`;
      case 'input':
        return `${props['aria-label'] || 'Select'} is focused ${
          isSearchable ? ',type to refine list' : ''
        }, press Down to open the menu, ${
          isMulti ? ' press left to focus selected values' : ''
        } press space to create new tag`;
      case 'value':
        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
      default:
        return '';
    }
  },

  onChange: (props: AriaOnChangeProps<TagType, true>) => {
    const { action, label = '', labels, isDisabled } = props;
    switch (action) {
      case 'deselect-option':
      case 'pop-value':
      case 'remove-value':
        return `option ${label}, deselected.`;
      case 'clear':
        return 'All selected options have been cleared.';
      case 'initial-input-focus':
        return `option${labels.length > 1 ? 's' : ''} ${labels.join(',')}, selected.`;
      case 'select-option':
        return isDisabled ? `option ${label} is disabled. Select another option.` : `option ${label}, selected.`;
      default:
        return '';
    }
  },

  onFocus: (props: AriaOnFocusProps<TagType, GroupBase<TagType>>) => {
    const { context, focused, options, label = '', selectValue, isDisabled, isSelected } = props;

    const getArrayIndex = (arr: OptionsOrGroups<TagType, GroupBase<TagType>>, item: TagType) =>
      arr && arr.length ? `${arr.indexOf(item) + 1} of ${arr.length}` : '';

    if (context === 'value' && selectValue) {
      return `value ${label} focused, ${getArrayIndex(selectValue, focused)}.`;
    }

    if (context === 'menu') {
      const disabled = isDisabled ? ' disabled' : '';
      const status = `${isSelected ? 'selected' : 'focused'}${disabled}`;
      return `option ${label} ${status}, ${getArrayIndex(options, focused)}.`;
    }
    return '';
  },

  onFilter: (props: AriaOnFilterProps) => {
    const { inputValue, resultsMessage } = props;
    return `${resultsMessage}${inputValue ? ' for search term ' + inputValue : ''}.`;
  },
};
