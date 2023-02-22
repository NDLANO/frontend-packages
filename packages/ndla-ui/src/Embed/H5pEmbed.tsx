/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { H5pMetaData } from '@ndla/types-embed';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { errorSvgSrc } from './ImageEmbed';

interface Props {
  embed: H5pMetaData;
  isConcept?: boolean;
}

const StyledFigure = styled.figure`
  iframe {
    height: auto;
  }
`;

const H5pEmbed = ({ embed, isConcept }: Props) => {
  const { t } = useTranslation();

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const figRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const iframe =
      embed.status === 'success' && embed.data.oembed ? figRef.current?.querySelector('iframe') : iframeRef.current;
    if (iframe) {
      const [width, height] = [parseInt(iframe.width), parseInt(iframe.height)];
      iframe.style.aspectRatio = `${width ? width : 16}/${height ? height : 9}`;
      iframe.width = '';
      iframe.height = '';
    }
  }, [embed]);

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
    return (
      <StyledFigure
        className={classes}
        ref={figRef}
        //@ts-ignore
        // eslint-disable-next-line react/no-unknown-property
        resizeiframe="true"
        dangerouslySetInnerHTML={{ __html: embed.data.oembed.html ?? '' }}
      />
    );
  }

  return (
    //@ts-ignore
    // eslint-disable-next-line react/no-unknown-property
    <StyledFigure className={classes} resizeiframe="true">
      <iframe title={embed.embedData.url} ref={iframeRef} aria-label={embed.embedData.url} src={embed.embedData.url} />
    </StyledFigure>
  );
};

export default H5pEmbed;
