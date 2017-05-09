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
import BEMHelper from 'react-bem-helper';
import createBasicStylePlugin from './basicStylePlugin';
import createHandleKeyEventsPlugin from './handleKeyEventsPlugin';
import createResourcePlaceholderPlugin from './resourcePlaceholderPlugin';


const basePlugins = [
  createHandleKeyEventsPlugin(), createBasicStylePlugin(), createResourcePlaceholderPlugin(),
];


const classes = new BEMHelper({
  name: 'editor',
  prefix: 'c-',
});

export default class BaseEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: props.editorState ? props.editorState : EditorState.createEmpty(),
      useAltStyle: true,
    };


    this.onChange = this.onChange.bind(this);
    this.focus = this.focus.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  focus() {
    this.editor.focus();
  }

  render() {
    const { children } = this.props;
    const plugins = [...basePlugins, ...this.props.plugins];
    return (
      <article>
        <div {...classes(undefined, (this.state.useAltStyle && 'alt'))} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            handleKeyCommand={this.handleKeyCommand}
            ref={(element) => { this.editor = element; }}
          />
          {children}
        </div>
      </article>
    );
  }
}

BaseEditor.propTypes = {
  editorState: PropTypes.object,
  plugins: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
};

