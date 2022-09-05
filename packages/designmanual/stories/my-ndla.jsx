/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { PageContainer, Content, OneColumn, SnackbarProvider, ErrorMessage } from '@ndla/ui';
import MastheadWithTopicMenu from './molecules/mastheads';
import FooterExample from './molecules/footers';
import MyNdla from './pages/MyNdla';
import MyNdlaAddToFavoritesExample from './molecules/MyNdlaAddToFavoritesExample';
import MyNdlaMyPage from './pages/MyNdlaMyPage';
import { StoryIntro } from './wrappers';
import Oops from '../images/oops.gif';

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
    <SnackbarProvider>
      <MastheadWithTopicMenu />
      <Content>
        <OneColumn cssModifier="clear-desktop" wide>
          <h3>Hjerte logget inn</h3>
          <MyNdlaAddToFavoritesExample />
          <h3>Hjerte ikke logget inn</h3>
          <MyNdlaAddToFavoritesExample isLoggedIn={false} />

          <h3>Hjerte ikke logget inn, uten ressurs</h3>
          <MyNdlaAddToFavoritesExample isLoggedIn={false} resource={false} />
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

storiesOf('Min NDLA', module).add('Feilmelding', () => (
  <div>
    <StoryIntro title="Feilmelding">
      <p>
        Feilmeldingskomponenten lenker tilbake til forrige side eller til forsiden. Den brukes når det har oppstått en
        feil ved innlogging.
      </p>
    </StoryIntro>
    <ErrorMessage
      illustration={{
        url: Oops,
        altText: 'Systemfeil',
      }}
      messages={{
        title: 'Ops, her gikk noe galt',
        linksTitle: 'Prøv igjen',
        logInFailed: 'Logg inn',
      }}
    />
  </div>
));
