/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { storiesOf } from '@kadira/storybook';

import { Center } from './helpers';
import NDLAEditor from './editor/NDLAEditor';
import ExampleEditor from './editor/ExampleEditor';
import ArticleEditor from './editor/ArticleEditor';


storiesOf('Lekegrind', module)
  .add('NDLA editor uten innhold', () => (
    <div>
      <h1>NDLA Editor</h1>
      <NDLAEditor />
    </div>
  ))
  .add('NDLA editor med eksempel innhold', () => (
    <div>
      <h1>NDLA Editor</h1>
      <ExampleEditor />
    </div>
  ))
  .add('NDLA editor med innhold', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">NDLA Editor</h1>
      </section>
      <ArticleEditor articleId="79" />
    </Center>
  ))
  .add('Last artikkel i NDLAEditor', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">NDLA Editor</h1>
      </section>
      <ArticleEditor />
    </Center>
  ))
;
