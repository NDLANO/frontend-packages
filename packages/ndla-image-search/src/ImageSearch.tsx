/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useState, ChangeEvent, useEffect } from "react";
import { IImageMetaInformationV3, ISearchParams, ISearchResultV3 } from "@ndla/types-backend/image-api";
import { BaseImageSearch, ImageSearchTranslations } from "./BaseImageSearch";

interface Props {
  onImageSelect: (image: IImageMetaInformationV3) => void;
  searchImages: (query: string | undefined, page: number | undefined) => Promise<ISearchResultV3>;
  fetchImage: (id: number) => Promise<IImageMetaInformationV3>;
  onError: (err: any) => void;
  locale: string;
  noResults?: ReactNode;
  checkboxAction?: (image: IImageMetaInformationV3) => void;
  showCheckbox?: boolean;
  translations: ImageSearchTranslations;
}

const ImageSearch = ({
  onImageSelect,
  searchImages: search,
  onError,
  locale,
  checkboxAction,
  showCheckbox,
  translations,
}: Props) => {
  const [queryObject, setQueryObject] = useState<ISearchParams>({
    query: undefined,
    page: 1,
    pageSize: 16,
  });
  const [focusedImage, setFocusedImage] = useState<IImageMetaInformationV3 | undefined>();
  const [searching, setSearching] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<ISearchResultV3 | undefined>();

  const noResultsFound = !searching && searchResult?.results.length === 0;

  const onSelectImage = (image: IImageMetaInformationV3 | undefined, saveAsMetaImage?: boolean) => {
    setFocusedImage(undefined);
    if (!image) return;
    onImageSelect(image);
    if (saveAsMetaImage) {
      checkboxAction?.(image);
    }
  };

  const searchImages = (queryObject: Partial<ISearchParams>) => {
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

  useEffect(() => {
    searchImages(queryObject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseImageSearch
      onSelectImage={onSelectImage}
      setFocusedImage={setFocusedImage}
      searchImages={searchImages}
      focusedImage={focusedImage}
      images={searchResult?.results ?? []}
      noResultsFound={noResultsFound}
      translations={translations}
      showCheckbox={showCheckbox}
      locale={locale}
      handleQueryChange={handleQueryChange}
      totalCount={searchResult?.totalCount ?? 0}
      queryObject={queryObject}
    />
  );
};

export default ImageSearch;
