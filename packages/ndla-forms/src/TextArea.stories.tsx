/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from '@storybook/react';
import { Search } from '@ndla/icons/common';
import { Check } from '@ndla/icons/editor';
import { InputContainer, TextArea } from './InputV3';
import { defaultParameters } from '../../../stories/defaults';

export default {
  title: 'Forms/TextArea',
  tags: ['autodocs'],
  component: TextArea,
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
} as Meta<typeof TextArea>;

export const Default: StoryFn<typeof TextArea> = ({ ...args }) => <TextArea {...args} />;

export const WithLeftDecorative: StoryFn<typeof TextArea> = ({ ...args }) => (
  <InputContainer>
    <Search />
    <TextArea {...args} />
  </InputContainer>
);

export const WithRightDecorative: StoryFn<typeof TextArea> = ({ ...args }) => (
  <InputContainer>
    <TextArea {...args} />
    <Check />
  </InputContainer>
);

export const WithExistingText: StoryFn<typeof TextArea> = ({ ...args }) => (
  <InputContainer>
    <TextArea
      value={`I denne delte mappa finner du fagstoff og oppgaver fra NDLA. Artiklene er samlet inn og satt i rekkefølge av en lærer.

Du kan bla i artiklene ved å bruke menyen.`}
    />
  </InputContainer>
);

export const WithLeftAndRightDecorative: StoryFn<typeof TextArea> = ({ ...args }) => (
  <InputContainer>
    <Search />
    <TextArea {...args} />
    <Check />
  </InputContainer>
);
