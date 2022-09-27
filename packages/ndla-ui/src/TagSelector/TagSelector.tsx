/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue, MultiValue, StylesConfig, DropdownIndicatorProps, GroupBase } from 'react-select';
import { useTranslation } from 'react-i18next';
import Tooltip from '@ndla/tooltip';
import { iconButtonStyle } from '@ndla/button';
import { ChevronUp, ChevronDown } from '@ndla/icons/common';

export interface TagType {
  readonly value: string;
  readonly label: string;
}

const styles: StylesConfig<TagType, true> = {
  menu: (provided) => ({
    ...provided,
    position: 'relative',
    boxShadow: 'none',
  }),
  control: (provided) => ({
    ...provided,
    boxShadow: 'none',
    border: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: () => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }),
};

const DropdownIndicator = ({ innerProps, selectProps }: DropdownIndicatorProps<TagType, true>) => {
  const { t } = useTranslation();

  const { menuIsOpen } = selectProps;

  return (
    <div
      css={iconButtonStyle({ colorTheme: 'greyLighter', variant: 'ghost', shape: 'pill', size: 'small' })}
      {...innerProps}
      aria-label={menuIsOpen ? t('tagSelector.hideAllTags') : t('tagSelector.showAllTags')}>
      {menuIsOpen ? <ChevronUp /> : <ChevronDown />}
    </div>
  );
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
  const handleChange = (newValue: OnChangeValue<TagType, true>, actionMeta: ActionMeta<TagType>) => {
    onChange(newValue);
  };

  const onCreateOption = (inputValue: string) => {
    onCreateTag(inputValue);
  };

  return (
    <CreatableSelect
      placeholder={t('tagSelector.placeholder')}
      hideSelectedOptions={false}
      isMulti
      isClearable={false}
      value={selected}
      options={tags}
      onChange={handleChange}
      onCreateOption={onCreateOption}
      components={{ DropdownIndicator }}
      styles={styles}
    />
  );
};

export default TagSelector;
