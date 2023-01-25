/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { H5pMetaData } from '@ndla/types-embed';
import { useTranslation } from 'react-i18next';
import { errorSvgSrc } from './ImageEmbed';

interface Props {
  embed: H5pMetaData;
  isConcept?: boolean;
}

const H5pEmbed = ({ embed, isConcept }: Props) => {
  const { t } = useTranslation();
  if (embed.status === 'error') {
    return (
      <figure className={isConcept ? '' : 'c-figure'}>
        <img alt={t('h5p.error')} src={errorSvgSrc} />
        <figcaption>{t('h5p.error')}</figcaption>
      </figure>
    );
  }
  const fullColumnClass = isConcept ? 'c-figure--full-column' : '';
  const classes = `c-figure ${fullColumnClass} c-figure--resize`;

  if (embed.data.oembed) {
    const data = embed.data.oembed.type === 'preview' ? embed.data.oembed.html : embed.data.oembed.html;
    //@ts-ignore
    // eslint-disable-next-line react/no-unknown-property
    return <figure className={classes} resizeiframe dangerouslySetInnerHTML={{ __html: data ?? '' }} />;
  }

  return (
    //@ts-ignore
    // eslint-disable-next-line react/no-unknown-property
    <figure className={classes} resizeiframe>
      <iframe title={embed.embedData.url} aria-label={embed.embedData.url} src={embed.embedData.url} />
    </figure>
  );
};

export default H5pEmbed;
