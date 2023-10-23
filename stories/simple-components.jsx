import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';
import { BY, NC, ND } from '@ndla/licenses';
import { LicenseByline } from '@ndla/notion';
import { Aside, FactBox, OneColumn } from '@ndla/ui';
import { colors, fonts, spacing } from '@ndla/core';
import { Text } from '@ndla/typography';
import { StoryIntro, StoryBody } from './wrappers';
import FootnotesExample from './article/FootnotesExample';
import TreeStructureExample from './molecules/TreeStructureExample';

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

storiesOf('Components', module)
  .add('Fact box', () => (
    <div>
      <StoryIntro title="Faktaboks">
        <p>
          For alt nytt innhold på ndla.no skal ikke flytende høyrespalte benyttes. I stedet benytter vi faktabokser
          innenfor innholdsspalten.
        </p>
      </StoryIntro>
      <StoryBody>
        <h1 className="c-article__title">Eksempelartikkel</h1>
        <Text textStyle="ingress">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.
        </Text>
        <section>
          <p>
            Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du
            avhengig av at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
          <Aside narrowScreen>
            <h1>Høyrespalte</h1>
            <p>Høyrespalten skal fases ut.</p>
            <p>
              I en midlertidig fase under flytting av innhold fra gammelt til nytt nettsted kan høyrespalten likevel
              brukes. Innholdet skal etter hvert flyttes til hovedspalten. Fakta kan legges i en faktaboks, annet
              innhold kan bakes inn i artikkelteksten, eller slettes.
            </p>
            <p>Om artikkelen har et bilde under ingressen, må høyrespalten plasseres under denne.</p>
            <p>På mobil skal høyrespalten alltid havne på slutten av artikkelen.</p>
          </Aside>
        </section>
        <FactBox>
          <h2>Faktaboks</h2>
          <p>En faktaboks kan inneholde punktlister eller korte fakta som er relevant for artikkelens innhold.</p>
          <p>
            Det anbefales å ikke ha for mye innhold i faktaboks, slik at lese-konteksten i størst mulig grad beholdes.
          </p>
          <h2>Enkel tittel</h2>
          <p>
            Faktaboksen kan også brukes til å oppsummere innhold i slutten av en artikkel, og den kan inneholde
            lisensiering om eksternt innhold er brukt.
          </p>
          <SourceList>
            <LicenseByline locale="nb" marginRight color={colors.brand.grey} licenseRights={[BY, NC, ND]} />
            <span>Gary Waters</span>
            <span>Kilde: SNL.no</span>
          </SourceList>
        </FactBox>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
      </StoryBody>
    </div>
  ))
  .add('Expandable box', () => (
    <div>
      <StoryIntro title="Ekspanderbar boks" />
      <StoryBody>
        <details>
          <summary>Oppsummering av innhold</summary>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
        </details>
      </StoryBody>
    </div>
  ))
  .add('References', () => (
    <div>
      <StoryIntro title="Kildehenvisninger">
        <p>
          Kildehenvisninger benytter{' '}
          <a href="https://sokogskriv.no/kildebruk-og-referanser/referansestiler/apa-6th/">APA-stilen</a> for utlisting
          nederst på siden.
        </p>
        <p>
          I teksten brukes en enkel nummerering for å henvise til referanse. Tallet lenkes til den aktuelle referansen.
        </p>
        <p>I referanselisten nederst lenkes hver referanse igjen til hvor de opptrer i teksten.</p>
      </StoryIntro>
      <StoryBody>
        <FootnotesExample />
      </StoryBody>
    </div>
  ))
  .add('Tree structure component', () => (
    <div>
      <StoryIntro title="Trestruktur komponent">
        <p>Tree struktur</p>
      </StoryIntro>
      <OneColumn>
        <TreeStructureExample />
      </OneColumn>
    </div>
  ));
