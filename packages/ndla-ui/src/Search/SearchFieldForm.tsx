import React, { FormEvent, ReactNode } from 'react';
import styled from '@emotion/styled';
import { spacing, mq, breakpoints } from '@ndla/core';

interface Props {
  children: ReactNode;
  inputHasFocus?: boolean;
  onSubmit?: (event: FormEvent) => void;
}

const StyledForm = styled.form`
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
  &[data-focused='true'] {
    .c-search-field__search-result {
      left: 0px;
      @supports (-webkit-overflow-scrolling: touch) {
        padding-bottom: 300px;
      }
    }
    align-self: flex-start;
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
  }
`;

export const SearchFieldForm = ({ children, inputHasFocus, onSubmit }: Props) => {
  return (
    <StyledForm role="search" action="/search/" data-focused={inputHasFocus} onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
};
