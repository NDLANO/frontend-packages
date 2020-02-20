import React from 'react';
import styled from '@emotion/styled';

import { colors, spacing, mq, breakpoints } from '@ndla/core';

const StyledWrapper = styled.section`
  background: ${colors.white};
  position: absolute;
  bottom: -${spacing.large};
  z-index: 8001;
  padding: ${spacing.small};
  right: ${spacing.small};
  left: ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    background: ${colors.brand.accent};
  }
  ${mq.range({ from: breakpoints.mobileWide })} {
    padding: ${spacing.normal};
    right: ${spacing.normal};
    left: ${spacing.normal};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding: ${spacing.large};
    bottom: -81px;
  }
`;

type Props = {
  heading: string;
  text: string;
  link: {
    label: string;
    to: string;
  };
};

const FFFrontpageInfo = ({ heading, text, link }: Props) => {
  return <StyledWrapper />;
};

export default FFFrontpageInfo;
