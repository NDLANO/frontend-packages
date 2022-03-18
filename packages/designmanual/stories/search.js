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
      <MastheadWithTopicMenu searchFieldExpanded />
      <Content></Content>
    </PageContainer>
  ))
  .add('Søkeside', () => (
    <PageContainer background>
      <MastheadWithTopicMenu hideSearchButton />
      <Content>
        <OneColumn cssModifier="clear-desktop" wide>
          <SearchPageExample />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Søk kompetansemål', () => (
    <PageContainer background>
      <MastheadWithTopicMenu hideSearchButton hideMenu />
      <Content>
        <OneColumn cssModifier="clear-desktop" wide>
          <SearchPageExample competenceGoals />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Søkeside opphaver', () => (
    <PageContainer background>
      <MastheadWithTopicMenu hideSearchButton />
      <Content>
        <OneColumn cssModifier="clear-desktop" wide>
          <SearchPageExample showAuthor />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Søkeside re-design', () => (
    <PageContainer>
      <MastheadWithTopicMenu hideSearchButton menuProps={{ hideSubject: true, hideCurrentProgramme: true }} />
      <Content>
        <OneColumn cssModifier="clear-desktop" wide>
          <SearchResultTypeExample />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ))
  .add('Søkeside kompetansemål', () => (
    <PageContainer>
      <MastheadWithTopicMenu hideSearchButton hideMenuButton />
      <Content>
        <OneColumn cssModifier="clear-desktop" wide>
          <SearchResultTypeExample showCompetenceGoals />
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ));
