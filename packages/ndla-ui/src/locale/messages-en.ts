/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { contributorTypes } from '@ndla/licenses';
import constants from '../model';

export const { contentTypes, subjectCategories, subjectTypes } = constants;

const titleTemplate = ' - NDLA';

const messages = {
  treeStructure: {
    folderChildOptions: {
      edit: 'Edit foldername',
      delete: 'Delete',
    },
    hideFolders: 'Hide all folders',
    showFolders: 'Show all folders',
    createFolder: 'Create folder',
    maxFoldersAlreadyAdded: 'Maximum subfolders reached',
    newFolder: {
      placeholder: 'Add foldername',
      defaultName: 'New folder',
      folderName: 'Folder name',
    },
  },
  tagSelector: {
    label: 'Add tag',
    placeholder: 'Enter tag name',
    removeTag: 'Remove tag {{name}}',
    hideAllTags: 'Hide all tags',
    showAllTags: 'Show all tags',
  },
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
    errorDescription: 'Sorry, an error occurred while loading the resource.',
    error404Description: "Sorry, we can't locate the resource you are looking for.",
  },
  notFoundPage: {
    title: 'Page not found',
    errorDescription: "We can't seem to find the page you are looking for.",
  },
  movedResourcePage: {
    title: 'The page has been moved, but you can find it here:',
  },
  lti: {
    embed: 'Embed',
    notSupported:
      'It did not work to auto-insert the content. You can copy the source code and add it to your content.',
  },
  subjectCategories: {
    [subjectCategories.ACTIVE_SUBJECTS]: 'Active',
    [subjectCategories.ARCHIVE_SUBJECTS]: 'Expired',
    [subjectCategories.BETA_SUBJECTS]: 'Revised',
    [subjectCategories.COMMON_SUBJECTS]: 'Common core subj.',
    [subjectCategories.PROGRAMME_SUBJECTS]: 'Programme subj. SF',
    [subjectCategories.SPECIALIZED_SUBJECTS]: 'Programme subj. YF',
  },
  subjectTypes: {
    [subjectTypes.SUBJECT]: 'Subject',
    [subjectTypes.RESOURCE_COLLECTION]: 'Resource collection',
  },
  searchPage: {
    noHits: 'Your search - {{query}} - did not match any articles. ',
    noHitsShort: 'No results for search: {{query}}',
    removeFilterSuggestion: 'Try removing filters',
    close: 'Close',
    abilities: 'Abilities',
    search: 'Search',
    searchFieldPlaceholder: 'Search for subjects, tasks and activities or learningpaths',
    searchFieldPlaceholderShort: 'Search',
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
      searchStringLabel: 'You searched for:',
      subHeading: '{{totalCount}} hits in NDLA',
    },
    searchResultListMessages: {
      subjectsLabel: 'Open in subject:',
      noResultHeading: 'Hmm, no content ...',
      noResultDescription:
        'Unfortunately, we do not have anything to offer here. If you want to suggest any content for this site, you can use Ask NDLA, located at the bottom right of the screen.',
    },
    searchPageMessages: {
      filterHeading: 'Filter',
      resultHeading: '{{totalCount}} hits in NDLA',
      resultHeadingByAuthor: '{{totalCount}} articles written by {{author}}',
      narrowScreenFilterHeading: '{{totalCount}} hits on «{{query}}»',
      dropdownBtnLabel: 'More content types',
    },
    searchFilterMessages: {
      backButton: 'Back to filter',
      filterLabel: 'Search-filter',
      confirmButton: 'Refresh filter',
      hasValuesButtonText: 'More subjects',
      noValuesButtonText: 'Filter by subjects',
      useFilter: 'Use filter',
      closeFilter: 'Close filter',
      removeFilter: 'Remove filter {{filterName}}',
      additionalSubjectFilters: '+ {{count}} subjects',
      coreRelevance: 'Core content',
      supplementaryRelevance: 'Supplementary content',
      resourceTypeFilter: {
        heading: 'Content type filter',
        button: 'Content type filter',
      },
    },
    resultType: {
      showing: 'Showing {{count}} of {{totalCount}} {{contentType}}',
      showingAll: 'Showing all',
      showMore: 'Show more',
      showAll: 'Show all',
      toTopOfPage: 'To top of page',
      toSubjectPageLabel: 'Go to subject page',
      all: 'All',
      allContentTypes: 'All content-types',
      hits: '{{count}} hits',
      showingSearchPhrase: 'Showing hits for',
      searchPhraseSuggestion: 'Search instead for',
      showingCompetenceGoalSearchPhrase: 'Showing results for competence goals {text}',
      notionLabels: 'Used in',
      notionsHeading: 'Explanations',
      notionsRemove: 'Remove',
      showVideo: 'Watch video',
      showNotion: 'Show notion',
      gridView: 'Grid-view',
      listView: 'List-view',
    },
    contextModal: {
      button: '+ {{count}} more contexts',
      heading: 'The resource is used in several contexts',
      ariaLabel: 'View more contexts',
    },
  },

  subjectPage: {
    errorDescription: 'Sorry, an error occurred while loading the topics.',
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
      dialogHeader: '{{title}} is under construction',
      dialogText: 'Read more at',
    },
    archived: 'This is an expired and unmaintained subject.',
  },
  subjectsPage: {
    chooseSubject: 'Choose subject',
    errorDescription: 'Sorry, an error occurred while loading the subjects.',
  },
  topicPage: {
    articleErrorDescription: 'Sorry, an error occurred while loading the topic description.',
    topic: 'TOPIC',
    topics: 'Topics',
    imageModal: 'View full size image',
  },
  welcomePage: {
    search: 'Search',
    searchDisclaimer:
      'We are constantly working to improve ourselves! If you have comments to the search, please use the «spør NDLA» function in the bottom right corner.',
    resetSearch: 'Empty search',
    closeSearch: 'Close search',
    searchAllInfo: 'View all results',
    topicsConjunction: 'and',
    highlighted: 'Highlighted',
    heading: {
      heading: 'The Norwegian Digital Learning Arena',
      searchFieldPlaceholder: 'Search for topics, learning materials, keywords ...',
      messages: {
        searchFieldTitle: 'Search',
        menuButton: 'Content',
      },
      links: {
        aboutNDLA: 'About NDLA',
        changeLanguage: 'Change language',
      },
    },
    socialMedia: {
      heading: 'Follow us',
      description: 'NDLA has several facebook- and twitter accounts. Find the one that suits you, and follow us!',
      mainLink: {
        name: 'Follow us',
      },
    },
    film: {
      header: 'NDLA film',
      text: 'NDLA film is a service in collaboration with Norgesfilm. This service allows you to watch a range of feature films, short films, documentaries and series. You can also watch educational films and movie clips. Welcome to the world of cinema!',
      textShort: 'Welcome to the world of cinema!',
      linkLabel: 'Go to NDLA film',
    },
    blog: 'From our blog',
    errorDescription: 'Sorry, an error occurred while loading the subjects.',
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
      toFrontpage: 'To frontpage',
      subjectOverview: 'All subjects',
      modalLabel: 'Choose content',
      backToSubjectFrontpage: 'Back to subject frontpage',
      title: 'Content',
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
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]: 'Show more external learning resources',
        unGrouped: 'Show more resources',
      },
      contentTypeResultsShowLess: {
        [contentTypes.SUBJECT_MATERIAL]: 'Show less subjects',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'Show less tasks and activities',
        [contentTypes.LEARNING_PATH]: 'Show less learningpaths',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Show less assessment resources',
        [contentTypes.SOURCE_MATERIAL]: 'Show less source materials',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]: 'Show less external learning resources',
        unGrouped: 'Show less resources',
      },
      contentTypeResultsNoHit: {
        [contentTypes.SUBJECT_MATERIAL]: 'No subjects',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'No tasks and activities',
        [contentTypes.LEARNING_PATH]: 'No learningpaths',
        [contentTypes.ASSESSMENT_RESOURCES]: 'No assessment resources',
        [contentTypes.SOURCE_MATERIAL]: 'No source materials',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]: 'No external learning resources',
        unGrouped: 'No resources',
      },
    },
  },
  logo: {
    altText: 'The Norwegian Digital Learning Arena',
  },
  resource: {
    errorDescription: 'Sorry, an error occurred while loading the topic resources.',
    error: 'Sorry, a part of the content could not be shown.',
    noCoreResourcesAvailableUnspecific: 'There is no core content available.',
    noCoreResourcesAvailable: 'There is no core content available for {{name}}.',
    activateAdditionalResources: 'Show additional content',
    toggleFilterLabel: 'Show additional content',
    label: 'Learning content',
    allResources: 'Content',
    shortcutButtonText: 'Learning material',
    tooltipCoreTopic: 'Core content is a subject that is on the curriculum',
    tooltipAdditionalTopic: 'Additional content is a subject that is not on the curriculum',
    additionalTooltip: 'Additional content is not on the curriculum',
    shortcutsTooltip: 'Show {{count}} articles in this subject',
    dialogTooltip: 'What is core content and additional content?',
    dialogHeading: 'Core content and additional content',
    dialogText1: 'As you learn the core content, you acquire the skills described in the curriculum for the subject.',
    dialogText2:
      'Additional content is content in the subject that you can choose in addition to the core material. Through the additional subject, you can immerse yourself in a topic or approach yourself in a different way.',
    showLess: 'Show less',
    showMore: 'Show more',
    youAreHere: 'You are here',
    trait: {
      video: 'Video',
      h5p: 'Interactive',
    },
  },

  messageBoxInfo: {
    outdatedCoursePlan:
      'This course is not updated to the current curriculum. Follow this link to find the updated version of the course: ',
    updateBrowser:
      'Your browser is outdated. Update it, or find a safe and updated browser on https://browsehappy.com.',
    noContent: 'We are sorry, but we do not yet offer any program courses.',
    feide: 'This resource is accessible only to teachers who are logged in with Feide.',
    resources: 'This is not a complete course, but a collection of resources we hope you will find useful.',
    subjectOutdated: 'This course is not updated to the current curriculum.',
    subjectBeta: 'This course is in beta. New resources are being added continously.',
    newVersion:
      'This learning resource is not updated to the current curriculum. You can find an updated version here: ',
    frontPageBeta:
      'Revised subjects have been revised in accordance with the new curriculum that will be put into effect from August 2022. Beta versions of subjects are subjects we are still working on. We hope, however, that the learning resources available by now may come in useful already.',
    frontPageExpired:
      'Expired subjects are not being taught any longer, but it may still be possible to take exams in these subjects.',
    frontPageRevised:
      'Revised subjects have been revised in accordance with the new curriculum that will be put into effect from August 2022.',
  },
  article: {
    edition: 'Edition',
    publisher: 'Publisher',
    lastUpdated: 'Last updated',
    closeLabel: 'Close',
    useContent: 'Cite or use',
    additionalLabel: 'Additional content',
    urlContributionsLabel: 'See {{name}}`s contributions',
    urlAuthorLabel: 'Read more about {{name}}',
    multipleAuthorsLabelAbbreviation: 'et al.',
    authorsLabel: 'Written by: {{names}}',
    multipleAuthorsLabelAriaConjunction: 'and',
    copyPageLink: 'Copy page-link',
    copyPageLinkCopied: 'Link copied',
    copyHeaderLink: 'Copy link to header',
    conjunction: 'and',
    supplierLabel: 'Rightsholder: {{name}}',
    multipleSuppliersLabel: 'Rightsholders: {{names}}',
    writtenBy: 'Written by {{authors}}',
    cite: 'Cite content',
    notionsPrompt: 'Do you know the notions?',
    citeNotion: 'Cite this explanation',
    printPage: 'Print',
    access: {
      onlyTeacher: 'This resource is accessible only to teachers who are logged in with Feide.',
    },
    possiblyOutdated: 'The article is outdated',
  },
  competenceGoals: {
    competenceGoal: 'competence-goal',
    title: 'Competence goals and curriculum ',
    modalText: 'Explore curriculum links',
    closeCompetenceGoals: 'Close competence goals',
    showCompetenceGoals: 'Show competence goals',
    openCompentenceGoalsFilter: 'Filter competence goals',
    useCompentenceGoalsFilter: 'Use filter',
    closeCompentenceGoalsFilter: 'Close filter',
    competenceGoalsNarrowBackButton: 'Go back',
    competenceGoalResourceSearchText: 'Search all resources appropriate to this goal',
    competenceGoalShowExtra: 'Show',
    competenceGoalCloseExtra: 'Hide',
    competenceCoreLabel: 'Core element',
    competenceTopicLabel: 'Interdisciplinary theme',
    competenceSubjectLabel: 'Topic',
    competenceCoreSearchText: 'Find resources',
    competenceTopicSearchText: 'Find resources',
    competenceSubjectSearchText: 'Go to topic page',
    competenceGoalClose: 'Close',
    competenceGoalTitle: 'The pupil is expected to be able to:',
    competenceTabLK06label: 'Competence goal (LK06)',
    competenceTabLK20label: 'Competence goal (LK20)',
    competenceTabCorelabel: 'Core element',
    competenceGoalItem: {
      title: 'Competence goals and assessment',
    },
    licenseData: 'Containing data under',
    licenseFrom: 'published at',
  },
  subject: {
    associatedTopics: 'Associated topics',
  },
  accordion: {
    closeAll: 'Close all',
    openAll: 'Open all',
  },
  license: {
    heading: 'How to reuse content',
    tabs: {
      text: 'Text',
      images: 'Images',
      audio: 'Audio',
      video: 'Video',
      h5p: 'H5P',
      files: 'Files',
      embedlink: 'Embedded link',
      concept: 'Concepts',
      podcast: 'Podcast',
      other: 'Other content',
    },
    embedlink: {
      heading: 'How to show the article in other content',
      description: 'This url shows the article without menu and footer',
      copyTitle: 'Copy link',
      hasCopiedTitle: 'Link copied',
    },
    image: {
      rules: 'Rules for use of image:',
    },
    images: {
      heading: 'How to reuse images',
      description: 'Remember to copy the text to be attached to the image where you use it.',
      rules: 'Rules for use of image:',
      itemImage: {
        ariaLabel: 'Open image in new window',
        zoomImageButtonLabel: 'Expand image',
        zoomOutImageButtonLabel: 'Shrink image',
        expandByline: 'Show byline',
        minimizeByline: 'Hide byline',
      },
      source: 'Source',
      title: 'Title',
    },
    text: {
      heading: 'How to reuse the text',
      description: 'Remember to refer to the source when reusing text.',
      rules: 'Rules for use of text:',
      published: 'Published',
    },
    audio: {
      heading: 'How to reuse audio files',
      description: 'Remember to copy the text to be attached to the audio where you use it.',
      rules: 'Rules for use of audio file:',
    },
    podcast: {
      heading: 'How to reuse podcasts',
      description: 'Remember to copy the text to be attached to the podcast where you use it.',
      rules: 'Rules for use of podcast:',
    },
    video: {
      heading: 'How to reuse videos',
      description: 'Remember to copy the text to be attached to the video where you use it.',
      rules: 'Rules for use of video files:',
      itemImage: {
        ariaLabel: 'Open video in new window',
      },
    },
    other: {
      heading: 'How to reuse other content',
      description: 'You will find guidelines for use of other content in the asset',
      itemImage: {
        ariaLabel: 'Open in new window',
      },
    },
    h5p: {
      heading: 'How to reuse H5P content',
      description: 'You will find guidelines for use of H5P content in the asset',
      rules: 'Rules for use of H5P:',
    },
    concept: {
      heading: 'How to reuse concept content',
      description: 'You will find guidelines for use of concept content in the asset',
      rules: 'Rules for use of concept:',
      title: 'Title',
      embedlink: {
        heading: 'How to show the concept in other content',
        description: 'This url shows the concept without menu and footer',
        copyTitle: 'Copy embed link',
        hasCopiedTitle: 'Embed link copied',
      },
    },
    files: {
      heading: 'How to reuse files',
      description: 'Remember to copy the text to be attached to the file where you use it.',
      rules: 'Rules for use of file:',
      itemImage: {
        ariaLabel: 'Open video in new window',
      },
    },
    learnMore: 'Learn more about open licenses',
    copyTitle: 'Source reference',
    embed: 'Embed',
    embedCopied: 'Copied embed code!',
    copyText: {
      now: 'now',
      podcast: 'podcast',
      by: 'by',
      internet: '[Internet]. ',
      noTitle: 'No title',
      downloadedFrom: 'Downloaded from: ',
      readDate: 'Read: ',
    },
    hasCopiedTitle: 'Copied!',
    download: 'Download',
    title: 'Title',
    originator: 'Originator',
    rightsholder: 'Rightsholder',
    source: 'Source',
    published: 'Published',
  },
  errorMessage: {
    title: 'Oops, something went wrong',
    description: 'Sorry, an error occurred.',
    linksTitle: 'Get started:',
    back: 'Go back',
    goToFrontPage: 'Go to frontpage',
  },
  figure: {
    button: {
      alternative: 'Switch to visually interpreted video',
      original: 'Switch to original video',
    },
  },
  footer: {
    aboutNDLA: 'About NDLA',
    selectLanguage: 'Choose language (språk): ',
    footerInfo: 'This webapplication is developed by NDLA as Open Source code.',
    footerEditiorInChief: 'Editor in chief: ',
    footerManagingEditor: 'Managing editor: ',
    footerPrivacyLink: 'Cookies Policy',
    vision: 'We create the learning of the future together',
    footerLinksHeader: 'Other NDLA sites',
    socialMediaLinks: {
      facebook: 'NDLA on Facebook',
      facebookAria: 'Visit NDLA on Facebook',
      newsletter: 'Sign up for our Newsletter',
      newsletterAria: 'Sign up for our Newsletter',
      youtube: 'NDLA on YouTube',
      youtubeAria: 'NDLA on YouTube',
      linkedin: 'NDLA on LinkedIn',
      linkedinAria: 'Visit NDLA on LinkedIn',
      instagram: 'NDLA on Instagram',
      instagramAria: 'Visit NDLA on Instagram',
      sharePage: 'Share this page',
      sharePageAria: 'Share this page',
    },
    ndlaLinks: {
      ndla: 'ndla.no',
      omNdla: 'Om NDLA',
      aboutNdla: 'About NDLA',
      blog: 'Blog',
      tips: 'Tips to students',
      fyr: 'FYR project',
      sharing: 'Sharing arena',
      vacancies: 'Vacancies',
    },
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
    topic: 'Topic',
    'multidisciplinary-topic': 'Multidisciplinary case',
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
    se: 'Northern Sami',
    sma: 'Southern Sami',
    es: 'Spanish',
    zh: 'Chinese',
    unknown: 'Unknown',
    prefixChangeLanguage: 'Choose language',
  },
  changeLanguage: {
    nb: 'Endre språk til bokmål',
    nn: 'Endre språk til nynorsk',
    en: 'Change language to English',
  },
  currentLanguageText: {
    nb: 'Sidene vises på bokmål',
    nn: 'Sidene vises på nynorsk',
    en: 'Not all pages are available in English. These will be shown in Norwegian',
  },
  breadcrumb: {
    toFrontpage: 'NDLA frontpage',
    youAreHere: 'You are here',
    breadcrumb: 'Breadcrumb',
  },
  listview: {
    search: {
      placeholder: 'Search',
    },
    embedlink: {
      copyTitle: 'Copy embed code',
      hasCopiedTitle: 'Embed code copied',
    },
    filters: {
      subject: {
        useFilter: 'Use filter',
        openFilter: 'Choose subject',
        closeFilter: 'Close filter',
      },
      category: {
        useFilter: 'Use filter',
        openFilter: 'Use filter on category',
        closeFilter: 'Close filter',
      },
      default: {
        useFilter: 'Use filter',
        openFilter: 'Filter',
        closeFilter: 'Close filter',
        heading: 'Filter',
        filteredBy: 'Filtered by',
      },
      alphabet: {
        letterFilter: 'Filter content by the letter {{letter}}.',
      },
    },
    relatedLinks: {
      label: 'Related articles',
    },
    hits: '{{count}} hits',
  },
  notions: {
    usedIn: 'Used in',
    closeNotion: 'Close',
  },
  carousel: {
    back: 'Slide backwards',
    forward: 'Slide forwards',
  },
  codeEditor: {
    title: 'ADD',
    titleLabel: 'Title:',
    subtitle: 'code example',
    languageSelect: 'Select language:',
    save: 'Save',
    abort: 'Abort',
  },
  codeBlock: {
    copiedCode: 'Copied code',
    copyButton: 'Copy code',
    copyCode: 'Copy code',
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
      text: 'Ndla film er ei nettbasert filmtjeneste for elever og lærere i videregående skole. Her finn du spillefilmer, kortfilmer, dokumentarfilmer og TV-serier.',
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
      addMovieToGroup: 'Add a movie to "{{name}}"',
      editMovieGroupName: 'Change the names on this movie group',
      deleteMovieGroup: 'Delete "{{name}}"',
      moveMovieGroupUp: 'Move up',
      moveMovieGroupDown: 'Move down',
      changeOrder: 'Change order',
      removeMovieFromGroup: 'Remove movie from group',
      removeMovieFromSlideshow: 'Remove movie from slideshow',
      createThemeGroup: 'Create new movie group',
      saveNameChanges: 'Save changes',
      cancel: 'Cancel',
      groupNamePlaceholder: 'Write name in {{lang}}',
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
      tipSectionPt1: 'Please give tips, ask questions or wish for new movies at our',
      tipSectionPt2: 'Facebook page.',
      ariaLabel: 'Visit NDLA-films Facebook page',
      tipSectionPt3: '',
      ending: 'We wish all movie lovers a good and educational experience!',
    },
  },
  learningPath: {
    createLearningPathText: 'Create your own, copy this or see more learningpaths?',
    createLearningPathButtonText: 'Go to learningpaths',
    lastUpdated: 'Last updated',
    youAreInALearningPath: 'You are now in a learningpath',
    readTime: '{{hours}} schoolhours = {{minutes}} min',
    pageOf: 'of',
    readTimeHour: 'hour',
    readTimeHour_plurals: 'hours',
    readTimeMinutesShort: 'min',
    lastStep: {
      heading: 'Last step of this learningpath',
      headingSmall: 'You are now in the last step of the learningpath {{learningPathName}}',
      topicHeading: 'Go to topic:',
      subjectHeading: 'Go to subject:',
    },
    openMenuTooltip: 'Open menu',
    mobileStepInfo: '{{currentPage}} out of {{totalPages}}',
    nextArrow: 'Next',
    previousArrow: 'Previous',
  },
  dropdown: {
    numberHits: `Search returned {{hits}} hits`,
    searching: 'Searching...',
    create: 'Create new',
    isSelectedItem: 'Added',
  },
  blogPosts: {
    blog1: {
      text: 'Forslag til årsplaner fra NDLA',
      externalLink: 'https://blogg.ndla.no/2021/08/forslag-til-arsplaner-hos-ndla/',
      linkText: 'Fagblogg',
      license: 'CC-BY-SA-4.0',
      licenseAuthor: 'Vibeke Klungland',
    },
    blog2: {
      text: 'Huskeliste for kontaktlærere',
      externalLink: 'https://blogg.ndla.no/2019/08/huskeliste-for-kontaktlaerere/',
      linkText: 'Fagblogg',
      license: 'CC-BY-SA-4.0',
      licenseAuthor: 'Tom Knudsen',
    },
  },
  editor: {
    versionHistory: {
      who: 'Who',
      when: 'When',
      message: 'Message',
      status: 'Status',
      inputLabel: 'Add message:',
      inputPlaceholder: 'Write message',
      buttonLabel: 'Save',
    },
  },
  createdBy: {
    content: 'The resource',
    text: 'is retrieved from',
    concept: {
      content: 'The concept',
      text: 'is created by',
    },
    listing: {
      content: 'The list',
      text: 'is created by',
    },
  },
  frontPageToolbox: {
    heading: 'Toolbox',
    text: 'Do you want to become good at presenting, or do you want to learn to study smarter using the right study technique? Need advice on how to read most effectively for the exam? In the NDLA Toolbox you will find lots of great tips and advice!',
    linkTextStudents: 'See all tips for students here',
    linkTextTeachers: 'See all tips for teachers here',
    cursorText: 'Tip',
  },
  frontpageMultidisciplinarySubject: {
    heading: 'Interdisciplinary topics',
    text: 'The three interdisciplinary topics in the curriculum are based on current societal challenges that require the involvement and efforts of individuals and the community in the local community, nationally and globally.',
    linkText: 'See cases for multidisciplinary topics',
    publicHealthTopic: 'Public health and life management',
    democracyTopic: 'Democracy and citizenship',
    sustainableTopic: 'Sustainable development',
    cursorText: 'New',
  },
  frontpageMenu: {
    program: 'Education programme',
    allsubjects: 'All subjects',
    cursorText: 'Have a look at some new learning resources from our new subjects!',
  },
  navigation: {
    showLongerDescription: 'Show topic description',
    showShorterDescription: 'Hide topic description',
    topics: 'Topics',
    additionalTopic: 'Additional topic',
    additionalTopics: 'Additional topics',
    loadingText: 'Loading subject',
  },
  multidisciplinarySubject: {
    subjectsLinksDescription: 'Case in',
  },
  multibutton: {
    open: 'Open menu',
    close: 'Close menu',
  },
  cancel: 'Cancel',
  close: 'Close',
  title: 'Title',
  save: 'Save',
  image: {
    altText: 'Alt-text',
    caption: 'Caption',
    type: 'File type',
    width: 'Width',
    height: 'Height',
    size: 'Size (bytes)',
    modelReleased: {
      label: 'Model released',
      yes: 'Yes',
      no: 'No',
      'not-applicable': 'Not applicable',
      'not-set': 'Not set',
      description: 'Whether the image is model released or not:',
    },
    download: 'Download image',
    reuse: 'Use image',
    largeSize: 'View original',
    error: {
      url: 'Error loading the image.',
      caption: 'Sorry, an error occurred while loading the image.',
    },
  },
  audio: {
    download: 'Download audio',
    reuse: 'Use audio',
    error: {
      url: 'Error loading the audio.',
      caption: 'Sorry, an error occurred while loading the audio.',
    },
    controls: {
      forward15sec: 'Forward 15 seconds',
      rewind15sec: 'Rewind 15 seconds',
      selectSpeed: 'Choose speed',
      adjustVolume: 'Adjust volume',
    },
    textVersion: {
      heading: 'Text version',
      close: 'Close text version',
    },
    readMoreDescriptionLabel: 'show more',
  },
  h5p: {
    reuse: 'Use H5P',
  },
  video: {
    download: 'Download video',
    reuse: 'Use video',
    error: 'Sorry, an error occurred while loading the video or metadata about the video.',
  },
  other: {
    download: 'Download content',
    reuse: 'Use content',
  },
  concept: {
    showDescription: 'Show concept description',
    reuse: 'Use concept',
    error: {
      title: 'An error occurred',
      content: 'Could not load the description of the concept.',
    },
  },
  source: 'Source',
  related: {
    title: 'Related content',
    linkInfo: 'Web page at',
    showMore: 'Show more related content',
    showLess: 'Show less',
  },
  'external.error': 'An error occurred while loading an external resource.',
  'h5p.error': 'An error occurred while loading the H5P.',
  files: 'Files',
  download: 'Download file: ',
  expandButton: 'Show large version',
  ...contributorTypes.en,
  filterButtons: {
    removeAllFilters: 'Remove filters',
  },
  visualElement: {
    show: 'Show',
    showVideo: 'Show video',
  },
  user: {
    loggedInAs: 'You are logged in as {{role}}.',
    loggedInAsButton: 'You are logged in as {{role}}',
    role: {
      employee: 'Teacher',
      staff: 'Staff',
      student: 'Student',
    },
    buttonLogIn: 'Log in with Feide',
    buttonLogOut: 'Log out',
    generalFooter: 'Some resources may only be accessed by teachers who are logged in.',
    modal: {
      collectedInfo: 'We have collected the following information about you from Feide:',
      general: 'Resources that require logging in with Feide, are tagged with the icon',
      topic: 'Log in with Feide to access this topic.',
      isAuth: 'User info',
      isNotAuth: 'Log in with Feide',
    },
    resource: {
      accessDenied: 'We are sorry, but this resource is only available to teachers who are logged in with Feide.',
    },
    primarySchool: 'Primary School',
    name: 'Name',
    mail: 'E-mail',
    username: 'Username',
    groupTypes: {
      basic: 'Basic group',
      teaching: 'Teaching group',
      other: 'Other groups',
    },
  },
  checkOutNewFeature: 'New feature',
  slateBlockMenu: {
    open: 'Open menu',
    close: 'Close menu',
  },
  factbox: {
    open: 'Open fact box',
    close: 'Close fact box',
  },
  myNdla: {
    myNDLA: 'My NDLA',
    support: 'Support',
    resources: '{{count}} Resource',
    resources_plural: '{{count}} Resources',
    folders: '{{count}} Folder',
    folders_plural: '{{count}} Folders',
    folder: {
      folder: 'Folder',
      delete: 'Delete folder',
      edit: 'Edit folder',
      missingName: 'Folder name required',
      folderDeleted: '"{{folderName}}" deleted',
    },
    tags: '{{count}} tag',
    tags_plural: '{{count}} tags',
    confirmDeleteFolder:
      'Are you sure you want to delete this folder? Subfolders of this folder will also be deleted. This action cannot be undone.',
    confirmDeleteTag: 'Are you sure you want to delete this tag? This process cannot be undone.',
    myFolders: 'My folders',
    myTags: 'My tags',
    newFolder: 'New folder',
    newFolderUnder: 'Create new folder under {{folderName}}',
    myAccount: 'My account',
    favourites: 'Favourites',
    addToFavourites: 'Add to my favourites',
    alreadyFavourited: 'Already in my favourites',
    alreadyInFolder: 'Already in folder',
    help: 'Help',
    more: 'More options',
    listView: 'List view',
    detailView: 'Detailed listview',
    shortView: 'Card view',
    myPage: {
      confirmDeleteAccount: 'Are you sure you want to delete your account?',
      confirmDeleteAccountButton: 'Delete account',
      myPage: 'My page',
      logout: 'Log out of My NDLA',
      loginText:
        'Log in with Feide to receive access to My NDLA. We ask you not to write offensive or personally sensitive information in text fields. Read our ',
      loginTextLink: 'privacy policy here',
      loginTerms: 'Log in with Feide to receive access. By logging on your accept your terms of service',
      loginResourcePitch: 'Do you want to favorite this page?',
      loginWelcome: 'Welcome to My NDLA! This page allows you to organize your articles in your <i>own</i> way!',
      deleteAccount: 'Delete My NDLA',
      welcome:
        'Welcome to my NDLA! You can now save your favourite resources from NDLA and organise them in folders with tags',
      read: { our: 'Read our', ours: 'Read our' },
      privacy: 'privacy statement',
      questions: { question: 'Any questions?', ask: 'Ask us in the chat' },
      wishToDelete: 'Do you wish to delete your account?',
      terms: {
        terms: 'Terms of use',
        term1: 'Do not write personal or sensitive information in text fields.',
        term2: 'Do not write offensive statements in text fields.',
        term3: 'NDLA reserves the right to update or remove resources if they are not up to date.',
      },
      feide: 'We have retrieved this information from Feide',
      newFavourite: 'Recently favourited',

      storageInfo: {
        title: 'How to save your favourite resources from NDLA',
        text: 'When you wish to save a resource, you can do so by clicking the heart button. You will then get an option to store the resource in a folder',
      },
      folderInfo: {
        title: 'How to organise your favourite resources in folders',
        text: 'You can get to the folder overview by clicking on my folders on the menu to the left. Here you can create new folders and subfolder. You can also create a new folder in the dialogue window that is activated when you click on the heart in a resource',
      },
      tagInfo: {
        title: 'How to tag your favourite resources',
        text: 'When you save a resource, you will have the option to tag it with a keyword. This tag can be used to find the resource across folders. By selecting my tags on the menu to the left, you will see all the tags your have used. You can also see which resources are tagget with which keyword.',
      },
    },
    resource: {
      add: 'Add folder/tag',
      remove: 'Remove',
      removeTitle: 'Remove resource',
      confirmRemove: 'Are you sure you want to remove the resource from this folder?',
      copyLink: 'Copy link to this page',
      linkCopied: 'Copied to clipboard',
      addToMyNdla: 'Add to My NDLA',
      addedToMyNdla: 'Added to My NDLA',
      addedToFolder: 'Resource added to ',
      removedFromFolder: 'Removed from "{{folderName}}"',
      titleUpdated: 'Title updated',
      tagsUpdated: 'Tags updated',
      show: 'Show',
      save: 'Save resource',
    },
  },
  snackbar: {
    close: 'Close notification',
  },
  labels: {
    category: 'Category',
    subject: 'Subject',
    other: 'Other',
  },
  listingPage: {
    or: 'or',
    noFilters: 'Have nothing to filter',
    loadMore: 'Load more',
  },
  siteNav: {
    search: 'Search',
    contact: 'Contact',
    help: 'Help',
  },
};

export default messages;
