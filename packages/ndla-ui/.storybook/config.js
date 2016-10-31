import { configure } from '@kadira/storybook';

import '../src/index.css';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
