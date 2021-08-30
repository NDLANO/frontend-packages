import React from 'react';
import { storiesOf } from '@storybook/react';

import { PageContainer, Content, OneColumn } from '@ndla/ui';

import MastheadWithTopicMenu from './molecules/mastheads';
import FooterExample from './molecules/footers';
import SearchResult from './pages/SearchResult';

storiesOf('Søk', module)
  .add('Søkeside', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu hideSearchButton hideMenuButton />
        <OneColumn cssModifier="clear-desktop" wide>
          <SearchResult />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Søkefelt', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu searchFieldExpanded />
      </Content>
    </PageContainer>
  ))
  .add('Søkeside kompetansemål', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu hideSearchButton hideMenuButton />
        <OneColumn cssModifier="clear-desktop" wide>
          <SearchResultTypeExample showCompetenceGoals />
        </OneColumn>
        <MastheadWithTopicMenu searchFieldExpanded />
      </Content>
    </PageContainer>
  ));
