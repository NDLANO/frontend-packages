/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { colors } from '@ndla/core';
import { MultiValue, StylesConfig } from 'react-select';
import { useTranslation } from 'react-i18next';
import { TagType } from './types';
import ValueButton from './ValueButton';
import DropdownButton from './DropdownButton';
import TagSelectorContainer from './TagSelectorContainer';
import MenuList from './MenuList';
import TagSelectorControl from './TagSelectorControl';
import MenuOption from './MenuOption';

const styles: StylesConfig<TagType, true> = {
  menu: (provided) => ({
    ...provided,
    position: 'relative',
    boxShadow: 'none',
    margin: 0,
    borderTop: `1px solid ${colors.brand.tertiary}`,
    borderRadius: 'none',
    top: 'unset',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    minHeight: '70px',
  }),
  valueContainer: (provided) => ({ ...provided, padding: 0 }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    alignSelf: 'flex-end',
  }),
};

interface Props {
  label: string;
  tags: readonly TagType[];
  selected: readonly TagType[];
  onChange: (tags: MultiValue<TagType>) => void;
  prefix?: string;
}

const TagSelector = ({ selected, tags, onChange }: Props) => {
  const { t } = useTranslation();

  const [input, setInput] = useState('');

  return (
    <CreatableSelect
      hideSelectedOptions={false}
      placeholder={t('tagSelector.placeholder')}
      isMulti
      isClearable={false}
      value={selected}
      options={tags}
      onChange={onChange}
      components={{
        DropdownIndicator: DropdownButton,
        MultiValue: ValueButton,
        SelectContainer: TagSelectorContainer,
        MenuList,
        Control: TagSelectorControl,
        Option: MenuOption,
      }}
      onKeyDown={(e) => {
        if (e.key === ' ') {
          e.preventDefault();
          if (!selected.find((tag) => tag.value === input) && input !== '') {
            onChange(selected.concat({ value: input, label: input }));
          }
          setInput('');
        }
      }}
      onInputChange={setInput}
      inputValue={input}
      styles={styles}
    />
  );
};

export default TagSelector;
