/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ChangeEvent, type ReactNode, type KeyboardEvent, useEffect, useState } from "react";
import { ArrowLeftShortLine, ArrowRightShortLine, SearchLine } from "@ndla/icons";
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
  type PaginationRootProps,
} from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { IImageMetaInformationV3, ISearchResultV3, ISearchParams } from "@ndla/types-backend/image-api";
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

const InputWrapper = styled("div", {
  base: {
    display: "flex",
    gap: "xsmall",
  },
});

const StyledPaginationRoot = styled(PaginationRoot, {
  base: {
    flexWrap: "wrap",
  },
});

const StyledButton = styled(Button, {
  base: {
    tabletWideDown: {
      paddingInline: "xsmall",
      "& span": {
        display: "none",
      },
    },
  },
});

const StyledPaginationItem = styled(PaginationItem, {
  base: {
    tabletWideDown: {
      "&:nth-child(2)": {
        display: "none",
      },
      "&:nth-last-child(2)": {
        display: "none",
      },
    },
  },
});

export interface PreviewTranslations {
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

export interface ImageSearchTranslations {
  searchPlaceholder: string;
  searchButtonTitle: string;
  imagePreview: PreviewTranslations;
  paginationTranslations: PaginationRootProps["translations"];
}

interface Props {
  onImageSelect: (image: IImageMetaInformationV3) => void;
  searchImages: (query: string | undefined, page: number | undefined) => Promise<ISearchResultV3>;
  fetchImage: (id: number) => Promise<IImageMetaInformationV3>;
  onError?: (err: any) => void;
  locale: string;
  noResults?: ReactNode;
  checkboxAction?: (image: IImageMetaInformationV3) => void;
  showCheckbox?: boolean;
  translations: ImageSearchTranslations;
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

  const onImageClick = (image: IImageMetaInformationV3) => {
    if (!selectedImage || image.id !== selectedImage.id) {
      fetchImage(Number.parseInt(image.id))
        .then((result) => {
          setSelectedImage(result);
        })
        .catch((err) => {
          onError?.(err);
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
        onError?.(err);
        setSearching(false);
      });
  };

  const handleQueryChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setQueryObject((prevState) => ({
      ...prevState,
      query: value,
    }));
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement | HTMLButtonElement>) => {
    if (e.key === "Enter") {
      searchImages(queryObject);
    }
  };

  useEffect(() => {
    searchImages(queryObject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ImageSearchWrapper>
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
          aria-label={translations.searchButtonTitle}
          title={translations.searchButtonTitle}
          onKeyDown={onEnter}
          onClick={() => searchImages(queryObject)}
        >
          <SearchLine />
        </IconButton>
      </InputWrapper>
      {!!noResultsFound && noResults}
      <StyledSearchResults>
        {searchResult?.results.map((image) => (
          <ImageSearchResult
            key={image.id}
            image={image}
            onImageClick={onImageClick}
            selectedImage={selectedImage}
            onSelectImage={onSelectImage}
            showCheckbox={!!showCheckbox}
            translations={translations.imagePreview}
            locale={locale}
          />
        ))}
      </StyledSearchResults>
      <StyledPaginationRoot
        page={page ?? 1}
        onPageChange={(details) => searchImages({ ...queryObject, page: details.page })}
        translations={translations.paginationTranslations}
        count={searchResult?.totalCount ?? 0}
        pageSize={searchResult?.pageSize}
        hidden={noResultsFound}
      >
        <PaginationPrevTrigger asChild>
          <StyledButton
            variant="tertiary"
            aria-label={translations.paginationTranslations?.prevTriggerLabel}
            title={translations.paginationTranslations?.prevTriggerLabel}
          >
            <ArrowLeftShortLine />
            <span>{translations.paginationTranslations?.prevTriggerLabel}</span>
          </StyledButton>
        </PaginationPrevTrigger>
        <PaginationContext>
          {(pagination) =>
            pagination.pages.map((page, index, full) => {
              // Hide last page to not trigger RESULT_WINDOW_TOO_LARGE error
              if (index === full.length - 1) return null;
              return page.type === "page" ? (
                <StyledPaginationItem key={index} {...page} asChild>
                  <Button variant={page.value === pagination.page ? "primary" : "tertiary"}>{page.value}</Button>
                </StyledPaginationItem>
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
          <StyledButton
            variant="tertiary"
            aria-label={translations.paginationTranslations?.nextTriggerLabel}
            title={translations.paginationTranslations?.nextTriggerLabel}
          >
            <span>{translations.paginationTranslations?.nextTriggerLabel}</span>
            <ArrowRightShortLine />
          </StyledButton>
        </PaginationNextTrigger>
      </StyledPaginationRoot>
    </ImageSearchWrapper>
  );
};

export default ImageSearch;
