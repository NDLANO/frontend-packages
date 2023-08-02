import styled from '@emotion/styled';
import { breakpoints, mq, spacing } from '@ndla/core';
import { ReactNode } from 'react';
import { HeadingLevel } from '../types';
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

interface SubjectSocialSectionProps {
  children: ReactNode;
  title?: string;
  headingLevel: HeadingLevel;
}

export const SubjectSocialSection = ({ children, title = '', headingLevel }: SubjectSocialSectionProps) => (
  <StyledSection>
    <SubjectSectionTitle headingLevel={headingLevel}>{title}</SubjectSectionTitle>
    {children}
  </StyledSection>
);
