/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { PageContainer, Content, OneColumn } from '@ndla/ui';
import MastheadWithTopicMenu from './molecules/mastheads';
import FooterExample from './molecules/footers';
import MyNdla from './pages/MyNdla';
import MyNdlaAddToFavoritesExample from './molecules/MyNdlaAddToFavoritesExample';
import MyNdlaNavigation from './molecules/MyNdlaNavigation';
import MyNdlaMyPage from './pages/MyNdlaMyPage';

storiesOf('Min NDLA', module).add('Elementer', () => (
  <PageContainer>
    <MastheadWithTopicMenu />
    <Content>
      <OneColumn cssModifier="clear-desktop" wide>
        <MyNdla />
      </OneColumn>
    </Content>
    <FooterExample />
  </PageContainer>
));

storiesOf('Min NDLA', module).add('Add to favorites', () => (
  <PageContainer>
    <MastheadWithTopicMenu />
    <Content>
      <OneColumn cssModifier="clear-desktop" wide>
        <MyNdlaAddToFavoritesExample />
      </OneColumn>
    </Content>
    <FooterExample />
  </PageContainer>
));

storiesOf('Min NDLA', module).add('Vertikal navigasjonsmeny', () => (
  <PageContainer>
    <MastheadWithTopicMenu />
    <Content>
      <OneColumn cssModifier="clear-desktop" wide>
        <MyNdlaNavigation />
      </OneColumn>
    </Content>
    <FooterExample />
  </PageContainer>
));

storiesOf('Min NDLA', module).add('Min side', () => (
  <PageContainer>
    <MastheadWithTopicMenu />
    <Content>
      <OneColumn cssModifier="clear-desktop" wide>
        <MyNdlaMyPage />
      </OneColumn>
    </Content>
    <FooterExample />
  </PageContainer>
));
