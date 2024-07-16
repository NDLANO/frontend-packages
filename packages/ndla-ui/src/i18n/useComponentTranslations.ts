/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import type { ComboboxCollectionItem } from "@ark-ui/react";
import type { ComboboxRootProps, TagsInputRootProps } from "@ndla/primitives";
import { TagSelectorRootProps } from "../TagSelector/TagSelector";

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
