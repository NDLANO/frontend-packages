import { storiesOf } from '@storybook/react';
import { Logo, PageContainer } from '@ndla/ui';
import SafeLink from '@ndla/safelink';
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
          <SafeLink to="https://ndla.no/">https://ndla.no</SafeLink>
        </p>
        <p>
          Staging:
          <br />
          <SafeLink to="https://staging.ndla.no/">https://staging.ndla.no</SafeLink>
        </p>
        <p>
          Test:
          <br />
          <SafeLink to="https://test.ndla.no/">https://test.ndla.no</SafeLink>
        </p>
        <h2>Editorial (ED)</h2>
        <p>
          Produksjon:
          <br />
          <SafeLink to="https://ed.ndla.no/">https://ed.ndla.no</SafeLink>
        </p>
        <p>
          Staging:
          <br />
          <SafeLink to="https://ed.staging.ndla.no/">https://ed.staging.ndla.no</SafeLink>
        </p>
        <p>
          Test:
          <br />
          <SafeLink to="https://ed.test.ndla.no/">https://ed.test.ndla.no</SafeLink>
        </p>
        <h2>API</h2>
        <p>
          API dokumentasjon (Swagger):
          <br />
          <SafeLink to="https://api.ndla.no/">https://api.ndla.no/</SafeLink>
        </p>
      </StoryBody>
    </div>
  </PageContainer>
);

storiesOf('NDLA lenker', module).add('NDLA lenker', () => <NDLAUrls />);
