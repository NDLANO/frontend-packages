/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { OnChangeValue, MultiValue, StylesConfig, ContainerProps } from 'react-select';
import { useTranslation } from 'react-i18next';
import { TagType } from './types';
import ValueButton from './ValueButton';
import DropdownButton from './DropdownButton';
import { colors, spacing } from '@ndla/core';
import TagSelectorContainer from './TagSelectorContainer';
import MenuList from './MenuList';
import TagSelectorControl from './TagSelectorControl';

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
  onCreateTag: (tag: string) => void;
  prefix?: string;
}

const TagSelector = ({ selected, tags, onCreateTag, onChange }: Props) => {
  const { t } = useTranslation();
  const handleChange = (newValue: OnChangeValue<TagType, true>) => {
    onChange(newValue);
  };

  const onCreateOption = (inputValue: string) => {
    onCreateTag(inputValue);
  };

  return (
    <CreatableSelect
      placeholder={t('tagSelector.placeholder')}
      isMulti
      isClearable={false}
      value={selected}
      options={tags}
      onChange={handleChange}
      onCreateOption={onCreateOption}
      components={{
        DropdownIndicator: DropdownButton,
        MultiValue: ValueButton,
        SelectContainer: TagSelectorContainer,
        MenuList,
        Control: TagSelectorControl,
      }}
      styles={styles}
    />
  );
};

export default TagSelector;
