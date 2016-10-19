import React from 'react';

import { storiesOf, action } from '@kadira/storybook';

import { Center, InlineComponentsContainer } from './helpers';
import { Button } from '../src';

storiesOf('Atoms', module)
  .addWithInfo('Buttons', () => (
    <Center>
      <h1>Buttons</h1>
      <p>Buttons are for clicking, not linking.</p>
      <InlineComponentsContainer>
        <Button onClick={action('clicked')}>Click button</Button>
        <Button outline onClick={action('clicked')}>Click button</Button>
        <Button submit onClick={action('clicked')}>Submit button</Button>
      </InlineComponentsContainer>
      <InlineComponentsContainer>
        <Button submit disabled onClick={action('clicked')}>submit disabled</Button>
        <Button disabled onClick={action('clicked')}>button disabled</Button>
      </InlineComponentsContainer>
    </Center>
  ))
  ;
