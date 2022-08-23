import styled from '@emotion/styled';
import { breakpoints, mq, spacing } from '@ndla/core';
import React, { ReactNode } from 'react';
import { SubjectSectionTitle } from './Subject';

const StyledSubjectSocialContent = styled.div`
  display: none;
  ${mq.range({ from: breakpoints.tabletWide })} {
    display: flex;
  }
`;

export const SubjectSocialContent = ({ children }: { children: ReactNode }) => (
  <StyledSubjectSocialContent>{children}</StyledSubjectSocialContent>
);

const StyledSection = styled.section`
  flex-basis: 50%;
  &:nth-child(odd) {
    margin-right: ${spacing.normal};
  }
`;

export const SubjectSocialSection = ({ children, title = '' }: { children: ReactNode; title?: string }) => (
  <StyledSection>
    <SubjectSectionTitle>{title}</SubjectSectionTitle>
    {children}
  </StyledSection>
);
