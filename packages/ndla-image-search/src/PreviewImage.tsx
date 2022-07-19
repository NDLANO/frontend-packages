/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@ndla/button';
import { uuid } from '@ndla/util';
import { CheckboxItem } from '@ndla/forms';
import { IImageMetaInformationV2 } from '@ndla/types-image-api';

import { getSrcSets } from './util/imageUtil';
import ImageMeta from './ImageMeta';

interface Props {
  image: IImageMetaInformationV2;
  onSelectImage: (image: IImageMetaInformationV2, saveAsMetaImage: boolean) => void;
  useImageTitle: string;
  showCheckbox: boolean;
  checkboxLabel?: string;
}
const PreviewImage = ({ image, onSelectImage, useImageTitle, showCheckbox, checkboxLabel }: Props) => {
  const { t } = useTranslation();
  const [saveAsMetaImage, setSaveAsMetaImage] = useState(false);

  const tags = image.tags.tags ?? [];
  const title = image.title.title ?? '';
  const altText = image.alttext.alttext ?? '';
  const caption = image.caption.caption ?? '';
  return (
    <div className="image-preview">
      <div className="image">
        <img
          role="presentation"
          alt="presentation"
          srcSet={getSrcSets(image.imageUrl)}
          sizes="(min-width: 800px) 360px, (min-width: 400px) 300px, 100vw"
          src={image.imageUrl}
          aria-label={title}
        />
      </div>
      <div className="information">
        <h2 className="title">{title}</h2>
        {image.copyright.creators && image.copyright.creators.length > 0 ? (
          <div className="copyright-author">
            <span className="text">{image.copyright.creators.map((creator) => creator.name).join(', ')}</span>
          </div>
        ) : null}
        <div className="info">
          <span className="text">{image.copyright.license.description}</span>
        </div>
        <div className="info">
          <span className="text">{`${t('image.caption')}: ${caption}`}</span>
        </div>
        <div className="info">
          <span className="text">{`${t('image.altText')}: ${altText}`}</span>
        </div>
        <div className="info">
          <span className="text">{`${t('image.modelReleased.label')}: ${t(
            'image.modelReleased.' + image.modelRelease,
          )}`}</span>
        </div>
        <ImageMeta contentType={image.contentType} fileSize={image.size} imageDimensions={image.imageDimensions} />
        <div className="tags">
          {tags.map((tag) => (
            <span key={uuid()} className="tag_item">{`#${tag}`}</span>
          ))}
        </div>
        <Button data-cy="use-image" onClick={() => onSelectImage(image, saveAsMetaImage)}>
          {useImageTitle}
        </Button>
        {showCheckbox && (
          <div>
            <CheckboxItem
              label={checkboxLabel}
              checked={saveAsMetaImage}
              onChange={() => setSaveAsMetaImage((prev) => !prev)}
            />
          </div>
        )}
      </div>
      <div className="clear" />
    </div>
  );
};

export default PreviewImage;
