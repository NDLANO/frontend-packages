/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { KeyboardEvent, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { MultiValue, StylesConfig } from 'react-select';
import { useTranslation } from 'react-i18next';
import { TagType } from './types';
import ValueButton from './ValueButton';
import DropdownIndicator from './DropdownIndicator';
import SelectContainer from './SelectContainer';
import MenuList from './MenuList';
import Control from './Control';
import Option from './Option';
import Menu from './Menu';

const styles: StylesConfig<TagType, true> = {
  menu: () => ({}),
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

  const handleSpaceClick = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
      if (!selected.find((tag) => tag.value === input) && input !== '') {
        onChange(selected.concat({ value: input, label: input }));
      }
      setInput('');
    }
  };

  return (
    <CreatableSelect
      tabSelectsValue={false}
      hideSelectedOptions={false}
      placeholder={t('tagSelector.placeholder')}
      isMulti
      isClearable={false}
      value={selected}
      options={tags}
      onChange={onChange}
      components={{
        DropdownIndicator,
        MultiValue: ValueButton,
        SelectContainer,
        MenuList,
        Control,
        Option,
        Menu,
      }}
      onKeyDown={handleSpaceClick}
      onInputChange={setInput}
      inputValue={input}
      styles={styles}
    />
  );
};

export default TagSelector;
