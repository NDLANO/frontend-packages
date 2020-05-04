/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import { CodeBlockEditor } from '@ndla/editor';

class CodeBlockEditorExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CodeBlockEditor />;
  }
}

export default CodeBlockEditorExample;
