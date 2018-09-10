import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import './designmanual.scss';
import '../../ndla-ui/src/editor.scss';
import '../../ndla-ui/src/audioSearch.scss';
import '../../ndla-ui/src/imageSearch.scss';
import '../../ndla-ui/src/videoSearch.scss';

setOptions({
  name: 'NDLA Designmanual',
  url:
    'https://github.com/NDLANO/frontend-packages/tree/master/packages/ndla-ui',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: false,
  showSearchBox: false,
  addonPanelInRight: false,
});

addDecorator(withKnobs);

configure(() => require('../stories'), module);
