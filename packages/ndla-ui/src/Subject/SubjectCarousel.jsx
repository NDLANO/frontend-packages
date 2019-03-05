import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import Carousel, { CarouselAutosize } from '@ndla/carousel';
import { SafeLink } from '@ndla/ui';
import { Play } from '@ndla/icons/common';
import { spacing } from '@ndla/core';
import { SubjectSectionTitle } from './Subject';

const classes = BEMHelper('c-content-card');
const subjectCarouselClasses = BEMHelper('c-subject-carousel');

const SubjectCarousel = ({ subjects, title, narrowScreen, wideScreen }) => (
  <section {...subjectCarouselClasses('', { narrowScreen, wideScreen })}>
    <SubjectSectionTitle {...subjectCarouselClasses('title')}>{title}</SubjectSectionTitle>
    <CarouselAutosize
      breakPoints={[
        {
          until: 'mobile',
          columnsPrSlide: 1.25,
          distanceBetweenItems: 26,
          arrowLeftOffset: 26,
          arrowRightOffset: 26,
          margin: 0,
        },
        {
          until: 'mobileWide',
          columnsPrSlide: 2.25,
          distanceBetweenItems: 26,
          arrowLeftOffset: 26,
          arrowRightOffset: 26,
          margin: 0,
        },
        {
          until: 'tablet',
          columnsPrSlide: 3.25,
          distanceBetweenItems: 26,
          arrowLeftOffset: 26,
          arrowRightOffset: 26,
          margin: spacing.spacingUnit * 2.5,
        },
        {
          until: 'desktop',
          columnsPrSlide: 4.25,
          distanceBetweenItems: 26,
          arrowLeftOffset: 26,
          arrowRightOffset: 26,
          margin: spacing.spacingUnit * 2.5,
        },
        {
          until: 'wide',
          columnsPrSlide: 5.25,
          distanceBetweenItems: 26,
          arrowLeftOffset: 26,
          arrowRightOffset: 26,
          margin: spacing.spacingUnit * 2.5,
        },
        {
          columnsPrSlide: 6.25,
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
          items={
            subjects.map(subject => ({
              children: (
                <article {...classes()} key={subject.id}>
                  <SafeLink
                    {...subject.toLinkProps()}
                    title={subject.title}
                    {...classes('link')}>
                    <header>
                      <div {...classes('image-wrapper')}>
                        <div
                          {...classes('background-image')}
                          role="img"
                          aria-label="some label"
                          style={{
                            width: `${autoSizedProps.columnWidth}px`,
                            backgroundImage: `url(${subject.image})`,
                          }}
                        />
                        {subject.isFilm && (
                          <div {...classes('play-background')}>
                            <Play />
                          </div>
                        )}
                        <p {...classes('type')}>{subject.type}</p>
                      </div>
                      <h1 {...classes('heading')}>{subject.title}</h1>
                    </header>
                    <p {...classes('description')}>{subject.text}</p>
                  </SafeLink>
                </article>
              ),
              ...subject,
            }))}
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
