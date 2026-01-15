/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import type { CollectionItem } from "@ark-ui/react";
import type { ComboboxRootProps, PaginationRootProps, TagsInputRootProps, DatePickerRootProps } from "@ndla/primitives";
import { type TagSelectorRootProps } from "../TagSelector/TagSelector";
import { useMemo } from "react";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export const useTagsInputTranslations = (
  translations?: Partial<TagsInputRootProps["translations"]>,
): TagsInputRootProps["translations"] => {
  const { t } = useTranslation("translation", { keyPrefix: "component.tagsInput" });

  return useMemo(
    () => ({
      clearTriggerLabel: t("clearTriggerLabel"),
      deleteTagTriggerLabel: (tag) => t("deleteTagTriggerLabel", { tag }),
      tagAdded: (tag) => t("tagAdded", { tag }),
      tagsPasted: (tag) => t("tagsPasted", { length: tag.length }),
      tagEdited: (tag) => t("tagEdited", { tag }),
      tagUpdated: (tag) => t("tagUpdated", { tag }),
      tagDeleted: (tag) => t("tagDeleted", { tag }),
      tagSelected: (tag) => t("tagSelected", { tag }),
      ...translations,
    }),
    [t, translations],
  );
};

export const useComboboxTranslations = <T extends CollectionItem>(
  translations?: Partial<ComboboxRootProps<T>["translations"]>,
): ComboboxRootProps<T>["translations"] => {
  const { t } = useTranslation("translation", { keyPrefix: "component.combobox" });

  return useMemo(
    () => ({
      triggerLabel: t("triggerLabel"),
      clearTriggerLabel: t("clearTriggerLabel"),
      ...translations,
    }),
    [t, translations],
  );
};

export const useTagSelectorTranslations = <T extends CollectionItem>(
  translations?: Partial<TagSelectorRootProps<T>["translations"]>,
): TagSelectorRootProps<T>["translations"] => {
  const tagsInputTranslations = useTagsInputTranslations();
  const comboboxTranslations = useComboboxTranslations();

  return useMemo(
    () =>
      ({
        ...comboboxTranslations,
        ...tagsInputTranslations,
        ...translations,
      }) as TagSelectorRootProps<T>["translations"],
    [comboboxTranslations, tagsInputTranslations, translations],
  );
};

export const usePaginationTranslations = (
  translations?: Partial<PaginationRootProps["translations"]>,
): PaginationRootProps["translations"] => {
  const { t } = useTranslation("translation", { keyPrefix: "component.pagination" });

  return useMemo(
    () => ({
      rootLabel: t("rootLabel"),
      prevTriggerLabel: t("prevTriggerLabel"),
      nextTriggerLabel: t("nextTriggerLabel"),
      itemLabel: (details) => {
        const lastPage = details.totalPages > 1 && details.page === details.totalPages;
        return lastPage ? t("lastPage", { page: details.page }) : t("page", { page: details.page });
      },
      ...translations,
    }),
    [translations, t],
  );
};

// TODO: Deduplicate this and place it somewhere smart. Maybe core?
interface AudioSearchTranslations {
  searchPlaceholder: string;
  searchButtonTitle: string;
  useAudio: string;
  noResults: string;
  paginationTranslations: PaginationRootProps["translations"];
}

interface VideoTranslations {
  searchPlaceholder: string;
  searchButtonTitle: string;
  loadMoreVideos: string;
  noResults: string;
  is360Video: string;
  previewVideo: string;
  addVideo: string;
  close: string;
}
interface PreviewTranslations {
  creatorsLabel: string;
  license: string;
  caption: string;
  altText: string;
  modelRelease: string;
  tags: string;
  close: string;
  checkboxLabel?: string;
  missingTitleFallback?: string;
  useImageTitle: string;
}

interface ImageSearchTranslations {
  searchPlaceholder: string;
  searchButtonTitle: string;
  imagePreview: PreviewTranslations;
  paginationTranslations: PaginationRootProps["translations"];
}

export const useImageSearchTranslations = (
  translations: DeepPartial<ImageSearchTranslations> = {},
): ImageSearchTranslations => {
  const { t } = useTranslation("translation", { keyPrefix: "component.imageSearch" });
  const paginationTranslations = usePaginationTranslations();

  const { imagePreview, paginationTranslations: fallbackPaginationTranslations, ...remaining } = translations;

  return useMemo(
    () => ({
      searchPlaceholder: t("searchPlaceholder"),
      searchButtonTitle: t("searchButtonTitle"),
      imagePreview: {
        creatorsLabel: t("imagePreview.creatorsLabel"),
        license: t("imagePreview.license"),
        caption: t("imagePreview.caption"),
        altText: t("imagePreview.altText"),
        modelRelease: t("imagePreview.modelRelease"),
        tags: t("imagePreview.tags"),
        close: t("close"),
        checkboxLabel: t("imagePreview.checkboxLabel"),
        useImageTitle: t("imagePreview.useImageTitle"),
        ...imagePreview,
      },
      paginationTranslations: { ...paginationTranslations, ...fallbackPaginationTranslations },
      ...remaining,
    }),
    [t, paginationTranslations, imagePreview, fallbackPaginationTranslations, remaining],
  );
};

export const useAudioSearchTranslations = (
  translations: DeepPartial<AudioSearchTranslations> = {},
): AudioSearchTranslations => {
  const { t } = useTranslation("translation", { keyPrefix: "component.audioSearch" });
  const paginationTranslations = usePaginationTranslations();

  const { paginationTranslations: fallbackPaginationTranslations, ...remaining } = translations;

  return useMemo(
    () => ({
      searchPlaceholder: t("searchPlaceholder"),
      searchButtonTitle: t("searchButtonTitle"),
      useAudio: t("useAudio"),
      noResults: t("noResults"),
      paginationTranslations: { ...paginationTranslations, ...fallbackPaginationTranslations },
      ...remaining,
    }),
    [t, paginationTranslations, fallbackPaginationTranslations, remaining],
  );
};

export const useVideoSearchTranslations = (translations?: Partial<VideoTranslations>): VideoTranslations => {
  const { t } = useTranslation("translation", { keyPrefix: "component.videoSearch" });

  return useMemo(
    () => ({
      searchPlaceholder: t("searchPlaceholder"),
      searchButtonTitle: t("searchButtonTitle"),
      loadMoreVideos: t("loadMoreVideos"),
      noResults: t("noResults"),
      is360Video: t("is360Video"),
      previewVideo: t("previewVideo"),
      addVideo: t("addVideo"),
      close: t("close"),
      ...translations,
    }),
    [t, translations],
  );
};

export const useDatePickerTranslations = (
  translations?: Partial<DatePickerRootProps["translations"]>,
): NonNullable<DatePickerRootProps["translations"]> => {
  const { t } = useTranslation("translation", { keyPrefix: "component.datePicker" });

  return useMemo(
    () => ({
      dayCell: (state) => {
        if (state.unavailable) {
          return t("dayCell.unavailable", { date: state.formattedDate });
        } else if (state.selected) {
          return t("dayCell.selected", { date: state.formattedDate });
        } else return t("dayCell.select", { date: state.formattedDate });
      },
      nextTrigger: (view) => t(`nextTrigger.${view}`),
      prevTrigger: (view) => t(`prevTrigger.${view}`),
      monthSelect: t("monthSelect"),
      yearSelect: t("yearSelect"),
      viewTrigger: (view) => t(`viewTrigger.${view}`),
      presetTrigger: (value) => {
        if (Array.isArray(value)) {
          return t("presetTrigger.range", { start: value[0], end: value[1] });
        } else return t("presetTrigger.single", { date: value });
      },
      clearTrigger: t("clearTrigger"),
      trigger: (open) => t(`trigger.${open ? "close" : "open"}`),
      content: t("content"),
      placeholder: (_locale) => {
        return { day: "dd", month: "mm", year: "yyyy" };
      },
      ...translations,
    }),
    [t, translations],
  );
};
