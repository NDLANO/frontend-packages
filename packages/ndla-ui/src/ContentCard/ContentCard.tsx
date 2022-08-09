import React from 'react';
import styled from '@emotion/styled';
import { Play } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import type { SafeLinkProps } from '@ndla/safelink';
import { breakpoints, colors, fonts, mq, spacing, spacingUnit } from '@ndla/core';

interface ContentCardContainerProps {
  columnWidth: number;
}
const ContentCardContainer = styled.article<ContentCardContainerProps>`
  position: relative;
  display: block;
  width: ${(p) => `${p.columnWidth}px`};
`;

const StyledHeading = styled.h1`
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes('14px', '16px')};
  margin: ${spacing.xsmall} 0;
  color: ${colors.brand.primary};

  ${mq.range({ from: breakpoints.tablet })} {
    margin: ${spacing.small} 0 ${spacing.xsmall};
    ${fonts.sizes('20px', '22px')};
  }
`;

const ContentCardLink = styled(SafeLink)`
  color: ${colors.text.primary};
  &:hover,
  &:focus {
    ${StyledHeading} {
      text-decoration: underline;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 72px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  background: ${colors.background.grayDark};
  ${mq.range({ from: breakpoints.tablet })} {
    height: ${spacingUnit * 4.5}px;
  }
`;

interface BackgroundImageProps {
  image: string;
}
const BackgroundImage = styled.div<BackgroundImageProps>`
  display: flex;
  height: 100%;
  width: 100%;
  background-position: center center;
  background-size: cover;
  background-image: url(${(p) => p.image});
`;

const PlayBackground = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  height: 35px;
  width: 35px;
  background-color: rgba(0, 0, 0, 0.48);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mq.range({ from: breakpoints.tablet })} {
    height: 42px;
    width: 42px;
  }

  .c-icon {
    color: ${colors.white};
    height: 20px;
    width: 20px;
    margin-right: -1px;

    ${mq.range({ from: breakpoints.tablet })} {
      height: 25px;
      width: 25px;
    }
  }
`;

const StyledContentType = styled.p`
  ${fonts.sizes('12px', '20px')};
  position: absolute;
  left: ${spacing.small};
  bottom: ${spacing.small};
  display: inline-block;
  background: ${colors.brand.greyLightest};
  border-radius: 2px;
  font-weight: 600;
  margin: 0;
  padding: 0 ${spacing.xxsmall};

  display: none;
  ${mq.range({ from: breakpoints.tablet })} {
    display: inline-block;
  }
`;

const StyledDescription = styled.p`
  ${fonts.sizes('16px')};
  line-height: 1.25rem;
  margin: 0;
  display: none;

  ${mq.range({ from: breakpoints.tablet })} {
    display: block;
  }
`;

interface Props {
  title: string;
  text: string;
  type: string;
  image: string;
  isFilm?: boolean;
  toLinkProps: () => SafeLinkProps;
  columnWidth: number;
}

const ContentCard = ({ title, text, image, type, isFilm = false, toLinkProps, columnWidth }: Props) => (
  <ContentCardContainer columnWidth={columnWidth}>
    <ContentCardLink {...toLinkProps()} title={title}>
      <header>
        <ImageWrapper>
          <BackgroundImage image={image} role="img" aria-label={title} />
          {isFilm && (
            <PlayBackground>
              <Play />
            </PlayBackground>
          )}
          <StyledContentType>{type}</StyledContentType>
        </ImageWrapper>
        <StyledHeading>{title}</StyledHeading>
      </header>
      <StyledDescription>{text}</StyledDescription>
    </ContentCardLink>
  </ContentCardContainer>
);

export default ContentCard;
