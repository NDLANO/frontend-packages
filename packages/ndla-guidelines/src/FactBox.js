/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import {
  LicenseByline,
  FactBox as FactBoxComponent,
} from '@ndla/ui';
import { BY, NC, ND } from '@ndla/licenses';

export const FactBox = () => (
  <Fragment><div>
    <p>En faktaboks kan inneholde punktlister eller korte fakta som er relevant for artikkelens innhold. Det anbefales å ikke ha for mye innhold i faktaboks, slik at lese-konteksten i størst mulig grad beholdes.</p>
    <p>Faktaboksen kan også brukes til å oppsummere innhold i slutten av en artikkel, og den kan inneholde lisensiering om eksternt innhold er brukt.</p>
  </div>
  <h6>Eksempel på bruk:</h6>
  <FactBoxComponent>
          <h2>Faktaboks eksempel</h2>
          <p>
            Eksempel på en faktaboks. Sammen med punktliste kan dette være en effektiv måte å sammenfatte korte fakta fra artikkelen eller som tilleggsinformasjon.
          </p>
          <ol>
            <li>
              Kan være et fint supplement på slutten av en lengre artikkel.
            </li>
            <li>
              Unngå for mye innhold i en faktaboks.
            </li>
            <li>
              Lisensiering er valgfritt, men nyttig når man feks har hentet tilleggsinformasjon til artikkelen fra eksterne ressurser.
            </li>
          </ol>
          <div className="c-source-list">
            <LicenseByline
              className="c-source-list__item"
              licenseRights={[BY, NC, ND]}
            />
            <span className="c-source-list__item">Gary Waters</span>
            <span className="c-source-list__item">Kilde: SNL.no</span>
          </div>
        </FactBoxComponent></Fragment>
);