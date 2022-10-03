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
import styled from '@emotion/styled';
import { colors, fonts, spacing, utils } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { TagType } from './types';
import ValueButton from './ValueButton';
import DropdownIndicator from './DropdownIndicator';
import SelectContainer from './SelectContainer';
import MenuList from './MenuList';
import Control from './Control';
import Option from './Option';
import Menu from './Menu';
import { createAriaMessages } from './ariaMessages';
import Input from './Input';

const styles: StylesConfig<TagType, true> = {
  menu: () => ({}),
  dropdownIndicator: () => ({}),
  placeholder: (provided) => ({
    ...provided,
    padding: `0 ${spacing.small}`,
    color: colors.brand.primary,
    margin: 0,
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

const StyledTagSelector = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

interface StyledLabelProps {
  labelHidden?: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
  font-weight: ${fonts.weight.semibold};
  ${(p) => p.labelHidden && utils.labelHidden}
`;

interface Props {
  label: string;
  tags: readonly TagType[];
  selected: readonly TagType[];
  onChange: (tags: MultiValue<TagType>) => void;
  onCreateTag: (name: string) => void;
  className?: string;
  labelHidden?: boolean;
}

const TagSelector = ({ selected, tags, onChange, onCreateTag, className, label }: Props) => {
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

  const createLabel = (tag: string) => t('tagSelector.createLabel', { tag });

  return (
    <StyledTagSelector className={className}>
      {label && (
        <StyledLabel labelHidden htmlFor="tagselector-creatable" id="tagselector-label">
          {label}
        </StyledLabel>
      )}
      <CreatableSelect
        id="tagselector-creatable"
        aria-labelledby={label ? 'tagselector-label' : undefined}
        ariaLiveMessages={createAriaMessages(t)}
        components={{
          DropdownIndicator,
          MultiValue: ValueButton,
          SelectContainer,
          MenuList,
          Control,
          Option,
          Menu,
          Input,
        }}
        formatCreateLabel={createLabel}
        inputValue={input}
        isClearable={false}
        isMulti
        noOptionsMessage={() => t('tagSelector.noOptions')}
        onChange={onChange}
        onCreateOption={onCreateTag}
        onInputChange={setInput}
        onKeyDown={handleSpaceClick}
        options={tags}
        placeholder={t('tagSelector.placeholder')}
        screenReaderStatus={({ count }) => t('tagSelector.aria.screenReaderStatus', { count })}
        styles={styles}
        tabSelectsValue={false}
        value={selected}
      />
    </StyledTagSelector>
  );
};

export default TagSelector;
