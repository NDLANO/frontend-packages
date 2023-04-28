/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { defaultParameters } from '../defaults';
import { StoryIntro } from '../wrappers';

const meta: Meta = {
  title: 'Grunnstiler/Luft og Avstand',
  parameters: defaultParameters,
};

export default meta;

export const Story: StoryFn = () => (
  <div>
    <StoryIntro title="Luft og avstand">
      <p>Vi baserer oss hovedsaklig på tre nivåer av luft/avstand:</p>
      <code>--spacing --spacing--small --spacing--large</code>
      <p>Hvor:</p>
      <div style={{ padding: '52px', background: '#eee' }}>
        <span
          style={{
            position: 'absolute',
            marginTop: '-38px',
            fontSize: '13px',
          }}
        >
          Spacing large (Store avstander): 52px
        </span>
        <div style={{ padding: '26px', background: '#ddd' }}>
          <span
            style={{
              position: 'absolute',
              marginTop: '-22px',
              fontSize: '13px',
            }}
          >
            Spacing (vanlig avstand): 26px
          </span>
          <div
            style={{
              padding: '13px',
              background: '#ccc',
              fontSize: '13px',
            }}
          >
            <span>Spacing small (Små avstander): 13px</span>
          </div>
        </div>
      </div>
      <p>
        Luft brukes for visuelt å gruppere elementer på en flate og føre oppmerksomheten mot de riktige elementene. Har
        et element mye luft rundt seg, får det lettere oppmerksomhet. Har to elementer lite luft mellom seg, oppfattes
        de gjerne som beslektet.
      </p>
      <p>
        Luft må også brukes for tilpassing til visning på ulike enheter. Vi ønsker å redusere avstandene på mindre
        enheter slik at innholdet der tar mindre plass. Er det brukt stor avstand et sted på store skjermer, blir det
        dermed reduseret til liten avstand på små skjermer.
      </p>
      <p>
        Når nye NDLA skal tas ut på nye flater, anbefales det å forholde seg til dette systemet, slik at det blir
        konsistent.
      </p>
    </StoryIntro>
  </div>
);

Story.storyName = 'Luft og Avstand';
