/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { defaultParameters } from '../../../stories/defaults';
import Tabs from './Tabs';

export default {
  title: 'Enkle komponenter/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {
    ariaLabel: 'Oversikt over farge og figur',
    variant: 'underlined',
    tabs: [
      {
        title: 'Farge',
        id: 'colors',
        content: (
          <>
            <h2 style={{ margin: 0 }}>Oversikt over farger</h2>
            <p>Grønn, blå og rød.</p>
          </>
        ),
      },
      {
        title: 'Figur',
        id: 'shapes',
        content: (
          <>
            <h2 style={{ margin: 0 }}>Oversikt over figurer</h2>
            <p>Sirkel, trekant og firkant.</p>
          </>
        ),
      },
    ],
  },
} as Meta<typeof Tabs>;

export const TabsStory: StoryFn<typeof Tabs> = ({ ...args }) => {
  return <Tabs {...args}></Tabs>;
};

TabsStory.storyName = 'Tabs';
