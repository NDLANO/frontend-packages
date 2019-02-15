/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { BY, SA, NC, ND, PD, CC0, COPYRIGHTED } from '@ndla/licenses';
import {
  ErrorMessage,
  FilterList,
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
  RadioButtonGroup,
} from '@ndla/ui';
import Pager from '@ndla/pager';

import { StoryIntro, StoryBody } from './wrappers';
import { Center } from './helpers';
import ArticleLoader from './article/ArticleLoader';
import { FigureImage } from './article/FigureImage';
import { topicList } from '../dummydata/index';
import MastheadWithTopicMenu, { MastheadWithLogo } from './molecules/mastheads';
import Tabs, { TabsControlled } from './molecules/tabs';
import Resources from './molecules/resources';
import LicenseBox from './article/LicenseBox';
import NotionExample from './organisms/NotionExample';
import Breadcrumb, { BreadcrumbBlock } from './molecules/breadcrumbs';
import RelatedArticleListExample, {
  RelatedArticleExerciseList,
  RelatedArticleMixedList,
  RelatedArticleExternal,
} from './article/RelatedArticleListExample';
import { LanguageSelector } from './LanguageWrapper';
import FileListExample from './molecules/FileListExample';
import TranslationBoxExample from './organisms/TranslationBoxExample';
import ModalExample from './molecules/ModalExample';

import Oops from '../images/oops.gif';
import cecilie from '../images/cecilie.png';
import ComponentInfo from './ComponentInfo';

import ListViewExample from './organisms/ListViewExample';

storiesOf('Sammensatte moduler', module)
  .add('Artikkel info linje', () => (
    <div>
      <StoryIntro title="Artikkel informasjonslinje">
        <p>
          Innholder informasjon om forfatter(e), lisensrettigheter, beskrivelse
          av regler ved bruk av innhold, ikon hvis artikkel er tilleggsstoff og
          dato for forrige oppdatering.
        </p>
      </StoryIntro>
      <StoryBody layout="extend">
        <LanguageSelector />
        <h2 className="u-heading">Linje artikkel enkel variant</h2>
        <ArticleByline
          authors={[
            {
              name: 'Cecilie Isaksen Eftedal',
              shortName: 'Cecilie',
              role: 'Forfatter',
            },
            {
              name: 'Pål Frønsdal',
              shortName: 'Pål',
              role: 'Manusforfatter',
            },
          ]}
          updated="21.06.2018"
          license="CC BY-SA"
        />
        <h2 className="u-heading">Linje med tilleggsstoff og lisensboks</h2>
        <ArticleByline
          authors={[
            {
              name: 'Cecilie Isaksen Eftedal',
              shortName: 'Cecilie',
            },
          ]}
          updated="21.06.2018"
          license="CC BY-SA"
          licenseBox={<LicenseBox />}
          additional
        />
        <h2 className="u-heading">Linje med detaljert opphaver informasjon</h2>
        <ArticleByline
          authors={[
            {
              role: 'rolle',
              name: 'Cecilie Isaksen Eftedal',
              shortName: 'Cecilie',
              urlContributions: '#',
              urlAuthor: '#',
              licenses: 'CC BY-SA',
              title: 'Stilling',
              phone: '+47 123 45 678',
              email: 'cecilie@ndla.no',
              image: cecilie,
              introduction:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            },
          ]}
          updated="21.06.2018"
          license="CC BY-SA"
          licenseBox={<LicenseBox />}
          additional
        />
        <h2 className="u-heading">
          Linje med flere opphavere med detaljert informasjon
        </h2>
        <ArticleByline
          authors={[
            {
              role: 'Forfatter',
              name: 'Cecilie Isaksen Eftedal',
              shortName: 'Cecilie',
              urlContributions: '#',
              urlAuthor: '#',
              licenses: 'CC BY-SA',
              title: 'Stilling',
              phone: '+47 123 45 678',
              email: 'cecilie@ndla.no',
              image: cecilie,
              introduction:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            },
            {
              role: 'Illustratør',
              name: 'Siv Mundal',
              shortName: 'Siv',
              urlContributions: '#',
              urlAuthor: '#',
              licenses: 'CC BY-SA',
              title: 'Stilling',
              phone: '+47 123 45 678',
              email: 'siv.mundal@keyteq.no',
              image: cecilie,
              introduction:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            },
            {
              role: 'Manusforfatter',
              name: 'Pål Frønsdal',
              shortName: 'Pål',
              urlContributions: '#',
              urlAuthor: '#',
              licenses: 'CC BY-SA',
              title: 'Stilling',
              phone: '+47 123 45 678',
              email: 'paal.fronsdal@ndla.no',
              image: cecilie,
              introduction:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            },
          ]}
          updated="21.06.2018"
          license="CC BY-SA"
          licenseBox={<LicenseBox />}
        />
        <h2 className="u-heading">
          Linje uten opphavere detaljert informasjon
        </h2>
        <ArticleByline
          updated="21.06.2018"
          license="CC BY-SA"
          licenseBox={<LicenseBox />}
        />
      </StoryBody>
    </div>
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
      <NotionExample />
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
        <LanguageSelector />
        <TopicIntroductionList
          toTopic={() => '#'}
          topics={topicList}
          toggleAdditionalCores={() => {}}
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
  .add('Radiobuttons', () => (
    <div>
      <StoryIntro title="Filter">
        <p>
          Radiobutton group komponent som håndterer states og gir callback ved
          endring
        </p>
      </StoryIntro>
      <StoryBody>
        <ComponentInfo
          reactCode={`
  <RadioButtonGroup
    options={[
      { title: '1T', value: '1T' },
      { title: 'R1', value: 'R1' },
      { title: 'R2', value: 'R2' },
      { title: 'S1', value: 'S1' },
    ]}
    onChange={(value) => {
      console.log('changed to', value);
    }}
  />
          `}
          usesPropTypes={[
            {
              name: 'options',
              type: 'ArrayOf(Shape)',
              default: 'Required',
              description: `[{ title: '1T', value '1T' }, { title: 'R1', value: 'R1' }]`,
            },
            {
              name: 'onChange',
              type: 'Function',
              default: 'Required',
              description: '(val) => {}',
            },
            {
              name: 'uniqeIds',
              type: 'Bool',
              default: 'null',
              description:
                'Lager unike id på input og label. Sørger for at ikke htmlFor og input name/id ikke krasjer med andre komponenter på siden',
            },
          ]}
          status={2}>
          <h2 className="u-heading">Radiobuttons (group) uten label</h2>
          <div className="c-filter u-margin-top">
            <RadioButtonGroup
              options={[
                { title: '1T', value: '1T' },
                { title: 'R1', value: 'R1' },
                { title: 'R2', value: 'R2' },
                { title: 'S1', value: 'S1' },
              ]}
              onChange={value => {
                console.log('changed to', value); // eslint-disable-line no-console
              }}
            />
          </div>
          <h2 className="u-heading">Radiobuttons (group) med label</h2>
          <div className="c-filter u-margin-top">
            <RadioButtonGroup
              options={[
                { title: '1T', value: '1T' },
                { title: 'R1', value: 'R1' },
                { title: 'R2', value: 'R2' },
                { title: 'S1', value: 'S1' },
              ]}
              uniqeIds
              label="Velg fag"
              onChange={value => {
                console.log('changed to', value); // eslint-disable-line no-console
              }}
            />
          </div>
        </ComponentInfo>
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
            locale="nb"
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
        <FigureImage
          alt=""
          src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
          runScripts
        />
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
  .add('Sidefot', () => (
    <Center>
      <Footer>
        <div className="footer_form">
          {/* eslint-disable jsx-a11y/label-has-associated-control  */}
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
  ))

  .add('Modalboks', () => (
    <div>
      <StoryIntro title="Modalboks">
        <p>Some tekst</p>
      </StoryIntro>
      <StoryBody>
        <ModalExample />
      </StoryBody>
    </div>
  ))

  .add('Listevisning', () => (
    <PageContainer>
      <StoryIntro title="Listevisning" />
      <Center>
        <ListViewExample />
      </Center>
    </PageContainer>
  ));
