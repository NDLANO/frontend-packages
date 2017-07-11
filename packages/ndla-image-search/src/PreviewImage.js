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
import { uuid, tagsI18N } from 'ndla-util';
import { getSrcSets } from './util/imageUtil';


const classes = new BEMHelper({
  name: 'image-preview',
  prefix: 'c-',
});

const preferdLocales = ['nb', 'nn', 'en'];

export default function PreviewImage({ image, onSelectImage, locale }) {
  const tags = tagsI18N(image, locale, false, preferdLocales);
  return (
    <div {...classes()}>
      <div {...classes('image')}>
        <img
          alt="presentation"
          role="presentation"
          srcSet={getSrcSets(image.imageUrl)}
        />
      </div>
      <div {...classes('information')}>
        <h2 {...classes('title')}>{image.titles[0].title}</h2>
        <div {...classes('copyright-author')}>
          <b {...classes('text', 'left')}>
            {/* {polyglot.t('learningPath.image.authors')}*/}
          </b>
          <span {...classes('text', 'right')}>
            {image.copyright.authors.map(author => author.name).join(', ')}
          </span>
        </div>
        <div {...classes('license')}>
          <b {...classes('text', 'left')}>
            {/* {polyglot.t('learningPath.image.copyright')}*/}
          </b>
          <span {...classes('text', 'right')}>
            {image.copyright.license.description}
          </span>
        </div>
        <div {...classes('tags')}>
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
