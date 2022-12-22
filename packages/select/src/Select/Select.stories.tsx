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
import Select from './Select';

export default {
  title: 'Enkle komponenter/Select',
  component: Select,
  parameters: {
    ...defaultParameters,
  },
  args: {
    options: [
      { value: 'Gul', label: 'Gul' },
      { value: 'Blå', label: 'Blå' },
      { value: 'Grønn', label: 'Grønn' },
    ],
    placeholder: 'Velg en farge',
  },
} as ComponentMeta<typeof Select>;

export const SelectStory: ComponentStory<typeof Select> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <Select
        {...args}
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

SelectStory.storyName = 'Select';
