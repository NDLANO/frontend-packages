import React, { ReactNode } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import SectionHeading from '../SectionHeading';

interface Props {
  fixedWidth?: boolean;
  wide?: boolean;
  media: ReactNode;
  heading: string;
  description: string;
}

interface SubjectAboutSectionProps {
  fixedWidth: boolean;
  wide: boolean;
}

const SubjectAboutSection = styled.section<SubjectAboutSectionProps>`
  margin-bottom: ${spacing.large};
  max-width: ${(p) => p.fixedWidth && '350px'};

  ${(p) =>
    p.wide &&
    css`
      margin: 40px 0;
      ${mq.range({ from: breakpoints.tablet })} {
        display: flex;
        margin: 80px 0;
      }
    `};
  ${mq.range({ from: breakpoints.tablet })} {
    border: 1px solid ${colors.brand.greyLight};
  }
`;

const StyledSectionHeading = styled(SectionHeading)`
  margin: 0 0 ${spacing.small} 0;
  ${mq.range({ from: breakpoints.tablet })} {
    display: none;
  }
`;

interface MediaWrapperProps {
  wide?: boolean;
}

const MediaWrapper = styled.div<MediaWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > *,
  img {
    width: 100%;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    width: 50%;
    min-width: 50%;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    width: 40%;
    min-width: 40%;
  }
  ${(p) =>
    p.wide &&
    css`
      margin: 40px 0;
      ${mq.range({ from: breakpoints.tablet })} {
        display: flex;
        margin: 80px 0;
      }
    `};
`;

const StyledContent = styled.div`
  padding: ${spacing.small} 0 0 0;
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.normal};
  }
`;

const StyledMainHeading = styled.h1`
  margin: 0 0 ${spacing.small} 0;
  ${fonts.sizes('14px', '32px')};
  text-transform: uppercase;
  font-weight: ${fonts.weight.bold};
  display: none;
  ${mq.range({ from: breakpoints.tablet })} {
    display: block;
  }
`;

const StyledDescription = styled.p`
  margin: 0;
  ${fonts.sizes('16px', '26px')};
`;

const SubjectAbout = ({ fixedWidth = false, media, heading, description, wide = false }: Props) => (
  <SubjectAboutSection wide={wide} fixedWidth={fixedWidth}>
    <StyledSectionHeading large>{heading}</StyledSectionHeading>
    <MediaWrapper>{media}</MediaWrapper>
    <StyledContent>
      <StyledMainHeading>{heading}</StyledMainHeading>
      <StyledDescription>{description}</StyledDescription>
    </StyledContent>
  </SubjectAboutSection>
);

export default SubjectAbout;
