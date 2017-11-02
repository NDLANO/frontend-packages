import React from 'react';
import { uuid } from 'ndla-util';
import { getLicenseRightByAbbreviation, getLicenseByAbbreviation } from 'ndla-licenses';
import { storiesOf } from '@storybook/react';
import { StoryIntro, StoryBody } from './wrappers';

const licensesRights = [
  'by',
  'sa',
  'nc',
  'nd',
  'pd',
  'cc0',
  'cc',
  'copy',
].map(license => getLicenseRightByAbbreviation(license));

const licenses = [
  'by-nc-nd',
  'by-nc-sa',
  'by-nc',
  'by-nd',
  'by-sa',
  'by',
  'pd',
  'cc0',
  'copy',
].map(license => ({
  code: license,
  data: getLicenseByAbbreviation(license, 'nb'),
}));

storiesOf('Lisensgivning', module)
.add('Sammensatte lisenser', () => (
  <div>
    <StoryIntro title="Sammensatte lisenser">
      <p>Liste over lisenser som brukes på ndla</p>
    </StoryIntro>
    <StoryBody>
      {licenses.map(license => (
        <article key={uuid()}>
          <h2>{license.data.title}</h2>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Felter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kode</td>
                <td>{license.code.toUpperCase()}</td>
              </tr>
              <tr>
                <td>Kort tittel</td>
                <td>{license.data.short}</td>
              </tr>
              <tr>
                <td>Url</td>
                <td>{license.data.url}</td>
              </tr>
              <tr>
                <td>Linktekst</td>
                <td>{license.data.linkText}</td>
              </tr>
              <tr>
                <td>Beskrivelse</td>
                <td>{license.data.description}</td>
              </tr>
            </tbody>
          </table>
        </article>
      ))}
    </StoryBody>
  </div>
))
.add('Lisenstekster', () => (
  <div>
    <StoryIntro title="Lisenstekster">
      <p>Lisenstekster og merking</p>
    </StoryIntro>
    <StoryBody>
      {licensesRights.map(license => (
        <article key={uuid()}>
          <h2>{license.title}</h2>
          <p>{license.description}</p>
        </article>
      ))}
    </StoryBody>
  </div>
)).add('Modellklarering', () => (
  <div>
    <StoryIntro title="Modellklarering på personbilder" />
    <StoryBody>
      <p>Modellklarering er noe som kommer ved en senere anledning.</p>
    </StoryBody>
  </div>
));
