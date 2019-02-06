/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import { FileListEditor } from '@ndla/editor';

class StructureExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedFiles: [
        {
          path: 'http://www.exampleurl.com',
          title: 'Filename',
          type: 'pdf',
        },
        {
          path: 'http://www.exampleurl.com',
          title: 'Filename 2',
          type: 'pdf',
        },
        {
          path: 'http://www.exampleurl.com',
          title: 'Filename 3',
          type: 'pdf',
        },
        {
          path: 'http://www.exampleurl.com',
          title: 'Filename 4',
          type: 'pdf',
        },
        {
          path: 'http://www.exampleurl.com',
          title: 'Filename 5',
          type: 'pdf',
        },
        {
          path: 'http://www.exampleurl.com',
          title: 'Filename 6',
          type: 'pdf',
        }
      ],
    };
    this.onUpdateFileName = this.onUpdateFileName.bind(this);
    this.onUpdateOrder = this.onUpdateOrder.bind(this);
  }

  onUpdateOrder(addedFiles) {
    this.setState({
      addedFiles,
    });
  }

  onUpdateFileName(index, value) {
    this.setState(prevState => {
      const { addedFiles } = prevState;
      addedFiles[index].title = value;
      return {
        addedFiles,
        changedData: true,
      };
    });
  }

  render() {
    const {
      addedFiles,
    } = this.state;

    return (
      <FileListEditor
        files={addedFiles}
        onEditFileName={this.onUpdateFileName}
        onUpdateOrder={this.onUpdateOrder}
      />
    );
  }
}

export default StructureExample;
