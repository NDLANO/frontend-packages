/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { H5pEmbedData, H5pData } from '@ndla/types-embed';
import H5pEmbed from './H5pEmbed';
import { defaultParameters } from '../../../../stories/defaults';

const embedData: H5pEmbedData = {
  resource: 'h5p',
  path: '/resource/c56368d0-0432-4ec3-97bd-f4ba4badf55e',
  title: 'Sorter avfall',
  url: 'https://h5p-test.ndla.no/resource/c56368d0-0432-4ec3-97bd-f4ba4badf55e?locale=nb-no&cssUrl=https://test.ndla.no/static/h5p-custom-css.css',
};

const metaData: H5pData = {
  h5pLicenseInformation: {
    h5p: {
      title: 'Sorter avfall',
      source: null,
      license: 'CC BY-SA',
      licenseVersion: '4.0',
      licenseExtras: null,
      thumbnail: null,
      authors: [
        { name: 'Amendor AS', role: 'Author' },
        { name: 'A B', role: 'Author' },
      ],
    },
  },
  h5pUrl:
    'https://h5p-test.ndla.no/resource/c56368d0-0432-4ec3-97bd-f4ba4badf55e?locale=nb-no&cssUrl=https://test.ndla.no/static/h5p-custom-css.css',
  oembed: {
    type: 'proxy',
    version: '1.0',
    title: 'Sorter avfall',
    width: 800,
    height: 600,
    html: '<div><iframe width="800" height="600" allowfullscreen="allowfullscreen" src="https://h5p-test.ndla.no/resource/c56368d0-0432-4ec3-97bd-f4ba4badf55e?locale=nb-no&amp;cssUrl=https%3A%2F%2Ftest.ndla.no%2Fstatic%2Fh5p-custom-css.css" title="Sorter avfall"></iframe><script src="https://ca.h5p.ndla.no/h5p-php-library/js/h5p-resizer.js"></script></div>',
  },
};

const meta: Meta<typeof H5pEmbed> = {
  title: 'Enkle komponenter/Embeds/H5pEmbed',
  component: H5pEmbed,
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

export const Regular: StoryObj<typeof H5pEmbed> = {
  args: {
    embed: {
      resource: 'h5p',
      status: 'success',
      seq: 5,
      embedData: embedData,
      data: metaData,
    },
  },
};

export const Failed: StoryObj<typeof H5pEmbed> = {
  args: {
    embed: {
      resource: 'h5p',
      status: 'error',
      seq: 3,
      embedData: embedData,
    },
  },
};
