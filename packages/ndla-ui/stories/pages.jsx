import React from 'react';

import { storiesOf } from '@kadira/storybook';

import Tabs from 'ndla-tabs';

// import { CC, BY, NC, ND, SA, getLicenseByAbbreviation } from 'ndla-licenses';

import Masthead, { MastheadWithTopicMenu } from './molecules/mastheads';

import { Footer, Hero, LicenseToggle, OneColumn, PageContainer, TopicIntroductionList, TopicIntroductionListFlag } from '../src';

import ArticleLoader from './article/ArticleLoader';

// Using for example alternative article
import article, { topicListWithIntro, subtopicListWithIntro } from '../dummydata/index';

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

const ResourcesTab1 = () => (
  <div className="c-resources_content u-margin-top-small u-margin-bottom">
    <div id="breadcrumbs" className="c-breadcrumbs u-margin-bottom">
      <a href="" className="c-breadcrumbs__item">Planteliv</a> &#x203A; <a href="" className="c-breadcrumbs__item">Cellebiologi</a>
    </div>

    <input type="text" placeholder="Søk etter" name="filter-text" value="" className="u-margin-bottom-small" />
    <Tabs
      tabs={[
        { displayName: 'Alle', content: <div><h2>Læringsstier</h2><TopicIntroductionListFlag toTopic={() => '#'} topics={topicListWithIntro} subjectId="1" /><a href="">Se flere artikler</a></div> },
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
          { displayName: 'Fagstoff', content: <ResourcesTab1 /> },
        ]}
      />
    </div>
  </div>
);


const ExamplePage1 = () => (
  <article className="o-wrapper--narrow-expandable">
    <section className="c-article-content">
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Alle fag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Medieuttrykk og mediesamfunnet</a> &#x203A; <a href="" className="c-breadcrumbs__item">Mediekommunikasjon </a> &#x203A;
      </div>
      <h1>Mediekommunikasjon og kommunikasjonsmodeller</h1>
      <p className="article_introduction">Du har en kjempegod idé til en kortfilm. Men det koster mange penger
         å produsere filmen.
      </p>
      <div className="c-article__byline">
        <p>Skrevet av [Opphavsperson]. Publisert [dato]</p>
      </div>
      <p>Du har en kjempegod idé til en kortfilm. Men det koster mange penger
        å produsere filmen. Derfor er du avhengig av at noen tenner på idéen
        din og bestemmer seg for å bruke ressurser på nettopp dette
      prosjektet.</p>
      <p>En pitch er en kortvarig framføring av en idé for en potensiell
        samarbeidspartner eller kunde. I løpet av noen få minutter skal du
      få andre til å tenne på idéen din og se potensialet i den.</p>
      <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
        pitcher, blir idéen og historien i den filmen du planlegger å lage,
        tydeligere for både deg selv og dem du eventuelt jobber sammen med
      i klassen.</p>
      <LicenseToggle>
        <img
          src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1124&amp;q=80&amp;cs=tinysrgb&amp;crop="
          alt=""
        />
      </LicenseToggle>
      <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
         pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
           i klassen.</p>
    </section>
  </article>
);
const IdealExamplePage1 = () => (
  <article className="o-wrapper--narrow-expandable">
    <section className="c-article-content">
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Fag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Medieuttrykk og mediesamfunnet</a> &#x203A; <a href="" className="c-breadcrumbs__item">Mediekommunikasjon </a>
      </div>
      <h1>Tittel om pitching</h1>
      <p className="article_introduction">Du har en kjempegod idé til en kortfilm. Men det koster mange penger
         å produsere filmen.
      </p>
      <div className="c-article__byline">
        <p>Skrevet av [Opphavsperson]. Publisert [dato]</p>
      </div>
      <p>Du har en kjempegod idé til en kortfilm. Men det koster mange penger
         å produsere filmen. Derfor er du avhengig av at noen tenner på idéen
         din og bestemmer seg for å bruke ressurser på nettopp dette
         prosjektet.</p>
      <p>En pitch er en kortvarig framføring av en idé for en potensiell
         samarbeidspartner eller kunde. I løpet av noen få minutter skal du
          få andre til å tenne på idéen din og se potensialet i den.</p>
      <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
         pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
           i klassen.</p>
      <LicenseToggle>
        <img
          src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1124&amp;q=80&amp;cs=tinysrgb&amp;crop="
          alt=""
        />
      </LicenseToggle>
      <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
         pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
           i klassen.</p>
      <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
        pitcher, blir idéen og historien i den filmen du planlegger å lage,
         tydeligere for både deg selv og dem du eventuelt jobber sammen med
          i klassen.</p>
    </section>
  </article>
);
const ExamplePage2 = () => (
  <article className="o-wrapper--narrow-expandable">
    <section className="c-article-content">
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Fag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Medieuttrykk og mediesamfunnet</a> &#x203A; <a href="" className="c-breadcrumbs__item">Mediekommunikasjon </a>&#x203A; <a href="" className="c-breadcrumbs__item">Fjerde nivå med en veldig kjempelang tittel </a>
      </div>
      <h1>Mediekommunikasjon og kommunikasjonsmodeller</h1>
      <p className="article_introduction">Du har en kjempegod idé til en kortfilm. Men det koster mange penger
         å produsere filmen.
      </p>
      <div className="c-article__byline">
        <p>Skrevet av [Opphavsperson]. Publisert [dato]</p>
      </div>
      <p>Du har en kjempegod idé til en kortfilm. Men det koster mange penger
        å produsere filmen. Derfor er du avhengig av at noen tenner på idéen
        din og bestemmer seg for å bruke ressurser på nettopp dette
      prosjektet.</p>
      <p>En pitch er en kortvarig framføring av en idé for en potensiell
        samarbeidspartner eller kunde. I løpet av noen få minutter skal du
      få andre til å tenne på idéen din og se potensialet i den.</p>
      <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
        pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
           i klassen.</p>
      <LicenseToggle>
        <iframe
          width="480"
          height="270"
          src="https://www.youtube.com/embed/f9VriNNRn0U?feature=oembed"
          frameBorder="0"
          allowFullScreen=""
        />
      </LicenseToggle>
      <p>En pitch er en kortvarig framføring av en idé for en potensiell
         samarbeidspartner eller kunde. I løpet av noen få minutter skal du
          få andre til å tenne på idéen din og se potensialet i den.</p>
      <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
         pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
           i klassen.</p>
    </section>
  </article>
);

const ExamplePage3 = () => (
  <article className="o-wrapper--narrow-expandable">
    <section className="c-article-content">
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Fag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Medieuttrykk og mediesamfunnet</a> &#x203A; <a href="" className="c-breadcrumbs__item">Mediekommunikasjon </a>
      </div>
      <h1>Tittel om pitching</h1>
      <p className="article_introduction">Du har en kjempegod idé til en kortfilm. Men det koster mange penger
         å produsere filmen.
      </p>
      <div className="c-article__byline">
        <p>Skrevet av [Opphavsperson]. Publisert [dato]</p>
      </div>
      <p>Du har en kjempegod idé til en kortfilm. Men det koster mange penger
        å produsere filmen. Derfor er du avhengig av at noen tenner på idéen
        din og bestemmer seg for å bruke ressurser på nettopp dette
      prosjektet.</p>
      <p>En pitch er en kortvarig framføring av en idé for en potensiell
        samarbeidspartner eller kunde. I løpet av noen få minutter skal du
      få andre til å tenne på idéen din og se potensialet i den.</p>
      <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
        pitcher, blir idéen og historien i den filmen du planlegger å lage,
        tydeligere for både deg selv og dem du eventuelt jobber sammen med
      i klassen.</p>
      <table className="c-table o-wrapper--wide">
        <tbody>
          <tr>
            <th>Hovedkategorier</th>
            <th>Sjangre</th>
            <th>Kjennetegn</th>
          </tr>
          <tr>
            <td><strong>Subjektive sjangre</strong></td>
            <td>Leder</td>
            <td>
              <ul>
                <li>skrives ofte av en av redaktørene </li>
                <li>er redaksjonens syn på en sak </li>
                <li>står ofte på side 2 eller på egen meningsside</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td />
            <td>Anmeldelse</td>
            <td>
              <ul>
                <li>en av journalistenes mening om en ny film, bok, konsert e.l. </li>
                <li>skal være en bruksanvisning slik at målgruppen vet om produktet er noe for dem</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td />
            <td>Leserinnlegg og kommentarfelt</td>
            <td>
              <ul>
                <li>lar den enkelte mottaker komme med sitt syn på en sak</li>
                <li>leserinnlegg i avis, kommentarfelt på nett </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td />
            <td>Kommentar og kronikk</td>
            <td>
              <ul>
                <li>kan skrives av en i redaksjonen, men gjerne også av en
                fagperson utenfor redaksjonen </li>
                <li>skal gi dybdekunnskap om et tema </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Objektive sjangre</strong></td>
            <td>Nyhetsartikkel</td>
            <td>
              <ul>
                <li>kort, konsis, svarer på grunnleggende spørsmål</li>
                <li>det viktigste først </li>
                <li>lar kildene komme til orde</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td />
            <td>Nyhetsreportasje</td>
            <td>
              <ul>
                <li>går gjerne mer i dybden enn en nyhetsartikkel </li>
                <li>bruker flere kilder </li>
                <li>har fokus på bakgrunn og årsak</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td />
            <td>Intervju</td>
            <td>
              <ul>
                <li>enkelt oppsett med spørsmål og svar </li>
                <li>brukes gjerne som en del av en nyhetsreportasje eller artikkel</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td />
            <td>Notis</td>
            <td>
              <ul>
                <li>kort nyhetsmelding som gir grunnleggende informasjon om en
                aktuell hendelse</li>
                <li>gjerne bare 10–15 setninger</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Hybridsjangre</strong></td>
            <td>Feature</td>
            <td>
              <ul>
                <li>hører til i objektiv-kategorien, men journalisten bruker
                alle sanser og litterære virkemidler </li>
                <li>går i dybden, gir leseren en større forståelse av et
                tema</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td />
            <td>Portrettintervju</td>
            <td>
              <ul>
                <li>hører til i objektiv-kategorien, men journalisten bruker
                   alle sanser og litterære virkemidler </li>
                <li>gir leseren dybdekunnskap om en aktuell person i
                    nyhetsbildet</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <p>En pitch er en kortvarig framføring av en idé for en potensiell
         samarbeidspartner eller kunde. I løpet av noen få minutter skal du
          få andre til å tenne på idéen din og se potensialet i den.</p>
      <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
         pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
           i klassen.</p>
    </section>
  </article>
);

const ExamplePage4 = () => (
  <article className="o-wrapper--narrow-expandable">
    <section className="c-article-content">
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Fag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Medieuttrykk og mediesamfunnet</a> &#x203A; <a href="" className="c-breadcrumbs__item">Mediekommunikasjon </a>
      </div>
      <h1>Tittel om pitching</h1>
      <p className="article_introduction">Du har en kjempegod idé til en kortfilm. Men det koster mange penger
         å produsere filmen.
      </p>
      <div className="c-article__byline">
        <p>Skrevet av [Opphavsperson]. Publisert [dato]</p>
      </div>
      <p>Du har en kjempegod idé til en kortfilm. Men det koster mange penger
        å produsere filmen. Derfor er du avhengig av at noen tenner på idéen
        din og bestemmer seg for å bruke ressurser på nettopp dette
      prosjektet.</p>
      <p>En pitch er en kortvarig framføring av en idé for en potensiell
        samarbeidspartner eller kunde. I løpet av noen få minutter skal du
      få andre til å tenne på idéen din og se potensialet i den.</p>
      <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
        pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
           i klassen.</p>
      <LicenseToggle>
        <iframe src="http://ndla.no/nb/h5p/embed/146132?fag=127756" width="260" height="373" frameBorder="0" allowFullScreen="allowfullscreen" /><script src="http://ndla.no/sites/all/modules/h5p/library/js/h5p-resizer.js?fag=127756" charSet="UTF-8" />
      </LicenseToggle>
      <p>En pitch er en kortvarig framføring av en idé for en potensiell
         samarbeidspartner eller kunde. I løpet av noen få minutter skal du
          få andre til å tenne på idéen din og se potensialet i den.</p>
      <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
         pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
           i klassen.</p>
    </section>
  </article>
);

const SubTopicExample = () => (
  <article>
    <section className="u-padding-top">
      <p className="article_introduction">Du har en kjempegod idé til en kortfilm. Men det koster mange penger
         å produsere filmen.
      </p>
      <div className="c-article__byline">
        <p>Skrevet av [Opphavsperson]. Publisert [dato]</p>
      </div>
      <p>Du har en kjempegod idé til en kortfilm. Men det koster mange penger
        å produsere filmen. Derfor er du avhengig av at noen tenner på idéen
        din og bestemmer seg for å bruke ressurser på nettopp dette
      prosjektet.</p>
      <p>En pitch er en kortvarig framføring av en idé for en potensiell
        samarbeidspartner eller kunde. I løpet av noen få minutter skal du
      få andre til å tenne på idéen din og se potensialet i den.</p>
      <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
        pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
           i klassen.</p>
      <LicenseToggle>
        <iframe src="http://ndla.no/nb/h5p/embed/146132?fag=127756" width="260" height="373" frameBorder="0" allowFullScreen="allowfullscreen" /><script src="http://ndla.no/sites/all/modules/h5p/library/js/h5p-resizer.js?fag=127756" charSet="UTF-8" />
      </LicenseToggle>
      <p>En pitch er en kortvarig framføring av en idé for en potensiell
         samarbeidspartner eller kunde. I løpet av noen få minutter skal du
          få andre til å tenne på idéen din og se potensialet i den.</p>
      <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
         pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
           i klassen.</p>
    </section>
  </article>
);

const SubTopicHero = () => (
  <div className="c-hero__content">
    <section>
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Fag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Mediesamfunnet</a> &#x203A; <a href="" className="c-breadcrumbs__item">Medibransjen</a> &#x203A;
      </div>
      <h1 className="c-hero__title">Tittel</h1>
    </section>
  </div>
);


const Fagside = () => (
  <div className="c-hero__content">
    <section>
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Fag</a> &#x203A;
      </div>
      <h1 className="c-hero__title">Mediesamfunnet</h1>
    </section>
  </div>
);

const FagsideExpanded = () => (
  <article>
    <section className="u-padding-top">
      <p>For å forstå verden rundt oss må vi vite hvordan mediene påvirker
         politiske prosesser og samspillet mellom individer, hvordan
          mediebransjen fungerer, og utfordringer den står overfor.
           Mediehistoria gir innsikt i hvordan tankemønstre og teknologi
            har lagt grunnlaget for det moderne samfunnet.
      </p>
      <LicenseToggle>
        <iframe
          width="480"
          height="270"
          src="http://api.istribute.com/video/ndlaseria/RBBM2bMl8cKnwC8OQAlrTq2hz2QDVG5D"
          frameBorder="0"
          allowFullScreen=""
        />
      </LicenseToggle>
    </section>
  </article>
);


const Hovedemne = () => (
  <div className="c-hero__content">
    <section>
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Fag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Mediesamfunnet</a> &#x203A;
      </div>
      <h1 className="c-hero__title">Mediebransjen</h1>
    </section>
  </div>
);

const HovedemneExpanded = () => (
  <article>
    <section className="u-padding-top">
      <p>Mediebransjen består av mange ulike yrker. I alle yrker er det lover og
         etiske retningslinjer som må følges. Krav til kunnskaper og ferdigheter
          varierer fra yrke til yrke, men til syvende og sist handler det om å
           kommunisere et budskap til en sluttbruker.</p>
      <p>Mediebransjen er en bransje i endring. De som jobber i denne bransjen,
         må derfor være villige til å forholde seg til ny teknologi, nye
          publiseringsplattformer og nye forretningsmodeller. Og kanskje aller
           viktigst: De må kunne jobbe sammen med andre fram mot en deadline.</p>
      <p>Å lage et medieprodukt handler om grundig planlegging, utforming i tråd
         med gjeldende krav, og å dokumentere produksjonsprosessen.
      </p>
    </section>
  </article>
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
        <ArticleLoader articleId="44" />
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
  ))
  .add('Emneside', () => (
    <PageContainer>
      <Masthead />
      <OneColumn>
        <ArticleLoader isTopicArticle articleId="208" />
        <div className="c-resources u-margin-top-large">
          <Tabs
            tabs={[
              { key: '1', displayName: 'Emner', content: <TopicIntroductionList toTopic={() => '#'} topics={topicListWithIntro} subjectId="1" /> },
              { key: '2', displayName: 'Fagstoff', content: <TopicIntroductionListFlag toTopic={() => '#'} topics={topicListWithIntro} subjectId="1" /> },
            ]}
          />
        </div>
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  ;
storiesOf('Artikkelmaler', module)
    .add('Artikkel med bilde', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero url="https://images.unsplash.com/photo-1469082993720-0b12bbd9e68b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
        <OneColumn>
          <ExamplePage1 />
        </OneColumn>
        <ResourcesExample />
        <FooterExample />
      </PageContainer>
    ))
    .add('Artikkel med video', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero url="https://images.unsplash.com/photo-1469082993720-0b12bbd9e68b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
        <OneColumn>
          <ExamplePage2 />
        </OneColumn>
        <ResourcesExample />
        <FooterExample />
      </PageContainer>
    ))
    .add('Artikkel med tabell', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero url="https://images.unsplash.com/photo-1469082993720-0b12bbd9e68b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
        <OneColumn>
          <ExamplePage3 />
        </OneColumn>
        <ResourcesExample />
        <FooterExample />
      </PageContainer>
    ))
    .add('Artikkel med h5p', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero url="https://images.unsplash.com/photo-1469082993720-0b12bbd9e68b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
        <OneColumn>
          <ExamplePage4 />
        </OneColumn>
        <ResourcesExample />
        <FooterExample />
      </PageContainer>
    ))
    .add('Artikkel uten hero', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero />
        <OneColumn>
          <IdealExamplePage1 />
        </OneColumn>
        <ResourcesExample />
        <FooterExample />
      </PageContainer>
    ));

storiesOf('Emnesider', module)
    .add('0. Fagoversikt', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <div className="c-resources u-padding-top-large">
          <OneColumn cssModifier="narrow-expandable">
            <article>
              <section>
                <h1>Alle fag</h1>
                <ul>
                  <li><a href="">Naturfag</a></li>
                  <li><a href="">Engelsk</a></li>
                  <li><a href="">Mediesamfunnet</a></li>
                </ul>
              </section>
            </article>
          </OneColumn>
        </div>
        <FooterExample />
      </PageContainer>
    ))
    .add('1. Valgt fag', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero>
          <OneColumn cssModifier="narrow-expandable">
            <Fagside />
          </OneColumn>
        </Hero>
        <OneColumn cssModifier="narrow-expandable">
          <FagsideExpanded />
        </OneColumn>
        <div className="c-resources u-margin-top-large">
          <OneColumn cssModifier="narrow-expandable">
            <section>
              <Tabs
                tabs={[
                  { key: '1', displayName: 'Emner', content: <TopicIntroductionList toTopic={() => '#'} topics={subtopicListWithIntro} subjectId="1" /> },
                  { key: '2', displayName: 'Fagstoff', content: <TopicIntroductionListFlag toTopic={() => '#'} topics={topicListWithIntro} subjectId="1" /> },
                ]}
              />
            </section>
          </OneColumn>
        </div>
        <FooterExample />
      </PageContainer>
    ))
    .add('2. Hovedemne', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero>
          <OneColumn cssModifier="narrow-expandable">
            <Hovedemne />
          </OneColumn>
        </Hero>
        <OneColumn cssModifier="narrow-expandable">
          <HovedemneExpanded />
        </OneColumn>
        <div className="c-resources u-margin-top-large">
          <OneColumn cssModifier="narrow-expandable">
            <section>
              <Tabs
                tabs={[
                  { key: '1', displayName: 'Underemner', content: <TopicIntroductionList toTopic={() => '#'} topics={subtopicListWithIntro} subjectId="1" /> },
                  { key: '2', displayName: 'Fagstoff', content: <TopicIntroductionListFlag toTopic={() => '#'} topics={topicListWithIntro} subjectId="1" /> },
                ]}
              />
            </section>
          </OneColumn>
        </div>
        <FooterExample />
      </PageContainer>
    ))
    .add('3. Underemne med fagstoff', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero>
          <OneColumn cssModifier="narrow-expandable">
            <SubTopicHero />
          </OneColumn>
        </Hero>
        <OneColumn cssModifier="narrow-expandable">
          <SubTopicExample />
        </OneColumn>
        <ResourcesExample />
        <FooterExample />
      </PageContainer>
    ))
    ;
