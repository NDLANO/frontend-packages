/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { colors, fonts, spacing } from "@ndla/core";

const StyledUl = styled.ul`
  padding-left: ${spacing.nsmall};
  margin: ${spacing.normal} 0 ${spacing.normal} ${spacing.normal};
  ${fonts.size.text.content};

  ul {
    margin-left: 0;
  }

  > li {
    ::marker {
      color: ${colors.brand.secondary};
    }
  }
  // List item
  li {
    padding-top: 0;
    padding-left: ${spacing.nsmall};
    margin-top: ${spacing.nsmall};
  }
`;

const UnOrderedList = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(({ children, ...rest }, ref) => {
  return (
    <StyledUl ref={ref} {...rest}>
      {children}
    </StyledUl>
  );
});

export default UnOrderedList;
