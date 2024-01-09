/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { OneColumn, LayoutItem } from "@ndla/ui";
import { colors, spacing } from "@ndla/core";

const StoryIntroSection = styled.section`
  background: ${colors.brand.light};
  padding: ${spacing.small};
  margin-bottom: ${spacing.normal};
  a:not([class]) {
    color: ${colors.brand.primary};
    a:not([class]) {
      color: ${colors.white};
      box-shadow: inset 0 -1px 0 rgba(${colors.white}, 0.6);
      transition: box-shadow 0.2s ease;
      text-decoration: none;
    }
  }
`;

interface Props {
  title?: string;
  children?: ReactNode;
}

const StoryIntro = ({ title, children }: Props) => (
  <StoryIntroSection>
    <OneColumn>
      <LayoutItem layout="center">
        <h1 className="u-heading">{title}</h1>
        {children}
      </LayoutItem>
    </OneColumn>
  </StoryIntroSection>
);

export default StoryIntro;
