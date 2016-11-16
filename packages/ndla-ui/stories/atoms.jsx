import React from 'react';

import { storiesOf, action } from '@kadira/storybook';
import article from '../dummydata/index';
import { Center, InlineContainer } from './helpers';
import { Aside, Button } from '../src';

const articleHTML = document.createElement('div');
articleHTML.innerHTML = article.article4.content[0].content;

storiesOf('Enkle komponenter', module)
  .add('Knapper', () => (
    <Center>
      <h1 className="e-heading">Knapper</h1>
      <p>Knapper er til å klikke på, ikke for å lenke til.</p>
      <InlineContainer>
        <Button onClick={action('clicked')}>Knapp</Button>
        <Button outline onClick={action('clicked')}>Knapp</Button>
        <Button square onClick={action('clicked')}>Knapp</Button>
        <Button submit onClick={action('clicked')}>Sendeknapp</Button>
      </InlineContainer>
      <InlineContainer>
        <Button submit disabled onClick={action('clicked')}>Sendeknapp deaktivert</Button>
        <Button disabled onClick={action('clicked')}>Knapp deaktivet</Button>
      </InlineContainer>
    </Center>
  ))
  .add('Faktaboks', () => (
    <Center>
      <h1 className="e-heading">Faktaboks</h1>
      <p>Faktabokser er for ekstra informasjon og veier videre.</p>
      <Aside>Ekstra informasjon</Aside>
      <div dangerouslySetInnerHTML={{ __html: articleHTML.outerHTML }} />
    </Center>
  ))
  ;
