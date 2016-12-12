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
      <Logo to="#" altText="Nasjonal digital læringsarena" />
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
