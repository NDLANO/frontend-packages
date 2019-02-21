import React from 'react';
import { FactBox } from '@ndla/ui';
import { LicenseByline, BY, NC, ND } from '@ndla/licenses';

const FactBoxExample = () => (
  <FactBox>
    <h2>Faktaboks</h2>
    <p>
      En faktaboks kan inneholde punktlister eller korte fakta som er relevant
      for artikkelens innhold.
    </p>
    <p>
      Det anbefales å ikke ha for mye innhold i faktaboks, slik at
      lese-konteksten i størst mulig grad beholdes.
    </p>
    <h2>Enkel tittel</h2>
    <p>
      Faktaboksen kan også brukes til å oppsummere innhold i slutten av en
      artikkel, og den kan inneholde lisensiering om eksternt innhold er brukt.
    </p>
    <div className="c-source-list">
      <LicenseByline
        className="c-source-list__item"
        appearances={['horizontal']}
        locale="nb"
        licenseRights={[BY, NC, ND]}
      />
      <span className="c-source-list__item">Gary Waters</span>
      <span className="c-source-list__item">Kilde: SNL.no</span>
    </div>
  </FactBox>
);

export default FactBoxExample;
