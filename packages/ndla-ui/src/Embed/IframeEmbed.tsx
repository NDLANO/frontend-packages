/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import isNumber from 'lodash/isNumber';
import { IframeMetaData } from '@ndla/types-embed';
import { useTranslation } from 'react-i18next';
import { Figure } from '../Figure';
import { ResourceBox } from '../ResourceBox';

interface Props {
  embed: IframeMetaData;
  isConcept?: boolean;
}

const ExternalEmbed = ({ embed, isConcept }: Props) => {
  const { t } = useTranslation();

  const { embedData } = embed;

  if (embedData.type === 'fullscreen') {
    const iframeImage = embed.status === 'success' ? embed.data.iframeImage : undefined;
    const image = { src: iframeImage?.imageUrl ?? '', alt: iframeImage?.alttext?.alttext ?? '' };
    return (
      <Figure type="full">
        <ResourceBox
          image={image}
          title={embedData.title ?? ''}
          url={embedData.url}
          caption={embedData.caption ?? ''}
          buttonText={t('license.other.itemImage.ariaLabel')}
        />
      </Figure>
    );
  }

  const resize = !embedData.url.includes('trinket.io');

  const fullColumnClass = isConcept ? 'c-figure--full-column' : '';
  const resizeClass = resize ? 'c-figure--resize' : '';
  const classes = `c-figure ${fullColumnClass} ${resizeClass}`;

  const { width, height, title, url } = embedData;

  const strippedWidth = isNumber(width) ? width : width?.replace(/\s*px/, '');
  const strippedHeight = isNumber(height) ? height : height?.replace(/\s*px/, '');
  const urlOrTitle = title || url;

  return (
    //@ts-ignore
    // eslint-disable-next-line react/no-unknown-property
    <figure className={classes} resizeiframe={`${resize}`}>
      <iframe
        title={urlOrTitle}
        aria-label={urlOrTitle}
        src={url}
        width={strippedWidth}
        height={strippedHeight}
        //@ts-ignore
        // eslint-disable-next-line react/no-unknown-property
        allowfullscreen
        scrolling="no"
        //@ts-ignore
        // eslint-disable-next-line react/no-unknown-property
        frameborder="0"
        loading="lazy"
      />
    </figure>
  );
};

export default ExternalEmbed;
