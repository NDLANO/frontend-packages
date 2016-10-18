import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

import '../src/index.css';

setAddon(infoAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
