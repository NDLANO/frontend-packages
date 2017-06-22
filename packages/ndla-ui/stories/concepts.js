import React from 'react';

import { storiesOf } from '@storybook/react';
import { LayoutItem } from '../src';
import { Center } from './helpers';

storiesOf('Konsepter', module)
  .add('Navngivning av innholdselementer', () => (
    <Center>
      <LayoutItem layout="center">
        <section className="c-factbox">
          <h1 className="u-heading">Navngivning</h1>
          <p />
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
      </LayoutItem>
    </Center>
  ));
