import React from 'react';

import { storiesOf } from '@kadira/storybook';

import { Center } from './helpers';

storiesOf('Konsepter', module)
  .add('Navngivning av innholdselementer', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Navngivning</h1>
          <p />
        </section>
        <section>
          <ul>Hovedskiller for emner og lærestoff:
            <li>Kjernestoff</li>
            <li>Tilvalgstoff</li>
          </ul>
        </section>
        <section>
          <ul>Innholdskategorier for lærestoff
            <li>Emnebeskrivelse</li>
            <li>Fagstoff (Fagtekster, Bilder, Video, Historiske kilder, …)</li>
            <li>Læringsstier</li>
            <li>Oppgaver og aktiviteter</li>
          </ul>
        </section>
      </article>
    </Center>
  ));
