/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Select from './Select';
import { defaultParameters } from '../../../stories/defaults';

const roleExamples = [
  'Opphaver',
  'Fotograf',
  'Kunstner',
  'Forfatter',
  'Manusforfatter',
  'Innleser',
  'Oversetter',
  'Regissør',
  'Illustratør',
  'Medforfatter',
  'Komponist',
];

export default {
  title: 'Forms/Native Select',
  tags: ['autodocs'],
  component: Select,
  args: {
    value: 'Fotograf',
  },
  argTypes: {
    onChange: { control: false },
    children: { control: false },
  },
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
} as Meta<typeof Select>;

export const Default: StoryFn<typeof Select> = ({ value: valueProp, ...args }) => {
  const [value, setValue] = useState(valueProp);

  useEffect(() => {
    setValue(valueProp);
  }, [valueProp]);

  return (
    <Select {...args} value={value} onChange={(e) => setValue(e.currentTarget.value)}>
      <option value="">Tildel rolle</option>
      {roleExamples.map((titleRole) => (
        <option value={titleRole} key={titleRole}>
          {titleRole}
        </option>
      ))}
    </Select>
  );
};
