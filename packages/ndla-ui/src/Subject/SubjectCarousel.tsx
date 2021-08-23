import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Carousel, CarouselAutosize } from '@ndla/carousel';
import { spacingUnit } from '@ndla/core';
import { injectT, tType } from '@ndla/i18n';
import { SafeLinkProps } from '@ndla/safelink';
import { ContentCard } from '../index';
import { SubjectSectionTitle } from './Subject';

const subjectCarouselClasses = BEMHelper('c-subject-carousel');

interface Props {
  subjects?: {
    id: string;
    title: string;
    text: string;
    type?: string | undefined | null;
    image?: string | undefined | null;
    toLinkProps: () => SafeLinkProps;
  }[];
  title?: string;
  narrowScreen?: boolean;
  wideScreen?: boolean;
}

const getSubclasses = (obj: Record<string, boolean>): string[] => {
  return Object.entries(obj)
    .filter(([_, value]) => !!value)
    .map(([className, _]) => className);
};

const SubjectCarousel = ({ subjects = [], title = '', narrowScreen = false, wideScreen = false, t }: Props & tType) => (
  <section {...subjectCarouselClasses('', getSubclasses({ narrowScreen, wideScreen }))}>
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
          <SubjectSectionTitle {...subjectCarouselClasses('title')}>{title}</SubjectSectionTitle>
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
  </section>
);

SubjectCarousel.propTypes = {
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string,
      text: PropTypes.string.isRequired,
      image: PropTypes.string,
      toLinkProps: PropTypes.func.isRequired,
    }).isRequired,
  ).isRequired,
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
