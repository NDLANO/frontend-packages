import React from 'react';
import BEMHelper from 'react-bem-helper';
import File from './File';

const classes = BEMHelper('c-file-list');

export interface FileType {
  title: string;
  formats: FileFormat[];
  fileExists?: boolean;
}

export interface FileFormat {
  url: string;
  fileType: string;
  tooltip: string;
}

interface Props {
  id: string;
  heading: string;
  files: FileType[];
}

const FileList = ({ files, heading, id }: Props) => (
  <section {...classes()}>
    <h1 {...classes('heading')}>{heading}</h1>
    <ul {...classes('files')}>
      {files.map((file) => (
        <File key={`file-${id}-${file.title}`} file={file} id={id} />
      ))}
    </ul>
  </section>
);

export default FileList;
