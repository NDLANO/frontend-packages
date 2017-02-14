/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { getLicenseByAbbreviation } from 'ndla-licenses';

import { Button, LicenseByline } from '../../src';


const LicenseExampleImage = () => (
  <div className="license u-expanded">
    <Button stripped className="license-toggler site-nav_link" onClick={() => {}} >
        Lukk boks
      </Button>
    <LicenseByline license={getLicenseByAbbreviation('by-nc-nd')}>
      <span className="article_meta">Ola Nordmann, Kari Nordmann. Publisert: 10.10.2010.</span>
    </LicenseByline>

    <div className="u-padding-top u-text-center">
      <button className="c-button c-button--outline" type="button">Kopier bilde</button>
      <span className="u-padding u-1/1@mobile">eller</span>
      <button className="c-button c-button--outline" type="button">Åpne i nytt vindu</button>
    </div>
  </div>
);

LicenseExampleImage.propTypes = {};


export default LicenseExampleImage;
