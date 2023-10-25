/* eslint-disable no-alert */

import { storiesOf } from '@storybook/react';
import { Footer, PageContainer, EditorName, FooterText, LanguageSelector, Content } from '@ndla/ui';
import { StoryIntro, StoryBody } from './wrappers';
import { Center } from './helpers';
import { mockFooterLinks } from '../dummydata/index';
import Resources from './molecules/resources';
import { BreadcrumbDefault, BreadcrumbWithHeader, BreadcrumbWithHome } from './molecules/breadcrumbs';
import FileListExample from './molecules/FileListExample';

import FooterExample from './molecules/footers';
import ResourceBoxExample from './pages/ResourceBoxExample';

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
