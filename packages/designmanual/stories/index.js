import { addDecorator } from '@storybook/react';
import { LanguageWrapper } from './LanguageWrapper';
import RouterWrapper from './RouterWrapper';

addDecorator(RouterWrapper);
addDecorator(LanguageWrapper);

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
