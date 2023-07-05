/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { BY, SA, NC, ND, PD, CC0, COPYRIGHTED } from '@ndla/licenses';
import { LicenseDescription } from '@ndla/notion';
import {
  ErrorMessage,
  FilterList,
  Footer,
  PageContainer,
  LayoutItem,
  Translation,
  TranslationLine,
  ArticleByline,
  RadioButtonGroup,
  EditorName,
  FooterText,
  LanguageSelector,
  Content,
} from '@ndla/ui';
import { Translation as I18nTranslate } from 'react-i18next';
import { StoryIntro, StoryBody } from './wrappers';
import { Center } from './helpers';
import ArticleLoader from './article/ArticleLoader';
import FigureImage from './article/FigureImage';
import { mockFooterLinks } from '../dummydata/index';
import MastheadWithTopicMenu, { MastheadWithLogo } from './molecules/mastheads';
import Resources from './molecules/resources';
import LicenseBox from './article/LicenseBox';
import NotionExample from './organisms/NotionExample';
import {
  BreadcrumbDefault,
  BreadcrumbWithHeader,
  BreadcrumbWithHome,
  BreadcrumbWithAction,
} from './molecules/breadcrumbs';
import RelatedArticleListExample, {
  RelatedArticleExerciseList,
  RelatedArticleMixedList,
  RelatedArticleExternal,
} from './article/RelatedArticleListExample';
import { LanguageSelector as LanguageSelectorStory } from './LanguageWrapper';
import FileListExample from './molecules/FileListExample';

import Oops from '../images/oops.gif';
import cecilie from '../images/cecilie.png';
import ComponentInfo from './ComponentInfo';

import CarouselExample from './organisms/CarouselExample';
import FooterExample from './molecules/footers';
import NotionBlockExample from './organisms/NotionBlockExample';
import MessageBox from './molecules/MessageBoxExample';
import ResourceBoxExample from './pages/ResourceBoxExample';

import TagSelectorExample from './molecules/TagSelectorExample';
import SnackbarExample from './molecules/SnackbarExample';

storiesOf('Patterns', module)
  .add('Article info line', () => (
    <div>
      <StoryIntro title="Artikkel informasjonslinje">
        <p>
          Innholder informasjon om forfatter(e), lisensrettigheter, beskrivelse av regler ved bruk av innhold, ikon hvis
          artikkel er tilleggsstoff og dato for forrige oppdatering.
        </p>
      </StoryIntro>
      <StoryBody layout="extend">
        <LanguageSelectorStory />
        <h2 className="u-heading">Linje artikkel enkel variant</h2>
        <ArticleByline
          authors={[
            {
              name: 'Frida Forfatter',
              shortName: 'Frida',
              role: 'Forfatter',
            },
            {
              name: 'Fred Forfatter',
              shortName: 'Fred',
              role: 'Manusforfatter',
            },
          ]}
          published="21.06.2018"
          license="CC BY-SA"
          copySourceReference="Hvordan lage dummydata, av Rolfsen, P., Sopra Steria. (https://ndla.no/article/55). CC BY-NC 4.0."
        />
        <h2 className="u-heading">Linje med tilleggsstoff og lisensboks</h2>
        <ArticleByline
          authors={[
            {
              name: 'Frida Forfatter',
              shortName: 'Frida',
            },
          ]}
          published="21.06.2018"
          license="CC BY-SA"
          licenseBox={<LicenseBox />}
          additional
          copySourceReference="Hvordan lage dummydata, av Rolfsen, P., Sopra Steria. (https://ndla.no/article/55). CC BY-NC 4.0."
        />
        <h2 className="u-heading">Linje med detaljert opphaver informasjon</h2>
        <ArticleByline
          authors={[
            {
              role: 'rolle',
              name: 'Frida Forfatter',
              shortName: 'Frida',
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
          copySourceReference="Hvordan lage dummydata, av Rolfsen, P., Sopra Steria. (https://ndla.no/article/55). CC BY-NC 4.0."
          published="21.06.2018"
          license="CC BY-SA"
          licenseBox={<LicenseBox />}
          additional
          embedLink="https://ndla.no/article-iframe/nb/urn:resource:2c243daf-f335-4bae-a022-95cc7f5e34b3/21844"
        />
        <h2 className="u-heading">Linje med flere opphavere med detaljert informasjon</h2>
        <ArticleByline
          authors={[
            {
              role: 'Forfatter',
              name: 'Frida Forfatter',
              shortName: 'Frida',
              urlContributions: '#',
              urlAuthor: '#',
              licenses: 'CC BY-SA',
              title: 'Stilling',
              phone: '+47 123 45 678',
              email: 'fridaforfatter@ndla.no',
              image: cecilie,
              introduction:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            },
            {
              role: 'Illustratør',
              name: 'Ida Illustratør',
              shortName: 'Ida',
              urlContributions: '#',
              urlAuthor: '#',
              licenses: 'CC BY-SA',
              title: 'Stilling',
              phone: '+47 123 45 678',
              email: 'idaillustrator@ndla.no',
              image: cecilie,
              introduction:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            },
            {
              role: 'Manusforfatter',
              name: 'Fred Forfatter',
              shortName: 'Fred',
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
          copySourceReference="Hvordan lage dummydata, av Rolfsen, P., Sopra Steria. (https://ndla.no/article/55). CC BY-NC 4.0."
          published="21.06.2018"
          license="CC BY-SA"
          licenseBox={<LicenseBox />}
        />
        <h2 className="u-heading">Linje uten opphavere detaljert informasjon</h2>
        <ArticleByline
          published="21.06.2018"
          license="CC BY-SA"
          licenseBox={<LicenseBox />}
          copySourceReference="Hvordan lage dummydata, av Rolfsen, P., Sopra Steria. (https://ndla.no/article/55). CC BY-NC 4.0."
        />
      </StoryBody>
    </div>
  ))

  .add('Image carousel', () => (
    <div>
      <StoryIntro title="Bildekarusell">
        <p>
          Bildekarusell består av 2 komponenter. En Wrapper komponent for automatisk utregning av størrelser, og selve
          bildekarusellen.
        </p>
      </StoryIntro>
      <StoryBody>
        <CarouselExample />
      </StoryBody>
    </div>
  ))
  .add('Block display term explanation', () => (
    <div>
      <StoryIntro title="Blokkvisning begrepsforklaring">
        <p>Brukes ved visning i artikkel og søk</p>
      </StoryIntro>
      <Center>
        <NotionBlockExample />
      </Center>
    </div>
  ))
  .add('Breadcrumb trail', () => (
    <Center>
      <h2 className="u-heading">Enkel brødsmulesti</h2>
      <BreadcrumbDefault />
      <h2 className="u-heading">Enkel brødsmulesti. Automatisk redusering av bredde</h2>
      <BreadcrumbDefault autoCollapse />
      <h2 className="u-heading">Brødsmulesti med header og styling</h2>
      <BreadcrumbWithHeader />
      <h2 className="u-heading">Brødsmulesti med forskjellige ikoner</h2>
      <BreadcrumbWithHome />
      <h2 className="u-heading">Brødsmulesti med Menuknapp</h2>
      <BreadcrumbWithAction />
    </Center>
  ))
  .add('Explanation of terms', () => (
    <Center>
      <NotionExample />
    </Center>
  ))
  .add('Subject description', () => (
    <Center>
      <ArticleLoader articleId="13661" reset />
    </Center>
  ))
  .add('Error message', () => (
    <div className="u-margin-bottom">
      <div>
        <StoryIntro title="Feilmelding">
          <p>
            Feilmeldingskomponenten lenker tilbake til forrige side eller til forsiden. Den brukes når det har oppstått
            en feil i systemet, f.eks. ved 404- eller 503-feil.
          </p>
        </StoryIntro>
        <Center>
          <h2 className="u-heading">Standard feilmelding ved 404: </h2>
        </Center>
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
      <Center>
        <h2 className="u-heading">Login feilet Min NDLA: </h2>
      </Center>
      <div className="u-margin-bottom">
        <ErrorMessage
          illustration={{
            url: Oops,
            altText: 'Systemfeil',
          }}
          messages={{
            title: 'Ops, her gikk noe galt',
            linksTitle: 'Prøv igjen',
            logInFailed: 'Logg inn',
          }}
        />
      </div>
    </div>
  ))

  .add('Filter', () => (
    <div>
      <StoryIntro title="Filter">
        <p>
          Alle elementer vises enten ingen eller alle filtervalg er valgt. Når brukeren klikker på et filter, skal dette
          umiddelbart reflekteres i innholdet som filtreres, uten at siden lastes på nytt.
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

  .add('Main head', () => (
    <div>
      <MastheadWithLogo />
    </div>
  ))
  .add('Main header with content', () => (
    <div>
      <MastheadWithTopicMenu />
    </div>
  ))
  .add('Main header with message box', () => (
    <I18nTranslate>
      {(t) => (
        <div>
          <MastheadWithTopicMenu messages={[{ content: t('messageBoxInfo.updateBrowser'), number: 1 }]} />
        </div>
      )}
    </I18nTranslate>
  ))
  .add('License icons', () => (
    <Center>
      <LayoutItem layout="center">
        <h2 className="u-heading">Lisensikoner og -merking med beskrivelse</h2>
        <div className="o-wrapper--inner">
          <LicenseDescription
            locale="nb"
            messages={{
              modelPremission: 'Personen(e) på bildet har godkjent at det kan brukes videre.',
            }}
            licenseRights={[BY, SA, NC, ND, PD, CC0, COPYRIGHTED]}
          />
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
        <h2 className="u-heading">Lisensikoner på enkeltelementer</h2>
        <FigureImage alt="" src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg" />
      </LayoutItem>
    </Center>
  ))
  .add('License box', () => (
    <PageContainer>
      <LayoutItem layout="wide">
        <h2 className="u-heading">Lisensboks</h2>
        <article className="article">
          <LayoutItem layout="center">
            <LicenseBox headingId="licenseBox-headingId" />
          </LayoutItem>
        </article>
      </LayoutItem>
    </PageContainer>
  ))
  .add('Learning resources', () => (
    <div>
      <StoryIntro title="Læringsressurser/launchpad">
        <p>
          Når ressurser listes opp, vises i utgangspunktet kun kjernestoff. Om tilleggsstoff-filteret aktiveres, vil
          ressursopplistingen utvides med tilleggsstoff. Tilleggsstoff markeres med T-ikon.
        </p>
        <p>
          Tilleggsstoff-filteret skal kun påvirke ressurstypen den er tilknyttet. Så hvis brukeren aktiverer
          tilleggsstoff for Fagstoff, vil bare Fagstoff-listen oppdateres med tilleggsstoff-elementer.
        </p>
      </StoryIntro>
      <StoryBody>
        <Resources />
      </StoryBody>
    </div>
  ))

  .add('Downloading files', () => (
    <div>
      <StoryIntro title="Nedlasting av filer" />
      <StoryBody>
        <h2>Overskrift</h2>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <FileListExample />
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
      </StoryBody>
    </div>
  ))

  .add('Message and info box', () => (
    <PageContainer>
      <StoryIntro title="Meldings- og infoboks">
        <p>
          Her kan du se forskjellige typer meldings- og infobokser. Disse kan anvendes ulike steder på sidene og
          forteller brukeren om at det foregår noe utenom det vanlige.
        </p>
      </StoryIntro>
      <Content>
        <MessageBox />
      </Content>
      <FooterExample />
    </PageContainer>
  ))

  .add('Translation', () => (
    <div>
      <StoryIntro title="Oversettelse">
        <p>
          Ved oversettelser kan det bli lite oversiktlig å bruke tabeller, derfor kan man i disse tilfellene heller
          bruke en oversettelse-liste.
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
        <h2 className="u-heading">Oversettelseliste (Med props lang og langName definert)</h2>
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
      </StoryBody>
    </div>
  ))

  .add('Radio buttons', () => (
    <div>
      <StoryIntro title="Filter">
        <p>Radiobutton group komponent som håndterer states og gir callback ved endring</p>
      </StoryIntro>
      <StoryBody>
        <ComponentInfo
          reactCode={`
  <RadioButtonGroup
    options={[
      { title: '1T', value: '1T' },
      { title: 'R1', value: 'R1' },
      { title: 'R2', value: 'R2' },
      { title: 'S1', value: 'S1' }
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
          status={2}
        >
          <h2 className="u-heading">Radiobuttons (group) uten label</h2>
          <div className="c-filter u-margin-top">
            <RadioButtonGroup
              options={[
                { title: '1T', value: '1T' },
                { title: 'R1', value: 'R1' },
                { title: 'R2', value: 'R2' },
                { title: 'S1', value: 'S1' },
              ]}
              onChange={(value) => {
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
              onChange={(value) => {
                console.log('changed to', value); // eslint-disable-line no-console
              }}
            />
          </div>
        </ComponentInfo>
      </StoryBody>
    </div>
  ))

  .add('Related content', () => (
    <I18nTranslate>
      {(t) => (
        <div>
          <StoryIntro title="Relatert innhold">
            <p>Kan brukes i slutten av artikler, eller midt i.</p>
          </StoryIntro>
          <StoryBody>
            <h2 className="u-heading">Oppgave og aktivitet eksempel</h2>
            <RelatedArticleExerciseList t={t} />
            <h2 className="u-heading">Fagstoff og oppgave eksempel</h2>
            <RelatedArticleMixedList t={t} />
            <h2 className="u-heading">Eksterne ressurser eksempel</h2>
            <p>Dersom eksternt relatert innhold ikke har metatekst, skal url vise.</p>
            <RelatedArticleExternal t={t} />
            <h2 className="u-heading">Eksempel med vis mer</h2>
            <RelatedArticleListExample t={t} />
          </StoryBody>
        </div>
      )}
    </I18nTranslate>
  ))
  .add('Side foot', () => {
    const privacyLinks = [
      { label: 'Personvernerklæring', url: 'https://om.ndla.no/gdpr' },
      { label: 'Erklæring om informasjonskapsler', url: 'https://om.ndla.no/cookies' },
    ];
    return (
      <Center>
        <Footer
          links={mockFooterLinks}
          languageSelector={<LanguageSelector inverted locales={['nb', 'nn']} onSelect={() => {}} />}
          privacyLinks={privacyLinks}
        >
          <FooterText>
            <EditorName title="Ansvarlig redaktør:" name="Sigurd Trageton" />
          </FooterText>
          <FooterText>Nettstedet er utarbeidet av NDLA med åpen kildekode.</FooterText>
        </Footer>
      </Center>
    );
  })

  .add('Resource from link', () => (
    <PageContainer>
      <StoryIntro title="Ressurs fra lenke">
        <p>Her kan du se forskjellige typer referansebokser. De brukes gjerne i artikler for å lenke til en ressurs.</p>
      </StoryIntro>
      <Content>
        <ResourceBoxExample />
      </Content>
      <FooterExample />
    </PageContainer>
  ))

  .add('Snack bar', () => (
    <PageContainer>
      <StoryIntro title="Snackbar" />
      <StoryBody>
        <Center>
          <SnackbarExample />
        </Center>
      </StoryBody>
      <FooterExample />
    </PageContainer>
  ))

  .add('Select tag', () => (
    <PageContainer>
      <StoryIntro title="Tag-velger">
        <p>Komponent for å tagge noe, primært tiltenkt Min NDLA</p>
      </StoryIntro>
      <Content>
        <TagSelectorExample />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Ungrouped learning resources', () => (
    <div>
      <StoryIntro title="Ugrupperte ressurser">
        <p>Brukere av ed kan spesifisere at ressurser skal vises ugruppert. Da vises alle ressurser i ei liste.</p>
      </StoryIntro>
      <StoryBody>
        <Resources showUngrouped />
      </StoryBody>
    </div>
  ));
