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
import { uuid } from 'ndla-util';
import { scaleImage } from './util/imageScaler';
import { tagsI18N } from './util/i18nFieldFinder';

export default function PreviewImage({ image, onSelectImage, locale }) {
  const tags = tagsI18N(image, locale);
  return (
    <div className="image-preview">
      <div className="image-preview_image">
        <img
          alt="presentation"
          role="presentation"
          src={scaleImage(image.imageUrl)}
        />
      </div>
      <div className="image-preview_information">
        <h2 className="image-preview_title">{image.titles[0].title}</h2>
        <div className="image-prieview_copyright-author">
          <b className="image-preview_text--left">
            {/* {polyglot.t('learningPath.image.authors')}*/}
          </b>
          <span className="image-preview_text--right">
            {image.copyright.authors.map(author => author.name).join(', ')}
          </span>
        </div>
        <div className="image-prieview_license">
          <b className="image-preview_text--left">
            {/* {polyglot.t('learningPath.image.copyright')}*/}
          </b>
          <span className="image-preview_text--right">
            {image.copyright.license.description}
          </span>
        </div>
        <div className="image-preview_tags">
          {/* <b>{polyglot.t('learningPath.image.tags')}</b>*/}
          {tags.map(tag =>
            <span key={uuid()} className="tag_item">{`#${tag}`}</span>,
          )}
        </div>
        <Button
          className="button button--primary button--block"
          onClick={() => onSelectImage(image)}
        >
          Bruk bildet
        </Button>
      </div>
      <div className="clear" />
    </div>
  );
}

PreviewImage.propTypes = {
  image: PropTypes.object.isRequired,
  onSelectImage: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};
