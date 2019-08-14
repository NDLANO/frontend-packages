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

const dummyBlogImages = [
  {
    url: BlogExampleImage1,
    alt: 'Elever arbeider i grupper',
  },
  {
    url: BlogExampleImage2,
    alt: 'Prosjektarbeid på tvers av fag',
  },
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
                      subject: 'Yrkesfag',
                      name: 'Design og håndverk',
                      subName: 'Vg3',
                    },
                    {
                      path: '#f2',
                      subject: 'Yrkesfag',
                      name: 'Helsearbeiderfag',
                      subName: 'Vg1',
                    },
                    {
                      path: '#f3',
                      subject: 'Fellesfag',
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
                      subject: 'Samfunnsfag',
                      name: 'Politikk og demokrati',
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
                  title: 'Læringsressurser:',
                  contentType: 'results-frontpage',
                  resources: [
                    {
                      path: '#1',
                      subject: 'Samfunnsfag',
                      name: 'Samfunnskontrakten: Å bli voksen',
                      subName: 'Fagstoff',
                    },
                    {
                      path: '#2',
                      subject: 'Samfunnsfag',
                      name: 'Ulike metoder',
                      subName: 'Fagstoff',
                    },
                    {
                      path: '#3',
                      subject: 'Samfunnsfag',
                      name: 'Dette er NAV',
                      subName: 'Fagstoff',
                    },
                    {
                      path: '#4',
                      subject: 'Samfunnsfag',
                      name: 'Oppsummeringsoppgave, tema, Urfolk',
                      subName: 'Oppgaver og aktiviteter',
                      additional: true,
                    },
                    {
                      path: '#5',
                      subject: 'Design og håndverk Vg1',
                      name: 'Utvilking av ny design',
                      subName: 'Fagstoff',
                    },
                    {
                      path: '#6',
                      subject: 'Design og håndverk Vg1',
                      name: 'Presentasjonsteknikk - demonstrasjon',
                      subName: 'Oppgaver og aktiviteter',
                    },
                    {
                      path: '#7',
                      subject: 'Design og håndverk Vg1',
                      name: 'Form og funksjon',
                      subName: 'Læringssti',
                      additional: true,
                    },
                    {
                      path: '#8',
                      subject: 'Design og håndverk Vg1',
                      name: 'Form og funksjon',
                      subName: 'Læringssti',
                    },
                    {
                      path: '#9',
                      subject: 'Design og håndverk Vg1',
                      name: 'Form og funksjon',
                      subName: 'Læringssti',
                    },
                    {
                      path: '#10',
                      subject: 'Design og håndverk Vg1',
                      name: 'Form og funksjon',
                      subName: 'Læringssti',
                      additional: true,
                    },
                    {
                      path: '#11',
                      subject: 'Design og håndverk Vg1',
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
                  text="Elever arbeider i grupper"
                  image={dummyBlogImages[0]}
                  externalLink="https://blogg.ndla.no/2018/11/hvordan-lage-gode-grupper-med-elever/"
                  linkText="Besøk vår fagblogg"
                  linkTextShort="Fagblogg"
                  license="CC BY-NC-SA 4.0 Opphav: Scanpix.no"
                />
                <BlogPost
                  text="Prosjektarbeid på tvers av fag"
                  image={dummyBlogImages[1]}
                  externalLink="https://blogg.ndla.no/2019/03/prosjektarbeid-pa-tvers-av-fag-kuben-vgs/"
                  linkText="Besøk vår fagblogg"
                  linkTextShort="Fagblogg"
                  license="CC BY-NC-SA 4.0 Opphav: Scanpix.no"
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
