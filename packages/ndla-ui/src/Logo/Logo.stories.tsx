/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';
import { defaultParameters } from '../../../../stories/defaults';

/***
 * Logoen er vårt tydeligste kjennetegn og vårt viktigste verktøy for kommunikasjon. Den skal inspirere målgruppen elever og lærere i videregående opplæring og gjøre dem nysgjerrige på NDLA.
 *
 * Logoen består av navnet NDLA i en spesiell typografi og bør hovedsakelig benyttes sammen med underteksten. Logo uten undertekst kan benyttes i tilfeller der det kommer godt fram andre steder hva NDLA er, eksempelvis på ndla.no.
 *
 * Logo uten undertekst kan kompletteres med en beskrivende tekst til høyre. Logoen kan benyttes i blått, eller i svart eller hvitt avhengig av bakgrunn. Den skal plasseres i det øverste eller nederste hjørnet av en ytterkant. Logoen skal ikke sentreres.
 */
export default {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    cssModifier: 'large',
    name: true,
    label: 'Nasjonal digital læringsarena',
  },
} as Meta<typeof Logo>;

export const WithoutUrl: StoryObj<typeof Logo> = {
  args: {},
};

export const WithUrl: StoryObj<typeof Logo> = {
  args: {
    to: '/',
  },
};

export const EnglishLogo: StoryObj<typeof Logo> = {
  args: {
    locale: 'en',
    label: 'Norwegian digital learning arena',
  },
};
