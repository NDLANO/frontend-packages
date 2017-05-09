/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import {
  ItalicButton, BoldButton, UnderlineButton,
  UnorderedListButton, BlockquoteButton,
} from 'draft-js-buttons';
import BEMHelper from 'react-bem-helper';
import decorateComponentWithProps from 'decorate-component-with-props';

import BlockTypeSelect from './BlockTypeSelect';
import createBasicStylePlugin from './basicStylePlugin';
import createHandleKeyEventsPlugin from './handleKeyEventsPlugin';
import createResourcePlaceholderPlugin from './resourcePlaceholderPlugin';


const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [ItalicButton, BoldButton, UnderlineButton, UnorderedListButton, BlockquoteButton],
});

const sideToolbarPlugin = createSideToolbarPlugin({
  structure: [
    decorateComponentWithProps(BlockTypeSelect, { structure: [UnorderedListButton, BlockquoteButton] }),
  ],
});

const plugins = [
  inlineToolbarPlugin, sideToolbarPlugin,
  createHandleKeyEventsPlugin(), createBasicStylePlugin(), createResourcePlaceholderPlugin(),
];

const { InlineToolbar } = inlineToolbarPlugin;
const { SideToolbar } = sideToolbarPlugin;

const classes = new BEMHelper({
  name: 'editor',
  prefix: 'c-',
});

export default class RichTextEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: props.editorState ? props.editorState : EditorState.createEmpty(),
      useAltStyle: true,
    };


    this.onChange = this.onChange.bind(this);
    this.focus = this.focus.bind(this);
    this.toogleAltStyle = this.toogleAltStyle.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  toogleAltStyle() {
    this.setState({ useAltStyle: !this.state.useAltStyle });
  }

  focus() {
    this.editor.focus();
  }

  render() {
    return (
      <article>
        {/* Wait for editor initialization before rendering toolbar */}
        {/* {this.editor && <Toolbar />} */}
        <div {...classes(undefined, (this.state.useAltStyle && 'alt'))} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            handleKeyCommand={this.handleKeyCommand}
            ref={(element) => { this.editor = element; }}
          />
          <InlineToolbar />
          <SideToolbar />
        </div>
      </article>
    );
  }
}

RichTextEditor.propTypes = {
  editorState: PropTypes.instanceOf(EditorState),
};

