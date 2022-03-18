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
  AssessmentResourcesHero,
  ExternalLearningResourcesHero,
  SourceMaterialHero,
  SubjectBadge,
  ErrorMessage,
  OneColumn,
  PageContainer,
  Content,
  ErrorResourceAccessDenied,
  ContentPlaceholder,
} from '@ndla/ui';
import { StoryIntro, BannerList } from '../wrappers';

import MastheadWithTopicMenu from '../molecules/mastheads';

import FooterExample from '../molecules/footers';
import ArticleLoader from '../article/ArticleLoader';
import ArticleLearningmaterial from './ArticleLearningmaterial';
import ArticleAdditional from './ArticleAdditional';
import ArticleExercise from './ArticleExercise';
import ArticleExternalLearningResource from './ArticleExternalLearningResource';
import ArticleSourceMaterial from './ArticleSourceMaterial';
import ArticleAssessmentResource from './ArticleAssessmentResource';
import Breadcrumb from '../molecules/breadcrumbs';
import Frontpage from './FrontpageExample';
import NdlaFilmFrontpage from './NdlaFilmFrontpage';
import LearningPathExample from './LearningPathExample';

import NotExist from '../../images/not-exist.gif';
import banners from '../../images/banners';
import ExplanationService from './ExplanationService';
import ProgrammePage from './ProgrammePage';
import SubjectPage from './SubjectPage';
import { subjectBreadcrumb, topics } from '../../dummydata/mockPrograms';
import MultidisciplinarySubjectPage from './MultidisciplinarySubjectPage';
import MultidisciplinarySubjectArticle from './MultidisciplinarySubjectArticle';
import backgroundSSR from '../../images/banners/Service-og-samferdsel-black.svg';
import { contentCards } from '../../dummydata';
import Toolbox from './Toolbox';

storiesOf('Sidevisninger', module)
  .add('En side, laster innhold (helt tom)', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <ContentPlaceholder />
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
              description: 'Vi beklager, men vi fant ikke siden du prøvde å komme til.',
              back: 'Tilbake',
              goToFrontPage: 'Gå til forsiden',
            }}
          />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Læringssti', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu />
        <LearningPathExample />
      </Content>
      <FooterExample />
    </PageContainer>
  ));
storiesOf('Læringsressurser', module)
  .add('Fagstoff', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu skipToMainContentId="mainContentId" />
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
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu skipToMainContentId="mainContentId" />
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
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu skipToMainContentId="mainContentId" />
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
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu skipToMainContentId="mainContentId" />
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
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu skipToMainContentId="mainContentId" />
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
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu skipToMainContentId="mainContentId" />
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

storiesOf('Fag- og emnesider', module)
  .add('1. Forside', () => (
    <PageContainer>
      <Content>
        <Frontpage />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('2. Programside', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu menuProps={{ hideSubject: true }} />
        <ProgrammePage />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('3. Fagside', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectPage
          topics={topics}
          initialBreadcrumb={subjectBreadcrumb}
          subjectName="Forretningsdrift (SR Vg1)"
          bannerBackground={backgroundSSR}
          subjectContentCards={contentCards}
          subjectAboutHeading="Om salg, service og reiseliv"
          subjectAboutDescription="Litt om faget"
        />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('4. Hovedemne', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectPage
          topics={topics}
          initialBreadcrumb={subjectBreadcrumb}
          subjectName="Forretningsdrift (SR Vg1)"
          bannerBackground={backgroundSSR}
          subjectContentCards={contentCards}
          selectedMainTopic={22665}
          subjectAboutHeading="Om salg, service og reiseliv"
          subjectAboutDescription="Litt om faget"
        />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('5. Underemne', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectPage
          topics={topics}
          initialBreadcrumb={subjectBreadcrumb}
          subjectName="Forretningsdrift (SR Vg1)"
          bannerBackground={backgroundSSR}
          subjectContentCards={contentCards}
          selectedMainTopic={22665}
          selectedSubTopic={22703}
          subjectAboutHeading="Om salg, service og reiseliv"
          subjectAboutDescription="Litt om faget"
        />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('6. Underemne med underemne', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectPage
          topics={topics}
          initialBreadcrumb={subjectBreadcrumb}
          subjectName="Forretningsdrift (SR Vg1)"
          bannerBackground={backgroundSSR}
          subjectContentCards={contentCards}
          selectedMainTopic={22665}
          selectedSubTopic={22703}
          selectedSubSubTopic={22703}
          subjectAboutHeading="Om salg, service og reiseliv"
          subjectAboutDescription="Litt om faget"
        />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Verktøykassa', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <Toolbox />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Tverrfaglige tema', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <MultidisciplinarySubjectPage />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Tverrfaglig emne - bærekraftig utvikling', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu skipToMainContentId="mainContentId" />
        <MultidisciplinarySubjectArticle subjects={['climate']} articleId="22220" />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Tverrfaglig emne - folkehelse og livsmestring', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu skipToMainContentId="mainContentId" />
        <MultidisciplinarySubjectArticle subjects={['publicHealth']} articleId="22844" />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Tverrfaglig emne - demokrati og medborgerskap', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu skipToMainContentId="mainContentId" />
        <MultidisciplinarySubjectArticle subjects={['democracy']} articleId="22727" />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Tverrfaglig emne - demokrati og klima', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu skipToMainContentId="mainContentId" />
        <MultidisciplinarySubjectArticle subjects={['climate', 'democracy']} articleId="22222" />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Tverrfaglig emne - demokrati og folkehelse', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu skipToMainContentId="mainContentId" />
        <MultidisciplinarySubjectArticle subjects={['publicHealth', 'democracy']} articleId="21045" />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Tverrfaglig emne - klima og folkehelse', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu skipToMainContentId="mainContentId" />
        <MultidisciplinarySubjectArticle subjects={['publicHealth', 'climate']} articleId="20655" />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Tverrfaglig emne - alle tema', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu skipToMainContentId="mainContentId" />
        <MultidisciplinarySubjectArticle subjects={['climate', 'democracy', 'publicHealth']} articleId="22277" />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Bannerbilder', () => (
    <div>
      <StoryIntro title="Bannerbilder">
        <p>
          Hvert fag i NDLA kan ha sitt eget unike bannerbilde. Det er anbefalt at bannerbildene er i SVG format og har
          en versjon for desktop og en annen versjon for mobil.
        </p>
        <p>
          Ved utfylling av importskjema må lenken til bannerbildet hentes herfra. Ved å trykke på «Kopier mobil/desktop
          banner» knappene, får du en lenke som kan limes inn i importskjemaet.
        </p>
      </StoryIntro>
      <div>
        <BannerList banners={banners} />
      </div>
    </div>
  ));
storiesOf('Autentisering', module)
  .add('Hovedhode/footer - utlogget', () => (
    <div>
      <MastheadWithTopicMenu />
      <FooterExample />
    </div>
  ))
  .add('Hovedhode/footer - innlogget', () => (
    <div>
      <MastheadWithTopicMenu isAuthed />
      <FooterExample isAuthenticated />
    </div>
  ))
  .add('Ressurs uten tilgang', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <OneColumn cssModifier="clear">
          <ErrorResourceAccessDenied onAuthenticateClick={() => {}} />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Emner', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <SubjectPage
          topics={topics}
          initialBreadcrumb={subjectBreadcrumb}
          subjectName="Forretningsdrift (SR Vg1)"
          bannerBackground={backgroundSSR}
          subjectContentCards={contentCards}
          subjectAboutHeading="Om salg, service og reiseliv"
          subjectAboutDescription="Litt om faget"
        />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Læringsressurs - lærer', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu isAuthed skipToMainContentId="mainContentId" />
        <SubjectMaterialHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb />
              </section>
            </div>
          </OneColumn>
        </SubjectMaterialHero>
        <ArticleLearningmaterial accessRestricted />
      </Content>
      <FooterExample isAuthenticated />
    </PageContainer>
  ));
storiesOf('Ndla film', module)
  .add('NDLA Film forside', () => (
    <PageContainer ndlaFilm>
      <Content>
        <MastheadWithTopicMenu ndlaFilm skipToMainContentId="mainContentId" />
        <NdlaFilmFrontpage id="mainContentId" />
      </Content>
      <FooterExample inverted />
    </PageContainer>
  ))
  .add('Film (emne side)', () => (
    <PageContainer backgroundWide ndlaFilm>
      <Content>
        <MastheadWithTopicMenu ndlaFilm skipToMainContentId="mainContentId" />
        <ArticleLoader
          id="mainContentId"
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
        <MastheadWithTopicMenu ndlaFilm skipToMainContentId="mainContentId" />
        <ArticleLoader
          id="mainContentId"
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
  ))
  .add('Læringssti (på NDLA film)', () => (
    <PageContainer backgroundWide ndlaFilm>
      <Content>
        <MastheadWithTopicMenu ndlaFilm skipToMainContentId="mainContentId" />
        <LearningPathExample invertedStyle />
      </Content>
      <FooterExample inverted />
    </PageContainer>
  ));
storiesOf('Forklaringstjenesten', module).add('Forklaringstjenesten', () => (
  <PageContainer>
    <StoryIntro title="Forklaringstjenesten">
      <p>
        Ett eller flere fag må velges før filtrering vises. Velges flere fag vises alle begrep som er tilknyttet minst
        ett av fagene.
      </p>
      <p>
        Filtre som alene ikke gir treff skal ikke vises. Begrep som vises i listen må inneholde alle filtre som er
        valgt. Dersom bruker velger ett eller flere filtre skal de resterende filtrene som ikke gir treff i kombinasjon
        med valgte filtre være deaktivert
      </p>
    </StoryIntro>
    <OneColumn>
      <ExplanationService />
    </OneColumn>
  </PageContainer>
));
