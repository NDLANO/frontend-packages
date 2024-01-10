/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { KeyboardEvent, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { MultiValue, StylesConfig } from "react-select";
import CreatableSelect from "react-select/creatable";
import styled from "@emotion/styled";
import { colors, fonts, spacing, utils } from "@ndla/core";
import { createAriaMessages } from "./ariaMessages";
import Control from "./Control";
import DropdownIndicator from "./DropdownIndicator";
import Input from "./Input";
import Menu from "./Menu";
import MenuList from "./MenuList";
import Option from "./Option";
import SelectContainer from "./SelectContainer";
import { TagType } from "./types";
import ValueButton from "./ValueButton";

const styles: StylesConfig<TagType, true> = {
  menu: () => ({}),
  dropdownIndicator: () => ({}),
  placeholder: (provided) => ({
    ...provided,
    padding: `0 ${spacing.small}`,
    color: colors.brand.primary,
    margin: 0,
  }),
  valueContainer: (provided) => ({ ...provided, padding: 0 }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    alignSelf: "flex-end",
  }),
};

const StyledTagSelector = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

interface StyledLabelProps {
  labelHidden?: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
  font-weight: ${fonts.weight.semibold};
  ${(p) => p.labelHidden && utils.labelHidden}
`;

interface Props {
  label: string;
  tags: string[];
  selected: string[];
  onChange: (tags: string[]) => void;
  onCreateTag: (name: string) => void;
  className?: string;
  labelHidden?: boolean;
}

const TagSelector = ({
  selected: _selected,
  tags: _tags,
  onChange,
  onCreateTag,
  className,
  label,
  labelHidden,
}: Props) => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const tags = useMemo(() => _tags.map((tag) => ({ value: tag, label: tag })), [_tags]);
  const selected = useMemo(() => _selected.map((tag) => ({ value: tag, label: tag })), [_selected]);

  const handleSpaceClick = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === " ") {
      e.preventDefault();
      if (!_selected.find((tag) => tag === input) && input !== "") {
        onChange(_selected.concat(input));
      }
      setInput("");
    }
  };

  const handleChange = (tags: MultiValue<TagType>) => {
    onChange(tags.map((tag) => tag.value));
  };

  const createLabel = (tag: string) => t("tagSelector.createLabel", { tag });

  return (
    <StyledTagSelector className={className}>
      {label && (
        <StyledLabel labelHidden={labelHidden} htmlFor="tagselector-creatable" id="tagselector-label">
          {label}
        </StyledLabel>
      )}
      <CreatableSelect
        id="tagselector-creatable"
        aria-labelledby={label ? "tagselector-label" : undefined}
        ariaLiveMessages={createAriaMessages(t)}
        components={{
          DropdownIndicator,
          MultiValue: ValueButton,
          SelectContainer,
          MenuList,
          Control,
          Option,
          Menu,
          Input,
        }}
        formatCreateLabel={createLabel}
        inputValue={input}
        isClearable={false}
        isMulti
        noOptionsMessage={() => t("tagSelector.noOptions")}
        onChange={handleChange}
        onCreateOption={onCreateTag}
        onInputChange={setInput}
        onKeyDown={handleSpaceClick}
        options={tags}
        placeholder={t("tagSelector.placeholder")}
        screenReaderStatus={({ count }) => t("tagSelector.aria.screenReaderStatus", { count })}
        styles={styles}
        tabSelectsValue={false}
        value={selected}
      />
    </StyledTagSelector>
  );
};

export default TagSelector;
