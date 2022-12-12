import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Carousel, CarouselAutosize } from '@ndla/carousel';
import { useTranslation } from 'react-i18next';
import { breakpoints, mq, spacing, spacingUnit } from '@ndla/core';
import { SafeLinkProps } from '@ndla/safelink';
import { ContentCard } from '../index';
import { SubjectSectionTitle } from './Subject';
import { HeadingLevel } from '../types';

interface Props {
  subjects?: {
    id: string;
    title: string;
    text: string;
    type?: string | undefined | null;
    image?: string | undefined | null;
    toLinkProps: () => SafeLinkProps;
  }[];
  headingLevel: HeadingLevel;
  title?: string;
  narrowScreen?: boolean;
  wideScreen?: boolean;
}

interface StyledSectionProps {
  narrowScreen: boolean;
  wideScreen: boolean;
}

const StyledSection = styled.section<StyledSectionProps>`
  margin-bottom: ${spacing.large};
  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: 100px;
  }
  ${(p) =>
    p.narrowScreen &&
    css`
      display: none;
      ${mq.range({ from: breakpoints.tablet })} {
        display: block;
      }
    `};
  ${(p) =>
    p.narrowScreen &&
    css`
      ${mq.range({ from: breakpoints.tablet })} {
        display: block;
      }
    `};
`;

const StyledSubjectSectionTitle = styled(SubjectSectionTitle)`
  ${mq.range({ from: breakpoints.tablet })} {
    margin-left: ${spacing.medium} !important;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    margin-left: ${spacingUnit * 3}px !important;
  }
`;

const SubjectCarousel = ({
  subjects = [],
  title = '',
  narrowScreen = false,
  wideScreen = false,
  headingLevel,
}: Props) => {
  const { t } = useTranslation();
  return (
    <StyledSection narrowScreen={narrowScreen} wideScreen={wideScreen}>
      <CarouselAutosize
        breakpoints={[
          {
            until: 'mobile',
            columnsPrSlide: 1,
            distanceBetweenItems: 26,
            arrowOffset: 26,
          },
          {
            until: 'mobileWide',
            columnsPrSlide: 2,
            distanceBetweenItems: 26,
            arrowOffset: 26,
          },
          {
            until: 'tablet',
            columnsPrSlide: 2.25,
            distanceBetweenItems: 26,
            arrowOffset: 26,
            margin: spacingUnit,
          },
          {
            until: 'tabletWide',
            columnsPrSlide: 3.25,
            distanceBetweenItems: 26,
            arrowOffset: 26,
            margin: spacingUnit * 1.25,
          },
          {
            until: 'desktop',
            columnsPrSlide: 4.25,
            distanceBetweenItems: 26,
            arrowOffset: 26,
            margin: spacingUnit * 1.25,
          },
          {
            until: 'wide',
            columnsPrSlide: 4,
            distanceBetweenItems: 26,
            arrowOffset: 26,
            margin: spacingUnit * 2.5,
          },
          {
            until: 'ultraWide',
            columnsPrSlide: 5,
            distanceBetweenItems: 26,
            arrowOffset: 26,
            margin: spacingUnit * 2.5,
          },
          {
            columnsPrSlide: 7,
            distanceBetweenItems: 26,
            arrowOffset: 26,
            margin: spacingUnit * 2.5,
            maxColumnWidth: 200,
          },
        ]}
        centered
        itemsLength={subjects?.length ?? 0}>
        {(autoSizedProps) => (
          <>
            <StyledSubjectSectionTitle headingLevel={headingLevel}>{title}</StyledSubjectSectionTitle>
            <Carousel
              {...autoSizedProps}
              disableScroll={(autoSizedProps?.columnsPrSlide ?? 0) >= subjects.length}
              slideBackwardsLabel={t('carousel.back')}
              slideForwardsLabel={t('carousel.forward')}
              buttonClass="c-carousel__arrow"
              wrapperClass="c-carousel__wrapper"
              columnWidth={autoSizedProps?.columnWidth ?? 0}
              columnsPrSlide={autoSizedProps?.columnsPrSlide ?? 0}
              items={subjects.map((subject) => (
                <ContentCard
                  {...subject}
                  columnWidth={autoSizedProps?.columnWidth ?? 0}
                  type={subject.type ?? ''}
                  image={subject.image ?? ''}
                  key={subject.id}
                />
              ))}
            />
          </>
        )}
      </CarouselAutosize>
    </StyledSection>
  );
};

export default SubjectCarousel;
