/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { defaultParameters } from '../../designmanual/.storybook/defaults';
import MultiButton from './MultiButtonV2';

export default {
  title: 'Enkle komponenter/Knapp/Flervalg',
  component: MultiButton,
  parameters: {
    ...defaultParameters,
  },
  args: {
    mainButton: {
      label: 'Lagre',
      value: 'lagre',
      enable: true,
    },
    secondaryButtons: [
      {
        label: 'Lagre og ny versjon',
        value: 'lagreogny',
        enable: true,
      },
      {
        label: 'Lagre og avslutt',
        value: 'lagreogavslutt',
        enable: true,
      },
    ],
  },
} as ComponentMeta<typeof MultiButton>;

export const MultiButtonStory: ComponentStory<typeof MultiButton> = (args) => {
  return <MultiButton {...args} />;
};

MultiButtonStory.storyName = 'Flervalg';
