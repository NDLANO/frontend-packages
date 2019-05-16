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
  Hero,
  SubjectBadge,
  ErrorMessage,
  OneColumn,
  PageContainer,
  Content,
} from '@ndla/ui';
import { StoryIntro, BannerList } from '../wrappers';

import MastheadWithTopicMenu from '../molecules/mastheads';
import Subject, { SubjectWithTwoColumn, SubjectLanguage } from './Subject';

import FooterExample from '../molecules/footers';
import ArticleLoader from '../article/ArticleLoader';
import ArticleLearningmaterial from './ArticleLearningmaterial';
import ArticleAdditional from './ArticleAdditional';
import ArticleExercise from './ArticleExercise';
import ArticleSimple from './ArticleSimple';
import AuthorPage from './AuthorPage';
import ArticleExternalLearningResource from './ArticleExternalLearningResource';
import ArticleSourceMaterial from './ArticleSourceMaterial';
import ArticleAssessmentResource from './ArticleAssessmentResource';
import Breadcrumb, { BreadcrumbSimpleArticle } from '../molecules/breadcrumbs';
import Frontpage from './FrontpageExample';
import NdlaFilmFrontpage from './NdlaFilmFrontpage';

import NotExist from '../../images/not-exist.gif';
import banners from '../../images/banners';

storiesOf('Sidevisninger', module)
  .add('En side, laster innhold (helt tom)', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
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
            illustration={{
              url: NotExist,
              altText: 'Finnes ikke',
            }}
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
  ))
  .add('Forenklet artikkelmal', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <Hero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <BreadcrumbSimpleArticle />
              </section>
            </div>
          </OneColumn>
        </Hero>
        <ArticleSimple />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Forfatter sidemal', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <Hero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <BreadcrumbSimpleArticle name="Cecilie Isaksen Eftedal" />
              </section>
            </div>
          </OneColumn>
        </Hero>
        <AuthorPage />
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
  ))
  .add('Endret språk (popup åpen)', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu languageSelectorOpen />
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
  ));

storiesOf('Emnesider', module)
  .add('1. Fagoversikt', () => (
    <PageContainer background>
      <Content>
        <Frontpage />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('2. Fag', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu
          topicMenuProps={{ isOnSubjectFrontPage: true }}
        />
        <Subject />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('3. Fag med to kolonner', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu
          topicMenuProps={{ isOnSubjectFrontPage: true }}
        />
        <SubjectWithTwoColumn />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('4. Fagforside språk', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu
          topicMenuProps={{ isOnSubjectFrontPage: true }}
        />
        <SubjectLanguage />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('5. Hovedemne', () => (
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
          articleId="29"
          icon={<SubjectBadge size="large" background />}
          label="Emne"
          hideResources
          showSubTopics
        />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('6. Underemne', () => (
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
          articleId="60"
          icon={<SubjectBadge size="large" background />}
          label="Emne"
        />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Bannerbilder', () => (
    <div>
      <StoryIntro title="Bannerbilder">
        <p>
          Hvert fag i NDLA kan ha sitt eget unike bannerbilde. Det er anbefalt
          at bannerbildene er i SVG format og har en versjon for desktop og en
          annen versjon for mobil.
        </p>
        <p>
          Ved utfylling av importskjema må lenken til bannerbildet hentes
          herfra. Ved å trykke på «Kopier mobil/desktop banner» knappene, får du
          en lenke som kan limes inn i importskjemaet.
        </p>
      </StoryIntro>
      <div>
        <BannerList banners={banners} />
      </div>
    </div>
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
storiesOf('Ndla film', module)
  .add('Fag forside', () => (
    <PageContainer ndlaFilm>
      <Content>
        <MastheadWithTopicMenu ndlaFilm />
        <NdlaFilmFrontpage />
      </Content>
      <FooterExample inverted />
    </PageContainer>
  ))
  .add('Film (emne side)', () => (
    <PageContainer backgroundWide ndlaFilm>
      <Content>
        <MastheadWithTopicMenu ndlaFilm />
        <ArticleLoader
          articleId="3683"
          icon={<SubjectBadge size="large" background />}
          label="Emne"
          withBackgroundImage
          ndlaFilm
        />
      </Content>
      <FooterExample inverted />
    </PageContainer>
  ))
  .add('Film emne (over film)', () => (
    <PageContainer backgroundWide ndlaFilm>
      <Content>
        <MastheadWithTopicMenu ndlaFilm />
        <ArticleLoader
          articleId="4824"
          icon={<SubjectBadge size="large" background />}
          label="Emne"
          hideResources
          showSubTopics
          ndlaFilm
        />
      </Content>
      <FooterExample inverted />
    </PageContainer>
  ));
