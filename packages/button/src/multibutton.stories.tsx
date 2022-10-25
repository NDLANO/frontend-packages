import { ComponentStory, ComponentMeta } from '@storybook/react';
import { defaultParameters } from '../../designmanual/.storybook/defaults';
import MultiButton from './MultiButtonV2';

export default {
  title: 'Enkle komponenter/Knapp/Flervalg',
  component: MultiButton,
  parameters: {
    ...defaultParameters,
  },
  args: {
    mainButton: {
      label: 'Lagre',
      value: 'lagre',
      enable: true,
    },
    secondaryButtons: [
      {
        label: 'Lagre og ny versjon',
        value: 'lagreogny',
        enable: true,
      },
      {
        label: 'Lagre og avslutt',
        value: 'lagreogavslutt',
        enable: true,
      },
    ],
  },
} as ComponentMeta<typeof MultiButton>;

export const StandardButton: ComponentStory<typeof MultiButton> = (args) => {
  return <MultiButton {...args} />;
};

StandardButton.storyName = 'Flervalg';
