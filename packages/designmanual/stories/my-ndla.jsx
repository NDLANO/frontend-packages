/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { PageContainer, Content, OneColumn } from '@ndla/ui';
import MastheadWithTopicMenu from './molecules/mastheads';
import FooterExample from './molecules/footers';
import MyNdla from './pages/MyNdla';

storiesOf('Min NDLA', module).add('Dashboard', () => (
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
