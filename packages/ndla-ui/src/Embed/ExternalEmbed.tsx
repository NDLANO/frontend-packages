/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { OembedMetaData } from '@ndla/types-embed';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Figure } from '../Figure';
import { ResourceBox } from '../ResourceBox';
import { errorSvgSrc } from './ImageEmbed';

interface Props {
  embed: OembedMetaData;
  isConcept?: boolean;
}

const StyledFigure = styled.figure`
  iframe {
    height: auto;
  }
`;

const ExternalEmbed = ({ embed, isConcept }: Props) => {
  const { t } = useTranslation();
  const figRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const iframe = figRef.current?.querySelector(`iframe`);
    if (iframe) {
      const [width, height] = [parseInt(iframe.width), parseInt(iframe.height)];
      iframe.style.aspectRatio = `${width ? width : 16}/${height ? height : 9}`;
    }
  }, []);
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

  return (
    <StyledFigure
      ref={figRef}
      className={classes}
      //@ts-ignore
      // eslint-disable-next-line react/no-unknown-property
      resizeiframe="true"
      dangerouslySetInnerHTML={{ __html: data.oembed.html ?? '' }}
    />
  );
};

export default ExternalEmbed;
