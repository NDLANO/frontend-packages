import React from 'react';
import { storiesOf, action, linkTo, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

import '../src/index.css';
import { Button } from '../src';
import Welcome from './Welcome';


import './TypographyStories';

setAddon(infoAddon);

storiesOf('Welcome', module)
  .add('to NDLA styleguide', () => (
    <Welcome showApp={linkTo('Button')} />
  ));


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
