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
import { composeDecorators } from 'draft-js-plugins-editor';
import { EditorState, convertToRaw } from 'draft-js';
import createFocusPlugin from 'draft-js-focus-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import {
  ItalicButton, BoldButton, UnderlineButton,
  HeadlineTwoButton, HeadlineThreeButton,
  UnorderedListButton, BlockquoteButton,
} from 'draft-js-buttons';
import decorateComponentWithProps from 'decorate-component-with-props';

import BaseEditor from './BaseEditor';
import BlockTypeSelect from './BlockTypeSelect';
import createToolbarPlugin from './ToolbarPlugin';
import createImagePlugin from './imagePlugin';
import ImageAdd from './imagePlugin/ImageAdd';


const focusPlugin = createFocusPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
  focusPlugin.decorator,
  alignmentPlugin.decorator,
);


const imagePlugin = createImagePlugin({ decorator });

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

const sideToolbarPlugin = createSideToolbarPlugin({
  structure: [
    decorateComponentWithProps(BlockTypeSelect, { structure: [HeadlineTwoButton, HeadlineThreeButton, UnorderedListButton, BlockquoteButton] }),
  ],
});

const { SideToolbar } = sideToolbarPlugin;

const { InlineToolbar } = inlineToolbarPlugin;

const plugins = [
  focusPlugin, alignmentPlugin, inlineToolbarPlugin, toolbarPlugin, imagePlugin, sideToolbarPlugin,
];

export default class NDLAEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: props.editorState ? props.editorState : EditorState.createEmpty(),
      useAltStyle: true,
    };

    this.logState = () => {
      const content = this.state.editorState.getCurrentContent();
      console.info(convertToRaw(content)); //eslint-disable-line
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
      <BaseEditor value={this.state.editorState} onChange={this.onChange} plugins={plugins} >
        <AlignmentTool />
        <InlineToolbar />
        <SideToolbar />
        <div style={{ clear: 'both' }}>
          <ul style={{ listStyleType: 'none', padding: '10px 0 0 0', margin: 0 }}>
            <li style={{ marginTop: '10px' }}>
              <ImageAdd
                editorState={this.state.editorState}
                onChange={this.onChange}
                modifier={imagePlugin.addImage}
              />
            </li>
            <li style={{ marginTop: '10px' }}>
              <input
                onClick={this.logState}
                type="button"
                value="Log State"
              />
            </li>
            <li style={{ marginTop: '10px' }}>
              <input
                onClick={this.toogleAltStyle}
                type="button"
                value="Toggle alternative style"
              />
            </li>
          </ul>
        </div>
      </BaseEditor>
    );
  }
}

NDLAEditor.propTypes = {
  editorState: PropTypes.shape({
    _immutable: PropTypes.object,
  }).isRequired,
};
