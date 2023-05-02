/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { defaultParameters } from '../../../stories/defaults';
import MultiButton from './MultiButton';

const Wrapper = styled.div`
  margin: 5em;
`;

export default {
  title: 'Enkle komponenter/Knapper/MultiButton',
  component: MultiButton,
  tags: ['autodocs'],
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
} as Meta<typeof MultiButton>;

export const MultiButtonStory: StoryFn<typeof MultiButton> = (args) => {
  return (
    <Wrapper>
      <MultiButton {...args} />
    </Wrapper>
  );
};

MultiButtonStory.storyName = 'MultiButton';
