/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'ndla-tabs';
import { uuid } from 'ndla-util';

import {
  MediaList,
  MediaListItem,
  MediaListItemBody,
  MediaListItemActions,
  MediaListItemImage,
  MediaListItemMeta,
  CopyButton,
} from 'ndla-ui';
import {
  FileDocumentOutline,
  FileDownloadOutline,
  AudioDocument,
} from 'ndla-icons/common';

import { COPYRIGHTED, metaTypes } from 'ndla-licenses';

import H5PExamples from '../../images/h5p-contenttype';

const byncndLicenseAbbreviation = 'by-nc-nd';
const bysaLicenseAbbreviation = 'by-sa';

const VideoContent = () => (
  <div>
    <div className="u-introduction">
      <h2>Slik bruker du videoer fra artikkelen</h2>
      <p>
        Husk å kopier teksten som skal legges ved videoen der du bruker den.
      </p>
    </div>
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
              rel="noopener noreferrer">
              <img
                src="https://images.unsplash.com/photo-1453733190371-0a9bedd82893?auto=format&fit=crop&w=500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                alt="Høna og egget"
              />
            </a>
          </MediaListItemImage>
          <div className="o-media__body c-medialist__body">
            <h3 className="c-medialist__title">
              Regler for bruk av interaktiv video:
            </h3>
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
);

const TextContent = () => (
  <div>
    <div className="u-introduction">
      <h2>Slik bruker du tekst fra artikkelen</h2>
      <p>
        Artikkelen kan være satt sammen av flere ulike tekster, som listes opp
        her.
      </p>
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
            title="Regler for bruk av teksten:"
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
                <CopyButton outline copyNode="Kopiert!">
                  Kopier referanse
                </CopyButton>
                <button className="c-button c-button--outline" type="button">
                  Last ned
                </button>
              </div>
            </MediaListItemActions>
          </MediaListItemBody>
        </MediaListItem>
      ))}
    </MediaList>
  </div>
);

const AudioContent = () => (
  <div>
    <div className="u-introduction">
      <h2>Slik bruker du lydfiler</h2>
      <p>
        Husk å kopier teksten som skal legges ved lydfilen der du bruker den.
      </p>
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
            title="Regler for bruk av lydfilen:"
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
                <CopyButton outline copyNode="Kopiert!">
                  Kopier referanse
                </CopyButton>
                <button className="c-button c-button--outline" type="button">
                  Last ned
                </button>
              </div>
            </MediaListItemActions>
          </MediaListItemBody>
        </MediaListItem>
      ))}
    </MediaList>
  </div>
);

const ImageContent = () => (
  <div>
    <div className="u-introduction">
      <h2>Slik bruker du bilder fra artikkelen</h2>
      <p className="article-introduction">
        Husk å kopiere teksten som skal vises med bildet der du bruker det.
      </p>
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
            title="Regler for bruk av bildet:"
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
                <CopyButton outline copyNode="Kopiert!">
                  Kopier referanse
                </CopyButton>
                <button className="c-button c-button--outline" type="button">
                  Last ned bilde
                </button>
              </div>
            </MediaListItemActions>
          </MediaListItemBody>
        </MediaListItem>
      ))}
      <MediaListItem>
        <MediaListItemImage>
          <a href="https://example.com">
            <img
              alt="alt"
              src="https://cdntest-c.ndla.no/sites/default/files/images/ku-collage_v2_3.fullbredde.jpg"
            />
          </a>
        </MediaListItemImage>
        <MediaListItemBody
          license={byncndLicenseAbbreviation}
          title="Regler for bruk av bildet:">
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
              <CopyButton outline copyNode="Kopiert!">
                Kopier referanse
              </CopyButton>
              <button className="c-button c-button--outline" type="button">
                Last ned bilde
              </button>
              <button className="c-button c-button--outline" type="button">
                Se del-elementer
              </button>
            </div>
          </MediaListItemActions>
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);

const OtherContent = () => (
  <div>
    <div className="u-introduction">
      <h2>Slik bruker du annet innhold fra artikkelen</h2>
      <p>Du finner retningslinjene for bruk av innholdet i innholdselementet</p>
    </div>
    <MediaList>
      {H5PExamples.map(example => (
        <MediaListItem key={example.id}>
          <MediaListItemImage>
            <a href={example.url} target="_blank" rel="noopener noreferrer">
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
);

const Files = () => (
  <div>
    <div className="u-introduction">
      <h2>Slik bruker du filer fra artikkelen</h2>
      <p>Husk å kopier teksten som skal legges ved filen der du bruker den.</p>
    </div>
    <MediaList>
      {[
        { id: 'files-1', title: 'Søvn og hvile' },
        { id: 'files-2', title: 'Betydning og behov' },
      ].map(el => (
        <MediaListItem key={el.id}>
          <MediaListItemImage>
            <a href="https://example.com">
              <FileDownloadOutline className="c-medialist__icon" />
            </a>
          </MediaListItemImage>
          <MediaListItemBody
            license={COPYRIGHTED}
            title="Regler for bruk av filen:"
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
                <CopyButton outline copyNode="Kopiert!">
                  Kopier referanse
                </CopyButton>
                <button className="c-button c-button--outline" type="button">
                  Last ned
                </button>
              </div>
            </MediaListItemActions>
          </MediaListItemBody>
        </MediaListItem>
      ))}
    </MediaList>
  </div>
);

export const LicenseBox = ({ headingId }) => (
  <div>
    <h1 className="license__heading" id={headingId}>
      Slik gjenbruker du innhold
    </h1>
    <Tabs
      singleLine
      tabs={[
        { title: 'Tekst', content: <TextContent /> },
        { title: 'Bilder', content: <ImageContent /> },
        { title: 'Video', content: <VideoContent /> },
        { title: 'Lyd', content: <AudioContent /> },
        { title: 'Filer', content: <Files /> },
        { title: 'Annet innhold', content: <OtherContent /> },
      ]}
    />
  </div>
);

LicenseBox.propTypes = {
  headingId: PropTypes.string.isRequired,
};

export default LicenseBox;
