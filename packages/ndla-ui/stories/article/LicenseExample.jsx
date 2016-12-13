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

import { Button, LicenseByline } from '../../src';

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
            { key: 'image', displayName: 'Bilder', content: <p>Bilde</p> },
            { key: 'aricle', displayName: 'Artikkel', content: <p>Video</p> },
            { key: 'audio', displayName: 'Lyd', content: <p>Lyd</p> },
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
