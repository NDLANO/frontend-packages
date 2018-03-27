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
  AssessmentResourcesHero,
  ExternalLearningResourcesHero,
  SourceMaterialHero,
  SubjectBadge,
  ErrorMessage,
  OneColumn,
  PageContainer,
  Content,
  FrontpageHeader,
  FrontpageSubjectsWrapper,
  FrontpageSubjectsSection,
} from 'ndla-ui';

import { MastheadWithTopicMenu } from '../molecules/mastheads';
import Subject, { SubjectWithTwoColumn } from './Subject';

import FooterExample from '../molecules/footers';
import ArticleLoader from '../article/ArticleLoader';
import ArticleLearningmaterial from './ArticleLearningmaterial';
import ArticleAdditional from './ArticleAdditional';
import ArticleExercise from './ArticleExercise';
import ArticleExternalLearningResource from './ArticleExternalLearningResource';
import ArticleSourceMaterial from './ArticleSourceMaterial';
import ArticleAssessmentResource from './ArticleAssessmentResource';
import Breadcrumb from '../molecules/breadcrumbs';

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
                <Breadcrumb />
              </section>
            </div>
          </OneColumn>
        </SubjectMaterialHero>
        <ArticleLoader articleId="744" />
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
                <Breadcrumb />
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
                <Breadcrumb />
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
                <Breadcrumb />
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
                <Breadcrumb />
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
                <Breadcrumb />
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
                <Breadcrumb />
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
                <Breadcrumb />
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
    <PageContainer backgroundWide>
      <Content>
        <FrontpageHeader
          searchFieldValue=""
          onSearchFieldChange={() => {}}
          searchFieldPlaceholder="Søk etter f.eks emner, lærestoff, nøkkelord …"
          messages={{
            searchFieldTitle: 'Søk',
          }}
          links={[
            {
              url: '#1',
              text: 'Om NDLA',
            },
            {
              url: '#2',
              text: 'Åpne digitale læremidler for videregående opplæring',
            },
          ]}
        />
        <main>
          <FrontpageSubjectsWrapper>
            <FrontpageSubjectsSection
              heading="Fellesfag"
              subjects={[
                {
                  url: '#1',
                  text: 'Engelsk',
                },
                {
                  url: '#2',
                  text: 'Historie',
                  yearInfo: 'Vg2 og Vg3',
                },
                {
                  url: '#3',
                  text: 'Kroppsøving',
                },
                {
                  url: '#3',
                  text: 'Matematikk',
                  yearInfo: 'Vg1P',
                },
                {
                  url: '#4',
                  text: 'Matematikk',
                  yearInfo: 'Vg2P',
                },
                {
                  url: '#5',
                  text: 'Medie- informasjonskunnskap 1 og 2',
                },
                {
                  url: '#6',
                  text: 'Naturfag',
                },
                {
                  url: '#7',
                  text: 'Norsk',
                  yearInfo: 'Vg2 og Vg3 SF',
                },
                {
                  url: '#8',
                  text: 'Norsk',
                  yearInfo: 'YF ogh SF',
                },
                {
                  url: '#9',
                  text: 'Samfunnsfag',
                },
                {
                  url: '#10',
                  text: 'Sørsamisk som førstespråk',
                },
              ]}
            />
            <FrontpageSubjectsSection
              heading="Yrkesfag"
              subjects={[
                {
                  url: '#1',
                  text: 'Barne- og undersarbeiderfag',
                  yearInfo: 'Vg2',
                },
                {
                  url: '#2',
                  text: 'Brønnteknikk',
                },
                {
                  url: '#3',
                  text: 'Bygg og annleggsteknikk',
                  yearInfo: 'Vg1',
                },
                {
                  url: '#4',
                  text: 'Design og håndverk',
                  yearInfo: 'Vg1',
                },
                {
                  url: '#5',
                  text: 'Elektrofag',
                  yearInfo: 'Vg1',
                },
                {
                  url: '#6',
                  text: 'Helse- og oppvekstfag',
                  yearInfo: 'Vg1',
                },
                {
                  url: '#7',
                  text: 'Helsearbeiderfag',
                  yearInfo: 'Vg2',
                },
                {
                  url: '#8',
                  text: 'IKT-servicefag',
                  yearInfo: 'Vg2',
                },
                {
                  url: '#9',
                  text: 'Kokk- og servitørfag',
                  yearInfo: 'Vg2',
                },
                {
                  url: '#10',
                  text: 'Naturbruk',
                },
                {
                  url: '#11',
                  text: 'Reiseliv',
                  yearInfo: 'Vg2',
                },
                {
                  url: '#11',
                  text: 'Restaurant- og matfag',
                  yearInfo: 'Vg1',
                },
                {
                  url: '#12',
                  text: 'Romteknologi',
                  yearInfo: 'Vg3',
                },
                {
                  url: '#13',
                  text: 'Salg, service og samferdsel',
                  yearInfo: 'Vg2',
                },
                {
                  url: '#14',
                  text: 'Service og smaferdsel',
                  yearInfo: 'Vg1',
                },
                {
                  url: '#15',
                  text: 'Teknikk og industriell produksjon',
                  yearInfo: 'Vg1',
                },
                {
                  url: '#16',
                  text: 'Transport og logistikk',
                  yearInfo: 'Vg2',
                },
              ]}
            />
            <FrontpageSubjectsSection
              heading="Studiespesialiserende"
              subjects={[
                {
                  url: '#1',
                  text: 'Biologi 1',
                },
                {
                  url: '#2',
                  text: 'Engelskspråklig litteratur og kultur',
                },
                {
                  url: '#3',
                  text: 'Internasjonal engelsk',
                },
                {
                  url: '#4',
                  text: 'Kinesisk 1',
                },
                {
                  url: '#5',
                  text: 'Kinesisk 2',
                },
                {
                  url: '#6',
                  text: 'Kommunikasjon og kultur 1',
                },
                {
                  url: '#7',
                  text: 'Kommunikasjon og kultur 2',
                },
                {
                  url: '#8',
                  text: 'Kommunikasjon og kultur 3',
                  yearInfo: 'Vg2',
                },
                {
                  url: '#9',
                  text: 'Markedsføring og ledelse 1',
                  yearInfo: 'Vg2',
                },
                {
                  url: '#10',
                  text: 'Matematikk',
                  yearInfo: 'R1',
                },
                {
                  url: '#11',
                  text: 'Matematikk',
                  yearInfo: 'R2',
                },
                {
                  url: '#12',
                  text: 'Matematikk',
                  yearInfo: 'S1',
                },
                {
                  url: '#13',
                  text: 'Matematikk',
                  yearInfo: 'S2',
                },
                {
                  url: '#14',
                  text: 'Medie- og informasjonskunnskap 1 og 2',
                },
                {
                  url: '#15',
                  text: 'Medieuttrykk og mediesamfunnet',
                },
                {
                  url: '#16',
                  text: 'Samfunnsfaglig engelsk',
                },
                {
                  url: '#17',
                  text: 'Tysk 1',
                },
                {
                  url: '#18',
                  text: 'Tysk 2',
                },
              ]}
            />
          </FrontpageSubjectsWrapper>
        </main>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('2. Fag', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <Subject />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('3. Fag med to kolonner', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectWithTwoColumn />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('4. Hovedemne', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb />
              </section>
            </div>
          </OneColumn>
        </SubjectHero>
        <ArticleLoader
          articleId="4824"
          icon={<SubjectBadge size="large" background />}
          label="Emne"
          hideResources
          showSubTopics
        />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('5. Underemne', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb />
              </section>
            </div>
          </OneColumn>
        </SubjectHero>
        <ArticleLoader
          articleId="4853"
          icon={<SubjectBadge size="large" background />}
          label="Emne"
        />
      </Content>
      <FooterExample />
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
                <Breadcrumb />
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
