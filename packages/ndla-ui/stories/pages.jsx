/* eslint max-len: 0 */
import React from 'react';

import { storiesOf } from '@storybook/react';

import { MastheadWithTopicMenu } from './molecules/mastheads';
import { ResourceSubsetList } from './molecules/resources';

import {
  Footer,
  Hero,
  OneColumn,
  PageContainer,
  ResourceWrapper,
  Icon,
  TopicIntroductionList,
  LayoutItem,
  TopicBreadcrumb,
} from '../src';

import ArticleLoader from './article/ArticleLoader';
import FigureWithLicense from './article/FigureWithLicense';

import article, { topicList, subjectList } from '../dummydata/index';

const articleHTML = document.createElement('div');
articleHTML.innerHTML = article.article40.content[0].content;

const FooterExample = () => (
  <Footer>
    <div className="footer_form">
      <label htmlFor="language-select" className="footer_label footer--bold">
        Velg språk
      </label>
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
    <Footer.Text>
      Nettstedet er utarbeidet av NDLA som åpen kildekode.
    </Footer.Text>
  </Footer>
);

const ArticleLearningmaterial = () => (
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title--icon"><Icon.Document />Test av bildeflyt</h1>
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger
          å produsere filmen.
        </p>
        <div className="c-article-byline">
          <span className="c-article-byline__flex">
            <span className="c-article-byline__icon">
              <Icon.User />
            </span>
            <span className="c-article-byline__authors">
            Skrevet av Ola Nordnes, Kari Nordnes, Jon Nordgubbe.
            </span>
          </span>
          <span className="c-article-byline__flex">
            <span className="c-article-byline__icon">
              <Icon.Time />
            </span>
            <span className="c-article-byline__date">
              Publisert 12/10/2016
            </span>
            <div className="license c-licensebox">
              <button className="c-button c-button--stripped c-article__license-toggler" type="button">
                Bruk artikkel
              </button>
            </div>
          </span>
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
        <FigureWithLicense classes="article_figure--float-left">
          <img
            alt="person med mange armer som gjør forskjellige ting samtidig. Foto."
            src="https://staging.api.ndla.no/image-api/v1/raw/2016_tk_prod-planlegger_utsnitt3.jpg"
          />
        </FigureWithLicense>
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger
          å produsere filmen. Derfor er du avhengig av at noen tenner på idéen
          din og bestemmer seg for å bruke ressurser på nettopp dette
          prosjektet.
        </p>
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell
          samarbeidspartner eller kunde. I løpet av noen få minutter skal du
          få andre til å
          {' '}
          <a href="#test">tenne på idéen din og se potensialet</a>
          {' '}
          i den.
        </p>
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell
          samarbeidspartner eller kunde. I løpet av noen få minutter skal du
          få andre til å tenne på idéen din og se potensialet i den.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
          i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
          i klassen.
        </p>
        <FigureWithLicense classes="article_figure--float-right">
          <img
            alt="person med mange armer som gjør forskjellige ting samtidig. Foto."
            src="https://staging.api.ndla.no/image-api/v1/raw/2016_tk_prod-planlegger_utsnitt3.jpg"
          />
        </FigureWithLicense>
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell
          samarbeidspartner eller kunde. I løpet av noen få minutter skal du
          få andre til å tenne på idéen din og se potensialet i den.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
          i klassen.
        </p>
        <ol className="c-footnotes">
          <li className="c-footnotes__item">
            <cite className="c-footnotes__cite">
              Likestilling kommer ikke av seg selv (2013), regjeringen.no Edition: , Publisher: Barne-, likestillings- og inkluderingsdepartmentet
            </cite>
          </li>
        </ol>
      </LayoutItem>
      <LayoutItem layout="extend">
        <ResourceSubsetList />
      </LayoutItem>
    </article>
  </OneColumn>
);

const ArticleAdditional = () => (
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title--icon"><Icon.Document />Tittel om pitching</h1>
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger
          å produsere filmen.
        </p>
        <div className="c-article-byline">
          <span className="c-article-byline__flex">
            <span className="c-article-byline__icon">
              <Icon.User />
            </span>
            <span className="c-article-byline__authors">
            Skrevet av Ola Nordnes, Kari Nordnes, Jon Nordgubbe.
            </span>
          </span>
          <span className="c-article-byline__flex">
            <span className="c-article-byline__icon">
              <Icon.Time />
            </span>
            <span className="c-article-byline__date">
              Publisert 12/10/2016
            </span>
            <div className="c-article-byline__additional">
              <Icon.Additional className="c-icon--20 u-margin-right-tiny" /> Tilleggsstoff
            </div>
            <div className="license c-licensebox">
              <button className="c-button c-button--stripped c-article__license-toggler" type="button">
                Bruk artikkel
              </button>
            </div>
          </span>
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger
          å produsere filmen. Derfor er du avhengig av at noen tenner på idéen
          din og bestemmer seg for å bruke ressurser på nettopp dette
          prosjektet.
        </p>
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell
          samarbeidspartner eller kunde. I løpet av noen få minutter skal du
          få andre til å tenne på idéen din og se potensialet i den.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
          i klassen.
        </p>
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
                  <li>
                    en av journalistenes mening om en ny film, bok, konsert e.l.
                    {' '}
                  </li>
                  <li>
                    skal være en bruksanvisning slik at målgruppen vet om produktet er noe for dem
                  </li>
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
                  <li>
                    kan skrives av en i redaksjonen, men gjerne også av en
                    fagperson utenfor redaksjonen{' '}
                  </li>
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
                  <li>
                    brukes gjerne som en del av en nyhetsreportasje eller artikkel
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td />
              <td>Notis</td>
              <td>
                <ul>
                  <li>
                    kort nyhetsmelding som gir grunnleggende informasjon om en
                    aktuell hendelse
                  </li>
                  <li>gjerne bare 10–15 setninger</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Hybridsjangre</strong></td>
              <td>Feature</td>
              <td>
                <ul>
                  <li>
                    hører til i objektiv-kategorien, men journalisten bruker
                    alle sanser og litterære virkemidler{' '}
                  </li>
                  <li>
                    går i dybden, gir leseren en større forståelse av et
                    tema
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td />
              <td>Portrettintervju</td>
              <td>
                <ul>
                  <li>
                    hører til i objektiv-kategorien, men journalisten bruker
                    alle sanser og litterære virkemidler{' '}
                  </li>
                  <li>
                    gir leseren dybdekunnskap om en aktuell person i
                    nyhetsbildet
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell
          samarbeidspartner eller kunde. I løpet av noen få minutter skal du
          få andre til å tenne på idéen din og se potensialet i den.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
          i klassen.
        </p>
      </LayoutItem>
      <LayoutItem layout="extend">
        <ResourceSubsetList />
      </LayoutItem>
    </article>
  </OneColumn>
);

const ArticleExercise = () => (
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title--icon"><Icon.Pencil />Tittel om pitching</h1>
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger
          å produsere filmen.
        </p>
        <div className="c-article-byline">
          <span className="c-article-byline__flex">
            <span className="c-article-byline__icon">
              <Icon.User />
            </span>
            <span className="c-article-byline__authors">
            Skrevet av Ola Nordnes, Kari Nordnes, Jon Nordgubbe.
            </span>
          </span>
          <span className="c-article-byline__flex">
            <span className="c-article-byline__icon">
              <Icon.Time />
            </span>
            <span className="c-article-byline__date">
              Publisert 12/10/2016
            </span>
            <div className="license c-licensebox">
              <button className="c-button c-button--stripped c-article__license-toggler" type="button">
                Bruk artikkel
              </button>
            </div>
          </span>
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger
          å produsere filmen. Derfor er du avhengig av at noen tenner på idéen
          din og bestemmer seg for å bruke ressurser på nettopp dette
          prosjektet.
        </p>
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell
          samarbeidspartner eller kunde. I løpet av noen få minutter skal du
          få andre til å tenne på idéen din og se potensialet i den.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
          i klassen.
        </p>
        <FigureWithLicense>
          <iframe
            src="http://ndla.no/nb/h5p/embed/146132?fag=127756"
            width="260"
            height="373"
            frameBorder="0"
            allowFullScreen="allowfullscreen"
          />
          <script
            src="http://ndla.no/sites/all/modules/h5p/library/js/h5p-resizer.js?fag=127756"
            charSet="UTF-8"
          />
        </FigureWithLicense>
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell
          samarbeidspartner eller kunde. I løpet av noen få minutter skal du
          få andre til å tenne på idéen din og se potensialet i den.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
          i klassen.
        </p>
      </LayoutItem>
      <LayoutItem layout="extend">
        <ResourceSubsetList />
      </LayoutItem>
    </article>
  </OneColumn>
);

const ResourcesSubTopics = () => (
  <LayoutItem layout="extend">
    <ResourceWrapper>
      <h1 className="c-resources__title">Emner</h1>
      <TopicIntroductionList toTopic={() => '#'} topics={topicList} />
    </ResourceWrapper>
  </LayoutItem>
);

storiesOf('Sidevisninger', module)
  .add('Empty page', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <OneColumn>
        Empty Page
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('ArticlePage', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <Hero red>
        <OneColumn>
          <div className="c-hero__content">
            <section>
              <TopicBreadcrumb
                toSubjects={() => '#'}
                subjectsTitle="Fag"
                subject={subjectList[1]}
                topicPath={topicList.slice(0, -1)}
                toTopic={() => '#'}
              />
            </section>
          </div>
        </OneColumn>
      </Hero>
      <ArticleLoader articleId="44" />
      <FooterExample />
    </PageContainer>
  ))
  .add('ArticlePage loader', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <Hero red>
        <OneColumn>
          <div className="c-hero__content">
            <section>
              <TopicBreadcrumb
                toSubjects={() => '#'}
                subjectsTitle="Fag"
                subject={subjectList[1]}
                topicPath={topicList.slice(0, -1)}
                toTopic={() => '#'}
              />
            </section>
          </div>
        </OneColumn>
      </Hero>
      <ArticleLoader />
      <FooterExample />
    </PageContainer>
  ))
  .add('ArticlePage Preloaded', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <Hero red>
        <OneColumn>
          <div className="c-hero__content">
            <section>
              <TopicBreadcrumb
                toSubjects={() => '#'}
                subjectsTitle="Fag"
                subject={subjectList[1]}
                topicPath={topicList.slice(0, -1)}
                toTopic={() => '#'}
              />
            </section>
          </div>
        </OneColumn>
      </Hero>
      <ArticleLoader articleId="34" />
      <FooterExample />
    </PageContainer>
  ));
storiesOf('Artikkelmaler', module)
  .add('Lærestoff', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <Hero red>
        <OneColumn>
          <div className="c-hero__content">
            <section>
              <TopicBreadcrumb
                toSubjects={() => '#'}
                subjectsTitle="Fag"
                subject={subjectList[1]}
                topicPath={topicList.slice(0, -1)}
                toTopic={() => '#'}
              />
            </section>
          </div>
        </OneColumn>
      </Hero>
      <ArticleLearningmaterial />
      <FooterExample />
    </PageContainer>
  ))
  .add('Oppgaver og aktiviteter', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <Hero green>
        <OneColumn>
          <div className="c-hero__content">
            <section>
              <TopicBreadcrumb
                toSubjects={() => '#'}
                subjectsTitle="Fag"
                subject={subjectList[1]}
                topicPath={topicList.slice(0, -1)}
                toTopic={() => '#'}
              />
            </section>
          </div>
        </OneColumn>
      </Hero>
      <ArticleExercise />
      <FooterExample />
    </PageContainer>
  ))
  .add('Tilleggsstoff', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <Hero red>
        <OneColumn>
          <div className="c-hero__content">
            <section>
              <TopicBreadcrumb
                toSubjects={() => '#'}
                subjectsTitle="Fag"
                subject={subjectList[1]}
                topicPath={topicList.slice(0, -1)}
                toTopic={() => '#'}
              />
            </section>
          </div>
        </OneColumn>
      </Hero>
      <ArticleAdditional />
      <FooterExample />
    </PageContainer>
  ));

storiesOf('Emnesider', module)
  .add('1. Fagoversikt', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <OneColumn cssModifier="narrow">
        <article>
          <LayoutItem layout="center">
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
              <li>
                <a href="?selectedKind=Emnesider&selectedStory=2.%20Valgt%20fag&full=0&down=0&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel">
                  Helsearbeiderfag Vg2
                </a>
              </li>
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
          </LayoutItem>
        </article>
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('2. Fag', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <Hero>
        <OneColumn>
          <div className="c-hero__content">
            <section>
              <TopicBreadcrumb
                toSubjects={() => '#'}
                subjectsTitle="Fag"
                subject={subjectList[1]}
                topicPath={topicList.slice(0, -1)}
                toTopic={() => '#'}
              />
            </section>
          </div>
        </OneColumn>
      </Hero>
      <OneColumn>
        <article className="c-article">
          <LayoutItem layout="extend">
            <h1>Fagside</h1>
          </LayoutItem>
          <ResourcesSubTopics />
        </article>
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('3. Hovedemne', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <Hero>
        <OneColumn>
          <div className="c-hero__content">
            <section>
              <TopicBreadcrumb
                toSubjects={() => '#'}
                subjectsTitle="Fag"
                subject={subjectList[1]}
                topicPath={topicList.slice(0, -1)}
                toTopic={() => '#'}
              />
            </section>
          </div>
        </OneColumn>
      </Hero>
      <ArticleLoader articleId="1325" isTopicArticle />
      <OneColumn>
        <article className="c-article">
          <ResourcesSubTopics />
          <LayoutItem layout="extend">
            <ResourceSubsetList />
          </LayoutItem>
        </article>
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('4. Underemne', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <Hero>
        <OneColumn>
          <div className="c-hero__content">
            <section>
              <TopicBreadcrumb
                toSubjects={() => '#'}
                subjectsTitle="Fag"
                subject={subjectList[1]}
                topicPath={topicList.slice(0, -1)}
                toTopic={() => '#'}
              />
            </section>
          </div>
        </OneColumn>
      </Hero>
      <ArticleLoader articleId="5948" notitle />
      <OneColumn>
        <article className="c-article">
          <LayoutItem layout="extend">
            <ResourceSubsetList />
          </LayoutItem>
        </article>
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ));
