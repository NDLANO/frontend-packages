/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useId, useRef } from "react";
import type { ComboboxCollectionItem } from "@ark-ui/react";
import { ComboboxContext, useTagsInputContext, useComboboxContext } from "@ark-ui/react";
import { Cross } from "@ndla/icons/action";
import {
  ComboboxClearTrigger,
  ComboboxControl,
  ComboboxControlProps,
  ComboboxInput,
  ComboboxInputProps,
  ComboboxLabel,
  ComboboxRoot,
  ComboboxRootProps,
  ComboboxTrigger,
  TagsInputControl,
  TagsInputControlProps,
  TagsInputInput,
  TagsInputInputProps,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputRoot,
  TagsInputRootProps,
  TagsInputItemInput,
} from "@ndla/primitives";
import { contains } from "@ndla/util";

export type TagSelectorRootProps<T extends ComboboxCollectionItem> = ComboboxRootProps<T> & TagsInputRootProps;

export const TagSelectorRoot = <T extends ComboboxCollectionItem>({
  allowCustomValue = true,
  multiple = true,
  selectionBehavior = "clear",
  editable = false,
  addOnPaste = false,
  onValueChange,
  children,
  value,
  ...rest
}: TagSelectorRootProps<T>) => {
  const ids = {
    root: useId(),
    input: useId(),
    control: useId(),
  };

  const controlRef = useRef<HTMLDivElement | undefined>(undefined);

  useEffect(() => {
    if (!controlRef.current) {
      controlRef.current = document.getElementById(ids.control) as HTMLDivElement | undefined;
    }
  }, [ids.control]);

  return (
    <ComboboxRoot
      ids={ids}
      asChild
      allowCustomValue={allowCustomValue}
      multiple={multiple}
      selectionBehavior={selectionBehavior}
      onValueChange={onValueChange}
      onPointerDownOutside={(event) => {
        if (contains(controlRef.current, event.detail.originalEvent.target)) {
          event.preventDefault();
        }
      }}
      value={value}
      {...rest}
    >
      <ComboboxContext>
        {(api) => (
          <TagsInputRoot
            ids={ids}
            value={value}
            onInputValueChange={(details) => api.setInputValue(details.inputValue)}
            // onInteractOutside={console.log}
            // onPointerDownOutside={console.log}
            // onFocusOutside={console.log}
            editable={editable}
            onValueChange={onValueChange}
            addOnPaste={addOnPaste}
          >
            {children}
          </TagsInputRoot>
        )}
      </ComboboxContext>
    </ComboboxRoot>
  );
};

export type TagSelectorControlProps = ComboboxControlProps & TagsInputControlProps;

export const TagSelectorLabel = ComboboxLabel;

export const TagSelectorItemInput = TagsInputItemInput;

export const TagSelectorTrigger = ComboboxTrigger;

export const TagSelectorControl = ({ children, ...props }: TagSelectorControlProps) => {
  return (
    <ComboboxControl asChild>
      <TagsInputControl {...props}>{children}</TagsInputControl>
    </ComboboxControl>
  );
};

export const TagSelectorClearTrigger = ComboboxClearTrigger;

export type TagSelectorInputProps = ComboboxInputProps & TagsInputInputProps;

export const TagSelectorInput = ({ children, ...props }: TagSelectorInputProps) => {
  const tagsApi = useTagsInputContext();
  const comboboxApi = useComboboxContext();

  return (
    <>
      {tagsApi.value.map((value, index) => (
        <TagsInputItem index={index} value={value} key={value}>
          <TagsInputItemPreview>
            <TagsInputItemText>{value}</TagsInputItemText>
            <TagsInputItemDeleteTrigger>
              <Cross />
            </TagsInputItemDeleteTrigger>
          </TagsInputItemPreview>
        </TagsInputItem>
      ))}
      <ComboboxInput asChild>
        <TagsInputInput
          {...props}
          onKeyDown={(event) => {
            if (event.key === "Enter" && comboboxApi.collection.items.length === 0) {
              tagsApi.addValue(tagsApi.inputValue);
            }
          }}
        >
          {children}
        </TagsInputInput>
      </ComboboxInput>
    </>
  );
};
