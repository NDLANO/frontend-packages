/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContactBlock from './ContactBlock';
import { defaultParameters } from '../../../../stories/defaults';

export default {
  title: 'Enkle komponenter/ContactBlock',
  component: ContactBlock,
  args: {
    image: {
      id: '65750',
      metaUrl: 'https://api.test.ndla.no/image-api/v2/images/65750',
      title: {
        title: 'Sigurd Trageton',
        language: 'nb',
      },
      alttext: {
        alttext: 'Sigurd Trageton',
        language: 'nb',
      },
      imageUrl: 'https://api.test.ndla.no/image-api/raw/RVrVQIKh.jpg',
      size: 404340,
      contentType: 'image/jpeg',
      copyright: {
        license: {
          license: 'CC-BY-SA-4.0',
          description: 'Creative Commons Attribution-ShareAlike 4.0 International',
          url: 'https://creativecommons.org/licenses/by-sa/4.0/',
        },
        origin: '',
        creators: [
          {
            type: 'photographer',
            name: 'Tom Knudsen',
          },
        ],
        processors: [],
        rightsholders: [],
      },
      tags: {
        tags: ['Sigurd', 'Trageton', 'Portrett'],
        language: 'nb',
      },
      caption: {
        caption: 'Sigurd Trageton',
        language: 'nb',
      },
      supportedLanguages: ['nb', 'nn'],
      created: '2023-03-29T07:15:50Z',
      createdBy: 'f-jBTU8O8kYbUW20lMeIuTSv',
      modelRelease: 'not-set',
      imageDimensions: {
        width: 1600,
        height: 2000,
      },
    },
    title: 'Daglig leder og ansvarlig redaktør, Vestland fylkeskommune',
    summary:
      'Sigurd har variert ledererfaring fra utdanningssektoren, både fra videregående skole, nasjonalt senter og fra universitets/høgskolesektoren. Ansvarsområdene dekker bl.a. utdanning/opplæring/studiekvalitet, økonomi, HR, stratgi og IT-utvikling/-drift.',
    name: 'Sigurd Trageton',
    email: 'sigurd@ndla.no',
    greenBlob: true,
  },
  parameters: {
    ...defaultParameters,
  },
} as ComponentMeta<typeof ContactBlock>;

export const ContactBlockStory: ComponentStory<typeof ContactBlock> = ({ ...args }) => {
  return <ContactBlock {...args} />;
};

ContactBlockStory.storyName = 'ContactBlock';
