/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AccordionMenu from './AccordionMenu';
import { defaultParameters } from '../../../../stories/defaults';

const meta: Meta<typeof AccordionMenu> = {
  title: 'Patterns/Accordion Menu',
  component: AccordionMenu,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {
    data: [
      {
        title: 'Om NDLA',
        language: 'nb',
        subMeny: [
          {
            title: 'Om NDLA',
            language: 'nb',
            link: '',
          },
        ],
      },
      {
        title: 'Hvem er vi?',
        language: 'nb',
        subMeny: [
          {
            title: 'Organisering',
            language: 'nb',
            link: '',
          },
          {
            title: 'Nøkkelpersoner',
            language: 'nb',
            link: '',
          },
          {
            title: 'Vedtekter',
            language: 'nb',
            link: '',
          },
          {
            title: 'NDLAs historie',
            language: 'nb',
            link: '',
          },
        ],
      },
      {
        title: 'Hva gjør vi?',
        language: 'nb',
        subMeny: [
          {
            title: 'Vårt samfunnsoppdrag',
            language: 'nb',
            link: '',
          },
          {
            title: 'Visjoner og verdier',
            language: 'nb',
            link: '',
          },
          {
            title: 'Våre samarbeid',
            language: 'nb',
            link: '',
          },
          {
            title: 'Tall og rapporter',
            language: 'nb',
            link: '',
          },
        ],
      },
      {
        title: 'Jobb hos oss',
        language: 'nb',
        subMeny: [
          {
            title: 'Jobb hos NDLA',
            language: 'nb',
            link: '',
          },
          {
            title: 'Ledige stillinger',
            language: 'nb',
            link: '',
          },
        ],
      },
      {
        title: 'Kontakt oss',
        language: 'nb',
        subMeny: [
          {
            title: 'Kontaktinformasjon',
            language: 'nb',
            link: '',
          },
          {
            title: 'Følg NDLA',
            language: 'nb',
            link: '',
          },
        ],
      },
    ],
  },
};
export default meta;

export const AccordionMenuStory: StoryFn<typeof AccordionMenu> = ({ ...args }) => {
  return <AccordionMenu {...args} />;
};
