import { Meta, StoryFn, StoryObj } from '@storybook/react';

//@ts-ignore
import LicenseBox from '../../../../stories/article/LicenseBox';

import { defaultParameters } from '../../../../stories/defaults';
import ArticleByline from './ArticleByline';

/**
 * Innholder informasjon om forfatter(e), lisensrettigheter, beskrivelse av regler ved bruk av innhold, ikon hvis artikkel er tilleggsstoff og dato for forrige oppdatering.
 */
export default {
  title: 'Patterns/ArticleByline',
  component: ArticleByline,
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    authors: [{ name: 'Frida Forfatter' }, { name: 'Fred Forfatter' }],
    published: '21.06.2018',
    license: 'CC BY-SA',
  },
} as Meta<typeof ArticleByline>;

export const ArticleBylineStory: StoryFn<typeof ArticleByline> = (args) => {
  return <ArticleByline {...args} />;
};

ArticleBylineStory.storyName = 'ArticleByline';

export const WithLicenseBox: StoryObj<typeof ArticleByline> = {
  args: {
    published: '21.06.2018',
    license: 'CC BY-SA',
    licenseBox: <LicenseBox />,
    authors: [{ name: 'Frida Forfatter' }, { name: 'Ida Illustratør' }, { name: 'Fred Forfatter' }],
  },
};

export const WithoutCreators: StoryObj<typeof ArticleByline> = {
  args: {
    published: '21.06.2018',
    license: 'CC BY-SA',
    authors: [],
  },
};
