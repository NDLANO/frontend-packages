import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { addDecorator } from '@storybook/react';
import { i18nInstance } from '@ndla/ui';
import { LanguageWrapper } from './LanguageWrapper';
import RouterWrapper from './RouterWrapper';

i18nInstance.language = 'nb';
i18nInstance.options.lng = 'nb';
addDecorator(RouterWrapper);
addDecorator(LanguageWrapper);
addDecorator((storyFn) => <HelmetProvider>{storyFn()}</HelmetProvider>);
// addDecorator(HelmetProvider);

require('./welcome');
require('./concepts');
require('./basic-styles');
require('./simple-components');
require('./collated-components');
require('./pages');
require('./search');
require('./licenses');
require('./produksjonssystem');
require('./experimental');
require('./messages');
require('./ndla-urls');
require('./my-ndla');
