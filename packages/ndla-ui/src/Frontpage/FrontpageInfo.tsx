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

    ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
      margin-right: ${spacing.normal};
    }

    ${mq.range({ from: breakpoints.desktop })} {
      margin-right: ${spacing.large};
    }

    ${mq.range({ from: breakpoints.tablet })} {
      flex-basis: 50%;
      flex-grow: 0;
      margin-top: 0;
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-right: 0;
      margin-top: 0;
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
