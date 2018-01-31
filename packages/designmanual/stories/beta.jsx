import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  SubjectMaterialHero,
  OneColumn,
  PageContainer,
  Breadcrumb,
  Content,
} from 'ndla-ui';

import { MastheadWithTopicMenu } from './molecules/mastheads';

import FooterExample from './molecules/footers';
import ArticleLoader from './article/ArticleLoader';
import { topicList, subjectList } from '../dummydata/index';

storiesOf('Beta', module).add('Beta artikkel', () => (
  <PageContainer backgroundWide>
    <Content>
      <MastheadWithTopicMenu beta />
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
      <ArticleLoader closeButton articleId={500} />
    </Content>
    <FooterExample />
  </PageContainer>
));
