/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { breakpoints, colors, mq, spacing } from '@ndla/core';
import Format from './Format';

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

const StyledFileItem = styled.li`
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

const File = ({ title, url, fileExists, fileType }: Props) => {
  const { t } = useTranslation();
  const tooltip = `${t('download')} ${url.split('/').pop()}`;

  return (
    <StyledFileItem>
      <Format format={{ url, fileType, tooltip }} isPrimary title={title} isDeadLink={!fileExists} />
    </StyledFileItem>
  );
};

export default File;
