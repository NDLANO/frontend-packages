/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import ErrorMessage from './ErrorMessage';
//@ts-ignore
import Oops from '../../../../images/oops.gif';
import { defaultParameters } from '../../../../stories/defaults';

/**
 * Feilmeldingskomponenten lenker tilbake til forrige side eller til forsiden. Den brukes når det har oppstått en feil i systemet, f.eks. ved 404- eller 503-feil.
 */
export default {
  title: 'Patterns/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    illustration: {
      url: Oops,
      altText: 'Systemfeil',
    },
    messages: {
      title: 'Oisann, her gikk noe galt',
      description: 'En kort beskrivelse av feilen som oppsto.',
      linksTitle: 'Kom igang:',
      back: 'Gå tilbake',
      goToFrontPage: 'Gå til forsiden',
    },
  },
} as Meta<typeof ErrorMessage>;

export const ErrorMessageStory: StoryFn<typeof ErrorMessage> = (args) => {
  return <ErrorMessage {...args} />;
};

ErrorMessageStory.storyName = 'ErrorMessage';

export const LoginFailed: StoryObj<typeof ErrorMessage> = {
  args: {
    illustration: {
      url: Oops,
      altText: 'Systemfeil',
    },
    messages: {
      title: 'Ops, her gikk noe galt',
      linksTitle: 'Prøv igjen',
      logInFailed: 'Logg inn',
    },
  },
};
