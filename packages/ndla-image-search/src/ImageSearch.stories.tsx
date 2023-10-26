/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from '@storybook/react';
import { IImageMetaInformationV3, ISearchResultV3 } from '@ndla/types-backend/image-api';
import ImageSearch from './ImageSearch';
import { defaultParameters } from '../../../stories/defaults';

export default {
  title: 'Production system/ImageSearch',
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    searchPlaceholder: 'Søk i bilder',
    searchButtonTitle: 'Søk',
    useImageTitle: 'Bruk bildet',
    locale: 'nb',
    noResults: <div>Søket gav ingen treff</div>,
  },
} as Meta<typeof ImageSearch>;

export const Default: StoryFn<typeof ImageSearch> = ({ ...args }) => {
  const fetchImages = (query?: string, page?: number): Promise<ISearchResultV3> => {
    const queryString = query ? `query=${query}&page=${page}&page-size=15` : `page=${page}&page-size=15`;
    return new Promise((resolve, reject) => {
      fetch(`https://api.test.ndla.no/image-api/v3/images/?${queryString}`, {
        method: 'GET',
      }).then((res) => {
        if (res.ok) {
          return resolve(res.json());
        }
        return res.json().then((json) => reject(json));
      });
    });
  };

  const fetchImage = (id: string | number): Promise<IImageMetaInformationV3> =>
    new Promise((resolve, reject) => {
      fetch(`https://api.test.ndla.no/image-api/v3/images/${id}`, {
        method: 'GET',
      }).then((res) => {
        if (res.ok) {
          return resolve(res.json());
        }
        return res.json().then((json) => reject(json));
      });
    });
  return (
    <ImageSearch
      {...args}
      fetchImage={fetchImage}
      searchImages={fetchImages}
      // eslint-disable-next-line no-console
      onImageSelect={console.log}
      // eslint-disable-next-line no-console
      onError={console.error}
    />
  );
};
