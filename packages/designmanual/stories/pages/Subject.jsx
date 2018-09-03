/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint max-len: 0 */
import React from 'react';

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
} from 'ndla-ui';

import { EmailOutline } from 'ndla-icons/common';
import { breakpoints } from 'ndla-util';

import exampleBackground from '../../images/banners/salg_service_sikkerhet.svg';
import article, { contentCards } from '../../dummydata/index';

import TopicListExample from '../molecules/TopicListExample';
import TwoColumnsExample from '../molecules/TwoColumnsExample';
import Breadcrumb from '../molecules/breadcrumbs';

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
  <SubjectSecondaryContent>
    <OneColumn noPadding>
      <SubjectChildContent>
        <SubjectFlexWrapper>
          <SubjectFlexChild>
            <SubjectNewContent
              heading="Nytt innhold"
              content={[
                {
                  name: 'Radio- og tvstruktur',
                  url: '#1',
                  topicName: 'Mediene i samfunnet',
                  formattedDate: '10.02.2018',
                },
                {
                  name: 'Hva er makt?',
                  url: '#2',
                  topicName: 'Mediene i samfunnet',
                  formattedDate: '24.01.2018',
                },
              ]}
            />
          </SubjectFlexChild>
          <SubjectFlexChild>
            <InfoWidget
              center
              heading="Nyhetsbrev"
              description="Hold deg oppdatert. Abonnér på siste nytt fra NDLA."
              mainLink={{
                name: 'Meld deg på',
                url: '#1',
              }}
              iconLinks={[
                {
                  icon: <EmailOutline />,
                  name: 'Meld deg på nyhetsbrev',
                },
              ]}
            />
          </SubjectFlexChild>
        </SubjectFlexWrapper>
      </SubjectChildContent>
    </OneColumn>
  </SubjectSecondaryContent>
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

export default () => (
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
                url: '#1',
                text: 'Grafisk design',
              },
              {
                url: '#2',
                text: 'Nettsider',
              },
              {
                url: '#3',
                text: 'Prøv deg som journalist',
              },
              {
                url: '#4',
                text: 'Grenseløs journalistikk',
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

export const SubjectWithTwoColumn = () => (
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
    <OneColumn noPadding>
      <SubjectContent twoColumns breadcrumb={<Breadcrumb onlySubject />}>
        <ResourcesWrapper
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
                    url: '#1',
                    text: 'Grafisk design',
                  },
                  {
                    url: '#2',
                    text: 'Nettsider',
                  },
                  {
                    url: '#3',
                    text: 'Prøv deg som journalist',
                  },
                  {
                    url: '#4',
                    text: 'Grenseløs journalistikk',
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
