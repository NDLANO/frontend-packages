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
import { spacing, typography, colors, misc, fonts } from '@ndla/core';
// @ts-ignore
import { PopUpWrapper } from '@ndla/forms';
import FooterStatusSelect from './FooterStatusSelect';
import FooterStatusCommentAndSave from './FooterStatusCommentAndSave';

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
    commentPlaceholder: string;
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
            <FooterStatusSelect
              options={options}
              onSelectStatus={(payload: optionProps) => dispatch({ type: 'changeStatus', payload })}
              heading={messages.changeStatus}
            />
          }
          {changeStatusTo !== undefined && 
            <FooterStatusCommentAndSave
              goBack={() => dispatch({ type: 'reset' })}
              onCancel={() => {
                dispatch({ type: 'reset' });
                onClosePopup();
              }}
              onSave={() => {
                if (comment !== '') {
                  onSave(comment, changeStatusTo.id);
                  dispatch({ type: 'reset' });
                  onClosePopup();
                } else {
                  dispatch({ type: 'warn' });
                }
              }}
              onChangeComment={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch({ type: 'comment', payload: e.target.value });
              }}
              changeStatusTo={changeStatusTo}
              comment={comment}
              messages={messages}
              warn={warn}
            />
          }
        </StyledWrapper>
        )}
      </PopUpWrapper>
    </>
  );
};

export default FooterStatus;
