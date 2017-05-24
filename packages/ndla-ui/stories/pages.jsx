import React from 'react';

import { storiesOf } from '@kadira/storybook';

import Masthead, { MastheadWithTopicMenu } from './molecules/mastheads';
import { ResourceSubsetList } from './molecules/resources';

import { Aside, Footer, Hero, OneColumn, PageContainer, ResourceWrapper, Icon, TopicIntroductionList, LayoutItem } from '../src';

import ArticleLoader from './article/ArticleLoader';
import FigureWithLicense from './article/FigureWithLicense';

// Using for example alternative article
import article, { topicList } from '../dummydata/index';

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

const ExamplePage2 = () => (
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title">Mediekommunikasjon og kommunikasjonsmodeller</h1>
        <p className="article_introduction">Du har en kjempegod idé til en kortfilm. Men det koster mange penger
           å produsere filmen.
        </p>
        <div className="c-article__byline">
          <span className="c-article__authors"><Icon.User /> Skrevet av [Opphavsperson].</span> <span className="c-article__date"><Icon.Time /> Publisert [dato]</span>
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
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
        <FigureWithLicense>
          <iframe
            width="480"
            height="270"
            src="https://www.youtube.com/embed/f9VriNNRn0U?feature=oembed"
            frameBorder="0"
            allowFullScreen=""
          />
        </FigureWithLicense>
        <p>En pitch er en kortvarig framføring av en idé for en potensiell
           samarbeidspartner eller kunde. I løpet av noen få minutter skal du
            få andre til å tenne på idéen din og se potensialet i den.</p>
        <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
           pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med
             i klassen.</p>
        <LayoutItem layout="extended">
          <ResourceSubsetList />
        </LayoutItem>
      </LayoutItem>
    </article>
  </OneColumn>
);

const ExamplePageImages = () => (
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title">Test av bildeflyt</h1>
        <p className="article_introduction">Du har en kjempegod idé til en kortfilm. Men det koster mange penger
           å produsere filmen.
        </p>
        <div className="c-article__byline">
          <span className="c-article__authors"><Icon.User /> Skrevet av [Opphavsperson].</span> <span className="c-article__date"><Icon.Time /> Publisert [dato]</span>
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
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
        <FigureWithLicense>
          <img alt="person med mange armer som gjør forskjellige ting samtidig. Foto." src="https://test.api.ndla.no/image-api/v1/raw/2016_tk_prod-planlegger_utsnitt3.jpg" />
        </FigureWithLicense>
        <p>En pitch er en kortvarig framføring av en idé for en potensiell
           samarbeidspartner eller kunde. I løpet av noen få minutter skal du
            få andre til å tenne på idéen din og se potensialet i den.</p>
        <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
           pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med
             i klassen.</p>
        <LayoutItem layout="extended">
          <ResourceSubsetList />
        </LayoutItem>
      </LayoutItem>
    </article>
  </OneColumn>
);

const ExamplePage3 = () => (
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title">Tittel om pitching</h1>
        <p className="article_introduction">Du har en kjempegod idé til en kortfilm. Men det koster mange penger
           å produsere filmen.
        </p>
        <div className="c-article__byline">
          <span className="c-article__authors"><Icon.User /> Skrevet av [Opphavsperson].</span> <span className="c-article__date"><Icon.Time /> Publisert [dato]</span>
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
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
        <ResourceSubsetList />
      </LayoutItem>
    </article>
  </OneColumn>
);

const ExamplePage4 = () => (
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title">Tittel om pitching</h1>
        <p className="article_introduction">Du har en kjempegod idé til en kortfilm. Men det koster mange penger
           å produsere filmen.
        </p>
        <div className="c-article__byline">
          <span className="c-article__authors"><Icon.User /> Skrevet av [Opphavsperson].</span> <span className="c-article__date"><Icon.Time /> Publisert [dato]</span>
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
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
        <FigureWithLicense>
          <iframe src="http://ndla.no/nb/h5p/embed/146132?fag=127756" width="260" height="373" frameBorder="0" allowFullScreen="allowfullscreen" /><script src="http://ndla.no/sites/all/modules/h5p/library/js/h5p-resizer.js?fag=127756" charSet="UTF-8" />
        </FigureWithLicense>
        <p>En pitch er en kortvarig framføring av en idé for en potensiell
           samarbeidspartner eller kunde. I løpet av noen få minutter skal du
            få andre til å tenne på idéen din og se potensialet i den.</p>
        <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
           pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med
             i klassen.</p>
        <ResourceSubsetList />
      </LayoutItem>
    </article>
  </OneColumn>
);

const ExampleWithSummary = () => (
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title">Tittel om pitching</h1>
        <p className="article_introduction">Du har en kjempegod idé til en kortfilm. Men det koster mange penger
           å produsere filmen.
        </p>
        <div className="c-article__byline">
          <span className="c-article__authors"><Icon.User /> Skrevet av [Opphavsperson].</span> <span className="c-article__date"><Icon.Time /> Publisert [dato]</span>
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
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
        <FigureWithLicense>
          <iframe src="http://ndla.no/nb/h5p/embed/146132?fag=127756" width="260" height="373" frameBorder="0" allowFullScreen="allowfullscreen" /><script src="http://ndla.no/sites/all/modules/h5p/library/js/h5p-resizer.js?fag=127756" charSet="UTF-8" />
        </FigureWithLicense>
        <p>En pitch er en kortvarig framføring av en idé for en potensiell
           samarbeidspartner eller kunde. I løpet av noen få minutter skal du
            få andre til å tenne på idéen din og se potensialet i den.</p>
        <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
           pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med
             i klassen.</p>
        <Aside>
          <div className="c-aside__title">Oppsummering</div>
          <div>
            <p>Søknadsfristen til høgskoler og universiteter er 15.april.</p>
            <p>Er du en av dem som akkurat nå gjør et viktig valg? Vi hjelper
               deg å velge!</p><h2>Siris tips</h2>
            <div>Siri Knudsen i NRK P3 gir deg noen gode råd med på veien.</div>
            <div>
              <figure className="article_audio">
                <audio
                  type="audio/mpeg"
                  src="http://test.api.ndla.no/audio/files/Siri_knudsen_mars2012.mp3"
                />
                <figcaption>medieutdanning</figcaption>
              </figure>
            </div>
            <h2>Ressurser</h2>
            <p>
              <a
                href="http://utdanning.no/tema/yrke_og_karriere/finn?s=media"
                title="Utdanning.no: Søk på yrke"
              >
                Utdanning.no: Søk på yrke
              </a>
            </p>
            <p>
              <a
                href="http://www.vilbli.no"
                title="Les mer på Vilbli.no"
              >
                Les mer på Vilbli.no
              </a>
            </p>
            <p>Landslaget for medieundervisning har en god oversikt over</p>
            <p>
              <a
                href="http://www.mediepedagogene.no/undervisning-og-utdanning/medieutdanning?wpmp_switcher=mobile"
                title="medieutdanning i Norge"
              >
                medieutdanning i Norge
              </a>
            </p>
          </div>
        </Aside>
      </LayoutItem>
    </article>
  </OneColumn>
);

const SubTopicHero = () => (
  <OneColumn cssModifier="narrow">
    <div className="c-hero__content" />
  </OneColumn>
);

const MainTopicHero = () => (
  <OneColumn cssModifier="narrow" />
);


const ResourcesSubTopics = () => (
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <ResourceWrapper>
          <h1 className="c-resources__title">Emner</h1>
          <TopicIntroductionList toTopic={() => '#'} topics={topicList} />
        </ResourceWrapper>
      </LayoutItem>
    </article>
  </OneColumn>
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
      <MastheadWithTopicMenu />
      <Hero />
      <ArticleLoader articleId="44" />
      <FooterExample />
    </PageContainer>
  ))
  .add('ArticlePage with licensebox', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <Hero white />
      <ArticleLoader articleId="44" withLicenseExample />
      <FooterExample />
    </PageContainer>
  ))
  .add('ArticlePage loader', () => (
    <PageContainer>
      <Masthead />
      <Hero white />
      <ArticleLoader />
      <FooterExample />
    </PageContainer>
  ))
  .add('ArticlePage Preloaded', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <Hero white />
      <ArticleLoader articleId="34" />
      <FooterExample />
    </PageContainer>
  ))
  .add('Emneside', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <Hero />
      <ArticleLoader isTopicArticle articleId="208" />
      <OneColumn>
        <ResourceWrapper>
          <h1 className="c-resources__title">Emner</h1>
          <TopicIntroductionList toTopic={() => '#'} topics={topicList} />
        </ResourceWrapper>
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  ;
storiesOf('Artikkelmaler', module)
    .add('Artikkel med herobilde', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero url="https://images.unsplash.com/photo-1469082993720-0b12bbd9e68b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
        <ArticleLoader articleId="208" />
        <FooterExample />
      </PageContainer>
    ))
    .add('Artikkel med bildeflyt', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero url="https://images.unsplash.com/photo-1469082993720-0b12bbd9e68b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
        <ExamplePageImages />
        <FooterExample />
      </PageContainer>
    ))
    .add('Artikkel med video', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero />
        <ExamplePage2 />
        <FooterExample />
      </PageContainer>
    ))
    .add('Artikkel med tabell', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero />
        <ExamplePage3 />
        <FooterExample />
      </PageContainer>
    ))
    .add('Artikkel med h5p', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero />
        <ExamplePage4 />
        <FooterExample />
      </PageContainer>
    ))
    .add('Artikkel med oppsummeringsboks', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero />
        <ExampleWithSummary />
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
                <li><a href="?selectedKind=Emnesider&selectedStory=2.%20Valgt%20fag&full=0&down=0&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel">Helsearbeiderfag Vg2</a></li>
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
    .add('2. Valgt fag', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero />
        <ResourcesSubTopics />
        <FooterExample />
      </PageContainer>
    ))
    .add('3. Hovedemne', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero>
          <MainTopicHero />
        </Hero>
        <ArticleLoader articleId="1325" isTopicArticle />
        <ResourceWrapper>
          <ResourcesSubTopics />
        </ResourceWrapper>
        <FooterExample />
      </PageContainer>
    ))
    .add('4. Underemne', () => (
      <PageContainer>
        <MastheadWithTopicMenu />
        <Hero url="http://staging.api.ndla.no/image-api/v1/raw/syab94b0.jpg">
          <SubTopicHero />
        </Hero>
        <ArticleLoader articleId="5948" notitle />
        <OneColumn>
          <ResourceSubsetList />
        </OneColumn>
        <FooterExample />
      </PageContainer>
    ))
    ;
