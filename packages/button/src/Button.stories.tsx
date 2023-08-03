import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { defaultParameters } from '../../../stories/defaults';

import ButtonV2 from './ButtonV2';

export default {
  title: 'Components/Buttons/Button',
  component: ButtonV2,
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    colorTheme: 'primary',
    children: 'Button',
    size: 'normal',
    variant: 'solid',
    shape: 'normal',
    fontWeight: 'normal',
  },
} as Meta<typeof ButtonV2>;

export const Primary: StoryFn<typeof ButtonV2> = (args) => {
  return <ButtonV2 {...args} />;
};

export const Ghost: StoryObj<typeof ButtonV2> = {
  args: {
    colorTheme: 'light',
    children: 'Button',
    variant: 'ghost',
    shape: 'pill',
  },
};

export const Outline: StoryObj<typeof ButtonV2> = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const Link: StoryObj<typeof ButtonV2> = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};
