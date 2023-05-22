/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import sortBy from 'lodash/sortBy';
import isNumber from 'lodash/isNumber';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import { COPYRIGHTED } from '@ndla/licenses';
import { useEffect, useRef, useState } from 'react';
import { BrightcoveEmbedData, BrightcoveMetaData, BrightcoveVideoSource } from '@ndla/types-embed';
import { useTranslation } from 'react-i18next';
import { ButtonV2 } from '@ndla/button';
import { Figure } from '../Figure';
import { EmbedByline } from '../LicenseByline';
import EmbedErrorPlaceholder from './EmbedErrorPlaceholder';
import { HeartButtonType } from './types';

interface Props {
  embed: BrightcoveMetaData;
  isConcept?: boolean;
  heartButton?: HeartButtonType;
}

const LinkedVideoButton = styled(ButtonV2)`
  margin-left: ${spacing.small};
`;

const BrightcoveIframe = styled.iframe`
  height: auto;
`;

export const makeIframeString = (url: string, width: string | number, height: string | number, title: string = '') => {
  const strippedWidth = isNumber(width) ? width : width.replace(/\s*px/, '');
  const strippedHeight = isNumber(height) ? height : height.replace(/\s*px/, '');
  const urlOrTitle = title || url;
  return `<iframe title="${urlOrTitle}" aria-label="${urlOrTitle}" src="${url}" width="${strippedWidth}" height="${strippedHeight}" allowfullscreen scrolling="no" frameborder="0" loading="lazy"></iframe>`;
};

export const isNumeric = (value: any) => !Number.isNaN(value - parseFloat(value));

const getIframeProps = (data: BrightcoveEmbedData, sources: BrightcoveVideoSource[]) => {
  const { account, videoid, player = 'default' } = data;

  const source = sortBy(
    sources.filter((s) => s.width && s.height),
    (s) => s.height,
  )[0];

  return {
    src: `https://players.brightcove.net/${account}/${player}_default/index.html?videoId=${videoid}`,
    height: source?.height ?? '480',
    width: source?.width ?? '640',
  };
};
const BrightcoveEmbed = ({ embed, isConcept, heartButton: HeartButton }: Props) => {
  const [showOriginalVideo, setShowOriginalVideo] = useState(true);
  const { t } = useTranslation();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { embedData } = embed;
  const fallbackTitle = `${t('embed.type.video')}: ${embedData.videoid}`;

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const [width, height] = [parseInt(iframe.width), parseInt(iframe.height)];
      iframe.style.aspectRatio = `${width}/${height}`;
      iframe.width = '';
      iframe.height = '';
    }
  }, []);
  if (embed.status === 'error') {
    return (
      <EmbedErrorPlaceholder type="video">
        <BrightcoveIframe
          ref={iframeRef}
          title={embedData.alt ?? fallbackTitle}
          aria-label={embedData.alt ?? fallbackTitle}
          frameBorder="0"
          {...getIframeProps(embedData, [])}
          allowFullScreen
        />
      </EmbedErrorPlaceholder>
    );
  }
  const { data, seq } = embed;

  const linkedVideoId = isNumeric(data.link?.text) ? data.link?.text : undefined;

  const figureId = `figure-${seq}-${data.id}`;
  const originalVideoProps = getIframeProps(embedData, data.sources);
  const alternativeVideoProps = linkedVideoId
    ? getIframeProps({ ...embedData, videoid: linkedVideoId }, data.sources)
    : undefined;

  return (
    <Figure id={figureId} type={isConcept ? 'full-column' : 'full'} resizeIframe>
      <div className="brightcove-video">
        <BrightcoveIframe
          ref={iframeRef}
          className="original"
          title={embedData.alt ?? data.name ?? fallbackTitle}
          aria-label={embedData.alt ?? data.name ?? fallbackTitle}
          frameBorder="0"
          {...(alternativeVideoProps && !showOriginalVideo ? alternativeVideoProps : originalVideoProps)}
          allowFullScreen
        />
      </div>
      <EmbedByline
        type="video"
        copyright={data.copyright!}
        description={embedData.caption ?? data.description ?? ''}
        bottomRounded
      >
        {!!linkedVideoId && (
          <LinkedVideoButton
            variant="outline"
            shape="pill"
            size="small"
            onClick={() => setShowOriginalVideo((p) => !p)}
          >
            {t(`figure.button.${!showOriginalVideo ? 'original' : 'alternative'}`)}
          </LinkedVideoButton>
        )}
        {HeartButton && data.copyright?.license.license.toLowerCase() !== COPYRIGHTED && <HeartButton embed={embed} />}
      </EmbedByline>
    </Figure>
  );
};

export default BrightcoveEmbed;
