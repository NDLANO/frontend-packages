import { Download } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import Tooltip from '@ndla/tooltip';
import React from 'react';
import BEMHelper from 'react-bem-helper';
import { FileFormat, FileType } from './FileList';

const classes = BEMHelper('c-file-list');

const renderFormat = (format: FileFormat, title: string, isPrimary: boolean, id: string, isDeadLink: boolean) => {
  const titleWithFormat = `${title} (${format.fileType.toUpperCase()})`;

  const formatId = `${id}_${format.fileType}`;

  if (isDeadLink) {
    return (
      <span key={format.url}>
        <Download />
        <span>{isPrimary ? titleWithFormat : `(${format.fileType.toUpperCase()})`}</span>
      </span>
    );
  }

  return (
    <SafeLink
      {...classes('link')}
      key={format.url}
      to={format.url}
      target="_blank"
      aria-label={titleWithFormat}
      aria-describedby={formatId}>
      <Download />
      <Tooltip tooltip={format.tooltip}>
        <span {...classes('link-text')}>
          <span>{isPrimary ? titleWithFormat : `(${format.fileType.toUpperCase()})`}</span>
        </span>
      </Tooltip>
    </SafeLink>
  );
};

interface Props {
  id: string;
  file: FileType;
}

const File = ({ file, id }: Props) => {
  const formatLinks = file.formats.map((format, index) =>
    renderFormat(format, file.title, index === 0, id, !file.fileExists),
  );

  return (
    <li {...classes('item')} key={file.title}>
      {formatLinks}
    </li>
  );
};

export default File;
