import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ButtonV2 } from '@ndla/button';
import { defaultParameters } from '../../../../stories/defaults';
import Codeblock from './Codeblock';

export default {
  title: 'Enkle komponenter/Codeblock',
  component: Codeblock,
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    title: 'Codeblock',
    format: 'html',
    code: `<div class="demo-content">
  <h2>Lorem ipsum</h2>
  <p>
    <b>Lorem ipsum</b><br/>
    <span>is simply dummy text of the printing and typesetting industry</span>
  </p>
  <p>
    <b>Lorem ipsum</b><br/>
    <span>is simply dummy text of the printing and typesetting industry</span>
  </p>
  <p>
    <b>Lorem ipsum</b><br/>
    <span>is simply dummy text of the printing and typesetting industry</span>
  </p>
</div>`,
    actionButton: <ButtonV2>Button</ButtonV2>,
    showCopy: true,
  },
} as Meta<typeof Codeblock>;

export const HTML: StoryFn<typeof Codeblock> = (args) => {
  return <Codeblock {...args} />;
};

export const CSS: StoryObj<typeof Codeblock> = {
  args: {
    code: `body {
  padding: 20px;
  margin: 10px;
  background: #ccc;
}`,
    format: 'css',
  },
};

export const JS: StoryObj<typeof Codeblock> = {
  args: {
    code: `const arr = ["This", "Little", "Piggy"];
const first = arr.shift();
console.log(first);`,
    format: 'js',
  },
};

export const Text: StoryObj<typeof Codeblock> = {
  args: {
    code: `Pure text without highlighting and no title`,
    format: 'text',
  },
};
