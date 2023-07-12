/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Translation, TranslationLine } from '@ndla/ui';
import { defaultParameters } from '../defaults';
import { StoryBody, StoryIntro } from '../wrappers';

const meta: Meta = {
  title: 'Base styles/Translations',
  parameters: defaultParameters,
};

export default meta;

export const Translations: StoryFn = () => (
  <div>
    <StoryIntro title="Oversettelser">
      <p>
        Ved oversettelser kan det bli lite oversiktlig å bruke tabeller, derfor kan man i disse tilfellene bruke en
        liste for oversettelser.
      </p>
      <p>Status: Ikke implementert på ndla.no eller i ED</p>
    </StoryIntro>
    <StoryBody>
      <Translation index={1}>
        <TranslationLine lang="zh-Hans" langName="Kinesisk" isTerm>
          你叫什么名字？你叫什麼名字？
        </TranslationLine>
        <TranslationLine lang="pn" langName="Pinyin">
          Nǐ jiào <strong>shénme</strong> míngzi?
        </TranslationLine>
        <TranslationLine lang="nb" langName="Norsk">
          Hva heter du?
        </TranslationLine>
      </Translation>
      <Translation index={2}>
        <TranslationLine lang="zh-Hans" langName="Kinesisk" isTerm>
          你叫什么名字？你叫什麼名字？
        </TranslationLine>
        <TranslationLine lang="pn" langName="Pinyin">
          Nǐ jiào shénme míngzi?
        </TranslationLine>
        <TranslationLine lang="nb" langName="Norsk">
          Hva heter du?
        </TranslationLine>
      </Translation>
    </StoryBody>
  </div>
);
