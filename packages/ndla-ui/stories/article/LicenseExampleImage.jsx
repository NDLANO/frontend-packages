/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { getLicenseByAbbreviation } from 'ndla-licenses';

import { LicenseByline } from '../../src';


const LicenseExampleImage = () => (
  <div className="license u-expanded">
    <LicenseByline license={getLicenseByAbbreviation('by-nc-nd')}>
      <span className="article_meta">Ola Nordmann, Kari Nordmann. Publisert: 10.10.2010.</span>
    </LicenseByline>

    <div className="u-padding-top u-text-center">
      <button className="c-button c-button--outline u-margin-bottom-small" type="button">Kopier bilde</button>
      <span className="u-padding u-mobilehide">eller</span>
      <button className="c-button c-button--outline u-margin-bottom-small" type="button">Åpne i nytt vindu</button>
    </div>
  </div>
);

LicenseExampleImage.propTypes = {};


export default LicenseExampleImage;
