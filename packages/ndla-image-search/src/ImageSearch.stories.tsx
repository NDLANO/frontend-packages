/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn } from "@storybook/react";
import type { ISearchResultV3DTO } from "@ndla/types-backend/image-api";
import { ImageSearch } from "./ImageSearch";

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

export const Default: StoryFn<typeof ImageSearch> = ({ ...args }) => {
  const fetchImages = (query?: string, page?: number): Promise<ISearchResultV3DTO> => {
    const queryString = query ? `query=${query}&page=${page}&page-size=15` : `page=${page}&page-size=15`;
    return new Promise((resolve, reject) => {
      fetch(`https://api.test.ndla.no/image-api/v3/images/?${queryString}`, {
        method: "GET",
      }).then((res) => {
        if (res.ok) {
          return resolve(res.json());
        }
        return res.json().then((json) => reject(json));
      });
    });
  };

  return (
    <ImageSearch
      {...args}
      searchImages={fetchImages}
      // eslint-disable-next-line no-console
      onImageSelect={console.log}
      // eslint-disable-next-line no-console
      onError={console.error}
    />
  );
};
