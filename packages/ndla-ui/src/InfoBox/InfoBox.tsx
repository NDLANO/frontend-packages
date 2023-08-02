import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const StyledInfoBox = styled.div`
  background: ${colors.support.yellowLight};
  padding: ${spacing.small} ${spacing.normal};
  font-family: ${fonts.sans};
  ${fonts.sizes('14px', '18px')};
  margin-bottom: ${spacing.medium};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('16px', '20px')};
    padding: ${spacing.normal};
  }

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const InfoBox = ({ children }: Props) => <StyledInfoBox>{children}</StyledInfoBox>;

export default InfoBox;
