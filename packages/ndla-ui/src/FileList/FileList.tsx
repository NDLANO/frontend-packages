/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';

interface Props {
  children: ReactNode;
}

const FileListSection = styled.section`
  margin: ${spacing.large} 0;
  padding: ${spacing.small} 0 ${spacing.normal} ${spacing.normal};
  border-left: 2px solid ${colors.brand.greyLightest};
  font-family: ${fonts.sans};

  .c-icon {
    margin-top: 3px;
    flex-shrink: 0;
    margin-right: ${spacing.small};
    height: 18px;
    width: 18px;
  }
`;

const FileListHeading = styled.h3`
  ${fonts.sizes('16px', '18px')};
  letter-spacing: 0.05em;
  margin: 0 0 ${spacing.xsmall} 0;
  padding-bottom: ${spacing.xsmall};
  border-bottom: 2px solid ${colors.brand.greyLight};
  font-weight: ${fonts.weight.bold};
  text-transform: uppercase;
`;

const FilesList = styled.ul`
  margin: 0;
  padding: 0;
`;

const FileList = ({ children }: Props) => {
  const { t } = useTranslation();
  return (
    <FileListSection>
      <FileListHeading>{t('files')}</FileListHeading>
      <FilesList>{children}</FilesList>
    </FileListSection>
  );
};

export default FileList;
