import { Component } from 'react';
import { UploadDropZone } from '@ndla/forms';

class UploadDropZoneExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedFiles: [],
      uploading: false,
    };
    this.addedFiles = this.addedFiles.bind(this);
  }

  addedFiles(newFiles) {
    clearInterval(this.fakeTimer);
    this.setState(
      {
        uploading: true,
      },
      () => {
        this.fakeTimer = setTimeout(() => {
          this.setState((prevState) => ({
            addedFiles: prevState.addedFiles.concat(newFiles),
            uploading: false,
          }));
        }, 500);
      },
    );
  }

  render() {
    const { addedFiles, uploading } = this.state;
    return (
      <div>
        <UploadDropZone
          allowedFiles={[
            'application/pdf',
            'image/gif',
            'image/png',
            'image/jpeg',
            'image/jpg',
            'image/svg+xml',
            '.js',
          ]}
          onAddedFiles={this.addedFiles}
          multiple
          ariaLabel="Upload example"
          loading={uploading}
        >
          <strong>Dra og slipp</strong> eller trykk for å laste opp bilde(r)
        </UploadDropZone>
        <ul>
          {addedFiles.map((file) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UploadDropZoneExample;
