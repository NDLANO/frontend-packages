import React, { ReactNode, Component, createRef, RefObject } from 'react';
import styled from '@emotion/styled';
import { Forward } from '@ndla/icons/common';
import { Cross } from '@ndla/icons/action';
import { breakpoints, colors, fonts, mq, spacing, utils } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import SectionHeading from '../SectionHeading';

interface Props {
  featuringArticle: {
    media: ReactNode;
    heading: string;
    description: string;
    url: string;
  };
  archiveArticles: { url: string; heading: string }[];
  sectionHeading: string;
  fixedWidth?: boolean;
  messages: { archive: string; close: string };
}

interface State {
  archiveOpen: boolean;
  minHeight: number | null;
}

interface SubjectArchiveSectionProps {
  fixedWidth: boolean;
  animate: boolean;
}

const ArchiveWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const StyledSectionHeading = styled(SectionHeading)`
  margin: 0 0 ${spacing.small} 0;
  ${mq.range({ from: breakpoints.tablet })} {
    ${utils.visuallyHidden};
  }
`;

const ArchiveButon = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin: ${spacing.small} 0 0 0;
  padding: ${spacing.xsmall} 0;
  border: 0;
  color: ${colors.brand.primary};
  ${fonts.sizes('16px', '24px')};
  font-weight: ${fonts.weight.semibold};
  ${mq.range({ from: breakpoints.tablet })} {
    margin: ${spacing.xsmall} ${spacing.normal} ${spacing.normal};
  }
  c-icon {
    width: 18px;
    height: 18px;
    margin-right: ${spacing.small};
  }
`;

interface StyledNavProps {
  animate: boolean;
}
const StyledNav = styled.nav<StyledNavProps>`
  padding: 0;
  animation: ${(p) => p.animate && 'fadeIn 0.3s ease-in-out'};
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.large} ${spacing.large} 0 ${spacing.large};
  }
`;

const StyledArchiveList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    ${fonts.sizes('16px', '24px')};
    margin-bottom: ${spacing.small};
  }
`;

const MediaWrapper = styled.div`
  width: 100%;
  & > * {
    width: 100%;
  }
`;

const StyledContent = styled.div`
  padding: ${spacing.small} 0 0 0;
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.normal};
  }
`;

const StyledHeading = styled.h1`
  ${fonts.sizes('20px', '32px')};
  margin: 0 0 ${spacing.small} 0;
  flex: 0 0 auto;
`;

const StyledDescription = styled.p`
  margin: 0;
  ${fonts.sizes('16px', '26px')}
`;

const SubjectArchiveSection = styled.section<SubjectArchiveSectionProps>`
  margin-bottom: ${spacing.large};
  display: flex;
  flex-direction: column;
  max-width: ${(p) => p.fixedWidth && '350px'};
  animation: ${(p) => p.animate && 'fadeIn 0.3s ease-in-out'};

  ${mq.range({ from: breakpoints.tablet })} {
    border: 1px solid ${colors.brand.greyLight};
  }
`;

interface FeaturingSectionProps {
  animate: boolean;
}
const FeaturingSection = styled.section<FeaturingSectionProps>`
  animation: ${(p) => p.animate && 'fadeIn 0.3s ease-in-out'};
`;

class SubjectArchive extends Component<Props, State> {
  wrapperRef: RefObject<HTMLElement> | null = createRef<HTMLElement>();
  constructor(props: Props) {
    super(props);
    this.state = {
      archiveOpen: false,
      minHeight: null,
    };

    this.handleToggleArchive = this.handleToggleArchive.bind(this);
  }

  handleToggleArchive() {
    this.setState((prevState) => {
      const newState: State = {
        archiveOpen: !prevState.archiveOpen,
        minHeight: null,
      };

      if (!prevState.minHeight) {
        newState.minHeight = this.wrapperRef?.current?.offsetHeight ?? null;
      }

      return newState;
    });
  }

  render() {
    const { fixedWidth = false, featuringArticle, messages, sectionHeading, archiveArticles } = this.props;

    const archiveId = 'subject-archive';

    const section = this.state.archiveOpen ? (
      <StyledNav id={archiveId} animate={!!this.state.minHeight}>
        <StyledArchiveList>
          {archiveArticles.map((article) => (
            <li key={article.heading}>
              <SafeLink to={article.url}>{article.heading}</SafeLink>
            </li>
          ))}
        </StyledArchiveList>
      </StyledNav>
    ) : (
      <FeaturingSection animate={!!this.state.minHeight}>
        <MediaWrapper>{featuringArticle.media}</MediaWrapper>
        <StyledContent>
          <StyledHeading>
            <SafeLink to={featuringArticle.url}>{featuringArticle.heading}</SafeLink>
          </StyledHeading>
          <StyledDescription>{featuringArticle.description}</StyledDescription>
        </StyledContent>
      </FeaturingSection>
    );

    return (
      <SubjectArchiveSection animate={!!this.state.minHeight} fixedWidth={fixedWidth} ref={this.wrapperRef}>
        <StyledSectionHeading large>{sectionHeading}</StyledSectionHeading>
        <ArchiveWrapper>
          {section}
          <ArchiveButon
            type="button"
            aria-expanded={this.state.archiveOpen}
            aria-controls={archiveId}
            onClick={this.handleToggleArchive}>
            {this.state.archiveOpen ? (
              <>
                <Cross /> <span>{messages.close}</span>
              </>
            ) : (
              <>
                <Forward /> <span>{messages.archive}</span>
              </>
            )}
          </ArchiveButon>
        </ArchiveWrapper>
      </SubjectArchiveSection>
    );
  }
}

export default SubjectArchive;
