/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@ndla/tabs';
import { uuid } from '@ndla/util';

import { useTranslation } from 'react-i18next';
import {
  MediaList,
  MediaListItem,
  MediaListItemBody,
  MediaListItemActions,
  MediaListItemImage,
  MediaListItemMeta,
} from '@ndla/ui';
import { CopyButton, ButtonV2 } from '@ndla/button';
import { FileDocumentOutline, AudioDocument, Podcast } from '@ndla/icons/common';

import { COPYRIGHTED, metaTypes } from '@ndla/licenses';

import { mockDownloadArticleText } from '../../dummydata';
import H5PExamples from '../../images/h5p-contenttype';

const triggerDownloadText = async () => {
  const { default: downloadPdf } = await import('./downloadPdf');
  downloadPdf({ content: mockDownloadArticleText, title: 'Eksempel artikkel' });
  // TODO: Fetch texts and name from article..
};

const byncndLicenseAbbreviation = 'CC-BY-ND-4.0';
const bysaLicenseAbbreviation = 'CC-BY-SA-4.0';

const VideoContent = ({ t }) => (
  <div>
    <h2>{t('license.video.heading')}</h2>
    <p>{t('license.video.description')}</p>
    <MediaList>
      {[
        { id: 'video-1', title: 'Søvn og hvile' },
        { id: 'video-2', title: 'Betydning og behov' },
      ].map((el) => (
        <MediaListItem key={el.id}>
          <MediaListItemImage>
            <a
              href="https://www.youtube.com/watch?v=hjujTTRB01E"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('license.video.itemImage.ariaLabel')}
            >
              <img
                src="https://images.unsplash.com/photo-1453733190371-0a9bedd82893?auto=format&fit=crop&w=500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                alt="Høna og egget"
              />
            </a>
          </MediaListItemImage>
          <div className="o-media__body c-medialist__body">
            <h3 className="c-medialist__title">{t('license.video.rules')}</h3>
            <p>Oppsøk innholdsobjektet for å finne regler for gjenbruk.</p>
            <a
              className="c-figure-license__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/yt/about/copyright/fair-use/#yt-copyright-protection"
            >
              Les forklaring til hvordan du finner frem til reglene for gjenbruk
            </a>
            <MediaListItemActions>
              <div className="c-medialist__ref">
                <MediaListItemMeta
                  items={[
                    {
                      label: 'Tittel',
                      description: el.title,
                      metaType: metaTypes.title,
                    },
                  ]}
                />
              </div>
            </MediaListItemActions>
          </div>
        </MediaListItem>
      ))}
    </MediaList>
  </div>
);

VideoContent.propTypes = {
  t: PropTypes.func.isRequired,
};

export const TextContent = ({ t }) => (
  <div>
    <div className="u-introduction">
      <h2>{t('license.text.heading')}</h2>
      <p>{t('license.text.description')}</p>
    </div>
    <MediaList>
      {[
        { id: 'text-1', title: 'Søvn og hvile' },
        { id: 'text-2', title: 'Betydning og behov' },
      ].map((el) => (
        <MediaListItem key={el.id}>
          <MediaListItemImage>
            <FileDocumentOutline className="c-medialist__icon" />
          </MediaListItemImage>
          <MediaListItemBody
            license={bysaLicenseAbbreviation}
            title={t('license.text.rules')}
            resourceUrl=""
            locale="nb"
            resourceType="text"
          >
            <MediaListItemActions>
              <div className="c-medialist__ref">
                <MediaListItemMeta
                  items={[
                    {
                      label: 'Tittel',
                      description: el.title,
                      metaType: metaTypes.title,
                    },
                    {
                      label: 'Opphaver',
                      description: 'Fotograf Ola N',
                      metaType: metaTypes.author,
                    },
                    {
                      label: 'Rettighetshaver',
                      description: 'Leverandør NTB scanpix',
                      metaType: metaTypes.copyrightHolder,
                    },
                    {
                      label: 'Publiseringsdato',
                      description: '12.05.13',
                      metaType: metaTypes.other,
                    },
                  ]}
                />
                <CopyButton variant="outline" copyNode={t('license.hasCopiedTitle')}>
                  {t('license.copyTitle')}
                </CopyButton>
                <ButtonV2
                  variant="outline"
                  onClick={() => {
                    triggerDownloadText();
                  }}
                >
                  {t('license.download')}
                </ButtonV2>
              </div>
            </MediaListItemActions>
          </MediaListItemBody>
        </MediaListItem>
      ))}
    </MediaList>
  </div>
);

TextContent.propTypes = {
  t: PropTypes.func.isRequired,
};

const AudioContent = ({ t }) => (
  <div>
    <div className="u-introduction">
      <h2>{t('license.audio.heading')}</h2>
      <p>{t('license.audio.description')}</p>
    </div>
    <MediaList>
      {[
        { id: 'audio-1', title: 'Søvn og hvile' },
        { id: 'audio-2', title: 'Betydning og behov' },
      ].map((el) => (
        <MediaListItem key={el.id}>
          <MediaListItemImage>
            <AudioDocument className="c-medialist__icon" />
          </MediaListItemImage>
          <MediaListItemBody
            license={bysaLicenseAbbreviation}
            title={t('license.audio.rules')}
            resourceUrl=""
            locale="nb"
            resourceType="audio"
          >
            <MediaListItemActions>
              <div className="c-medialist__ref">
                <MediaListItemMeta
                  items={[
                    {
                      label: 'Tittel',
                      description: el.title,
                      metaType: metaTypes.title,
                    },
                    {
                      label: 'Opphaver',
                      description: 'Fotograf Ola N',
                      metaType: metaTypes.author,
                    },
                    {
                      label: 'Rettighetshaver',
                      description: 'Leverandør NTB scanpix',
                      metaType: metaTypes.copyrightHolder,
                    },
                  ]}
                />
                <CopyButton variant="outline" copyNode={t('license.hasCopiedTitle')}>
                  {t('license.copyTitle')}
                </CopyButton>
                <ButtonV2 variant="outline">{t('license.download')}</ButtonV2>
              </div>
            </MediaListItemActions>
          </MediaListItemBody>
        </MediaListItem>
      ))}
    </MediaList>
  </div>
);

AudioContent.propTypes = {
  t: PropTypes.func.isRequired,
};

const PodcastContent = ({ t }) => (
  <div>
    <div className="u-introduction">
      <h2>{t('license.podcast.heading')}</h2>
      <p>{t('license.podcast.description')}</p>
    </div>
    <MediaList>
      {[
        { id: 'audio-1', title: 'Søvn og hvile' },
        { id: 'audio-2', title: 'Betydning og behov' },
      ].map((el) => (
        <MediaListItem key={el.id}>
          <MediaListItemImage>
            <Podcast className="c-medialist__icon" />
          </MediaListItemImage>
          <MediaListItemBody
            license={bysaLicenseAbbreviation}
            title={t('license.podcast.rules')}
            resourceUrl=""
            locale="nb"
            resourceType="audio"
          >
            <MediaListItemActions>
              <div className="c-medialist__ref">
                <MediaListItemMeta
                  items={[
                    {
                      label: 'Tittel',
                      description: el.title,
                      metaType: metaTypes.title,
                    },
                    {
                      label: 'Opphaver',
                      description: 'Fotograf Ola N',
                      metaType: metaTypes.author,
                    },
                    {
                      label: 'Rettighetshaver',
                      description: 'Leverandør NTB scanpix',
                      metaType: metaTypes.copyrightHolder,
                    },
                  ]}
                />
                <CopyButton variant="outline" copyNode={t('license.hasCopiedTitle')}>
                  {t('license.copyTitle')}
                </CopyButton>
                <ButtonV2 variant="outline">{t('license.download')}</ButtonV2>
              </div>
            </MediaListItemActions>
          </MediaListItemBody>
        </MediaListItem>
      ))}
    </MediaList>
  </div>
);

PodcastContent.propTypes = {
  t: PropTypes.func.isRequired,
};

export const ImageContent = ({ t }) => (
  <div>
    <div className="u-introduction">
      <h2>{t('license.images.heading')}</h2>
      <p>{t('license.images.description')}</p>
    </div>
    <MediaList>
      {[
        'https://images.unsplash.com/photo-1463432786691-8ec0615f2dfe?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
        'https://images.unsplash.com/photo-1463432786691-8ec0615f2dfe?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
        'https://images.unsplash.com/photo-1470138831303-3e77dd49163e?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
      ].map((src) => (
        <MediaListItem key={uuid()}>
          <MediaListItemImage>
            <img alt="alt" src={src} />
          </MediaListItemImage>
          <MediaListItemBody
            license={byncndLicenseAbbreviation}
            title={t('license.images.rules')}
            messages={{
              modelPremission: 'Personen(e) på bildet har godkjent at det kan brukes videre.',
            }}
            locale="nb"
            resourceUrl={src}
            resourceType="image"
          >
            <MediaListItemActions>
              <div className="c-medialist__ref">
                <MediaListItemMeta
                  items={[
                    {
                      label: 'Tittel',
                      description: 'Snølagt fjell',
                      metaType: metaTypes.title,
                    },
                    {
                      label: 'Opphaver',
                      description: 'Fotograf Ola N',
                      metaType: metaTypes.author,
                    },
                    {
                      label: 'Rettighetshaver',
                      description: 'Leverandør NTB scanpix',
                      metaType: metaTypes.copyrightHolder,
                    },
                    {
                      label: 'Kilde',
                      description: 'https://www.wikimedia.org/',
                      metaType: metaTypes.other,
                    },
                  ]}
                />
                <CopyButton variant="outline" copyNode={t('license.hasCopiedTitle')}>
                  {t('license.copyTitle')}
                </CopyButton>
                <ButtonV2 variant="outline">{t('license.download')}</ButtonV2>
              </div>
            </MediaListItemActions>
          </MediaListItemBody>
        </MediaListItem>
      ))}
      <MediaListItem>
        <MediaListItemImage>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('license.images.itemImage.ariaLabel')}
          >
            <img alt="alt" src="https://cdntest-c.ndla.no/sites/default/files/images/ku-collage_v2_3.fullbredde.jpg" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody license={byncndLicenseAbbreviation} locale="nb" title={t('license.images.rules')}>
          <MediaListItemActions>
            <div className="c-medialist__ref">
              <MediaListItemMeta
                items={[
                  {
                    label: 'Opphaver',
                    description: 'Fotograf Ola N',
                    metaType: metaTypes.author,
                  },
                  {
                    label: 'Rettighetshaver',
                    description: 'Leverandør NTB scanpix',
                    metaType: metaTypes.copyrightHolder,
                  },
                  {
                    label: 'Kilde',
                    description: 'https://www.wikimedia.org/',
                    metaType: metaTypes.other,
                  },
                ]}
              />
              <CopyButton variant="outline" copyNode={t('license.hasCopiedTitle')}>
                {t('license.copyTitle')}
              </CopyButton>
              <ButtonV2 variant="outline">{t('license.download')}</ButtonV2>
            </div>
          </MediaListItemActions>
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);

ImageContent.propTypes = {
  t: PropTypes.func.isRequired,
};

const OtherContent = ({ t }) => (
  <div>
    <div className="u-introduction">
      <h2>{t('license.other.heading')}</h2>
      <p>{t('license.other.description')}</p>
    </div>
    <MediaList>
      {H5PExamples.map((example) => (
        <MediaListItem key={example.id}>
          <MediaListItemImage>
            <a
              href={example.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('license.other.itemImage.ariaLabel')}
            >
              <img src={example.image} alt={example.name} className="other-content-image" />
            </a>
          </MediaListItemImage>
          <MediaListItemBody
            license={byncndLicenseAbbreviation}
            title={`${example.description}:`}
            resourceUrl="http://ndla.no/nb/h5p/embed/146132?fag=127756"
            resourceType="h5p"
          >
            <MediaListItemActions>
              <div className="c-medialist__ref">
                <MediaListItemMeta
                  items={[
                    {
                      label: 'Tittel',
                      description: example.title,
                      metaType: metaTypes.title,
                    },
                    {
                      label: 'Opphaver',
                      description: 'Fotograf Ola N',
                      metaType: metaTypes.author,
                    },
                  ]}
                />
              </div>
            </MediaListItemActions>
          </MediaListItemBody>
        </MediaListItem>
      ))}
    </MediaList>
  </div>
);

OtherContent.propTypes = {
  t: PropTypes.func.isRequired,
};

const Files = ({ t }) => (
  <div>
    <div className="u-introduction">
      <h2>{t('license.files.heading')}</h2>
      <p>{t('license.files.description')}</p>
    </div>
    <MediaList>
      {[
        { id: 'files-1', title: 'Søvn og hvile' },
        { id: 'files-2', title: 'Betydning og behov' },
      ].map((el) => (
        <MediaListItem key={el.id}>
          <MediaListItemImage>
            <FileDocumentOutline className="c-medialist__icon" />
          </MediaListItemImage>
          <MediaListItemBody license={COPYRIGHTED} title={t('license.files.rules')} resourceUrl="">
            <MediaListItemActions>
              <div className="c-medialist__ref">
                <MediaListItemMeta
                  items={[
                    {
                      label: 'Tittel',
                      description: el.title,
                      metaType: metaTypes.title,
                    },
                    {
                      label: 'Opphaver',
                      description: 'Fotograf Ola N',
                      metaType: metaTypes.author,
                    },
                    {
                      label: 'Rettighetshaver',
                      description: 'Leverandør NTB scanpix',
                      metaType: metaTypes.copyrightHolder,
                    },
                  ]}
                />
                <CopyButton variant="outline" copyNode={t('license.hasCopiedTitle')}>
                  {t('license.copyTitle')}
                </CopyButton>
                <ButtonV2 variant="outline">{t('license.download')}</ButtonV2>
              </div>
            </MediaListItemActions>
          </MediaListItemBody>
        </MediaListItem>
      ))}
    </MediaList>
  </div>
);

Files.propTypes = {
  t: PropTypes.func.isRequired,
};

export const LinkContent = ({ t }) => (
  <div>
    <div className="u-introduction">
      <h2>{t('license.embedlink.heading')}</h2>
      <p>{t('license.embedlink.description')}</p>
    </div>
    <CopyButton variant="outline" copyNode={t('license.embedlink.hasCopiedTitle')}>
      {t('license.embedlink.copyTitle')}
    </CopyButton>
  </div>
);

LinkContent.propTypes = {
  t: PropTypes.func.isRequired,
};

const LicenseBox = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <h1>{t('license.heading')}</h1>
      <Tabs
        singleLine
        tabs={[
          { title: t('license.tabs.text'), content: <TextContent t={t} /> },
          { title: t('license.tabs.images'), content: <ImageContent t={t} /> },
          { title: t('license.tabs.video'), content: <VideoContent t={t} /> },
          { title: t('license.tabs.audio'), content: <AudioContent t={t} /> },
          { title: t('license.tabs.podcast'), content: <PodcastContent t={t} /> },
          { title: t('license.tabs.files'), content: <Files t={t} /> },
          { title: t('license.tabs.embedlink'), content: <LinkContent t={t} /> },
          { title: t('license.tabs.other'), content: <OtherContent t={t} /> },
        ]}
      />
    </Fragment>
  );
};

export default LicenseBox;
