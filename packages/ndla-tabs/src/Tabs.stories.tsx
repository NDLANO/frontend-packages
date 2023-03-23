/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { defaultParameters } from '../../../stories/defaults';
import TabsV2 from './TabsV2';

export default {
  title: 'Enkle komponenter/Tabs',
  component: TabsV2,
  parameters: {
    ...defaultParameters,
  },
  args: {
    ariaLabel: 'Oversikt over farge og figur',
    tabs: [
      {
        title: 'Farge',
        content: (
          <>
            <h2 style={{ margin: 0 }}>Oversikt over farger</h2>
            <p>Grønn, blå og rød.</p>
          </>
        ),
      },
      {
        title: 'Figur',
        content: (
          <>
            <h2 style={{ margin: 0 }}>Oversikt over figurer</h2>
            <p>Sirkel, trekant og firkant.</p>
          </>
        ),
      },
    ],
  },
} as ComponentMeta<typeof TabsV2>;

export const TabsStory: ComponentStory<typeof TabsV2> = ({ ...args }) => {
  return <TabsV2 {...args}></TabsV2>;
};

TabsStory.storyName = 'Tabs';
