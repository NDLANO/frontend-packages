import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import Carousel, { CarouselAutosize } from '@ndla/carousel';
import { ContentCard } from '@ndla/ui';
import { spacing } from '@ndla/core';
import { SubjectSectionTitle } from './Subject';

const subjectCarouselClasses = BEMHelper('c-subject-carousel');

const SubjectCarousel = ({ subjects, title, narrowScreen, wideScreen, noMargin }) => (
  <section {...subjectCarouselClasses('', { narrowScreen, wideScreen })}>
    <SubjectSectionTitle {...subjectCarouselClasses('title')}>{title}</SubjectSectionTitle>
    <CarouselAutosize
      breakPoints={[
        {
          until: 'mobile',
          columnsPrSlide: 1,
          distanceBetweenItems: 26,
          arrowLeftOffset: 26,
          arrowRightOffset: 26,
          margin: 0,
        },
        {
          until: 'mobileWide',
          columnsPrSlide: 2,
          distanceBetweenItems: 26,
          arrowLeftOffset: 26,
          arrowRightOffset: 26,
          margin: 0,
        },
        {
          until: 'tablet',
          columnsPrSlide: 2.25,
          distanceBetweenItems: 26,
          arrowLeftOffset: 26,
          arrowRightOffset: 26,
          margin: spacing.spacingUnit,
        },
        {
          until: 'tabletWide',
          columnsPrSlide: 3.25,
          distanceBetweenItems: 26,
          arrowLeftOffset: 26,
          arrowRightOffset: 26,
          margin: spacing.spacingUnit * 1.25,
        },
        {
          until: 'desktop',
          columnsPrSlide: 4.25,
          distanceBetweenItems: 26,
          arrowLeftOffset: 26,
          arrowRightOffset: 26,
          margin: spacing.spacingUnit * 1.25,
        },
        {
          until: 'wide',
          columnsPrSlide: 4.25,
          distanceBetweenItems: 26,
          arrowLeftOffset: 26,
          arrowRightOffset: 26,
          margin: spacing.spacingUnit * 2.5,
        },
        {
          until: 'ultraWide',
          columnsPrSlide: 5.25,
          distanceBetweenItems: 26,
          arrowLeftOffset: 26,
          arrowRightOffset: 26,
          margin: spacing.spacingUnit * 2.5,
        },
        {
          columnsPrSlide: 7.25,
          distanceBetweenItems: 26,
          arrowLeftOffset: 26,
          arrowRightOffset: 26,
          margin: spacing.spacingUnit * 2.5,
        }
      ]}
    >
      {autoSizedProps => (
        <Carousel
          slideBackwardsLabel="tilbake"
          slideForwardsLabel="framover"
          buttonClass="c-carousel__arrow"
          wrapperClass="c-carousel__wrapper"
          items={
            subjects.map(subject => (
              <ContentCard
                columnWidth={autoSizedProps.columnWidth}
                key={subject.id}
                {...subject}
              />
            ))}
          {...autoSizedProps}
        />)
      }
    </CarouselAutosize>
  </section>
);

SubjectCarousel.propTypes = {
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.string,
      toLinkProps: PropTypes.func.isRequired,
    }),
  ),
  title: PropTypes.string,
  narrowScreen: PropTypes.bool,
  wideScreen: PropTypes.bool,
};

SubjectCarousel.defaultProps = {
  subjects: [],
  title: '',
  narrowScreen: false,
  wideScreen: false,
};

export default SubjectCarousel;
