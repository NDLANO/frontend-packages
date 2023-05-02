import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { Download } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import Tooltip from '@ndla/tooltip';
import React from 'react';
import { FileFormat, FileType } from './FileList';

const LinkTextWrapper = styled.div`
  & > span {
    box-shadow: inset 0 -1px;
  }
`;
const FileLink = styled(SafeLink)`
  box-shadow: none;
  position: relative;
  color: ${colors.brand.primary};
  margin-right: ${spacing.normal};
  display: flex;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  &:focus,
  &:active {
    ${LinkTextWrapper} {
      box-shadow: none;
    }
  }
`;

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
    <FileLink key={format.url} to={format.url} target="_blank" aria-label={titleWithFormat} aria-describedby={formatId}>
      <Download />
      <Tooltip tooltip={format.tooltip}>
        <LinkTextWrapper>
          <span>{isPrimary ? titleWithFormat : `(${format.fileType.toUpperCase()})`}</span>
        </LinkTextWrapper>
      </Tooltip>
    </FileLink>
  );
};

interface Props {
  id: string;
  file: FileType;
}

const FileListItem = styled.li`
  ${fonts.sizes('18px', '26px')};
  font-weight: ${fonts.weight.semibold};
  min-height: 60px;
  background: ${colors.brand.greyLighter};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${spacing.xsmall};
  padding: ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.small} ${spacing.normal};
  }
`;

const File = ({ file, id }: Props) => {
  const formatLinks = file.formats.map((format, index) =>
    renderFormat(format, file.title, index === 0, id, !file.fileExists),
  );

  return <FileListItem key={file.title}>{formatLinks}</FileListItem>;
};

export default File;
