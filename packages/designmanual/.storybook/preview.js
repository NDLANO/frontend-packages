import '@ndla/polyfill';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import './designmanual.scss';

addDecorator(withKnobs);
