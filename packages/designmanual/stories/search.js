import React from 'react';
import { storiesOf } from '@storybook/react';

import { PageContainer, Content, OneColumn } from '@ndla/ui';

import MastheadWithTopicMenu from './molecules/mastheads';
import FooterExample from './molecules/footers';
import SearchPageExample from './pages/SearchPageExample';
import SearchResultTypeExample from './pages/SearchResultTypeExample';

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
  .add('Søkeside opphaver', () => (
    <PageContainer background>
      <Content>
        <MastheadWithTopicMenu hideSearchButton />
        <OneColumn cssModifier="clear-desktop" wide>
          <SearchPageExample showAuthor />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Søkeside re-design', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu hideSearchButton menuProps={{ hideSubject: true, hideCurrentProgramme: true }} />
        <OneColumn cssModifier="clear-desktop" wide>
          <SearchResultTypeExample />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ));
