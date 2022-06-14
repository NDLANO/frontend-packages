import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SwitchComponent from './Switch';

export default {
  title: 'Switch',
  component: SwitchComponent,
} as ComponentMeta<typeof SwitchComponent>;

const Template: ComponentStory<typeof SwitchComponent> = (args) => <SwitchComponent {...args}></SwitchComponent>;

export const Switch = Template.bind({});
Switch.args = {
  label: 'Test',
  onChange: () => null,
  checked: false,
  id: '1',
  disabled: false,
};
