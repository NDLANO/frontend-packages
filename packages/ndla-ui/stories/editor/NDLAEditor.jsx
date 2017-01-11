/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

 /* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component, PropTypes } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState, convertToRaw } from 'draft-js';
import createFocusPlugin from 'draft-js-focus-plugin';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import {
  ItalicButton, BoldButton, UnderlineButton,
  HeadlineTwoButton, HeadlineThreeButton,
  UnorderedListButton, BlockquoteButton,
} from 'draft-js-buttons';
import createToolbarPlugin from './ToolbarPlugin';
import createImagePlugin from './ImagePlugin';
import createParagraphPlugin from './paragraphPlugin';
import createHandleKeyCommandPlugin from './handleKeyCommandPlugin';
import createResourcePlaceholderPlugin from './resourcePlaceholderPlugin';
// import createImagePlugin from 'draft-js-image-plugin';
import ImageAdd from './ImageAdd';


const focusPlugin = createFocusPlugin();

/* inline toolbar */
const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    ItalicButton, BoldButton, UnderlineButton,
    HeadlineTwoButton, HeadlineThreeButton,
    UnorderedListButton, BlockquoteButton,
  ],
});

const toolbarPlugin = createToolbarPlugin({
  structure: [
    ItalicButton, BoldButton, UnderlineButton,
    HeadlineTwoButton, HeadlineThreeButton,
    UnorderedListButton, BlockquoteButton,
  ],
});

const imagePlugin = createImagePlugin();

const { InlineToolbar } = inlineToolbarPlugin;
// const { Toolbar } = toolbarPlugin;

/* Undo Redo */
const plugins = [
  focusPlugin, inlineToolbarPlugin, toolbarPlugin, imagePlugin,
  createHandleKeyCommandPlugin(), createParagraphPlugin(), createResourcePlaceholderPlugin(),
];

export default class NDLAEditor extends Component {


  constructor(props) {
    super(props);
    this.state = {
      editorState: props.editorState ? props.editorState : EditorState.createEmpty(),
    };

    this.logState = () => {
      const content = this.state.editorState.getCurrentContent();
      console.info(convertToRaw(content)); //eslint-disable-line
    };

    this.onChange = this.onChange.bind(this);
    this.focus = this.focus.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });

    // console.log(convertToRaw(editorState.getCurrentContent()));
  }


  focus() {
    this.editor.focus();
  }

  render() {
    return (
      <article className="editor-container article">
        {/* Wait for editor initialization before rendering toolbar */}
        {/* {this.editor && <Toolbar />} */}
        <div className="editor" onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            handleKeyCommand={this.handleKeyCommand}
            ref={(element) => { this.editor = element; }}
          />
          <InlineToolbar />
        </div>
        <ImageAdd
          editorState={this.state.editorState}
          onChange={this.onChange}
          modifier={imagePlugin.addImage}
        />
        <input
          onClick={this.logState}
          type="button"
          value="Log State"
        />
      </article>
    );
  }
}

NDLAEditor.propTypes = {
  editorState: PropTypes.object,
};
