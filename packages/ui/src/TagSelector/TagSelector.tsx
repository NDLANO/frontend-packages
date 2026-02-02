/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type CollectionItem, useTagsInputContext, useComboboxContext } from "@ark-ui/react";
import { CloseLine } from "@ndla/icons";
import {
  ComboboxClearTrigger,
  ComboboxControl,
  type ComboboxControlProps,
  ComboboxInput,
  type ComboboxInputProps,
  ComboboxLabel,
  ComboboxRoot,
  type ComboboxRootProps,
  ComboboxTrigger,
  TagsInputControl,
  type TagsInputControlProps,
  TagsInputInput,
  type TagsInputInputProps,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputRoot,
  type TagsInputRootProps,
  TagsInputItemInput,
} from "@ndla/primitives";
import { contains } from "@ndla/util";
import { forwardRef, useEffect, useId, useRef } from "react";

export type TagSelectorRootProps<T extends CollectionItem> = ComboboxRootProps<T> & TagsInputRootProps;

export const TagSelectorRoot = <T extends CollectionItem>({
  allowCustomValue = true,
  multiple = true,
  selectionBehavior = "clear",
  editable,
  addOnPaste = false,
  onValueChange,
  children,
  value,
  translations,
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
      translations={translations}
      onPointerDownOutside={(event) => {
        if (contains(controlRef.current, event.detail.originalEvent.target)) {
          event.preventDefault();
        }
      }}
      value={value}
      {...rest}
    >
      <TagSelectorTagsInputRoot
        ids={ids}
        value={value}
        editable={editable}
        onValueChange={onValueChange}
        addOnPaste={addOnPaste}
        translations={translations}
      >
        {children}
      </TagSelectorTagsInputRoot>
    </ComboboxRoot>
  );
};

const TagSelectorTagsInputRoot = forwardRef<HTMLDivElement, TagsInputRootProps>((props, ref) => {
  const comboboxApi = useComboboxContext();
  return (
    <TagsInputRoot
      ref={ref}
      onInputValueChange={(details) => comboboxApi.setInputValue(details.inputValue)}
      {...props}
    />
  );
});

export type TagSelectorControlProps = ComboboxControlProps & TagsInputControlProps;

export const TagSelectorLabel = ComboboxLabel;

export const TagSelectorItemInput = TagsInputItemInput;

export const TagSelectorTrigger = ComboboxTrigger;

export const TagSelectorControl = forwardRef<HTMLDivElement, TagSelectorControlProps>(({ children, ...props }, ref) => {
  return (
    <ComboboxControl ref={ref} asChild>
      <TagsInputControl {...props}>{children}</TagsInputControl>
    </ComboboxControl>
  );
});

export const TagSelectorClearTrigger = ComboboxClearTrigger;

export type TagSelectorInputProps = ComboboxInputProps & TagsInputInputProps;

// If you need to modify the TagsInputItem, you can use this.
export const TagSelectorInputBase = forwardRef<HTMLInputElement, TagSelectorInputProps>(
  ({ children, ...props }, ref) => {
    const tagsApi = useTagsInputContext();

    return (
      <ComboboxInput ref={ref} asChild>
        <TagsInputInput
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              tagsApi.addValue(tagsApi.inputValue);
            }
          }}
          {...props}
        >
          {children}
        </TagsInputInput>
      </ComboboxInput>
    );
  },
);

export const TagSelectorInput = forwardRef<HTMLInputElement, TagSelectorInputProps>(({ children, ...props }, ref) => {
  const tagsApi = useTagsInputContext();

  return (
    <>
      {tagsApi.value.map((value, index) => (
        <TagsInputItem index={index} value={value} key={value}>
          <TagsInputItemPreview>
            <TagsInputItemText>{value}</TagsInputItemText>
            <TagsInputItemDeleteTrigger>
              <CloseLine />
            </TagsInputItemDeleteTrigger>
          </TagsInputItemPreview>
          <TagsInputItemInput />
        </TagsInputItem>
      ))}
      <ComboboxInput ref={ref} asChild>
        <TagsInputInput
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              tagsApi.addValue(tagsApi.inputValue);
            }
          }}
          {...props}
        >
          {children}
        </TagsInputInput>
      </ComboboxInput>
    </>
  );
});
