/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { LicenseDescription, BY, SA, NC, ND, PD, CC0, COPYRIGHTED } from '@ndla/licenses';
import {
  ErrorMessage,
  FilterList,
  Footer,
  TopicIntroductionList,
  PageContainer,
  LayoutItem,
  Translation,
  TranslationLine,
  ArticleByline,
  RadioButtonGroup,
  EditorName,
  FooterText,
  LanguageSelector,
  OneColumn,
  Content,
} from '@ndla/ui';
import { StoryIntro } from './wrappers';
import FooterExample from './molecules/footers';
import MessageBox from './molecules/MessageBoxExample';

storiesOf('Min NDLA', module).add('Meldings- og infoboks', () => (
  <PageContainer>
    <StoryIntro title="Meldings- og infoboks">
      <p>
        Her kan du se forskjellige typer meldings- og infobokser. Disse kan anvendes ulike steder på sidene og forteller
        brukeren om at det foregår noe utenom det vanlige.
      </p>
    </StoryIntro>
    <Content>
      <MessageBox />
    </Content>
    <FooterExample />
  </PageContainer>
));
