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

const LicenseExampleImage = () =>
  <div className="license u-expanded">
    <div className="c-modal__license">
      <LicenseByline license={getLicenseByAbbreviation('by-nc-nd')}>
        <span className="article_meta">
          Ola Nordmann, Kari Nordmann. Publisert: 10.10.2010.
        </span>
      </LicenseByline>
    </div>
    <div className="c-modal__details">
      <div>
        <p>
          For å bruke denne videoen må du legge ved denne kildehenvisningen:
        </p>
        <div className="c-bodybox c-bodybox--attribute">
          <span>Video av: NDLA. Lisensinfo.</span>
        </div>
      </div>
    </div>
  </div>;

LicenseExampleImage.propTypes = {};

export default LicenseExampleImage;
