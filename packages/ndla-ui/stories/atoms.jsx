import React from 'react';

import { storiesOf, action } from '@kadira/storybook';

import { Button } from '../src';

storiesOf('Atoms', module)
  .addWithInfo('Buttons', () => (
    <div>
      <h1>Buttons</h1>
      <p>Buttons are for clicking, not linking.</p>
      <div>
        <Button onClick={action('clicked')}>Click button</Button>
        <Button outline onClick={action('clicked')}>Click button</Button>
        <Button submit onClick={action('clicked')}>Submit button</Button>
      </div>
      <div>
        <Button submit disabled onClick={action('clicked')}>submit disabled</Button>
        <Button disabled onClick={action('clicked')}>button disabled</Button>
      </div>
    </div>
  ))
  ;
