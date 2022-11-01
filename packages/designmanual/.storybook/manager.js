import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'NDLA Designmanual',
  brandUrl: 'https://designmanual.ndla.sh',
});

addons.setConfig({
  theme: theme,
  showPanel: false,
  sidebar: {
    showRoots: false,
  },
});
