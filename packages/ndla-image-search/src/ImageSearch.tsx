/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ChangeEvent, ReactNode, KeyboardEvent, useEffect, useState, FormEvent } from "react";
import { ChevronLeft, ChevronRight, SearchLine } from "@ndla/icons/common";
import {
  Button,
  IconButton,
  Input,
  PaginationContext,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
  Text,
  PaginationRootProps,
} from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { IImageMetaInformationV3, ISearchResultV3, ISearchParams } from "@ndla/types-backend/image-api";
import ImageSearchResult from "./ImageSearchResult";

const ImageSearchWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "small",
  },
});

const StyledSearchResults = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gridGap: "xsmall",
    gridAutoFlow: "dense",
  },
});

const StyledForm = styled("form", {
  base: {
    display: "flex",
    gap: "xsmall",
  },
});

export interface MetadataTranslations {
  creators: string;
  license: string;
  caption: string;
  altText: string;
  modelRelease: string;
  tags: string;
}

interface Props {
  onImageSelect: (image: IImageMetaInformationV3) => void;
  searchImages: (query: string | undefined, page: number | undefined) => Promise<ISearchResultV3>;
  fetchImage: (id: number) => Promise<IImageMetaInformationV3>;
  onError: (err: any) => void;
  locale: string;
  noResults?: ReactNode;
  checkboxAction?: (image: IImageMetaInformationV3) => void;
  showCheckbox?: boolean;
  checkboxLabel?: string;
  translations: {
    searchPlaceholder: string;
    searchButtonTitle: string;
    useImageTitle: string;
    close: string;
    imageMetadata: MetadataTranslations;
    paginationTranslations: PaginationRootProps["translations"];
  };
}

const ImageSearch = ({
  onImageSelect,
  searchImages: search,
  fetchImage,
  onError,
  locale,
  noResults,
  checkboxAction,
  showCheckbox,
  checkboxLabel,
  translations,
}: Props) => {
  const [queryObject, setQueryObject] = useState<ISearchParams>({
    query: undefined,
    page: 1,
    pageSize: 16,
  });
  const [selectedImage, setSelectedImage] = useState<IImageMetaInformationV3 | undefined>();
  const [searching, setSearching] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<ISearchResultV3 | undefined>();

  const { page } = queryObject;
  const noResultsFound = !searching && searchResult?.results.length === 0;
  const imageSearchTranslations = { ...translations.imageMetadata, close: translations.close };

  const onImageClick = (image: IImageMetaInformationV3) => {
    if (!selectedImage || image.id !== selectedImage.id) {
      fetchImage(Number.parseInt(image.id))
        .then((result) => {
          setSelectedImage(result);
        })
        .catch((err) => {
          onError(err);
        });
    }
  };

  const onSelectImage = (image: IImageMetaInformationV3 | undefined, saveAsMetaImage?: boolean) => {
    setSelectedImage(undefined);
    if (!image) return;
    onImageSelect(image);
    if (saveAsMetaImage) {
      checkboxAction?.(image);
    }
  };

  const searchImages = (queryObject: ISearchParams) => {
    setSearching(true);
    search(queryObject.query, queryObject.page)
      .then((result) => {
        setQueryObject({
          query: queryObject.query,
          pageSize: result.pageSize,
          page: queryObject.page,
        });
        setSearchResult(result);
        setSearching(false);
      })
      .catch((err) => {
        onError(err);
        setSearching(false);
      });
  };

  const handleQueryChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setQueryObject((prevState) => ({
      ...prevState,
      query: value,
    }));
  };

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement> | FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchImages(queryObject);
  };

  useEffect(() => {
    searchImages(queryObject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ImageSearchWrapper>
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
      {noResultsFound && noResults}
      <StyledSearchResults>
        {searchResult?.results.map((image) => (
          <ImageSearchResult
            key={image.id}
            image={image}
            onImageClick={onImageClick}
            selectedImage={selectedImage}
            onSelectImage={onSelectImage}
            useImageTitle={translations.useImageTitle}
            showCheckbox={!!showCheckbox}
            translations={imageSearchTranslations}
            checkboxLabel={checkboxLabel}
            locale={locale}
          />
        ))}
      </StyledSearchResults>
      <PaginationRoot
        page={page ?? 1}
        onPageChange={(details) => searchImages({ ...queryObject, page: details.page })}
        translations={translations.paginationTranslations}
        count={searchResult?.totalCount ?? 0}
        pageSize={searchResult?.pageSize}
        siblingCount={2}
      >
        <PaginationPrevTrigger asChild>
          <Button variant="tertiary">
            <ChevronLeft />
            {translations.paginationTranslations?.prevTriggerLabel}
          </Button>
        </PaginationPrevTrigger>
        <PaginationContext>
          {(pagination) =>
            pagination.pages.map((page, index, full) => {
              // Hide last page to not trigger RESULT_WINDOW_TOO_LARGE error
              if (index === full.length - 1) return null;
              return page.type === "page" ? (
                <PaginationItem key={index} {...page} asChild>
                  <Button variant={page.value === pagination.page ? "primary" : "tertiary"}>{page.value}</Button>
                </PaginationItem>
              ) : (
                <PaginationEllipsis key={index} index={index} asChild>
                  <Text asChild consumeCss>
                    <div>&#8230;</div>
                  </Text>
                </PaginationEllipsis>
              );
            })
          }
        </PaginationContext>
        <PaginationNextTrigger asChild>
          <Button variant="tertiary">
            {translations.paginationTranslations?.nextTriggerLabel}
            <ChevronRight />
          </Button>
        </PaginationNextTrigger>
      </PaginationRoot>
    </ImageSearchWrapper>
  );
};

export default ImageSearch;
