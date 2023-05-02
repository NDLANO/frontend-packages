import React from 'react';
import { uuid } from '@ndla/util';
import { getLicenseRightByAbbreviation, getLicenseByAbbreviation } from '@ndla/licenses';
import { storiesOf } from '@storybook/react';
import { LanguageSelectorNonMessages } from './LanguageWrapper';
import { StoryIntro, StoryBody } from './wrappers';

const licenseRightAbbreviations = ['by', 'sa', 'nc', 'nd', 'pd', 'cc0', 'cc', 'copyrighted'];

const licensesRights = {
  nb: licenseRightAbbreviations.map((license) => getLicenseRightByAbbreviation(license, 'nb')),
  nn: licenseRightAbbreviations.map((license) => getLicenseRightByAbbreviation(license, 'nn')),
  en: licenseRightAbbreviations.map((license) => getLicenseRightByAbbreviation(license, 'en')),
};

const licenseAbbreviations = [
  'CC-BY-NC-ND-4.0',
  'CC-BY-NC-SA-4.0',
  'CC-BY-NC-4.0',
  'CC-BY-ND-4.0',
  'CC-BY-SA-4.0',
  'CC-BY-4.0',
  'PD',
  'CC0-1.0',
  'COPYRIGHTED',
];

const licenses = {
  nb: licenseAbbreviations.map((license) => ({
    code: license,
    data: getLicenseByAbbreviation(license, 'nb'),
  })),
  nn: licenseAbbreviations.map((license) => ({
    code: license,
    data: getLicenseByAbbreviation(license, 'nn'),
  })),
  en: licenseAbbreviations.map((license) => ({
    code: license,
    data: getLicenseByAbbreviation(license, 'en'),
  })),
};

storiesOf('Lisensgivning', module)
  .add('Lisenser', () => (
    <div>
      <StoryIntro title="Lisenser">
        <p>Liste over lisenser som brukes på ndla</p>
      </StoryIntro>
      <StoryBody>
        <LanguageSelectorNonMessages>
          {({ lang }) =>
            licenses[lang].map((license) => (
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
            ))
          }
        </LanguageSelectorNonMessages>
      </StoryBody>
    </div>
  ))
  .add('Lisenstekster', () => (
    <div>
      <StoryIntro title="Lisenstekster">
        <p>Lisenstekster og merking</p>
      </StoryIntro>
      <StoryBody>
        <LanguageSelectorNonMessages>
          {({ lang }) =>
            licensesRights[lang].map((license) => (
              <article key={uuid()}>
                <h2>{license.title}</h2>
                <p>{license.description}</p>
              </article>
            ))
          }
        </LanguageSelectorNonMessages>
      </StoryBody>
    </div>
  ))
  .add('Modellklarering', () => (
    <div>
      <StoryIntro title="Modellklarering på personbilder" />
      <StoryBody>
        <p>Modellklarering er noe som kommer ved en senere anledning.</p>
      </StoryBody>
    </div>
  ));
