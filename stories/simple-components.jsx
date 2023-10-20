import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';
import { BY, NC, ND } from '@ndla/licenses';
import { LicenseByline } from '@ndla/notion';
import { Aside, FactBox, Logo, LayoutItem, OneColumn, CreatedBy } from '@ndla/ui';
import { colors, fonts, spacing } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { Text } from '@ndla/typography';
import { StoryIntro, StoryBody } from './wrappers';
import FigureImage from './article/FigureImage';
import FootnotesExample from './article/FootnotesExample';
import DrawerExample from './atoms/DrawerExample';
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
  .add('Text in frame', () => (
    <div>
      <StoryIntro title="Tekst i ramme">
        <p>
          Tekst i ramme kan brukes for å framheve noe av særlig interesse, annet enn sitat (som det fins egen sitatstil
          til).
        </p>
        <p>Tekst i ramme bør ikke ha mer enn omtrent 100 ord eller 500 tegn.</p>
      </StoryIntro>
      <StoryBody>
        <h1 className="c-article__title">Eksempelartikkel</h1>
        <Text textStyle="ingress">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.
        </Text>
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du avhengig
          av at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <LayoutItem layout="full">
          <div className="c-bodybox c-bodybox--extended">
            <p>En tekstboks som fyller spaltebredden.</p>
          </div>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
          <div className="c-bodybox c-bodybox--extended">
            <p>En boks med flytelementer</p>
            <FigureImage embedData={{ alt: '', align: 'right' }} />
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
          </div>
          <div className="c-bodybox c-bodybox--extended">
            <h2>
              Tekst i ramme fungerer <em>dårlig</em> med mye tekst.
            </h2>
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
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
          </div>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
        </LayoutItem>
        <LayoutItem layout="center">
          <p className="c-componentinfo__status-label--warn">Status: Inaktiv</p>
          <div className="c-bodybox">En tekstboks i midten av teksten som ikke fyller bredden.</div>
        </LayoutItem>
      </StoryBody>
    </div>
  ))
  .add('Use of links', () => (
    <div>
      <StoryIntro title="Bruk av lenker">
        <p>
          Lenker på <a href="//ndla.no">ndla.no</a> bruker den vanlige konvensjonen med underlinje. Lenker skal i
          hovedsak åpne seg i samme vindu (det vil si at vi bruker <code>target=&quot;_self&quot;</code> eller ingen
          target-attributt). Unntaket er hvis lenken inngår i et skjema eller læringssammenhengen gjør det er nødvendig
          at brukerne beholder vinduet eller fanen de står i. Når lenker går til et annet nettsted (eksterne lenker)
          skal disse alltid åpnes i ny fane
        </p>
        <p>
          Når det finnes flere kontekster til en lenke/node skal den ta konteksten/fag til det en stod i før en klikket
          seg videre, hvis ikke den finnes i samme, skal den ta primærkoblingen til noden. Dette gjelder både for
          relaterte artikler og interne lenker.
        </p>
        <p>
          Interne lenker blir styrt av html innstilling i nettleser (samme vindu eller ny fane) avhengig av koden som
          ligger der, brukerens/browserens preferanser skal styre
        </p>
      </StoryIntro>
      <StoryBody>
        <h2>Lenke som åpnes i nytt vindu</h2>
        <p>
          <SafeLink showNewWindowIcon to="https://api.ndla.no/" target="_blank">
            https://api.ndla.no/
          </SafeLink>
        </p>
        <p>
          <SafeLink showNewWindowIcon to="https://api.ndla.no/" target="_blank">
            NDLA API
          </SafeLink>
        </p>
      </StoryBody>
    </div>
  ))
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
  .add('Summary box', () => (
    <div>
      <StoryIntro title="Fasitboks" />
      <StoryBody>
        <details className="c-details--solution-box ">
          <summary>Vis fasit</summary>
          <div className="c-details__content">
            f(x) = x<sup>2</sup> + 10x - 20
            <FigureImage
              type="math"
              embedData={{
                caption: 'Eksempel på graf',
                alt: 'Matematisk graf',
              }}
            />
          </div>
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
  .add('Drawer', () => <DrawerExample />)

  .add('Logo', () => (
    <div>
      <StoryIntro title="Logo">
        <p>
          Logoen er vårt tydeligste kjennetegn og vårt viktigste verktøy for kommunikasjon. Den skal inspirere
          målgruppen elever og lærere i videregående opplæring og gjøre dem nysgjerrige på NDLA.
        </p>
        <p>
          Logoen består av navnet NDLA i en spesiell typografi og bør hovedsakelig benyttes sammen med underteksten.
          Logo uten undertekst kan benyttes i tilfeller der det kommer godt fram andre steder hva NDLA er, eksempelvis
          på ndla.no.
        </p>
        <p>
          Logo uten undertekst kan kompletteres med en beskrivende tekst til høyre. Logoen kan benyttes i blått, eller i
          svart eller hvitt avhengig av bakgrunn. Den skal plasseres i det øverste eller nederste hjørnet av en
          ytterkant. Logoen skal ikke sentreres.
        </p>
      </StoryIntro>
      <StoryBody>
        <h2>Logo uten url</h2>
        <Logo cssModifier="large" name label="Nasjonal digital læringsarena" />

        <h2>Logo med url</h2>
        <Logo cssModifier="large" name to="/" label="Nasjonal digital læringsarena" />
        <h2>Engelsk logo</h2>
        <Logo cssModifier="large" locale="en" name label="Norwegian digital learning arena" />
      </StoryBody>
    </div>
  ))
  .add('Prepared by', () => (
    <div>
      <StoryIntro title="Utarbeidet av">
        <p>
          LTI-versjoner av innhold fra NDLA skal vise denne teksten og logo i bunnen. "NDLA" og logoen lenker til
          ndla.no. "Artikkel" kan være en lenke til artikkelen på ndla.no om den fins. Begge lenker åpner som standard i
          ny fane men det kan overstyres med target-parameter.
        </p>
      </StoryIntro>
      <StoryBody>
        <h2>Uten artikkellenke</h2>
        <CreatedBy name={'Artikkelen'} description={'er utarbeidet av'} />
        <h2>Med artikkellenke</h2>
        <CreatedBy
          name={'Artikkelen'}
          description={'er utarbeidet av'}
          url="https://ndla.no/subject:26/topic:1:191103/topic:1:4352/resource:1:2052"
        />
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
