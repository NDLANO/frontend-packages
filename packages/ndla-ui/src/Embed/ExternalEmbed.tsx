/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { InformationOutline } from '@ndla/icons/common';
import { OembedMetaData } from '@ndla/types-embed';
import EmbedErrorPlaceholder from './EmbedErrorPlaceholder';
import { Figure } from '../Figure';
import { MessageBox } from '../Messages';
import { ResourceBox } from '../ResourceBox';

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
      iframe.width = '';
      iframe.height = '';
    }
  }, []);
  if (embed.status === 'error') {
    return <EmbedErrorPlaceholder type="external" />;
  }

  const { embedData, data } = embed;

  if (embedData.type === 'fullscreen') {
    const iframeImage = embed.status === 'success' ? embed.data.iframeImage : undefined;
    const image = { src: iframeImage?.image.imageUrl ?? '', alt: '' };
    return (
      <Figure type="full">
        {embed.embedData.disclaimer && (
          <MessageBox type="info">
            <InformationOutline />
            {embed.embedData.disclaimer}
          </MessageBox>
        )}
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
    <>
      {embed.embedData.disclaimer && (
        <MessageBox type="info">
          <InformationOutline />
          {embed.embedData.disclaimer}
        </MessageBox>
      )}
      <StyledFigure
        ref={figRef}
        className={classes}
        //@ts-ignore
        // eslint-disable-next-line react/no-unknown-property
        resizeiframe="true"
        dangerouslySetInnerHTML={{ __html: data.oembed.html ?? '' }}
      />
    </>
  );
};

export default ExternalEmbed;
