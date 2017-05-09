/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import {
  ItalicButton, BoldButton, UnderlineButton,
  UnorderedListButton, BlockquoteButton,
} from 'draft-js-buttons';
import decorateComponentWithProps from 'decorate-component-with-props';

import BlockTypeSelect from './BlockTypeSelect';
import BaseEditor from './BaseEditor';


const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [ItalicButton, BoldButton, UnderlineButton, UnorderedListButton, BlockquoteButton],
});

const sideToolbarPlugin = createSideToolbarPlugin({
  structure: [
    decorateComponentWithProps(BlockTypeSelect, { structure: [UnorderedListButton, BlockquoteButton] }),
  ],
});

const plugins = [inlineToolbarPlugin, sideToolbarPlugin];

const { InlineToolbar } = inlineToolbarPlugin;
const { SideToolbar } = sideToolbarPlugin;

const RichTextEditor = ({ editorState, className }) => (
  <BaseEditor editorState={editorState} className={className} plugins={plugins} >
    <InlineToolbar />
    <SideToolbar />
  </BaseEditor>
);

RichTextEditor.propTypes = {
  editorState: PropTypes.instanceOf(EditorState),
  className: PropTypes.string,
};

export default RichTextEditor;
