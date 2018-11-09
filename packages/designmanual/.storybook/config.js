import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import './designmanual.scss';
import { colors, fonts } from '@ndla/core';
import { themes } from '@storybook/components';

setOptions({
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
    mainBorder: `1px solid ${colors.brand.light}`,
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
});

addDecorator(withKnobs);

configure(() => require('../stories'), module);
