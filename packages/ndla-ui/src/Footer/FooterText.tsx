/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { spacing, fonts, mq, breakpoints } from '@ndla/core';

const StyledFooterText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  > span {
    padding: ${spacing.xsmall} 0;
    text-align: center;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    ${fonts.sizes(16, 1.5)};
    > span {
      padding: 0;
    }
  }
  ${mq.range({ until: breakpoints.mobileWide })} {
    ${fonts.sizes(14, 1.3)};
    > span {
      padding-bottom: ${spacing.xsmall};
    }
  }
`;

type FooterTextProps = {
  children: ReactNode;
};

export const FooterText = ({ children }: FooterTextProps) => <StyledFooterText>{children}</StyledFooterText>;
