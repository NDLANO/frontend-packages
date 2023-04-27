/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import styled from '@emotion/styled';
import { breakpoints, mq, spacing } from '@ndla/core';
import { IconButtonV2 } from '@ndla/button';
import { Switch } from '@ndla/switch';
import { HeartOutline } from '@ndla/icons/action';
import EmbedByline from './EmbedByline';
import { defaultParameters } from '../../../../stories/defaults';

const ButtonWrapper = styled.div`
  display: flex;
  gap: ${spacing.small};
  ${mq.range({ until: breakpoints.tablet })} {
    flex: 1;
    width: 100%;
    justify-content: space-between;
    align-items: space-between;
  }
`;

export default {
  title: 'Enkle komponenter/EmbedByline',
  component: EmbedByline,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {
    rounded: true,
    type: 'image',
    license: 'CC-BY-NC-ND-4.0',
    children: (
      <ButtonWrapper>
        <Switch checked={false} label="Bytt til synstolket video" onChange={() => {}} id="switch" />
        <IconButtonV2 variant="ghost" aria-label="Legg til i favoritter">
          <HeartOutline />
        </IconButtonV2>
      </ButtonWrapper>
    ),
    description:
      'Bildetekst som kan være ganske lang. Denne roboten er laget av DALLE2, en helt vaskeekte AI. Hvis denne teksten blir veldig lang kommer den på flere linjer.',
    copyright: {
      license: {
        license: 'CC-BY-SA-4.0',
        description: 'Creative Commons Attribution-ShareAlike 4.0 International',
        url: 'https://creativecommons.org/licenses/by-sa/4.0/',
      },
      origin: 'http://floradania.dk/forside/',
      creators: [],
      processors: [],
      rightsholders: [
        {
          type: 'Supplier',
          name: 'Floradania',
        },
      ],
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof EmbedByline>;

export const EmbedBylineStory: StoryFn<typeof EmbedByline> = (args) => {
  const { children, ...rest } = args;
  return <EmbedByline {...rest}>{children}</EmbedByline>;
};

EmbedBylineStory.storyName = 'EmbedByline';
