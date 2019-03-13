import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { injectT } from '@ndla/i18n';
import {
  FrontpageHeader,
  FrontpageSubjects,
  ContentCard,
  OneColumn,
  FrontpageInfo,
  FrontpageSearchSection,
  FrontpageFilm,
  InfoWidget,
  SafeLink,
  SubjectSectionTitle,
} from '@ndla/ui';
import Carousel, { CarouselAutosize } from '@ndla/carousel';

import { EmailOutline, Facebook, Twitter } from '@ndla/icons/common';

import { contentCards, categories } from '../../dummydata/index';
import NdlaFilmIllustration from '../../images/film_illustrasjon.svg';

const classes = BEMHelper('c-frontpage-section');

const FrontpageExample = ({ t }) => (
  <Fragment>
    <FrontpageHeader
      locale="nb"
      searchFieldValue=""
      logoTo="home"
      onSearchFieldChange={() => {}}
      onSearch={() => {}}
      searchFieldPlaceholder={t('welcomePage.heading.searchFieldPlaceholder')}
      menuSubject={
        <FrontpageSubjects
          categories={categories}
          linkToAbout={<SafeLink to="#">om.ndla.no</SafeLink>}
        />
      }
      messages={{
        searchFieldTitle: t('welcomePage.heading.messages.searchFieldTitle'),
        menuButton: t('welcomePage.heading.messages.menuButton'),
      }}
      links={[
        {
          to: '#1',
          text: 'Om NDLA',
        },
        {
          to: '#2',
          text: 'NDLA i sosiale medier',
        },
        {
          to: '#3',
          text: 'Nyhetsbrev',
        },
        {
          to: '#4',
          text: 'Change language',
        },
      ]}
    />
    <main>
      <FrontpageSubjects
        categories={categories}
        linkToAbout={<SafeLink to="#">om.ndla.no</SafeLink>}
      />
      <OneColumn wide extraPadding>
        <FrontpageSearchSection
          heading={t('welcomePage.heading.messages.searchFieldTitle')}
          searchFieldValue=""
          onSearch={() => {}}
          onSearchFieldChange={() => {}}
        />
        <section {...classes()}>
          <SubjectSectionTitle>
            {t('welcomePage.highlighted')}
          </SubjectSectionTitle>
          <CarouselAutosize
            breakpoints={[
              {
                until: 'mobile',
                columnsPrSlide: 1,
                distanceBetweenItems: 26,
                arrowOffset: 13,
              },
              {
                until: 'mobileWide',
                columnsPrSlide: 2,
                distanceBetweenItems: 26,
                arrowOffset: 13,
              },
              {
                until: 'tabletWide',
                columnsPrSlide: 3,
                distanceBetweenItems: 26,
                arrowOffset: 26,
              },
              {
                columnsPrSlide: 4,
                distanceBetweenItems: 26,
                arrowOffset: 26,
              },
            ]}>
            {autoSizedProps => (
              <Carousel
                slideBackwardsLabel={t('carousel.back')}
                slideForwardsLabel={t('carousel.forward')}
                buttonClass="c-carousel__arrow"
                wrapperClass="c-carousel__wrapper"
                items={contentCards.map(subject => (
                  <ContentCard
                    {...subject}
                    columnWidth={autoSizedProps.columnWidth}
                    key={subject.id}
                  />
                ))}
                {...autoSizedProps}
              />
            )}
          </CarouselAutosize>
        </section>
        <FrontpageFilm
          imageUrl={NdlaFilmIllustration}
          url="https://ndla.no/nb/film"
        />
        <FrontpageInfo>
          <InfoWidget
            heading={t('newsLetter.heading')}
            description={t('newsLetter.description')}
            mainLink={{
              name: t('newsLetter.mainLinkName'),
              url: '#1',
            }}
            iconLinks={[
              {
                name: t('newsLetter.iconLinkName'),
                icon: <EmailOutline />,
              },
            ]}
          />
          <InfoWidget
            heading={t('welcomePage.socialMedia.heading')}
            description={t('welcomePage.socialMedia.description')}
            mainLink={{
              name: t('welcomePage.socialMedia.mainLink.name'),
              url: '#2',
            }}
            iconLinks={[
              {
                name: 'Facebook',
                url: '#3',
                icon: <Facebook />,
              },
              {
                name: 'Twitter',
                url: '#4',
                icon: <Twitter />,
              },
            ]}
          />
          <InfoWidget
            heading={t('welcomePage.aboutNDLA.heading')}
            description={t('welcomePage.aboutNDLA.description')}
            mainLink={{
              name: t('welcomePage.aboutNDLA.mainLink.name'),
              url: '#5',
            }}
          />
        </FrontpageInfo>
      </OneColumn>
    </main>
  </Fragment>
);

FrontpageExample.propTypes = {
  t: PropTypes.func.isRequired,
};

export default injectT(FrontpageExample);
