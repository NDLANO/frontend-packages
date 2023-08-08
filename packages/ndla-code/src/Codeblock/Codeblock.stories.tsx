/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import DeleteForever from '@ndla/icons';
import { IconButtonV2 } from '@ndla/button';
import { defaultParameters } from '../../../../stories/defaults';
import Codeblock from './Codeblock';

export default {
  title: 'Components/Codeblock',
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
    actionButton: (
      <IconButtonV2 aria-label="Slett" variant="ghost" colorTheme="danger">
        <DeleteForever />
      </IconButtonV2>
    ),
    showCopy: true,
  },
  argTypes: {
    actionButton: {
      table: {
        type: {
          detail: 'Takes any ReactNode, but as the name implies: use a button component, preferably an icon-button',
        },
      },
      control: {
        type: null,
      },
    },
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

export const Python: StoryObj<typeof Codeblock> = {
  args: {
    code: `lengde = 6
bredde = 8
areal = lengde*bredde
print(areal)`,
    format: 'python',
  },
};
