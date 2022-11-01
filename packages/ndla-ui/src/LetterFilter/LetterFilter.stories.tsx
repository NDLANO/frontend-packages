/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import React from 'react';
import { defaultParameters } from '../../../designmanual/stories/defaults';
import LetterFilter from './LetterFilter';

export default {
  title: 'Enkle komponenter/LetterFilter',
  component: LetterFilter,
  parameters: {
    ...defaultParameters,
  },
  args: {
    enabledLetters: ['a', 'c'],
  },
} as ComponentMeta<typeof LetterFilter>;

export const LetterFilterStory: ComponentStory<typeof LetterFilter> = (args) => {
  const [, updateArgs] = useArgs();

  return <LetterFilter {...args} onChange={(val) => updateArgs({ value: val })} />;
};

LetterFilterStory.storyName = 'LetterFilter';
