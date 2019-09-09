/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { spacing, colors, fonts } from '@ndla/core';

const StyledWrapper = styled.div`
  padding: ${spacing.small} 0;
  width: 100%;
`;

const StyledTable = styled.table`
  width: 100%;
  th {
    ${fonts.sizes(16, 1.1)}
    font-weight: ${fonts.weight.semibold};
    border-bottom: 2px solid ${colors.brand.tertiary};
    padding: ${spacing.xsmall};
  }
  td {
    padding: ${spacing.xsmall};
    ${fonts.sizes(16, 1.1)}
  }
  tbody tr {
    &:nth-child(odd) {
      background: ${colors.brand.greyLighter};
    }
  }
`;

const StyleLine = styled.hr`
  height: 1px;
  border: 0;
  background: ${colors.brand.grey};
  &:before {
    content: normal;
  }
`;

type Props = {
  messages: Array<{
    author: number,
    date: string,
    msg: string,
    status: string,
    id: string,
  }>;
  onComment(arg: string): void,
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

const VersionHistory: React.FC<Props> = ({ messages, onComment, t }) => {
  const [commentValue, setCommentValue] = useState('');
  const [commentError, setCommentError] = useState(false);
  return (
    <StyledWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>
              {t('editor.versionHistory.who')}
            </th>
            <th>
              {t('editor.versionHistory.when')}
            </th>
            <th>
              {t('editor.versionHistory.message')}
            </th>
            <th>
              {t('editor.versionHistory.status')}
            </th>
          </tr>
        </thead>
        <tbody>
          {messages.map(({ author, date, msg, status, id }) => (
            <tr key={id}>
              <td>{author}</td>
              <td>{date}</td>
              <td>{msg}</td>
              <td>{status}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <StyleLine />
      <form onSubmit={e => {
        if (commentValue.length < 3) {
          setCommentError(true);
        } else {
          onComment(commentValue);
        }
        e.preventDefault();
        return false;
      }}>
        <label>
          {t('editor.versionHistory.inputLabel')}
        </label>
        <input
          value={commentValue}
          onChange={e => {
            setCommentValue(e.target.value);
            setCommentError(false);
          }}
          placeholder={t('editor.versionHistory.inputPlaceholder')}
        />
        {commentError && <span>
          Has error!!!
        </span>}
        <button disabled={commentValue.length < 3} type="submit">
          {t('editor.versionHistory.buttonLabel')}
        </button>
      </form>
    </StyledWrapper>
  );
}

export default injectT(VersionHistory);