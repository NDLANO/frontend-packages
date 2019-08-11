/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import constants from '../model';

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
  lti: {
    embed: 'Embed',
    notSupported:
      'It did not work to auto-insert the content. You can copy the source code and add it to your content.',
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
      languageFilter: 'Language',
      subjects: 'Subjects',
      noFilter: 'No filter selected',
      createdBy: 'Created by:',
    },
    showLabel: {
      contentTypes: 'More content types',
      levels: 'More levels',
      languageFilter: 'More languages',
      subjects: 'Change subject',
    },
    hideLabel: {
      contentTypes: 'Hide content types',
      levels: 'Hide levels',
      languageFilter: 'Hide languages',
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
      coreRelevance: 'Core content',
      supplementaryRelevance: 'Supplementary content',
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
    subjectIsBeta: {
      iconLabel: 'in beta',
      dialogHeader: '{title} is under construction',
      dialogText: 'Read more at',
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
    resetSearch: 'Empty search',
    closeSearch: 'Close search',
    topicsConjunction: 'and',
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
      heading: 'What will you learn?',
    },
    film: {
      header: 'NDLA film',
      text:
        'NDLA film is a service in collaboration with Norgesfilm. This service allows you to watch a range of feature films, short films, documentaries and series. You can also watch educational films and movie clips. Welcome to the world of cinema!',
      textShort: 'Welcome to the world of cinema!',
      linkLabel: 'Go to NDLA film',
    },
    blog: 'From our blog',
    errorDescription: 'Sorry, an error occurd while loading the subjects.',
  },
  meta: {
    description: 'Norwegian Digital Learning Arena, Open Educational Resources',
    keywords: 'open educational resources,teaching,learning',
  },
  masthead: {
    skipToContent: 'Skip to content',
    menu: {
      close: 'Close',
      goTo: 'Go to',
      search: 'Search',
      subjectOverview: 'All subjects',
      backToSubjectFrontpage: 'Back to subject frontpage',
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
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]:
          'Show more external learning resources',
      },
      contentTypeResultsShowLess: {
        [contentTypes.SUBJECT_MATERIAL]: 'Show less subjects',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'Show less tasks and activities',
        [contentTypes.LEARNING_PATH]: 'Show less learningpaths',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Show less assessment resources',
        [contentTypes.SOURCE_MATERIAL]: 'Show less source materials',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]:
          'Show less external learning resources',
      },
      contentTypeResultsNoHit: {
        [contentTypes.SUBJECT_MATERIAL]: 'No subjects',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'No tasks and activities',
        [contentTypes.LEARNING_PATH]: 'No learningpaths',
        [contentTypes.ASSESSMENT_RESOURCES]: 'No assessment resources',
        [contentTypes.SOURCE_MATERIAL]: 'No source materials',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]:
          'No external learning resources',
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
    toggleFilterLabel: 'Show additional content',
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
    youAreHere: 'You are here',
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
    multipleAuthorsLabel: 'Licensees:',
    multipleAuthorsLabelAria: 'Licensees of this article are {names}',
    multipleAuthorsLabelAriaConjunction: 'og',
    singleAuthorsLabelAria: 'The Licensee of this article is {name}',
  },
  competenceGoals: {
    title: 'Competance goals and curriculum ',
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
      h5p: 'H5P',
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
        zoomImageButtonLabel: 'Expand image',
        zoomOutImageButtonLabel: 'Shrink image',
      },
      source: 'Source',
      title: 'Title',
    },
    text: {
      heading: 'How to use text from the article',
      description: 'Remember to refer to the source when reusing text.',
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
    h5p: {
      heading: 'How to use H5P content from the article',
      description:
        'You will find guidelines for use of H5P content in the asset',
      rules: 'Rules for use of H5P:',
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
    footerPrivacyLink: 'Cookies Policy',
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
  changeLanguage: {
    nb: 'Endre språk til bokmål',
    nn: 'Endre språk til nynorsk',
    en: 'Change language to English',
  },
  currentLanguageText: {
    nb: 'Sidene vises på bokmål',
    nn: 'Sidene vises på nynorsk',
    en:
      'Not all pages are available in English. These will be shown in Norwegian',
  },
  breadcrumb: {
    toFrontpage: 'To the frontpage',
  },
  notions: {
    closeNotion: 'Close',
  },
  carousel: {
    back: 'Slide backwards',
    forward: 'Slide forwards',
  },
  ndlaFilm: {
    slideBackwardsLabel: 'Scroll backwards',
    slideForwardsLabel: 'Scroll forwards',
    movieMatchInCategory: 'Matches',
    loadingMovies: 'Loading movies..',
    subjectsInMovies: 'Subjects in film',
    about: {
      heading: 'About NDLA Film',
      more: 'Read more about NDLA film',
      text:
        'Ndla film er ei nettbasert filmtjeneste for elever og lærere i videregående skole. Her finn du spillefilmer, kortfilmer, dokumentarfilmer og TV-serier.',
    },
    search: {
      placeholder: 'Search on moviename',
      categoryFromNdla: 'Selected resources from NDLA',
      chooseCategory: 'Choose category',
      subjectButton: 'Go to subject',
    },
    editor: {
      slideshowHeader: 'Slideshow:',
      slideshowTitle: 'Movies on slideshow',
      slideshowSubTitle: 'on frontpage',
      movieGroupHeader: 'Movies themes:',
      addMovieToSlideshow: 'Add movie to slideshow',
      addMovieToGroup: 'Add a movie to "{name}"',
      editMovieGroupName: 'Change the names on this movie group',
      deleteMovieGroup: 'Delete "{name}"',
      moveMovieGroupUp: 'Move up',
      moveMovieGroupDown: 'Move down',
      changeOrder: 'Change order',
      removeMovieFromGroup: 'Remove movie from group',
      removeMovieFromSlideshow: 'Remove movie from slideshow',
      createThemeGroup: 'Create new movie group',
      saveNameChanges: 'Save changes',
      cancel: 'Cancel',
      groupNamePlaceholder: 'Write name in {lang}',
      editGroupTitle: 'Change the name(s) in this movie group:',
      newGroupTitle: 'What shall we call the new movie group?',
    },
  },
  filmfrontpage: {
    resourcetype: {
      documentary: 'Documentary',
      featureFilm: 'Feature film',
      series: 'Series',
      shortFilm: 'Short film',
      all: 'All movies A-Z',
    },
    moreAboutNdlaFilm: {
      header: 'NDLA Film',
      firstParagraph:
        "The films in the film service are taken from Norwegian and international film heritage and are linked to curricula in several subjects. They have been selected by NDLA's editors in collaboration with Norgesfilm AS.",
      secondParagraph:
        'You can watch the films if you are connected to the Internet via your computer, tablet or smartphone. We have done the work with rights clearance and payment. All you have to do is press play.',
      thirdParagraph:
        'The films are copyrighted. They can be played freely on ndla.no, but not downloaded or distributed in other publications. All licensees are remunerated for the replays made.',
      secondHeading: 'Use film in teaching',
      fourthParagraph:
        'A film tells stories in ways that engage and touch us. In film, some of the most effective visuals are used; moving images and sound. A good film can show sides of the present and give visions of the future or comment on the past. Therefore, films can often give us a better understanding of events, cultural meetings and history than a text.',
      fifthParagraph:
        'By watching films, the students are better equipped to read the film language, so that the film gets a value beyond the purely entertaining. The general part of the curriculum emphasizes that the students should meet art and cultural forms that stimulate, inspire their own creativity, and promote ethical orientation ability and aesthetic sense.',
      tipSectionPt1:
        'Please give tips, ask questions or wish for new movies at our',
      tipSectionPt2: 'Facebook page.',
      ariaLabel: 'Visit NDLA-films Facebook page',
      tipSectionPt3: '',
      ending: 'We wish all movie lovers a good and educational experience!',
    },
  },
  learningPath: {
    createLearningPathText:
      'Create your own, copy this or see more learningpaths?',
    createLearningPathButtonText: 'Go to learningpaths',
    lastUpdated: 'Last updated',
    youAreInALearningPath: 'You are now in a learningpath',
    readTime: '{hours} schoolhours = {minutes} min',
    pageOf: 'of',
    readTimeHour_plurals: 'hours',
    lastStep: {
      heading: 'Last step of this learningpath',
      headingSmall:
        'You are now in the last step of the learningpath {learningPathName}',
      topicHeading: 'Go to topic:',
      subjectHeading: 'Go to subject:',
    },
    openMenuTooltip: 'Open menu',
    previousArrow: 'Previous',
    nextArrow: 'Next',
  },
  dropdown: {
    numberHits: `Search returned {hits} hits`,
    searching: 'Searching...',
    create: 'Create new',
    isSelectedItem: 'Added',
  },
};

export default messages;
