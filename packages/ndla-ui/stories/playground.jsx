/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { storiesOf } from '@storybook/react';
import NDLAEditor, { RichTextEditor, PlainTextEditor, withStateHandler } from 'ndla-editor';
import { convertFromRaw, EditorState } from 'draft-js';
import ArticleEditor from './editor/ArticleEditor';
import { Center } from './helpers';
import mockEditorState from '../dummydata/mockEditorState';

const StatefulRichTextEditor = withStateHandler(RichTextEditor);
const StatefulPlainTextEditor = withStateHandler(PlainTextEditor);
const StatefulNDLAEditor = withStateHandler(NDLAEditor);

storiesOf('Lekegrind', module)
  .add('NDLA editor uten innhold', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">NDLA Editor</h1>
      </section>
      <StatefulNDLAEditor placeholder="Fortell din historie..." />
    </Center>
  ))
  .add('NDLA editor med eksempel innhold', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">NDLA Editor</h1>
      </section>
      <StatefulNDLAEditor
        value={EditorState.createWithContent(convertFromRaw(mockEditorState))}
        placeholder="Fortell din historie..."
      />
    </Center>
  ))
  .add('NDLA editor med innhold', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">NDLA Editor</h1>
      </section>
      <ArticleEditor articleId="86" />
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
  .add('Rik tekst editor', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Rik tekst Editor</h1>
      </section>
      <StatefulRichTextEditor placeholder="Fortell din historie..." />
    </Center>
  ))
  .add('Enkel tekst editor', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Enkel tekst Editor</h1>
      </section>
      <StatefulPlainTextEditor placeholder="Fortell din historie..." />
    </Center>
  ))
;
