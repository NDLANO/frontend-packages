/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'draft-js';

const PlainTextEditor = ({ value, onChange, ...rest }) => {
  console.log(value);
  return <Editor editorState={value} onChange={onChange} {...rest} />;
};

PlainTextEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    _immutable: PropTypes.object,
  }).isRequired,
};


export default PlainTextEditor;
