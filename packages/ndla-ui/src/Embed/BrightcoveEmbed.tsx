/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import sortBy from 'lodash/sortBy';
import isNumber from 'lodash/isNumber';
import {
  contributorGroups,
  contributorTypes,
  getGroupedContributorDescriptionList,
  getLicenseByAbbreviation,
  getLicenseCredits,
} from '@ndla/licenses';
import { useState } from 'react';
import { ModalV2 } from '@ndla/modal';
import { SafeLinkButton } from '@ndla/safelink';
import { BrightcoveEmbedData, BrightcoveMetaData, BrightcoveVideoSource } from '@ndla/types-embed';
import { useTranslation } from 'react-i18next';
import { ButtonV2, CopyButton } from '@ndla/button';
import { Figure, FigureCaption } from '../Figure';
import { FigureLicenseDialogContent } from '../Figure/FigureLicenseDialogContent';
import { Author } from './ImageEmbed';
import { getFirstNonEmptyLicenseCredits } from './AudioEmbed';

interface Props {
  embed: BrightcoveMetaData;
  isConcept?: boolean;
}

const mapContributorType = (type: string) => {
  switch (type) {
    case 'Manus':
      return 'Manusforfatter';
    case 'Musikk':
      return 'Komponist';
    case 'Opphavsmann':
      return 'Opphaver';
    default:
      return type;
  }
};

const getLicenseByNBTitle = (title: string) => {
  switch (title.replace(/\s/g, '').toLowerCase()) {
    case 'navngivelse-ikkekommersiell-ingenbearbeidelse':
      return 'CC-BY-NC-ND-4.0';
    case 'navngivelse-ikkekommersiell-delpåsammevilkår':
      return 'CC-BY-NC-SA-4.0';
    case 'navngivelse-ikkekommersiell':
      return 'CC-BY-NC-4.0';
    case 'navngivelse-ingenbearbeidelse':
      return 'CC-BY-ND-4.0';
    case 'navngivelse-delpåsammevilkår':
      return 'CC-BY-SA-4.0';
    case 'navngivelse':
      return 'CC-BY-4.0';
    case 'offentligdomene':
      return 'PD';
    case 'publicdomaindedication':
      return 'CC0-1.0';
    case 'publicdomainmark':
      return 'PD';
    case 'fristatus-erklæring':
      return 'CC0-1.0';
    case 'opphavsrett':
      return 'COPYRIGHTED';
    default:
      return title;
  }
};

export const getContributorGroups = (fields: Record<string, string>) => {
  const parseContributorsString = (contributorString: string) => {
    const contributorFields = contributorString.split(/: */);
    if (contributorFields.length !== 2) return { type: '', name: contributorFields[0] };
    const [type, name] = contributorFields;
    const contributorType = Object.keys(contributorTypes.nb).find(
      (key) => contributorTypes.nb[key] === mapContributorType(type?.trim()),
    );
    return { type: contributorType || '', name };
  };

  const licenseInfoKeys = Object.keys(fields).filter((key) => key.startsWith('licenseinfo'));

  const contributors = licenseInfoKeys.map((key) => parseContributorsString(fields[key]));

  return contributors.reduce(
    (groups: { creators: Author[]; processors: Author[]; rightsholders: Author[] }, contributor) => {
      const objectKeys = Object.keys(contributorGroups) as Array<keyof typeof contributorGroups>;
      const group = objectKeys.find((key) => {
        return contributorGroups[key].find((type) => type === contributor.type);
      });
      if (group) {
        return { ...groups, [group]: [...groups[group], contributor] };
      }
      return { ...groups, creators: [...groups.creators, contributor] };
    },
    {
      creators: [],
      processors: [],
      rightsholders: [],
    },
  );
};

export const makeIframeString = (url: string, width: string | number, height: string | number, title: string = '') => {
  const strippedWidth = isNumber(width) ? width : width.replace(/\s*px/, '');
  const strippedHeight = isNumber(height) ? height : height.replace(/\s*px/, '');
  const urlOrTitle = title || url;
  return `<iframe title="${urlOrTitle}" aria-label="${urlOrTitle}" src="${url}" width="${strippedWidth}" height="${strippedHeight}" allowfullscreen scrolling="no" frameborder="0" loading="lazy"></iframe>`;
};

export const isNumeric = (value: any) => !Number.isNaN(value - parseFloat(value));

const getIframeProps = (data: BrightcoveEmbedData, sources: BrightcoveVideoSource[]) => {
  const { account, videoid, player = 'default' } = data;

  const source = sources.filter((s) => s.width && s.height).sort((a, b) => (b.height ?? 0) - (a.height ?? 0))[0] || {};

  return {
    src: `https://players.brightcove.net/${account}/${player}_default/index.html?videoId=${videoid}`,
    height: source.height ?? '480',
    width: source.width ?? '640',
  };
};
const BrightcoveEmbed = ({ embed, isConcept }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOriginalVideo, setShowOriginalVideo] = useState(true);
  const { t, i18n } = useTranslation();
  const { embedData } = embed;
  if (embed.status === 'error') {
    return (
      <Figure type={isConcept ? 'full-column' : 'full'} resizeIframe>
        <iframe
          title={`Vidoe: ${embedData.videoid ?? ''}`}
          aria-label={`Video: ${embedData.videoid ?? ''}`}
          frameBorder="0"
          {...getIframeProps(embedData, [])}
          // eslint-disable-next-line react/no-unknown-property
          allowFullScreen
        />
        <figcaption>{t('video.error')}</figcaption>
      </Figure>
    );
  }
  const { data, seq } = embed;

  const linkedVideoId = isNumeric(data.link?.text) ? data.link?.text : undefined;

  const contributorGroups = getContributorGroups(data.custom_fields);

  const licenseCode = getLicenseByNBTitle(data.custom_fields.license);

  const license = getLicenseByAbbreviation(licenseCode, i18n.language);
  const authors = getLicenseCredits(contributorGroups);
  const contributors = getGroupedContributorDescriptionList(contributorGroups, i18n.language).map((item) => ({
    name: item.description,
    type: item.label,
  }));

  const download = sortBy(
    data.sources.filter((src) => src.container === 'MP4' && src.src),
    (src) => src.size,
  )?.[0]?.src;

  const figureId = `figure-${seq}-${data.id}`;
  const originalVideoProps = getIframeProps(embedData, data.sources);
  const alternativeVideoProps = linkedVideoId
    ? getIframeProps({ ...embedData, videoid: linkedVideoId }, data.sources)
    : undefined;
  const { src, height, width } = getIframeProps(embedData, data.sources);
  const captionAuthors = getFirstNonEmptyLicenseCredits(authors);

  return (
    <Figure id={figureId} type={isConcept ? 'full-column' : 'full'} resizeIframe>
      <div className="brightcove-video">
        <iframe
          className="original"
          title={`Video: ${data.name}`}
          aria-label={`Video: ${data.name}`}
          frameBorder="0"
          {...(alternativeVideoProps && !showOriginalVideo ? alternativeVideoProps : originalVideoProps)}
          // eslint-disable-next-line react/no-unknown-property
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
          <ButtonV2 variant="outline" shape="pill" size="small" onClick={() => setShowOriginalVideo((p) => !p)}>
            {t(`figure.button.${showOriginalVideo ? 'original' : 'alternative'}`)}
          </ButtonV2>
        }
        licenseRights={license.rights}
        authors={captionAuthors}
        hasLinkedVideo={!!linkedVideoId}
      />
      <ModalV2 controlled isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {(close) => (
          <FigureLicenseDialogContent
            onClose={close}
            title={data.name}
            locale={i18n.language}
            license={license}
            authors={contributors}
            type="video">
            {licenseCode !== 'COPYRIGHTED' && (
              <SafeLinkButton key="download" to={download} variant="outline" download>
                {t('video.download')}
              </SafeLinkButton>
            )}
            <CopyButton
              variant="outline"
              copyNode={t('license.hasCopiedTitle')}
              onClick={() => navigator.clipboard.writeText(makeIframeString(src, width, height, data.name))}>
              {t('license.embed')}
            </CopyButton>
          </FigureLicenseDialogContent>
        )}
      </ModalV2>
    </Figure>
  );
};

export default BrightcoveEmbed;
