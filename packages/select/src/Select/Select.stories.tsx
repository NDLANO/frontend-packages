/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { defaultParameters } from '../../../../stories/defaults';

import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {
    placeholder: 'Velg en farge',
    options: [
      { value: 'Gul', label: 'Gul' },
      { value: 'Blå', label: 'Blå', isDisabled: true },
      { value: 'Grønn', label: 'Grønn' },
    ],
  },
} as Meta<typeof Select>;

export const SelectStory: StoryFn<typeof Select> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <Select {...args} />
    </div>
  );
};

export const Grouped: StoryObj<typeof Select> = {
  args: {
    placeholder: 'Mat',
    options: [
      {
        label: 'Frukt',
        options: [
          { value: 'Eple', label: 'Eple' },
          { value: 'Pære', label: 'Pære' },
          { value: 'Appelsin', label: 'Appelsin' },
        ],
      },
      {
        label: 'Grønnsaker',
        options: [
          { value: 'Tomat', label: 'Tomat' },
          { value: 'Agurk', label: 'Agurk' },
          { value: 'Løk', label: 'Løk' },
        ],
      },
    ],
  },
};

export const MultiSelect: StoryObj<typeof Select> = {
  args: {
    placeholder: 'Velg en farge',
    isMulti: true,
    closeMenuOnSelect: false,
    options: [
      { value: 'Gul', label: 'Gul' },
      { value: 'Blå', label: 'Blå' },
      { value: 'Grønn', label: 'Grønn' },
    ],
  },
};

export const WhiteTheme: StoryObj<typeof Select> = {
  args: {
    placeholder: 'Velg en farge',
    colorTheme: 'white',
    outline: true,
    options: [
      { value: 'Gul', label: 'Gul' },
      { value: 'Blå', label: 'Blå' },
      { value: 'Grønn', label: 'Grønn' },
    ],
  },
};

export const SearchableWithPrefix: StoryObj<typeof Select> = {
  args: {
    placeholder: 'Velg en farge',
    prefix: 'Farge: ',
    small: true,
    isSearchable: true,
    matchFrom: 'start',
    noOptionsMessage: () => 'Ingen farger',
    options: [
      { value: 'Gul', label: 'Gul' },
      { value: 'Blå', label: 'Blå' },
      { value: 'Grønn', label: 'Grønn' },
    ],
  },
};
