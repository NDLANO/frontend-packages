/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from './Switch';
import { defaultParameters } from '../../../stories/defaults';

export default {
  title: 'Enkle komponenter/Switch',
  component: Switch,
  args: {
    checked: false,
    label: 'Switch me!',
    onChange: () => {},
    disabled: false,
    defaultChecked: false,
    className: '',
    thumbCharacter: 'G',
    onOffVariant: true,
  },
  parameters: {
    ...defaultParameters,
  },
} as ComponentMeta<typeof Switch>;

export const SwitchStory: ComponentStory<typeof Switch> = ({ ...args }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => setChecked(args.checked), [args.checked]);
  return <Switch {...args} checked={checked} onChange={(c) => setChecked(c)} />;
};

SwitchStory.storyName = 'Switch';
