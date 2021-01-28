/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import { FileListEditor } from '@ndla/editor';

class StructureExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedFiles: [
        {
          path: 'http://www.exampleurl1.com',
          title: 'Filename',
          type: 'pdf',
          'render-inline': 'true',
        },
        {
          path: 'http://www.exampleurl2.com',
          title: 'Filename 2',
          type: 'pdf',
        },
        {
          path: 'http://www.exampleurl3.com',
          title: 'Filename 3',
          type: 'pdf',
          'render-inline': 'false',
        },
        {
          path: 'http://www.exampleurl4.com',
          title: 'Filename 4',
          type: 'txt',
          'render-inline': 'false',
        },
        {
          path: 'http://www.exampleurl5.com',
          title: 'Filename 5',
          type: 'txt',
        },
        {
          path: 'http://www.exampleurl6.com',
          title: 'Filename 6',
          type: 'txt',
          'render-inline': 'false',
        },
      ],
    };
    this.onUpdateFileName = this.onUpdateFileName.bind(this);
    this.onMovedFile = this.onMovedFile.bind(this);
    this.onDeleteFile = this.onDeleteFile.bind(this);
    this.onToggleRenderInline = this.onToggleRenderInline.bind(this);
  }

  onMovedFile(from, to) {
    this.setState(({ addedFiles }) => ({
      addedFiles: addedFiles.map((file, i) => {
        if (i === from) return addedFiles[to];
        if (i === to) return addedFiles[from];
        return file;
      }),
    }));
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

  onDeleteFile(index) {
    this.setState(prevState => ({
      addedFiles: prevState.addedFiles.filter((_, i) => i !== index),
    }));
  }

  onToggleRenderInline(index) {
    this.setState(prevState => ({
      addedFiles: prevState.addedFiles.map((file, i) => {
        return i === index
          ? {
              ...file,
              'render-inline': (!(file['render-inline'] === 'true')).toString(),
            }
          : file;
      }),
    }));
  }

  render() {
    const { addedFiles } = this.state;
    const { withCheckboxes } = this.props;
    return (
      <FileListEditor
        files={addedFiles}
        onEditFileName={this.onUpdateFileName}
        onMovedFile={this.onMovedFile}
        onDeleteFile={this.onDeleteFile}
        onToggleRenderInline={this.onToggleRenderInline}
        showRenderInlineCheckbox={withCheckboxes}
        messages={{
          placeholder: 'Oppgi et filnavn',
          changeName: 'Endre navn',
          changeOrder: 'Endre rekkefølge',
          removeFile: 'Ta bort fil',
          missingFileTooltip:
            'Ser ikke ut til å eksistere på serveren. Den kan ha blitt slettet fra en annen artikkel.',
          missingTitle: '[Mangler filnavn]',
          renderInlineLabel: 'Vis PDF',
          renderInlineTooltip: 'Forhåndsvis PDF i artikkel',
        }}
      />
    );
  }
}

export default StructureExample;
