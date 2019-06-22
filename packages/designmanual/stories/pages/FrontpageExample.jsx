import React, { Component, Fragment } from 'react';
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
import { Carousel, CarouselAutosize } from '@ndla/carousel';
import { EmailOutline, Facebook, Twitter } from '@ndla/icons/common';
import { contentCards, categories } from '../../dummydata/index';
import NdlaFilmIllustration from '../../images/film_illustrasjon.svg';

const classes = BEMHelper('c-frontpage-section');

const exampleTopicsNotInNDLA = [
  'Kokk og servitørfag Vg2',
  'Biologi 1',
  'Sosiologi og sosialantropologi',
  'Transport og logistikk Vg2',
];

class FrontpageExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFieldValue: '',
      inputHasFocus: false,
    };
    this.searchFieldValue = this.searchFieldValue.bind(this);
    this.onSearchInputFocus = this.onSearchInputFocus.bind(this);
    this.onSearchDeactiveFocusTrap = this.onSearchDeactiveFocusTrap.bind(this);
  }

  onSearchInputFocus() {
    this.setState({
      inputHasFocus: true,
    });
  }

  onSearchDeactiveFocusTrap() {
    this.setState({
      inputHasFocus: false,
      searchFieldValue: '',
    });
  }

  searchFieldValue(searchFieldValue) {
    this.setState(prevState => ({
      searchFieldValue,
      inputHasFocus: searchFieldValue.length > 0 || prevState.inputHasFocus,
    }));
  }

  renderInfoText() {
    const { t } = this.props;
    return (
      <span>
        {exampleTopicsNotInNDLA.map((topic, index) => {
          const isLastTopic = index === exampleTopicsNotInNDLA.length - 1;
          return (
            <Fragment key={topic}>
              {isLastTopic && `${t('welcomePage.topicsConjunction')} `}
              <strong key={topic}>
                {topic}
                {index < exampleTopicsNotInNDLA.length - 2 && ','}{' '}
              </strong>
            </Fragment>
          );
        })}
        {t('welcomePage.topicsNotAvailableFromSearch')}
      </span>
    );
  }

  render() {
    const { t } = this.props;
    const { searchFieldValue, inputHasFocus } = this.state;
    const needInfoTextInSearchSuggestions = exampleTopicsNotInNDLA.length > 0;

    return (
      <>
        <FrontpageHeader
          locale="nb"
          searchFieldValue={searchFieldValue}
          logoTo="home"
          hideSearch={false}
          onSearchFieldChange={this.searchFieldValue}
          onSearch={e => {
            e.preventDefault();
          }}
          allResultUrl={`search?query=${searchFieldValue}`}
          onSearchInputFocus={this.onSearchInputFocus}
          onSearchDeactiveFocusTrap={this.onSearchDeactiveFocusTrap}
          searchFieldPlaceholder={t(
            'welcomePage.heading.searchFieldPlaceholder',
          )}
          infoText={needInfoTextInSearchSuggestions && this.renderInfoText()}
          inputHasFocus={inputHasFocus}
          searchResult={
            searchFieldValue.length > 2
              ? [
                  {
                    title: 'Fag:',
                    contentType: 'results-frontpage',
                    resources: [
                      {
                        path: '#f1',
                        boldName: 'Yrkesfag:',
                        name: 'Design og håndverk',
                        subName: 'Vg3',
                      },
                      {
                        path: '#f2',
                        boldName: 'Yrkesfag:',
                        name: 'Helsearbeiderfag',
                        subName: 'Vg1',
                      },
                      {
                        path: '#f2',
                        boldName: 'Fellesfag:',
                        name: 'Samfunnsfag',
                      },
                    ],
                  },
                  {
                    title: 'Emner:',
                    contentType: 'results-frontpage',
                    resources: [
                      {
                        path: '#e1',
                        boldName: 'Samfunnsfag:',
                        name: 'Politikk og demokrati',
                      },
                      {
                        path: '#e2',
                        boldName: 'Samfunnsfag:',
                        name: 'Internasjonale forhold',
                      },
                      {
                        path: '#e3',
                        boldName: 'Samfunnsfag:',
                        name: 'Arbeidsliv- og næring',
                      },
                    ],
                  },
                  {
                    title: 'Læringsressurser:',
                    contentType: 'results-frontpage',
                    resources: [
                      {
                        path: '#1',
                        boldName: 'Samfunnsfag:',
                        name: 'Samfunnskontrakten: Å bli voksen',
                        subName: 'Fagstoff',
                      },
                      {
                        path: '#2',
                        boldName: 'Samfunnsfag:',
                        name: 'Ulike metoder',
                        subName: 'Fagstoff',
                      },
                      {
                        path: '#3',
                        boldName: 'Samfunnsfag:',
                        name: 'Dette er NAV',
                        subName: 'Fagstoff',
                      },
                      {
                        path: '#4',
                        boldName: 'Samfunnsfag:',
                        name: 'Oppsummeringsoppgave, tema, Urfolk',
                        subName: 'Oppgaver og aktiviteter',
                      },
                      {
                        path: '#5',
                        boldName: 'Design og håndverk Vg1:',
                        name: 'Utvilking av ny design',
                        subName: 'Fagstoff',
                      },
                      {
                        path: '#6',
                        boldName: 'Design og håndverk Vg1:',
                        name: 'Presentasjonsteknikk - demonstrasjon',
                        subName: 'Oppgaver og aktiviteter',
                      },
                      {
                        path: '#7',
                        boldName: 'Design og håndverk Vg1:',
                        name: 'Form og funksjon',
                        subName: 'Læringssti',
                      },
                      {
                        path: '#8',
                        boldName: 'Design og håndverk Vg1:',
                        name: 'Form og funksjon',
                        subName: 'Læringssti',
                      },
                      {
                        path: '#9',
                        boldName: 'Design og håndverk Vg1:',
                        name: 'Form og funksjon',
                        subName: 'Læringssti',
                      },
                      {
                        path: '#10',
                        boldName: 'Design og håndverk Vg1:',
                        name: 'Form og funksjon',
                        subName: 'Læringssti',
                      },
                      {
                        path: '#11',
                        boldName: 'Design og håndverk Vg1:',
                        name: 'Form og funksjon',
                        subName: 'Læringssti',
                      },
                    ],
                  },
                ]
              : []
          }
          menuSubject={
            <FrontpageSubjects
              categories={categories}
              linkToAbout={<SafeLink to="#">om.ndla.no</SafeLink>}
            />
          }
          messages={{
            searchFieldTitle: t(
              'welcomePage.heading.messages.searchFieldTitle',
            ),
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
                    columnsPrSlide: 1.25,
                    distanceBetweenItems: 26,
                    arrowOffset: 13,
                  },
                  {
                    until: 'mobileWide',
                    columnsPrSlide: 2.25,
                    distanceBetweenItems: 26,
                    arrowOffset: 13,
                  },
                  {
                    until: 'tabletWide',
                    columnsPrSlide: 3.25,
                    distanceBetweenItems: 26,
                    arrowOffset: 26,
                  },
                  {
                    columnsPrSlide: 4.25,
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
      </>
    );
  }
}

FrontpageExample.propTypes = {
  t: PropTypes.func.isRequired,
};

export default injectT(FrontpageExample);
