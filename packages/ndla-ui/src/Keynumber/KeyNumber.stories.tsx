/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import KeyNumber from './KeyNumber';
import { defaultParameters } from '../../../../stories/defaults';

export default {
  title: 'Enkle komponenter/Blog Post',
  component: KeyNumber,
  parameters: {
    ...defaultParameters,
    layout: 'centered',
  },
  args: {
    title: '500',
    subTitle: 'TVERRFAGLIGE RESSURSER',
    image: {
      id: '65797',
      metaUrl: 'https://api.test.ndla.no/image-api/v3/images/65797',
      title: {
        title: 'Nøkkeltall tverfagelig',
        language: 'nb',
      },
      alttext: {
        alttext: 'Nøkkeltall tverfagelig',
        language: 'nb',
      },
      copyright: {
        license: {
          license: 'PD',
          description: 'Public Domain Mark',
          url: 'https://creativecommons.org/about/pdm',
        },
        origin: 'NDLA',
        creators: [
          {
            type: 'artist',
            name: 'Hedvig',
          },
        ],
        processors: [],
        rightsholders: [],
      },
      tags: {
        tags: ['Nøkkeltall', 'Tverfagelig', 'svg'],
        language: 'nb',
      },
      caption: {
        caption: '',
        language: 'nb',
      },
      supportedLanguages: ['nb'],
      created: '2023-04-18T11:20:34Z',
      createdBy: 'f-jBTU8O8kYbUW20lMeIuTSv',
      modelRelease: 'not-set',
      image: {
        fileName: 'wMowCjRg.svg',
        size: 43278,
        contentType: 'image/svg+xml',
        imageUrl: 'https://api.test.ndla.no/image-api/raw/wMowCjRg.svg',
        language: 'nb',
      },
    },
  },
} as ComponentMeta<typeof KeyNumber>;

export const KeyNumberStory: ComponentStory<typeof KeyNumber> = ({ ...args }) => {
  return <KeyNumber {...args} />;
};

KeyNumberStory.storyName = 'KeyNumber';
