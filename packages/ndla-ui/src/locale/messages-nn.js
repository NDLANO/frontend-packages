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
    welcomePage: `Framsida${titleTemplate}`,
    topicPage: 'Emne',
    subjectsPage: `Velg fag${titleTemplate}`,
    searchPage: `Søk${titleTemplate}`,
    notFound: `Sida finst ikkje${titleTemplate}`,
  },
  newsLetter: {
    heading: 'Nyheitsbrev',
    description: 'Hald deg oppdatert. Abonnér på siste nytt frå NDLA.',
    mainLinkName: 'Meld deg på',
    iconLinkName: 'Meld deg på nyheitsbrev',
  },
  askNDLA: 'Spør NDLA',
  articlePage: {
    errorDescription: 'Orsak, ein feil oppstod under lasting av ressursen.',
    error404Description:
      'Orsak, vi kunne ikkje finne ressursen du leiter etter.',
  },
  notFoundPage: {
    errorDescription: 'Orsak, vi fann ikkje sida du prøvde å kome til.',
  },
  lti: {
    embed: 'Sett inn',
    notSupported:
      'Det fungerte ikkje å sette inn innhaldet automatisk. Kopier kildekoden under for å sette inn på din side.',
  },
  searchPage: {
    noHits: 'Ingen artiklar samsvarte med søket ditt på: {query}',
    search: 'Søk',
    abilities: 'Egenskaper',
    close: 'Lukk',
    searchFieldPlaceholder:
      'Søk i fagstoff, oppgåver og aktivitetar eller læringsstiar',
    label: {
      content: 'Innhald:',
      contentTypes: 'Innhaldstypar:',
      levels: 'Nivå:',
      languageFilter: 'Språk:',
      subjects: 'Fag:',
      noFilter: 'Ingen filter valde',
      createdBy: 'Laga av:',
    },
    showLabel: {
      contentTypes: 'Fleire innhaldstypar',
      levels: 'Fleire nivå',
      languageFilter: 'Fleire språk',
      subjects: 'Bytt fag',
    },
    hideLabel: {
      contentTypes: 'Færre innhaldstypar',
      levels: 'Færre nivå',
      languageFilter: 'Færre språk',
      subjects: 'Færre fag',
    },
    searchField: {
      contentTypeResultShowMoreLabel: 'Sjå fleire resultat',
      contentTypeResultShowLessLabel: 'Sjå færre resultat',
      allResultButtonText: 'Vis alle søketreff',
      searchResultHeading: 'Forslag:',
      contentTypeResultNoHit: 'Ingen treff',
    },
    searchResultMessages: {
      searchStringLabel: 'Du søkte på:',
      subHeading: '{totalCount} treff i NDLA',
    },
    searchResultListMessages: {
      subjectsLabel: 'Opne i fag:',
      noResultHeading: 'Hmm, ikkje noko innhald ...',
      noResultDescription:
        'Vi har dessverre ikkje noko å tilby her. Om du vil foreslå noko innhald til dette området, kan du bruke Spør NDLA som du finn nede til høgre på skjermen.',
    },
    searchPageMessages: {
      filterHeading: 'Filter',
      resultHeading: '{totalCount} treff i NDLA',
      resultHeadingByAuthor: '{totalCount} artiklar skrevet av {author}',
      narrowScreenFilterHeading: '{totalCount} treff på «{query}»',
      dropdownBtnLabel: 'Fleire innhaldstypar',
    },
    searchFilterMessages: {
      backButton: 'Tilbake til filter',
      filterLabel: 'Vel fag',
      confirmButton: 'Oppdater filter',
      hasValuesButtonText: 'Fleire fag',
      noValuesButtonText: 'Filtrer på fag',
      useFilter: 'Bruk filter',
      closeFilter: 'Lukk filter',
      coreRelevance: 'Kjernestoff',
      supplementaryRelevance: 'Tilleggsstoff',
    },
  },
  subjectPage: {
    errorDescription: 'Orsak, ein feil oppstod under lasting av emnene.',
    tabs: {
      topics: 'Emne',
    },
    subjectShortcuts: {
      heading: 'Gå direkte til',
      showMore: 'Vis fleire',
      showLess: 'Vis færre',
    },
    mostRead: {
      heading: 'Mest brukt',
    },
    editorsChoices: {
      heading: 'Litt forskjellig frå faget',
      unknown: 'Ukjend',
    },
    subjectArchive: {
      heading: 'Aktuelt',
      archive: 'Arkiv',
      close: 'Lukk',
    },
    subjectFilter: {
      label: 'Filter',
    },
    newContent: {
      heading: 'Nytt innhald',
    },
    subjectIsBeta: {
      iconLabel: 'i arbeid',
      dialogHeader: '{title} er under arbeid.',
      dialogText: 'Du kan lese meir om kva dette betyr på',
    },
  },
  subjectsPage: {
    errorDescription: 'Orsak, ein feil oppstod under lasting av faga.',
    chooseSubject: 'Vel fag',
  },
  topicPage: {
    articleErrorDescription:
      'Orsak, ein feil oppstod under lasting av emneskildringa.',
    topic: 'EMNE',
    topics: 'Emner',
  },
  welcomePage: {
    search: 'Søk',
    highlighted: 'Aktuelt',
    heading: {
      heading: 'Nasjonal digital læringsarena',
      searchFieldPlaceholder: 'Søk etter f.eks emne, lærestoff, nykelord...',
      messages: {
        searchFieldTitle: 'Søk',
        menuButton: 'Meny',
      },
      links: {
        aboutNDLA: 'Om NDLA',
        changeLanguage: 'Skift språk',
      },
    },
    socialMedia: {
      heading: 'Følg oss',
      description:
        'NDLA har mange facebook- og twitterkontoar. Finn den som passar for deg, og følg oss!',
      mainLink: {
        name: 'Følg oss',
      },
    },
    aboutNDLA: {
      heading: 'Om NDLA',
      description:
        'NDLAs visjon er å lage gode, opne digitale læremiddel for alle fag i videregående opplæring og støtte opp om elevar og lærarar i aktivt og deltakende læringsarbeid.',
      mainLink: {
        name: 'Meir om NDLA',
      },
    },
    category: {
      fellesfag: 'Fellesfag',
      yrkesfag: 'Yrkesfag',
      studiespesialiserende: 'Studiespesialisering',
      imported: 'Spoltefag',
    },
    film: {
      header: 'NDLA film',
      text:
        'NDLA film er ei teneste i samarbeid med Norgesfilm. Denne tenesta lar deg sjå ei rekkje spelefilmar, kortfilmar, dokumentarar og seriar. Du kan òg sjå undervisningsfilm og filmklipp. Velkomen inn i filmen si verd!',
      textShort: 'Velkommen inn i filmens verden!',
      linkLabel: 'Gå til NDLA film',
    },
    errorDescription: 'Orsak, ein feil oppstod under lasting av faga.',
  },
  meta: {
    description:
      'Kvalitetssikra fritt tilgjengelege nettbaserte læremiddel for videregåande opplæring',
  },
  masthead: {
    menu: {
      close: 'Lukk',
      goTo: 'Gå til',
      search: 'Søk',
      subjectOverview: 'Alle fag',
      title: 'Meny',
      subjectPage: 'Fagforside',
      openFilter: 'Filter',
      useFilter: 'Bruk filter',
      closeFilter: 'Lukk filter',
      learningResourcesHeading: 'Læringsressurser',
      back: 'Tilbake',
      additionalFilterLabel: 'Vis tilleggsressursar',
      contentTypeResultsShowMore: {
        [contentTypes.SUBJECT_MATERIAL]: 'Vis meir fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]:
          'Vis fleire oppgåver og aktivitetar',
        [contentTypes.LEARNING_PATH]: 'Vis fleire læringsstier',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Vis fleire vurderingsressursar',
        [contentTypes.SOURCE_MATERIAL]: 'Vis fleire kjeldematerialer',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]:
          'Vis fleire eksterne læringsressursar',
      },
      contentTypeResultsShowLess: {
        [contentTypes.SUBJECT_MATERIAL]: 'Vis mindre fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]:
          'Vis færre oppgåver og aktivitetar',
        [contentTypes.LEARNING_PATH]: 'Vis færre læringsstier',
        [contentTypes.LEARNING_PATH]: 'Vis færre læringsstier',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Vis færre vurderingsressursar',
        [contentTypes.SOURCE_MATERIAL]: 'Vis færre kjeldematerialer',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]:
          'Vis færre eksterne læringsressursar',
      },
      contentTypeResultsNoHit: {
        [contentTypes.SUBJECT_MATERIAL]: 'Ikke noe fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'Ingen oppgåver',
        [contentTypes.LEARNING_PATH]: 'Ingen læringsstiar',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Ingen vurderingsressursar',
        [contentTypes.SOURCE_MATERIAL]: 'Ingen kjeldematerialer',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]:
          'Ingen eksterne læringsressursar',
      },
    },
  },
  logo: {
    altText: 'Nasjonal digital læringsarena',
  },
  resource: {
    errorDescription: 'Orsak, ein feil oppstod under lasting av emneressursar.',
    noCoreResourcesAvailableUnspecific:
      'Det er ikkje noko kjernestoff tilgjengeleg.',
    noCoreResourcesAvailable:
      'Det er ikkje noko kjernestoff tilgjengeleg for {name}.',
    toggleFilterLabel: 'Vis tilleggsressursar',
    activateAdditionalResources: 'Vis tilleggsressursar',
    label: 'Læringsressursar',
    shortcutButtonText: 'Lærestoff',
    tooltipCoreTopic: 'Kjernestoff er fagstoff',
    tooltipAdditionalTopic: 'Tilleggsstoff er fagstoff',
    additionalTooltip: 'Tilleggsstoff',
    shortcutsTooltip: 'Vis {count} artikler i dette emnet',
    dialogTooltip: 'Kva er kjernestoff og tilleggsstoff?',
    dialogHeading: 'Kjernestoff og tilleggsstoff',
    dialogText1:
      'Når du lærar deg kjernestoffet skaffar du deg den kompetansen som beskrives i læreplanen for faget.',
    dialogText2:
      'Tilleggsstoff er innhald i faget som du kan velje i tillegg til kjernestoffet. Gjennom tilleggsstoffet kan du fordjupe deg i et emne eller tilnærma deg emnet på en anna måte.',
    showLess: 'Vis mindre',
    showMore: 'Vis mer',
  },
  article: {
    lastUpdated: 'Sist oppdatert',
    edition: 'Utgåve',
    publisher: 'Utgjevar',
    closeLabel: 'Lukk',
    useContent: 'Bruk innhald',
    additionalLabel: 'Tilleggsstoff',
    urlContributionsLabel: 'Sjå kva {name} har bidratt med',
    urlAuthorLabel: 'Les meir om {name}',
    multipleAuthorsLabelAbbreviation: 'm. fl.',
    multipleAuthorsLabel: 'Rettshavarar:',
    multipleAuthorsLabelAria: 'Rettshavarar av artikkelen er {names}',
    multipleAuthorsLabelAriaConjunction: 'og',
    singleAuthorsLabelAria: 'Rettshavar av artikkelen er {name}',
  },
  competenceGoals: {
    title: 'Kompetansemål og læreplan',
    closeCompetenceGoals: 'Lukk kompetansemål',
    showCompetenceGoals: 'Vis kompetansemål',
    openCompentenceGoalsFilter: 'Filtrer kompetansemål',
    useCompentenceGoalsFilter: 'Bruk filter',
    closeCompentenceGoalsFilter: 'Lukk filter',
    competenceGoalsNarrowBackButton: 'Tilbake',
  },
  subject: {
    associatedTopics: 'Tilhørende emner',
  },
  license: {
    heading: 'Slik gjenbruker du innhald',
    learnMore: 'Lær meir om opne lisensar',
    copyTitle: 'Kopier referanse',
    hasCopiedTitle: 'Kopiert!',
    embed: 'Bygg inn',
    embedCopied: 'Kopierte innbyggingskode!',
    download: 'Last ned',
    tabs: {
      text: 'Tekst',
      images: 'Bilde',
      audio: 'Lyd',
      video: 'Video',
      files: 'Filer',
      other: 'Anna innhald',
    },
    images: {
      heading: 'Slik bruker du bilder frå artikkelen',
      description:
        'Hugs å kopiera teksten som skal leggjast ved bildet der du bruker det.',
      rules: 'Regler for bruk av bildet:',
      itemImage: {
        ariaLabel: 'Opne bilde i eit nytt vindauge',
        zoomImageButtonLabel: 'Forstørr bilde',
        zoomOutImageButtonLabel: 'Forminsk bilde',
      },
      source: 'Kjelde',
      title: 'Tittel',
    },
    text: {
      heading: 'Slik bruker du tekst frå artikkelen',
      description: 'Hugs å vise til kjelda når du gjenbruker tekst.',
      rules: 'Reglar for bruk av teksten:',
      published: 'Publiseringsdato',
    },
    audio: {
      heading: 'Slik bruker du lydfiler',
      description:
        'Hugs å kopiera teksten som skal leggjast ved lydfila der du bruker ho.',
      rules: 'Regler for bruk av lydfila:',
    },
    video: {
      heading: 'Slik bruker du video frå artikkelen',
      description:
        'Hugs å kopiera teksten som skal leggjast ved videoen der du bruker han.',
      rules: 'Regler for bruk av videoen:',
      itemImage: {
        ariaLabel: 'Opne video i eit nytt vindauge',
      },
    },
    other: {
      heading: 'Slik bruker du annet innhold frå artikkelen',
      description:
        'Du finner retningslinjene for bruk av innholdet i innholdselementet.',
      itemImage: {
        ariaLabel: 'Åpne i nytt vindauge',
      },
    },
    files: {
      heading: 'Slik bruker du filer frå artikkelen',
      description:
        'Husk å kopier teksten som skal legges ved filen der du bruker den.',
      rules: 'Regler for bruk av filen:',
      itemImage: {
        ariaLabel: 'Åpne i nytt vindauge',
      },
    },
    creditType: {
      originator: 'Opphavsmann',
      authorDesc: 'Denne artikkelen er laget av fleire opphavsmenn',
      photographer: 'Fotograf',
      artist: 'Kunstnar',
      editorial: 'Redaksjonelt',
      writer: 'Forfattar',
      scriptwriter: 'Manusforfattar',
      reader: 'Innlesar',
      translator: 'Omsetjar',
      director: 'Regissør',
      illustrator: 'Illustratør',
      cowriter: 'Medforfatter',
      composer: 'Komponist',
      processor: 'Tilarbeidar',
      facilitator: 'Tilretteleggjar',
      linguistic: 'Språkleg',
      idea: 'Idé',
      compiler: 'Sammenstillar',
      correction: 'Korrektur',
      rightsholder: 'Rettshaver',
      publisher: 'Forlag',
      distributor: 'Distributør',
      supplier: 'Leverandør',
    },
  },
  errorMessage: {
    title: 'Ops, noko gjekk gale',
    description: 'Orsak, ein feil oppstod.',
    linksTitle: 'Kjem igang:',
    back: 'Tilbake',
    goToFrontPage: 'Gå til forsida',
  },
  footer: {
    aboutNDLA: 'Om NDLA',
    selectLanguage: 'Vel språk (language): ',
    footerInfo: 'Nettstaden er utarbeida av NDLA med open kjeldekode.',
    footerEditiorInChief: 'Ansvarleg redaktør: ',
    footerManagingEditor: 'Utgåveansvarleg: ',
  },
  contentTypes: {
    all: 'Alle',
    subject: 'Emne',
    'topic-article': 'Emne',
    'learning-path': 'Læringssti',
    'subject-material': 'Fagstoff',
    'tasks-and-activities': 'Oppgåver og aktivitetar',
    'external-learning-resources': 'Ekstern læringsressurs',
    'source-material': 'Kjeldemateriale',
    'assessment-resources': 'Vurderingsressurs',
  },
  modal: {
    closeModal: 'Lukk',
  },
  languages: {
    nb: 'Bokmål',
    nn: 'Nynorsk',
    en: 'Engelsk',
    fr: 'Fransk',
    de: 'Tysk',
    se: 'Samisk',
    es: 'Spansk',
    zh: 'Kinesisk',
    unknown: 'Ukjent',
  },
  breadcrumb: {
    toFrontpage: 'Til framsida',
  },
  notions: {
    closeNotion: 'Lukk',
  },
};

export default messages;
