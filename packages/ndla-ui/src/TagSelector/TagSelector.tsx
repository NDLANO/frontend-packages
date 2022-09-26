/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { Options, ActionMeta, OnChangeValue, MultiValue } from 'react-select';

export interface TagType {
  readonly value: string;
  readonly label: string;
}

interface Props {
  label: string;
  tags: readonly TagType[];
  selected: readonly TagType[];
  onChange: (tags: MultiValue<TagType>) => void;
  onCreateTag: (tag: string) => void;
  prefix?: string;
}

const TagSelector = ({ selected, tags, onCreateTag, onChange }: Props) => {
  const handleChange = (newValue: OnChangeValue<TagType, true>, actionMeta: ActionMeta<TagType>) => {
    onChange(newValue);
  };

  const onCreateOption = (inputValue: string) => {
    onCreateTag(inputValue);
  };

  return (
    <CreatableSelect
      hideSelectedOptions={false}
      isMulti
      value={selected}
      options={tags}
      onChange={handleChange}
      onCreateOption={onCreateOption}
      components={{}}
    />
  );
};

export default TagSelector;
