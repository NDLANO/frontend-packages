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
import { convertToRaw } from 'draft-js';
import createFocusPlugin from 'draft-js-focus-plugin';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import {
  ItalicButton, BoldButton, UnderlineButton,
  HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton,
  UnorderedListButton, BlockquoteButton,
} from 'draft-js-buttons';
import createToolbarPlugin from './ToolbarPlugin';
import createImagePlugin from './ImagePlugin';
// import createImagePlugin from 'draft-js-image-plugin';
import ImageAdd from './ImageAdd';

const focusPlugin = createFocusPlugin();

/* inline toolbar */
const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    ItalicButton, BoldButton, UnderlineButton,
    HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton,
    UnorderedListButton, BlockquoteButton,
  ],
});

const toolbarPlugin = createToolbarPlugin({
  structure: [
    ItalicButton, BoldButton, UnderlineButton,
    HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton,
    UnorderedListButton, BlockquoteButton,
  ],
});

const imagePlugin = createImagePlugin();

const { InlineToolbar } = inlineToolbarPlugin;
const { Toolbar } = toolbarPlugin;

/* Undo Redo */
const plugins = [
  focusPlugin, inlineToolbarPlugin, toolbarPlugin, imagePlugin,
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

    const raw = convertToRaw(editorState.getCurrentContent());
    console.log(raw);
    // console.log(JSON.stringify(raw));
  }


  focus() {
    this.editor.focus();
  }

  render() {
    return (
      <div className="editor-container">
        {/* Wait for editor initialization before rendering toolbar */}
        {this.editor && <Toolbar />}
        {/* // eslint-disable-next-line */}
        <div className="editor" onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
          <InlineToolbar />
        </div>
        <ImageAdd
          editorState={this.state.editorState}
          onChange={this.onChange}
          modifier={imagePlugin.addImage}
        />
      </div>
    );
  }
}
