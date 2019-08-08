import React from 'react';
import styled from '@emotion/styled';
import { spacing, mq, breakpoints } from '@ndla/core';

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: ${spacing.large};

  ${mq.range({ from: breakpoints.tablet })} {
    flex-flow: row;
    margin-top: ${spacing.spacingUnit * 3}px;
  }

  & > * {
    margin-top: ${spacing.large};

    ${mq.range({ from: breakpoints.tablet })} {
      flex-basis: 33.3333333%;
      flex-grow: 0;
      margin-top: 0;
      margin-right: ${spacing.normal};
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

type Props = {
  children: React.ReactNode;
}

const FrontpageInfo: React.FunctionComponent<Props> = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);

export default FrontpageInfo;
