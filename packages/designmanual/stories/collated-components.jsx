/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { BY, SA, NC, ND, PD, CC0, COPY } from 'ndla-licenses';
import {
  Button,
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
  RelatedArticles,
} from 'ndla-ui';

import { StoryIntro, StoryBody } from './wrappers';
import { Center } from './helpers';
import ArticleLoader from './article/ArticleLoader';
import FigureWithLicense from './article/FigureWithLicense';
import { topicList, subjectList, articleResources } from '../dummydata/index';
import {
  MastheadLeftRight,
  MastheadWithTopicMenu,
} from './molecules/mastheads';
import Tabs, { TabsControlled } from './molecules/tabs';
import { ResourceSubsetList } from './molecules/resources';
import LicenseExample, { LicenseBox } from './article/LicenseExample';
import GlossaryExample from './organisms/GlossaryExample';

const toggle = () => {
  document
    .querySelector('.c-collate__panel')
    .classList.toggle('c-collate__panel--expanded');
};

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
      <h2 className="u-heading">Brødsmulesti blokk eksempel</h2>
      <p>
        Blokkvarianten følger brukeren nedover siden, og ligger i header. På små
        enheter vil blokkvarianten gjemmes. Brødsmulestien er fortsatt
        tilgjengelig øverst på siden.
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
      <GlossaryExample />
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
          Emnelister brukes typisk innen et fag/emne for å vise underliggende
          emner.
        </p>
        <p>
          Ved klikk på emnetittel kommer man til emneartikkelen for emnet du
          klikker på. Se også siden for Emnebeskrivelse
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
          f. eks å ha en knapp nederst inni en fane, for å la brukeren gå til
          neste fane uten å først scrolle opp til fane-toppen. Dette benyttes
          ikke foreløpig, men kan brukes ved behov i senere utvikling.
        </p>
        <TabsControlled />
      </div>
    </Center>
  ))
  .add('Filter', () => (
    <div>
      <StoryIntro title="Filter">
        <p>
          Alle elementer vises både når ingen eller alle filtervalg er valgt.
          Når bruker klikker på et filter, skal dette umiddelbart reflekteres i
          innholdet som filtreres, uten å laste siden på nytt.
        </p>
      </StoryIntro>
      <StoryBody>
        <h2 className="u-heading">Filter (ufiltrert)</h2>
        <div className="c-filter u-margin-top">
          <FilterList
            filterContent={[
              { title: '1T', active: false },
              { title: 'R1', active: false },
              { title: 'R2', active: false },
              { title: 'S1', active: false },
              { title: 'S1', active: false },
            ]}
          />
        </div>
        <h2 className="u-heading">Filter med forhåndsvalgte elementer</h2>
        <div className="c-filter u-margin-top">
          <FilterList
            filterContent={[
              { title: '1T', active: true },
              { title: 'R1', active: true },
              { title: 'R2', active: false },
              { title: 'S1', active: false },
              { title: 'S1', active: false },
            ]}
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
  .add('Lisens-ikoner', () => (
    <Center>
      <LayoutItem layout="center">
        <h2 className="u-heading">Lisens-ikoner og merking med beskrivelse</h2>
        <div className="o-wrapper--inner">
          <LicenseByline
            withDescription
            licenseRights={[BY, SA, NC, ND, PD, CC0, COPY]}
          />
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
        <h2 className="u-heading">Lisens-ikoner på enkelt-element</h2>
        <FigureWithLicense resourceUrl="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg?width=1000">
          <img
            alt=""
            src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg?width=1000"
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
              <div className="license c-licensebox c-licensebox--expanded">
                <Button
                  stripped
                  className="c-article__license-toggler"
                  onClick={() => {}}>
                  Lukk boks
                </Button>
                <LicenseBox />
              </div>
            </LayoutItem>
          </article>
        </Center>
      </Content>
    </PageContainer>
  ))
  .add('Lisensboks ekspanderbar', () => (
    <PageContainer>
      <Content>
        <Center>
          <h2 className="u-heading">Lisensboks ekspanderbar</h2>
          <article className="article">
            <LayoutItem layout="center">
              <LicenseExample />
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
          Ved å klikke på «Tilleggstoff» vil man vise også innhold som er
          tilleggstoff, som ellers er skjult. Disse er merket med T-ikonet, samt
          med en noe dusere farge. Sjekkboksen skal være markert når
          tilleggstoff er aktivt.
        </p>
        <p>
          Knappen «Vis mer» lar brukeren populere listen med flere elementer.
        </p>
      </StoryIntro>
      <LayoutItem layout="center">
        <ResourceSubsetList />
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
        <p>1 eller 2 artikler vises.</p>
      </StoryIntro>
      <StoryBody>
        <RelatedArticles resources={articleResources} />
      </StoryBody>
    </div>
  ))
  .add('Sammensatte noder', () => (
    <div>
      <StoryIntro title="Sammensatte moduler" />
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
        <div className="c-collate">
          <div className="c-collate__info">
            <svg
              onClick={toggle}
              width="25px"
              height="24px"
              viewBox="48 682 25 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <g
                id="noun_90272_cc"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                transform="translate(48.500000, 682.000000)">
                <g id="Group" fill="#000">
                  <path
                    d="M12.1015038,0.327067669 C5.59928833,0.327067669 0.327067669,5.59854468 0.327067669,12.1015038 C0.327067669,18.6044628 5.59928833,23.8759398 12.1015038,23.8759398 C18.6037192,23.8759398 23.8759398,18.6044628 23.8759398,12.1015038 C23.8759398,5.59854468 18.6037192,0.327067669 12.1015038,0.327067669 Z M14.6864263,10.9567807 C14.5736396,11.4976611 12.9361254,14.4856412 12.4591987,15.4957638 C12.1872712,16.0740746 11.6525879,16.8759756 11.7698365,17.5499691 C11.8630404,18.085644 12.4168108,18.3761627 12.8996866,18.4929156 C13.0593231,18.5313374 13.5216247,18.5831449 13.5216247,18.81789 C13.5216247,18.9133249 13.4457725,18.9889292 13.3503376,18.991408 C13.3503376,18.9936389 9.71240871,18.9936389 9.71240871,18.9936389 C9.19334199,18.9936389 8.74194729,18.625285 8.67650621,18.1101844 C8.60164559,17.5301385 8.99379628,17.0088408 9.2307723,16.5125793 C9.73893217,15.4496576 10.3167471,14.4187128 10.8214366,13.3528165 C11.0036306,12.9681023 11.1721909,12.5779346 11.3573594,12.1954514 C11.5425279,11.8149512 11.7713238,11.3831392 11.6188758,10.951823 C11.455521,10.4920003 10.9121618,10.2612214 10.473657,10.1543839 C10.3137725,10.1164578 9.85171888,10.0641545 9.85171888,9.83064883 C9.85171888,9.73447028 9.9280668,9.65861812 10.0235017,9.65638718 C10.0235017,9.65415623 13.6609349,9.65415623 13.6609349,9.65415623 C14.1990886,9.65415623 14.6844432,10.0750613 14.7129497,10.6119756 C14.7196426,10.7262496 14.7094794,10.8412673 14.6864263,10.9567807 Z M13.8537877,8.57388271 C12.9247228,8.57388271 12.1716546,7.82007091 12.1716546,6.8915017 C12.1716546,5.96293249 12.9247228,5.20936858 13.8537877,5.20936858 C14.7816133,5.20936858 15.5359209,5.96318037 15.5359209,6.8915017 C15.5359209,7.82007091 14.7816133,8.57388271 13.8537877,8.57388271 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="c-collate__panel">
            <p>Innhold her</p>
            <h3>Utfordringer til deg:</h3>
            <details>
              <summary>Utfordringer</summary>
              <ol>
                <li>Beskriv hva internkontroll er.</li>
                <li>
                  Skriv ned noen forslag på hvordan man kan sikre at pasienter
                  får dekket sine behov for ernæring. Ta gjerne utgangspunkt i
                  en arbeidsplass. Diskuter deretter i klassen.
                </li>
              </ol>
            </details>
          </div>
        </div>
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
          <Footer.Editor title="Ansvarlig redaktør:" name=" Øivind Høines" />
          <Footer.Editor title="Utgaveansvarlig:" name="Pål Frønsdal" />
        </Footer.Text>
        <Footer.Text>
          Nettstedet er utarbeidet av NDLA som åpen kildekode.
        </Footer.Text>
      </Footer>
    </Center>
  ))
  .add('Tilleggsstoff', () => (
    <div>
      <StoryIntro title="Tilleggsstoff">
        <p>
          Når ressurser listes opp, vises i utgangspunktet kun kjernestoff. Om
          tilleggsstoff-filteret aktiveres, vil ressursopplistingen populeres
          med tilleggsstoff i tilegg. Tilleggsstoff markeres med T-ikon, og
          desaturert bakgrunnsfarge.{' '}
        </p>
        <p>
          Tilleggsstoff-filteret skal kun påvirke ressurstypen den er
          tilknyttet, f. eks om du aktiverer tilleggsstoff for Fagstoff, vil kun
          denne listen oppdateres med tilleggsstoff-artikler.
        </p>
      </StoryIntro>
      <StoryBody>
        <ResourceSubsetList />
      </StoryBody>
    </div>
  ))
  .add('Feilmelding', () => (
    <div>
      <StoryIntro title="Feilmelding">
        <p>
          Feilmelding komponent med link tilbake til forrige side eller
          forsiden. Brukes når det har oppstått en feil i systemet. F.eks. ved
          404 eller 503 feil.
        </p>
      </StoryIntro>
      <StoryBody>
        <ErrorMessage
          messages={{
            title: 'Oops, noe gikk galt',
            description: 'En kort beskrivelse av feilen som oppsto.',
            back: 'Tilbake',
            goToFrontPage: 'Gå til forsiden',
          }}
        />
      </StoryBody>
    </div>
  ));
