/* eslint-disable no-alert */

import { storiesOf } from '@storybook/react';
import { StoryIntro, StoryBody } from './wrappers';
import { Center } from './helpers';
import Resources from './molecules/resources';
import { BreadcrumbDefault, BreadcrumbWithHeader, BreadcrumbWithHome } from './molecules/breadcrumbs';

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
