import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { defaultParameters } from '../../../stories/defaults';

import * as licenseIcons from './licenses';
import * as contentTypeIcons from './contentType';
import * as commonIcons from './common';
import * as editorIcons from './editor';
import * as actionIcons from './action';
import { Person } from './common';
import Icon from '.';
import { IconList } from '../../../stories/wrappers';

/**
 * Systemikonene identifiserer handlinger en bruker kan ta på en gitt skjerm, de kan også representere objekter og områder.
 *
 * Systemikonene er hentet fra Google sitt Material Design som er open source og tilgjengelig med Apache License Version 2.0. Hvis det er behov for flere eller nye systemikoner skal disse hentes her: https://material.io/icons/ og hvis det ikke finnes et passende ikon i denne pakken kan man lage nye ikoner ved å bruke disse retningslinjene: https://material.io/guidelines/. Ikoner kan i nød også hentes fra: https://materialdesignicons.com, som også er Apache License Version 2.0.
 **/
export default {
  title: 'Components/Icons',
  component: Person,
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
} as Meta<typeof Person>;

export const IconStory: StoryFn<typeof Person> = (args) => {
  return <Person {...args} />;
};

IconStory.storyName = 'Icon';

export const CommonIcons: StoryObj<typeof Icon> = {
  render: () => <IconList icons={commonIcons} folder="common" />,
};

/** Hver innholdstype i NDLA-systemet har et ikon knyttet til seg. Ikonene er visuelle representasjoner av innholdstypen og skal sammen med innholdstypefargen skape en gjenkjennelseseffekt for brukerne.
 *
 * Hvis det skal lages nye innholdstypeikoner er det viktig at de kommuniserer innholdstypens kjernefunksjon og hensikt. De må også ha lik visuell utførelse og fremtoning som de eksisterende. Alle innholdstypeikonene er bygget ut fra Material Design sine ikoner; https://material.io/icons/
 **/
export const ContentTypes: StoryObj<typeof Icon> = {
  render: () => <IconList icons={contentTypeIcons} folder="contentType" />,
};

export const Licenses: StoryObj<typeof Icon> = {
  render: () => <IconList icons={licenseIcons} folder="license" />,
};

export const Action: StoryObj<typeof Icon> = {
  render: () => <IconList icons={actionIcons} folder="action" />,
};

export const Editor: StoryObj<typeof Icon> = {
  render: () => <IconList icons={editorIcons} folder="editor" />,
};
