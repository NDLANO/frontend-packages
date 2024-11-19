/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState, ChangeEvent, useEffect, KeyboardEvent } from "react";
import { SearchLine, ArrowLeftShortLine, ArrowRightShortLine } from "@ndla/icons/common";
import {
  IconButton,
  Button,
  PaginationRoot,
  PaginationItem,
  PaginationPrevTrigger,
  PaginationContext,
  PaginationEllipsis,
  PaginationNextTrigger,
  Input,
  Text,
  PaginationRootProps,
} from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { IImageMetaInformationV3, ISearchParams } from "@ndla/types-backend/image-api";
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
  onSelectImage: (image: IImageMetaInformationV3, saveAsMetaImage?: boolean) => void;
  setFocusedImage: (image: IImageMetaInformationV3 | undefined) => void;
  searchImages: (obj: Partial<ISearchParams>) => void;
  focusedImage?: IImageMetaInformationV3;
  images: IImageMetaInformationV3[];
  noResultsFound: boolean;
  translations: ImageSearchTranslations;
  showCheckbox?: boolean;
  locale: string;
  handleQueryChange: (val: ChangeEvent<HTMLInputElement>) => void;
  totalCount: number;
  queryObject: ISearchParams;
}

export const BaseImageSearch = ({
  onSelectImage,
  setFocusedImage,
  searchImages,
  handleQueryChange,
  images,
  noResultsFound,
  translations,
  showCheckbox,
  locale,
  totalCount,
  queryObject,
  focusedImage,
}: Props) => {
  const onEnter = (e: KeyboardEvent<HTMLInputElement | HTMLButtonElement>) => {
    if (e.key === "Enter") {
      searchImages(queryObject);
    }
  };

  const { page, pageSize } = queryObject;

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
      <StyledSearchResults>
        {images?.map((image) => (
          <ImageSearchResult
            key={image.id}
            image={image}
            onImageClick={(image) => setFocusedImage(image!)}
            selectedImage={focusedImage}
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
        count={totalCount ?? 0}
        pageSize={pageSize}
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
