/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ChangeEvent, useState } from "react";
import { SearchLine } from "@ndla/icons/common";
import { IconButton, Input } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { QueryObject } from "./AudioSearch";

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

const AudioSearchForm = ({ queryObject: query, translations, searching, onSearchQuerySubmit }: Props) => {
  const [queryObject, setQueryObject] = useState(query);

  const handleQueryChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setQueryObject((prevState) => ({
      ...prevState,
      query: value,
    }));
  };

  return (
    <InputWrapper role="search">
      <Input
        type="search"
        placeholder={translations.searchPlaceholder}
        value={queryObject?.query}
        onChange={handleQueryChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearchQuerySubmit(queryObject);
          }
        }}
      />
      <IconButton
        variant="primary"
        type="submit"
        aria-label={translations.searchButtonTitle}
        title={translations.searchButtonTitle}
        onClick={() => onSearchQuerySubmit(queryObject)}
      >
        <SearchLine />
      </IconButton>
    </InputWrapper>
  );
};

export default AudioSearchForm;
