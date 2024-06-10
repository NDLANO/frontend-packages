/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Children, cloneElement, ReactElement } from "react";
import styled from "@emotion/styled";
import { spacing } from "@ndla/core";

const StyledFieldSplitter = styled.div`
  display: flex;
  &:only-child {
    > * {
      flex-basis: 1;
    }
  }
`;

interface Props {
  children: ReactElement | ReactElement[];
}
const FieldSplitter = ({ children }: Props) => (
  <StyledFieldSplitter>
    {Children.map(children, (child, i) =>
      cloneElement(child, {
        css: {
          flexGrow: 1,
          flexBasis: 0,
          marginLeft: i !== 0 ? spacing.small : 0,
        },
      }),
    )}
  </StyledFieldSplitter>
);

export default FieldSplitter;
