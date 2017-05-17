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
    this.focus = this.focus.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  focus() {
    this.editor.focus();
  }

  render() {
    const { children, className, value, onChange, plugins, ...rest } = this.props;
    const allPlugins = [...plugins, ...basePlugins];
    return (
      <article>
        <div {...classes(undefined, className)} onClick={this.focus}>
          <Editor
            editorState={value}
            onChange={onChange}
            plugins={allPlugins}
            handleKeyCommand={this.handleKeyCommand}
            ref={(element) => { this.editor = element; }}
            {...rest}
          />
          {children}
        </div>
      </article>
    );
  }
}

BaseEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    _immutable: PropTypes.object,
  }).isRequired,
  plugins: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  children: PropTypes.node,
};

