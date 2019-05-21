/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint max-len: 0 */
import React from 'react';

import { Trans } from '@ndla/i18n';
import {
  Image,
  OneColumn,
  ResourcesWrapper,
  ResourcesTitle,
  SubjectHeader,
  SubjectContent,
  SubjectSidebarWrapper,
  SubjectFlexWrapper,
  SubjectFlexChild,
  SubjectShortcuts,
  SubjectLinks,
  SubjectArchive,
  SubjectAbout,
  SubjectCarousel,
  SubjectSocialContent,
  SubjectSocialSection,
  SubjectChildContent,
  SubjectSecondaryContent,
  SubjectNewContent,
  EmbeddedTwitter,
  EmbeddedFacebook,
  InfoWidget,
  constants,
} from '@ndla/ui';

import { EmailOutline } from '@ndla/icons/common';
import { breakpoints } from '@ndla/util';

import exampleBackground from '../../images/banners/Salg-service-og-sikkerhet.svg';
import chineseBackground from '../../images/banners/Kinesisk.svg';
import { contentCards } from '../../dummydata/index';

import TopicListExample from '../molecules/TopicListExample';
import TwoColumnsExample from '../molecules/TwoColumnsExample';
import TwoColumnsLanguageExample from '../molecules/TwoColumnsLanguageExample';
import Breadcrumb from '../molecules/breadcrumbs';

const { contentTypes } = constants;

const subjectArchive = (fixedWidth = false) => (
  <SubjectArchive
    featuringArticle={{
      media: (
        <Image
          alt="Forstørrelsesglass"
          src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
        />
      ),
      heading: 'Tittel overskrift',
      description:
        'Denne modulen kan variere i innhold. Det kan være aktuelt-stoff, yrkesportretter, «populært hos elever» m.m. Dette er innhold som ikke passer inn i noen av de andre modulene. Det er begrensning på 1 slik modul per fagforside, og den bør ha en utløpsdato.',
      url: '#1',
    }}
    archiveArticles={[
      {
        url: '#1',
        heading: 'Artikkel 1',
      },
      {
        url: '#2',
        heading: 'Artikkel 2',
      },
      {
        url: '#3',
        heading: 'Artikkel 3',
      },
      {
        url: '#4',
        heading: 'Artikkel 4',
      },
      {
        url: '#5',
        heading: 'Artikkel 5',
      },
      {
        url: '#6',
        heading: 'Artikkel 6',
      },
    ]}
    fixedWidth={fixedWidth}
    sectionHeading="Aktuelt"
    messages={{
      archive: 'Arkiv',
      close: 'Lukk',
    }}
  />
);

const subjectAbout = (fixedWidth = false) => (
  <SubjectAbout
    fixedWidth={fixedWidth}
    media={
      <Image
        alt="Forstørrelsesglass"
        src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
      />
    }
    heading="Om medieuttrykk og mediesamfunnet"
    description="Her kan det komme en tekstlig beskrivelse av hvordan faget er bygget opp eller hvilke særpreg dette faget har. Det kan også være i form av en film som introduserer faget"
  />
);
const secondaryContent = (
  <Trans>
    {({ t }) => (
      <SubjectSecondaryContent>
        <OneColumn noPadding>
          <SubjectChildContent>
            <SubjectFlexWrapper>
              <SubjectFlexChild>
                <SubjectNewContent
                  heading={t('subjectPage.newContent.heading')}
                  content={[
                    {
                      name: 'Hvordan finne svar på det du lurer på?',
                      url: '#1d',
                      formattedDate: '10.02.2018',
                      contentType: contentTypes.SUBJECT_MATERIAL,
                    },
                    {
                      name: 'Hva koster det å nå bærekraftmålene?',
                      url: '#2d',
                      formattedDate: '24.01.2018',
                      contentType: contentTypes.SUBJECT_MATERIAL,
                    },
                    {
                      name: 'Hva koster det å nå bærekraftmålene?',
                      url: '#3d',
                      formattedDate: '24.01.2018',
                      contentType: contentTypes.SUBJECT_MATERIAL,
                    },
                  ]}
                />
              </SubjectFlexChild>
              <SubjectFlexChild>
                <InfoWidget
                  center
                  heading={t('newsLetter.heading')}
                  description={t('newsLetter.description')}
                  mainLink={{
                    name: t('newsLetter.mainLinkName'),
                    url: '#1',
                  }}
                  iconLinks={[
                    {
                      icon: <EmailOutline />,
                      name: t('newsLetter.iconLinkName'),
                    },
                  ]}
                />
              </SubjectFlexChild>
            </SubjectFlexWrapper>
          </SubjectChildContent>
        </OneColumn>
      </SubjectSecondaryContent>
    )}
  </Trans>
);

const some = (
  <SubjectSocialContent>
    <SubjectSocialSection title="Twitter">
      <EmbeddedTwitter screenName="ndla_norsk" tweetLimit={1} />
    </SubjectSocialSection>
    <SubjectSocialSection title="Facebook">
      <EmbeddedFacebook href="https://www.facebook.com/NDLAmediefag/posts/1648640581877981" />
    </SubjectSocialSection>
  </SubjectSocialContent>
);

export default ({ id }) => (
  <article>
    <SubjectHeader
      heading="Medieuttrykk og mediesamfunnet"
      images={[
        {
          url: exampleBackground,
          types: Object.keys(breakpoints),
        },
      ]}
    />
    <OneColumn wide>
      <SubjectContent breadcrumb={<Breadcrumb onlySubject />}>
        <ResourcesWrapper
          id={id}
          subjectPage
          header={<ResourcesTitle>Emner</ResourcesTitle>}>
          <TopicListExample />
        </ResourcesWrapper>
        <SubjectSidebarWrapper>
          <SubjectShortcuts
            messages={{
              heading: 'Gå direkte til',
              showMore: 'Vis flere',
              showLess: 'Vis færre',
            }}
            links={[
              {
                url: '#1',
                text: 'Fagstoff',
              },
              {
                url: '#2',
                text: 'Oppgaver',
              },
              {
                url: '#3',
                text: 'Læringsstier',
              },
              {
                url: '#4',
                text: 'Film',
              },
              {
                url: '#5',
                text: 'Spill',
              },
              {
                url: '#6',
                text: 'Verktøy og mal',
              },
              {
                url: '#7',
                text: 'Kategori 7',
              },
              {
                url: '#8',
                text: 'Kategori 8',
              },
            ]}
          />
          <SubjectLinks
            heading="Mest lest"
            links={[
              {
                text: 'Grafisk design',
                toLinkProps: () => ({ to: '#1a' }),
              },
              {
                text: 'Nettsider',
                toLinkProps: () => ({ to: '#2a' }),
              },
              {
                text: 'Prøv deg som journalist',
                toLinkProps: () => ({ to: '#3a' }),
              },
              {
                text: 'Grenseløs journalistikk',
                toLinkProps: () => ({ to: '#4a' }),
              },
            ]}
          />
          <SubjectCarousel
            narrowScreen
            subjects={contentCards}
            title="Litt forskjellig fra faget"
          />
          {subjectArchive(true)}
          {subjectAbout(true)}
        </SubjectSidebarWrapper>
      </SubjectContent>
    </OneColumn>
    <SubjectCarousel
      wideScreen
      subjects={contentCards}
      title="Litt forskjellig fra faget"
    />
    {secondaryContent}
    <OneColumn noPadding>
      <SubjectChildContent>{some}</SubjectChildContent>
    </OneColumn>
  </article>
);

export const SubjectWithTwoColumn = ({ id }) => (
  <article>
    <SubjectHeader
      heading="Medieuttrykk og mediesamfunnet"
      images={[
        {
          url: exampleBackground,
          types: Object.keys(breakpoints),
        },
      ]}
    />
    <OneColumn wide>
      <SubjectContent twoColumns breadcrumb={<Breadcrumb onlySubject />}>
        <ResourcesWrapper
          id={id}
          subjectPage
          header={<ResourcesTitle>Emner</ResourcesTitle>}>
          <TwoColumnsExample />
        </ResourcesWrapper>
        <SubjectChildContent>
          <SubjectFlexWrapper>
            <SubjectFlexChild>
              <SubjectShortcuts
                messages={{
                  heading: 'Gå direkte til',
                  showMore: 'Vis flere',
                  showLess: 'Vis færre',
                }}
                links={[
                  {
                    url: '#1',
                    text: 'Fagstoff',
                  },
                  {
                    url: '#2',
                    text: 'Oppgaver',
                  },
                  {
                    url: '#3',
                    text: 'Læringsstier',
                  },
                  {
                    url: '#4',
                    text: 'Film',
                  },
                  {
                    url: '#5',
                    text: 'Spill',
                  },
                  {
                    url: '#6',
                    text: 'Verktøy og mal',
                  },
                  {
                    url: '#7',
                    text: 'Kategori 7',
                  },
                  {
                    url: '#8',
                    text: 'Kategori 8',
                  },
                ]}
              />
            </SubjectFlexChild>
            <SubjectFlexChild>
              <SubjectLinks
                heading="Mest lest"
                links={[
                  {
                    text: 'Grafisk design',
                    toLinkProps: () => ({ to: '#1b' }),
                  },
                  {
                    text: 'Nettsider',
                    toLinkProps: () => ({ to: '#2b' }),
                  },
                  {
                    text: 'Prøv deg som journalist',
                    toLinkProps: () => ({ to: '#3b' }),
                  },
                  {
                    text: 'Grenseløs journalistikk',
                    toLinkProps: () => ({ to: '#4b' }),
                  },
                ]}
              />
            </SubjectFlexChild>
          </SubjectFlexWrapper>
          <SubjectCarousel
            narrowScreen
            subjects={contentCards}
            title="Litt forskjellig fra faget"
          />
        </SubjectChildContent>
      </SubjectContent>
    </OneColumn>
    <OneColumn noPadding>
      <SubjectChildContent>
        <SubjectFlexWrapper>
          <SubjectFlexChild>{subjectArchive()}</SubjectFlexChild>
          <SubjectFlexChild>{subjectAbout()}</SubjectFlexChild>
        </SubjectFlexWrapper>
      </SubjectChildContent>
    </OneColumn>
    <SubjectCarousel
      wideScreen
      subjects={contentCards}
      title="Litt forskjellig fra faget"
      subjectPage
    />
    {secondaryContent}
    <OneColumn noPadding>
      <SubjectChildContent>{some}</SubjectChildContent>
    </OneColumn>
  </article>
);

export const SubjectLanguage = ({ id }) => (
  <article>
    <SubjectHeader
      heading="Kinesisk"
      images={[
        {
          url: chineseBackground,
          types: Object.keys(breakpoints),
        },
      ]}
    />
    <OneColumn wide>
      <SubjectContent twoColumns breadcrumb={<Breadcrumb onlySubject />}>
        <ResourcesWrapper
          id={id}
          subjectPage
          header={<ResourcesTitle>Emner</ResourcesTitle>}>
          <TwoColumnsLanguageExample />
        </ResourcesWrapper>
        <SubjectChildContent>
          <SubjectFlexWrapper>
            <SubjectFlexChild>
              <SubjectShortcuts
                messages={{
                  heading: 'Gå direkte til',
                  showMore: 'Vis flere',
                  showLess: 'Vis færre',
                }}
                links={[
                  {
                    url: '#1',
                    text: 'Fagstoff',
                  },
                  {
                    url: '#2',
                    text: 'Oppgaver',
                  },
                  {
                    url: '#3',
                    text: 'Læringsstier',
                  },
                  {
                    url: '#4',
                    text: 'Film',
                  },
                  {
                    url: '#5',
                    text: 'Spill',
                  },
                  {
                    url: '#6',
                    text: 'Verktøy og mal',
                  },
                  {
                    url: '#7',
                    text: 'Kategori 7',
                  },
                  {
                    url: '#8',
                    text: 'Kategori 8',
                  },
                ]}
              />
            </SubjectFlexChild>
            <SubjectFlexChild>
              <SubjectLinks
                heading="Mest lest"
                links={[
                  {
                    text: 'Grafisk design',
                    toLinkProps: () => ({ to: '#1c' }),
                  },
                  {
                    text: 'Nettsider',
                    toLinkProps: () => ({ to: '#2c' }),
                  },
                  {
                    text: 'Prøv deg som journalist',
                    toLinkProps: () => ({ to: '#3c' }),
                  },
                  {
                    text: 'Grenseløs journalistikk',
                    toLinkProps: () => ({ to: '#4c' }),
                  },
                ]}
              />
            </SubjectFlexChild>
          </SubjectFlexWrapper>
          <SubjectCarousel
            narrowScreen
            subjects={contentCards}
            title="Litt forskjellig fra faget"
          />
        </SubjectChildContent>
      </SubjectContent>
    </OneColumn>
    <SubjectCarousel
      wideScreen
      subjects={contentCards}
      title="Litt forskjellig fra faget"
      subjectPage
    />
    {secondaryContent}
    <OneColumn noPadding>
      <SubjectChildContent>{some}</SubjectChildContent>
    </OneColumn>
  </article>
);
