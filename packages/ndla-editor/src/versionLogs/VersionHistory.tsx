/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { spacing, colors, fonts, misc } from '@ndla/core';
// @ts-ignore
import { buttonStyle } from '@ndla/button';
// @ts-ignore
import { Cross } from '@ndla/icons/action';

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

type StyledInputWrapperProps = {
  inputHasFocus: boolean;
};

const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  margin: 0 ${spacing.small} 0 ${spacing.normal};
  padding-right: ${spacing.xsmall};
  display: flex;
  flex-grow: 1;
  justify-items: space-between;
  align-items: center;
  border: 1px solid;
  background: #fff;
  transition: border-color 200ms ease;
  border-color: ${props => props.inputHasFocus ? colors.brand.primary : colors.brand.greyLight};
  border-radius: ${misc.borderRadius};
`;

const StyledInput = styled.input`
  ${fonts.sizes(16, '23px')};
  border: 0;
  outline: 0;
  background: 0;
  flex-grow: 1;
  padding: ${spacing.xsmall} ${spacing.small};
`;

const StyledForm = styled.form`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.small};
`;

type StyledSubmitButtonProps = {
  disabledStyle: boolean;
};

const StyledSubmitButton = styled.button<StyledSubmitButtonProps>`
  ${buttonStyle}
  min-width: 100px;
  ${props => props.disabledStyle && css`
    color: ${colors.brand.grey};
    background-color: ${colors.brand.greyLight};
    border-color: transparent;
    cursor: not-allowed;
    transform: translateY(0) translateX(0);
    &:hover, &:focus {
      color: ${colors.brand.grey};
      transform: translateY(0) translateX(0);
      background-color: ${colors.brand.greyLight};
    }
  `}
`;

const StyledInputLabel = styled.label`
  ${fonts.sizes(16, 1.1)};
  font-weight: ${fonts.weight.semibold};
`;

const StyledEmptyInputButton = styled.button`
  border: 0;
  background: transparent;
  border-radius: 100%;
  width: ${spacing.normal};
  height: ${spacing.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: background-color 200ms ease;
  svg {
    width: 18px;
    height: 18px;
    cursor: pointer;
    fill: ${colors.brand.greyDark};
    transition: fill 200ms ease;
  }
  &:hover, &:focus {
    background: ${colors.brand.greyLight};
    svg {
      fill: ${colors.brand.primary};
    }
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
  const [inputHasFocus, setInputHasFocus] = useState(false);
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
      <StyledForm onSubmit={e => {
        if (commentValue.length < 3) {
          setCommentError(true);
        } else {
          onComment(commentValue);
          setCommentValue('');
        }
        e.preventDefault();
        return false;
      }}>
        <StyledInputLabel htmlFor="inputComment">
          {t('editor.versionHistory.inputLabel')}
        </StyledInputLabel>
        <StyledInputWrapper inputHasFocus={inputHasFocus}>
          <StyledInput
            name="inputComment"
            value={commentValue}
            autoComplete="off"
            onFocus={() => setInputHasFocus(true)}
            onBlur={() => setInputHasFocus(false)}
            onChange={e => {
              setCommentValue(e.target.value);
              setCommentError(false);
            }}
            placeholder={t('editor.versionHistory.inputPlaceholder')}
          />
          {commentValue.length > 0 && (
            <StyledEmptyInputButton type="button" onClick={() => setCommentValue('')}>
              <Cross />
            </StyledEmptyInputButton>
          )}
        </StyledInputWrapper>
        {commentError && <span>
          Has error!!!
        </span>}
        <StyledSubmitButton
          disabledStyle={commentValue.length < 3 ? true : false}
          type="submit"
        >
          {t('editor.versionHistory.buttonLabel')}
        </StyledSubmitButton>
      </StyledForm>
    </StyledWrapper>
  );
}

export default injectT(VersionHistory);