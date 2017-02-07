import React from 'react';

import { storiesOf } from '@kadira/storybook';

import Tabs from 'ndla-tabs';

import { PageContainer, Footer, Hero, OneColumn } from '../src';
import Masthead, { MastheadWithTopicMenu } from './molecules/mastheads';

import ArticleLoader from './article/ArticleLoader';

// Using for example alternative article
import article from '../dummydata/index';

const articleHTML = document.createElement('div');
articleHTML.innerHTML = article.article40.content[0].content;

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

const ResourcesTab1Content = () => (
  <div>
    <div className="c-article">
      <h3><button>Innføring i journalistikk</button></h3>
      <p>5 mins om the basics</p>
    </div>
    <div className="c-article">
      <h3><button>Innføring i journalistikk</button></h3>
      <p>5 mins om the basics</p>
    </div>
    <div className="c-article">
      <h3><button>Innføring i journalistikk</button></h3>
      <p>5 mins om the basics</p>
    </div>
    <p><button>Se alle læringsstier</button></p>
  </div>
);

const ResourcesTab1 = () => (
  <div className="c-resources_content u-margin-top-small u-margin-bottom">
    <div className="c-breadcrumbs u-margin-bottom">
      i <a to="#">Planteliv</a>{' > '}<a to="#">Cellebiologi</a>
    </div>

    <input type="text" placeholder="Søk etter" name="filter-text" value="" className="u-margin-bottom-small" />
    <Tabs
      tabs={[
        { displayName: 'Alle', content: <div><h2>Læringsstier</h2><ResourcesTab1Content /></div> },
        { displayName: 'Læringsstier', content: <p>Brukeroppgave-innhold</p> },
        { displayName: 'Fagstoff', content: <p>Brukeroppgave-innhold</p> },
        { displayName: 'Aktiviteter', content: <p>Brukeroppgave-innhold</p> },
        { displayName: 'Andre ressurser', content: <p>Brukeroppgave-innhold</p> },
      ]}
    />
  </div>
);

const ResourcesExample = () => (
  <div className="u-1/1 c-resources u-margin-top-large">
    <div className="o-wrapper">
      <Tabs
        tabs={[
          { displayName: 'Læringsressurser', content: <ResourcesTab1 /> },
        ]}
      />
    </div>
  </div>
);


storiesOf('Sidevisninger', module)
  .add('Empty page', () => (
    <PageContainer>
      <Masthead />
      <OneColumn>
        Empty Page
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('ArticlePage', () => (
    <PageContainer>
      <Masthead />
      <OneColumn>
        <article>
          <ArticleLoader articleId="44" />
        </article>
      </OneColumn>
      <FooterExample />

    </PageContainer>
  ))
  .add('ArticlePage with licensebox', () => (
    <PageContainer>
      <Masthead />
      <OneColumn>
        <article>
          <ArticleLoader articleId="44" withLicenseExample />
        </article>
      </OneColumn>
      <FooterExample />

    </PageContainer>
  ))
  .add('ArticlePage loader', () => (
    <PageContainer>
      <Masthead />
      <OneColumn>
        <ArticleLoader />
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('ArticlePage Preloaded', () => (
    <PageContainer>
      <Masthead />
      <OneColumn>
        <ArticleLoader articleId="34" />
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ));
storiesOf('Sidevisninger alternativ', module)
    .add('ArticlePage', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero url="https://images.unsplash.com/photo-1469082993720-0b12bbd9e68b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
        <OneColumn>
          <article>
            <div dangerouslySetInnerHTML={{ __html: articleHTML.outerHTML }} />
          </article>
        </OneColumn>
        <ResourcesExample />
        <FooterExample />
      </PageContainer>
    ));
