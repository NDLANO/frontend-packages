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
import { spacing, typography, colors, misc, fonts, spacingUnit } from '@ndla/core';
// @ts-ignore
import { PopUpWrapper } from '@ndla/forms';
import FooterStatusSelect from './FooterStatusSelect';
// import FooterStatusCommentAndSave from './FooterStatusCommentAndSave';

type StyledWrapperProp = {
  extended: boolean;
};

const StyledWrapper = styled.section<StyledWrapperProp>`
  padding-bottom: ${spacing.normal};
  margin-top: -${spacing.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${(props) =>
    props.extended &&
    css`
      min-width: 500px;
      padding: 0 ${spacing.medium} ${spacing.large} ${spacing.medium};
    `}
`;

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  min-width: 200px;
  font-weight: ${fonts.weight.semibold};
  color: ${colors.brand.primary};
  border: 0;
  ${fonts.sizes(18, 1.25)};
  padding: ${spacing.small} ${spacing.small} ${spacing.small} ${spacingUnit * 0.75}px;
  margin-right: ${spacing.normal};
  border-radius: ${misc.borderRadius};
  transition: background-color 200ms ease;
  background: ${colors.brand.lighter};
  svg {
    margin-left: ${spacing.normal};
    width: ${spacing.normal};
    height: ${spacing.normal};
  }
  &:hover,
  &:focus {
    background-color: ${colors.brand.light};
    transform: translate(1px, 1px);
  }
`;

export const checkItemStyle = css`
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
`;

export type optionProps = {
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
  | { type: 'comment'; payload: string }
  | { type: 'changeStatus'; newStatus: { id: string; name: string } }
  | { type: 'warn' }
  | { type: 'reset' };

const initialState: State = {
  comment: '',
  warn: false,
  changeStatusTo: undefined,
};

const footerReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'comment':
      return { ...state, comment: action.payload, warn: false };
    case 'changeStatus':
      return { ...state, changeStatusTo: action.newStatus };
    case 'warn':
      return { ...state, warn: true };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const FooterStatus = ({ options, messages, onSave }: Props) => {
  const [state, dispatch] = useReducer(footerReducer, initialState);
  const { changeStatusTo, comment } = state;
  return (
    <>
      <div
        css={css`
          ${typography.mediumHeaderUppercase};
          margin: 0 ${spacing.xsmall} 0 0;
        `}>
        {messages.statusLabel}
      </div>
      <PopUpWrapper
        label={messages.changeStatus}
        verticalPosition="bottom"
        position="right"
        offsetX={spacingUnit * 1}
        offsetY={spacingUnit * 2}
        withCloseButton
        onClose={() => dispatch({ type: 'reset' })}
        buttonStyle={buttonStyle}>
        {(onClosePopup: () => void) => (
          <StyledWrapper extended={changeStatusTo !== undefined}>
            {changeStatusTo === undefined && (
              <FooterStatusSelect
                options={options}
                onSelectStatus={(newStatus: optionProps) => {
                  // dispatch({ type: 'changeStatus', newStatus })
                  onSave(comment, newStatus.id);
                  onClosePopup();
                }}
                heading={messages.changeStatus}
              />
            )}
            {/*             
  TODO: Comment back inn when backend supports comments on status changes
  {changeStatusTo !== undefined && (
              <FooterStatusCommentAndSave
                goBack={() => dispatch({ type: 'reset' })}
                onCancel={() => {
                  dispatch({ type: 'reset' });
                  onClosePopup();
                }}
                onSave={() => {
                  onSave(comment, changeStatusTo.id);
                  dispatch({ type: 'reset' });
                  onClosePopup();
                }}
                onChangeComment={(e: ChangeEvent<HTMLInputElement>) => {
                  dispatch({ type: 'comment', payload: e.target.value });
                }}
                changeStatusTo={changeStatusTo}
                comment={comment}
                messages={messages}
                warn={warn}
              />
            )} */}
          </StyledWrapper>
        )}
      </PopUpWrapper>
    </>
  );
};

export default FooterStatus;
