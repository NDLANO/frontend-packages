/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import Tabs from 'ndla-tabs';
import { getLicenseByAbbreviation } from 'ndla-licenses';

import { Icon, Button, LicenseByline } from '../../src';

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
            <LicenseByline
              license={getLicenseByAbbreviation('by-sa')}
            >
              <i>Lydklipp tittel 2</i>
            Ola Nordmann, Kari Nordmann
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
            <img alt="alt" src="http://api.test.ndla.no/images/full/nokken_ny_1.jpg" />
            <LicenseByline license={getLicenseByAbbreviation('by-nc-nd')} >
              Fotograf: Ola Nordmann, Kari Nordmann
              <div><a target="_blank" rel="noopener noreferrer" href="http://api.test.ndla.no/images/full/nokken_ny_1.jpg">Åpne bilde i stort format</a></div>
            </LicenseByline>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

const LicenseExample = ({ article }) => (
  <article className="article">
    <div className="license u-expanded">
      <Button stripped className="license-toggler site-nav_link" onClick={() => {}} >
        Lukk
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
            { key: 'article', displayName: 'Artikkel', content: <p>Artikkel</p> },
            { key: 'audio', displayName: 'Lyd', content: <AudioContent /> },
            { key: 'text', displayName: 'Tekst', content: <p>Tekst</p> },
            { key: 'cite', displayName: 'Sitere', content: <p>Sitere</p> },
          ]}
        />
      </div>
    </div>
  </article>
);

LicenseExample.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};


export default LicenseExample;
