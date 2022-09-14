/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { PageContainer, Content, OneColumn, SnackbarProvider } from '@ndla/ui';
import MastheadWithTopicMenu from './molecules/mastheads';
import FooterExample from './molecules/footers';
import MyNdla from './pages/MyNdla';
import MyNdlaAddToFavoritesExample from './molecules/MyNdlaAddToFavoritesExample';
import MyNdlaMyPage from './pages/MyNdlaMyPage';
import MyNdlaAuthModalExample from './molecules/authModalExample';

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

storiesOf('Min NDLA', module).add('Moduler', () => (
  <PageContainer>
    <SnackbarProvider>
      <MastheadWithTopicMenu />
      <Content>
        <OneColumn cssModifier="clear-desktop" wide>
          <h2>Hjerte av ressurs</h2>
          <h3>Hjerte logget inn</h3>
          <MyNdlaAddToFavoritesExample />
          <h3>Hjerte ikke logget inn</h3>
          <MyNdlaAddToFavoritesExample isLoggedIn={false} />
          <h3>Hjerte ikke logget inn, uten ressurs</h3>
          <MyNdlaAuthModalExample />
        </OneColumn>
      </Content>
      <FooterExample />
    </SnackbarProvider>
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
