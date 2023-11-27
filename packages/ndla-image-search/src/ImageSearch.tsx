/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ChangeEvent, Component, ReactNode, KeyboardEvent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { fonts, colors, spacing, mq, breakpoints } from '@ndla/core';
import Pager from '@ndla/pager';
import { IImageMetaInformationV3, ISearchResultV3, ISearchParams } from '@ndla/types-backend/image-api';
import { InputContainer, InputV3 } from '@ndla/forms';
import { Search as SearchIcon } from '@ndla/icons/common';
import ImageSearchResult from './ImageSearchResult';

const ImageSearchWrapper = styled.div`
  .text {
    text-align: center;
  }
  .list-item {
    position: relative;
    float: left;
    height: 210px;
    width: 100%;
    ${mq.range({ from: breakpoints.tablet })} {
      width: 50%;
    }
    ${mq.range({ from: breakpoints.tabletWide })} {
      width: 33.3%;
    }
    ${mq.range({ from: breakpoints.desktop })} {
      width: 25%;
    }
    ${mq.range({ from: breakpoints.wide })} {
      width: 20%;
    }
    &.active {
      height: inherit;
    }
  }

  .list {
    display: flex;
    align-items: stretch;
    flex-flow: row wrap;
    position: relative;
    margin-left: -${spacing.small};
    margin-right: -${spacing.small};
    margin-top: ${spacing.normal};
  }

  .list-item-inner {
    padding: ${spacing.small};
    text-align: center;
    height: 210px;

    .list-item-title {
      margin: ${spacing.xsmall} 0;
      ${fonts.sizes('14px', 1.2)};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      max-height: ${spacing.large};
    }
  }

  .list-item-inner img {
    max-height: 135px;
    max-width: 100%;
    border: 2px solid white;
    transition: border-color 100ms ease;
  }

  .list-item-inner:hover {
    img {
      border: 2px solid ${colors.brand.primary};
    }
  }

  .list-item-inner > .list-item-inner img {
    border: 2px solid ${colors.brand.primary};
  }

  .list-item.active > .list-item-inner::after {
    animation: fadeInSearchPreview 300ms ease;
    top: 190px;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-bottom-color: ${colors.brand.lighter};
    border-width: ${spacing.normal};
    margin-left: -${spacing.normal};
  }

  .image-preview {
    animation: fadeInSearchPreview 300ms ease;
    position: relative;
    width: 100%;
    ${mq.range({ from: breakpoints.tablet, until: breakpoints.tabletWide })} {
      width: 200%;
    }
    ${mq.range({ from: breakpoints.tabletWide, until: breakpoints.desktop })} {
      width: 300%;
    }
    ${mq.range({ from: breakpoints.desktop, until: breakpoints.wide })} {
      width: 400%;
    }
    ${mq.range({ from: breakpoints.wide })} {
      width: 500%;
    }
    background-color: ${colors.brand.lighter};
    border-radius: 2px;
    margin: 20px 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    ${mq.range({ until: breakpoints.mobileWide })} {
      display: block;
    }

    .image {
      max-width: 50%;
      padding: ${spacing.small};
      ${mq.range({ until: breakpoints.mobileWide })} {
        width: 100%;
      }
    }

    .info {
      ${fonts.sizes('16px', 1.3)}
    }

    .image img {
      max-width: 100%;
      max-height: 300px;
    }

    .information {
      width: 50%;
      padding: calc(${spacing.normal} - ${spacing.xsmall}) ${spacing.normal} ${spacing.normal} ${spacing.small};
      word-break: initial;
      ${mq.range({ until: breakpoints.mobileWide })} {
        width: 100%;
        padding: 0 ${spacing.small} ${spacing.normal};
      }
    }

    .information > * {
      margin-top: ${spacing.small};
    }

    .title {
      padding-top: 0;
      margin: 0;
      line-height: 1.3;
    }
    .text--left {
      width: 20%;
      display: inline-block;
    }

    .text--right {
      width: 80%;
      display: inline-block;
    }
    .tags > b {
      display: block;
      margin-bottom: ${spacing.normal};
    }

    .tags > .tag_item {
      font-weight: ${fonts.weight.semibold};
      margin-right: ${spacing.xsmall};
      margin-bottom: ${spacing.xsmall};
      display: inline-block;
      ${fonts.sizes('16px', 1.3)}
    }

    .tags > .tag_item:hover {
      text-decoration: none;
    }

    .clear {
      clear: both;
    }

    width: 100%;
  }
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.tabletWide })} {
    .list-item .image-preview {
      width: 200%;
    }
    .list-item:nth-of-type(2n) .image-preview {
      margin-left: -100%;
    }
  }
  ${mq.range({ from: breakpoints.tabletWide, until: breakpoints.desktop })} {
    .list-item .image-preview {
      width: 300%;
    }
    .list-item:nth-of-type(3n - 1) .image-preview {
      margin-left: -100%;
    }
    .list-item:nth-of-type(3n) .image-preview {
      margin-left: -200%;
    }
  }
  ${mq.range({ from: breakpoints.desktop, until: breakpoints.wide })} {
    .list-item .image-preview {
      width: 400%;
    }
    .list-item:nth-of-type(4n - 2) .image-preview {
      margin-left: -100%;
    }
    .list-item:nth-of-type(4n - 1) .image-preview {
      margin-left: -200%;
    }
    .list-item:nth-of-type(4n) .image-preview {
      margin-left: -300%;
    }
  }
  ${mq.range({ from: breakpoints.wide })} {
    .list-item .image-preview {
      width: 500%;
    }
    .list-item:nth-of-type(5n - 3) .image-preview {
      margin-left: -100%;
    }
    .list-item:nth-of-type(5n - 2) .image-preview {
      margin-left: -200%;
    }
    .list-item:nth-of-type(5n - 1) .image-preview {
      margin-left: -300%;
    }
    .list-item:nth-of-type(5n) .image-preview {
      margin-left: -400%;
    }
  }

  @keyframes fadeInSearchPreview {
    0% {
      display: none;
      opacity: 0;
    }
    1% {
      opacity: 0;
      display: flex;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const searchIconCss = css`
  border: 0;
  background: transparent;
  margin: 0;
  padding: 0;
`;

interface Props {
  onImageSelect: (image: IImageMetaInformationV3) => void;
  searchImages: (query: string | undefined, page: number | undefined) => Promise<ISearchResultV3>;
  fetchImage: (id: number) => Promise<IImageMetaInformationV3>;
  onError: (err: any) => void;
  searchPlaceholder: string;
  searchButtonTitle: string;
  locale: string;
  useImageTitle: string;
  noResults?: ReactNode;
  checkboxAction?: (image: IImageMetaInformationV3) => void;
  showCheckbox?: boolean;
  checkboxLabel?: string;
}

interface State {
  queryObject: ISearchParams;
  images: IImageMetaInformationV3[];
  selectedImage?: IImageMetaInformationV3;
  lastPage: number;
  searching: boolean;
  queryString?: string;
}
class ImageSearch extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      queryObject: {
        query: undefined,
        page: 1,
        pageSize: 16,
      },
      images: [],
      selectedImage: undefined,
      lastPage: 0,
      searching: false,
    };

    this.searchImages = this.searchImages.bind(this);
    this.onImageClick = this.onImageClick.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
  }

  componentDidMount() {
    this.searchImages(this.state.queryObject);
  }

  onImageClick(image: IImageMetaInformationV3) {
    const { onError, fetchImage } = this.props;
    const { selectedImage } = this.state;
    if (!selectedImage || image.id !== selectedImage.id) {
      fetchImage(parseInt(image.id))
        .then((result) => {
          this.setState({ selectedImage: result });
        })
        .catch((err) => {
          onError(err);
        });
    }
  }

  onSelectImage(image: IImageMetaInformationV3, saveAsMetaImage: boolean) {
    const { onImageSelect, checkboxAction } = this.props;
    this.setState({ selectedImage: undefined });
    onImageSelect(image);
    if (saveAsMetaImage) {
      checkboxAction && checkboxAction(image);
    }
  }

  searchImages(queryObject: ISearchParams) {
    const { searchImages, onError } = this.props;
    this.setState({ searching: true });
    searchImages(queryObject.query, queryObject.page)
      .then((result) => {
        this.setState({
          queryObject: {
            query: queryObject.query,
            pageSize: result.pageSize,
            page: queryObject.page,
          },
          images: result.results,
          lastPage: Math.ceil(result.totalCount / result.pageSize),
          searching: false,
        });
      })
      .catch((err) => {
        onError(err);
        this.setState({ searching: false });
      });
  }

  render() {
    const { searchPlaceholder, searchButtonTitle, useImageTitle, showCheckbox, checkboxLabel } = this.props;

    const { queryObject, images, selectedImage, lastPage, searching, queryString } = this.state;

    const { page } = queryObject;
    const noResultsFound = !searching && images.length === 0;

    return (
      <ImageSearchWrapper>
        <InputContainer>
          <InputV3
            placeholder={searchPlaceholder}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            value={queryString}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => this.setState({ queryString: evt.target.value })}
            onKeyPress={(evt: KeyboardEvent<HTMLInputElement>) => {
              if (evt.key === 'Enter') {
                evt.preventDefault();
                this.searchImages({ query: queryString, page: 1 });
              }
            }}
          />
          <button
            css={searchIconCss}
            aria-label={searchButtonTitle}
            type="button"
            onClick={() => {
              this.searchImages({ query: queryString, page: 1 });
            }}
          >
            <SearchIcon />
          </button>
        </InputContainer>
        {noResultsFound && this.props.noResults}
        <div className="list">
          {images.map((image) => (
            <ImageSearchResult
              key={image.id}
              image={image}
              onImageClick={this.onImageClick}
              selectedImage={selectedImage}
              onSelectImage={this.onSelectImage}
              useImageTitle={useImageTitle}
              showCheckbox={!!showCheckbox}
              checkboxLabel={checkboxLabel}
            />
          ))}
        </div>
        <Pager
          page={page ?? 1}
          pathname=""
          lastPage={lastPage}
          query={queryObject}
          onClick={this.searchImages}
          pageItemComponentClass="button"
        />
      </ImageSearchWrapper>
    );
  }
}

export default ImageSearch;
