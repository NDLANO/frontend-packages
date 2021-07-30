import React, { FormEventHandler } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { spacing, mq, breakpoints } from '@ndla/core';

interface Props {
  children: React.ReactNode;
  inputHasFocus?: boolean;
  onSubmit?: (event: React.FormEvent) => void;
}

type StyledProps = {
  inputHasFocus?: boolean;
};

const hasFocusStyles = css`
  .c-search-field__search-result {
    left: 0px;
    @supports (-webkit-overflow-scrolling: touch) {
      padding-bottom: 300px;
    }
  }
  display: flex;
  align-self: flex-start;
  align-items: center;
  z-index: 9001;
  ${mq.range({ until: breakpoints.tablet })} {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    padding: ${spacing.small};
    z-index: 9001;
    .c-search-field__search-result {
      width: 100vw;
    }
  }
`;

const StyledForm = styled.form<StyledProps>`
  display: flex;
  align-items: center;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
  > div {
    padding: 0;
  }
  ${(props) =>
    props.inputHasFocus &&
    css`
      ${hasFocusStyles}
    `}
`;

export const SearchFieldForm: React.FC<Props> = ({ children, inputHasFocus, onSubmit }) => {
  return (
    <StyledForm action="/search/" inputHasFocus={inputHasFocus} onSubmit={onSubmit} >
      {children}
    </StyledForm>
  );
};
