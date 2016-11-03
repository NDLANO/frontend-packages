import React from 'react';

import { storiesOf, action } from '@kadira/storybook';

import { Center, InlineContainer } from './helpers';
import { Aside, Button, Table } from '../src';


storiesOf('Atoms', module)
  .add('Buttons', () => (
    <Center>
      <h1>Buttons</h1>
      <p>Buttons are for clicking, not linking.</p>
      <InlineContainer>
        <Button onClick={action('clicked')}>Click button</Button>
        <Button outline onClick={action('clicked')}>Click button</Button>
        <Button square onClick={action('clicked')}>Click button</Button>
        <Button submit onClick={action('clicked')}>Submit button</Button>
      </InlineContainer>
      <InlineContainer>
        <Button submit disabled onClick={action('clicked')}>submit disabled</Button>
        <Button disabled onClick={action('clicked')}>button disabled</Button>
      </InlineContainer>
    </Center>
  ))
  .add('Table', () => (
    <Center>
      <h1>Tables</h1>
      <p>Tables are for tabular data, not text layout</p>
      <h2>Basic Table Layout</h2>
      <Table>
        <tr>
          <td>Col 1</td>
          <td>Col 2</td>
        </tr>
        <tr>
          <td>Col 3</td>
          <td>Col 4</td>
        </tr>
      </Table>
    </Center>
  ))
  .add('Aside', () => (
    <Center>
      <h1>Aside</h1>
      <p>Asides are for extra information</p>
      <Aside>Extra information</Aside>
    </Center>
  ))
  ;
