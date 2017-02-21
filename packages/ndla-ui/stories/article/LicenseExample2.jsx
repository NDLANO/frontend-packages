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

import { Icon, Button, LicenseByline, ClickableLicenseByline } from '../../src';

const VideoContent = () => (
  <div>
    <h2>Slik bruker du videoer fra artikkelen</h2>
    <p>Klikk på lisensene for å se reglene. Husk å kopier teksten som skal legges ved bildet der du bruker det.</p>
    <ul className="license__list">
      <li className="license__list-item license_list--stacked">
        <iframe
          width="200"
          height="113"
          src="https://www.youtube.com/embed/f9VriNNRn0U?feature=oembed"
          frameBorder="0"
          allowFullScreen=""
        />
        <LicenseByline license={getLicenseByAbbreviation('by-nc-nd')} >
          Kopier denne teksten:<br />
          Fotograf: Ola Nordmann, Kari Nordmann<br />
          Rettighetshaver: NDLA
        </LicenseByline>
      </li>
    </ul>
  </div>
);


const TextContent = ({ license }) => (
  <div>
    <div>
      <h2>Slik bruker du denne teksten</h2>
    </div>
    <div>
      <ClickableLicenseByline stacked="true" license={license}>
        <span className="article_meta">Ola Nordmann, Kari Nordmann. Publisert: 10.10.2010.</span>
      </ClickableLicenseByline>
    </div>

    <div>
      <h2>Slik siterer du fra teksten</h2>
      <p>
        Når du siterer tekster fra NDLA må du vise hvor du har funnet dem og hvem som har laget dem.
        Hvis du skriver en egen tekst plasserer du denne referansen på den siste siden: </p>
    </div>
    <div className="c-bodybox">
      <span>Ola Nordmann Kari Nordmann. &laquo;Fortelleteknikk i radio og podkast&raquo;. 11.03.2013.. Nasjonal Digital Læringsarena. Internett. &lt;http://ndla.no/article/124&gt; 24.12.2016.</span>
    </div>

    <ul className="o-list--clean">
      <li className="o-list__item"><Icon.Download className="c-modal__button-icon u-margin-top" /> <a href={document.location.href}>Last ned artikkelen som word-dokument (.docx)</a></li>
      <li className="o-list__item"><Icon.Download className="c-modal__button-icon u-margin-top" /> <a href={document.location.href}>Last ned artikkelen som rentekst (.txt)</a></li>
      <li className="o-list__item"><Icon.Download className="c-modal__button-icon u-margin-top" /> <a href={document.location.href}>Last ned artikkelen som HTML</a></li>
    </ul>
  </div>
);

TextContent.propTypes = {
  license: LicenseShape,
};

const ArticleContent = ({ license }) => (
  <div>
    <div>
      <LicenseByline license={license} />
      <h3 className="license__heading">{license.title}</h3>
      <p>{license.description}</p>
    </div>
    <div className="license__publication-info c-bodybox">
      <ul className="license__list">
        <li className="license__list-item"><h4>Tittel:</h4> Fortelleteknikk i radio og podkast<br /></li>
        <li className="license__list-item"><h4>Opprettet:</h4> 10.10.2010. (Sist oppdatert 10.11.2014)</li>
      </ul>
      <ul className="license__list">
        <h4>Opphavspersoner</h4>
        <li className="license__list-item">Ola Nordmann (Forfatter)</li>
        <li className="license__list-item">Kari Nordmann (Forfatter)</li>
      </ul>
    </div>
  </div>
);

ArticleContent.propTypes = {
  license: LicenseShape,
};

const AudioContent = () => (
  <div>
    <h2>Slik bruker du lydfiler</h2>
    <ul className="license__list">
      <li className="license__list-item">
        <ul className="license__list">
          <li className="license__list-item">
            <LicenseByline license={getLicenseByAbbreviation('by-sa')} >
              <i>Lydklipp tittel 1</i> Ola Nordmann, Kari Nordmann
            </LicenseByline>
            <a href="http://api.test.ndla.no/audio/files/siri_knudsen_mars13.mp3" download><Icon.Download /></a>
          </li>
          <li className="license__list-item">
            <LicenseByline license={getLicenseByAbbreviation('by-sa')} >
              <i>Lydklipp tittel 2</i> Ola Nordmann, Kari Nordmann
            </LicenseByline>
            <a href="http://api.test.ndla.no/audio/files/siri_knudsen_mars13.mp3" download><Icon.Download /></a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

const ImageContent = () => (
  <div>
    <h2>Slik bruker du bilder fra artikkelen</h2>
    <p>Klikk på lisensene for å se reglene. Husk å kopier teksten som skal legges ved bildet der du bruker det.</p>
    <ul className="license__list">
      <li className="license__list-item license_list--stacked">
        <img width="200" alt="alt" src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&auto=format&fit=crop&w=1500&h=1124&q=80&cs=tinysrgb&crop=" />
        <LicenseByline license={getLicenseByAbbreviation('by-nc-nd')} >
          Kopier denne teksten:<br />
          Fotograf: Ola Nordmann, Kari Nordmann<br />
          Rettighetshaver: NDLA
          <div className="u-margin-top-small">
            <button className="c-button c-button--transparent c-button--small u-margin-right" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier bilde</button>
            <button className="c-button c-button--transparent c-button--small" type="button"><Icon.OpenWindow className="c-modal__button-icon" /> Åpne i nytt vindu</button>
          </div>
        </LicenseByline>
      </li>
      <li className="license__list-item license_list--stacked">
        <img width="200" alt="alt" src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&auto=format&fit=crop&w=1500&h=1124&q=80&cs=tinysrgb&crop=" />
        <LicenseByline license={getLicenseByAbbreviation('by-nc-nd')} >
            Kopier denne teksten:<br />
            Fotograf: Ola Nordmann, Kari Nordmann<br />
            Rettighetshaver: NDLA
            <div className="u-margin-top-small">
              <button className="c-button c-button--transparent c-button--small u-margin-right" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier bilde</button>
              <button className="c-button c-button--transparent c-button--small" type="button"><Icon.OpenWindow className="c-modal__button-icon" /> Åpne i nytt vindu</button>
            </div>
        </LicenseByline>
      </li>
    </ul>
  </div>
);

const LicenseExample = () => (
  <div className="license u-expanded">
    <Button stripped className="license-toggler site-nav_link" onClick={() => {}} >
      Lukk boks
    </Button>
    <div>
      <h1 className="license__heading">Hvordan gjenbruke innhold fra NDLA</h1>
      <p className="license__introduction">Alt innhold på NDLA har egne opphavsrettigheter. Disse må du ta hensyn til dersom du skal gjenbruke noe av dette innholdet utenfor ndla.no. Opphavsretten bestemmer hvordan du kan bruke innholdet, enten det skal publiseres, deles på internett, eller hvis noen skal tjene penger på det. Under kan du kan du se hvordan du kan bruke innholdet i fagstoff.</p>
      <Tabs
        tabs={[
            { key: 'flash', displayName: 'Flash', content: <ImageContent /> },
            { key: 'learningPath', displayName: 'Læringsti', content: <TextContent license={getLicenseByAbbreviation('by-nc-nd')} /> },
            { key: 'definitions', displayName: 'Begrep', content: <defintionsContent /> },
            { key: 'category', displayName: 'Emnea.', content: <AudioContent /> },
            { key: 'fagstoff', displayName: 'Fagstoff', content: <ImageContent /> },
            { key: 'attachment', displayName: 'Vedlegg', content: <ImageContent /> },
            { key: 'exercise', displayName: 'Oppgave', content: <ImageContent /> },
            { key: 'guide', displayName: 'Veiledning', content: <VideoContent /> },
        ]}
      />
    </div>
  </div>
);

LicenseExample.propTypes = {};


export default LicenseExample;
