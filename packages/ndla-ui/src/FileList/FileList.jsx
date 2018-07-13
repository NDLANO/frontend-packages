import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import File from './File';

const classes = BEMHelper('c-file-list');

const FileList = ({ files, heading, id }) => (
  <section {...classes()}>
    <h1 {...classes('heading')}>{heading}</h1>
    <ul {...classes('files')}>
      {files.map(file => (
        <File key={`file-${file.title}`} file={file} id={id} />
      ))}
    </ul>
  </section>
);

FileList.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      formats: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          fileType: PropTypes.string.isRequired,
          tooltip: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default FileList;
