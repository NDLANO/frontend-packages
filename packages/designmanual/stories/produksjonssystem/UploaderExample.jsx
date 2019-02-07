import React, { Component } from 'react';
import Button from '@ndla/button';
import { UploadDropZone } from '@ndla/forms';

class UploadDropZoneExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedFiles: [],
    };
    this.addedFiles = this.addedFiles.bind(this);
  }

  addedFiles(newFiles) {
    this.setState(prevState => ({
      addedFiles: prevState.addedFiles.concat(newFiles),
    }));
  }

  render() {
    const { addedFiles } = this.state;
    return (
      <div>
        <UploadDropZone
          allowedFiles={['application/*', '.gif', '.csv']}
          onAddedFiles={this.addedFiles}
          multiple
          loading={addedFiles.length > 0}>
          <strong>Dra og slipp</strong> eller trykk for å laste opp bilde(r)
        </UploadDropZone>
        {addedFiles.map(file => (
          <Button key={file.name}>{file.name}</Button>
        ))}
      </div>
    );
  }
}

export default UploadDropZoneExample;
