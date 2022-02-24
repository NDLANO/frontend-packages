/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { IImageMetaSummary, IImageMetaInformationV2 } from '@ndla/types-image-api';
import Button from '@ndla/button';
import PreviewImage from './PreviewImage';
import { getPreviewSrcSets } from './util/imageUtil';

interface Props {
  image: IImageMetaSummary;
  onImageClick: (image: IImageMetaSummary) => void;
  selectedImage?: IImageMetaInformationV2;
  onSelectImage: (image: IImageMetaInformationV2, saveAsMetaImage: boolean) => void;
  useImageTitle: string;
  showCheckbox: boolean;
  checkboxLabel?: string;
  useAsMetaImageLabel?: string;
}

export default function ImageSearchResult({
  image,
  onImageClick,
  selectedImage,
  onSelectImage,
  useImageTitle,
  showCheckbox,
  checkboxLabel,
}: Props) {
  const active = selectedImage && selectedImage.id === image.id ? 'active' : '';

  return (
    <div key={image.id} className={`list-item ${active}`}>
      <div className="list-item-inner">
        <Button data-cy="select-image-from-list" stripped onClick={() => onImageClick(image)}>
          <img
            role="presentation"
            alt="presentation"
            srcSet={getPreviewSrcSets(image.previewUrl)}
            src={image.previewUrl}
          />
          <span className="list-item-title">{image.title.title}</span>
        </Button>
      </div>
      {selectedImage && selectedImage.id === image.id ? (
        <PreviewImage
          image={selectedImage}
          onSelectImage={onSelectImage}
          useImageTitle={useImageTitle}
          checkboxLabel={checkboxLabel}
          showCheckbox={showCheckbox}
          aria-hidden={true}
        />
      ) : (
        ''
      )}
    </div>
  );
}
