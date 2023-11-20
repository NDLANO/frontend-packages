/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import SafeLink from '@ndla/safelink';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { Download } from '@ndla/icons/common';

interface Props {
  title: string;
  url: string;
  fileExists: boolean;
  fileType: string;
}

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

interface FormatProps {
  format: FileFormat;
  title: string;
  isPrimary: boolean;
  isDeadLink: boolean;
}

const Format = ({ format, title, isPrimary, isDeadLink }: FormatProps) => {
  const titleWithFormat = `${title} (${format.fileType.toUpperCase()})`;

  if (isDeadLink) {
    return (
      <span key={format.url}>
        <Download />
        <span>{isPrimary ? titleWithFormat : `(${format.fileType.toUpperCase()})`}</span>
      </span>
    );
  }

  return (
    <FileLink key={format.url} to={format.url} target="_blank" aria-label={titleWithFormat}>
      <Download />
      <LinkTextWrapper aria-label={format.tooltip}>
        <span>{isPrimary ? titleWithFormat : `(${format.fileType.toUpperCase()})`}</span>
      </LinkTextWrapper>
    </FileLink>
  );
};

const File = ({ title, url, fileExists, fileType }: Props) => {
  const { t } = useTranslation();
  const tooltip = `${t('download')} ${url.split('/').pop()}`;

  return (
    <FileListItem>
      <Format format={{ url, fileType, tooltip }} isPrimary title={title} isDeadLink={!fileExists} />
    </FileListItem>
  );
};

export default File;
