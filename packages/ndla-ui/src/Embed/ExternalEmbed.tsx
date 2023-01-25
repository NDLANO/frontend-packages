/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { OembedMetaData } from '@ndla/types-embed';
import { useTranslation } from 'react-i18next';
import { Figure } from '../Figure';
import { ResourceBox } from '../ResourceBox';
import { errorSvgSrc } from './ImageEmbed';

interface Props {
  embed: OembedMetaData;
  isConcept?: boolean;
}

const ExternalEmbed = ({ embed, isConcept }: Props) => {
  const { t } = useTranslation();
  if (embed.status === 'error') {
    return (
      <figure className={isConcept ? '' : 'c-figure'}>
        <img alt={t('external.error')} src={errorSvgSrc} />
        <figcaption>{t('external.error')}</figcaption>
      </figure>
    );
  }

  const { embedData, data } = embed;

  if (embedData.type === 'fullscreen') {
    const image = { src: data.iframeImage?.imageUrl ?? '', alt: data.iframeImage?.alttext?.alttext ?? '' };
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

  const fullColumnClass = isConcept ? 'c-figure--full-column' : '';
  const classes = `c-figure ${fullColumnClass} c-figure--resize`;

  //@ts-ignore
  // eslint-disable-next-line react/no-unknown-property
  return <figure className={classes} resizeiframe dangerouslySetInnerHTML={{ __html: data.oembed.html ?? '' }} />;
};

export default ExternalEmbed;
