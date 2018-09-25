import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { injectT } from 'ndla-i18n';
import {
  FrontpageHeader,
  FrontpageSubjects,
  FrontpageHighlighted,
  ContentCard,
  OneColumn,
  FrontpageInfo,
  FrontpageSearchSection,
  FrontpageFilm,
  InfoWidget,
  SafeLink,
} from 'ndla-ui';
import { breakpoints } from 'ndla-util';

import { EmailOutline, Facebook, Twitter } from 'ndla-icons/common';

import { contentCards, categories } from '../../dummydata/index';
import NdlaFilmIllustration from '../../images/film_illustrasjon.svg';

const FrontpageExample = ({ t }) => (
  <Fragment>
    <FrontpageHeader
      heading="Nasjonal digital læringsarena"
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
        <FrontpageHighlighted heading={t('welcomePage.highlighted')}>
          {contentCards.slice(0, 4).map(card => (
            <div key={`slide-${card.id}`}>
              <ContentCard
                toLinkProps={card.toLinkProps}
                heading={card.title}
                description={card.text}
                isFilm={card.isFilm}
                type={card.type}
                images={[
                  {
                    url: card.image,
                    types: Object.keys(breakpoints),
                  },
                ]}
              />
            </div>
          ))}
        </FrontpageHighlighted>
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
