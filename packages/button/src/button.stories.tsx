import { ComponentStory, ComponentMeta } from '@storybook/react';
import { defaultParameters } from '../../designmanual/.storybook/defaults';
import ButtonV2 from './ButtonV2';

export default {
  title: 'Enkle komponenter/Knapp',
  component: ButtonV2,
  parameters: {
    ...defaultParameters,
  },
} as ComponentMeta<typeof ButtonV2>;

const Template: ComponentStory<typeof ButtonV2> = (args) => {
  return <ButtonV2 {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  colorTheme: 'primary',
  children: 'Button',
  size: 'normal',
  variant: 'solid',
  shape: 'normal',
  fontWeight: 'normal',
};
