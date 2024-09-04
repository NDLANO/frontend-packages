/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import { SearchLine } from "@ndla/icons/common";
import { IconButton, Input } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { QueryObject } from "./AudioSearch";

const StyledForm = styled("form", {
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

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement> | FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchQuerySubmit(queryObject);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="search"
        placeholder={translations.searchPlaceholder}
        value={queryObject?.query}
        onChange={handleQueryChange}
      />
      <IconButton
        variant="primary"
        type="submit"
        aria-label={translations.searchButtonTitle}
        title={translations.searchButtonTitle}
      >
        <SearchLine />
      </IconButton>
    </StyledForm>
  );
};

export default AudioSearchForm;
