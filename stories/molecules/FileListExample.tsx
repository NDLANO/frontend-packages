import { Component } from 'react';
import { initTooltips } from '@ndla/tooltip';
import { FileList } from '@ndla/ui';

class FileListExample extends Component {
  componentDidMount() {
    initTooltips();
  }

  render() {
    return (
      <FileList
        heading="Filer"
        id="file-example"
        files={[
          {
            title: 'Kontrast og balanse i grafisk design',
            fileExists: true,
            formats: [
              {
                url: '#1',
                fileType: 'pdf',
                tooltip: 'Last ned fil: kontastogbalanse.pdf  (25 MB)',
              },
              {
                url: '#2',
                fileType: 'odf',
                tooltip: 'Last ned fil: kontastogbalanse.odf  (20 MB)',
              },
            ],
          },
          {
            title: 'Lorum ipsum',
            fileExists: true,
            formats: [
              {
                url: '#1',
                fileType: 'pdf',
                tooltip: 'Last ned fil: lorumipsum.pdf  (10 MB)',
              },
            ],
          },
          {
            title: 'En vakker dag i skogen',
            fileExists: false,
            formats: [
              {
                url: '#3',
                fileType: 'pdf',
                tooltip: 'Last ned fil: vakker_dag_i_skogen.pdf  (1337 MB)',
              },
            ],
          },
        ]}
      />
    );
  }
}

export default FileListExample;
