/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { defaultParameters } from '../../../../stories/defaults';
import KeyPerformanceIndicator from './KeyPerformanceIndicator';

export default {
  title: 'Enkle komponenter/Nøkkeltall',
  component: KeyPerformanceIndicator,
  tags: ['autodocs'],
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
        title: 'Nøkkeltall tverrfaglig',
        language: 'nb',
      },
      alttext: {
        alttext: 'Nøkkeltall tverrfaglig',
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
        tags: ['Nøkkeltall', 'Tverrfaglig', 'svg'],
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
} as Meta<typeof KeyPerformanceIndicator>;

export const KeyPerformanceIndicatorStory: StoryFn<typeof KeyPerformanceIndicator> = ({ ...args }) => {
  return <KeyPerformanceIndicator {...args} />;
};

KeyPerformanceIndicatorStory.storyName = 'Nøkkeltall';
