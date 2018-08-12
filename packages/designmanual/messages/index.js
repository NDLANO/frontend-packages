import { launchpadMessages } from './launchpadMessages';
import { topicListMessages } from './topicListMessages';

const allMessages = [
  {
    messages: launchpadMessages,
    componentName: 'Launchpad',
  },
  {
    messages: topicListMessages,
    componentName: 'Emneliste',
    componentUrl:
      '?selectedKind=Sammensatte%20moduler&selectedStory=Emneliste&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
  },
];

export { launchpadMessages, topicListMessages, allMessages };
