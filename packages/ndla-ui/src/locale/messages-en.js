/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { constants } from 'ndla-ui';

const { contentTypes } = constants;

const titleTemplate = ' - NDLA';

const messages = {
  htmlTitles: {
    titleTemplate,
    welcomePage: `Frontpage${titleTemplate}`,
    topicPage: 'Topic',
    subjectsPage: `Choose subjects${titleTemplate}`,
    searchPage: `Search${titleTemplate}`,
    notFound: `Page not found${titleTemplate}`,
  },
  newsLetter: {
    heading: 'Newsletter',
    description: 'Stay updated! Subscribe to the latest news from NDLA.',
    mainLinkName: 'Sign up',
    iconLinkName: 'Sign up for newsletters',
  },
  askNDLA: 'Ask NDLA',
  articlePage: {
    errorDescription: 'Sorry, an error occurd while loading the resource.',
    error404Description:
      "Sorry, we can't locate the resource you are looking for.",
  },
  notFoundPage: {
    errorDescription: "We can't seem to find the page you are looking for.",
  },
  searchPage: {
    noHits: 'Your search - {query} - did not match any articles. ',
    close: 'Close',
    abilities: 'Abilities',
    search: 'Search',
    searchFieldPlaceholder:
      'Search for subjects, tasks and activities or learningpaths',
    label: {
      content: 'Content:',
      contentTypes: 'Content types',
      levels: 'Level',
      'language-filter': 'Language',
      subjects: 'Subjects',
      noFilter: 'No filter selected',
      createdBy: 'Created by:',
    },
    showLabel: {
      contentTypes: 'More content types',
      levels: 'More levels',
      'language-filter': 'More languages',
      subjects: 'Change subject',
    },
    hideLabel: {
      contentTypes: 'Hide content types',
      levels: 'Hide levels',
      'language-filter': 'Hide languages',
      subjects: 'Hide subjects',
    },
    searchField: {
      contentTypeResultShowMoreLabel: 'Show more results',
      contentTypeResultShowLessLabel: 'Show less results',
      allResultButtonText: 'Show all results',
      searchResultHeading: 'Proposals:',
      contentTypeResultNoHit: 'No results',
    },
    searchResultMessages: {
      searchStringLabel: 'You searched on:',
      subHeading: '{totalCount} hits in NDLA',
    },
    searchResultListMessages: {
      subjectsLabel: 'Open in subject:',
      noResultHeading: 'Hmm, no content ...',
      noResultDescription:
        'Unfortunately, we do not have anything to offer here. If you want to suggest any content for this site, you can use Ask NDLA, located at the bottom right of the screen.',
    },
    searchPageMessages: {
      filterHeading: 'Filter',
      resultHeading: '{totalCount} hits in NDLA',
      resultHeadingByAuthor: '{totalCount} articles written by {author}',
      narrowScreenFilterHeading: '{totalCount} hits on «{query}»',
      dropdownBtnLabel: 'More content types',
    },
    searchFilterMessages: {
      backButton: 'Back to filter',
      filterLabel: 'Chose subjects',
      confirmButton: 'Refresh filter',
      hasValuesButtonText: 'More subjects',
      noValuesButtonText: 'Filter by subjects',
      useFilter: 'Use filter',
      closeFilter: 'Close filter',
    },
  },

  subjectPage: {
    errorDescription: 'Sorry, an error occurd while loading the topics.',
    tabs: {
      topics: 'Topics',
    },
    subjectShortcuts: {
      heading: 'Go directly to',
      showMore: 'Show more',
      showLess: 'Show less',
    },
    mostRead: {
      heading: 'Most used',
    },
    editorsChoices: {
      heading: 'Editor choices from the subject',
      unknown: 'Uknown',
    },
    subjectArchive: {
      heading: 'Current',
      archive: 'Archive',
      close: 'Close',
    },
    subjectFilter: {
      label: 'Filter',
    },
    newContent: {
      heading: 'New content',
    },
  },
  subjectsPage: {
    chooseSubject: 'Choose subject',
    errorDescription: 'Sorry, an error occurd while loading the subjects.',
  },
  topicPage: {
    articleErrorDescription:
      'Sorry, an error occurd while loading the topic description.',
    topic: 'TOPIC',
    topics: 'Topics',
  },
  welcomePage: {
    search: 'Search',
    highlighted: 'Highlighted',
    heading: {
      heading: 'The Norwegian Digital Learning Arena',
      searchFieldPlaceholder:
        'Search for topics, learning materials, keywords ...',
      messages: {
        searchFieldTitle: 'Search',
        menuButton: 'Menu',
      },
      links: {
        aboutNDLA: 'About NDLA',
        changeLanguage: 'Change language',
      },
    },
    socialMedia: {
      heading: 'Follow us',
      description:
        'NDLA has several facebook- and twitter accounts. Find the one that suits you, and follow us!',
      mainLink: {
        name: 'Follow us',
      },
    },
    aboutNDLA: {
      heading: 'About NDLA',
      description:
        'NDLAs vision is to create good, open digital learning resources for all subjects in upper secondary education and support students and teachers in active and participatory learning work.',
      mainLink: {
        name: 'More about NDLA',
      },
    },
    category: {
      fellesfag: 'Common',
      yrkesfag: 'Vocational',
      studiespesialiserende: 'Specialization',
      imported: 'Imported subjects',
    },
    film: {
      header: 'NDLA film',
      text:
        'NDLA film is a service in collaboration with Norgesfilm. This service allows you to watch a range of feature films, short films, documentaries and series. You can also watch educational films and movie clips. Welcome to the world of cinema!',
      textShort: 'Welcome to the world of cinema!',
      linkLabel: 'Go to NDLA film',
    },
    errorDescription: 'Sorry, an error occurd while loading the subjects.',
  },
  meta: {
    description: 'Norwegian Digital Learning Arena, Open Educational Resources',
  },
  masthead: {
    menu: {
      close: 'Close',
      goTo: 'Go to',
      search: 'Search',
      subjectOverview: 'All subjects',
      title: 'Menu',
      subjectPage: 'Subject front page',
      openFilter: 'Filter',
      useFilter: 'Use filter',
      closeFilter: 'Close filter',
      learningResourcesHeading: 'Educational Resources',
      back: 'Back',
      additionalFilterLabel: 'Show addition resources',
      contentTypeResultsShowMore: {
        [contentTypes.SUBJECT_MATERIAL]: 'Show more subjects',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'Show more tasks and activities',
        [contentTypes.LEARNING_PATH]: 'Show more learningpaths',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Show more assessment resources',
        [contentTypes.SOURCE_MATERIAL]: 'Show more source materials',
      },
      contentTypeResultsShowLess: {
        [contentTypes.SUBJECT_MATERIAL]: 'Show less subjects',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'Show less tasks and activities',
        [contentTypes.LEARNING_PATH]: 'Show less learningpaths',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Show less assessment resources',
        [contentTypes.SOURCE_MATERIAL]: 'Show less source materials',
      },
      contentTypeResultsNoHit: {
        [contentTypes.SUBJECT_MATERIAL]: 'No subjects',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'No tasks and activities',
        [contentTypes.LEARNING_PATH]: 'No learningpaths',
        [contentTypes.ASSESSMENT_RESOURCES]: 'No assessment resources',
        [contentTypes.SOURCE_MATERIAL]: 'No source materials',
      },
    },
  },
  logo: {
    altText: 'The Norwegian Digital Learning Arena',
  },
  resource: {
    errorDescription:
      'Sorry, an error occurd while loading the topic resources.',
    noCoreResourcesAvailableUnspecific: 'There is no core content available.',
    noCoreResourcesAvailable: 'There is no core content available for {name}.',
    activateAdditionalResources: 'Show additional content',
    toggleFilterLabel: 'Additional content',
    label: 'Learning content',
    shortcutButtonText: 'Learning material',
    tooltipCoreTopic: 'Core content is a subject that is on the curriculum',
    tooltipAdditionalTopic:
      'Additional content is a subject that is not on the curriculum',
    additionalTooltip: 'Additional content is not on the curriculum',
    shortcutsTooltip: 'Show {count} articles in this subject',
    dialogTooltip: 'What is core content and additional content?',
    dialogHeading: 'Core content and additional content',
    dialogText1:
      'As you learn the core content, you acquire the skills described in the curriculum for the subject.',
    dialogText2:
      'Additional content is content in the subject that you can choose in addition to the core material. Through the additional subject, you can immerse yourself in a topic or approach yourself in a different way.',
    showLess: 'Show less',
    showMore: 'Show more',
  },
  article: {
    author: 'Author',
    published: 'Published',
    edition: 'Edition',
    publisher: 'Publisher',
    created: 'Created',
    lastUpdated: 'Last updated',
    closeLabel: 'Close',
    useContent: 'Cite or use',
    additionalLabel: 'Additional content',
    urlContributionsLabel: 'See {name}`s contributions',
    urlAuthorLabel: 'Read more about {name}',
    multipleAuthorsLabelAbbreviation: 'et al.',
    multipleAuthorsLabel: 'Article authors:',
    multipleAuthorsLabelAria: 'Authors of this article are {names}',
    multipleAuthorsLabelAriaConjunction: 'og',
    singleAuthorsLabelAria: 'The author of this article is {name}',
  },
  competenceGoals: {
    closeCompetenceGoals: 'Close competance goals',
    showCompetenceGoals: 'Show competance goals',
    openCompentenceGoalsFilter: 'Filter competence goals',
    useCompentenceGoalsFilter: 'Use filter',
    closeCompentenceGoalsFilter: 'Close filter',
    competenceGoalsNarrowBackButton: 'Go back',
  },
  subject: {
    associatedTopics: 'Associated topics',
  },
  license: {
    heading: 'Howto reuse content',
    tabs: {
      text: 'Text',
      images: 'Images',
      audio: 'Audio',
      video: 'Video',
      files: 'Files',
      other: 'Other content',
    },
    images: {
      heading: 'How to use images from the article',
      description:
        'Remember to copy the text to be attached to the image where you use it.',
      rules: 'Rules for use of image:',
      itemImage: {
        ariaLabel: 'Open image in new window',
      },
      source: 'Source',
      title: 'Title',
    },
    text: {
      heading: 'How to use text from the article',
      description:
        'The article may be composed of several different texts, which are listed here.',
      rules: 'Rules for use of text:',
      published: 'Published',
    },
    audio: {
      heading: 'How to use audio files from the article',
      description:
        'Remember to copy the text to be attached to the audio where you use it.',
      rules: 'Rules for use of audio file:',
    },
    video: {
      heading: 'How to use videos from the article',
      description:
        'Remember to copy the text to be attached to the video where you use it.',
      rules: 'Rules for use of audio file:',
      itemImage: {
        ariaLabel: 'Open video in new window',
      },
    },
    other: {
      heading: 'How to use other content from the article',
      description:
        'You will find guidelines for use of other content in the asset',
      itemImage: {
        ariaLabel: 'Open video in new window',
      },
    },
    files: {
      heading: 'How to use files from the article',
      description:
        'Remember to copy the text to be attached to the file where you use it.',
      rules: 'Rules for use of file:',
      itemImage: {
        ariaLabel: 'Open video in new window',
      },
    },
    learnMore: 'Learn more about open licenses',
    copyTitle: 'Copy reference',
    embed: 'Embed',
    embedCopied: 'Copied embed code!',
    hasCopiedTitle: 'Copied!',
    download: 'Download',
    creditType: {
      originator: 'Originator',
      authorDesc: 'This article is made by several originators',
      photographer: 'Photographer',
      artist: 'Artist',
      editorial: 'Editorial',
      writer: 'Writer',
      scriptwriter: 'Scriptwriter',
      reader: 'Reader',
      translator: 'Translator',
      director: 'Director',
      illustrator: 'Illustrator',
      cowriter: 'Cowriter',
      composer: 'Composer',
      processor: 'Processor',
      facilitator: 'facilitator',
      linguistic: 'Linguistic',
      idea: 'Idea',
      compiler: 'Compiler',
      correction: 'Correction',
      rightsholder: 'Rightsholder',
      publisher: 'Publisher',
      distributor: 'Distributor',
      supplier: 'Supplier',
    },
  },
  errorMessage: {
    title: 'Oops, something went wrong',
    description: 'Sorry, an error occurd.',
    linksTitle: 'Get started:',
    back: 'Go back',
    goToFrontPage: 'Go to frontpage',
  },
  footer: {
    aboutNDLA: 'About NDLA',
    selectLanguage: 'Choose language (språk): ',
    footerInfo: 'This webapplication is developed by NDLA as Open Source code.',
    footerEditiorInChief: 'Editor in chief: ',
    footerManagingEditor: 'Managing editor: ',
  },
  contentTypes: {
    all: 'All',
    subject: 'Subject',
    'topic-article': 'Topic article',
    'learning-path': 'Learning path',
    'subject-material': 'Subject material',
    'tasks-and-activities': 'Task and activities',
    'external-learning-resources': 'External learning resources',
    'source-material': 'Source material',
    'assessment-resources': 'Assessment resource',
  },
  modal: {
    closeModal: 'Close',
  },
  languages: {
    nb: 'Norwegian Bokmål',
    nn: 'Norwegian Nynorsk',
    en: 'English',
    fr: 'French',
    de: 'German',
    se: 'Sami',
    es: 'Spanish',
    zh: 'Chinese',
    unknown: 'Unknown',
  },
  breadcrumb: {
    toFrontpage: 'To the frontpage',
  },
};

export default messages;
