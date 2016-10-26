import React from 'react';

import { storiesOf } from '@kadira/storybook';

import { SiteNav, SiteNavItem, Masthead, MastheadItem, Logo, Footer, OneColumn } from '../src';

const FooterExample = () => (
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
      <Footer.Editor title="Ansvarlig redaktør:" name="Øivind Høines" />
      <Footer.Editor title="Utgaveansvarlig:" name="Pål Frønsdal" />
    </Footer.Text>
    <Footer.Text>Nettstedet er utarbeidet av NDLA som åpen kildekode.</Footer.Text>
  </Footer>
);

const MastheadExample = () => (
  <Masthead>
    <MastheadItem left>
      <Logo to="#" altText="Nasjonal digital læringsarena" />
    </MastheadItem>
    <MastheadItem right>
      <SiteNav>
        <SiteNavItem to="#">Velg fag</SiteNavItem>
        <SiteNavItem to="#">Søk</SiteNavItem>
        <SiteNavItem to="#">Kontakt</SiteNavItem>
        <SiteNavItem to="#">Hjelp</SiteNavItem>
      </SiteNav>
    </MastheadItem>
  </Masthead>
);

storiesOf('Pages', module)
  .addWithInfo('Empty page', () => (
    <div>
      <MastheadExample />
      <OneColumn>
        Empty Page
      </OneColumn>
      <FooterExample />
    </div>
  ))
  ;
