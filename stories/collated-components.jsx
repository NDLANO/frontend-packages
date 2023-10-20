/* eslint-disable no-alert */

import { storiesOf } from '@storybook/react';
import { BY, SA, NC, ND, PD, CC0, COPYRIGHTED } from '@ndla/licenses';
import { LicenseDescription } from '@ndla/notion';
import {
  FilterList,
  Footer,
  PageContainer,
  LayoutItem,
  Translation,
  TranslationLine,
  EditorName,
  FooterText,
  LanguageSelector,
  Content,
} from '@ndla/ui';
import { Translation as I18nTranslate } from 'react-i18next';
import { StoryIntro, StoryBody } from './wrappers';
import { Center } from './helpers';
import { mockFooterLinks } from '../dummydata/index';
import MastheadWithTopicMenu from './molecules/mastheads';
import Resources from './molecules/resources';
import LicenseBox from './article/LicenseBox';
import { BreadcrumbDefault, BreadcrumbWithHeader, BreadcrumbWithHome } from './molecules/breadcrumbs';
import FileListExample from './molecules/FileListExample';


import FooterExample from './molecules/footers';
import MessageBox from './molecules/MessageBoxExample';
import ResourceBoxExample from './pages/ResourceBoxExample';

import TagSelectorExample from './molecules/TagSelectorExample';
import SnackbarExample from './molecules/SnackbarExample';

storiesOf('Patterns', module)
  .add('Breadcrumb', () => (
    <Center>
      <h2 className="u-heading">Enkel brødsmulesti</h2>
      <BreadcrumbDefault />
      <h2 className="u-heading">Enkel brødsmulesti. Automatisk redusering av bredde</h2>
      <BreadcrumbDefault autoCollapse />
      <h2 className="u-heading">Brødsmulesti med header og styling</h2>
      <BreadcrumbWithHeader />
      <h2 className="u-heading">Brødsmulesti med forskjellige ikoner</h2>
      <BreadcrumbWithHome />
    </Center>
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

  .add('Masthead with content', () => (
    <div>
      <MastheadWithTopicMenu />
    </div>
  ))
  .add('Masthead with message box', () => (
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
  .add('Footer', () => {
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

  .add('Snackbar', () => (
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
