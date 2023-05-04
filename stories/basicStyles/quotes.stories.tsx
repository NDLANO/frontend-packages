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
import { StoryBody, StoryIntro } from '../wrappers';

const meta: Meta = {
  title: 'Grunnstiler/Sitater',
  parameters: defaultParameters,
};

export default meta;

export const Sitater: StoryFn = () => (
  <div>
    <StoryIntro title="Sitater">
      <p>
        Sitater som strekker seg inntil tre linjer i vanlig linjelengde kan markeres med &laquo;&raquo;. Sitater som
        strekker seg over tre linjer i vanlig linjelengde taes ut som et blokksitat.
      </p>
    </StoryIntro>
    <StoryBody>
      <h2 className="u-heading">Eksempel på blokksitat</h2>
      <blockquote>
        Vi elsker alle Noora i Skam. Vi ser opp til henne, vi vil være henne, og hun viser oss at det å tre ut av den
        typiske sildestimen alle absolutt skal følge, er kult. <br />
        (Jente 19 år, Si;D, Aftenposten 23. mai 2016)
      </blockquote>
      <h2>Sitat i liste</h2>
      <blockquote>
        <ol>
          <li>Første</li>
          <li>Andre</li>
          <li>Tredje</li>
        </ol>
      </blockquote>
    </StoryBody>
  </div>
);
