/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { PageContainer, Content, OneColumn, UserInfo } from '@ndla/ui';
import MastheadWithTopicMenu from './molecules/mastheads';
import FooterExample from './molecules/footers';
import { StoryIntro, StoryBody } from './wrappers';
import MyNdla from './pages/MyNdla';
import { feideUserLaerer } from './molecules/feideUser';

storiesOf('Min NDLA', module)
  .add('Dashboard', () => (
    <PageContainer>
      <MastheadWithTopicMenu />
      <Content>
        <OneColumn cssModifier="clear-desktop" wide>
          <MyNdla />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Komponent for brukerinfo', () => (
    <div>
      <StoryIntro title="Komponent for brukerinfo">
        <p>
          UserInfo-komponenten tar inn et brukerobjekt fra Feide og printer ut relevant info. Relevant info grupperes.
        </p>
      </StoryIntro>
      <StoryBody>
        <UserInfo user={feideUserLaerer} />
      </StoryBody>
    </div>
  ));
