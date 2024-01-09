/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as React from "react";
import styled from "@emotion/styled";
import { colors, fonts } from "@ndla/core";
import { HumanMaleBoard } from "@ndla/icons/common";

const StyledMessage = styled.span`
  position: absolute;
  top: -50px;
  color: ${colors.text.light};
  ${fonts.sizes("14px", "18px")};
  font-family: ${fonts.sans};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const IconWrapper = styled.span`
  margin-right: 0.5rem;
`;

type Props = {
  message: string;
};

const ArticleAccessMessage = ({ message }: Props) => (
  <>
    <StyledMessage>
      <IconWrapper>
        <HumanMaleBoard />
      </IconWrapper>
      {message}
    </StyledMessage>
  </>
);

export default ArticleAccessMessage;
