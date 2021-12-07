import { Component } from 'react';
import { FileList } from '@ndla/ui';
import { addFilelistTooltipListners } from '@ndla/article-scripts';

class FileListExample extends Component {
  componentDidMount() {
    addFilelistTooltipListners();
  }

  render() {
    return (
      <FileList
        heading="Filer"
        id="file-example"
        files={[
          {
            title: 'Kontrast og balanse i grafisk design',
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
            formats: [
              {
                url: '#1',
                fileType: 'pdf',
                tooltip: 'Last ned fil: lorumipsum.pdf  (10 MB)',
              },
            ],
          },
        ]}
      />
    );
  }
}

export default FileListExample;
