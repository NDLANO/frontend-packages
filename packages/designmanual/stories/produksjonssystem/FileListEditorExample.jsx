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
          renderInline: true,
        },
        {
          path: 'http://www.exampleurl2.com',
          title: 'Filename 2',
          type: 'pdf',
          renderInline: false,
        },
        {
          path: 'http://www.exampleurl3.com',
          title: 'Filename 3',
          type: 'pdf',
          renderInline: false,
        },
        {
          path: 'http://www.exampleurl4.com',
          title: 'Filename 4',
          type: 'txt',
          renderInline: false,
        },
        {
          path: 'http://www.exampleurl5.com',
          title: 'Filename 5',
          type: 'txt',
          renderInline: false,
        },
        {
          path: 'http://www.exampleurl6.com',
          title: 'Filename 6',
          type: 'txt',
          renderInline: false,
        },
      ],
    };
    this.onUpdateFileName = this.onUpdateFileName.bind(this);
    this.onMovedFile = this.onMovedFile.bind(this);
    this.onDeleteFile = this.onDeleteFile.bind(this);
    this.toggleInlineRender = this.toggleInlineRender.bind(this);
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

  toggleInlineRender(index) {
    this.setState(prevState => ({
      addedFiles: prevState.addedFiles.map((file, i) =>
        i === index ? { ...file, renderInline: !file.renderInline } : file,
      ),
    }));
  }

  render() {
    const { addedFiles } = this.state;

    return (
      <FileListEditor
        files={addedFiles}
        onEditFileName={this.onUpdateFileName}
        onMovedFile={this.onMovedFile}
        onDeleteFile={this.onDeleteFile}
        showCheckboxes={true}
        toggleCheckbox={this.toggleInlineRender}
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
