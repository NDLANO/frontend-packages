import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  SubjectMaterialHero,
  Hero,
  OneColumn,
  PageContainer,
  Content,
  BetaNavigation,
} from 'ndla-ui';

import MastheadWithTopicMenu from './molecules/mastheads';
import BetaNotificationExample from './molecules/BetaNotificationExample';

import FooterExample from './molecules/footers';
import ArticleLoader from './article/ArticleLoader';
import BetaFrontpage from './pages/BetaFrontpage';

import Breadcrumb from './molecules/breadcrumbs';

storiesOf('Beta', module)
  .add('Beta forside', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu
          beta
          betaInfoContent={<span>Velkommen til betaversjonen av ndla.no</span>}
        />
        <BetaNotificationExample />
        <Hero contentType="beta">
          <OneColumn>
            <div className="c-hero__content">
              <BetaNavigation
                links={[
                  {
                    url: '#1',
                    text: 'Medieuttrykk og mediesamfunnet',
                  },
                  {
                    url: '#2',
                    text: 'Samfunnsfag',
                  },
                  {
                    url: '#3',
                    text: 'Helsearbeiderfag',
                  },
                ]}
              />
            </div>
          </OneColumn>
        </Hero>
        <BetaFrontpage />
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Beta artikkel', () => (
    <PageContainer backgroundWide>
      <Content>
        <MastheadWithTopicMenu beta />
        <SubjectMaterialHero>
          <OneColumn>
            <div className="c-hero__content">
              <section>
                <Breadcrumb />
              </section>
            </div>
          </OneColumn>
        </SubjectMaterialHero>
        <ArticleLoader closeButton articleId={500} />
      </Content>
      <FooterExample />
    </PageContainer>
  ));
