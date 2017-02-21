import React from 'react';

import { storiesOf } from '@kadira/storybook';

import Tabs from 'ndla-tabs';

import { getLicenseByAbbreviation } from 'ndla-licenses';
// import { CC, BY, NC, ND, SA, getLicenseByAbbreviation } from 'ndla-licenses';


import Masthead, { MastheadWithTopicMenu } from './molecules/mastheads';

import { ClickableLicenseByline, Footer, Hero, LicenseToggle, Modal, OneColumn, PageContainer, TopicIntroductionList } from '../src';

import LicenseExampleImage from './article/LicenseExampleImage';

import LicenseExampleImageAlt from './article/LicenseExampleImageAlt';

import LicenseExampleVideo from './article/LicenseExampleVideo';


import ArticleLoader from './article/ArticleLoader';

// Using for example alternative article
import article, { topicListWithIntro } from '../dummydata/index';

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

const ResourcesTab1Example = () => (
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
        { displayName: 'Alle', content: <div><h2>Læringsstier</h2><ResourcesTab1Example /></div> },
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


const ExamplePage1 = () => (
  <article>
    <section>
      <aside>
        <p>
          <embed
            data-align=""
            data-alt="TV-studio sidespalte"
            data-caption=""
            data-id="7"
            data-resource="image"
            data-size="hoyrespalte"
            data-url="http://api.staging.ndla.no/images/114"
          />
        </p>
        <h2>Huskelappen</h2>
        <p>
          <strong>
            En pitch er en kortvarig presentasjon av en idé eller et prosjekt.
          </strong>
        </p>
        <p>
          <strong>
            Hensikten med en pitch er å skaffe seg samarbeidspartnere eller kunder, slik at man kan realisere idéen.
          </strong>
        </p>
        <h2>Ressurser</h2>
        <p>
          <embed
            data-align=""
            data-alt="Ingressbilde oppgave (film)"
            data-caption=""
            data-id="6"
            data-resource="image"
            data-size="hoyrespalte"
            data-url="http://api.staging.ndla.no/images/198"
          />
        </p>
        <p>
          <a
            href="http://www.nfi.no/bransje/kurs/videointervjuer/hva-er-en-god-pitch-katrine-adair-gir-r%C3%A5d"
            title=""
          >
            Hva er en god pitch?
          </a>
        </p>
        <p>Her får du konkrete råd av Katrine Adair (Norsk filminstitutt).</p>
        <p>Syv intense minutter kan bestemme om idéen blir film – eller ikke. Det kalles
          <a
            href="http://www.nrk.no/video/pitching/D40D56E046FD0BBD/"
            title=""
          >
            pitch.
          </a>
        </p>
        <p>
          <embed
            data-align=""
            data-alt="Filmproduksjon"
            data-caption=""
            data-id="3"
            data-resource="image"
            data-size="hoyrespalte"
            data-url="http://api.staging.ndla.no/images/197"
          />
        </p>
        <p>Nå er det din tur!</p>
        <p>Lykke til med din første pitch!
        </p>
      </aside>
      <h1>Tittel</h1>
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
      <figure>
        <img
          src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1124&amp;q=80&amp;cs=tinysrgb&amp;crop="
          alt=""
        /></figure>
      <figcaption className="c-figcaption">
        <div className="c-figcaption__info">I værmeldingene til NRK på
          1980-tallet var symbolet for strålende solskinn en hvit sirkel.
          Ved skiftende vær var sirkelen delt i to med en hvit og en svart
          halvdel.
          <button
            className="button"
            data-show-id="1"
          />
        </div>
        <div className="c-figcaption__licenses">
          <Modal>
            <img src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1124&amp;q=80&amp;cs=tinysrgb&amp;crop=" alt="" />
            <LicenseExampleImage />
          </Modal>
          <ClickableLicenseByline
            license={getLicenseByAbbreviation('by-nc-nd')}
          />
        </div>
      </figcaption>
      <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du
         pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
           i klassen.</p>
    </section>
  </article>
);
const IdealExamplePage1 = () => (
  <article className="o-wrapper--narrow">
    <section>
      <h1>Tittel om pitching</h1>
      <p className="article_introduction">Du har en kjempegod idé til en kortfilm. Men det koster mange penger
         å produsere filmen.
      </p>
      <div className="c-article__byline">
       Byline
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
      <section id="figureExample" className="c-figure">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1124&amp;q=80&amp;cs=tinysrgb&amp;crop="
            alt=""
          />
        </figure>
        <figcaption className="c-figcaption">
          <div className="c-figcaption__info">I værmeldingene til NRK på
           1980-tallet var symbolet for strålende solskinn en hvit sirkel.
            Ved skiftende vær var sirkelen delt i to med en hvit og en svart
             halvdel.
          </div>
          <div className="c-figcaption__licenses">
            <LicenseToggle>
              <LicenseExampleImageAlt />
            </LicenseToggle>
          </div>
        </figcaption>
      </section>
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
  <article>
    <section>
      <aside>
        <p>
          <embed
            data-align=""
            data-alt="TV-studio sidespalte"
            data-caption=""
            data-id="7"
            data-resource="image"
            data-size="hoyrespalte"
            data-url="http://api.staging.ndla.no/images/114"
          />
        </p>
        <h2>Huskelappen</h2>
        <p>
          <strong>
            En pitch er en kortvarig presentasjon av en idé eller et prosjekt.
          </strong>
        </p>
        <p>
          <strong>
            Hensikten med en pitch er å skaffe seg samarbeidspartnere eller kunder, slik at man kan realisere idéen.
          </strong>
        </p>
        <h2>Ressurser</h2>
        <p>
          <embed
            data-align=""
            data-alt="Ingressbilde oppgave (film)"
            data-caption=""
            data-id="6"
            data-resource="image"
            data-size="hoyrespalte"
            data-url="http://api.staging.ndla.no/images/198"
          />
        </p>
        <p>
          <a
            href="http://www.nfi.no/bransje/kurs/videointervjuer/hva-er-en-god-pitch-katrine-adair-gir-r%C3%A5d"
            title=""
          >
            Hva er en god pitch?
          </a>
        </p>
        <p>Her får du konkrete råd av Katrine Adair (Norsk filminstitutt).</p>
        <p>Syv intense minutter kan bestemme om idéen blir film – eller ikke. Det kalles
          <a
            href="http://www.nrk.no/video/pitching/D40D56E046FD0BBD/"
            title=""
          >
            pitch.
          </a>
        </p>
        <p>
          <embed
            data-align=""
            data-alt="Filmproduksjon"
            data-caption=""
            data-id="3"
            data-resource="image"
            data-size="hoyrespalte"
            data-url="http://api.staging.ndla.no/images/197"
          />
        </p>
        <p>Nå er det din tur!</p>
        <p>Lykke til med din første pitch!
        </p>
      </aside>
      <h1>Tittel</h1>
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
      <figure className="article__oembed">
        <iframe
          width="480"
          height="270"
          src="https://www.youtube.com/embed/f9VriNNRn0U?feature=oembed"
          frameBorder="0"
          allowFullScreen=""
        />
      </figure>
      <figcaption className="c-figcaption">
        <div className="c-figcaption__info">Noe om videoen her.
        </div>
        <div className="c-figcaption__licenses">
          <Modal>
            <iframe
              width="480"
              height="270"
              src="https://www.youtube.com/embed/f9VriNNRn0U?feature=oembed"
              frameBorder="0"
              allowFullScreen=""
            />
            <div className="c-modal">
              <LicenseExampleVideo />
            </div>
          </Modal>
          <ClickableLicenseByline
            license={getLicenseByAbbreviation('by-nc-nd')}
          />
        </div>
      </figcaption>
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
  <article>
    <section>
      <aside>
        <p>
          <embed
            data-align=""
            data-alt="TV-studio sidespalte"
            data-caption=""
            data-id="7"
            data-resource="image"
            data-size="hoyrespalte"
            data-url="http://api.staging.ndla.no/images/114"
          />
        </p>
        <h2>Huskelappen</h2>
        <p>
          <strong>
            En pitch er en kortvarig presentasjon av en idé eller et prosjekt.
          </strong>
        </p>
        <p>
          <strong>
            Hensikten med en pitch er å skaffe seg samarbeidspartnere eller kunder, slik at man kan realisere idéen.
          </strong>
        </p>
        <h2>Ressurser</h2>
        <p>
          <embed
            data-align=""
            data-alt="Ingressbilde oppgave (film)"
            data-caption=""
            data-id="6"
            data-resource="image"
            data-size="hoyrespalte"
            data-url="http://api.staging.ndla.no/images/198"
          />
        </p>
        <p>
          <a
            href="http://www.nfi.no/bransje/kurs/videointervjuer/hva-er-en-god-pitch-katrine-adair-gir-r%C3%A5d"
            title=""
          >
            Hva er en god pitch?
          </a>
        </p>
        <p>Her får du konkrete råd av Katrine Adair (Norsk filminstitutt).</p>
        <p>Syv intense minutter kan bestemme om idéen blir film – eller ikke. Det kalles
          <a
            href="http://www.nrk.no/video/pitching/D40D56E046FD0BBD/"
            title=""
          >
            pitch.
          </a>
        </p>
        <p>
          <embed
            data-align=""
            data-alt="Filmproduksjon"
            data-caption=""
            data-id="3"
            data-resource="image"
            data-size="hoyrespalte"
            data-url="http://api.staging.ndla.no/images/197"
          />
        </p>
        <p>Nå er det din tur!</p>
        <p>Lykke til med din første pitch!
        </p>
      </aside>
      <h1>Tittel</h1>
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
      <table>
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
              { key: '2', displayName: 'Læringsressurser', content: <p>Læringsressurser-innhold</p> },
            ]}
          />
        </div>
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  ;
storiesOf('Sidevisninger alternativ', module)
    .add('Artikkel med bilde', () => (
      <PageContainer>
        <Masthead />
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
        <Masthead />
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
    .add('Artikkel nytt layout', () => (
      <PageContainer>
        <Masthead />
        <Hero url="https://images.unsplash.com/photo-1469082993720-0b12bbd9e68b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
        <OneColumn>
          <IdealExamplePage1 />
        </OneColumn>
        <ResourcesExample />
        <FooterExample />
      </PageContainer>
    ))
    .add('Artikkel nytt layout uten hero', () => (
      <PageContainer>
        <Masthead />
        <Hero />
        <OneColumn>
          <IdealExamplePage1 />
        </OneColumn>
        <ResourcesExample />
        <FooterExample />
      </PageContainer>
    ));
