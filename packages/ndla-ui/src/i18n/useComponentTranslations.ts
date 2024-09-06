/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import type { ComboboxCollectionItem } from "@ark-ui/react";
import type { ComboboxRootProps, PaginationRootProps, TagsInputRootProps } from "@ndla/primitives";
import { TagSelectorRootProps } from "../TagSelector/TagSelector";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export const useTagsInputTranslations = (
  translations?: Partial<TagsInputRootProps["translations"]>,
): TagsInputRootProps["translations"] => {
  const { t } = useTranslation("translation", { keyPrefix: "component.tagsInput" });

  return {
    clearTriggerLabel: t("clearTriggerLabel"),
    deleteTagTriggerLabel: (tag) => t("deleteTagTriggerLabel", { tag }),
    tagAdded: (tag) => t("tagAdded", { tag }),
    tagsPasted: (tag) => t("tagsPasted", { length: tag.length }),
    tagEdited: (tag) => t("tagEdited", { tag }),
    tagUpdated: (tag) => t("tagUpdated", { tag }),
    tagDeleted: (tag) => t("tagDeleted", { tag }),
    tagSelected: (tag) => t("tagSelected", { tag }),
    ...translations,
  };
};

export const useComboboxTranslations = <T extends ComboboxCollectionItem>(
  translations?: Partial<ComboboxRootProps<T>["translations"]>,
): ComboboxRootProps<T>["translations"] => {
  const { t } = useTranslation("translation", { keyPrefix: "component.combobox" });

  return {
    triggerLabel: t("triggerLabel"),
    clearTriggerLabel: t("clearTriggerLabel"),
    ...translations,
  };
};

export const useTagSelectorTranslations = <T extends ComboboxCollectionItem>(
  translations?: Partial<TagSelectorRootProps<T>["translations"]>,
): TagSelectorRootProps<T>["translations"] => {
  const tagsInputTranslations = useTagsInputTranslations();
  const comboboxTranslations = useComboboxTranslations();

  return {
    ...comboboxTranslations,
    ...tagsInputTranslations,
    ...translations,
  } as TagSelectorRootProps<T>["translations"];
};

export const usePaginationTranslations = (
  translations?: Partial<PaginationRootProps["translations"]>,
): PaginationRootProps["translations"] => {
  const { t } = useTranslation("translation", { keyPrefix: "component.pagination" });

  return {
    rootLabel: t("rootLabel"),
    prevTriggerLabel: t("prevTriggerLabel"),
    nextTriggerLabel: t("nextTriggerLabel"),
    itemLabel: (details) => {
      const lastPage = details.totalPages > 1 && details.page === details.totalPages;
      return lastPage ? t("lastPage", { page: details.page }) : t("page", { page: details.page });
    },
    ...translations,
  };
};

// TODO: Deduplicate this and place it somewhere smart. Maybe core?
interface AudioSearchTranslations {
  searchPlaceholder: string;
  searchButtonTitle: string;
  useAudio: string;
  noResults: string;
  paginationTranslations: PaginationRootProps["translations"];
}

interface MetadataTranslations {
  creatorsLabel: string;
  license: string;
  caption: string;
  altText: string;
  modelRelease: string;
  tags: string;
}

interface ImageSearchTranslations {
  searchPlaceholder: string;
  searchButtonTitle: string;
  useImageTitle: string;
  close: string;
  imageMetadata: MetadataTranslations;
  paginationTranslations: PaginationRootProps["translations"];
  missingTitleFallback?: string;
  checkboxLabel?: string;
}

export const useImageSearchTranslations = (
  translations: DeepPartial<ImageSearchTranslations> = {},
): ImageSearchTranslations => {
  const { t } = useTranslation("translation", { keyPrefix: "component.imageSearch" });
  const paginationTranslations = usePaginationTranslations();

  const { imageMetadata, paginationTranslations: fallbackPaginationTranslations, ...remaining } = translations;

  return {
    close: t("close"),
    searchPlaceholder: t("searchPlaceholder"),
    searchButtonTitle: t("searchButtonTitle"),
    useImageTitle: t("useImageTitle"),
    imageMetadata: {
      creatorsLabel: t("imageMetadata.creatorsLabel"),
      license: t("imageMetadata.license"),
      caption: t("imageMetadata.caption"),
      altText: t("imageMetadata.altText"),
      modelRelease: t("imageMetadata.modelRelease"),
      tags: t("imageMetadata.tags"),
      ...imageMetadata,
    },
    paginationTranslations: { ...paginationTranslations, ...fallbackPaginationTranslations },
    ...remaining,
  };
};

export const useAudioSearchTranslations = (
  translations: DeepPartial<AudioSearchTranslations> = {},
): AudioSearchTranslations => {
  const { t } = useTranslation("translation", { keyPrefix: "component.audioSearch" });
  const paginationTranslations = usePaginationTranslations();

  const { paginationTranslations: fallbackPaginationTranslations, ...remaining } = translations;

  return {
    searchPlaceholder: t("searchPlaceholder"),
    searchButtonTitle: t("searchButtonTitle"),
    useAudio: t("useAudio"),
    noResults: t("noResults"),
    paginationTranslations: { ...paginationTranslations, ...fallbackPaginationTranslations },
    ...remaining,
  };
};
