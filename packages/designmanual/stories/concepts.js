import React from 'react';

import { storiesOf } from '@storybook/react';
import { StoryIntro, StoryBody } from 'ndla-ui';

storiesOf('Konsepter', module).add('Navngivning av innholdstyper', () =>
  <div>
    <StoryIntro title="Navngivning av innholdstyper" />
    <StoryBody>
        <h2 className="u-heading">Hovedskiller for emner og lærestoff:</h2>
        <ul>
          <li>Kjernestoff</li>
          <li>Tilleggstoff (Fordypningsstoff, tilvalgsstoff, annet)</li>
        </ul>
        <h2 className="u-heading">Innholdskategorier for lærestoff:</h2>
        <ul>
          <li>Emnebeskrivelse</li>
          <li>Lærestoff (Fagtekster, Bilder, Video, Historiske kilder, …)</li>
          <li>Læringsstier</li>
          <li>Oppgaver og aktiviteter</li>
        </ul>
    </StoryBody>
  </div>,
);
