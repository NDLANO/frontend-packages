import React from 'react';

import { storiesOf } from '@kadira/storybook';

import { SiteNav, PageContainer, SiteNavItem, Masthead, MastheadItem, Logo, Footer, OneColumn } from '../src';

import article from '../dummydata/article40.json';
import ArticleLoader from './article/ArticleLoader';

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

storiesOf('Sidevisninger', module)
  .add('Empty page', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        Empty Page
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('ArticlePage', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        <article>
          <div dangerouslySetInnerHTML={{ __html: article.content[0].content }} />
        </article>
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('ArticlePage loader', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        <ArticleLoader />
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  ;
