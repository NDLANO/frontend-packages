/* eslint max-len: 0 */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Masthead, { MastheadWithTopicMenu } from './molecules/mastheads';
import { ResourceSubsetList } from './molecules/resources';

import {
  Aside,
  Footer,
  Hero,
  OneColumn,
  PageContainer,
  ResourceWrapper,
  TopicIntroductionList,
  LayoutItem,
  TopicBreadcrumb,
} from '../src';
import {
  Time,
  User,
} from '../src/icons';

import ArticleLoader from './article/ArticleLoader';
import FigureWithLicense from './article/FigureWithLicense';

// Using for example alternative article
import article, { topicList, subjectList } from '../dummydata/index';
import Glossary from './../src/glossary/Glossary';

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

const ExamplePage2 = () => (
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title">
          Mediekommunikasjon og kommunikasjonsmodeller
        </h1>
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger
          å produsere filmen.
        </p>
        <div className="c-article__byline">
          <span className="c-article__byline-flex">
            <span className="c-article__byline-icon">
              <User />
            </span>
            <span className="c-article__authors">
            Skrevet av Ola Nordmann, Kari Nordmann, Jon Nordgubbe,
               Trine Tralletryll. Oppdatert av <a href="#test">Ola Nordkvinne</a>.
            </span>
          </span>
          {' '}
          <span className="c-article__byline-flex">
            <span className="c-article__byline-icon">
              <Time />
            </span>
            <span className="c-article__date">
              Publisert 12/10/2016
            </span>
            <div className="license c-licensebox">
              <button className="c-button c-button--stripped license-toggler" type="button">
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
            width="480"
            height="270"
            src="https://www.youtube.com/embed/f9VriNNRn0U?feature=oembed"
            frameBorder="0"
            allowFullScreen=""
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

const ExamplePageImages = () => (
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title">Test av bildeflyt</h1>
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger
          å produsere filmen.
        </p>
        <div className="c-article__byline">
          <span className="c-article__authors">
            <User /> Skrevet av [Opphavsperson].
          </span>
          {' '}
          <span className="c-article__date">
            <Time /> Publisert [dato]
          </span>
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
        <FigureWithLicense classes="article_figure--float-left">
          <img
            alt="person med mange armer som gjør forskjellige ting samtidig. Foto."
            src="https://test.api.ndla.no/image-api/raw/2016_tk_prod-planlegger_utsnitt3.jpg"
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
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med
          i klassen.
        </p>
        <FigureWithLicense classes="article_figure--float-right">
          <img
            alt="person med mange armer som gjør forskjellige ting samtidig. Foto."
            src="https://test.api.ndla.no/image-api/raw/2016_tk_prod-planlegger_utsnitt3.jpg"
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

const ExamplePage3 = () => (
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title">Tittel om pitching</h1>
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger
          å produsere filmen.
        </p>
        <div className="c-article__byline">
          <span className="c-article__authors">
            <User /> Skrevet av [Opphavsperson].
          </span>
          {' '}
          <span className="c-article__date">
            <Time /> Publisert [dato]
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

const ExamplePage4 = () => (
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title">Tittel om pitching</h1>
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger
          å produsere filmen.
        </p>
        <div className="c-article__byline">
          <span className="c-article__authors">
            <User /> Skrevet av [Opphavsperson].
          </span>
          {' '}
          <span className="c-article__date">
            <Time /> Publisert [dato]
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
const ExampleWithGlossary = () => (
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title">Sosialisering</h1>
        <p className="article_introduction">
          Vi blir født inn i et samfunn. På den ene siden kommer vi til en familie bestående av nære relasjoner. På den andre siden blir de fleste av oss født på en institusjon, et sykehus. Vi kommer inn i offentlige registre og arkiver, og etter dette blir vi fulgt tett opp av offentlige institusjoner. Denne sammenhengen gir rammene rundt den innlæringsprosessen som vi må gjennomgå for å bli et sosialt vesen og samfunnsmedlem.
        </p>
        <div className="c-article__byline">
          <span className="c-article__authors">
            <User /> Skrevet av GRO-ANITA MORTENSE.
          </span>
          {' '}
          <span className="c-article__date">
            <Time /> Sist oppdatert 03.03.2017
          </span>
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
        <section>
          <div>
            <p>
              Gjennom <Glossary definition="Sosialisering, betegnelse for de sosiale prosessene som fører til at individer tar opp i seg, eller internaliserer, samfunnets normer og atferdsmønstre Med andre ord at de blir som de andre i samfunnet." source="snl.no">sosialisering</Glossary> lærer menneskene å fungere i et samfunn og får kjennskap til de regler og verdier som det forventes at man skal følge. Sosialisering er dermed den prosessen som gjør at vi tar til oss dette, fra vi blir født til vi dør.
            </p>
            <p>
              Barn møtes med forventninger til hvordan de skal oppføre seg. Disse forventningene gjentar seg, og slik lærer barnet hvilke regler eller normer som gjelder. Hovedmålet med sosialiseringen er at de enkelte menneskene skal kunne skille mellom godt og ondt, og rett og galt.
            </p>
            <FigureWithLicense classes="article_figure--float-right">
              <img
                alt="person med mange armer som gjør forskjellige ting samtidig. Foto."
                src="https://test.api.ndla.no/image-api/raw/jente mellom foreldre_0.jpg"
              />
            </FigureWithLicense>
            <h2>Normer og normsendere</h2>
            <p>
              Normer er regler som forteller hvordan man skal oppføre seg og handle i en gitt situasjon. Normer kan være formelle eller uformelle. Lover er formaliserte eller formelle normer. De uformelle normene er uskrevne regler for skikk og bruk, som hvordan man skal oppføre seg i ulike situasjoner. Det kan være forventninger om at du skal håndhilse når du kommer inn til et jobbintervju, eller at det er uhøflig å svare på telefonsamtaler mens intervjuet pågår.
            </p>
            <p>
              For å forsterke innlæringen av normer følges de opp av reaksjoner eller sanksjoner. <Glossary definition="Sanksjon, en negativ eller positiv reaksjon på noens atferd. I dagligtalen er det vanlig å oppfatte sanksjoner først og fremst som negative reaksjoner rettet mot uønsket atferd eller avvik. Et eksempel er foreldrene som nekter ungen lørdagsgodteri (sanksjon) fordi han eller hun ikke spiser opp grønnsakene sine (uønsket atferd)." source="snl.no">Sanksjonene</Glossary> kan både være positive og negative. Ønsket adferd belønnes, men uønsket adferd straffes. Når en person har gjort normene til sine egne og følger dem, sier man at normene er internalisert.
            </p>
            <p>
              Alle man møter, er normsendere. I første omgang er det foreldre, søsken og nær familie. Også venner og lekekamerater er normsendere. Dette kalles primærsosialisering. Barn har også normsendere utenfor de nære relasjonene. I barnehagen møter de voksne som er tydelige rollemodeller, og som har en klar oppgave i forhold til mer formell sosialisering. Det kalles sekundærsosialisering og blir fulgt opp av andre formelle utdanningsinstitusjoner, som skolen. Barn møter uformell sosialisering når de ser på TV eller spiller dataspill.
            </p>
            <h2>Normforvirring</h2>
            <p>
              De signalene andre mennesker sender ut, kan for et individ oppleves som forvirrende og i mange tilfeller også motstridende. Det kalles normforvirring. Denne normforvirringen er en naturlig del av sosialiseringsprosessen, og noe vi må lære oss å forholde oss til. En vanlig konflikt er at venner ønsker at du skal spille internettspill eller bli med på kino, mens foreldrene ber deg skru av PC-en for å gjøre husarbeid og lekser.
            </p>
            <p>
              Selv om informasjonen om narkotika er entydig, fordi det er forbudt gjennom norsk lov, kan enkeltpersoner bli utfordret også på disse normene. I noen miljøer er det akseptert å bruke narkotika, og de skadelige sidene av bruken bagatelliseres. I slike situasjoner kan internaliserte normer hjelpe oss til å føle oss trygge fordi vi har tatt stilling til spørsmålet på forhånd. Det bidrar til at mange føler at de vet hva som er riktige valg, og de føler seg trygge når de blir utfordret.
            </p>
            <p>
              Motstridende signaler fra normsendere, som følges opp av sanksjoner som enten er vilkårlige, eller som føles urettferdige, skaper utrygghet. I verste fall kan utydelige normer og uregelmessig belønning medføre psykiske lidelser fordi de gjør personen utrygg og usikker.
            </p>
            <h2>Sosialt avvik – kulturell endring og lovbrudd</h2>
            <p>
              Noen velger også å bryte med samfunnets normer ved enten å ta avstand fra dem og gjøre opprør eller å bryte fullstendig. Slik oppførsel blir ofte betegnet som sosialt avvik. På den ene siden kan denne typen adferd bidra til viktige samfunnsmessige nyvinninger. Sosiale avvik kan blant annet legge grunnlag for nye politiske bevegelser eller bidra til aksept av <Glossary definition="Subkultur, (av sub og kultur), delkultur, kulturform som er en avart av en annen og videre utbredt kultur." source="snl.no">subkulturer</Glossary>. Det er positivt for samfunnet. På den andre siden kan sosiale avvik være negativt fordi personer velger å begå regelbrudd og i verste fall alvorlig kriminalitet og lovbrudd. De tydeligste normene i samfunnet er fastsatt i lovverket, og de forsvares formelt av domstolssystemet.
            </p>
            <h2>Når er man ferdig sosialisert?</h2>
            <p>
              Sosialisering foregår gjennom hele livet. Man sosialiseres, og man sosialiserer andre. Den foregår formelt i samfunnet gjennom at rettsvesenet opprettholder lover og regler. Den foregår gjennom at institusjoner som skole, barnehager og universiteter har en formell rolle i opplæringen. Og sosialisering foregår inne i oss ved at samfunnets normer og regler enten internaliseres, eller ved at vi bryter med dem. Målet er å skape mennesker som både kan tilpasse seg samfunnets krav og behov, og samtidig være selvstendige. Normer og verdier og lover bidrar til sosial kontroll med samfunnets medlemmer, samtidig med at grunnleggende verdier føres videre.
            </p>
          </div>
        </section>
      </LayoutItem>
      <LayoutItem layout="extend">
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
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger
          å produsere filmen.
        </p>
        <div className="c-article__byline">
          <span className="c-article__authors">
            <User /> Skrevet av [Opphavsperson].
          </span>
          {' '}
          <span className="c-article__date">
            <Time /> Publisert [dato]
          </span>
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
        <Aside float>
          <div className="c-aside__title">Oppsummering</div>
          <div>
            <p>Søknadsfristen til høgskoler og universiteter er 15.april.</p>
            <p>
              Er du en av dem som akkurat nå gjør et viktig valg? Vi hjelper
              deg å velge!
            </p><h2>Siris tips</h2>
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
              <a href="http://www.vilbli.no" title="Les mer på Vilbli.no">
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
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger
          å produsere filmen. Derfor er du avhengig av at noen tenner på idéen
          din og bestemmer seg for å bruke ressurser på nettopp dette
          prosjektet.
        </p>
        <ul>
          <li>Test</li>
          <li>
            Test
            <ol>
              <li>Test2</li>
              <li>Test 2</li>
            </ol>
          </li>
        </ul>
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
    </article>
  </OneColumn>
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
      <Hero />
      <ArticleLoader articleId="44" withLicenseExample />
      <FooterExample />
    </PageContainer>
  ))
  .add('ArticlePage loader', () => (
    <PageContainer>
      <Masthead />
      <Hero />
      <ArticleLoader />
      <FooterExample />
    </PageContainer>
  ))
  .add('ArticlePage Preloaded', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <Hero />
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
  ));
storiesOf('Artikkelmaler', module)
  .add('Artikkel med bilde', () => (
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
      <ArticleLoader articleId="208" />
      <FooterExample />
    </PageContainer>
  ))
  .add('Artikkel med bildeflyt', () => (
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
      <ExamplePageImages />
      <FooterExample />
    </PageContainer>
  ))
  .add('Artikkel med video', () => (
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
      <ExamplePage2 />
      <FooterExample />
    </PageContainer>
  ))
  .add('Artikkel med tabell', () => (
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
      <ExamplePage3 />
      <FooterExample />
    </PageContainer>
  ))
  .add('Artikkel med h5p', () => (
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
      <ExamplePage4 />
      <FooterExample />
    </PageContainer>
  ))
  .add('Artikkel med sidespalte', () => (
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
      <ExampleWithSummary />
      <FooterExample />
    </PageContainer>
  ))
  .add('Artikkel med begrepsforklaring', () => (
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
      <ExampleWithGlossary />
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
      <ResourcesSubTopics />
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
      <ResourceWrapper>
        <ResourcesSubTopics />
      </ResourceWrapper>
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
          <LayoutItem layout="center">
            <ResourceSubsetList />
          </LayoutItem>
        </article>
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ));
