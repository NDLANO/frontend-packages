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
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  BlockquoteButton,
} from 'draft-js-buttons';

import BaseEditor from './BaseEditor';

const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    ItalicButton,
    BoldButton,
    UnderlineButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    BlockquoteButton,
  ],
});

const plugins = [inlineToolbarPlugin];

const { InlineToolbar } = inlineToolbarPlugin;

const RichTextEditor = props =>
  <BaseEditor {...props} plugins={plugins}>
    <InlineToolbar />
  </BaseEditor>;

RichTextEditor.propTypes = {
  value: PropTypes.shape({
    _immutable: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default RichTextEditor;
