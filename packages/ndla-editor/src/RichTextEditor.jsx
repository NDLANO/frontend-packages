/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import {
  ItalicButton, BoldButton, UnderlineButton,
  HeadlineTwoButton, HeadlineThreeButton,
  UnorderedListButton, BlockquoteButton,
} from 'draft-js-buttons';
import decorateComponentWithProps from 'decorate-component-with-props';

import BlockTypeSelect from './BlockTypeSelect';
import BaseEditor from './BaseEditor';


const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [ItalicButton, BoldButton, UnderlineButton, HeadlineTwoButton, HeadlineThreeButton, UnorderedListButton, BlockquoteButton],
});

const sideToolbarPlugin = createSideToolbarPlugin({
  structure: [
    decorateComponentWithProps(BlockTypeSelect, { structure: [UnorderedListButton, HeadlineTwoButton, HeadlineThreeButton, BlockquoteButton] }),
  ],
});

const plugins = [inlineToolbarPlugin, sideToolbarPlugin];

const { InlineToolbar } = inlineToolbarPlugin;
const { SideToolbar } = sideToolbarPlugin;

const RichTextEditor = props => (
  <BaseEditor {...props} plugins={plugins} >
    <InlineToolbar />
    <SideToolbar />
  </BaseEditor>
);

RichTextEditor.propTypes = {
  value: PropTypes.shape({
    _immutable: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default RichTextEditor;
