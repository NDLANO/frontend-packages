/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { PageContainer, Content, OneColumn } from '@ndla/ui';
import MastheadWithTopicMenu from './molecules/mastheads';
import FooterExample from './molecules/footers';
import MyNdla from './pages/MyNdla';
import MyNdlaAddToFavoritesExample from './molecules/MyNdlaAddToFavoritesExample';

storiesOf('Min NDLA', module).add('Dashboard', () => (
  <PageContainer>
    <MastheadWithTopicMenu />
    <Content>
      <OneColumn cssModifier="clear-desktop" fullscreen>
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

