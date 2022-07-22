import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TooltipComponent from '../src/Tooltip';

export default {
  title: 'Tooltip',
  parameters: {
    docs: {
      description: {
        component: 'hallo i luken',
      },
    },
  },
  component: TooltipComponent,
} as ComponentMeta<typeof TooltipComponent>;

const TooltipTemplate: ComponentStory<typeof TooltipComponent> = ({ tooltip }) => {
  return (
    <TooltipComponent tooltip={tooltip}>
      <button>Hover me!</button>
    </TooltipComponent>
  );
};

export const Tooltip = TooltipTemplate.bind({});

Tooltip.args = {
  id: '1',
  tooltip: 'I am a tooltip',
};
