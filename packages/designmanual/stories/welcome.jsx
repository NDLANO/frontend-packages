import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { Logo, PageContainer } from 'ndla-ui';
import { StoryBody } from './wrappers';
import { Center } from './helpers';

const Welcome = () => (
  <PageContainer>
    <div style={{ marginTop: '30px' }}>
      <Center>
        <center>
          <Logo altText="Nasjonal digital læringsarena" />
          <h1>Designmanual</h1>
        </center>
      </Center>
      <StoryBody>
        <h2>Hva designmanualen er, og hva den ikke er</h2>
        <p>
          Designmanualen inneholder retningslinjer for formatering, visuelt
          uttrykk, interaksjon og innholdselementer.
        </p>
        <p>
          En del lenker, knapper og lignende funksjonalitet har foreløpig ikke
          reelt innhold. De er ment som eksempler til videre utvikling oppimot
          APIer og reelt innhold på nye ndla.no. Etter hvert som
          innholdselementer utvikles videre med reell funksjonalitet, kan de tas
          inn i designmanualen og erstatte de gamle elementene.{' '}
        </p>

        <h2>Hvordan bruke designmanualen?</h2>
        <p>
          Denne designmanualen består av hovedsakelig to deler: et CSS-bibliotek
          som styler de mest brukte HTML-elementene, og et komponent-bibliotek
          for <a href="https://facebook.github.io/react/">React</a>. Den er også
          publisert på <a href="https://www.npmjs.com/package/ndla-ui">npm</a>.
        </p>

        <h3>Hente inn prosjekt direkte via npm</h3>
        <code>npm install ndla-ui --save</code>
        <br />
        <code>yarn add ndla-ui -S</code>
        <h3>Fonter må hentes inn direkte i prosjektet</h3>
        <code>
          {
            '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,700|Source+Serif+Pro:400,700" />'
          }
        </code>

        <h3>Hente inn stilark direkte via CDN</h3>
        <code>
          &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot;
          href=&quot;ndla-ui.css&quot;&gt;
        </code>
      </StoryBody>
    </div>
  </PageContainer>
);

Welcome.propTypes = {
  showApp: PropTypes.func,
};

storiesOf('Velkommen', module).add('til NDLAs designmanual', () => <Welcome />);
