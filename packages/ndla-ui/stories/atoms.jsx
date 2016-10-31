import React from 'react';

import { storiesOf, action } from '@kadira/storybook';

import { Center, InlineContainer } from './helpers';
import { Button } from '../src';

storiesOf('Atoms', module)
  .add('Buttons', () => (
    <Center>
      <h1>Buttons</h1>
      <p>Buttons are for clicking, not linking.</p>
      <InlineContainer>
        <Button onClick={action('clicked')}>Click button</Button>
        <Button outline onClick={action('clicked')}>Click button</Button>
        <Button submit onClick={action('clicked')}>Submit button</Button>
      </InlineContainer>
      <InlineContainer>
        <Button submit disabled onClick={action('clicked')}>submit disabled</Button>
        <Button disabled onClick={action('clicked')}>button disabled</Button>
      </InlineContainer>
    </Center>
  ))
  ;
