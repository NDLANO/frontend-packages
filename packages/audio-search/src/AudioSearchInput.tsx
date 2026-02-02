/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { SearchLine } from "@ndla/icons";
import { IconButton, Input } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { type ChangeEvent, type KeyboardEvent, useState } from "react";
import { type QueryObject } from "./AudioSearch";

const InputWrapper = styled("div", {
  base: {
    display: "flex",
    gap: "xsmall",
  },
});

interface Props {
  queryObject: QueryObject;
  translations: {
    searchPlaceholder: string;
    searchButtonTitle: string;
  };
  searching: boolean;
  onSearchQuerySubmit: (query: QueryObject) => void;
}

export const AudioSearchInput = ({ queryObject: query, translations, onSearchQuerySubmit }: Props) => {
  const [queryObject, setQueryObject] = useState(query);

  const handleQueryChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setQueryObject((prevState) => ({
      ...prevState,
      query: value,
    }));
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement | HTMLButtonElement>) => {
    if (e.key === "Enter") {
      onSearchQuerySubmit(queryObject);
    }
  };

  return (
    <InputWrapper role="search">
      <Input
        type="search"
        placeholder={translations.searchPlaceholder}
        value={queryObject?.query}
        onChange={handleQueryChange}
        onKeyDown={onEnter}
      />
      <IconButton
        variant="primary"
        type="submit"
        aria-label={translations.searchButtonTitle}
        title={translations.searchButtonTitle}
        onKeyDown={onEnter}
        onClick={() => onSearchQuerySubmit(queryObject)}
      >
        <SearchLine />
      </IconButton>
    </InputWrapper>
  );
};
