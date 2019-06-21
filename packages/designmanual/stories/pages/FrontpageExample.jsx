import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { injectT } from '@ndla/i18n';
import {
  FrontpageHeader,
  FrontpageHeaderNew,
  FrontpageSubjects,
  ContentCard,
  OneColumn,
  FrontpageInfo,
  FrontpageSearchSection,
  FrontpageFilm,
  FrontpageCircularSubjectsSection,
  InfoWidget,
  SafeLink,
  SubjectSectionTitle,
  BlogPost,
  BlogPostWrapper,
} from '@ndla/ui';
import { EmailOutline, Facebook, Twitter } from '@ndla/icons/common';
import { contentCards, categories } from '../../dummydata/index';
import NdlaFilmIllustration from '../../images/film_illustrasjon.svg';
import NdlaYrkesfagIllustration from '../../images/category_illustrations/illustrasjon_yrkesfag.svg';
import NdlaStudieSpesialiserendeIllustration from '../../images/category_illustrations/illustrasjon_studiespesialiserende.svg';
import NdlaFellesfagIllustration from '../../images/category_illustrations/illustrasjon_fellesfag.svg';
import NdlaKombinertIllustration from '../../images/category_illustrations/illustrasjon_kombinert.svg';
import BlogExampleImage1 from '../../images/blog/ExampleImage1.jpg';
import BlogExampleImage2 from '../../images/blog/ExampleImage2.jpg';
import NdlaYrkesfagModalIllustration from '../../images/category_illustrations/menu_yrkesfag.svg';
import NdlaStudieSpesialiserendeModalIllustration from '../../images/category_illustrations/menu_studiespesialiserende.svg';
import NdlaFellesfagModalIllustration from '../../images/category_illustrations/menu_fellesfag.svg';

const categoryIllustrations = {
  yrkesfag: NdlaYrkesfagIllustration,
  studiespesialiserende: NdlaStudieSpesialiserendeIllustration,
  fellesfag: NdlaFellesfagIllustration,
  kombinert: NdlaKombinertIllustration,
};

const categoryIllustrationsInModal = {
  yrkesfag: NdlaYrkesfagModalIllustration,
  studiespesialiserende: NdlaStudieSpesialiserendeModalIllustration,
  fellesfag: NdlaFellesfagModalIllustration,
}

const dummyBlogImages = [
  {
    url:  BlogExampleImage1,
    alt: 'Alt-tekst eksempel til Blogg-bilde..',
  },
  {
    url:  BlogExampleImage2,
    alt: 'Alt-tekst eksempel til Blogg-bilde..',
  }
];

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
    this.circularSubjectsSectionRef = React.createRef();
  }

  onSearchInputFocus() {
    this.setState({
      inputHasFocus: true,
    });
  }

  onSearchDeactiveFocusTrap() {
    this.setState({
      inputHasFocus: false,
    });
    console.log(this.circularSubjectsSectionRef);
  }

  searchFieldValue(searchFieldValue) {
    this.setState({
      searchFieldValue,
    });
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
        {/*<FrontpageHeader
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
                        path: '#f3',
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
        /> */}
        <FrontpageHeaderNew
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
                        path: '#f3',
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
            closeSearchLabel: t('welcomePage.closeSearch'),
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
          ]}
          languageOptions={{
            nb: {
              name: 'Bokmål',
              url: '#',
            },
            nn: {
              name: 'Nynorsk',
              url: '#',
            },
            en: {
              name: 'English',
              url: '#',
            },
          }}
        />
        <main>
          <FrontpageCircularSubjectsSection
            categories={categories}
            categoryIllustrations={categoryIllustrations}
            categoryIllustrationsInModal={categoryIllustrationsInModal}
            ref={this.circularSubjectsSectionRef}
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
                {t('welcomePage.blog')}
              </SubjectSectionTitle>
              <BlogPostWrapper>
                <BlogPost
                  text="Hjelp til deg som skal opp i norsk"
                  image={dummyBlogImages[0]}
                  externalLink="#"
                  linkText="Besøk vår elevblogg"
                  linkTextShort="Elevblogg"
                />
                <BlogPost
                  text="Hjelp til deg som skal opp i norsk"
                  image={dummyBlogImages[1]}
                  externalLink="#"
                  linkText="Besøk vår fagblogg"
                  linkTextShort="Fagblogg"
                />
              </BlogPostWrapper>
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
