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
  Hero,
  ErrorMessage,
  OneColumn,
  PageContainer,
  ResourceWrapper,
  TopicIntroductionList,
  RelatedArticles,
  LayoutItem,
  Breadcrumb,
  Content,
  StoryBody,
} from 'ndla-ui';

import { MastheadWithTopicMenu } from '../molecules/mastheads';
import FooterExample from '../molecules/footers';
import { ResourceSubsetList } from '../molecules/resources';

import ArticleLoader from '../article/ArticleLoader';
import ArticleLearningmaterial from './ArticleLearningmaterial';
import ArticleAdditional from './ArticleAdditional';
import ArticleExercise from './ArticleExercise';
import article, {
  topicList,
  subjectList,
  articleResources,
} from '../../dummydata/index';

const ResourcesSubTopics = () =>
  <LayoutItem layout="extend">
    <ResourceWrapper>
      <h1 className="c-resources__title">Emner</h1>
      <TopicIntroductionList toTopic={() => '#'} topics={topicList} />
    </ResourceWrapper>
  </LayoutItem>;

storiesOf('Sidevisninger', module)
  .add('En side uten innhold', () =>
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <OneColumn cssModifier="clear">
          <div>En side uten innhold</div>
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>,
  )
  .add('En side med innhold', () =>
    <PageContainer>
        <MastheadWithTopicMenu />
        <Hero red>
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
        </Hero>
      <Content>
        <ArticleLoader articleId="49" />
      </Content>
      <FooterExample />
    </PageContainer>,
  )
  .add('En side med feilmelding', () =>
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
    </PageContainer>,
  )
  .add('Hent artikkel med id', () =>
    <PageContainer>
        <MastheadWithTopicMenu />
        <Hero red>
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
        </Hero>
      <Content>
        <ArticleLoader closeButton />
      </Content>
      <FooterExample />
    </PageContainer>,
  );
storiesOf('Artikkelmaler', module)
  .add('Lærestoff', () =>
    <PageContainer>
        <MastheadWithTopicMenu />
        <Hero red>
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
        </Hero>
      <Content>
        <ArticleLearningmaterial />
      </Content>
      <FooterExample />
    </PageContainer>,
  )
  .add('Oppgaver og aktiviteter', () =>
    <PageContainer>
        <MastheadWithTopicMenu />
        <Hero green>
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
        </Hero>
      <Content>
        <ArticleExercise />
      </Content>
      <FooterExample />
    </PageContainer>,
  )
  .add('Tilleggsstoff', () =>
    <PageContainer>
        <MastheadWithTopicMenu />
        <Hero red>
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
        </Hero>
      <Content>
        <ArticleAdditional />
      </Content>
      <FooterExample />
    </PageContainer>,
  );

storiesOf('Emnesider', module)
  .add('1. Fagoversikt', () =>
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <OneColumn cssModifier="narrow">
          <article>
            <LayoutItem layout="center">
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
                ].map(subject =>
                  <li key={subject}>
                    <a href="">
                      {subject}
                    </a>
                  </li>,
                )}
              </ul>
            </LayoutItem>
          </article>
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>,
  )
  .add('2. Fag', () =>
    <PageContainer>
        <MastheadWithTopicMenu />
        <Hero>
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
        </Hero>
      <StoryBody>
        <h1>Fagside</h1>
        <ResourcesSubTopics />
      </StoryBody>
      <FooterExample />
    </PageContainer>,
  )
  .add('3. Hovedemne', () =>
    <PageContainer>
        <MastheadWithTopicMenu />
        <Hero>
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
        </Hero>
      <Content>
        <ArticleLoader articleId="1325" isTopicArticle />
        <OneColumn>
          <article className="c-article">
            <ResourcesSubTopics />
            <LayoutItem layout="extend">
              <ResourceSubsetList />
            </LayoutItem>
          </article>
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>,
  )
  .add('4. Underemne', () =>
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <Hero>
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
        </Hero>
        <ArticleLoader articleId="5948" notitle />
        <OneColumn>
          <article className="c-article">
            <LayoutItem layout="extend">
              <RelatedArticles resources={articleResources} />
              <ResourceSubsetList />
            </LayoutItem>
          </article>
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>,
  )
  .add('Last inn emne', () =>
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu />
        <Hero>
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
        </Hero>
        <LayoutItem layout="extend">
          <ArticleLoader articleId="" closeButton />
          <div className="u-padding-bottom-huge" />
        </LayoutItem>
        <OneColumn>
          <article className="c-article">
            <LayoutItem layout="extend">
              <RelatedArticles resources={articleResources} />
              <ResourceSubsetList />
            </LayoutItem>
          </article>
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>,
  );
