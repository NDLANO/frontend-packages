/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@kadira/storybook';
import Tabs from 'ndla-tabs';
import { CC, BY, NC, ND, SA } from 'ndla-licenses';

import { Center, DottedContainer } from './helpers';
import { SiteNav, SiteNavItem, Masthead, MastheadItem, Logo, Pager, Footer, LicenseIconList } from '../src';

storiesOf('Sammensatte moduler', module)
  .add('Logo', () => (
    <Center>
      <section className="c-factbox">

        <h1 className="u-heading">Logo</h1>
        <p>
          Logoen er vårt tydeligste kjennetegn og vårt viktigste verktøy
          for kommunikasjon. Den skal inspirere målgruppen elever og
          lærere i videregående opplæring og gjøre dem nysgjerrige på
          NDLA.
        </p>
        <p>
          Logoen består av navnet NDLA i en spesiell typografi og bør hovedsakelig benyttes sammen med underteksten.
          Logo uten undertekst kan benyttes i tilfeller der det
          kommer godt fram andre steder hvem NDLA er, eksempelvis på ndla.no.
        </p>
        <p>
          Logo uten undertekst kan kompletteres med en beskrivende tekst
          til høyre. Logoen benyttes i svart eller hvitt avhengig av
          bakgrunn. Den skal plasseres i det øverste eller nederste
          hjørnet av en ytterkant. Logoen skal ikke sentreres.
        </p>
      </section>
      <Logo name to="#" altText="Nasjonal digital læringsarena" />
    </Center>
  ))
  .add('Sammensatte noder', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Sammensatte fagressurser</h1>
      </section>
      <section>
        <section>
          <p>Plikten til forsvarlighet i helsepersonelloven innebærer at «helsepersonell eller virksomheter som yter helsehjelp har et helhetlig ansvar for pasienten. Dette inkluderer ansvar for å gi adekvate medisinske, behandlingsmessige og <strong>ernæringsmessige</strong> tiltak, samt ansvar for å gi pasienten god omsorg».</p>
          <p>
            Ved internkontroll skal det sikres at tilbudet til pasientene er i samsvar med regelverket. Internkontroll skal bidra til faglig forsvarlige sosial- og helsetjenester, og er et verktøy som skal sikre at daglige arbeidsoppgaver blir utført, styrt og forbedret i henhold til lovens krav. Dette er særlig viktig på områder der svikt kan få alvorlige følger.

            Kilde: <em>Nasjonale faglige retningslinjer for forebygging og behandling av underernæring og internkontroll i helsetjenesten</em>. Helsedirektoratet
          </p>
        </section>
        <section>
          <h3>Utfordringer til deg:</h3>
          <ol><details><summary>Oppgaver til  "Ansvar og regelverk. Ernæring"</summary>
            <ol>
              <li>Beskriv hva internkontroll er.</li>
              <li>Skriv ned noen forslag  på hvordan man kan sikre at pasienter får dekket sine behov for ernæring. Ta gjerne utgangspunkt i en arbeidsplass. Diskuter deretter i klassen.</li>
            </ol>
          </details></ol>
        </section>
      </section>
    </Center>
  ))
  .add('Sidenavigasjon', () => (
    <Center>
      <DottedContainer>
        <SiteNav>
          <SiteNavItem to="#">Velg fag</SiteNavItem>
          <SiteNavItem to="#">Søk</SiteNavItem>
          <SiteNavItem to="#">Kontakt</SiteNavItem>
          <SiteNavItem to="#">Hjelp</SiteNavItem>
        </SiteNav>
      </DottedContainer>
    </Center>
  ))
  .add('Hovedhode', () => (
    <Center>
      <Masthead>
        <MastheadItem left>Left</MastheadItem>
        <MastheadItem right>Right</MastheadItem>
      </Masthead>
    </Center>
  ))
  .add('Hovedhode med logo og Sidenavigasjon', () => (
    <Center>
      <Masthead>
        <MastheadItem left>
          <Logo to="#" altText="Nasjonal digital læringsarena" />
        </MastheadItem>
        <MastheadItem right>
          <SiteNav>
            <SiteNavItem onClick={() => alert('clicked')}>Velg fag</SiteNavItem>
            <SiteNavItem to="#">Søk</SiteNavItem>
            <SiteNavItem to="#">Kontakt</SiteNavItem>
            <SiteNavItem to="#">Hjelp</SiteNavItem>
          </SiteNav>
        </MastheadItem>
      </Masthead>
    </Center>
  ))
  .add('Paginering', () => (
    <Center>
      <Pager page={3} lastPage={10} query={{ query: 'Medier' }} pathname="#" />
      <Pager page={4} lastPage={4} query={{ query: 'Medier' }} pathname="#" />
      <Pager page={1} lastPage={3} query={{ query: 'Medier' }} pathname="#" />
      <Pager page={3} lastPage={3} query={{ query: 'Medier' }} pathname="#" />
      <Pager page={1} lastPage={1} query={{ query: 'Medier' }} pathname="#" />
    </Center>
  ))
  .add('Sidefot', () => (
    <Center>
      <Footer>
        <div className="footer_form">
          <label htmlFor="language-select" className="footer_label footer--bold">Velg språk</label>
          <select id="language-select" className="footer_language-select">
            <option value="Norsk">Norsk</option>
            <option value="English">English</option>
          </select>
        </div>
        <Footer.Ruler />
        <Footer.Text>
          <Footer.Editor title="Ansvarlig redaktør:" name=" Øivind Høines" />
          <Footer.Editor title="Utgaveansvarlig:" name="Pål Frønsdal" />
        </Footer.Text>
        <Footer.Text>Nettstedet er utarbeidet av NDLA som åpen kildekode.</Footer.Text>
      </Footer>
    </Center>
  ))
  .add('Lisens ikonstripe', () => (
    <Center>
      <h2 className="u-heading">Lisens ikon stripe</h2>
      <LicenseIconList licenseRights={[BY, SA]} />
      <LicenseIconList licenseRights={[BY, NC, SA]} />
      <LicenseIconList licenseRights={[BY, NC, ND]} />
      <h2 className="u-heading">Lisens ikon stripe med et frehevet ikon</h2>
      <LicenseIconList licenseRights={[BY, SA]} activeLicenseRight={CC} />
      <LicenseIconList licenseRights={[BY, NC, SA]} activeLicenseRight={NC} />
      <LicenseIconList licenseRights={[BY, NC, ND]} activeLicenseRight={ND} />
      <h2 className="u-heading">Klikbar lisens ikon stripe</h2>
      <LicenseIconList licenseRights={[BY, NC, ND]} onLicenseIconClick={licenseRight => alert(`Klikket på: ${licenseRight.title}`)} />
    </Center>
  ))
  .add('Fane', () => (
    <Center>
      <Tabs
        tabs={[
          { key: 'image', displayName: 'Bilde', content: <p>Bilde innhold</p> },
          { key: 'video', displayName: 'Video', content: <p>Video innhold</p> },
          { key: 'audio', displayName: 'Lyd', content: <p>Lyd innhold</p> },
        ]}
      />
    </Center>
  ))
  ;
