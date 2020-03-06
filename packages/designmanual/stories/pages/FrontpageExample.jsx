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
  SubjectSectionTitle,
  BlogPost,
  BlogPostWrapper,
} from '@ndla/ui';
import { EmailOutline, Facebook, Twitter } from '@ndla/icons/common';
import { categories, dummyLanguageOptions } from '../../dummydata/index';
import BlogExampleImage1 from '../../images/blog/fagfornyelse-blog.jpg';
import BlogExampleImage2 from '../../images/blog/sy0512e8_0.jpg';
import NdlaFilmIllustration from '../../images/film_illustrasjon.svg';

class FrontpageExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFieldValue: '',
      inputHasFocus: false,
      loading: false,
    };
    this.searchFieldValue = this.searchFieldValue.bind(this);
    this.onSearchInputFocus = this.onSearchInputFocus.bind(this);
    this.onSearchDeactiveFocusTrap = this.onSearchDeactiveFocusTrap.bind(this);
    this.timeoutLoading = null;
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
    clearInterval(this.timeoutLoading);
    this.setState(
      prevState => ({
        searchFieldValue,
        inputHasFocus: searchFieldValue.length > 0 || prevState.inputHasFocus,
        loading: true,
      }),
      () => {
        this.timeoutLoading = setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 400);
      },
    );
  }

  render() {
    const { t } = this.props;
    const { searchFieldValue, inputHasFocus, loading } = this.state;

    return (
      <>
        <FrontpageHeader locale="nb" languageOptions={dummyLanguageOptions}>
          <FrontpageSearch
            locale="nb"
            searchFieldValue={searchFieldValue}
            logoTo="home"
            hideSearch={false}
            onSearchFieldChange={this.searchFieldValue}
            onSearch={e => {
              e.preventDefault();
            }}
            resourceToLinkProps={res => ({ to: res.path })}
            allResultUrl={`search?query=${searchFieldValue}`}
            onSearchInputFocus={this.onSearchInputFocus}
            onInputBlur={this.onSearchDeactiveFocusTrap}
            searchFieldPlaceholder={t(
              'welcomePage.heading.searchFieldPlaceholder',
            )}
            inputHasFocus={inputHasFocus}
            loading={loading}
            searchResult={
              searchFieldValue.length > 2 && [
                {
                  title: 'Fag:',
                  contentType: 'results-frontpage',
                  resources: [
                    {
                      path: '#f1',
                      subject: 'Yrkesfag',
                      name: 'Design og håndverk',
                    },
                    {
                      path: '#f2',
                      subject: 'Yrkesfag',
                      name: 'Helsearbeiderfag',
                    },
                    {
                      path: '#f3',
                      subject: 'Fellesfag',
                      name: 'Samfunnsfag',
                    },
                    {
                      path: '#f4',
                      subject: 'Fellesfag',
                      name: 'Historie',
                    },
                  ],
                },
                {
                  title: 'Emner:',
                  contentType: 'results-frontpage',
                  resources: [
                    {
                      path: '#e1',
                      subject: 'Samfunnsfag',
                      name: 'Politikk og demokrati',
                      resourceTypes: [
                        {
                          name: 'Kildematerial',
                        },
                        {
                          name: 'Kortfilm',
                        },
                      ],
                    },
                    {
                      path: '#e2',
                      subject: 'Samfunnsfag',
                      name: 'Internasjonale forhold',
                    },
                    {
                      path: '#e3',
                      subject: 'Samfunnsfag',
                      name: 'Arbeidsliv- og næring',
                    },
                  ],
                },
                {
                  title: 'Oppgaver:',
                  contentType: 'results-frontpage',
                  resources: [],
                },
                {
                  title: 'Læringsressurser:',
                  contentType: 'results-frontpage',
                  resources: [
                    {
                      path: '#1',
                      subject: 'Samfunnsfag',
                      name: 'Samfunnskontrakten: Å bli voksen',
                    },
                    {
                      path: '#2',
                      subject: 'Samfunnsfag',
                      name: 'Ulike metoder',
                      resourceTypes: [
                        {
                          name: 'Fagstoff',
                        },
                      ],
                    },
                    {
                      path: '#3',
                      subject: 'Samfunnsfag',
                      name: 'Dette er NAV',
                      resourceTypes: [
                        {
                          name: 'Oppgaver og aktiviteter',
                        },
                      ],
                    },
                    {
                      path: '#4',
                      subject: 'Samfunnsfag',
                      name: 'Oppsummeringsoppgave, tema, Urfolk',
                      resourceTypes: [
                        {
                          name: 'Oppgaver og aktiviteter',
                        },
                      ],
                      additional: true,
                    },
                    {
                      path: '#5',
                      subject: 'Design og håndverk Vg1',
                      name: 'Utvilking av ny design',
                    },
                    {
                      path: '#6',
                      subject: 'Design og håndverk Vg1',
                      name: 'Presentasjonsteknikk - demonstrasjon',
                    },
                    {
                      path: '#7',
                      subject: 'Design og håndverk Vg1',
                      name: 'Form og funksjon',
                      additional: true,
                    },
                    {
                      path: '#8',
                      subject: 'Design og håndverk Vg1',
                      name: 'Form og funksjon',
                    },
                    {
                      path: '#9',
                      subject: 'Design og håndverk Vg1',
                      name: 'Form og funksjon',
                    },
                    {
                      path: '#10',
                      subject: 'Design og håndverk Vg1',
                      name: 'Form og funksjon',
                      additional: true,
                    },
                    {
                      path: '#11',
                      subject: 'Design og håndverk Vg1',
                      name: 'Form og funksjon',
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
            languageOptions={dummyLanguageOptions}
          />
        </FrontpageHeader>
        <main>
          <FrontpageCircularSubjectsSection categories={categories} />
          <OneColumn extraPadding>
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
