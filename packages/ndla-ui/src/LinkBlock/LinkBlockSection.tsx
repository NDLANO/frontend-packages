/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Children, type HTMLAttributes, type ReactNode } from "react";
import { styled } from "@ndla/styled-system/jsx";

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const StyledList = styled("ul", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xsmall",
    listStyle: "none",
  },
});

export const LinkBlockSection = ({ children, ...rest }: Props) => {
  return (
    <nav {...rest} data-embed-type="link-block-list">
      <StyledList>
        {Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </StyledList>
    </nav>
  );
};
