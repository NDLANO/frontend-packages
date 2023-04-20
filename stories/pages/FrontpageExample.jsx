import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  FrontpageHeader,
  FrontpageSearch,
  OneColumn,
  FrontpageInfo,
  FrontpageKampanjeblokk,
  FrontpageToolbox,
  FrontpageMultidisciplinarySubject,
  InfoWidget,
  SubjectSectionTitle,
  BlogPost,
  BlogPostWrapper,
  FrontpageProgramMenu,
} from '@ndla/ui';
import { EmailOutline, Facebook, Instagram, LinkedIn } from '@ndla/icons/common';
import BlogExampleImage1 from '../../images/blog/fagfornyelse-blog.jpg';
import BlogExampleImage2 from '../../images/blog/en-god-skolestart.jpg';
import NdlaFilmIllustration from '../../images/film_illustrasjon.svg';
import { programmes, subjectCategories } from '../../dummydata/mockPrograms';
import NdlaToolboxIllustration from '../../images/toolbox_illustration.svg';

const FrontpageExample = ({ showLoadingSubjects = false }) => {
  const { t } = useTranslation();
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [inputHasFocus, setInputHasFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeoutLoading, setTimeoutLoading] = useState(undefined);

  const onSearchInputFocus = () => {
    setInputHasFocus(true);
  };

  const onSearchDeactivateFocusTrap = () => {
    setInputHasFocus(false);
    setSearchFieldValue('');
  };

  const onSearchFieldValueChange = (value) => {
    if (typeof timeoutLoading === 'number') {
      clearInterval(timeoutLoading);
    }
    setSearchFieldValue(value);
    if (!inputHasFocus && value.length > 0) {
      setInputHasFocus(true);
    }
    setLoading(true);

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 400);
    setTimeoutLoading(timeoutId);
  };

  const image1 = {
    id: '65750',
    metaUrl: 'https://api.test.ndla.no/image-api/v3/images/65750',
    title: {
      title: 'Sigurd Trageton',
      language: 'nb',
    },
    alttext: {
      alttext: 'Sigurd Trageton',
      language: 'nb',
    },
    copyright: {
      license: {
        license: 'CC-BY-SA-4.0',
        description: 'Creative Commons Attribution-ShareAlike 4.0 International',
        url: 'https://creativecommons.org/licenses/by-sa/4.0/',
      },
      origin: '',
      creators: [
        {
          type: 'photographer',
          name: 'Tom Knudsen',
        },
      ],
      processors: [],
      rightsholders: [],
    },
    tags: {
      tags: ['Sigurd', 'Trageton', 'Portrett'],
      language: 'nb',
    },
    caption: {
      caption: 'Sigurd Trageton',
      language: 'nb',
    },
    supportedLanguages: ['nb', 'nn'],
    created: '2023-03-29T07:15:50Z',
    createdBy: 'f-jBTU8O8kYbUW20lMeIuTSv',
    modelRelease: 'not-set',
    image: {
      fileName: 'RVrVQIKh.jpg',
      size: 404340,
      contentType: 'image/jpeg',
      imageUrl: 'https://api.test.ndla.no/image-api/raw/RVrVQIKh.jpg',
      dimensions: {
        width: 1600,
        height: 2000,
      },
      language: 'nb',
    },
  };

  const image2 = {
    id: '65859',
    metaUrl: 'https://api.test.ndla.no/image-api/v3/images/65750',
    title: {
      title: 'Sigurd Trageton',
      language: 'nb',
    },
    alttext: {
      alttext: 'Sigurd Trageton',
      language: 'nb',
    },
    copyright: {
      license: {
        license: 'CC-BY-SA-4.0',
        description: 'Creative Commons Attribution-ShareAlike 4.0 International',
        url: 'https://creativecommons.org/licenses/by-sa/4.0/',
      },
      origin: '',
      creators: [
        {
          type: 'photographer',
          name: 'Tom Knudsen',
        },
      ],
      processors: [],
      rightsholders: [],
    },
    tags: {
      tags: ['Sigurd', 'Trageton', 'Portrett'],
      language: 'nb',
    },
    caption: {
      caption: 'Sigurd Trageton',
      language: 'nb',
    },
    supportedLanguages: ['nb', 'nn'],
    created: '2023-03-29T07:15:50Z',
    createdBy: 'f-jBTU8O8kYbUW20lMeIuTSv',
    modelRelease: 'not-set',
    image: {
      fileName: 'RVrVQIKh.jpg',
      size: 404340,
      contentType: 'image/jpeg',
      imageUrl: 'https://api.test.ndla.no/image-api/raw/RVrVQIKh.jpg',
      dimensions: {
        width: 1600,
        height: 2000,
      },
      language: 'nb',
    },
  };

  return (
    <>
      <FrontpageHeader locale="nb">
        <FrontpageSearch
          locale="nb"
          searchFieldValue={searchFieldValue}
          logoTo="home"
          hideSearch={false}
          onSearchFieldChange={onSearchFieldValueChange}
          onSearch={(e) => {
            e.preventDefault();
          }}
          resourceToLinkProps={(res) => ({ to: res.path })}
          allResultUrl={`search?query=${searchFieldValue}`}
          onSearchInputFocus={onSearchInputFocus}
          onInputBlur={onSearchDeactivateFocusTrap}
          searchFieldPlaceholder={t('welcomePage.heading.searchFieldPlaceholder')}
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
            searchFieldTitle: t('welcomePage.heading.messages.searchFieldTitle'),
            closeSearchLabel: t('welcomePage.closeSearch'),
            menuButton: t('welcomePage.heading.messages.menuButton'),
          }}
          suggestion={searchFieldValue.length > 2 && 'et-liknende-ord'}
          suggestionUrl={'search?query=et-liknende-ord'}
        />
      </FrontpageHeader>
      <main>
        <OneColumn extraPadding>
          <FrontpageProgramMenu
            programItems={programmes}
            subjectCategories={showLoadingSubjects ? [{ subjects: [] }] : subjectCategories}
            showBetaCursor={true}
          />
        </OneColumn>
        <OneColumn wide>
          <FrontpageMultidisciplinarySubject
            url="#"
            topics={[
              { url: '#', title: 'Folkehelse og livsmestring', id: '335' },
              { url: '#', title: 'Demokrati og medborgerskap', id: '332' },
              { url: '#', title: 'Bærekraftig utvikling', id: '355' },
            ]}
          />
          <FrontpageToolbox imageUrl={NdlaToolboxIllustration} urlStudents="#" urlTeachers="#" />
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
          <FrontpageKampanjeblokk
            firstImage={image1}
            secondImage={image1}
            title="NDLA film"
            description="NDLA film er en tjeneste i samarbeid med Norgesfilm. Denne tjenesten lar deg se en rekke spillefilmer, kortfilmer, dokumentarer og serier. Du kan også se undervisningsfilm og filmklipp. Velkommen inn i filmens verden!"
            url="https://ndla.no/nb/film"
            urlText="Gå til NDLA film"
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
                  name: 'Instagram',
                  url: '#4',
                  icon: <Instagram />,
                },
                {
                  name: 'LinkedIn',
                  url: '#5',
                  icon: <LinkedIn />,
                },
              ]}
            />
          </FrontpageInfo>
        </OneColumn>
      </main>
    </>
  );
};

FrontpageExample.propTypes = {
  showMessageBox: PropTypes.bool,
  showLoadingSubjects: PropTypes.bool,
};

export default FrontpageExample;
