/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@kadira/storybook';
import Tabs from 'ndla-tabs';

import { Center, DottedContainer } from './helpers';
import { SiteNav, SiteNavItem, Masthead, MastheadItem, Logo, Pager, Footer } from '../src';

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
