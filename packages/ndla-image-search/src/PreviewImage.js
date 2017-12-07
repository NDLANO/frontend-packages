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
          role="presentation"
          alt="presentation"
          srcSet={getSrcSets(encodeURI(image.imageUrl))}
          sizes="(min-width: 800px) 360px, (min-width: 400px) 300px, 100vw"
          src={image.imageUrl}
        />
      </div>
      <div {...classes('information')}>
        <h2 {...classes('title')}>
          {convertFieldWithFallback(image, 'title', '')}
        </h2>
        <div {...classes('copyright-author')}>
          <span {...classes('text', 'right')}>
            {image.copyright.creators.map(creator => creator.name).join(', ')}
          </span>
        </div>
        <div {...classes('license')}>
          <span {...classes('text', 'right')}>
            {image.copyright.license.description}
          </span>
        </div>
        <div {...classes('tags')}>
          {tags.map(tag => (
            <span key={uuid()} className="tag_item">{`#${tag}`}</span>
          ))}
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
  image: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.shape({
      title: PropTypes.string,
    }),
    copyright: PropTypes.shape({
      license: PropTypes.shape({
        description: PropTypes.string.isRequired,
      }),
      creators: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),
      ),
    }).isRequired,
  }).isRequired,
  onSelectImage: PropTypes.func.isRequired,
  useImageTitle: PropTypes.string.isRequired,
};
