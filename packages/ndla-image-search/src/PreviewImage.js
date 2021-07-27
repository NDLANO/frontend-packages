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
import { uuid } from '@ndla/util';
import { getSrcSets } from './util/imageUtil';

const convertWithFallBack = (fieldName, value, fallback) =>
  value[fieldName] && value[fieldName][fieldName] ? value[fieldName][fieldName] : fallback;

const PreviewImage = ({ image, onSelectImage, useImageTitle }) => {
  const tags = convertWithFallBack('tags', image.tags, []);
  return (
    <div className="image-preview">
      <div className="image">
        <img
          role="presentation"
          alt="presentation"
          srcSet={getSrcSets(image.imageUrl)}
          sizes="(min-width: 800px) 360px, (min-width: 400px) 300px, 100vw"
          src={image.imageUrl}
        />
      </div>
      <div className="information">
        <h2 className="title">{convertWithFallBack('title', image.title, '')}</h2>
        {image.copyright.creators && image.copyright.creators.length > 0 ? (
          <div className="copyright-author">
            <span className="text right">{image.copyright.creators.map((creator) => creator.name).join(', ')}</span>
          </div>
        ) : null}
        <div className="license">
          <span className="text right">{image.copyright.license.description}</span>
        </div>
        <div className="tags">
          {tags.map((tag) => (
            <span key={uuid()} className="tag_item">{`#${tag}`}</span>
          ))}
        </div>
        <Button data-cy="use-image" onClick={() => onSelectImage(image)}>
          {useImageTitle}
        </Button>
      </div>
      <div className="clear" />
    </div>
  );
};

PreviewImage.propTypes = {
  image: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.shape({
      title: PropTypes.string,
      language: PropTypes.string,
    }),
    tags: PropTypes.shape({
      tags: PropTypes.arrayOf(PropTypes.string),
      language: PropTypes.string,
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

export default PreviewImage;
