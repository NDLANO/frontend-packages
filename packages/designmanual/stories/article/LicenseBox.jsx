/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import Tabs from 'ndla-tabs';
import { uuid } from 'ndla-util';

import {
  MediaList,
  MediaListItem,
  MediaListItemBody,
  MediaListItemActions,
  MediaListItemImage,
  MediaListItemMeta,
} from 'ndla-ui';
import { Document, Audio } from 'ndla-icons/common';

import { COPYRIGHTED, metaTypes } from 'ndla-licenses';

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
      <MediaListItem>
        <MediaListItemImage>
          <a href="https://example.com">
            <img
              src="https://images.unsplash.com/photo-1453733190371-0a9bedd82893?auto=format&fit=crop&w=500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              width="260"
              alt="alt"
            />
          </a>
        </MediaListItemImage>
        <MediaListItemBody
          license={byncndLicenseAbbreviation}
          title="Regler for bruk av videoen:"
          resourceUrl="https://www.youtube.com/embed/f9VriNNRn0U?feature=oembed"
          resourceType="video">
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
                    label: 'Korrektur',
                    description: 'Kari N',
                    metaType: metaTypes.contributor,
                  },
                ]}
              />
              <button className="c-button c-button--outline" type="button">
                Kopier referanse
              </button>
              <button className="c-button c-button--outline" type="button">
                Last ned
              </button>
              <button className="c-button c-button--outline" type="button">
                Bygg inn
              </button>
            </div>
          </MediaListItemActions>
        </MediaListItemBody>
      </MediaListItem>
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
      {['1', '2'].map(key => (
        <MediaListItem key={key}>
          <MediaListItemImage>
            <a href="https://example.com">
              <Document className="c-medialist__icon" />
            </a>
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
                <button className="c-button c-button--outline" type="button">
                  Kopier referanse
                </button>
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
      {['1', '2'].map(key => (
        <MediaListItem key={key}>
          <MediaListItemImage>
            <a href="https://example.com">
              <Audio className="c-medialist__icon" />
            </a>
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
                <button className="c-button c-button--outline" type="button">
                  Kopier referanse
                </button>
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
            <a href="https://example.com">
              <img width="260" alt="alt" src={src} />
            </a>
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
                <button className="c-button c-button--outline" type="button">
                  Kopier referanse
                </button>
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
              width="260"
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
              <button className="c-button c-button--outline" type="button">
                Kopier referanse
              </button>
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

const H5PContent = () => (
  <div>
    <div className="u-introduction">
      <h2>Slik bruker du H5P-innhold fra artikkelen</h2>
      <p>
        Klikk på «Se del-elementer» for å se lisens for hvert enkelt element.
      </p>
    </div>
    <MediaList>
      {['1', '2'].map(key => (
        <MediaListItem key={key}>
          <MediaListItemImage>
            <a href="https://example.com">
              <iframe
                title="H5P"
                src="http://ndla.no/nb/h5p/embed/146132?fag=127756"
                className="c-medialist__h5p"
                width="260"
                height="373"
                frameBorder="0"
                allowFullScreen="allowfullscreen"
              />
              <script
                src="http://ndla.no/sites/all/modules/h5p/library/js/h5p-resizer.js?fag=127756"
                charSet="UTF-8"
              />
            </a>
          </MediaListItemImage>
          <MediaListItemBody
            license={byncndLicenseAbbreviation}
            title="Regler for bruk av H5P-innholdet:"
            resourceUrl="http://ndla.no/nb/h5p/embed/146132?fag=127756"
            resourceType="h5p">
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
                  ]}
                />
                <button className="c-button c-button--outline" type="button">
                  Kopier referanse
                </button>
                <button className="c-button c-button--outline" type="button">
                  Last ned bilde
                </button>
                <button className="c-button c-button--outline" type="button">
                  Bygg inn
                </button>
                <button className="c-button c-button--outline" type="button">
                  Se del-elementer
                </button>
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
      <p>
        Husk å kopier teksten som skal legges ved lydfilen der du bruker den.
      </p>
    </div>
    <MediaList>
      {['1', '2'].map(key => (
        <MediaListItem key={key}>
          <MediaListItemImage>
            <a href="https://example.com">
              <Document className="c-medialist__icon" />
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
                <button className="c-button c-button--outline" type="button">
                  Kopier referanse
                </button>
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

export const LicenseBox = () => (
  <div>
    <h1 className="license__heading">Slik gjenbruker du innhold</h1>

    <Tabs
      tabs={[
        { title: 'Bilder', content: <ImageContent /> },
        { title: 'Tekst', content: <TextContent /> },
        { title: 'Video', content: <VideoContent /> },
        { title: 'Lyd', content: <AudioContent /> },
        { title: 'H5P', content: <H5PContent /> },
        { title: 'Filer', content: <Files /> },
      ]}
    />
  </div>
);

export default LicenseBox;
