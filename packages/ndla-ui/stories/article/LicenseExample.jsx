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

import { Icon, Button, LicenseByline } from '../../src';

const CiteContent = () => (
  <div>
    <p>
      Når du siterer tekster fra NDLA må du vise hvor du har funnet dem og hvem som har laget dem.
      Hvis du skriver en egen tekst plasserer du referansen på den siste siden. Slik siterer du denne teksten: </p>
    <div >
      <div className="c-bodybox">
        <span>Ola Nordmann Kari Nordmann. &laquo;Fortelleteknikk i radio og podkast&raquo;. 11.03.2013.. Nasjonal Digital Læringsarena. Internett. &lt;http://ndla.no/article/124&gt; 24.12.2016.</span>
      </div>
    </div>
    <p>Vil du vite mer om referanser og hvordan man siterer kan du <a href="http://sokogskriv.no">gå til Søk & Skriv</a>.</p>
  </div>
);


const TextContent = () => (
  <div>
    <ul className="c-downloadable-list">
      <li className="c-downloadable-list__item"><a href={document.location.href}>Last ned som word-dokument (.docx)</a></li>
      <li className="c-downloadable-list__item"><a href={document.location.href}>Last ned som rentekst (.txt)</a></li>
      <li className="c-downloadable-list__item"><a href={document.location.href}>Last ned som HTML</a></li>
    </ul>
  </div>
);

const ArticleContent = ({ license }) => (
  <div>
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
  </div>
);

ArticleContent.propTypes = {
  license: LicenseShape,
};

const AudioContent = () => (
  <div>
    <h2>Du kan laste ned, eller innbygge innhold fra NDLA på ditt eget nettsted</h2>
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
    <h2>Du kan laste ned, eller innbygge innhold fra NDLA på ditt eget nettsted</h2>
    <ul className="license__list">
      <li className="license__list-item">
        <ul className="license__list">
          <li className="license__list-item">
            <img alt="alt" src="http://api.test.ndla.no/images/full/nokken_ny_1.jpg" />
            <LicenseByline license={getLicenseByAbbreviation('by-nc-nd')} >
              Fotograf: Ola Nordmann, Kari Nordmann
              <div><a target="_blank" rel="noopener noreferrer" href="http://api.test.ndla.no/images/full/nokken_ny_1.jpg">Åpne bilde i stort format</a></div>
            </LicenseByline>
          </li>
          <li className="license__list-item">
            <img alt="alt" src="http://api.test.ndla.no/images/full/sy020cc5.jpg" />
            <LicenseByline license={getLicenseByAbbreviation('by-nc-nd')} >
              Fotograf: Ola Nordmann, Kari Nordmann
              <div><a target="_blank" rel="noopener noreferrer" href="http://api.test.ndla.no/images/full/sy020cc5.jpg">Åpne bilde i stort format</a></div>
            </LicenseByline>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

const LicenseExample = () => (
  <div className="license u-expanded">
    <Button stripped className="license-toggler site-nav_link" onClick={() => {}} >
        Lukk boks
      </Button>
    <LicenseByline license={getLicenseByAbbreviation('by-nc-nd')}>
      <span className="article_meta">Ola Nordmann, Kari Nordmann. Publisert: 10.10.2010.</span>
    </LicenseByline>
    <div>
      <h1 className="license__heading">Regler for gjenbruk av fagstoff på NDLA</h1>
      <p className="license__introduction">Alt innhold på NDLA har egne opphavsrettigheter. Disse må du ta hensyn til dersom du skal gjenbruke noe av dette innholdet utenfor ndla.no. Opphavsretten bestemmer hvordan du kan bruke innholdet, enten det skal publiseres, deles på internett, eller hvis noen skal tjene penger på det. Under kan du kan du se hvordan du kan bruke innholdet i fagstoff.</p>
      <Tabs
        tabs={[
            { key: 'image', displayName: 'Bilder', content: <ImageContent /> },
            { key: 'article', displayName: 'Artikkel', content: <ArticleContent license={getLicenseByAbbreviation('by-nc-nd')} /> },
            { key: 'audio', displayName: 'Lyd', content: <AudioContent /> },
            { key: 'text', displayName: 'Tekst', content: <TextContent /> },
            { key: 'cite', displayName: 'Sitere', content: <CiteContent /> },
        ]}
      />
    </div>
  </div>
);

LicenseExample.propTypes = {};


export default LicenseExample;
