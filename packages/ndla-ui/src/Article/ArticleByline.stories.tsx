/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from '@storybook/react';

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

export const SeveralAuthors: StoryObj<typeof ArticleByline> = {
  args: {
    published: '21.06.2018',
    license: 'CC BY-SA',
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
