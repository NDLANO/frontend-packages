import { FactBox } from '@ndla/ui';
import { BY, NC, ND } from '@ndla/licenses';
import { LicenseByline } from '@ndla/notion';
import { colors, fonts, spacing } from '@ndla/core';
import styled from '@emotion/styled';

const SourceList = styled.div`
  display: flex;
  border-top: 1px solid ${colors.brand.tertiary};
  padding-top: ${spacing.small};
  margin-top: ${spacing.small};
  color: ${colors.brand.grey};
  align-items: center;
  ${fonts.sizes('15px')};
  span {
    margin-right: ${spacing.small};
  }
`;

const FactBoxExample = () => (
  <FactBox>
    <h2>Faktaboks</h2>
    <p>En faktaboks kan inneholde punktlister eller korte fakta som er relevant for artikkelens innhold.</p>
    <p>Det anbefales å ikke ha for mye innhold i faktaboks, slik at lese-konteksten i størst mulig grad beholdes.</p>
    <h2>Enkel tittel</h2>
    <p>
      Faktaboksen kan også brukes til å oppsummere innhold i slutten av en artikkel, og den kan inneholde lisensiering
      om eksternt innhold er brukt.
    </p>
    <SourceList>
      <LicenseByline marginRight locale="nb" licenseRights={[BY, NC, ND]} />
      <span>Gary Waters</span>
      <span>Kilde: SNL.no</span>
    </SourceList>
  </FactBox>
);

export default FactBoxExample;
