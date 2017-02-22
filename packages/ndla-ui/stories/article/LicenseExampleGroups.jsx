/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import Tabs from 'ndla-tabs';
import { getLicenseByAbbreviation } from 'ndla-licenses';
import { LicenseShape } from '../../src/shapes';

import { Icon, Button, ClickableLicenseByline } from '../../src';


const VideoContent = () => (
  <div>
    <h2>Slik bruker du videoer fra artikkelen</h2>
    <p>Klikk på lisensene for å se reglene. Husk å kopier teksten som skal legges ved bildet der du bruker det.</p>
    <ul className="c-medialist">
      <li className="o-media c-medialist__item">
        <div className="o-media__img c-medialist__img">
          <iframe
            width="200"
            height="113"
            src="https://www.youtube.com/embed/f9VriNNRn0U?feature=oembed"
            frameBorder="0"
            allowFullScreen=""
          />
        </div>
        <div className="o-media__body c-medialist__body">
          <ClickableLicenseByline license={getLicenseByAbbreviation('by-nc-nd')} />
          <div className="c-medialist__actions">
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Embed className="c-modal__button-icon" /> Bygg inn</button>
          </div>
          <ul className="c-medialist__meta">
            <li className="c-medialist__meta-item">12. desember 2014</li>
            <li className="c-medialist__meta-item">Opphavsperson: Ola Nordmann</li>
            <li className="c-medialist__meta-item">Rettighetshaver: Kari Nordmann</li>
            <li className="c-medialist__meta-item">Remikser:</li>
          </ul>

        </div>
      </li>
    </ul>
  </div>
);


const TextContent = () => (
  <div>
    <h2>Slik bruker du tekst fra artikkelen</h2>
    <p>Artikkelen kan være satt sammen av flere ulike tekster, som listes opp her. Klikk på lisensene for å se reglene for hver enkelt del.</p>
    <ul className="c-medialist">
      <li className="o-media c-medialist__item">
        <div className="o-media__img c-medialist__img">
          <a href="">
            <Icon.Document className="c-medialist__icon" />
          </a>
        </div>
        <div className="o-media__body c-medialist__body">
          <h3 className="c-medialist__title">
            Tittel på tekst
          </h3>
          <ClickableLicenseByline license={getLicenseByAbbreviation('by-sa')} />
          <div className="c-medialist__actions">
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </div>
          <ul className="c-medialist__meta">
            <li className="c-medialist__meta-item">12. desember 2014</li>
            <li className="c-medialist__meta-item">Opphavsperson: Ola Nordmann</li>
            <li className="c-medialist__meta-item">Rettighetshaver: Kari Nordmann</li>
            <li className="c-medialist__meta-item">Remikser:</li>
          </ul>

        </div>
      </li>
      <li className="o-media c-medialist__item">
        <div className="o-media__img c-medialist__img">
          <a href="">
            <Icon.Document className="c-medialist__icon" />
          </a>
        </div>
        <div className="o-media__body c-medialist__body">
          <h3 className="c-medialist__title">
            Tittel på tekst
          </h3>
          <ClickableLicenseByline license={getLicenseByAbbreviation('by-sa')} />
          <div className="c-medialist__actions">
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </div>
          <ul className="c-medialist__meta">
            <li className="c-medialist__meta-item">12. desember 2014</li>
            <li className="c-medialist__meta-item">Opphavsperson: Ola Nordmann</li>
            <li className="c-medialist__meta-item">Rettighetshaver: Kari Nordmann</li>
            <li className="c-medialist__meta-item">Remikser:</li>
          </ul>

        </div>
      </li>
    </ul>
  </div>
);

TextContent.propTypes = {
  license: LicenseShape,
};


const AudioContent = () => (
  <div>
    <h2>Slik bruker du lydfiler</h2>
    <ul className="c-medialist">
      <li className="o-media c-medialist__item">
        <div className="o-media__img c-medialist__img">
          <a href="">
            <Icon.Audio className="c-medialist__icon" />
          </a>
        </div>
        <div className="o-media__body c-medialist__body">
          <ClickableLicenseByline license={getLicenseByAbbreviation('by-sa')} />
          <div className="c-medialist__actions">
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </div>
          <ul className="c-medialist__meta">
            <li className="c-medialist__meta-item">12. desember 2014</li>
            <li className="c-medialist__meta-item">Opphavsperson: Ola Nordmann</li>
            <li className="c-medialist__meta-item">Rettighetshaver: Kari Nordmann</li>
            <li className="c-medialist__meta-item">Remikser:</li>
          </ul>

        </div>
      </li>
      <li className="o-media c-medialist__item">
        <div className="o-media__img c-medialist__img">
          <a href="">
            <Icon.Audio className="c-medialist__icon" />
          </a>
        </div>
        <div className="o-media__body c-medialist__body">
          <ClickableLicenseByline license={getLicenseByAbbreviation('by-sa')} />
          <div className="c-medialist__actions">
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </div>
          <ul className="c-medialist__meta">
            <li className="c-medialist__meta-item">12. desember 2014</li>
            <li className="c-medialist__meta-item">Opphavsperson: Ola Nordmann</li>
            <li className="c-medialist__meta-item">Rettighetshaver: Kari Nordmann</li>
            <li className="c-medialist__meta-item">Remikser:</li>
          </ul>

        </div>
      </li>
    </ul>
  </div>
);

const ImageContent = () => (
  <div>
    <h2>Slik bruker du bilder fra artikkelen</h2>
    <p>Klikk på lisensene for å se reglene. Husk å kopier teksten som skal legges ved bildet der du bruker det.</p>
    <ul className="c-medialist">
      <li className="o-media c-medialist__item">
        <div className="o-media__img c-medialist__img">
          <a href="">
            <img width="260" alt="alt" src="https://images.unsplash.com/photo-1463432786691-8ec0615f2dfe?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=" />
          </a>
        </div>
        <div className="o-media__body c-medialist__body">
          <ClickableLicenseByline license={getLicenseByAbbreviation('by-nc-nd')} />
          <div className="c-medialist__actions">
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Link className="c-modal__button-icon" /> Gå til kilde</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.OpenWindow className="c-modal__button-icon" /> Vis bilde</button>
          </div>
          <ul className="c-medialist__meta">
            <li className="c-medialist__meta-item">12. desember 2014</li>
            <li className="c-medialist__meta-item">Opphavsperson: Ola Nordmann</li>
            <li className="c-medialist__meta-item">Rettighetshaver: Kari Nordmann</li>
            <li className="c-medialist__meta-item">Remikser:: </li>
          </ul>

        </div>
      </li>
      <li className="o-media c-medialist__item">
        <div className="o-media__img c-medialist__img">
          <a href="">
            <img width="260" alt="alt" src="https://images.unsplash.com/photo-1470138831303-3e77dd49163e?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=" />
          </a>
        </div>
        <div className="o-media__body c-medialist__body">
          <ClickableLicenseByline license={getLicenseByAbbreviation('by-nc-nd')} />
          <div className="c-medialist__actions">
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Link className="c-modal__button-icon" /> Gå til kilde</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.OpenWindow className="c-modal__button-icon" /> Vis bilde</button>
          </div>
          <ul className="c-medialist__meta">
            <li className="c-medialist__meta-item">12. desember 2014</li>
            <li className="c-medialist__meta-item">Opphavsperson: Ola Nordmann</li>
            <li className="c-medialist__meta-item">Rettighetshaver: Kari Nordmann</li>
            <li className="c-medialist__meta-item">Remikser:: </li>
          </ul>

        </div>
      </li>
      <li className="o-media c-medialist__item">
        <div className="o-media__img c-medialist__img">
          <a href="">
            <img width="260" alt="alt" src="https://cdntest-c.ndla.no/sites/default/files/images/ku-collage_v2_3.fullbredde.jpg" />
          </a>
        </div>
        <div className="o-media__body c-medialist__body">
          <ClickableLicenseByline license={getLicenseByAbbreviation('by-nc-nd')} />
          <div className="c-medialist__actions">
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Link className="c-modal__button-icon" /> Gå til kilde</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.OpenWindow className="c-modal__button-icon" /> Vis bilde</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </div>
          <ul className="c-medialist__meta">
            <li className="c-medialist__meta-item">12. desember 2014</li>
            <li className="c-medialist__meta-item">Opphavsperson: Ola Nordmann</li>
            <li className="c-medialist__meta-item">Rettighetshaver: Kari Nordmann</li>
            <li className="c-medialist__meta-item">Remikser:</li>
            <li className="c-medialist__meta-item">Verket består av...</li>
          </ul>

        </div>
      </li>
    </ul>
  </div>
);


const H5PContent = () => (
  <div>
    <h2>Slik bruker du H5P-innhold fra artikkelen</h2>
    <p>Klikk på lisensene for å se reglene.</p>
    <ul className="c-medialist">
      <li className="o-media c-medialist__item">
        <div className="o-media__img c-medialist__img">
          <a href="">
            <iframe src="http://ndla.no/nb/h5p/embed/146132?fag=127756" className="c-medialist__h5p" width="260" height="373" frameBorder="0" allowFullScreen="allowfullscreen" /><script src="http://ndla.no/sites/all/modules/h5p/library/js/h5p-resizer.js?fag=127756" charSet="UTF-8" />
          </a>
        </div>
        <div className="o-media__body c-medialist__body">
          <ClickableLicenseByline license={getLicenseByAbbreviation('by-nc-nd')} />
          <div className="c-medialist__actions">
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Embed className="c-modal__button-icon" /> Bygg inn</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </div>
          <ul className="c-medialist__meta">
            <li className="c-medialist__meta-item">12. desember 2014 / Oppdatert...</li>
            <li className="c-medialist__meta-item">Opphavsperson: Ola Nordmann</li>
            <li className="c-medialist__meta-item">Rettighetshaver: Kari Nordmann</li>
            <li className="c-medialist__meta-item">Remikser:</li>
          </ul>

        </div>
      </li>
      <li className="o-media c-medialist__item">
        <div className="o-media__img c-medialist__img">
          <a href="">
            <iframe src="http://ndla.no/nb/h5p/embed/146135?fag=127756" className="c-medialist__h5p" width="260" height="373" frameBorder="0" allowFullScreen="allowfullscreen" /><script src="http://ndla.no/sites/all/modules/h5p/library/js/h5p-resizer.js?fag=127756" charSet="UTF-8" />
          </a>
        </div>
        <div className="o-media__body c-medialist__body">
          <ClickableLicenseByline license={getLicenseByAbbreviation('by-nc-nd')} />
          <div className="c-medialist__actions">
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Embed className="c-modal__button-icon" /> Bygg inn</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </div>
          <ul className="c-medialist__meta">
            <li className="c-medialist__meta-item">12. desember 2014 / Oppdatert...</li>
            <li className="c-medialist__meta-item">Opphavsperson: Ola Nordmann</li>
            <li className="c-medialist__meta-item">Rettighetshaver: Kari Nordmann</li>
            <li className="c-medialist__meta-item">Remikser:</li>
          </ul>

        </div>
      </li>
    </ul>
  </div>
);


const LearningPath = () => (
  <div>
    <h2>Slik bruker du Læringssti-innhold fra artikkelen</h2>
    <p>Klikk på lisensene for å se reglene.</p>
    <ul className="c-medialist">
      <li className="o-media c-medialist__item">
        <div className="o-media__img c-medialist__img">
          <a href="">
            <img width="260" alt="alt" src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&auto=format&fit=crop&w=1500&h=1124&q=80&cs=tinysrgb&crop=" />
          </a>
        </div>
        <div className="o-media__body c-medialist__body">
          <ClickableLicenseByline license={getLicenseByAbbreviation('by-nc-nd')} />
          <div className="c-medialist__actions">
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </div>
          <ul className="c-medialist__meta">
            <li className="c-medialist__meta-item">12. desember 2014 / Oppdatert...</li>
            <li className="c-medialist__meta-item">Remikser:</li>
          </ul>
        </div>
      </li>
      <li className="o-media c-medialist__item">
        <div className="o-media__img c-medialist__img">
          <a href="">
            <img width="260" alt="alt" src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&auto=format&fit=crop&w=1500&h=1124&q=80&cs=tinysrgb&crop=" />
          </a>
        </div>
        <div className="o-media__body c-medialist__body">
          <ClickableLicenseByline license={getLicenseByAbbreviation('by-nc-nd')} />
          <div className="c-medialist__actions">
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </div>
          <ul className="c-medialist__meta">
            <li className="c-medialist__meta-item">12. desember 2014 / Oppdatert...</li>
            <li className="c-medialist__meta-item">Remikser:</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
);


const Files = () => (
  <div>
    <h2>Slik bruker du filer fra artikkelen</h2>
    <p>Klikk på lisensene for å se reglene.</p>
    <ul className="c-medialist">
      <li className="o-media c-medialist__item">
        <div className="o-media__img c-medialist__img">
          <a href="">
            <Icon.Document className="c-medialist__icon" />
          </a>
        </div>
        <div className="o-media__body c-medialist__body">
          <ClickableLicenseByline license={getLicenseByAbbreviation('by-nc-nd')} />
          <div className="c-medialist__actions">
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </div>
          <ul className="c-medialist__meta">
            <li className="c-medialist__meta-item">12. desember 2014 / Oppdatert...</li>
            <li className="c-medialist__meta-item">Opphavsperson: Ola Nordmann</li>
            <li className="c-medialist__meta-item">Rettighetshaver: Kari Nordmann</li>
            <li className="c-medialist__meta-item">Remikser:</li>
          </ul>
        </div>
      </li>
      <li className="o-media c-medialist__item">
        <div className="o-media__img c-medialist__img">
          <a href="">
            <Icon.Document className="c-medialist__icon" />
          </a>
        </div>
        <div className="o-media__body c-medialist__body">
          <ClickableLicenseByline license={getLicenseByAbbreviation('by-nc-nd')} />
          <div className="c-medialist__actions">
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </div>
          <ul className="c-medialist__meta">
            <li className="c-medialist__meta-item">12. desember 2014 / Oppdatert...</li>
            <li className="c-medialist__meta-item">Opphavsperson: Ola Nordmann</li>
            <li className="c-medialist__meta-item">Rettighetshaver: Kari Nordmann</li>
            <li className="c-medialist__meta-item">Remikser:</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
);

const LicenseExample = () => (
  <div className="c-licensebox license u-expanded">
    <Button stripped className="license-toggler site-nav_link" onClick={() => {}} >
      Lukk boks
    </Button>
    <div>
      <h1 className="license__heading">Hvordan gjenbruke innhold fra NDLA</h1>
      <p className="c-licensebox__introduction license__introduction">Alt innhold på NDLA har egne opphavsrettigheter. Disse må du ta hensyn til dersom du skal gjenbruke noe av dette innholdet utenfor ndla.no. Opphavsretten bestemmer hvordan du kan bruke innholdet, enten det skal publiseres, deles på internett, eller hvis noen skal tjene penger på det. Under kan du kan du se hvordan du kan bruke innholdet i fagstoff.</p>
      <Tabs
        tabs={[
            { key: 'image', displayName: 'Bilder', content: <ImageContent /> },
            { key: 'text', displayName: 'Tekst', content: <TextContent license={getLicenseByAbbreviation('by-nc-nd')} /> },
            { key: 'video', displayName: 'Video', content: <VideoContent /> },
            { key: 'audio', displayName: 'Lyd', content: <AudioContent /> },
            { key: 'h5p', displayName: 'H5P', content: <H5PContent /> },
            { key: 'learningPath', displayName: 'Læringssti', content: <LearningPath /> },
            { key: 'files', displayName: 'Filer', content: <Files /> },
            { key: 'sources', displayName: 'Kilder', content: <Files /> },
        ]}
      />
    </div>
  </div>
);

LicenseExample.propTypes = {};


export default LicenseExample;
