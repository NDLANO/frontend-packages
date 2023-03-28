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
      id: '21',
      metaUrl:
        'https://i0.wp.com/om.ndla.no/wp-content/uploads/2022/10/trageton_sigurd_f_002.jpg?resize=240%2C300&ssl=1https://api.test.ndla.no/image-api/raw/sza9651a.jpg',
      title: { title: 'Lett brønnintervensjon – RLWI', language: 'nb' },
      alttext: { alttext: '', language: 'nb' },
      size: 123,
      contentType: 'asda',
      copyright: {
        origin: '',
        license: {
          license: 'CC-BY-SA 4.0',
          description: '',
          url: '',
        },
        creators: [{ type: 'photographer', name: 'Nils Arnulfsen' }],
        rightsholders: [{ type: 'rightsholder', name: 'Arnold Paulsen' }],
        processors: [{ type: 'processors', name: 'Arnold Nilsen' }],
      },
      tags: {
        tags: ['asd'],
        language: 'nb',
      },
      caption: {
        caption: 'asd',
        language: 'nb',
      },
      supportedLanguages: ['nb'],
      created: 'Tester evensen',
      createdBy: 'Tom Knudsen',
      modelRelease: 'asdasda',
      imageUrl:
        'https://i0.wp.com/om.ndla.no/wp-content/uploads/2022/10/trageton_sigurd_f_002.jpg?resize=240%2C300&ssl=1https://api.test.ndla.no/image-api/raw/sx9965f8.jpg',
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
