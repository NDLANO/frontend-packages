import React from 'react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import SafeLink, { SafeLinkProps } from '@ndla/safelink';

import { SubjectSectionTitle } from './Subject';

const SubjectLinksSection = styled.section`
  margin-bottom: ${spacing.large};
`;

const StyledSubjectSectionTitle = styled(SubjectSectionTitle)`
  margin: 0 0 ${spacing.small} 0;
`;

const SubjectLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

interface Props {
  links: {
    toLinkProps: () => SafeLinkProps;
    text: string;
  }[];
  heading: string;
}

const SubjectLinks = ({ links, heading }: Props) => (
  <SubjectLinksSection>
    <StyledSubjectSectionTitle>{heading}</StyledSubjectSectionTitle>
    <nav>
      <SubjectLinksList>
        {links.map((link) => (
          <li key={link.toLinkProps().to.toString()}>
            <SafeLink {...link.toLinkProps()}>{link.text}</SafeLink>
          </li>
        ))}
      </SubjectLinksList>
    </nav>
  </SubjectLinksSection>
);

export default SubjectLinks;
