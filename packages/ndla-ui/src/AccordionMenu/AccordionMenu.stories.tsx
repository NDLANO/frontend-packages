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
    Menu: [
      {
        title: 'Om NDLA',
        language: 'nb',
        slug: 'om-ndla',
        menu: [
          {
            title: 'Om NDLA',
            language: 'nb',
            slug: 'om-ndla',
            path: '',
          },
        ],
      },
      {
        title: 'Hvem er vi?',
        language: 'nb',
        slug: 'hvem-er vi',
        menu: [
          {
            title: 'Organisering',
            language: 'nb',
            slug: 'organisering',
            path: '',
          },
          {
            title: 'Nøkkelpersoner',
            language: 'nb',
            slug: 'nøkkelpersoner',
            path: '',
          },
          {
            title: 'Vedtekter',
            language: 'nb',
            slug: 'vedtekter',
            path: '',
          },
          {
            title: 'NDLAs historie',
            language: 'nb',
            slug: 'ndlas-historie',
            path: '',
          },
        ],
      },
      {
        title: 'Hva gjør vi?',
        slug: 'hva-gjør-vi',
        language: 'nb',
        menu: [
          {
            title: 'Vårt samfunnsoppdrag',
            language: 'nb',
            slug: 'vårt-samfunnsoppdrag',
            path: '',
          },
          {
            title: 'Visjoner og verdier',
            language: 'nb',
            slug: 'visjoner-og-verdier',
            path: '',
          },
          {
            title: 'Våre samarbeid',
            language: 'nb',
            slug: 'våre-samarbeid',
            path: '',
          },
          {
            title: 'Tall og rapporter',
            language: 'nb',
            slug: 'tall-og-rapporter',
            path: '',
          },
        ],
      },
      {
        title: 'Jobb hos oss',
        language: 'nb',
        slug: 'jobb-hos-oss',
        menu: [
          {
            title: 'Jobb hos NDLA',
            language: 'nb',
            slug: 'jobb-hos-ndla',
            path: '',
          },
          {
            title: 'Ledige stillinger',
            language: 'nb',
            slug: 'ledige-stillinger',
            path: '',
          },
        ],
      },
      {
        title: 'Kontakt oss',
        slug: 'kontakt-oss',
        language: 'nb',
        menu: [
          {
            title: 'Kontaktinformasjon',
            language: 'nb',
            slug: 'kontaktinformasjon',
            path: '',
          },
          {
            title: 'Følg NDLA',
            slug: 'følg-ndla',
            language: 'nb',
            path: '',
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
