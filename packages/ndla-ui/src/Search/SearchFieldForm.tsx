/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { FormEvent, ReactNode } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, mq, spacing, stackOrder } from "@ndla/core";

interface Props {
  children: ReactNode;
  inputHasFocus?: boolean;
  onSubmit?: (event: FormEvent) => void;
}

type StyledProps = {
  inputHasFocus?: boolean;
};

const hasFocusStyles = css`
  display: flex;
  align-self: flex-start;
  align-items: center;
  z-index: ${stackOrder.modal};
  ${mq.range({ until: breakpoints.tablet })} {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    padding: ${spacing.small};
    z-index: ${stackOrder.modal};
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

export const SearchFieldForm = ({ children, inputHasFocus, onSubmit }: Props) => {
  return (
    <StyledForm role="search" action="/search/" inputHasFocus={inputHasFocus} onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
};
