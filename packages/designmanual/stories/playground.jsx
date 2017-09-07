/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { storiesOf } from '@storybook/react';
import NDLAEditor, {
  RichTextEditor,
  PlainTextEditor,
  withStateHandler,
} from 'ndla-editor';
import { StoryIntro, StoryBody } from 'ndla-ui';
import { convertFromRaw, EditorState } from 'draft-js';
import ArticleEditor from './editor/ArticleEditor';
import mockEditorState from '../dummydata/mockEditorState';

const StatefulRichTextEditor = withStateHandler(RichTextEditor);
const StatefulPlainTextEditor = withStateHandler(PlainTextEditor);
const StatefulNDLAEditor = withStateHandler(NDLAEditor);

storiesOf('Lekegrind', module)
  .add('NDLA editor uten innhold', () =>
    <div>
      <StoryIntro title="NDLA editor uten innhold" />
      <StoryBody>
        <StatefulNDLAEditor placeholder="Fortell din historie..." />
      </StoryBody>
    </div>,
  )
  .add('NDLA editor med innhold', () =>
    <div>
      <StoryIntro title="NDLA editor med innhold" />
      <StoryBody>
        <StatefulNDLAEditor
          value={EditorState.createWithContent(convertFromRaw(mockEditorState))}
          placeholder="Fortell din historie..."
          />
      </StoryBody>
  </div>,
  )
  .add('Last artikkel i NDLA editor', () =>
    <div>
      <StoryIntro title="Last artikkel i NDLA editor" />
        <StoryBody>
          <ArticleEditor />
        </StoryBody>
    </div>,
  )
  .add('Rik teksteditor', () =>
    <div>
      <StoryIntro title="Rik teksteditor" />
      <StoryBody>
        <StatefulRichTextEditor placeholder="Fortell din historie..." />
      </StoryBody>
    </div>,
  )
  .add('Enkel teksteditor', () =>
    <div>
      <StoryIntro title="Enkel teksteditor" />
      <StoryBody>
        <StatefulPlainTextEditor placeholder="Fortell din historie..." />
      </StoryBody>
    </div>,
  );
