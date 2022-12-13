/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import { FileListEditor } from '@ndla/editor';

export function arrMove(array, fromIndex, toIndex) {
  const item = array[fromIndex];
  const length = array.length;
  const diff = fromIndex - toIndex;

  if (diff > 0) {
    return [
      ...array.slice(0, toIndex),
      item,
      ...array.slice(toIndex, fromIndex),
      ...array.slice(fromIndex + 1, length),
    ];
  } else if (diff < 0) {
    const targetIndex = toIndex + 1;
    return [
      ...array.slice(0, fromIndex),
      ...array.slice(fromIndex + 1, targetIndex),
      item,
      ...array.slice(targetIndex, length),
    ];
  }
  return array;
}

class StructureExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedFiles: [
        {
          path: 'http://www.exampleurl1.com',
          title: 'Filename',
          type: 'pdf',
          display: 'block',
        },
        {
          path: 'http://www.exampleurl2.com',
          title: 'Filename 2',
          type: 'pdf',
          display: 'inline',
        },
        {
          path: 'http://www.exampleurl3.com',
          title: 'Filename 3',
          type: 'pdf',
          display: 'block',
        },
        {
          path: 'http://www.exampleurl4.com',
          title: 'Filename 4',
          type: 'txt',
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
        },
      ],
    };
    this.onUpdateFileName = this.onUpdateFileName.bind(this);
    this.onMovedFile = this.onMovedFile.bind(this);
    this.onDeleteFile = this.onDeleteFile.bind(this);
    this.onToggleRenderInline = this.onToggleRenderInline.bind(this);
  }

  onMovedFile(from, to) {
    this.setState((prevState) => ({
      addedFiles: arrMove(prevState.addedFiles, from, to),
    }));
  }

  onUpdateFileName(index, value) {
    this.setState((prevState) => {
      const { addedFiles } = prevState;
      addedFiles[index].title = value;
      return {
        addedFiles,
        changedData: true,
      };
    });
  }

  onDeleteFile(index) {
    this.setState((prevState) => ({
      addedFiles: prevState.addedFiles.filter((_, i) => i !== index),
    }));
  }

  onToggleRenderInline(index) {
    this.setState((prevState) => ({
      addedFiles: prevState.addedFiles.map((file, i) => {
        return i === index
          ? {
              ...file,
              display: file.display === 'block' ? 'inline' : 'block',
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
          checkboxLabel: 'Vis ekspandert',
          checkboxTooltip: 'Vis ekspandert PDF i artikkel',
        }}
      />
    );
  }
}

export default StructureExample;
