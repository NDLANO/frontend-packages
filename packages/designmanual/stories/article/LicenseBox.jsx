/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Tabs from 'ndla-tabs';
import { uuid, downloadPdf } from 'ndla-util';

import { injectT } from 'ndla-i18n';
import {
  MediaList,
  MediaListItem,
  MediaListItemBody,
  MediaListItemActions,
  MediaListItemImage,
  MediaListItemMeta,
  CopyButton,
  Button,
} from 'ndla-ui';
import { FileDocumentOutline, AudioDocument } from 'ndla-icons/common';

import { COPYRIGHTED, metaTypes } from 'ndla-licenses';

import { mockDownloadArticleText } from '../../dummydata';
import H5PExamples from '../../images/h5p-contenttype';

const triggerDownloadText = () => {
  // TODO: Fetch texts and name from article..
  downloadPdf({ content: mockDownloadArticleText, title: 'Eksempel artikkel' });
};

const byncndLicenseAbbreviation = 'by-nc-nd';
const bysaLicenseAbbreviation = 'by-sa';

const VideoContent = injectT(({ t }) => (
  <div>
    <h2>{t('license.video.heading')}</h2>
    <p>{t('license.video.description')}</p>
    <MediaList>
      {[
        { id: 'video-1', title: 'Søvn og hvile' },
        { id: 'video-2', title: 'Betydning og behov' },
      ].map(el => (
        <MediaListItem key={el.id}>
          <MediaListItemImage>
            <a
              href="https://www.youtube.com/watch?v=hjujTTRB01E"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('license.video.itemImage.ariaLabel')}>
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
              href="https://www.youtube.com/yt/about/copyright/fair-use/#yt-copyright-protection">
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
));

const TextContent = injectT(({ t }) => (
  <div>
    <div className="u-introduction">
      <h2>{t('license.text.heading')}</h2>
      <p>{t('license.text.description')}</p>
    </div>
    <MediaList>
      {[
        { id: 'text-1', title: 'Søvn og hvile' },
        { id: 'text-2', title: 'Betydning og behov' },
      ].map(el => (
        <MediaListItem key={el.id}>
          <MediaListItemImage>
            <FileDocumentOutline className="c-medialist__icon" />
          </MediaListItemImage>
          <MediaListItemBody
            license={bysaLicenseAbbreviation}
            title={t('license.text.rules')}
            resourceUrl=""
            resourceType="text">
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
                      label: 'Opphavsmann',
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
                <CopyButton outline copyNode={t('license.hasCopiedTitle')}>
                  {t('license.copyTitle')}
                </CopyButton>
                <Button
                  outline
                  onClick={() => {
                    triggerDownloadText();
                  }}>
                  {t('license.download')}
                </Button>
              </div>
            </MediaListItemActions>
          </MediaListItemBody>
        </MediaListItem>
      ))}
    </MediaList>
  </div>
));

const AudioContent = injectT(({ t }) => (
  <div>
    <div className="u-introduction">
      <h2>{t('license.audio.heading')}</h2>
      <p>{t('license.audio.description')}</p>
    </div>
    <MediaList>
      {[
        { id: 'audio-1', title: 'Søvn og hvile' },
        { id: 'audio-2', title: 'Betydning og behov' },
      ].map(el => (
        <MediaListItem key={el.id}>
          <MediaListItemImage>
            <AudioDocument className="c-medialist__icon" />
          </MediaListItemImage>
          <MediaListItemBody
            license={bysaLicenseAbbreviation}
            title={t('license.audio.rules')}
            resourceUrl=""
            resourceType="audio">
            <MediaListItemActions>
              <div className="c-medialist__ref">
                <MediaListItemMeta
                  items={[
                    {
                      label: 'Tittle',
                      description: el.title,
                      metaType: metaTypes.title,
                    },
                    {
                      label: 'Opphavsmann',
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
                <CopyButton outline copyNode={t('license.hasCopiedTitle')}>
                  {t('license.copyTitle')}
                </CopyButton>
                <Button outline>{t('license.download')}</Button>
              </div>
            </MediaListItemActions>
          </MediaListItemBody>
        </MediaListItem>
      ))}
    </MediaList>
  </div>
));

const ImageContent = injectT(({ t }) => (
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
      ].map(src => (
        <MediaListItem key={uuid()}>
          <MediaListItemImage>
            <img alt="alt" src={src} />
          </MediaListItemImage>
          <MediaListItemBody
            license={byncndLicenseAbbreviation}
            title={t('license.images.rules')}
            messages={{
              modelPremission:
                'Personen(e) på bildet har godkjent at det kan brukes videre.',
            }}
            resourceUrl={src}
            resourceType="image">
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
                      label: 'Opphavsmann',
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
                <CopyButton outline copyNode={t('license.hasCopiedTitle')}>
                  {t('license.copyTitle')}
                </CopyButton>
                <Button outline>{t('license.download')}</Button>
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
            aria-label={t('license.images.itemImage.ariaLabel')}>
            <img
              alt="alt"
              src="https://cdntest-c.ndla.no/sites/default/files/images/ku-collage_v2_3.fullbredde.jpg"
            />
          </a>
        </MediaListItemImage>
        <MediaListItemBody
          license={byncndLicenseAbbreviation}
          title={t('license.images.rules')}>
          <MediaListItemActions>
            <div className="c-medialist__ref">
              <MediaListItemMeta
                items={[
                  {
                    label: 'Opphavsmann',
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
              <CopyButton outline copyNode={t('license.hasCopiedTitle')}>
                {t('license.copyTitle')}
              </CopyButton>
              <Button outline>{t('license.download')}</Button>
            </div>
          </MediaListItemActions>
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
));

const OtherContent = injectT(({ t }) => (
  <div>
    <div className="u-introduction">
      <h2>{t('license.other.heading')}</h2>
      <p>{t('license.other.description')}</p>
    </div>
    <MediaList>
      {H5PExamples.map(example => (
        <MediaListItem key={example.id}>
          <MediaListItemImage>
            <a
              href={example.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('license.other.itemImage.ariaLabel')}>
              <img
                src={example.image}
                alt={example.name}
                className="other-content-image"
              />
            </a>
          </MediaListItemImage>
          <MediaListItemBody
            license={byncndLicenseAbbreviation}
            title={`${example.description}:`}
            resourceUrl="http://ndla.no/nb/h5p/embed/146132?fag=127756"
            resourceType="h5p">
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
                      label: 'Opphavsmann',
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
));

const Files = injectT(({ t }) => (
  <div>
    <div className="u-introduction">
      <h2>{t('license.files.heading')}</h2>
      <p>{t('license.files.description')}</p>
    </div>
    <MediaList>
      {[
        { id: 'files-1', title: 'Søvn og hvile' },
        { id: 'files-2', title: 'Betydning og behov' },
      ].map(el => (
        <MediaListItem key={el.id}>
          <MediaListItemImage>
            <FileDocumentOutline className="c-medialist__icon" />
          </MediaListItemImage>
          <MediaListItemBody
            license={COPYRIGHTED}
            title={t('license.files.rules')}
            resourceUrl="">
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
                      label: 'Opphavsmann',
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
                <CopyButton outline copyNode={t('license.hasCopiedTitle')}>
                  {t('license.copyTitle')}
                </CopyButton>
                <Button outline>{t('license.download')}</Button>
              </div>
            </MediaListItemActions>
          </MediaListItemBody>
        </MediaListItem>
      ))}
    </MediaList>
  </div>
));

TextContent.propTypes = {
  t: PropTypes.func.isRequired,
};
ImageContent.propTypes = {
  t: PropTypes.func.isRequired,
};
VideoContent.propTypes = {
  t: PropTypes.func.isRequired,
};
AudioContent.propTypes = {
  t: PropTypes.func.isRequired,
};
Files.propTypes = {
  t: PropTypes.func.isRequired,
};
OtherContent.propTypes = {
  t: PropTypes.func.isRequired,
};

const LicenseBox = ({ t }) => (
  <Fragment>
    <h1>{t('license.heading')}</h1>
    <Tabs
      singleLine
      tabs={[
        { title: t('license.tabs.text'), content: <TextContent /> },
        { title: t('license.tabs.images'), content: <ImageContent /> },
        { title: t('license.tabs.video'), content: <VideoContent /> },
        { title: t('license.tabs.audio'), content: <AudioContent /> },
        { title: t('license.tabs.files'), content: <Files /> },
        { title: t('license.tabs.other'), content: <OtherContent /> },
      ]}
    />
  </Fragment>
);

LicenseBox.propTypes = {
  t: PropTypes.func.isRequired,
};

export default injectT(LicenseBox);
