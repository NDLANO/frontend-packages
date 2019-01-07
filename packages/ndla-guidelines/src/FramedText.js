/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import {
    LicenseByline,
  } from '@ndla/ui';
  import { BY, NC, ND } from '@ndla/licenses';

export const FramedText = () => (
  <div>
    <p>En boks i teksten kan brukes for å framheve noe av særlig interesse, annet enn sitat (som det fins egen sitatstil til).</p><p>
Boks i tekst bør ikke ha mer enn omtrent 40 ord eller 200 tegn</p>
<h6>Eksempel på bruk:</h6>
<div className="c-bodybox c-bodybox--extended">
            <p>En tekstboks som fyller spaltebredden.</p>
            <p>
              En tekstboks med eksternt innhold kan også ha lisensiering av
              innholdet.
            </p>
            <div className="c-source-list">
              <LicenseByline
                className="c-source-list__item"
                licenseRights={[BY, NC, ND]}
              />
              <span className="c-source-list__item">Gary Waters</span>
              <span className="c-source-list__item">Kilde: SNL.no</span>
            </div>
          </div>
  </div>
);