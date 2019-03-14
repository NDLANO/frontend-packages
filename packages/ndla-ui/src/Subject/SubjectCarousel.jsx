import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Carousel, CarouselAutosize } from '@ndla/carousel';
import { ContentCard } from '@ndla/ui';
import { spacing } from '@ndla/core';
import { injectT } from '@ndla/i18n';
import { SubjectSectionTitle } from './Subject';

const subjectCarouselClasses = BEMHelper('c-subject-carousel');

const SubjectCarousel = ({ subjects, title, narrowScreen, wideScreen, t }) => (
  <section {...subjectCarouselClasses('', { narrowScreen, wideScreen })}>
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
          margin: spacing.spacingUnit,
        },
        {
          until: 'tabletWide',
          columnsPrSlide: 3.25,
          distanceBetweenItems: 26,
          arrowOffset: 26,
          margin: spacing.spacingUnit * 1.25,
        },
        {
          until: 'desktop',
          columnsPrSlide: 4,
          distanceBetweenItems: 26,
          arrowOffset: 26,
          margin: spacing.spacingUnit * 1.25,
        },
        {
          until: 'wide',
          columnsPrSlide: 4,
          distanceBetweenItems: 26,
          arrowOffset: 26,
          margin: spacing.spacingUnit * 2.5,
        },
        {
          until: 'ultraWide',
          columnsPrSlide: 5,
          distanceBetweenItems: 26,
          arrowOffset: 26,
          margin: spacing.spacingUnit * 2.5,
        },
        {
          columnsPrSlide: 7,
          distanceBetweenItems: 26,
          arrowOffset: 26,
          margin: spacing.spacingUnit * 2.5,
          maxColumnWidth: 200,
        },
      ]}
      centered
      itemsLength={subjects.length}>
      {autoSizedProps => (
        <>
          <SubjectSectionTitle {...subjectCarouselClasses('title')}>
            {title}
          </SubjectSectionTitle>
          <Carousel
            disableScroll={autoSizedProps.columnsPrSlide >= subjects.length}
            slideBackwardsLabel={t('carousel.back')}
            slideForwardsLabel={t('carousel.forward')}
            buttonClass="c-carousel__arrow"
            wrapperClass="c-carousel__wrapper"
            items={subjects.map(subject => (
              <ContentCard
                columnWidth={autoSizedProps.columnWidth}
                key={subject.id}
                {...subject}
              />
            ))}
            {...autoSizedProps}
          />
        </>
      )}
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

export default injectT(SubjectCarousel);
