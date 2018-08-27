import React from 'react';
import { storiesOf } from '@storybook/react';

import { PageContainer, Content, OneColumn } from 'ndla-ui';

import { MastheadWithTopicMenu } from './molecules/mastheads';
import FooterExample from './molecules/footers';
import SearchPageExample from './pages/SearchPageExample';

storiesOf('Søk', module)
  .add('Søkefelt', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu searchFieldExpanded />
      </Content>
    </PageContainer>
  ))
  .add('Søkeside', () => (
    <PageContainer background>
      <Content>
        <MastheadWithTopicMenu hideSearchButton />
        <OneColumn cssModifier="clear-desktop" wide>
          <SearchPageExample />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Søk kompetansemål', () => (
    <PageContainer background>
      <Content>
        <MastheadWithTopicMenu hideSearchButton hideMenu />
        <OneColumn cssModifier="clear-desktop" wide>
          <SearchPageExample competenceGoals />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Søkeside opphavsmann', () => (
    <PageContainer background>
      <Content>
        <MastheadWithTopicMenu hideSearchButton />
        <OneColumn cssModifier="clear-desktop" wide>
          <SearchPageExample showAuthor />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ));
