/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { TFunction } from 'i18next';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/react';
import { breakpoints, colors, mq, spacing } from '@ndla/core';
import Format from './Format';

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

const fileItemStyles = css`
  background: ${colors.brand.greyLighter};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: ${spacing.xsmall};
  padding: ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.small} ${spacing.normal};
  }
`;

const getFileTooltip = (url: string, t: TFunction) => `${t('download')} ${url.split('/').pop()}`;

interface CommonProps {
  title: string;
  url: string;
  fileExists: boolean;
  fileType: string;
  children?: ReactNode;
}

interface SlateFileProps extends CommonProps {
  hiddenTitle?: boolean;
}

export const SlateFile = ({ title, url, fileExists, fileType, hiddenTitle, children }: SlateFileProps) => {
  const { t } = useTranslation();
  const tooltip = getFileTooltip(url, t);

  return (
    <div css={fileItemStyles}>
      {!hiddenTitle && <Format format={{ url, fileType, tooltip }} isPrimary title={title} isDeadLink={!fileExists} />}
      {children}
    </div>
  );
};

const File = ({ title, url, fileExists, fileType, children }: CommonProps) => {
  const { t } = useTranslation();
  const tooltip = getFileTooltip(url, t);

  return (
    <li css={fileItemStyles}>
      <Format format={{ url, fileType, tooltip }} isPrimary title={title} isDeadLink={!fileExists} />
      {children}
    </li>
  );
};

export default File;
