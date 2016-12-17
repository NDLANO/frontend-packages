/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

 /* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
// import { convertToRaw } from 'draft-js';
import createFocusPlugin from 'draft-js-focus-plugin';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import {
  ItalicButton, BoldButton, UnderlineButton,
  CodeButton, HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton,
  UnorderedListButton, BlockquoteButton,
} from 'draft-js-buttons';
import createUndoPlugin from 'draft-js-undo-plugin';

const focusPlugin = createFocusPlugin();

/* inline toolbar */
const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    ItalicButton, BoldButton, UnderlineButton,
    CodeButton, HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton,
    UnorderedListButton, BlockquoteButton,
  ],
});

const { InlineToolbar } = inlineToolbarPlugin;

/* Undo Redo */
const undoPlugin = createUndoPlugin();
const { UndoButton, RedoButton } = undoPlugin;
const plugins = [
  focusPlugin, inlineToolbarPlugin, undoPlugin,
];

export default class NDLAEditor extends Component {


  constructor(props) {
    super(props);
    this.state = {
      editorState: createEditorStateWithText('Dette er en tekst'), //EditorState.createEmpty(),
    };

    this.onChange = this.onChange.bind(this);
    this.focus = this.focus.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });

    // const raw = convertToRaw(editorState.getCurrentContent());
    // console.log(JSON.stringify(raw));
  }


  focus() {
    this.editor.focus();
  }

  render() {
    return (
      <div>
        {/* // eslint-disable-next-line */}
        <div className="editor" onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
          <InlineToolbar />
          <div className="options">
            <UndoButton />
            <RedoButton />
          </div>
        </div>
      </div>
    );
  }
}
