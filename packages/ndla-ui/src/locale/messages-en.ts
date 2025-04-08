/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { contributorTypes } from "@ndla/licenses";
import constants from "../model";

const { subjectCategories, subjectTypes, wordClass } = constants;

const messages = {
  ...contributorTypes.en,
  askNDLA: "Ask NDLA",
  subjectCategories: {
    [subjectCategories.ACTIVE_SUBJECTS]: "Active",
    [subjectCategories.ARCHIVE_SUBJECTS]: "Expired",
    [subjectCategories.BETA_SUBJECTS]: "Revised",
    [subjectCategories.OTHER]: "Other resources",
    [subjectTypes.RESOURCE_COLLECTION]: "Resource collections",
  },
  subjectTypes: {
    [subjectTypes.BETA_SUBJECT]: "Betafag",
    [subjectTypes.RESOURCE_COLLECTION]: "Resource collection",
    [subjectTypes.SUBJECT]: "Subject",
  },
  meta: {
    description: "Norwegian Digital Learning Arena, Open Educational Resources for upper secondary education.",
    keywords: "open educational resources,teaching,learning",
  },
  logo: {
    altText: "The Norwegian Digital Learning Arena",
  },
  article: {
    lastUpdated: "Last revised date",
    useContent: "Cite or reuse?",
    authorsLabel: "Written by: {{names}}",
    authorsLabelLearningpath: "Made by {{names}}",
    copyPageLinkCopied: "Link copied",
    copyHeaderLink: "Copy link to header",
    conjunction: "and",
    externalStepAuthorsLabel: "This link is added by {{names}}",
    supplierLabel: "Rightsholder: {{name}}",
    multipleSuppliersLabel: "Rightsholders: {{names}}",
    printPage: "Print text",
    access: {
      onlyTeacher: "This resource is accessible only to teachers who are logged in with Feide.",
    },
    footnotes: "Footnotes",
  },
  license: {
    tabs: {
      text: "Text",
      images: "Images",
      audio: "Audio",
      video: "Video",
      h5p: "H5P",
      files: "Files",
      embedlink: "Embedded link",
      concept: "Concepts",
      gloss: "Glosses",
      podcast: "Podcast",
      other: "Other content",
    },
    embedlink: {
      heading: "How to show the article in other content",
      description: "This url shows the article without menu and footer",
      copyTitle: "Copy link",
      hasCopiedTitle: "Link copied",
    },
    image: {
      rules: "Rules for use of image:",
    },
    images: {
      heading: "How to reuse images",
      description: "Remember to copy the text to be attached to the image where you use it.",
      rules: "Rules for use of image",
      itemImage: {
        ariaLabel: "Open image in new window",
        zoomImageButtonLabel: "Expand image",
        zoomOutImageButtonLabel: "Shrink image",
        expandByline: "Show byline",
        minimizeByline: "Hide byline",
      },
      licenseText: "This image has the license",
      restrictedUseText: "This image has",
    },
    text: {
      heading: "How to reuse the text",
      description: "Remember to refer to the source when reusing text.",
      rules: "Rules for use of text",
      published: "Published",
      licenseText: "This text has the license",
      restrictedUseText: "This text has",
    },
    audio: {
      heading: "How to reuse audio files",
      description: "Remember to copy the text to be attached to the audio where you use it.",
      rules: "Rules for use of audio file",
      licenseText: "This audio file has the license",
      restrictedUseText: "This audio file has",
    },
    podcast: {
      heading: "How to reuse podcasts",
      description: "Remember to copy the text to be attached to the podcast where you use it.",
      rules: "Rules for use of podcast",
      licenseText: "This podcast has the license",
      restrictedUseText: "This podcast has",
    },
    video: {
      heading: "How to reuse videos",
      description: "Remember to copy the text to be attached to the video where you use it.",
      rules: "Rules for use of video files",
      itemImage: {
        ariaLabel: "Open video in new window",
      },
      licenseText: "This video has the license",
      restrictedUseText: "This video has",
    },
    other: {
      heading: "How to reuse other content",
      description: "You will find guidelines for use of other content in the asset",
      itemImage: {
        ariaLabel: "Open in new window",
      },
    },
    h5p: {
      heading: "How to reuse H5P content",
      description: "You will find guidelines for use of H5P content in the asset",
      rules: "Rules for use of H5P",
      licenseText: "This interactive task (H5P) is licensed",
      restrictedUseText: "This interactive task (H5P) has",
    },
    concept: {
      heading: "How to reuse concept content",
      description: "Remember that built-in content might have a different license than the explanation text",
      rules: "Rules for use of concept",
      embedlink: {
        heading: "How to show the concept in other content",
        description: "This url shows the concept without menu and footer",
        copyTitle: "Copy embed link",
        hasCopiedTitle: "Embed link copied",
      },
      licenseText: "This concept has the license",
      restrictedUseText: "This concept has",
    },
    gloss: {
      heading: "How to reuse gloss content",
      description: "Remember that built-in content might have a different license than the gloss text",
      rules: "Rules for use of gloss",
      showOrHideExamples: "Show or hide examples",
      embedlink: {
        heading: "How to show the gloss in other content",
        description: "This url shows the gloss without menu and footer",
        copyTitle: "Copy embed link",
        hasCopiedTitle: "Embed link copied",
      },
      licenseText: "This gloss has the license",
      restrictedUseText: "This gloss has",
    },
    files: {
      heading: "How to reuse files",
      description: "Remember to copy the text to be attached to the file where you use it.",
      rules: "Rules for use of file",
      itemImage: {
        ariaLabel: "Open video in new window",
      },
    },
    copyTitle: "Copy source reference",
    embed: "Embed",
    embedCopied: "Copied embed code!",
    copyText: {
      now: "now",
      podcast: "podcast",
      by: "by",
      internet: "[Internet]. ",
      noTitle: "No title",
      downloadedFrom: "Downloaded from: ",
      readDate: "Read: ",
    },
    hasCopiedTitle: "Copied!",
    download: "Download",
    openLink: "Open in new tab",
    processed: "The content has been processed",
  },
  errorMessage: {
    title: "Oops, something went wrong",
    description: "Sorry, an error occurred.",
    back: "Go back",
    goToFrontPage: "Go to frontpage",
  },
  figure: {
    button: {
      alternative: "Switch to visually interpreted video",
      original: "Switch to original video",
    },
  },
  contentTypes: {
    all: "All",
    article: "Article",
    subject: "Subject",
    "topic-article": "Topic article",
    learningpath: "Learning path",
    "learning-path": "Learning path",
    "subject-material": "Subject material",
    "tasks-and-activities": "Task and activities",
    "source-material": "Source material",
    "assessment-resources": "Assessment resource",
    topic: "Topic",
    multidisciplinary: "Multidisciplinary case",
    image: "Image",
    concept: "Concept",
    audio: "Audio",
    podcast: "Podcast",
    h5p: "H5P",
    video: "Video",
    missing: "Unknown",
    external: "External",
    gloss: "Gloss",
    programme: "Programme",
    "podcast-series": "Podcast series",
    "frontpage-article": "About NDLA article",
  },
  languages: {
    nb: "Norwegian Bokmål",
    nn: "Norwegian Nynorsk",
    en: "English",
    fr: "French",
    de: "German",
    se: "Northern Sami",
    sma: "Southern Sami",
    es: "Spanish",
    zh: "Chinese",
    ukr: "Ukranian",
    unknown: "Unknown",
    prefixChangeLanguage: "Choose language",
  },
  breadcrumb: {
    toFrontpage: "NDLA frontpage",
    breadcrumb: "Breadcrumb",
  },
  codeBlock: {
    copiedCode: "Copied code",
    copyCode: "Copy code",
  },
  cancel: "Cancel",
  close: "Close",
  loading: "Loading",
  title: "Title",
  save: "Save",
  email: "Email",
  finished: "Finished",
  audio: {
    play: "Play",
    pause: "Pause",
    progressBar: "Progress bar",
    valueText: "{{start}} of {{end}}",
    controls: {
      forward15sec: "Forward 15 seconds",
      rewind15sec: "Rewind 15 seconds",
      selectSpeed: "Choose speed",
      adjustVolume: "Adjust volume",
    },
    textVersion: {
      heading: "Text version",
      close: "Close text version",
    },
    readMoreDescriptionLabel: "Show more",
    readLessDescriptionLabel: "Show less",
  },
  source: "Source",
  related: {
    title: "Related content",
    linkInfo: "Web page at",
    showMore: "Show more related content",
    showLess: "Show less",
  },
  download: "Download file: ",
  factbox: {
    open: "Open fact box",
    close: "Close fact box",
  },
  embed: {
    linkError: "Failed to show link.",
    unsupported: `Embed {{type}} not supported.`,
    embedError: `An error occurred while loading the {{type}}. Try reloading the page.`,
    type: {
      image: "Image",
      video: "Video",
      audio: "Audio",
      podcast: "Podcast",
      concept: "Concept",
      h5p: "H5P",
      external: "External resource",
      gloss: "Gloss",
      copyright: "Text",
      code: "Code block",
      disclaimer: "Accessibility warning",
    },
  },
  uuDisclaimer: { title: "Accessibility" },
  gloss: {
    examples: "Examples",
    showExamples: "Show examples",
    wordClass: "Word class",
    play: "Play gloss",
    transcriptions: {
      traditional: "Traditional spelling",
      pinyin: "Pinyin",
    },
  },
  wordClass: {
    [wordClass.wordClass.adjective]: "Adjective",
    [wordClass.wordClass.adverb]: "Adverb",
    [wordClass.wordClass.properNoun]: "Proper Noun",
    [wordClass.wordClass.auxiliary]: "Auxiliary",
    [wordClass.wordClass.complement]: "Complement",
    [wordClass.wordClass.conjunction]: "Conjunction",
    [wordClass.wordClass.coverb]: "Coverb",
    [wordClass.wordClass.determiner]: "Determiner",
    [wordClass.wordClass.interjection]: "Interjection",
    [wordClass.wordClass.quantifier]: "Quantifier",
    [wordClass.wordClass.marker]: "Marker",
    [wordClass.wordClass.modalVerb]: "Modal Verb",
    [wordClass.wordClass.measureWord]: "Measure Word",
    [wordClass.wordClass.noun]: "Noun",
    [wordClass.wordClass["noun-zh"]]: "Noun",
    [wordClass.wordClass.nounPhrase]: "Noun Phrase",
    [wordClass.wordClass.onomatopoeia]: "Onomatopoeia",
    [wordClass.wordClass.particle]: "Particle",
    [wordClass.wordClass.demonstrative]: "Demonstrative",
    [wordClass.wordClass.personalPronoun]: "Personal Pronoun",
    [wordClass.wordClass.preposition]: "Preposition",
    [wordClass.wordClass.pronoun]: "Pronoun",
    [wordClass.wordClass.questionWord]: "Question Word",
    [wordClass.wordClass.locationWord]: "Location Word",
    [wordClass.wordClass.suffix]: "Suffix",
    [wordClass.wordClass.numeral]: "Numeral",
    [wordClass.wordClass.timeWord]: "Time word",
    [wordClass.wordClass.timeExpression]: "Time Expression",
    [wordClass.wordClass.stativeVerb]: "Stative Verb",
    [wordClass.wordClass.subordinatingConjunction]: "Subordinating Conjunction",
    [wordClass.wordClass.exclamationWord]: "Exclamation Word",
    [wordClass.wordClass.expression]: "Expression",
    [wordClass.wordClass.verb]: "Verb",
    [wordClass.wordClass.verbComplement]: "Verb-Complement",
    [wordClass.wordClass.verbObject]: "Verb-Object",
  },
  login: "Log in",
  component: {
    tagsInput: {
      clearTriggerLabel: "Clear all tags",
      deleteTagTriggerLabel: "Remove tag {{tag}}",
      tagAdded: "Added tag {{tag}}",
      tagsPasted: "Pasted {{length}} tags",
      tagEdited: "Edited tag {{tag}}. Press enter to save, or escape to cancel.",
      tagUpdated: "Tag updated to {{tag}}",
      tagDeleted: "Tag {{tag}} deleted",
      tagSelected: "Tag {{tag}} selected. Press enter to edit. Press backspace or delete to delete.",
    },
    combobox: {
      triggerLabel: "Show suggestions",
      clearTriggerLabel: "Clear selection",
    },
    pagination: {
      rootLabel: "Pagination",
      prevTriggerLabel: "Previous page",
      nextTriggerLabel: "Next page",
      lastPage: "Last page, page {{page}}",
      page: "Page {{page}}",
    },
    imageSearch: {
      searchPlaceholder: "Search images",
      searchButtonTitle: "Search",
      imagePreview: {
        creatorsLabel: "Image",
        license: "License",
        caption: "Caption",
        altText: "Alt-text",
        modelRelease: "Model released",
        tags: "Tags",
        checkboxLabel: "Set as meta image",
        close: "Close",
        useImageTitle: "Use image",
      },
    },
    audioSearch: {
      searchPlaceholder: "Search in audio files",
      searchButtonTitle: "Search",
      useAudio: "Chose audio",
      noResults: "No audio files found",
    },
    videoSearch: {
      searchPlaceholder: "Search videos",
      searchButtonTitle: "Search",
      loadMoreVideos: "Load more videos",
      noResults: "No videos found",
      addVideo: "Use video",
      previewVideo: "Preview",
      is360Video: "VR video",
      close: "Lukk",
    },
  },
  richTextEditor: {
    tooltip: {
      bold: "Bold ({{shortcut}})",
      code: "Code ({{shortcut}})",
      sub: "Subscript ({{shortcut}})",
      sup: "Superscript ({{shortcut}})",
      underlined: "Underlined ({{shortcut}})",
      italic: "Italic ({{shortcut}})",
      "numbered-list": "Numbered list ({{shortcut}})",
      "letter-list": "Alphabetical list ({{shortcut}})",
      "bulleted-list": "Bulleted list ({{shortcut}})",
      heading: "Heading {{level}} ({{shortcut}})",
      paragraph: "Paragraph ({{shortcut}})",
      section: "Section ({{shortcut}})",
      link: "Link ({{shortcut}})",
    },
  },
};

export default messages;
