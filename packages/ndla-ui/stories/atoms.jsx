// import React from 'react';
import React, { createElement } from 'react';

import { storiesOf, action } from '@kadira/storybook';
import article from '../dummydata/index';
import { Center, InlineContainer } from './helpers';
import Icon from '../src/icons/Icon';
import { Aside, Button, Logo } from '../src';

const articleHTML = document.createElement('div');
articleHTML.innerHTML = article.article4.content[0].content;

storiesOf('Enkle komponenter', module)
  .add('Logo', () => (
    <Center>
      <article className="o-wrapper--narrow">
        <section className="c-factbox">
          <h1 className="u-heading">Logo</h1>
          <p>
            Logoen er vårt tydeligste kjennetegn og vårt viktigste verktøy
            for kommunikasjon. Den skal inspirere målgruppen elever og
            lærere i videregående opplæring og gjøre dem nysgjerrige på
            NDLA.
          </p>
          <p>
            Logoen består av navnet NDLA i en spesiell typografi og bør hovedsakelig benyttes sammen med underteksten.
            Logo uten undertekst kan benyttes i tilfeller der det
            kommer godt fram andre steder hvem NDLA er, eksempelvis på ndla.no.
          </p>
          <p>
            Logo uten undertekst kan kompletteres med en beskrivende tekst
            til høyre. Logoen benyttes i svart eller hvitt avhengig av
            bakgrunn. Den skal plasseres i det øverste eller nederste
            hjørnet av en ytterkant. Logoen skal ikke sentreres.
          </p>
        </section>
        <section>
          <Logo cssModifier="large" name to="#" altText="Nasjonal digital læringsarena" />
        </section>
      </article>
    </Center>
  ))
  .add('Knapper', () => (
    <Center>
      <article className="o-wrapper--wide">
        <section className="c-factbox">
          <h1 className="u-heading">Knapper</h1>
          <p>Knapper er til å klikke på, ikke for å lenke til.</p>
        </section>
        <section>
          <h2 className="u-heading">Eksempel</h2>
          <InlineContainer>
            <details open>
              <summary><Button onClick={action('clicked')}>Knapp</Button></summary>
              <code>
                &lt;button class=&quot;c-button&quot; type=&quot;button&quot;&gt;Knapp&lt;/button&gt;
              </code>
            </details>
            <details>
              <summary><Button outline onClick={action('clicked')}>Knapp outlined</Button></summary>
              <code>&lt;button class=&quot;c-button c-button--outline&quot; type=&quot;button&quot;&gt;Knapp outlined&lt;/button&gt;</code>
            </details>
            <details>
              <summary><Button square onClick={action('clicked')}>Knapp squared</Button></summary>
              <code>&lt;button class=&quot;c-button c-button--square&quot; type=&quot;button&quot;&gt;Knapp squared&lt;/button&gt;</code>
            </details>
            <details>
              <summary><Button submit onClick={action('clicked')}>Sendeknapp</Button></summary>
              <code>&lt;button class=&quot;c-button&quot; type=&quot;submit&quot;&gt;Sendeknapp&lt;/button&gt;</code>
            </details>
          </InlineContainer>
          <InlineContainer>
            <Button submit disabled onClick={action('clicked')}>Sendeknapp deaktivert</Button>
            <Button disabled onClick={action('clicked')}>Knapp deaktivert</Button>
          </InlineContainer>
          <InlineContainer>

            <p>Ser <Button stripped onClick={action('clicked')}>dette</Button> ut som en knapp?</p>
          </InlineContainer>
        </section>
      </article>
    </Center>
  ))
  .add('Boks i tekst', () => (
    <Center>
      <article className="o-wrapper--narrow">
        <section className="c-factbox">
          <h1 className="u-heading">Boks i tekst</h1>
          <p>Boks i tekst</p>
        </section>
        <section>
          <h2>Eksempel</h2>
          <div className="c-bodybox">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, praesentium.</div>
        </section>
      </article>
    </Center>
  ))
  .add('Oppsummerings/faktaboks', () => (
    <Center>
      <article className="o-wrapper--narrow">
        <section className="c-factbox">
          <h1 className="u-heading">Oppsummerings/faktaboks</h1>
          <p>Boksen kan brukes for å oppsummere en tekst, eller som faktaboks.
             Den vil alltid plasseres i slutten av en tekst.</p>
        </section>
        <section>
          <Aside>
            <div>
              <div className="c-aside__title">Oppsummering</div>
              <h2>Hva vil du bli?</h2> <p>Søknadsfristen til høgskoler og universiteter er 15.april.</p>
              <p>Er du en av dem som akkurat nå gjør et viktig valg? Vi hjelper deg å velge!</p>
              <h2>Siris tips</h2> <div>Siri Knudsen i NRK P3 gir deg noen gode råd med på veien.</div>
              <div><figure className="article_audio">
                <audio controls="" type="audio/mpeg" src="http://test.api.ndla.no/audio/files/Siri_knudsen_mars2012.mp3" /><figcaption>medieutdanning</figcaption></figure></div>
              <h2>Ressurser</h2>
              <p><a href="http://utdanning.no/tema/yrke_og_karriere/finn?s=media" title="Utdanning.no: Søk på yrke">Utdanning.no: Søk på yrke</a></p>
              <p><a href="http://www.vilbli.no" title="Les mer på Vilbli.no">Les mer på Vilbli.no</a></p>
              <p>Landslaget for medieundervisning har en god oversikt over</p> <p><a href="http://www.mediepedagogene.no/undervisning-og-utdanning/medieutdanning?wpmp_switcher=mobile" title="medieutdanning i Norge">medieutdanning i Norge</a>.</p></div>
          </Aside>
        </section>
        <section>
          <Aside>
            <div>
              <div className="c-aside__title">Fakta</div>
              <h2>Hva vil du bli?</h2> <p>Søknadsfristen til høgskoler og universiteter er 15.april.</p>
              <p>Er du en av dem som akkurat nå gjør et viktig valg? Vi hjelper deg å velge!</p>
              <h2>Siris tips</h2> <div>Siri Knudsen i NRK P3 gir deg noen gode råd med på veien.</div>
              <div><figure className="article_audio">
                <audio controls="" type="audio/mpeg" src="http://test.api.ndla.no/audio/files/Siri_knudsen_mars2012.mp3" /><figcaption>medieutdanning</figcaption></figure></div>
              <h2>Ressurser</h2>
              <p><a href="http://utdanning.no/tema/yrke_og_karriere/finn?s=media" title="Utdanning.no: Søk på yrke">Utdanning.no: Søk på yrke</a></p>
              <p><a href="http://www.vilbli.no" title="Les mer på Vilbli.no">Les mer på Vilbli.no</a></p>
              <p>Landslaget for medieundervisning har en god oversikt over</p> <p><a href="http://www.mediepedagogene.no/undervisning-og-utdanning/medieutdanning?wpmp_switcher=mobile" title="medieutdanning i Norge">medieutdanning i Norge</a>.</p></div>
          </Aside>
        </section>
      </article>
    </Center>
  ))
  .add('Ikoner', () => (
    <Center>
      <article className="o-wrapper--narrow">
        <section className="c-factbox">
          <h1 className="u-heading">Ikoner</h1>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <td>Icon</td>
                <td>Name</td>
                <td>JSX</td>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(Icon).map(key => (
                  <tr key={key}>
                    <td>{createElement(Icon[key])}</td>
                    <td>{key}</td>
                    <td><code>&lt;Icon.{key} /&gt;</code></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>
      </article>
    </Center>
  ))
  ;
