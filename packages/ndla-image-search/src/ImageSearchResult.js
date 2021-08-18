/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@ndla/button';
import PreviewImage from './PreviewImage';
import { getPreviewSrcSets } from './util/imageUtil';

export default function ImageSearchResult({ image, onImageClick, selectedImage, onSelectImage, useImageTitle }) {
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
        <PreviewImage image={selectedImage} onSelectImage={onSelectImage} useImageTitle={useImageTitle} />
      ) : (
        ''
      )}
    </div>
  );
}

ImageSearchResult.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
  }),
  onImageClick: PropTypes.func.isRequired,
  selectedImage: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  onSelectImage: PropTypes.func.isRequired,
  useImageTitle: PropTypes.string.isRequired,
};
