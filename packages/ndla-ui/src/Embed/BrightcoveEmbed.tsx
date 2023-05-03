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
import { getGroupedContributorDescriptionList, getLicenseByAbbreviation } from '@ndla/licenses';
import { useEffect, useRef, useState } from 'react';
import { ModalV2 } from '@ndla/modal';
import { SafeLinkButton } from '@ndla/safelink';
import { BrightcoveEmbedData, BrightcoveMetaData, BrightcoveVideoSource } from '@ndla/types-embed';
import { useTranslation } from 'react-i18next';
import { ButtonV2, CopyButton } from '@ndla/button';
import { Figure, FigureCaption } from '../Figure';
import { FigureLicenseDialogContent } from '../Figure/FigureLicenseDialogContent';
import { getFirstNonEmptyLicenseCredits } from './AudioEmbed';

interface Props {
  embed: BrightcoveMetaData;
  isConcept?: boolean;
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
const BrightcoveEmbed = ({ embed, isConcept }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOriginalVideo, setShowOriginalVideo] = useState(true);
  const { t, i18n } = useTranslation();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { embedData } = embed;

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
      <Figure type={isConcept ? 'full-column' : 'full'} resizeIframe>
        <BrightcoveIframe
          ref={iframeRef}
          title={`Video: ${embedData.videoid ?? ''}`}
          aria-label={`Video: ${embedData.videoid ?? ''}`}
          frameBorder="0"
          {...getIframeProps(embedData, [])}
          allowFullScreen
        />
        <figcaption>{t('video.error')}</figcaption>
      </Figure>
    );
  }
  const { data, seq } = embed;

  const linkedVideoId = isNumeric(data.link?.text) ? data.link?.text : undefined;

  const license = getLicenseByAbbreviation(data.copyright?.license.license ?? '', i18n.language);
  const contributors = data.copyright
    ? getGroupedContributorDescriptionList(data.copyright, i18n.language).map((item) => ({
        name: item.description,
        type: item.label,
      }))
    : [];

  const { rightsholders = [], creators = [], processors = [] } = data.copyright ?? {};

  const download = sortBy(
    data.sources.filter((src) => src.container === 'MP4' && src.src),
    (src) => src.size,
  )?.[0]?.src;

  const figureId = `figure-${seq}-${data.id}`;
  const originalVideoProps = getIframeProps(embedData, data.sources);
  const alternativeVideoProps = linkedVideoId
    ? getIframeProps({ ...embedData, videoid: linkedVideoId }, data.sources)
    : undefined;
  const captionAuthors = getFirstNonEmptyLicenseCredits({ rightsholders, creators, processors });

  return (
    <Figure id={figureId} type={isConcept ? 'full-column' : 'full'} resizeIframe>
      <div className="brightcove-video">
        <BrightcoveIframe
          ref={iframeRef}
          className="original"
          title={`Video: ${data.name}`}
          aria-label={`Video: ${data.name}`}
          frameBorder="0"
          {...(alternativeVideoProps && !showOriginalVideo ? alternativeVideoProps : originalVideoProps)}
          allowFullScreen
        />
      </div>
      <FigureCaption
        figureId={figureId}
        id={data.id}
        locale={i18n.language}
        caption={embedData.caption ?? ''}
        modalButton={
          <ButtonV2 variant="outline" shape="pill" size="small" onClick={() => setIsOpen(true)}>
            {t('video.reuse')}
          </ButtonV2>
        }
        linkedVideoButton={
          <LinkedVideoButton
            variant="outline"
            shape="pill"
            size="small"
            onClick={() => setShowOriginalVideo((p) => !p)}
          >
            {t(`figure.button.${!showOriginalVideo ? 'original' : 'alternative'}`)}
          </LinkedVideoButton>
        }
        licenseRights={license.rights}
        authors={captionAuthors}
        hasLinkedVideo={!!linkedVideoId}
      />
      <ModalV2 controlled isOpen={isOpen} onClose={() => setIsOpen(false)} labelledBy="license-dialog-rules-heading">
        {(close) => (
          <FigureLicenseDialogContent
            onClose={close}
            title={data.name}
            locale={i18n.language}
            license={license}
            authors={contributors}
            type="video"
          >
            <VideoLicenseButtons
              download={download}
              licenseCode={data.copyright?.license.license}
              src={originalVideoProps.src}
              width={originalVideoProps.width}
              height={originalVideoProps.height}
              name={data.name}
            />
          </FigureLicenseDialogContent>
        )}
      </ModalV2>
    </Figure>
  );
};

interface VideoLicenseButtonsProps {
  download: string;
  licenseCode?: string;
  src: string;
  width: string | number;
  height: string | number;
  name?: string;
}

const VideoLicenseButtons = ({ download, src, width, height, name, licenseCode }: VideoLicenseButtonsProps) => {
  const { t } = useTranslation();
  return (
    <>
      {licenseCode !== 'COPYRIGHTED' && (
        <SafeLinkButton key="download" to={download} variant="outline" download>
          {t('video.download')}
        </SafeLinkButton>
      )}
      <CopyButton
        variant="outline"
        copyNode={t('license.hasCopiedTitle')}
        onClick={() => navigator.clipboard.writeText(makeIframeString(src, width, height, name))}
      >
        {t('license.embed')}
      </CopyButton>
    </>
  );
};

export default BrightcoveEmbed;
