/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { injectT, tType } from '@ndla/i18n';
import { spacing, colors, fonts } from '@ndla/core';
const StyledWrapper = styled.div`
  padding: ${spacing.small} 0;
  width: 100%;
`;

const StyledTable = styled.table`
  width: 100%;
  margin: 0;
  th {
    ${fonts.sizes(16, 1.1)}
    font-weight: ${fonts.weight.semibold};
    border-bottom: 2px solid ${colors.brand.tertiary};
    padding: ${spacing.xsmall};
  }
  td {
    padding: ${spacing.xsmall};
    ${fonts.sizes(14, 1.3)}
  }
  tbody tr {
    &:nth-child(odd) {
      background: ${colors.brand.greyLighter};
    }
  }
`;

const StyleLine = styled.hr`
  height: 2px;
  border: 0;
  background: ${colors.brand.greyLight};
  margin: ${spacing.normal} 0 ${spacing.small};
  &:before {
    content: normal;
  }
`;

type Props = {
  notes: Array<{
    author: number;
    date: string;
    note: string;
    status: string;
    id: string;
  }>;
  onComment(arg: string): void;
  current: boolean;
};

const VersionHistory: React.FC<Props & tType> = ({ notes, t, children }) => {
  return (
    <StyledWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>{t('editor.versionHistory.who')}</th>
            <th>{t('editor.versionHistory.when')}</th>
            <th>{t('editor.versionHistory.message')}</th>
            <th>{t('editor.versionHistory.status')}</th>
          </tr>
        </thead>
        <tbody>
          {notes.map(({ author, date, note, status, id }) => (
            <tr key={id}>
              <td>{author}</td>
              <td>{date}</td>
              <td>{note}</td>
              <td>{status}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <StyleLine />
      {children}
    </StyledWrapper>
  );
};

export default injectT(VersionHistory);
