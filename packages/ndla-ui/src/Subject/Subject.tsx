import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { breakpoints, colors, mq, spacing, spacingUnit } from '@ndla/core';
import SectionHeading from '../SectionHeading';
import { HeadingLevel } from '../types';

const SubjectContentWrapper = styled.div`
  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: 100px;
  }
`;

const StyledBreadcrumb = styled.div`
  display: none;
  margin: ${spacing.medium} 0 0 0;
  ${mq.range({ from: breakpoints.tablet })} {
    display: block;
    margin-left: ${spacingUnit * 3}px;
  }
`;

interface StyledSubjectContentProps {
  twoColumns: boolean;
}
const StyledSubjectContent = styled.div<StyledSubjectContentProps>`
  display: block;
  flex-flow: column;
  margin-top: ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    display: flex;
    flex-flow: row;
    margin-top: ${spacing.large};
    > *:not(:only-child):last-child {
      padding-left: ${spacingUnit * 3}px;
    }
  }

  & > *:first-child {
    margin-bottom: ${spacing.large};
    ${mq.range({ from: breakpoints.tablet })} {
      margin-right: 80px;
    }
  }

  ${(p) =>
    !p.twoColumns &&
    css`
      ${mq.range({ from: breakpoints.desktop })} {
        > *:not(:only-child) {
          max-width: 50%;
        }
      }
      ${mq.range({ until: breakpoints.desktop })} {
        flex-direction: column;
      }
      ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
        > *:not(:only-child):last-child {
          padding-left: $subject-margin;
        }
      }
    `};

  ${(p) =>
    p.twoColumns &&
    css`
      flex-flow: column;
      & > *:first-child {
        ${mq.range({ from: breakpoints.tablet })} {
          margin-right: 0;
        }
      }
    `};
`;
export const SubjectContent = ({
  children,
  breadcrumb,
  twoColumns = false,
}: {
  children: ReactNode;
  breadcrumb: ReactNode;
  twoColumns?: boolean;
}) => (
  <SubjectContentWrapper>
    <StyledBreadcrumb>{breadcrumb}</StyledBreadcrumb>
    <StyledSubjectContent twoColumns={twoColumns}>{children}</StyledSubjectContent>
  </SubjectContentWrapper>
);

const StyledSecondaryContent = styled.div`
  background: ${colors.brand.greyLightest};
  padding: ${spacing.large} 0;
  margin-top: ${spacing.large};

  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacingUnit * 3}px 0 ${spacing.large};
    margin-bottom: 100px;
    margin-top: 0;
  }
`;

export const SubjectSecondaryContent = ({ children }: { children: ReactNode }) => (
  <StyledSecondaryContent>{children}</StyledSecondaryContent>
);

const StyledChildContent = styled.div`
  padding: 0 ${spacing.normal};
`;

export const SubjectChildContent = ({ children }: { children: ReactNode }) => (
  <StyledChildContent>{children}</StyledChildContent>
);

export const SubjectTopics = ({ messages, children }: { messages: { heading: string }; children: ReactNode }) => (
  <section>
    <header>
      <h1>{messages.heading}</h1>
    </header>
    <div>{children}</div>
  </section>
);

const SidebarWrapper = styled.div`
  display: block;
  margin: 0 ${spacing.normal};

  & > *:last-child {
    margin-bottom: 0;
  }

  ${mq.range({ from: breakpoints.tablet })} {
    flex-basis: 390px;
    flex-shrink: 0;
    margin: 0px 0 0 0;
  }
`;

export const SubjectSidebarWrapper = ({ children }: { children: ReactNode }) => (
  <SidebarWrapper>{children}</SidebarWrapper>
);

interface StyledSubjectFlexWrapperProps {
  noMargin: boolean;
}
const StyledSubjectFlexWrapper = styled.div<StyledSubjectFlexWrapperProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(p) => !p.noMargin && spacing.large};

  ${mq.range({ from: breakpoints.tablet })} {
    flex-direction: row;
  }
`;

export const SubjectFlexWrapper = ({ children, noMargin = false }: { children: ReactNode; noMargin?: boolean }) => (
  <StyledSubjectFlexWrapper noMargin={noMargin}>{children}</StyledSubjectFlexWrapper>
);

const StyledSubjectFlexChild = styled.div`
  box-sizing: border-box;
  padding: 0 ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    flex-basis: 50%;
    flex-grow: 1;
    flex-direction: row;
  }

  &:last-child {
    & > * {
      ${mq.range({ until: breakpoints.tablet })} {
        margin-bottom: 0;
      }
    }
  }
  & > * {
    ${mq.range({ from: breakpoints.tablet })} {
      margin-bottom: o;
    }
  }
`;

const StyledSectionHeading = styled(SectionHeading)`
  margin: 0 0 ${spacing.small} 0;

  ${mq.range({ from: breakpoints.tablet })} {
    margin: 0 0 ${spacing.normal} 0;
  }
`;

interface SubjectSectionTitleProps {
  headingLevel: HeadingLevel;
  children: ReactNode;
}

export const SubjectSectionTitle = ({ children, headingLevel = 'h2' }: SubjectSectionTitleProps) => (
  <StyledSectionHeading large headingLevel={headingLevel}>
    {children}
  </StyledSectionHeading>
);
