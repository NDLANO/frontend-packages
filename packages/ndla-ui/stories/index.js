import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Button } from '../src';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to NDLA styleguide', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

storiesOf('Atoms', module)
  .add('Buttons', () => (
    <div>
      <h1>Buttons</h1>
      <p>Buttons are for clicking, not linking.</p>
      <Button onClick={action('clicked')}>Click button</Button>
      <Button submit onClick={action('clicked')}>Submit button</Button>
      <div>
        <Button submit disabled onClick={action('clicked')}>submit disabled</Button>
        <Button disabled onClick={action('clicked')}>button disabled</Button>
      </div>
    </div>
  ))
  ;
