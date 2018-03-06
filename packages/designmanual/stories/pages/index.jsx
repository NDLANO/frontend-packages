/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint max-len: 0 */
import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  SubjectMaterialHero,
  TasksAndActivitiesHero,
  SubjectHero,
  Image,
  AssessmentResourcesHero,
  ExternalLearningResourcesHero,
  SourceMaterialHero,
  SubjectBadge,
  ErrorMessage,
  OneColumn,
  PageContainer,
  ResourcesWrapper,
  ResourcesTitle,
  Breadcrumb,
  Content,
  SubjectHeader,
  SubjectContent,
  SubjectSidebarWrapper,
  SubjectShortcuts,
  SubjectLinks,
  SubjectBox,
  SubjectCarousel,
  SubjectConcepts,
  SubjectSocialContent,
  SubjectSocialSection,
  ListView,
  EmbeddedTwitter,
  EmbeddedFacebook,
} from 'ndla-ui';

import { breakpoints } from 'ndla-util';

import {
  MastheadWithTopicMenu,
  MastheadWithLogo,
} from '../molecules/mastheads';
import FooterExample from '../molecules/footers';
import ArticleLoader from '../article/ArticleLoader';
import ArticleLearningmaterial from './ArticleLearningmaterial';
import ArticleAdditional from './ArticleAdditional';
import ArticleExercise from './ArticleExercise';
import ArticleExternalLearningResource from './ArticleExternalLearningResource';
import ArticleSourceMaterial from './ArticleSourceMaterial';
import ArticleAssessmentResource from './ArticleAssessmentResource';
import TopicListExample from '../molecules/TopicListExample';
import article, {
  topicList,
  subjectList,
  subjectCarouselList,
  subjectConcepts,
} from '../../dummydata/index';

import exampleBackground from '../images/medie-example.jpg';

storiesOf('Sidevisninger', module)
  .add('En side uten innhold', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <OneColumn cssModifier="clear">
          <div>En side uten innhold</div>
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('En side med innhold', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectMaterialHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb
                  toSubjects={() => '#'}
                  subjectsTitle="Fag"
                  subject={subjectList[1]}
                  topicPath={topicList.slice(0, -1)}
                  toTopic={() => '#'}
                />
              </section>
            </div>
          </OneColumn>
        </SubjectMaterialHero>
        <ArticleLoader articleId="17477" />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('En side med feilmelding', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <OneColumn cssModifier="clear">
          <ErrorMessage
            messages={{
              title: 'Oops, noe gikk galt',
              description:
                'Vi beklager, men vi fant ikke siden du prøvde å komme til.',
              back: 'Tilbake',
              goToFrontPage: 'Gå til forsiden',
            }}
          />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Hent artikkel med id', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectMaterialHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb
                  toSubjects={() => '#'}
                  subjectsTitle="Fag"
                  subject={subjectList[1]}
                  topicPath={topicList.slice(0, -1)}
                  toTopic={() => '#'}
                />
              </section>
            </div>
          </OneColumn>
        </SubjectMaterialHero>
        <ArticleLoader closeButton />
      </Content>
      <FooterExample />
    </PageContainer>
  ));
storiesOf('Læringsressurser', module)
  .add('Fagstoff', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectMaterialHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb
                  toSubjects={() => '#'}
                  subjectsTitle="Fag"
                  subject={subjectList[1]}
                  topicPath={topicList.slice(0, -1)}
                  toTopic={() => '#'}
                />
              </section>
            </div>
          </OneColumn>
        </SubjectMaterialHero>
        <ArticleLearningmaterial />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Oppgaver og aktiviteter', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <TasksAndActivitiesHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb
                  toSubjects={() => '#'}
                  subjectsTitle="Fag"
                  subject={subjectList[1]}
                  topicPath={topicList.slice(0, -1)}
                  toTopic={() => '#'}
                />
              </section>
            </div>
          </OneColumn>
        </TasksAndActivitiesHero>
        <ArticleExercise />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Vurderingsressurs', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <AssessmentResourcesHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb
                  toSubjects={() => '#'}
                  subjectsTitle="Fag"
                  subject={subjectList[1]}
                  topicPath={topicList.slice(0, -1)}
                  toTopic={() => '#'}
                />
              </section>
            </div>
          </OneColumn>
        </AssessmentResourcesHero>
        <ArticleAssessmentResource />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Ekstern læringsressurs', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <ExternalLearningResourcesHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb
                  toSubjects={() => '#'}
                  subjectsTitle="Fag"
                  subject={subjectList[1]}
                  topicPath={topicList.slice(0, -1)}
                  toTopic={() => '#'}
                />
              </section>
            </div>
          </OneColumn>
        </ExternalLearningResourcesHero>
        <ArticleExternalLearningResource />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Kildemateriale', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <SourceMaterialHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb
                  toSubjects={() => '#'}
                  subjectsTitle="Fag"
                  subject={subjectList[1]}
                  topicPath={topicList.slice(0, -1)}
                  toTopic={() => '#'}
                />
              </section>
            </div>
          </OneColumn>
        </SourceMaterialHero>
        <ArticleSourceMaterial />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Tilleggsstoff', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectMaterialHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb
                  toSubjects={() => '#'}
                  subjectsTitle="Fag"
                  subject={subjectList[1]}
                  topicPath={topicList.slice(0, -1)}
                  toTopic={() => '#'}
                />
              </section>
            </div>
          </OneColumn>
        </SubjectMaterialHero>
        <ArticleAdditional />
      </Content>
      <FooterExample />
    </PageContainer>
  ));

storiesOf('Emnesider', module)
  .add('1. Fagoversikt', () => (
    <PageContainer>
      <Content>
        <MastheadWithLogo />
        <OneColumn cssModifier="clear">
          <article>
            <h1>Yrkesfag</h1>
            <ul>
              {[
                'Naturfag',
                'Engelsk',
                'Helsearbeiderfag vg2',
                'Barne- og ungdomsarbeiderfag Vg2',
                'Brønnteknikk Vg2BETA',
                'Bygg- og anleggsteknikk Vg1BETA',
                'Design og håndverk Vg1',
                'Elektrofag Vg1',
                'Helse- og oppvekstfag Vg1',
                'Helsearbeiderfag Vg2 ',
                'IKT-servicefag Vg2',
                'Kokk- og servitørfag Vg2',
                'Naturbruk Vg1',
                'Reiseliv Vg2',
                'Restaurant- og matfag Vg1',
                'Romteknologi Vg3',
                'Salg, service og sikkerhet Vg2',
                'Service og samferdsel Vg1',
                'Teknikk og industriell produksjon Vg1',
                'Transport og logistikk Vg2',
              ].map(subject => (
                <li key={subject}>
                  <a href="https://example.com">{subject}</a>
                </li>
              ))}
            </ul>
          </article>
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('2. Fag', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
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
            <SubjectContent
              breadcrumb={
                <Breadcrumb
                  toSubjects={() => '#'}
                  subjectsTitle="Fag"
                  subject={subjectList[1]}
                  topicPath={[]}
                  toTopic={() => '#'}
                />
              }>
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
                <SubjectBox
                  media={
                    <Image
                      alt="Forstørrelsesglass"
                      src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
                    />
                  }
                  heading="Tittel overskrift"
                  description="Denne modulen kan variere i innhold. Det kan være aktuelt-stoff, yrkesportretter, «populært hos elever» m.m. Dette er innhold som ikke passer inn i noen av de andre modulene. Det er begrensning på 1 slik modul per fagforside, og den bør ha en utløpsdato."
                  url="#1"
                  archiveUrl="#2"
                  messages={{
                    archive: 'Arkiv',
                  }}
                />
                <SubjectBox
                  smallHeading
                  media={
                    <Image
                      alt="Forstørrelsesglass"
                      src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
                    />
                  }
                  heading="Om medieuttrykk og mediesamfunnet"
                  description="Her kan det komme en tekstlig beskrivelse av hvordan faget er bygget opp eller hvilke særpreg dette faget har. Det kan også være i form av en film som introduserer faget"
                />
              </SubjectSidebarWrapper>
            </SubjectContent>
            <SubjectCarousel
              subjects={subjectCarouselList}
              title="Litt forskjellig fra faget"
            />
            <SubjectConcepts
              concepts={subjectConcepts}
              title="Begreg i faget"
            />

            <SubjectSocialContent>
              <SubjectSocialSection title="Twitter">
                <EmbeddedTwitter screenName="ndla_norsk" tweetLimit={10} />
              </SubjectSocialSection>
              <SubjectSocialSection title="Facebook">
                <EmbeddedFacebook href="https://www.facebook.com/NDLAmediefag/posts/1648640581877981" />
              </SubjectSocialSection>
            </SubjectSocialContent>
          </OneColumn>
        </article>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('3. Hovedemne', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb
                  toSubjects={() => '#'}
                  subjectsTitle="Fag"
                  subject={subjectList[1]}
                  topicPath={topicList.slice(0, -1)}
                  toTopic={() => '#'}
                />
              </section>
            </div>
          </OneColumn>
        </SubjectHero>
        <ArticleLoader
          articleId="17507"
          icon={<SubjectBadge size="large" background />}
          label="Emne"
          hideResources
          showSubTopics
        />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('4. Underemne', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb
                  toSubjects={() => '#'}
                  subjectsTitle="Fag"
                  subject={subjectList[1]}
                  topicPath={topicList.slice(0, -1)}
                  toTopic={() => '#'}
                />
              </section>
            </div>
          </OneColumn>
        </SubjectHero>
        <ArticleLoader
          articleId="5948"
          icon={<SubjectBadge size="large" background />}
          label="Emne"
        />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('5. Listevisning', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <OneColumn>
          <section>
            <Breadcrumb
              toSubjects={() => '#'}
              subjectsTitle="Fag"
              subject={subjectList[1]}
              topicPath={topicList}
              toTopic={() => '#'}
            />
          </section>
        </OneColumn>
        <OneColumn>
          <ListView list={{}} />
        </OneColumn>
      </Content>
    </PageContainer>
  ))
  .add('Last inn emne', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb
                  toSubjects={() => '#'}
                  subjectsTitle="Fag"
                  subject={subjectList[1]}
                  topicPath={topicList.slice(0, -1)}
                  toTopic={() => '#'}
                />
              </section>
            </div>
          </OneColumn>
        </SubjectHero>
        <ArticleLoader
          articleId=""
          closeButton
          icon={<SubjectBadge size="large" background />}
          label="Emne"
        />
      </Content>
      <FooterExample />
    </PageContainer>
  ));
