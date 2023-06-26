/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Switch from './Switch';
import { defaultParameters } from '../../../stories/defaults';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    checked: false,
    label: 'Switch me!',
    onChange: () => {},
    disabled: false,
    defaultChecked: false,
    className: '',
    thumbCharacter: 'G',
  },
  parameters: {
    ...defaultParameters,
  },
};

export default meta;

export const SwitchStory: StoryFn<typeof Switch> = ({ ...args }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => setChecked(args.checked), [args.checked]);
  return <Switch {...args} checked={checked} onChange={(c) => setChecked(c)} />;
};

SwitchStory.storyName = 'Switch';
