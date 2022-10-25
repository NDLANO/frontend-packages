import { Cross } from '@ndla/icons/action';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { defaultParameters } from '../../designmanual/.storybook/defaults';
import IconButtonV2 from './IconButtonV2';

export default {
  title: 'Enkle komponenter/Knapp/Med ikon',
  component: IconButtonV2,
  parameters: {
    ...defaultParameters,
  },
  args: {
    colorTheme: 'primary',
    children: <Cross />,
    size: 'small',
    variant: 'solid',
    fontWeight: 'normal',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof IconButtonV2>;

export const WithIcon: ComponentStory<typeof IconButtonV2> = (args) => {
  return <IconButtonV2 {...args} />;
};

WithIcon.storyName = 'Med ikon';
