import { ComponentStory, ComponentMeta } from '@storybook/react';
import { defaultParameters } from '../../designmanual/.storybook/defaults';
import ButtonV2 from './ButtonV2';

export default {
  title: 'Enkle komponenter/Knapp/Standard',
  component: ButtonV2,
  parameters: {
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
} as ComponentMeta<typeof ButtonV2>;

export const StandardButton: ComponentStory<typeof ButtonV2> = (args) => {
  return <ButtonV2 {...args} />;
};

StandardButton.storyName = 'Standard';
