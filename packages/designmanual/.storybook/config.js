import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../../ndla-ui/src/main.scss';
import '../../ndla-ui/src/editor.scss';
import '../../ndla-ui/src/audioSearch.scss';
import '../../ndla-ui/src/imageSearch.scss';
import '../../ndla-ui/src/videoSearch.scss';

setOptions({
  name: 'NDLA Designmanual',
  url:
    'https://github.com/NDLANO/frontend-packages/tree/master/packages/ndla-ui',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
});

configure(() => require('../stories'), module);
