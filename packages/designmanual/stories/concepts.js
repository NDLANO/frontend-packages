import React from 'react';

import { storiesOf } from '@storybook/react';
import { Center } from './helpers';

storiesOf('Konsepter', module).add('Navngivning av innholdselementer', () =>
  <Center>
    <section className="c-factbox">
      <h1 className="u-heading">Navngivning</h1>
    </section>
    <section>
      <h2 className="u-heading">Hovedskiller for emner og lærestoff:</h2>
      <ul>
        <li>Kjernestoff</li>
        <li>Tilvalgstoff</li>
      </ul>
    </section>
    <section>
      <h2 className="u-heading">Innholdskategorier for lærestoff:</h2>
      <ul>
        <li>Emnebeskrivelse</li>
        <li>Lærestoff (Fagtekster, Bilder, Video, Historiske kilder, …)</li>
        <li>Læringsstier</li>
        <li>Oppgaver og aktiviteter</li>
      </ul>
    </section>
  </Center>,
);
