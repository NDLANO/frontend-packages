import React from 'react';

import { storiesOf, action } from '@kadira/storybook';
import article from '../dummydata/index';
import { Center, InlineContainer } from './helpers';
import { Button } from '../src';

const articleHTML = document.createElement('div');
articleHTML.innerHTML = article.article4.content[0].content;

storiesOf('Enkle komponenter', module)
  .add('Knapper', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Knapper</h1>
        <p>Knapper er til å klikke på, ikke for å lenke til.</p>
      </section>
      <h2 className="u-heading">Eksempel</h2>
      <InlineContainer>
        <Button onClick={action('clicked')}>Knapp</Button>
        <Button outline onClick={action('clicked')}>Knapp outlined</Button>
        <Button square onClick={action('clicked')}>Knapp squared</Button>
        <Button submit onClick={action('clicked')}>Sendeknapp</Button>
      </InlineContainer>
      <InlineContainer>
        <Button submit disabled onClick={action('clicked')}>Sendeknapp deaktivert</Button>
        <Button disabled onClick={action('clicked')}>Knapp deaktivert</Button>
      </InlineContainer>
    </Center>
  ))
  .add('Boks i tekst', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Boks i tekst</h1>
        <p>Boks i tekst</p>
      </section>
      <h2 className="u-heading">Eksempel</h2>
      <div className="c-bodybox">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, praesentium.</div>
    </Center>
  ))
  .add('Faktaboks', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Faktaboks</h1>
        <p>Faktabokser er for ekstra informasjon og veier videre.</p>
      </section>
      <h2 className="u-heading">Eksempel</h2>
      <div dangerouslySetInnerHTML={{ __html: articleHTML.outerHTML }} />
    </Center>
  ))
  ;
