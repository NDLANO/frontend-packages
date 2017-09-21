/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ndla-ui';
import BEMHelper from 'react-bem-helper';
import PreviewImage from './PreviewImage';
import { getSrcSets } from './util/imageUtil';

const classes = new BEMHelper({
  name: 'image-search',
  prefix: 'c-',
});

export default function ImageSearchResult({
  image,
  onImageClick,
  selectedImage,
  onSelectImage,
  useImageTitle,
}) {
  const active = selectedImage && selectedImage.id === image.id ? 'active' : '';

  return (
    <div key={image.id} {...classes('list-item', active)}>
      <div {...classes('list-item-inner')}>
        <Button stripped onClick={() => onImageClick(image)}>
          <img
            role="presentation"
            alt="presentation"
            srcSet={getSrcSets(encodeURI(image.previewUrl))}
          />
        </Button>
      </div>
      {selectedImage && selectedImage.id === image.id
        ? <PreviewImage
            image={selectedImage}
            onSelectImage={onSelectImage}
            useImageTitle={useImageTitle}
          />
        : ''}
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
