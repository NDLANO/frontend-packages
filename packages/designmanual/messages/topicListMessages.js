import { STATUS_TYPES } from './statusTypes';

export const topicListMessages = {
  tooltipAdditionalTopic: {
    description: 'Tooltip til ikon for tilleggsfag i emneliste',
    text: {
      nb: 'Tilleggsstoff i faget',
    },
    status: {
      nb: STATUS_TYPES.test,
    },
  },
  tooltipCoreTopic: {
    description: 'Tooltip til ikon for kjernefag i emneliste',
    text: {
      nb: 'Kjernestoff i faget',
    },
    status: {
      nb: STATUS_TYPES.dummyText,
    },
  },
  shortcutButtonText: {
    description: 'Hjelpetekst for relatert innhold under et emne i emnelisten',
    text: {
      nb: 'Lærestoff',
      nn: 'Lærestoff',
      en: 'Learning content',
    },
    status: {
      nb: STATUS_TYPES.approved,
      nn: STATUS_TYPES.dummyText,
      en: STATUS_TYPES.dummyText,
    },
  },
};
