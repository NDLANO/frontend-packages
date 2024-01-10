/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLProps, ReactNode } from "react";
import styled from "@emotion/styled";
import { colors, fonts, spacing } from "@ndla/core";

interface Props extends Omit<HTMLProps<HTMLDivElement>, "as"> {
  children?: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: ${spacing.normal};
  h1 {
    margin: 0;
    flex-grow: 1;
    font-weight: ${fonts.weight.bold};
    ${fonts.sizes("22px", 1.2)};
    color: ${colors.text.primary};
  }
`;
const ModalHeader = ({ children, ...rest }: Props) => {
  return (
    <Wrapper data-testid="modal-header" {...rest}>
      {children}
    </Wrapper>
  );
};

export default ModalHeader;
