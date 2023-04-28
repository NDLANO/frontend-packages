/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { defaultParameters } from '../defaults';
import { StoryBody, StoryIntro } from '../wrappers';

const meta: Meta = {
  title: 'Grunnstiler/Lister',
  parameters: defaultParameters,
};

export default meta;

export const Lister: StoryFn = () => (
  <div>
    <StoryIntro title="Lister">
      <p>
        Lister bør ikke inneholde flere enn 10 punkter. Har du mye mer, bør du vurdere å organisere innholdet
        annerledes.
      </p>
    </StoryIntro>
    <StoryBody>
      <h2 className="u-heading">Ren liste</h2>
      <ul className="o-list--bullets">
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>Listepunkt 3</li>
        <li>
          Underliste:
          <ul>
            <li>Underlistepunkt 1</li>
            <li>Underlistepunkt 2</li>
            <li>Underlistepunkt 3</li>
          </ul>
        </li>
      </ul>
      <h2 className="u-heading">Lister med lenker</h2>
      <ul className="o-list--bullets">
        <li>
          <a href="https://example.com">Listepunkt 1</a>
        </li>
        <li>
          <a href="https://example.com">Listepunkt 2</a>
        </li>
        <li>
          <a href="https://example.com">Listepunkt 3</a>
        </li>
      </ul>
      <h2 className="u-heading">Nummererte lister</h2>
      <ol>
        <li>Listepunkt</li>
        <li>Listepunkt</li>
        <li>
          Underliste:
          <ol className="ol-list--roman">
            <li>Underlistepunkt</li>
            <li>Underlistepunkt</li>
            <li>Underlistepunkt</li>
          </ol>
        </li>
      </ol>
      <h2 className="u-heading">Nummererte lister som starter på 3</h2>
      <ol className="ol-reset-3">
        <li>Listepunkt</li>
        <li>Listepunkt</li>
        <li>
          Underliste:
          <ol className="ol-list--roman">
            <li>Underlistepunkt</li>
            <li>Underlistepunkt</li>
            <li>Underlistepunkt</li>
          </ol>
        </li>
      </ol>
      <h2 className="u-heading">Alfabetiserte lister</h2>
      <ol className="ol-list--roman">
        <li>Listepunkt</li>
        <li>Listepunkt</li>
        <li>Listepunkt</li>
      </ol>
      <h2 className="u-heading">Alfabetiserte lister som starter på b</h2>
      <ol className="ol-list--roman ol-reset-2">
        <li>Listepunkt</li>
        <li>Listepunkt</li>
        <li>Listepunkt</li>
      </ol>
      <h2 className="u-heading">Kombinasjonsliste punkt, alfabetisert og nummerisk</h2>
      <ul className="o-list--bullets">
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>Listepunkt 3</li>
        <li>
          Underliste alfabetisert:
          <ol className="ol-list--roman">
            <li>Listepunkt</li>
            <li>Listepunkt</li>
            <li>Listepunkt</li>
          </ol>
        </li>
        <li>
          Underliste nummerert:
          <ol>
            <li>Listepunkt</li>
            <li>Listepunkt</li>
            <li>Listepunkt</li>
          </ol>
        </li>
      </ul>
      <h2 className="u-heading">Kombinasjonsliste nummerisk og punkt</h2>
      <ol>
        <li>Listepunkt</li>
        <li>Listepunkt</li>
        <li>Listepunkt</li>
        <li>
          Underliste punktliste:
          <ul className="o-list--bullets">
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>Listepunkt 3</li>
          </ul>
        </li>
      </ol>
    </StoryBody>
  </div>
);
