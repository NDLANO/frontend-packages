import React from 'react';
import { uuid } from 'ndla-util';
import { getLicenseRightByAbbreviation } from 'ndla-licenses';
import { storiesOf } from '@storybook/react';
import { StoryIntro, StoryBody } from './wrappers';

const licenses = [
  'by',
  'sa',
  'nc',
  'nd',
  'pd',
  'cc0',
  'cc',
  'copy',
].map(license => getLicenseRightByAbbreviation(license));

storiesOf('Lisensgivning', module).add('Lisenstekster', () => (
  <div>
    <StoryIntro title="Lisenstekster">
      <p>Lisenstekster og merking</p>
    </StoryIntro>
    <StoryBody>
      {licenses.map(license => (
        <article key={uuid()}>
          <h2>{license.title}</h2>
          <p>{license.description}</p>
        </article>
      ))}
    </StoryBody>
  </div>
));
storiesOf('Lisensgivning', module).add('Modellklarering', () => (
  <div>
    <StoryIntro title="Modellklarering på personbilder" />
    <StoryBody>
      <p>Modellklarering er noe som kommer ved en senere anledning.</p>
    </StoryBody>
  </div>
));
