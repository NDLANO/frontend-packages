/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from '@storybook/react';
import { H5pEmbedData, H5pData, OembedEmbedData, OembedData } from '@ndla/types-embed';
import ExternalEmbed from './ExternalEmbed';
import { defaultParameters } from '../../../../stories/defaults';

const embedData: OembedEmbedData = {
  resource: 'external',
  url: 'https://embed.ted.com/talks/zahra_biabani_the_eco_creators_helping_the_climate_through_social_media',
  type: 'iframe',
};

const embedDataFullscreen: OembedEmbedData = {
  resource: 'external',
  url: 'https://embed.ted.com/talks/zahra_biabani_the_eco_creators_helping_the_climate_through_social_media',
  type: 'fullscreen',
  title: 'Zahra Biabani: The eco-creators helping the climate through social media',
  caption: 'Ted talk',
  imageid: '65086',
};

const metaData: OembedData = {
  oembed: {
    type: 'video',
    version: '1.0',
    title: 'Zahra Biabani: The eco-creators helping the climate through social media',
    description:
      '"Climate doom-ism," or a pessimistic outlook on the future of the planet, rivals climate denialism in holding up the fight against climate change, says activist Zahra Biabani. Illuminating how hope combats inaction, she takes us inside the world of eco-friendly content on TikTok -- and shows that we all have what it takes to make real change.',
    authorName: 'Zahra Biabani',
    authorUrl: 'https://www.ted.com/speakers/zahra_biabani',
    providerName: 'TED',
    providerUrl: 'https://www.ted.com',
    cacheAge: 300,
    thumbnailUrl:
      'https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/803ab5d5-2cff-4764-b5b6-545217159538/ZahraBiabani_2022T-embed.jpg?h=315&w=560',
    thumbnailWidth: 560,
    thumbnailHeight: 315,
    width: 560,
    height: 315,
    html: '<iframe src="https://embed.ted.com/talks/zahra_biabani_the_eco_creators_helping_the_climate_through_social_media" width="560" height="315" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
  },
};

const meta: Meta<typeof ExternalEmbed> = {
  title: 'Components/Embeds/ExternalEmbed',
  component: ExternalEmbed,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="o-wrapper">
        <article className="c-article c-article--clean">
          <section className="u-4/6@desktop u-push-1/6@desktop u-10/12@tablet u-push-1/12@tablet">
            <section>
              <Story />
            </section>
          </section>
        </article>
      </div>
    ),
  ],
  parameters: defaultParameters,
};

export default meta;

export const Regular: StoryObj<typeof ExternalEmbed> = {
  args: {
    embed: {
      resource: 'external',
      status: 'success',
      embedData: embedData,
      data: metaData,
    },
  },
};

export const WithDisclaimer: StoryObj<typeof ExternalEmbed> = {
  args: {
    embed: {
      resource: 'external',
      status: 'success',
      embedData: {
        ...embedData,
        disclaimer: 'Dette innholdet er ikke tilgjengelig med tastaturnavigasjon.',
      },
      data: metaData,
    },
  },
};

export const Failed: StoryObj<typeof ExternalEmbed> = {
  args: {
    embed: {
      resource: 'external',
      status: 'error',
      embedData: embedData,
    },
  },
};

export const Fullstreen: StoryObj<typeof ExternalEmbed> = {
  args: {
    embed: {
      resource: 'external',
      status: 'success',
      embedData: embedDataFullscreen,
      data: metaData,
    },
  },
};

export const FullstreenDisclaimer: StoryObj<typeof ExternalEmbed> = {
  args: {
    embed: {
      resource: 'external',
      status: 'success',
      embedData: {
        ...embedDataFullscreen,
        disclaimer: 'Dette innholdet er ikke tilgjengelig med tastaturnavigasjon.',
      },
      data: metaData,
    },
  },
};
