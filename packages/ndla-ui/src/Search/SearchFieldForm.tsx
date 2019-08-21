import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, spacing, mq, breakpoints } from '@ndla/core';

interface Props {
  children: React.ReactNode;
}

type StyledProps = {
  inputHasFocus?: boolean;
};

const hasFocusStyles = css`
  margin-left: 0 !important;
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
  ${mq.range({ from: breakpoints.tablet })} {
    width: calc(100% - ${spacing.large});
  }

  ${mq.range({ until: breakpoints.tablet })} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: ${spacing.small} ${spacing.xsmall} ${spacing.small}
      ${spacing.normal};
    z-index: 9001;
    background: ${colors.brand.accent};
    .c-search-field__search-result {
      margin-left: ${spacing.normal};
      width: 100vw;
      left: -${spacing.large};
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

  ${props =>
    props.inputHasFocus &&
    css`
      ${hasFocusStyles}
    `}
`;

export const SearchFieldForm: React.FC<Props> = ({ children, ...props }) => {
  return (
    <StyledForm action="/search/" {...props}>
      {children}
    </StyledForm>
  );
};
