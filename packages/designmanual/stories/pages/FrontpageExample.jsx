import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectT } from '@ndla/i18n';
import {
  FrontpageHeader,
  FrontpageSearch,
  OneColumn,
  FrontpageInfo,
  FrontpageFilm,
  FrontpageCircularSubjectsSection,
  InfoWidget,
  SafeLink,
  SubjectSectionTitle,
  BlogPost,
  BlogPostWrapper,
} from '@ndla/ui';
import { EmailOutline, Facebook, Twitter } from '@ndla/icons/common';
import { categories } from '../../dummydata/index';
import BlogExampleImage1 from '../../images/blog/elev-samarbeid.jpg';
import BlogExampleImage2 from '../../images/blog/student-grupper.jpg';
import NdlaFilmIllustration from '../../images/film_illustrasjon.svg';

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

  render() {
    const { t } = this.props;
    const { searchFieldValue, inputHasFocus } = this.state;

    return (
      <>
        <FrontpageHeader
          locale="nb"
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
          ]}>
          <FrontpageSearch
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
            inputHasFocus={inputHasFocus}
            searchResult={
              searchFieldValue.length > 2 && [
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
            }
            messages={{
              searchFieldTitle: t(
                'welcomePage.heading.messages.searchFieldTitle',
              ),
              closeSearchLabel: t('welcomePage.closeSearch'),
              menuButton: t('welcomePage.heading.messages.menuButton'),
            }}
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
        </FrontpageHeader>
        <main>
          <FrontpageCircularSubjectsSection
            categories={categories}
            linkToAbout={<SafeLink to="#">om.ndla.no</SafeLink>}
          />
          <OneColumn wide extraPadding>
            <section>
              <SubjectSectionTitle>{t('welcomePage.blog')}</SubjectSectionTitle>
              <BlogPostWrapper>
                <BlogPost
                  text={t('blogPosts.blog1.text')}
                  image={{
                    url: BlogExampleImage1,
                  }}
                  externalLink={t('blogPosts.blog1.externalLink')}
                  linkText={t('blogPosts.blog1.linkText')}
                  license={t('blogPosts.blog1.license')}
                  licenseAuthor={t('blogPosts.blog1.licenseAuthor')}
                  locale="nb"
                />
                <BlogPost
                  text={t('blogPosts.blog2.text')}
                  image={{
                    url: BlogExampleImage2,
                  }}
                  externalLink={t('blogPosts.blog2.externalLink')}
                  linkText={t('blogPosts.blog2.linkText')}
                  license={t('blogPosts.blog2.license')}
                  licenseAuthor={t('blogPosts.blog2.licenseAuthor')}
                  locale="nb"
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
