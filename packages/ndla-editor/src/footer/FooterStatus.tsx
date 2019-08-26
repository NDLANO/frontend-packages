/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useReducer } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { spacing, typography, colors, fonts, misc } from '@ndla/core';
// @ts-ignore
import { Check } from '@ndla/icons/editor';
// @ts-ignore
import { Back } from '@ndla/icons/common';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { PopUpWrapper, FieldHeader, Input } from '@ndla/forms'; 

type StyledWrapperProp = {
  extended: boolean;
};

const StyledWrapper = styled.section<StyledWrapperProp>`
  padding-bottom: ${spacing.normal};
  margin-top: -${spacing.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${props => props.extended && css`
    min-width: 500px;
    padding: 0 ${spacing.medium} ${spacing.large} ${spacing.medium};
  `}
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`;

const StyledListItem = styled.li`
  padding: 0;
  margin: 0;
`;

const checkItemStyle = css`
  white-space: nowrap;
  display: flex;
  width: 100%;
  align-items: center;
  color: ${colors.text.primary};
  ${fonts.sizes('18px', '22px')};
  font-weight: ${fonts.weight.semibold};
  svg {
    width: ${spacing.normal};
    height: ${spacing.normal};
    fill: ${colors.support.green};
    margin-right: ${spacing.xsmall};
  }
`

const StyledSelectedItemSpan = styled.div`
  ${checkItemStyle}
`;

const StyledButton = styled.button`
  background: transparent;
  border: 0;
  padding: ${spacing.xsmall} ${spacing.large} ${spacing.xsmall} ${spacing.normal};
  ${checkItemStyle}
  &:disabled {
    color: ${colors.text.light};
  }
  &:not(:disabled) {
    cursor: pointer;
    svg {
      opacity: 0;
    }
    &:hover {
      background: ${colors.brand.greyLighter};
      svg {
        opacity: 0.5;
      }
    }
  }
`;

const StyledButtonWrapper = styled.div`
  margin: ${spacing.normal} 0 0 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledInputWrapper = styled.div`
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
  &:hover, &:focus {
    span {
      cursor: pointer;
      text-decoration: underline;
    }
    svg {
      transform: translateX(-${spacing.xsmall})
    }
  }
`;

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
        buttonStyle={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          min-width: 200px;
          font-weight: ${fonts.weight.semibold};
          color: ${colors.brand.primary};
          border: 0;
          ${fonts.sizes(18, 1.25)};
          padding: ${spacing.small} ${spacing.small} ${spacing.small} ${spacing.spacingUnit * 0.75}px;
          margin-right: ${spacing.normal};
          border-radius: ${misc.borderRadius};
          transition: background-color 200ms ease;
          background: ${colors.brand.lighter};
          svg {
            margin-left: ${spacing.normal};
            width: ${spacing.normal};
            height: ${spacing.normal};
          }
          &:hover, &:focus {
            background-color: ${colors.brand.light};
            transform: translate(1px, 1px);
          }
        `}
      >
        {(onClosePopup: () => void) => (
          <StyledWrapper extended={changeStatusTo !== undefined}>
          {changeStatusTo === undefined && 
            <>
              <h1
                css={
                  typography.smallerHeadingUppercase(`${spacing.xsmall} ${spacing.large} ${spacing.small} ${spacing.medium}`)
                }
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
