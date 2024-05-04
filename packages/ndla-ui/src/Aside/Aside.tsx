/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithoutRef } from "react";
import styled from "@emotion/styled";
import { breakpoints, colors, fonts, mq, spacing } from "@ndla/core";

const StyledAside = styled.aside`
  position: relative;
  display: block;
  margin: ${spacing.large} 0px;
  ${mq.range({ from: breakpoints.tablet })} {
    max-width: 350px;
    float: right;
    clear: right;
    width: 50%;
    left: auto !important;
    padding: 0;
    padding-left: ${spacing.small};
    ${mq.range({ from: breakpoints.desktop })} {
      width: 75%;
    }
  }

  border-left: 4px solid ${colors.background.dark};
`;

const StyledAsideContent = styled.div`
  color: ${colors.brand.greyDark};
  padding: ${spacing.normal};

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  h2,
  h3,
  h4,
  h5 {
    ${fonts.size.text.metaText.small};
    margin-top: ${spacing.normal};
    margin-bottom: ${spacing.small};
  }

  & > ul:not([class]),
  :not(li) > ul:not([class]) {
    ${mq.range({ from: breakpoints.desktop })} {
      margin-left: ${spacing.normal};
    }
  }

  & > ol:not([class]),
  :not(li) > ol:not([class]) {
    ${mq.range({ from: breakpoints.desktop })} {
      margin-left: ${spacing.large};
    }
  }
`;

const Aside = ({ children, ...rest }: ComponentPropsWithoutRef<"aside">) => {
  return (
    <StyledAside {...rest}>
      <StyledAsideContent>{children}</StyledAsideContent>
    </StyledAside>
  );
};

export default Aside;
