/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Button } from 'ndla-ui';
import { uuid, convertFieldWithFallback } from 'ndla-util';
import { getSrcSets } from './util/imageUtil';

const classes = new BEMHelper({
  name: 'image-preview',
  prefix: 'c-',
});

export default function PreviewImage({ image, onSelectImage, useImageTitle }) {
  const tags = convertFieldWithFallback(image, 'tags', []);
  return (
    <div {...classes()}>
      <div {...classes('image')}>
        <img
          alt="presentation"
          role="presentation"
          srcSet={getSrcSets(encodeURI(image.imageUrl))}
        />
      </div>
      <div {...classes('information')}>
        <h2 {...classes('title')}>
          {convertFieldWithFallback(image, 'title', '')}
        </h2>
        <div {...classes('copyright-author')}>
          <span {...classes('text', 'right')}>
            {image.copyright.authors.map(author => author.name).join(', ')}
          </span>
        </div>
        <div {...classes('license')}>
          <span {...classes('text', 'right')}>
            {image.copyright.license.description}
          </span>
        </div>
        <div {...classes('tags')}>
          {tags.map(tag =>
            <span key={uuid()} className="tag_item">{`#${tag}`}</span>,
          )}
        </div>
        <Button
          className="button button--primary button--block"
          onClick={() => onSelectImage(image)}>
          {useImageTitle}
        </Button>
      </div>
      <div className="clear" />
    </div>
  );
}

PreviewImage.propTypes = {
  image: PropTypes.object.isRequired,
  onSelectImage: PropTypes.func.isRequired,
  useImageTitle: PropTypes.string.isRequired,
};
