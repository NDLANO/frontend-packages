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
  <article className="o-wrapper--narrow">
    <section className="c-article-content">
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Alle fag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Medieuttrykk og Helsearbeiderfag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Mediekommunikasjon </a> &#x203A;
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
  <article className="o-wrapper--narrow">
    <section className="c-article-content">
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Fag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Medieuttrykk og Helsearbeiderfag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Mediekommunikasjon </a>
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
  <article className="o-wrapper--narrow">
    <section className="c-article-content">
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Fag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Medieuttrykk og Helsearbeiderfag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Mediekommunikasjon </a>&#x203A; <a href="" className="c-breadcrumbs__item">Fjerde nivå med en veldig kjempelang tittel </a>
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
  <article className="o-wrapper--narrow">
    <section className="c-article-content">
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Fag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Medieuttrykk og Helsearbeiderfag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Mediekommunikasjon </a>
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
  <article className="o-wrapper--narrow">
    <section className="c-article-content">
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Fag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Medieuttrykk og Helsearbeiderfag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Mediekommunikasjon </a>
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
  <ArticleLoader articleId="5948" isTopicArticle notitle />
);

const SubTopicHero = () => (
  <div className="c-hero__content">
    <section>
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Fag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Helsearbeiderfag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Kommunikasjon for fagarbeideren</a> &#x203A;
      </div>
      <h1 className="c-hero__title">Profesjonell kommunikasjon</h1>
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
      <h1 className="c-hero__title">Helsearbeiderfag</h1>
    </section>
  </div>
);


const Hovedemne = () => (
  <div className="c-hero__content">
    <section>
      <div id="breadcrumbs" className="c-breadcrumbs">
        <strong>Du er her:</strong>
        <a href="" className="c-breadcrumbs__item">Fag</a> &#x203A; <a href="" className="c-breadcrumbs__item">Helsearbeiderfag</a> &#x203A;
      </div>
      <h1 className="c-hero__title">Kommunikasjon for fagarbeideren</h1>
    </section>
  </div>
);

const HovedemneExpanded = () => (
  <ArticleLoader articleId="1325" isTopicArticle notitle />
);

const ResourcesTopics = () => (
  <div className="c-resources u-margin-top-large">
    <OneColumn cssModifier="narrow">
      <section>
        <Tabs
          tabs={[
            { key: '1', displayName: 'Emner', content: <TopicIntroductionList toTopic={() => '#'} topics={topicListWithIntro} subjectId="1" /> },
            { key: '2', displayName: 'Fagstoff', content: <TopicIntroductionListFlag toTopic={() => '#'} topics={topicListWithIntro} subjectId="1" /> },
          ]}
        />
      </section>
    </OneColumn>
  </div>
);

const ResourcesSubTopics = () => (
  <div className="c-resources u-margin-top-large">
    <OneColumn cssModifier="narrow">
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
      <OneColumn cssModifier="narrow">
        <ArticleLoader articleId="44" />
      </OneColumn>
      <FooterExample />

    </PageContainer>
  ))
  .add('ArticlePage with licensebox', () => (
    <PageContainer>
      <Masthead />
      <OneColumn cssModifier="narrow">
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
      <OneColumn cssModifier="narrow">
        <ArticleLoader articleId="34" />
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('Emneside', () => (
    <PageContainer>
      <Masthead />
      <OneColumn cssModifier="narrow">
        <ArticleLoader isTopicArticle articleId="208" />
      </OneColumn>
      <ResourcesTopics />
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
    .add('1. Fagoversikt', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <div className="c-resources u-padding-top-large">
          <OneColumn cssModifier="narrow">
            <article>
              <section>
                <h1>Yrkesfag</h1>
                <ul>
                  <li><a href="">Naturfag</a></li>
                  <li><a href="">Engelsk</a></li>
                  <li><a href="">Helsearbeiderfag vg2</a></li>
                  <li><a href="">Barne- og ungdomsarbeiderfag Vg2</a></li>
                  <li><a href="">Brønnteknikk Vg2BETA</a></li>
                  <li><a href="">Bygg- og anleggsteknikk Vg1BETA</a></li>
                  <li><a href="">Design og håndverk Vg1</a></li>
                  <li><a href="">Elektrofag Vg1</a></li>
                  <li><a href="">Helse- og oppvekstfag Vg1</a></li>
                  <li><a href="">Helsearbeiderfag Vg2</a></li>
                  <li><a href="">IKT-servicefag Vg2</a></li>
                  <li><a href="">Kokk- og servitørfag Vg2</a></li>
                  <li><a href="">Naturbruk Vg1</a></li>
                  <li><a href="">Reiseliv Vg2</a></li>
                  <li><a href="">Restaurant- og matfag Vg1</a></li>
                  <li><a href="">Romteknologi Vg3</a></li>
                  <li><a href="">Salg, service og sikkerhet Vg2</a></li>
                  <li><a href="">Service og samferdsel Vg1</a></li>
                  <li><a href="">Teknikk og industriell produksjon Vg1</a></li>
                  <li><a href="">Transport og logistikk Vg2</a></li>
                </ul>
              </section>
            </article>
          </OneColumn>
        </div>
        <FooterExample />
      </PageContainer>
    ))
    .add('2. Valgt fag', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero>
          <OneColumn cssModifier="narrow">
            <Fagside />
          </OneColumn>
        </Hero>
        <ResourcesTopics />
        <FooterExample />
      </PageContainer>
    ))
    .add('3. Hovedemne', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero>
          <OneColumn cssModifier="narrow">
            <Hovedemne />
          </OneColumn>
        </Hero>
        <OneColumn cssModifier="narrow">
          <HovedemneExpanded />
        </OneColumn>
        <ResourcesSubTopics />
        <FooterExample />
      </PageContainer>
    ))
    .add('4. Underemne med fagstoff', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero>
          <OneColumn cssModifier="narrow">
            <SubTopicHero />
          </OneColumn>
        </Hero>
        <OneColumn cssModifier="narrow">
          <SubTopicExample />
        </OneColumn>
        <ResourcesExample />
        <FooterExample />
      </PageContainer>
    ))
    ;
