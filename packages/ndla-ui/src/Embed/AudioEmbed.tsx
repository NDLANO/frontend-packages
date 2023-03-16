/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { AudioMetaData } from '@ndla/types-embed';
import { ICopyright } from '@ndla/types-image-api';
import {
  figureApa7CopyString,
  getGroupedContributorDescriptionList,
  getLicenseByAbbreviation,
  getLicenseCredits,
} from '@ndla/licenses';
import { ModalV2 } from '@ndla/modal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
//@ts-ignore
import { Remarkable } from 'remarkable';
import { ButtonV2, CopyButton } from '@ndla/button';
import { SafeLinkButton } from '@ndla/safelink';
import AudioPlayer from '../AudioPlayer';
import { Figure, FigureCaption } from '../Figure';
import { FigureLicenseDialogContent } from '../Figure/FigureLicenseDialogContent';
import { Author } from './ImageEmbed';

interface Props {
  embed: AudioMetaData;
  articlePath?: string;
}
export const getFirstNonEmptyLicenseCredits = (authors: {
  creators: Author[];
  rightsholders: Author[];
  processors: Author[];
}) => Object.values(authors).find((i) => i.length > 0) ?? [];

const renderMarkdown = (text: string) => {
  const md = new Remarkable();
  const rendered = md.render(text);
  return <span dangerouslySetInnerHTML={{ __html: rendered }} />;
};

const AudioEmbed = ({ embed, articlePath }: Props) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  if (embed.status === 'error') {
    return (
      <Figure>
        <svg
          fill="#8A8888"
          height="50"
          viewBox="0 0 24 12"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ backgroundColor: '#EFF0F2' }}
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            transform="scale(0.3) translate(28, 8.5)"
            d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          />
        </svg>
        <figcaption>{t('audio.error.caption')}</figcaption>
      </Figure>
    );
  }

  const { data, embedData, seq } = embed;

  if (embedData.type === 'minimal') {
    return <AudioPlayer speech src={data.audioFile.url} title={data.title.title} />;
  }

  const subtitle = data.series ? { title: data.series.title.title, url: `/podkast/${data.series.id}` } : undefined;

  const textVersion = data.manuscript && renderMarkdown(data.manuscript.manuscript);
  const description = renderMarkdown(data.podcastMeta?.introduction ?? '');

  const coverPhoto = data.podcastMeta?.coverPhoto;

  const img = coverPhoto && { url: coverPhoto.url, alt: coverPhoto.altText };

  const authors = getLicenseCredits(data.copyright);

  const license = getLicenseByAbbreviation(data.copyright.license.license, i18n.language);

  const contributors = getGroupedContributorDescriptionList(data.copyright, i18n.language).map((item) => ({
    name: item.description,
    type: item.label,
  }));

  const figureId = `figure-${seq}-${data.id}`;

  const copyString =
    data.audioType === 'podcast'
      ? figureApa7CopyString(
          data.title.title,
          undefined,
          data.audioFile.url,
          articlePath,
          data.copyright,
          data.copyright.license.license,
          '',
          (id: string) => t(id),
          i18n.language,
        )
      : undefined;
  const captionAuthors = getFirstNonEmptyLicenseCredits(authors);
  return (
    <Figure id={figureId} type="full">
      <AudioPlayer
        description={description}
        img={img}
        src={data.audioFile.url}
        textVersion={textVersion}
        title={data.title.title}
        subtitle={subtitle}
      />
      <FigureCaption
        id=""
        figureId=""
        modalButton={
          <ButtonV2 variant="outline" shape="pill" size="small" onClick={() => setIsOpen(true)}>
            {t('audio.reuse')}
          </ButtonV2>
        }
        licenseRights={license.rights}
        authors={captionAuthors}
        locale={i18n.language}
      />
      <ModalV2 controlled isOpen={isOpen} onClose={() => setIsOpen(false)} labelledBy="license-dialog-rules-heading">
        {(close) => (
          <FigureLicenseDialogContent
            onClose={close}
            title={data.title.title}
            license={license}
            authors={contributors}
            origin={data.copyright.origin}
            locale={i18n.language}
            type="audio"
          >
            {data.copyright.license.license !== 'COPYRIGHT' && (
              <>
                {copyString && (
                  <CopyButton
                    variant="outline"
                    copyNode={t('license.hasCopiedTitle')}
                    onClick={() => navigator.clipboard.writeText(copyString)}
                  >
                    {t('license.copyTitle')}
                  </CopyButton>
                )}
                <SafeLinkButton download to={data.audioFile.url} variant="outline">
                  {t('audio.download')}
                </SafeLinkButton>
              </>
            )}
          </FigureLicenseDialogContent>
        )}
      </ModalV2>
      {data.imageMeta && (
        <ImageLicense
          title={data.imageMeta.title.title}
          imageUrl={data.imageMeta.imageUrl}
          copyright={data.imageMeta.copyright}
          articlePath={articlePath}
        />
      )}
    </Figure>
  );
};

interface ImageLicenseProps {
  title: string;
  imageUrl: string;
  copyright: ICopyright;
  articlePath?: string;
}

const ImageLicense = ({ articlePath, title, imageUrl, copyright }: ImageLicenseProps) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const copyString = figureApa7CopyString(
    title,
    undefined,
    imageUrl,
    articlePath,
    copyright,
    copyright.license.license,
    undefined,
    (id: string) => t(id),
    i18n.language,
  );
  const license = getLicenseByAbbreviation(copyright.license.license, i18n.language);
  const authors = getLicenseCredits(copyright);

  const contributors = getGroupedContributorDescriptionList(copyright, i18n.language).map((item) => ({
    name: item.description,
    type: item.label,
  }));

  const captionAuthors = getFirstNonEmptyLicenseCredits(authors);

  return (
    <>
      <FigureCaption
        figureId=""
        id=""
        licenseRights={license.rights}
        modalButton={
          <ButtonV2 variant="outline" shape="pill" size="small" onClick={() => setIsOpen(true)}>
            {t('image.reuse')}
          </ButtonV2>
        }
        authors={captionAuthors}
        locale={i18n.language}
      >
        <ModalV2 controlled isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {(close) => (
            <FigureLicenseDialogContent
              onClose={close}
              title={title}
              license={license}
              authors={contributors}
              origin={copyright.origin}
              locale={i18n.language}
              type="image"
            >
              {copyright.license.license !== 'COPYRIGHTED' && (
                <>
                  {copyString && (
                    <CopyButton
                      variant="outline"
                      copyNode={t('license.hasCopiedTitle')}
                      onClick={() => navigator.clipboard.writeText(copyString)}
                    >
                      {t('license.copyTitle')}
                    </CopyButton>
                  )}
                  <SafeLinkButton download to={imageUrl} variant="outline">
                    {t('image.download')}
                  </SafeLinkButton>
                </>
              )}
            </FigureLicenseDialogContent>
          )}
        </ModalV2>
      </FigureCaption>
    </>
  );
};

export default AudioEmbed;
