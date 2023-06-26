/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { OrderedList, UnOrderedList } from '@ndla/ui';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { defaultParameters } from '../defaults';
import { StoryBody, StoryIntro } from '../wrappers';

const meta: Meta = {
  title: 'Base styles/Lister',
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
      <h2 className="u-heading">Nummerert liste, tall</h2>
      <OrderedList>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>
          Listepunkt 3
          <OrderedList>
            <li>Listepunkt 1</li>
            <li>
              Listepunkt 2
              <OrderedList>
                <li>Listepunkt 1</li>
                <li>Listepunkt 2</li>
                <li>Listepunkt 3</li>
                <li>Listepunkt 4</li>
              </OrderedList>
            </li>
            <li>
              Listepunkt 3
              <OrderedList>
                <li>Listepunkt 1</li>
                <li>Listepunkt 2</li>
                <li>
                  Listepunkt 3
                  <OrderedList>
                    <li>Listepunkt 1</li>
                    <li>Listepunkt 2</li>
                    <li>Listepunkt 3</li>
                  </OrderedList>
                </li>
              </OrderedList>
            </li>
          </OrderedList>
        </li>
        <li>Listepunkt 4</li>
      </OrderedList>
      <h2 className="u-heading">Punktliste</h2>
      <UnOrderedList>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>
          Listepunkt 3
          <UnOrderedList>
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>
              Listepunkt 3
              <UnOrderedList>
                <li>Listepunkt 1</li>
                <li>Listepunkt 2</li>
                <li>
                  Listepunkt 3
                  <UnOrderedList>
                    <li>Listepunkt 1</li>
                    <li>Listepunkt 2</li>
                    <li>Listepunkt 3</li>
                  </UnOrderedList>
                </li>
              </UnOrderedList>
            </li>
          </UnOrderedList>
        </li>
        <li>Listepunkt 4</li>
      </UnOrderedList>
      <h2 className="u-heading">Nummerert liste, alfabetisk</h2>
      <OrderedList data-type="letters">
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>
          Listepunkt 3
          <OrderedList data-type="letters">
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>
              Listepunkt 3
              <OrderedList data-type="letters">
                <li>Listepunkt 1</li>
                <li>Listepunkt 2</li>
                <li>
                  Listepunkt 3
                  <OrderedList data-type="letters">
                    <li>Listepunkt 1</li>
                    <li>Listepunkt 2</li>
                    <li>Listepunkt 3</li>
                  </OrderedList>
                </li>
              </OrderedList>
            </li>
          </OrderedList>
        </li>
        <li>Listepunkt 4</li>
      </OrderedList>
      <h2 className="u-heading">Nummerert liste, med bokstaver i tillegg</h2>
      <OrderedList>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>
          Listepunkt 3
          <OrderedList data-type="letters">
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>
              Listepunkt 3
              <OrderedList data-type="letters">
                <li>Listepunkt 1</li>
                <li>Listepunkt 2</li>
                <li>
                  Listepunkt 3
                  <OrderedList data-type="letters">
                    <li>Listepunkt 1</li>
                    <li>Listepunkt 2</li>
                    <li>Listepunkt 3</li>
                  </OrderedList>
                </li>
              </OrderedList>
            </li>
          </OrderedList>
        </li>
        <li>Listepunkt 4</li>
      </OrderedList>
    </StoryBody>
  </div>
);
