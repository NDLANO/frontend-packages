import { addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
// import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/components';
import { colors, fonts } from '@ndla/core';
import { LanguageWrapper } from './LanguageWrapper';

// addDecorator(
//   LanguageWrapper,
//   withOptions({
//     name: 'NDLA Designmanual',
//   }),
// );

addDecorator(
  LanguageWrapper,
  withOptions({
    name: 'NDLA Designmanual',
    url: 'https://designmanual.ndla.sh',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: false,
    showSearchBox: false,
    addonPanelInRight: false,
    theme: {
      ...themes.normal,
      mainFill: colors.background.default,
      mainBackground: colors.background.default,
      mainBorder: `none`,
      mainTextFace: fonts.sans,
      mainTextColor: colors.text.primary,
      mainTextSize: 19,
      dimmedTextColor: colors.text.light,
      layoutMargin: 0,
      mainBorderRadius: 0,
      highlightColor: colors.text.primary,
      brand: {
        color: colors.text.light,
        a: {
          fontSize: '14px',
        },
      },
    },
  }),
);

require('./welcome');
require('./concepts');
require('./basic-styles');
require('./simple-components');
require('./collated-components');
require('./pages');
require('./search');
require('./licenses');
require('./produksjonssystem');
require('./beta');
require('./experimental');
require('./messages');
