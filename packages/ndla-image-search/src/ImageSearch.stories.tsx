/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import queryString from "query-string";
import type { Meta, StoryFn } from "@storybook/react";
import type { IImageMetaInformationV3DTO, ISearchResultV3DTO } from "@ndla/types-backend/image-api";
import ImageSearch from "./ImageSearch";

export default {
  title: "Production system/ImageSearch",
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    noResults: <div>Søket gav ingen treff</div>,
    locale: "nb",
    translations: {
      searchPlaceholder: "Søk i bilder",
      searchButtonTitle: "Søk",
      imagePreview: {
        creatorsLabel: "Bilde",
        license: "Lisens",
        caption: "Bildetekst",
        altText: "Alt-tekst",
        modelRelease: "Modellklarert",
        tags: "Emneknagger",
        close: "Lukk",
        useImageTitle: "Bruk bildet",
      },
      paginationTranslations: {
        rootLabel: "Sidenavigering",
        prevTriggerLabel: "Forrige side",
        nextTriggerLabel: "Neste side",
      },
    },
  },
} as Meta<typeof ImageSearch>;

const fetchImage = (id: string | number): Promise<IImageMetaInformationV3DTO> =>
  new Promise((resolve, reject) => {
    fetch(`https://api.test.ndla.no/image-api/v3/images/${id}`, {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        return resolve(res.json());
      }
      return res.json().then((json) => reject(json));
    });
  });

const searchImages = (
  query?: string,
  page?: number,
  pageSize?: number,
  license?: string,
): Promise<ISearchResultV3DTO> => {
  const queryObject = {
    query,
    page,
    "page-size": pageSize,
    license,
  };
  return new Promise((resolve, reject) => {
    fetch(`https://api.test.ndla.no/image-api/v3/images/?${queryString.stringify(queryObject)}`, {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        return resolve(res.json());
      }
      return res.json().then((json) => reject(json));
    });
  });
};

const fetchImages = (query?: string, page?: number, pageSize = 16): Promise<ISearchResultV3DTO> => {
  return searchImages(query, page, pageSize);
};

const fetchImagesWithCopyrighted = (
  query?: string,
  page?: number,
  pageSize = 16,
  license = "COPYRIGHTED",
): Promise<ISearchResultV3DTO> => {
  return searchImages(query, page, pageSize, license);
};

const fetchImagesWithAllLicenses = (
  query?: string,
  page?: number,
  pageSize = 16,
  license = "all",
): Promise<ISearchResultV3DTO> => {
  return searchImages(query, page, pageSize, license);
};

export const Default: StoryFn<typeof ImageSearch> = ({ ...args }) => {
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

export const WithCopyrighted: StoryFn<typeof ImageSearch> = ({ ...args }) => {
  return (
    <ImageSearch
      {...args}
      fetchImage={fetchImage}
      searchImages={fetchImagesWithCopyrighted}
      // eslint-disable-next-line no-console
      onImageSelect={console.log}
      // eslint-disable-next-line no-console
      onError={console.error}
    />
  );
};

export const WithAllLicenses: StoryFn<typeof ImageSearch> = ({ ...args }) => {
  return (
    <ImageSearch
      {...args}
      fetchImage={fetchImage}
      searchImages={fetchImagesWithAllLicenses}
      // eslint-disable-next-line no-console
      onImageSelect={console.log}
      // eslint-disable-next-line no-console
      onError={console.error}
    />
  );
};
