import React from 'react';
import { storiesOf } from '@storybook/react';
import { Logo, PageContainer } from '@ndla/ui';
import { StoryBody } from './wrappers';
import { Center } from './helpers';

const NDLAUrls = () => (
  <PageContainer>
    <div style={{ marginTop: '30px' }}>
      <Center>
        <center>
          <Logo label="Nasjonal digital læringsarena" />
          <h1>Lenker i NDLA</h1>
        </center>
      </Center>
      <StoryBody>
        <h2>NDLA.no</h2>
        <p>
          Produksjon:
          <br />
          <a href="https://ndla.no/" target="_blank">
            https://ndla.no
          </a>
        </p>
        <p>
          Staging:
          <br />
          <a href="https://www.staging.api.ndla.no/" target="_blank">
            https://www.staging.api.ndla.no
          </a>
        </p>
        <p>
          Test:
          <br />
          <a href="https://www.test.api.ndla.no/" target="_blank">
            https://www.test.api.ndla.no
          </a>
        </p>
        <h2>Editorial (ED)</h2>
        <p>
          Produksjon:
          <br />
          <a href="https://ed.ndla.no/" target="_blank">
            https://ed.ndla.no
          </a>
        </p>
        <p>
          Staging:
          <br />
          <a href="https://ed.staging.api.ndla.no/" target="_blank">
            https://ed.staging.api.ndla.no
          </a>
        </p>
        <p>
          Test:
          <br />
          <a href="https://ed.test.api.ndla.no/" target="_blank">
            https://ed.test.api.ndla.no
          </a>
        </p>
        <h2>API</h2>
        <p>
          API dokumentasjon (Swagger):
          <br />
          <a href="https://api.ndla.no/" target="_blank">
            https://api.ndla.no/
          </a>
        </p>
      </StoryBody>
    </div>
  </PageContainer>
);

storiesOf('NDLA lenker', module).add('NDLA lenker', () => <NDLAUrls />);
