/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { spacing, colors } from '@ndla/core';
import { Back } from '@ndla/icons/common';
import { Check } from '@ndla/icons/editor';
import Button from '@ndla/button';
import { checkItemStyle } from './FooterStatus';

const StyledButtonWrapper = styled.div`
  margin: ${spacing.normal} 0 0 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledBackButton = styled.button`
  display: flex;
  align-items: center;
  color: ${colors.brand.primary};
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0 0 ${spacing.medium} 0;
  cursor: pointer;
  svg {
    margin-right: ${spacing.xsmall};
    width: ${spacing.normal};
    height: ${spacing.normal};
    cursor: pointer;
    transition: transform 200ms ease;
  }
  &:hover,
  &:focus {
    span {
      cursor: pointer;
      text-decoration: underline;
    }
    svg {
      transform: translateX(-${spacing.xsmall});
    }
  }
`;

type Props = {
  goBack(): void;
  onCancel(): void;
  onSave(): void;
  onChangeComment(event: ChangeEvent<HTMLInputElement>): void;
  messages: {
    back: string;
    newStatusPrefix: string;
    inputHeader: string;
    inputHelperText: string;
    warningSavedWithoutComment: string;
    cancelLabel: string;
    saveLabel: string;
    commentPlaceholder: string;
  };
  changeStatusTo: {
    id: string;
    name: string;
  };
  warn?: boolean;
  comment: string;
};

const FooterStatusCommentAndSave = ({
  goBack,
  onCancel,
  onSave,
  onChangeComment,
  messages,
  changeStatusTo,
  warn,
  comment,
}: Props) => (
  <>
    <StyledBackButton onClick={goBack}>
      <Back />
      <span>{messages.back}</span>
    </StyledBackButton>
    <div css={checkItemStyle}>
      <Check />
      {messages.newStatusPrefix} {changeStatusTo.name}
    </div>
    {/* TODO
    <FieldHeader
      title={messages.inputHeader}
      subTitle={messages.inputHelperText}
    />
         <StyledInputWrapper>
      <Input
        warningText={
          warn ? messages.warningSavedWithoutComment : null
        }
        autoExpand
        container="div"
        type="text"
        focusOnMount
        placeholder={messages.commentPlaceholder}
        value={comment}
        onChange={onChangeComment}
      />
    </StyledInputWrapper> */}
    <StyledButtonWrapper>
      <Button outline onClick={onCancel}>
        {messages.cancelLabel}
      </Button>
      <Button onClick={onSave}>{messages.saveLabel}</Button>
    </StyledButtonWrapper>
  </>
);

export default FooterStatusCommentAndSave;
