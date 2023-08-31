/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from '@storybook/react';
import { ImageEmbedData } from '@ndla/types-embed';
import { IImageMetaInformationV3 } from '@ndla/types-backend/build/image-api';
import ImageEmbed from './ImageEmbed';
import { defaultParameters } from '../../../../stories/defaults';
import StoryFavoriteButton from '../../../../stories/StoryFavoriteButton';

const embedData: ImageEmbedData = {
  resource: 'image',
  resourceId: '61181',
  size: 'full',
  align: '',
  alt: 'Tenåringsjente med lyse fletter slenger på håret. Foto. ',
  caption: 'Modellklarert.',
  url: 'https://api.test.ndla.no/image-api/v2/images/61181',
};

const metaData: IImageMetaInformationV3 = {
  id: '61181',
  metaUrl: 'https://api.test.ndla.no/image-api/v3/images/61181',
  title: {
    title: '\nHigh angle view of teenage girl with tousled dyed hair dancing at skateboard park\n',
    language: 'nb',
  },
  alttext: {
    alttext: 'Tenåringsjente med lyse fletter slenger på håret. Foto. ',
    language: 'nb',
  },
  copyright: {
    license: {
      license: 'CC-BY-NC-4.0',
      description: 'Creative Commons Attribution-NonCommercial 4.0 International',
      url: 'https://creativecommons.org/licenses/by-nc/4.0/',
    },
    origin: 'https://bilder.ntb.no/r/preview/creative/EXuziiZGWno',
    creators: [
      {
        type: 'photographer',
        name: 'Maskot',
      },
    ],
    processors: [],
    rightsholders: [
      {
        type: 'rightsholder',
        name: 'NTB',
      },
    ],
  },
  tags: {
    tags: ['danser', 'kultur', 'identitet'],
    language: 'nb',
  },
  caption: {
    caption: 'Modellklarert.',
    language: 'nb',
  },
  supportedLanguages: ['nb'],
  created: '2022-01-07T08:26:01Z',
  createdBy: 'lA2KgVfhY-fpmgHCYAy5W1DX',
  modelRelease: 'yes',
  image: {
    fileName: 'S81WiNgl.jpg',
    size: 1685455,
    contentType: 'image/jpeg',
    imageUrl: 'https://api.test.ndla.no/image-api/raw/S81WiNgl.jpg',
    dimensions: {
      width: 2000,
      height: 1333,
    },
    language: 'nb',
  },
};

const meta: Meta<typeof ImageEmbed> = {
  title: 'Components/Embeds/ImageEmbed',
  component: ImageEmbed,
  tags: ['autodocs'],
  args: {
    previewAlt: true,
  },
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

export const ImageEmbedStory: StoryObj<typeof ImageEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: 'image',
      status: 'success',
      embedData: embedData,
      data: metaData,
    },
  },
};

export const Failed: StoryObj<typeof ImageEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: 'image',
      status: 'error',
      embedData: embedData,
    },
  },
};

ImageEmbedStory.storyName = 'ImageEmbed';
