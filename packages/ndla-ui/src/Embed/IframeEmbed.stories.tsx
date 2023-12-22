/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from '@storybook/react';
import { IframeData, IframeEmbedData } from '@ndla/types-embed';
import IframeEmbed from './IframeEmbed';
import { defaultParameters } from '../../../../stories/defaults';

const embedData: IframeEmbedData = {
  width: '708px',
  title: 'Tittel på iframen!',
  height: '278px',
  type: 'iframe',
  resource: 'iframe',
  url: 'https://embed.kahoot.it/2a51c481-d362-475b-862b-e4b47b96b3c9',
};

const meta: Meta<typeof IframeEmbed> = {
  title: 'Components/Embeds/IframeEmbed',
  component: IframeEmbed,
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

export const Regular: StoryObj<typeof IframeEmbed> = {
  args: {
    embed: {
      resource: 'iframe',
      status: 'success',
      embedData: embedData,
      data: {},
    },
  },
};

export const WithDisclaimer: StoryObj<typeof IframeEmbed> = {
  args: {
    embed: {
      resource: 'iframe',
      status: 'success',
      embedData: {
        ...embedData,
        disclaimer: 'Dette innholdet er ikke tilgjengelig med tastaturnavigasjon.',
      },
      data: {
        disclaimerLink: {
          href: 'https://ndla.no',
          text: 'NDLA',
        },
      },
    },
  },
};

export const Failed: StoryObj<typeof IframeEmbed> = {
  args: {
    embed: {
      resource: 'iframe',
      status: 'error',
      embedData: embedData,
    },
  },
};

const opensInNewEmbedData: IframeEmbedData = {
  title: 'Kahoot!',
  caption: 'Sjekk ut denne!',
  imageid: '65086',
  type: 'fullscreen',
  resource: 'iframe',
  url: 'https://embed.kahoot.it/2a51c481-d362-475b-862b-e4b47b96b3c9',
};

const opensInnewMetaData: IframeData = {
  iframeImage: {
    id: '65086',
    metaUrl: 'https://api.test.ndla.no/image-api/v3/images/65086',
    title: {
      title: '\nSamtale ',
      language: 'nb',
    },
    alttext: {
      alttext: ' To ungdommer sitter og snakker. Foto. ',
      language: 'nb',
    },
    copyright: {
      license: {
        license: 'COPYRIGHTED',
        description: 'Copyrighted',
      },
      origin: '',
      creators: [],
      processors: [],
      rightsholders: [
        {
          type: 'rightsholder',
          name: 'Folkehelseprosjektet Helsefremmende miljø på sosial medier, Bergen kommune 2019-2022',
        },
      ],
      processed: false,
    },
    tags: {
      tags: ['samtale', 'Dialog', 'gutter'],
      language: 'nb',
    },
    caption: {
      caption: 'Dette bildet skal bare brukes i casen "Livet på sosiale medier". ',
      language: 'nb',
    },
    supportedLanguages: ['nb'],
    created: '2022-12-02T14:24:19Z',
    createdBy: 'oltQx44eGQp0DwkiR1NRo5qE',
    modelRelease: 'yes',
    image: {
      fileName: 'IgOjO6og.jpg',
      size: 176667,
      contentType: 'image/jpeg',
      imageUrl: 'https://api.test.ndla.no/image-api/raw/IgOjO6og.jpg',
      dimensions: {
        width: 1920,
        height: 804,
      },
      language: 'nb',
    },
  },
};

export const OpensInNewWindow: StoryObj<typeof IframeEmbed> = {
  args: {
    embed: {
      resource: 'iframe',
      status: 'success',
      embedData: opensInNewEmbedData,
      data: opensInnewMetaData,
    },
  },
};

export const OpensInNewWindowDisclaimer: StoryObj<typeof IframeEmbed> = {
  args: {
    embed: {
      resource: 'iframe',
      status: 'success',
      embedData: {
        ...opensInNewEmbedData,
        disclaimer: 'Dette innholdet er ikke tilgjengelig med tastaturnavigasjon.',
      },
      data: opensInnewMetaData,
    },
  },
};

export const NoDimensions: StoryObj<typeof IframeEmbed> = {
  args: {
    embed: {
      resource: 'iframe',
      status: 'success',
      embedData: {
        ...embedData,
        width: undefined,
        height: undefined,
      },
      data: opensInnewMetaData,
    },
  },
};

export const OpensInNewWindowFailed: StoryObj<typeof IframeEmbed> = {
  args: {
    embed: {
      resource: 'iframe',
      status: 'error',
      embedData: opensInNewEmbedData,
    },
  },
};
