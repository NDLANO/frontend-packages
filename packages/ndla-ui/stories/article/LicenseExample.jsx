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
import { getLicenseByAbbreviation } from 'ndla-licenses';

import { Icon, ToggleLicenseBox, LicenseByline,
  MediaList, MediaListItem, MediaListItemBody, MediaListItemActions, MediaListItemImage, MediaListItemMeta,
} from '../../src';


const VideoContent = () => (
  <div>
    <div className="u-introduction">
      <h2>Slik bruker du videoer fra artikkelen</h2>
      <p>Klikk på lisensene for å se reglene. Husk å kopier teksten som skal legges ved bildet der du bruker det.</p>
    </div>
    <MediaList>
      <MediaListItem>
        <MediaListItemImage>
          <iframe
            width="200"
            height="113"
            src="https://www.youtube.com/embed/f9VriNNRn0U?feature=oembed"
            frameBorder="0"
            allowFullScreen=""
          />
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Embed className="c-modal__button-icon" /> Bygg inn</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser']} />
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);


const TextContent = () => (
  <div>
    <div className="u-introduction">
      <h2>Slik bruker du tekst fra artikkelen</h2>
      <p>Artikkelen kan være satt sammen av flere ulike tekster, som listes opp her. Klikk på lisensene for å se reglene for hver enkelt del.</p>
    </div>
    <MediaList>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <Icon.Document className="c-medialist__icon" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-sa" title="Tittel på tekst">
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <Icon.Document className="c-medialist__icon" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-sa" title="Tittel på tekst">
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);


const AudioContent = () => (
  <div>
    <div className="u-introduction">
      <h2>Slik bruker du lydfiler</h2>
    </div>
    <MediaList>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <Icon.Audio className="c-medialist__icon" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-sa">
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <Icon.Audio className="c-medialist__icon" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-sa">
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);

const ImageContent = () => (
  <div>
    <div className="u-introduction">
      <h2>Slik bruker du bilder fra artikkelen</h2>
      <p className="article-introduction">Klikk på lisensene for å se reglene. Husk å kopier teksten som skal legges ved bildet der du bruker det.</p>
    </div>
    <MediaList>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <img width="260" alt="alt" src="https://images.unsplash.com/photo-1463432786691-8ec0615f2dfe?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned bilde</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <img width="260" alt="alt" src="https://images.unsplash.com/photo-1470138831303-3e77dd49163e?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned bilde</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <img width="260" alt="alt" src="https://cdntest-c.ndla.no/sites/default/files/images/ku-collage_v2_3.fullbredde.jpg" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned bilde</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:', 'Verket består av...']} />
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);


const H5PContent = () => (
  <div>
    <div className="u-introduction">
      <h2>Slik bruker du H5P-innhold fra artikkelen</h2>
      <p>Klikk på lisensene for å se reglene.</p>
    </div>
    <MediaList>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <iframe src="http://ndla.no/nb/h5p/embed/146132?fag=127756" className="c-medialist__h5p" width="260" height="373" frameBorder="0" allowFullScreen="allowfullscreen" /><script src="http://ndla.no/sites/all/modules/h5p/library/js/h5p-resizer.js?fag=127756" charSet="UTF-8" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Embed className="c-modal__button-icon" /> Bygg inn</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <iframe src="http://ndla.no/nb/h5p/embed/146135?fag=127756" className="c-medialist__h5p" width="260" height="373" frameBorder="0" allowFullScreen="allowfullscreen" /><script src="http://ndla.no/sites/all/modules/h5p/library/js/h5p-resizer.js?fag=127756" charSet="UTF-8" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Embed className="c-modal__button-icon" /> Bygg inn</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014 / Oppdatert...', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);


const LearningPath = () => (
  <div>
    <div className="u-introduction">
      <h2>Slik bruker du Læringssti-innhold fra artikkelen</h2>
      <p>Klikk på lisensene for å se reglene.</p>
    </div>
    <MediaList>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <img width="260" alt="alt" src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&auto=format&fit=crop&w=1500&h=1124&q=80&cs=tinysrgb&crop=" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014 / Oppdatert...', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <img width="260" alt="alt" src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&auto=format&fit=crop&w=1500&h=1124&q=80&cs=tinysrgb&crop=" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014 / Oppdatert...', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);


const Files = () => (
  <div>
    <div className="u-introduction">
      <h2>Slik bruker du filer fra artikkelen</h2>
      <p>Klikk på lisensene for å se reglene.</p>
    </div>
    <MediaList>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <Icon.Document className="c-medialist__icon" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014 / Oppdatert...', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <Icon.Document className="c-medialist__icon" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014 / Oppdatert...', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);

export const LicenseBox = () => (
  <div>
    <h1 className="license__heading">Hvordan gjenbruke innhold fra NDLA</h1>

    <Tabs
      tabs={[
            { title: 'Bilder', content: <ImageContent /> },
            { title: 'Tekst', content: <TextContent /> },
            { title: 'Video', content: <VideoContent /> },
            { title: 'Lyd', content: <AudioContent /> },
            { title: 'H5P', content: <H5PContent /> },
            { title: 'Læringssti', content: <LearningPath /> },
            { title: 'Filer', content: <Files /> },
      ]}
    />
  </div>
);

const LicenseExample = ({ showByline }) => (
  <ToggleLicenseBox
    openTitle="Gjenbruk fagstoff"
    closeTitle="Lukk boks"
    licenseBox={<LicenseBox />}
  >
    { showByline ?
      <LicenseByline license={getLicenseByAbbreviation('by-nc-nd')}>
        <span className="article_meta">Ola Nordmann, Kari Nordmann. Publisert: 10.10.2010.</span>
      </LicenseByline>
    : null
    }
  </ToggleLicenseBox>

);

LicenseExample.propTypes = {
  showByline: PropTypes.bool,
};


export default LicenseExample;
