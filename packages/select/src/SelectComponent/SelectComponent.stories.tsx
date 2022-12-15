/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { defaultParameters } from '../../../../stories/defaults';
import SelectComponent from './SelectComponent';

export default {
  title: 'Enkle komponenter/SelectComponent',
  component: SelectComponent,
  parameters: {
    ...defaultParameters,
  },
  args: {
    label: 'Farger',
    selectElements: [
      { value: 'Gul', label: 'Gul' },
      { value: 'Blå', label: 'Blå' },
      { value: 'Grønn', label: 'Grønn' },
    ],
    placeholder: 'Velg en farge',
  },
} as ComponentMeta<typeof SelectComponent>;

export const SelectStory: ComponentStory<typeof SelectComponent> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <SelectComponent
        {...args}
        label="Farger"
        options={[
          { value: 'Gul', label: 'Gul' },
          { value: 'Blå', label: 'Blå' },
          { value: 'Grønn', label: 'Grønn' },
        ]}
        placeholder="Velg en farge"
      />
    </div>
  );
};

SelectStory.storyName = 'SelectComponent';
