/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { BY, SA, NC, ND, PD, CC0, COPYRIGHTED } from 'ndla-licenses';
import {
  ErrorMessage,
  FilterList,
  Pager,
  Footer,
  LicenseByline,
  TopicIntroductionList,
  Breadcrumb,
  BreadcrumbBlock,
  PageContainer,
  Content,
  LayoutItem,
  Image,
  FactBox,
  ArticleAuthorsAndLicense,
  Table,
} from 'ndla-ui';

import { StoryIntro, StoryBody } from './wrappers';
import { Center } from './helpers';
import ArticleLoader from './article/ArticleLoader';
import FigureWithLicense from './article/FigureWithLicense';
import { topicList, subjectList } from '../dummydata/index';
import {
  MastheadLeftRight,
  MastheadWithTopicMenu,
} from './molecules/mastheads';
import Tabs, { TabsControlled } from './molecules/tabs';
import { Resources } from './molecules/resources';
import LicenseExample from './article/LicenseExample';
import ConceptExample from './organisms/ConceptExample';
import RelatedArticleListExample, {
  RelatedArticleExerciseList,
  RelatedArticleMixedList,
} from './article/RelatedArticleListExample';

storiesOf('Sammensatte moduler', module)
  .add('Brødsmulesti', () => (
    <Center>
      <h2 className="u-heading">Brødsmulesti eksempel</h2>
      <Breadcrumb
        toSubjects={() => '#'}
        subjectsTitle="Fag"
        subject={subjectList[1]}
        topicPath={topicList.slice(0, -1)}
        toTopic={() => '#'}
      />
      <h2 className="u-heading">Brødsmulesti-blokkeksempel</h2>
      <p>
        Blokkvarianten av brødsmulestien følger brukeren nedover siden. Den
        ligger i header. På små enheter vil blokkvarianten gjemmes.
        Brødsmulestien er fortsatt tilgjengelig øverst på siden.
      </p>
      <BreadcrumbBlock
        fadeIn
        subject={subjectList[1]}
        topicPath={topicList.slice(0, -1)}
        toTopic={() => '#'}
      />
    </Center>
  ))
  .add('Begrepsforklaring', () => (
    <Center>
      <ConceptExample />
    </Center>
  ))
  .add('Emnebeskrivelse', () => (
    <Center>
      <ArticleLoader articleId="149" reset />
    </Center>
  ))
  .add('Emneliste', () => (
    <div>
      <StoryIntro title="Emneliste">
        <p>
          Emnelister brukes typisk innen et fag eller emne for å vise
          underliggende emner.
        </p>
        <p>
          Ved klikk på emnetittel kommer brukerne til emneartikkelen for emnet
          de klikker på. Se også siden for Emnebeskrivelse.
        </p>
      </StoryIntro>
      <StoryBody>
        <TopicIntroductionList toTopic={() => '#'} topics={topicList} />
      </StoryBody>
    </div>
  ))
  .add('Faner', () => (
    <Center>
      <h2 className="u-heading">Faner</h2>
      <div className="o-wrapper--inner">
        <p>Klikk på fane-tittel for å vise innhold.</p>
        <Tabs />
      </div>
      <h2 className="u-heading">Kontrollerte faner</h2>
      <div className="o-wrapper--inner">
        <p>
          Knapper kan også brukes til å kontrollere fanene. En mulighet her er
          f.eks. å ha en knapp nederst inni en fane for å la brukeren gå til
          neste fane uten å først måtte scrolle opp til fanetoppen. Dette
          benyttes ikke foreløpig, men kan brukes ved behov i senere utvikling.
        </p>
        <TabsControlled />
      </div>
    </Center>
  ))
  .add('Filter', () => (
    <div>
      <StoryIntro title="Filter">
        <p>
          Alle elementer vises enten ingen eller alle filtervalg er valgt. Når
          brukeren klikker på et filter, skal dette umiddelbart reflekteres i
          innholdet som filtreres, uten at siden lastes på nytt.
        </p>
      </StoryIntro>
      <StoryBody>
        <h2 className="u-heading">Filter (ufiltrert)</h2>
        <div className="c-filter u-margin-top">
          <FilterList
            options={[
              { title: '1T', value: '1T' },
              { title: 'R1', value: 'R1' },
              { title: 'R2', value: 'R2' },
              { title: 'S1', value: 'S1' },
            ]}
            values={[]}
          />
        </div>
        <h2 className="u-heading">Filter med forhåndsvalgte elementer</h2>
        <div className="c-filter u-margin-top">
          <FilterList
            options={[
              { title: '1T', value: '1T' },
              { title: 'R1', value: 'R1' },
              { title: 'R2', value: 'R2' },
              { title: 'S1', value: 'S1' },
            ]}
            values={['1T', 'R1']}
          />
        </div>
        <h2 className="u-heading">Eksempler fra fagene</h2>
        <div className="c-filter u-margin-top">
          <h3>Norsk</h3>
          <FilterList
            options={[
              { title: 'SF VG1', value: 'SF VG1' },
              { title: 'SF VG2', value: 'SF VG2' },
              { title: 'SF VG3', value: 'SF VG3' },
              { title: 'YF VG1', value: 'YF VG1' },
              { title: 'YF VG2', value: 'YF VG2' },
              { title: 'PB VG3', value: 'PB VG3' },
            ]}
            values={['SF VG1', 'SF VG2']}
          />
        </div>
        <div className="c-filter u-margin-top">
          <h3>Medieuttrykk og mediesamfunnet</h3>
          <FilterList
            options={[
              { title: 'VG1', value: 'VG1' },
              { title: 'VG2', value: 'VG2' },
              { title: 'VG3', value: 'VG3' },
            ]}
            values={['VG1']}
          />
        </div>
      </StoryBody>
    </div>
  ))
  .add('Hovedhode', () => (
    <div>
      <MastheadLeftRight />
    </div>
  ))
  .add('Hovedhode med innhold', () => (
    <div>
      <MastheadWithTopicMenu />
    </div>
  ))
  .add('Lisensikoner', () => (
    <Center>
      <LayoutItem layout="center">
        <h2 className="u-heading">Lisensikoner og -merking med beskrivelse</h2>
        <div className="o-wrapper--inner">
          <LicenseByline
            messages={{
              modelPremission:
                'Personen(e) på bildet har godkjent at det kan brukes videre.',
            }}
            withDescription
            licenseRights={[BY, SA, NC, ND, PD, CC0, COPYRIGHTED]}
          />
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
        <h2 className="u-heading">Lisensikoner på enkeltelementer</h2>
        <FigureWithLicense runScripts>
          <Image
            alt=""
            src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
          />
        </FigureWithLicense>
      </LayoutItem>
    </Center>
  ))
  .add('Lisensboks', () => (
    <PageContainer>
      <Content>
        <Center>
          <h2 className="u-heading">Lisensboks</h2>
          <article className="article">
            <LayoutItem layout="center">
              <LicenseExample expanded />
            </LayoutItem>
          </article>
        </Center>
      </Content>
    </PageContainer>
  ))
  .add('Læringsressurser', () => (
    <div>
      <StoryIntro title="Læringsressurser">
        <p>
          Læringsressurser deles opp i læringsstier, fagstoff og oppgaver og
          aktiviteter. Hver del inneholder opp til åtte innholdselementer, før
          listen brytes opp med en «Vis mer»-knapp.
        </p>
        <p>
          Ved å klikke på «Tilleggsstoff» vil brukeren få vist også innhold som
          er tilleggsstoff. Det er ellers skjult. Tilleggsstoffet er merket med
          T-ikonet, samt med en noe dusere farge. Sjekkboksen skal være markert
          når tilleggsstoff er aktivt.
        </p>
        <p>Knappen «Vis mer» lar brukeren utvide listen med flere elementer.</p>
      </StoryIntro>
      <LayoutItem layout="center">
        <Resources />
      </LayoutItem>
    </div>
  ))
  .add('Læringsressurser tom', () => (
    <div>
      <StoryIntro title="Læringsressurser - tom liste">
        <p>
          Når en ressursgruppe er tom for innhold, vises en tekst som forklarer
          dette for brukeren og tilbyr en handlingsdriver som lar deg utforske
          tilleggsstoff om det er tilgjengelig.
        </p>
      </StoryIntro>
      <LayoutItem layout="center">
        <Resources onlyAdditional />
      </LayoutItem>
    </div>
  ))
  .add('Paginering', () => (
    <Center>
      <Pager page={3} lastPage={10} query={{ query: 'Medier' }} pathname="#" />
      <Pager page={4} lastPage={4} query={{ query: 'Medier' }} pathname="#" />
      <Pager
        page={1}
        lastPage={3}
        query={{ query: 'Medier' }}
        pageItemComponentClass="button"
        pathname="#"
      />
      <Pager page={3} lastPage={3} query={{ query: 'Medier' }} pathname="#" />
      <Pager page={1} lastPage={1} query={{ query: 'Medier' }} pathname="#" />
    </Center>
  ))
  .add('Relaterte artikler', () => (
    <div>
      <StoryIntro title="Relaterte artikler">
        <p>Kan brukes i slutten av artikler, eller midt i.</p>
      </StoryIntro>
      <StoryBody>
        <h2 className="u-heading">Oppgave og aktivitet eksempel</h2>
        <RelatedArticleExerciseList />
        <h2 className="u-heading">Fagstoff og oppgave eksempel</h2>
        <RelatedArticleMixedList />
        <h2 className="u-heading">Eksempel med vis mer</h2>
        <RelatedArticleListExample />
      </StoryBody>
    </div>
  ))
  .add('Sammensatte noder', () => (
    <div>
      <StoryIntro title="Sammensatte noder" />
      <StoryBody>
        <h2 className="u-heading">Eksempel</h2>
        <p>
          Plikten til forsvarlighet i helsepersonelloven innebærer at
          &laquo;helsepersonell eller virksomheter som yter helsehjelp har et
          helhetlig ansvar for pasienten. Dette inkluderer ansvar for å gi
          adekvate medisinske, behandlingsmessige og{' '}
          <strong>ernæringsmessige</strong> tiltak, samt ansvar for å gi
          pasienten god omsorg&raquo;.
        </p>
        <p>
          Ved internkontroll skal det sikres at tilbudet til pasientene er i
          samsvar med regelverket. Internkontroll skal bidra til faglig
          forsvarlige sosial- og helsetjenester, og er et verktøy som skal sikre
          at daglige arbeidsoppgaver blir utført, styrt og forbedret i henhold
          til lovens krav. Dette er særlig viktig på områder der svikt kan få
          alvorlige følger. Kilde:{' '}
          <em>
            Nasjonale faglige retningslinjer for forebygging og behandling av
            underernæring og internkontroll i helsetjenesten
          </em>. Helsedirektoratet
        </p>
        <FactBox isNode>
          <h1>Node i node</h1>
          <FigureWithLicense type="right">
            <Image
              alt=""
              src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
            />
          </FigureWithLicense>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
          <ol>
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>
              Listepunkt 3
              <ol className="ol-list--roman">
                <li>Underlistepunkt 1</li>
                <li>Underlistepunkt 2</li>
              </ol>
            </li>
            <li>Listepunkt 4</li>
            <li>Listepunkt 5</li>
          </ol>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
          <h2>Overskrift</h2>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
          <FigureWithLicense
            resizeIframe
            caption="Utholdenhet - animasjon av oksygentransporten"
            reuseLabel="videoen"
            runScripts>
            <iframe
              title="Video: Utholdenhet - animasjon av oksygentransporten"
              height="270"
              width="480"
              frameBorder="0"
              src="https://players.brightcove.net/4806596774001/default_default/index.html?videoId=ref:19011"
              allowFullScreen
            />
          </FigureWithLicense>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
          <Table>
            <thead>
              <tr>
                <th>Tittel 1</th>
                <th>Tittel 2</th>
                <th>Tittel 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
              </tr>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
              </tr>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
              </tr>
            </tbody>
          </Table>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
          <ArticleAuthorsAndLicense
            authors={[
              { name: 'Ola Nordnes', url: '#' },
              { name: 'Kari Nordnes' },
            ]}
            license={{ abbreviation: 'CC BY-NC-ND' }}
            singleLine
          />
        </FactBox>
      </StoryBody>
    </div>
  ))
  .add('Sidefot', () => (
    <Center>
      <Footer>
        <div className="footer_form">
          <label
            htmlFor="language-select"
            className="footer_label footer--bold">
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
          Nettstedet er utarbeidet av NDLA med åpen kildekode.
        </Footer.Text>
      </Footer>
    </Center>
  ))
  .add('Tilleggsstoff', () => (
    <div>
      <StoryIntro title="Tilleggsstoff">
        <p>
          Når ressurser listes opp, vises i utgangspunktet kun kjernestoff. Om
          tilleggsstoff-filteret aktiveres, vil ressursopplistingen utvides med
          tilleggsstoff. Tilleggsstoff markeres med T-ikon, og mindre mettet
          bakgrunnsfarge.{' '}
        </p>
        <p>
          Tilleggsstoff-filteret skal kun påvirke ressurstypen den er
          tilknyttet. Så hvis brukeren aktiverer tilleggsstoff for Fagstoff, vil
          bare Fagstoff-listen oppdateres med tilleggsstoff-elementer.
        </p>
      </StoryIntro>
      <StoryBody>
        <Resources />
      </StoryBody>
    </div>
  ))
  .add('Feilmelding', () => (
    <div>
      <StoryIntro title="Feilmelding">
        <p>
          Feilmeldingskomponenten lenker tilbake til forrige side eller til
          forsiden. Den brukes når det har oppstått en feil i systemet, f.eks.
          ved 404- eller 503-feil.
        </p>
      </StoryIntro>
      <StoryBody>
        <ErrorMessage
          messages={{
            title: 'Oisann, her gikk noe galt',
            description: 'En kort beskrivelse av feilen som oppsto.',
            linksTitle: 'Kom igang:',
            back: 'Gå tilbake',
            goToFrontPage: 'Gå til forsiden',
          }}
        />
      </StoryBody>
    </div>
  ));
