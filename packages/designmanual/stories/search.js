import React from 'react';
import { storiesOf } from '@storybook/react';

import { PageContainer, Content, OneColumn } from '@ndla/ui';

import MastheadWithTopicMenu from './molecules/mastheads';
import FooterExample from './molecules/footers';
import SearchResult from './pages/SearchResult';

storiesOf('Søk', module)
  .add('Søkeside', () => (
    <PageContainer>
      <MastheadWithTopicMenu hideSearchButton hideMenuButton />
      <Content>
        <OneColumn cssModifier="clear-desktop" wide>
          <SearchResult />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Søkefelt', () => (
    <PageContainer>
      <MastheadWithTopicMenu searchFieldExpanded />
      <Content></Content>
    </PageContainer>
  ))
  .add('Søkeside kompetansemål', () => (
    <PageContainer>
      <MastheadWithTopicMenu hideSearchButton hideMenuButton />
      <Content>
        <OneColumn cssModifier="clear-desktop" wide>
          <SearchResult showCompetenceGoals />
        </OneColumn>
      </Content>
    </PageContainer>
  ));
