/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { TFunction } from "i18next";
import {
  AriaGuidanceProps,
  AriaOnChangeProps,
  AriaOnFilterProps,
  AriaOnFocusProps,
  GroupBase,
  OptionsOrGroups,
} from "react-select";
import { TagType } from "./types";

export const createAriaMessages = (t: TFunction) => ({
  guidance: (props: AriaGuidanceProps) => {
    const { isSearchable, isMulti, isDisabled, tabSelectsValue, context } = props;
    switch (context) {
      case "menu":
        return `${t("tagSelector.aria.guidance.menu.updown")}${
          isDisabled ? "" : `, ${t("tagSelector.aria.guidance.menu.enter")}`
        }, ${t("tagSelector.aria.guidance.menu.escape")}${
          tabSelectsValue ? `, ${t("tagSelector.aria.guidance.menu.tab")}` : ""
        }.`;
      case "input":
        return `${props["aria-label"] || t("tagSelector.aria.guidance.input.select")} ${t(
          "tagSelector.aria.guidance.input.focused",
        )} ${isSearchable ? `, ${t("tagSelector.aria.guidance.input.refine")}` : ""}, ${t(
          "tagSelector.aria.guidance.input.down",
        )}, ${isMulti ? ` ${t("tagSelector.aria.guidance.input.left")}` : ""}, ${t(
          "tagSelector.aria.guidance.input.space",
        )}`;
      case "value":
        return t("tagSelector.aria.guidance.value");
      default:
        return "";
    }
  },

  onChange: (props: AriaOnChangeProps<TagType, true>) => {
    const { action, label = "", labels, isDisabled } = props;
    switch (action) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return t("tagSelector.aria.onChange.deselect", { label });
      case "clear":
        return t("tagSelector.aria.onChange.clear");
      case "initial-input-focus":
        return t("tagSelector.aria.onChange.initialFocus", {
          labels: labels.join(","),
        });
      case "select-option":
        return isDisabled
          ? t("tagSelector.aria.onChange.selectedDisabled", { label })
          : t("tagSelector.aria.onChange.selected", { label });
      default:
        return "";
    }
  },

  onFocus: (props: AriaOnFocusProps<TagType, GroupBase<TagType>>) => {
    const { context, focused, options, label = "", selectValue, isDisabled, isSelected } = props;

    const getArrayIndex = (arr: OptionsOrGroups<TagType, GroupBase<TagType>>, item: TagType) =>
      arr && arr.length ? `${arr.indexOf(item) + 1} ${t("tagSelector.aria.onFocus.of")} ${arr.length}` : "";

    if (context === "value" && selectValue) {
      return t("tagSelector.aria.onFocus.value", {
        label,
        position: getArrayIndex(selectValue, focused),
      });
    }

    if (context === "menu") {
      const disabled = isDisabled ? ` ${t("tagSelector.aria.disabled")}` : "";
      const status = `${isSelected ? t("tagSelector.aria.selected") : t("tagSelector.aria.focused")}${disabled}`;
      return t("tagSelector.aria.onFocus.menu", {
        label,
        status,
        position: getArrayIndex(options, focused),
      });
    }
    return "";
  },

  onFilter: (props: AriaOnFilterProps) => {
    const { inputValue, resultsMessage } = props;
    return `${resultsMessage}${inputValue ? ` ${t("tagSelector.aria.onFilter")} ` + inputValue : ""}.`;
  },
});
