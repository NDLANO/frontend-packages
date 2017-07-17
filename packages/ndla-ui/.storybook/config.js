import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../src/main.scss';
import '../src/editor.scss';
import '../src/imageSearch.scss';
import '../src/videoSearch.scss';

setOptions({
  name: 'NDLA Designmanual',
  url: 'https://github.com/NDLANO/frontend-packages/tree/master/packages/ndla-ui',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
});

configure(() => require('../stories'), module);
