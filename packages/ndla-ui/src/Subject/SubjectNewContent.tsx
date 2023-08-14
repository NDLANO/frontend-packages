import styled from '@emotion/styled';
import SafeLink from '@ndla/safelink';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import ContentTypeBadge from '../ContentTypeBadge';
import { SubjectSectionTitle } from './Subject';
import { HeadingLevel } from '../types';

interface Props {
  headingLevel: HeadingLevel;
  heading: string;
  content: {
    name: string;
    url: string;
    formattedDate: string;
    contentType: string;
  }[];
}

const StyledSection = styled.section`
  ${mq.range({ until: breakpoints.tablet })} {
    margin-bottom: ${spacing.large};
  }
`;

const StyledSubjectSectionTitle = styled(SubjectSectionTitle)`
  ${mq.range({ from: breakpoints.tabletWide })} {
    margin-left: ${spacing.large} !important;
  }
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:last-child {
    margin-bottom: 0;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .c-icon {
    width: 14px;
    height: 14px;
    margin-left: ${spacing.xsmall};
    margin-right: ${spacing.xsmall};
  }

  .c-content-type-badge {
    margin-top: 23px;
    ${mq.range({ until: breakpoints.tabletWide })} {
      display: none;
    }
  }
`;

const ContentLinkWrapper = styled.div`
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding-left: ${spacing.normal};
  }
  padding-bottom: ${spacing.small};
`;

const DateWrapper = styled.div`
  color: ${colors.text.light};
  ${fonts.sizes('14px', '18px')};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('16px', '20px')};
  }
`;

const StyledSafeLink = styled(SafeLink)`
  color: ${colors.brand.dark};
  font-weight: 600;
  ${fonts.sizes('16px', '20px')};
  margin-bottom: ${spacing.xsmall};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('18px', '30px')};
  }
`;

const SubjectNewContent = ({ heading, content, headingLevel }: Props) => (
  <StyledSection>
    <StyledSubjectSectionTitle headingLevel={headingLevel}>{heading}</StyledSubjectSectionTitle>
    <nav>
      <StyledUl>
        {content.map((item, index) => (
          <StyledListItem key={index}>
            <LeftWrapper>
              <ContentTypeBadge type={item.contentType} size="x-small" background border />
              <ContentLinkWrapper>
                <DateWrapper>{item.formattedDate}</DateWrapper>
                <StyledSafeLink to={item.url}>{item.name}</StyledSafeLink>
              </ContentLinkWrapper>
            </LeftWrapper>
          </StyledListItem>
        ))}
      </StyledUl>
    </nav>
  </StyledSection>
);

export default SubjectNewContent;
