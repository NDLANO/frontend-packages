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
  PageContainer,
  Content,
  LayoutItem,
  Image,
  Translation,
  TranslationLine,
  ArticleByline,
} from 'ndla-ui';

import { StoryIntro, StoryBody } from './wrappers';
import { Center } from './helpers';
import ArticleLoader from './article/ArticleLoader';
import FigureWithLicense from './article/FigureWithLicense';
import { topicList } from '../dummydata/index';
import { MastheadWithLogo, MastheadWithTopicMenu } from './molecules/mastheads';
import Tabs, { TabsControlled } from './molecules/tabs';
import { Resources } from './molecules/resources';
import LicenseBox from './article/LicenseBox';
import ConceptExample from './organisms/ConceptExample';
import Breadcrumb, { BreadcrumbBlock } from './molecules/breadcrumbs';
import RelatedArticleListExample, {
  RelatedArticleExerciseList,
  RelatedArticleMixedList,
  RelatedArticleExternal,
} from './article/RelatedArticleListExample';
import FileListExample from './molecules/FileListExample';
import TranslationBoxExample from './organisms/TranslationBoxExample';

import Oops from '../images/oops.gif';

const toggle = () => {
  document
    .querySelector('.c-collate__panel')
    .classList.toggle('c-collate__panel--expanded');
};

storiesOf('Sammensatte moduler', module)
  .add('Artikkel info linje', () => (
    <Center>
      <h2 className="u-heading">Linje artikkel enkel variant</h2>
      <ArticleByline
        authors={[
          {
            name: 'Cecilie Isaksen Eftedal',
          },
          {
            name: 'Pål Frønsdal',
          },
        ]}
        updated="21.06.2018"
        license="CC BY-SA"
        messages={{
          lastUpdated: 'Publisert',
          useContent: 'Bruk innhold',
          closeLabel: 'Lukk',
        }}
      />
      <h2 className="u-heading">Linje med tilleggsstoff og lisensboks</h2>
      <ArticleByline
        authors={[
          {
            name: 'Cecilie Isaksen Eftedal',
          },
        ]}
        updated="21.06.2018"
        license="CC BY-SA"
        licenseBox={<LicenseBox headingId="article-license-box-heading-id" />}
        additional
        messages={{
          lastUpdated: 'Publisert',
          authorLabel: 'Opphavsmenn',
          authorDescription: 'Denne artikkelen er laget av flere opphavsmenn',
          additionalLabel: 'Tilleggsstoff',
          useContent: 'Bruk innhold',
          closeLabel: 'Lukk',
        }}
      />
      <h2 className="u-heading">Linje med detaljert forfatter informasjon</h2>
      <ArticleByline
        authors={[
          {
            role: 'rolle',
            name: 'Cecilie Isaksen Eftedal',
            urlContributions: '#',
            urlContributionsLabel: 'Se hva Cecilie har bidratt med',
            urlAuthor: '#',
            urlAuthorLabel: 'Les mer om Cecilie',
            title: 'Stilling',
            phone: '+47 123 45 678',
            email: 'cecilie@ndla.no',
            image: 'http://via.placeholder.com/200x200',
            introduction: 'Er fagleder for bla bla..',
          },
          {
            role: 'rolle',
            name: 'Siv Mundal',
            urlContributions: '#',
            urlContributionsLabel: 'Se hva Siv har bidratt med',
            urlAuthor: '#',
            urlAuthorLabel: 'Les mer om Siv',
            title: 'Stilling',
            phone: '+47 123 45 678',
            email: 'siv.mundal@keyteq.no',
            image: 'http://via.placeholder.com/200x200',
            introduction: 'Er fagleder for bla bla..',
          },
          {
            role: 'rolle',
            name: 'Pål Frøsndal',
            urlContributions: '#',
            urlContributionsLabel: 'Se hva Pål har bidratt med',
            urlAuthor: '#',
            urlAuthorLabel: 'Les mer om Cecilie',
            title: 'Stilling',
            phone: '+47 123 45 678',
            email: 'paal.fronsdal@ndla.no',
            image: 'http://via.placeholder.com/200x200',
            introduction: 'Er fagleder for bla bla..',
          },
        ]}
        updated="21.06.2018"
        license="CC BY-SA"
        licenseBox={<LicenseBox headingId="article-license-box-heading-id" />}
        additional
        messages={{
          lastUpdated: 'Publisert',
          authorLabel: 'Opphavsmenn',
          authorDescription: 'Denne artikkelen er laget av flere opphavsmenn',
          additionalLabel: 'Tilleggsstoff',
          useContent: 'Bruk innhold',
          closeLabel: 'Lukk',
        }}
      />
    </Center>
  ))
  .add('Brødsmulesti', () => (
    <Center>
      <h2 className="u-heading">Brødsmulesti eksempel</h2>
      <Breadcrumb />
      <h2 className="u-heading">Brødsmulesti-blokkeksempel</h2>
      <p>
        Blokkvarianten av brødsmulestien følger brukeren nedover siden. Den
        ligger i header. På små enheter vil blokkvarianten gjemmes.
        Brødsmulestien er fortsatt tilgjengelig øverst på siden.
      </p>
      <BreadcrumbBlock />
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
        <TopicIntroductionList
          shortcutAlwaysExpanded
          toTopic={() => '#'}
          messages={{
            shortcutButtonText: 'Lærestoff',
          }}
          topics={topicList}
        />
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
      <MastheadWithLogo />
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
              <LicenseBox headingId="licenseBox-headingId" />
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
          aktiviteter.
        </p>
        <p>
          Ved å klikke på «Tilleggsstoff» vil brukeren få vist også innhold som
          er tilleggsstoff. Det er ellers skjult. Tilleggsstoffet er merket med
          T-ikonet, samt med en noe dusere farge. Sjekkboksen skal være markert
          når tilleggsstoff er aktivt.
        </p>
        <p>Emneoverskriften viser hvilke emne man står i.</p>
      </StoryIntro>
      <LayoutItem layout="center">
        <Resources showTopicHeading />
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
        <h2 className="u-heading">Eksterne ressurser eksempel</h2>
        <p>
          Dersom en ekstern relatert artikkel ikke har metatekst, skal url vise.
        </p>
        <RelatedArticleExternal />
        <h2 className="u-heading">Eksempel med vis mer</h2>
        <RelatedArticleListExample />
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
          <Footer.Editor
            title="Ansvarlig redaktør:"
            name="Christer Gundersen"
          />
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
  .add('Nedlasting av filer', () => (
    <div>
      <StoryIntro title="Nedlasting av filer" />
      <StoryBody>
        <h2>Overskrift</h2>
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
        <FileListExample />
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
      <ErrorMessage
        illustration={{
          url: Oops,
          altText: 'Systemfeil',
        }}
        messages={{
          title: 'Oisann, her gikk noe galt',
          description: 'En kort beskrivelse av feilen som oppsto.',
          linksTitle: 'Kom igang:',
          back: 'Gå tilbake',
          goToFrontPage: 'Gå til forsiden',
        }}
      />
    </div>
  ))

  .add('Oversettelse', () => (
    <div>
      <StoryIntro title="Oversettelse">
        <p>
          Ved oversettelser kan det bli lite oversiktlig å bruke tabeller,
          derfor kan man i disse tilfellene heller bruke en oversettelse-liste.
        </p>
      </StoryIntro>
      <StoryBody>
        <h2 className="u-heading">Oversettelseliste enkel</h2>
        <Translation index={1}>
          <TranslationLine>你叫什么名字？//你叫什麼名字？</TranslationLine>
          <TranslationLine>
            Nǐ jiào <strong>shénme</strong> míngzi?
          </TranslationLine>
          <TranslationLine>Hva heter du?</TranslationLine>
        </Translation>
        <Translation index={2}>
          <TranslationLine>你是学生。//你是學生。</TranslationLine>
          <TranslationLine>Nǐ shì xuésheng.</TranslationLine>
          <TranslationLine>Du er student.</TranslationLine>
        </Translation>
      </StoryBody>
      <StoryBody>
        <h2 className="u-heading">
          Oversettelseliste (Med props lang og langName definert)
        </h2>
        <Translation index={1}>
          <TranslationLine lang="cn" langName="Kinesisk">
            你叫什么名字？//你叫什麼名字？
          </TranslationLine>
          <TranslationLine lang="pn" langName="Pinyin">
            Nǐ jiào shénme míngzi?
          </TranslationLine>
          <TranslationLine lang="nb" langName="Norsk">
            Hva heter du?
          </TranslationLine>
        </Translation>
        <Translation index={2}>
          <TranslationLine lang="cn" langName="Kinesisk">
            你是学生。//你是學生。
          </TranslationLine>
          <TranslationLine lang="pn" langName="Pinyin">
            Nǐ shì xuésheng.
          </TranslationLine>
          <TranslationLine lang="nb" langName="Norsk">
            Du er student.
          </TranslationLine>
        </Translation>
        <h2 className="u-heading">Språkvelger</h2>
        <TranslationBoxExample />
      </StoryBody>
    </div>
  ));
