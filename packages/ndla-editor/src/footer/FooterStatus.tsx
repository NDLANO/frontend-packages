/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useReducer } from 'react';
import { spacing, typography } from '@ndla/core';
// @ts-ignore
import { Check } from '@ndla/icons/editor';
// @ts-ignore
import { Back } from '@ndla/icons/common';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { PopUpWrapper, FieldHeader, Input } from '@ndla/forms'; 
import {
  StyledWrapper,
  StyledList,
  StyledListItem,
  StyledSelectedItemSpan,
  StyledButton,
  StyledButtonWrapper,
  StyledInputWrapper,
  StyledBackButton,
  buttonStyle,
  changeStatusStyle,
} from './FooterStyles';


type optionProps = {
  name: string;
  id: string;
  active?: boolean;
};

type Props = {
  messages: {
    label: string;
    changeStatus: string;
    back: string;
    inputHeader: string;
    inputHelperText: string;
    cancelLabel: string;
    saveLabel: string;
    warningSavedWithoutComment: string;
    newStatusPrefix: string;
    statusLabel: string;
  };
  options: Array<optionProps>;
  onSave(comment: string, statusId: string): void;
};

interface State {
  comment: string;
  warn?: boolean;
  changeStatusTo?: {
    id: string;
    name: string;
  };
}

type Action =
  | { type: 'comment', payload: string }
  | { type: 'changeStatus', payload: { id: string, name: string } }
  | { type: 'warn'; }
  | { type: 'reset'; }

const initialState: State = {
  comment: '',
  warn: false,
  changeStatusTo: undefined,
}

const footerReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'comment':
      return { ...state, comment: action.payload, warn: false };
    case 'changeStatus':
      return { ...state, changeStatusTo: action.payload };
    case 'warn':
      return { ...state, warn: true };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
};

const FooterStatus: React.FC<Props> = ({
  options,
  messages,
  onSave,
}) => {
  const [state, dispatch] = useReducer(footerReducer, initialState);
  const {
    changeStatusTo,
    warn,
    comment,
  } = state;
  return (
    <>
      <div css={typography.mediumHeaderUppercase(`0 ${spacing.xsmall} 0 0`)}>
        {messages.statusLabel}
      </div>
      <PopUpWrapper
        label={messages.changeStatus}
        verticalPosition="bottom"
        position="right"
        offsetX={spacing.spacingUnit * 1}
        offsetY={spacing.spacingUnit * 2}
        withCloseButton
        onClose={() => dispatch({ type: 'reset' })}
        buttonStyle={buttonStyle}
      >
        {(onClosePopup: () => void) => (
          <StyledWrapper extended={changeStatusTo !== undefined}>
          {changeStatusTo === undefined && 
            <>
              <h1
                css={changeStatusStyle}
              >{messages.changeStatus}</h1>
              <StyledList>
                {options.map(option => (
                  <StyledListItem>
                    <StyledButton disabled={option.active} onClick={() => dispatch({ type: 'changeStatus', payload: option })}>
                      <Check />{option.name}
                    </StyledButton>
                  </StyledListItem>
                ))}
              </StyledList>
            </>
          }
          {changeStatusTo !== undefined && 
            <>
              <StyledBackButton onClick={() => dispatch({ type: 'reset' })}>
                <Back /><span>{messages.back}</span>
              </StyledBackButton>
              <StyledSelectedItemSpan>
                <Check />{messages.newStatusPrefix} {changeStatusTo.name}
              </StyledSelectedItemSpan>
              <FieldHeader title={messages.inputHeader} subTitle={messages.inputHelperText} />
              <StyledInputWrapper>
                <Input
                  warningText={
                    warn ? messages.warningSavedWithoutComment : null
                  }
                  autoExpand
                  container="div"
                  type="text"
                  focusOnMount
                  placeholder="Skriv navn"
                  value={comment}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch({ type: 'comment', payload: e.target.value });
                  }}
                />
              </StyledInputWrapper>
              <StyledButtonWrapper>
                <Button
                  outline
                  onClick={() => {
                    dispatch({ type: 'reset' });
                    onClosePopup();
                  }}>
                  {messages.cancelLabel}
                </Button>
                <Button
                  onClick={() => {
                    if (comment !== '') {
                      onSave(comment, changeStatusTo.id);
                      dispatch({ type: 'reset' });
                      onClosePopup();
                    } else {
                      dispatch({ type: 'warn' });
                    }
                  }}>
                  {messages.saveLabel}
                </Button>
              </StyledButtonWrapper>
            </>
          }
        </StyledWrapper>
        )}
      </PopUpWrapper>
    </>
  );
};

export default FooterStatus;
