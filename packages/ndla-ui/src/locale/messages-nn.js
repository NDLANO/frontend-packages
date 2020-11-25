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
    description: 'Hald deg oppdatert. Abonner på siste nytt frå NDLA.',
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
    title: 'Sida finst ikkje',
    errorDescription: 'Orsak, vi fann ikkje sida du prøvde å kome til.',
  },
  movedResourcePage: {
    title: 'Sida har flytta, men du kan finne den her:',
  },
  lti: {
    embed: 'Sett inn',
    notSupported:
      'Det fungerte ikkje å setje inn innhaldet automatisk. Kopier kjeldekoden under for å setje han inn på sida di.',
  },
  searchPage: {
    noHits: 'Ingen artiklar samsvarte med søket ditt på: {query}',
    search: 'Søk',
    abilities: 'Eigenskapar',
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
      contentTypeResultNoHit: 'Ingen treff på søk ...',
    },
    searchResultMessages: {
      searchStringLabel: 'Du søkte på:',
      subHeading: '{totalCount} treff i NDLA',
    },
    searchResultListMessages: {
      subjectsLabel: 'Opne i fag:',
      noResultHeading: 'Hmm, ikkje noko innhald ...',
      noResultDescription:
        'Vi har dessverre ikkje noko å tilby her. Om du vil føreslå noko innhald til dette området, kan du bruke Spør NDLA som du finn nede til høgre på skjermen.',
    },
    searchPageMessages: {
      filterHeading: 'Filter',
      resultHeading: '{totalCount} treff i NDLA',
      resultHeadingByAuthor: '{totalCount} artiklar skrive av {author}',
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
      removeFilter: 'Fjern filter {filterName}',
      closeFilter: 'Lukk filter',
      coreRelevance: 'Kjernestoff',
      supplementaryRelevance: 'Tilleggsstoff',
    },
    resultType: {
      showing: 'Viser {fromCount} til {toCount} av {totalCount}',
      showMore: 'Vis meir',
      showAll: 'Vis alle',
      toSubjectPageLabel: 'Gå til fagsida',
      all: 'Alle',
      hits: '{count} Treff',
      showingSearchPhrase: 'Viser resultat for',
      searchPhraseSuggestion: 'Søk i staden for',
      notionLabels: 'Brukes i',
    },
  },
  subjectPage: {
    errorDescription: 'Orsak, ein feil oppstod under lasting av emna.',
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
    topics: 'Emne',
  },
  welcomePage: {
    search: 'Søk',
    searchDisclaimer:
      'Vi jobbar stadig med å forbetre oss! Har du kommentarar til søket, blir vi glade om du legg dei inn i Spør NDLA nede i høgre hjørne.',
    resetSearch: 'Tøm søk',
    closeSearch: 'Lukk søk',
    searchAllInfo: 'Sjå alle treff på søk',
    topicsConjunction: 'og',
    highlighted: 'Aktuelt',
    heading: {
      heading: 'Nasjonal digital læringsarena',
      searchFieldPlaceholder: 'Kva vil du lære om i dag?',
      messages: {
        searchFieldTitle: 'Søk',
        menuButton: 'Innhald',
      },
      links: {
        aboutNDLA: 'Om NDLA',
        changeLanguage: 'Skift språk',
      },
    },
    socialMedia: {
      heading: 'Følg oss',
      description:
        'NDLA har mange Facebook- og Twitter-kontoar. Finn den som passar for deg, og følg oss!',
      mainLink: {
        name: 'Følg oss',
      },
    },
    category: {
      fellesfag: 'Fellesfag',
      yrkesfag: 'Yrkesfag',
      studiespesialiserende: 'Studieførebuande',
      imported: 'Spolte fag',
      heading: 'Kva lærer du?',
    },
    film: {
      header: 'NDLA film',
      text:
        'NDLA film er ei teneste i samarbeid med Norgesfilm. Denne tenesta lar deg sjå ei rekkje spelefilmar, kortfilmar, dokumentarar og seriar. Du kan òg sjå undervisningsfilm og filmklipp. Velkomen inn i filmen si verd!',
      textShort: 'Velkomen inn i filmen si verd!',
      linkLabel: 'Gå til NDLA film',
    },
    blog: 'Frå bloggen',
    errorDescription: 'Orsak, ein feil oppstod under lasting av faga.',
  },
  meta: {
    description:
      'Kvalitetssikra fritt tilgjengelege nettbaserte læremiddel for vidaregåande opplæring',
    keywords:
      'læremiddel,fag,skole,skule,vidaregåande,lærling,pensum,fagstoff, ',
  },
  masthead: {
    skipToContent: 'Hopp til innhald',
    menu: {
      close: 'Lukk',
      goTo: 'Gå til',
      search: 'Søk',
      subjectOverview: 'Alle fag',
      title: 'Innhald',
      subjectPage: 'Fagframside',
      backToSubjectFrontpage: 'Tilbake til fagframsida',
      openFilter: 'Filter',
      useFilter: 'Bruk filter',
      closeFilter: 'Lukk filter',
      learningResourcesHeading: 'Læringsressursar',
      back: 'Tilbake',
      additionalFilterLabel: 'Tilleggsressursar',
      contentTypeResultsShowMore: {
        [contentTypes.SUBJECT_MATERIAL]: 'Vis meir fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]:
          'Vis fleire oppgåver og aktivitetar',
        [contentTypes.LEARNING_PATH]: 'Vis fleire læringsstiar',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Vis fleire vurderingsressursar',
        [contentTypes.SOURCE_MATERIAL]: 'Vis fleire kjeldemateriale',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]:
          'Vis fleire eksterne læringsressursar',
      },
      contentTypeResultsShowLess: {
        [contentTypes.SUBJECT_MATERIAL]: 'Vis mindre fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]:
          'Vis færre oppgåver og aktivitetar',
        [contentTypes.LEARNING_PATH]: 'Vis færre læringsstiar',
        [contentTypes.LEARNING_PATH]: 'Vis færre læringsstiar',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Vis færre vurderingsressursar',
        [contentTypes.SOURCE_MATERIAL]: 'Vis færre kjeldemateriale',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]:
          'Vis færre eksterne læringsressursar',
      },
      contentTypeResultsNoHit: {
        [contentTypes.SUBJECT_MATERIAL]: 'Ikkje noko fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'Ingen oppgåver',
        [contentTypes.LEARNING_PATH]: 'Ingen læringsstiar',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Ingen vurderingsressursar',
        [contentTypes.SOURCE_MATERIAL]: 'Ingen kjeldemateriale',
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
    toggleFilterLabel: 'Tilleggsressursar',
    activateAdditionalResources: 'Tilleggsressursar',
    label: 'Læringsressursar',
    shortcutButtonText: 'Lærestoff',
    tooltipCoreTopic: 'Kjernestoff',
    tooltipAdditionalTopic: 'Tilleggsstoff',
    additionalTooltip: 'Tilleggsstoff',
    shortcutsTooltip: 'Vis {count} artiklar i dette emnet',
    dialogTooltip: 'Kva er kjernestoff og tilleggsstoff?',
    dialogHeading: 'Kjernestoff og tilleggsstoff',
    dialogText1:
      'Når du lærer deg kjernestoffet, får du den kompetansen som blir beskrive i læreplanen for faget.',
    dialogText2:
      'Tilleggsstoff er innhald du kan velje i tillegg til kjernestoffet. Gjennom dette kan du fordjupe deg i eit emne eller nærme deg emnet på ein annan måte.',
    showLess: 'Vis mindre',
    showMore: 'Vis meir',
    youAreHere: 'Du er her',
  },
  article: {
    lastUpdated: 'Sist oppdatert',
    edition: 'Utgåve',
    publisher: 'Utgjevar',
    closeLabel: 'Lukk',
    useContent: 'Reglar for bruk',
    additionalLabel: 'Tilleggsstoff',
    urlContributionsLabel: 'Sjå kva {name} har bidratt med',
    urlAuthorLabel: 'Les meir om {name}',
    multipleAuthorsLabelAbbreviation: 'm. fl.',
    multipleAuthorsLabel: 'Tekst:',
    multipleAuthorsLabelAria: 'Tekst: {names}',
    multipleAuthorsLabelAriaConjunction: 'og',
    singleAuthorsLabel: 'Tekst:',
    singleAuthorsLabelAria: 'Tekst: {name}',
    copyPageLink: 'Kopier lenke til sida',
    copyPageLinkCopied: 'Lenke kopiert',
    conjunction: 'og',
    supplierLabel: 'Rettshavar:',
    multipleSuppliersLabel: 'Rettshavarar:',
  },
  competenceGoals: {
    title: 'Kompetansemål og læreplan',
    closeCompetenceGoals: 'Lukk kompetansemål',
    showCompetenceGoals: 'Vis kompetansemål',
    openCompentenceGoalsFilter: 'Filtrer kompetansemål',
    useCompentenceGoalsFilter: 'Bruk filter',
    closeCompentenceGoalsFilter: 'Lukk filter',
    competenceGoalsNarrowBackButton: 'Tilbake',
    competenceGoalResourceSearchText:
      'Søk på alle ressursar som passar til dette kompetansemålet',
    competenceGoalShowExtra: 'Vis støtte til læreplanen',
    competenceGoalCloseExtra: 'Skjul støtte til læreplanen',
    competenceCoreLabel: 'Kjerneelement',
    competenceTopicLabel: 'Tverrfaglege tema',
    competenceSubjectLabel: 'Fag',
    competenceCoreSearchText: 'Søk ressursar for kjerneelementet',
    competenceTopicSearchText: 'Søk ressursar for tema',
    competenceSubjectSearchText: 'Gå til fagsiden',
    competenceGoalClose: 'Lukk',
    competenceGoalTitle: 'Målet er at eleven skal kunna:',
    competenceTabLK06label: 'Kompetansemål (LK06)',
    competenceTabLK20label: 'Kompetansemål (LK20)',
    competenceTabCorelabel: 'Kjerneelement',
  },
  subject: {
    associatedTopics: 'Tilhøyrande emne',
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
      images: 'Bilete',
      audio: 'Lyd',
      video: 'Video',
      h5p: 'H5P',
      files: 'Filer',
      embedlink: 'Innbyggingslenke',
      other: 'Anna innhald',
      concept: 'Forklaringar',
    },
    embedlink: {
      heading: 'Slik viser du artikkelen i anna innhald',
      description:
        'Denne lenka viser artikkelen utan kontekst(meny og botntekst)',
      copyTitle: 'Kopier lenke',
      hasCopiedTitle: 'Lenke kopiert',
    },
    images: {
      heading: 'Slik bruker du bilete frå artikkelen',
      description:
        'Hugs å kopiere teksten som skal leggjast ved biletet der du bruker det.',
      rules: 'Reglar for bruk av biletet:',
      itemImage: {
        ariaLabel: 'Opne bilete i eit nytt vindauge',
        zoomImageButtonLabel: 'Forstørr bilete',
        zoomOutImageButtonLabel: 'Forminsk bilete',
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
      rules: 'Reglar for bruk av lydfila:',
    },
    video: {
      heading: 'Slik bruker du video frå artikkelen',
      description:
        'Hugs å kopiera teksten som skal leggjast ved videoen der du bruker han.',
      rules: 'Reglar for bruk av videoen:',
      itemImage: {
        ariaLabel: 'Opne video i eit nytt vindauge',
      },
    },
    other: {
      heading: 'Slik bruker du anna innhald frå artikkelen',
      description:
        'Du finn retningslinjene for bruk av innhaldet i innhaldselementet.',
      itemImage: {
        ariaLabel: 'Opne i nytt vindauge',
      },
    },
    h5p: {
      heading: 'Slik bruker du H5P-innhald frå artikkelen',
      description:
        'Du finn retningslinjene for bruk av innhaldet i H5P-elementet.',
      rules: 'Reglar for bruk av H5P:',
    },
    concept: {
      heading: 'Slik bruker du forklaringar frå artikkelen',
      description:
        'Du finn retningslinjene for bruk av innhaldet i forklaring-elementet',
      rules: 'Reglar for bruk av forklaring:',
      title: 'Tittel',
    },
    files: {
      heading: 'Slik bruker du filer frå artikkelen',
      description:
        'Hugs å kopiere teksten som skal leggjast ved fila der du bruker ho.',
      rules: 'Regler for bruk av fila:',
      itemImage: {
        ariaLabel: 'Opne i nytt vindauge',
      },
    },
    creditType: {
      originator: 'Opphavar',
      authorDesc: 'Denne artikkelen er laga av fleire opphavarar',
      photographer: 'Fotograf',
      artist: 'Kunstnar',
      editorial: 'Redaksjonelt',
      writer: 'Forfattar',
      scriptwriter: 'Manusforfattar',
      reader: 'Innlesar',
      translator: 'Omsetjar',
      director: 'Regissør',
      illustrator: 'Illustratør',
      cowriter: 'Medforfattar',
      composer: 'Komponist',
      processor: 'Tilarbeidar',
      facilitator: 'Tilretteleggjar',
      linguistic: 'Språkleg',
      idea: 'Idé',
      compiler: 'Samanstillar',
      correction: 'Korrektur',
      rightsholder: 'Rettshavar',
      publisher: 'Forlag',
      distributor: 'Distributør',
      supplier: 'Leverandør',
    },
  },
  errorMessage: {
    title: 'Ops, noko gjekk gale',
    description: 'Orsak, ein feil oppstod.',
    linksTitle: 'Kom i gang:',
    back: 'Tilbake',
    goToFrontPage: 'Gå til framsida',
  },
  footer: {
    aboutNDLA: 'Om NDLA',
    selectLanguage: 'Vel språk (language): ',
    vision:
      'NDLA sin visjon er å lage gode, opne digitale læremiddel for alle faga i vidaregåande opplæring og støtte opp om elevar og lærarar i aktivt og deltakande læringsarbeid.',
    footerLinksHeader: 'Andre NDLA nettstader',
    footerInfo: 'Nettstaden er utarbeida av NDLA med open kjeldekode.',
    footerEditiorInChief: 'Ansvarleg redaktør: ',
    footerManagingEditor: 'Utgåveansvarleg: ',
    footerPrivacyLink: 'Personvernerklæring',
    socialMediaLinks: {
      facebook: 'NDLA på Facebook',
      facebookAria: 'Besøk NDLA på Facebook',
      newsletter: 'Meld deg på vårt nyheitsbrev',
      newsletterAria: 'Meld deg på vårt nyheitsbrev',
      youtube: 'NDLA på YouTube',
      youtubeAria: 'NDLA på YouTube',
      twitter: 'NDLA på Twitter',
      twitterAria: 'Besøk NDLA på Twitter',
      sharePage: 'Del denne sida',
      sharePageAria: 'Del denne sida',
    },
    ndlaLinks: {
      ndla: 'ndla.no',
      omNdla: 'Om NDLA',
      aboutNdla: 'About NDLA',
      blog: 'Fagblogg',
      tips: 'Tips til elevar',
      fyr: 'FYR-prosjektet',
      sharing: 'Delingsarena',
      vacancies: 'Ledige stillingar',
    },
  },
  contentTypes: {
    all: 'Alle',
    subject: 'Fag',
    'topic-article': 'Emne',
    'learning-path': 'Læringssti',
    'subject-material': 'Fagstoff',
    'tasks-and-activities': 'Oppgåver og aktivitetar',
    'external-learning-resources': 'Ekstern læringsressurs',
    'source-material': 'Kjeldemateriale',
    'assessment-resources': 'Vurderingsressurs',
    topic: 'Emne',
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
    prefixChangeLanguage: 'Vel målform',
  },
  changeLanguage: {
    nb: 'Endre språk til bokmål',
    nn: 'Endre språk til nynorsk',
    en: 'Change language to English',
  },
  currentLanguageText: {
    nb: 'Sidene blir viste på bokmål',
    nn: 'Sidene blir viste på nynorsk',
    en:
      'Not all pages are available in English. These will be shown in Norwegian',
  },
  breadcrumb: {
    toFrontpage: 'NDLA framside',
    youAreHere: 'Du er her',
  },
  listview: {
    search: {
      placeholder: 'Søk',
    },
    filters: {
      subject: {
        useFilter: 'Bruk filter',
        openFilter: 'Velg fag',
        closeFilter: 'Lukk filter',
      },
      category: {
        useFilter: 'Bruk filter',
        openFilter: 'Velg liste',
        closeFilter: 'Lukk filter',
      },
      default: {
        useFilter: 'Bruk filter',
        openFilter: 'Filtrer',
        closeFilter: 'Lukk filter',
        heading: 'Filter',
      },
    },
    relatedLinks: {
      label: 'Tilknytta artiklar',
    },
    hits: '{count} treff',
  },
  notions: {
    closeNotion: 'Lukk',
  },
  carousel: {
    back: 'Bla tilbake',
    forward: 'Bla framover',
  },
  codeEditor: {
    title: 'LEGG TIL',
    subtitle: 'kodeeksempel',
    languageSelect: 'Velg kodespråk',
    save: 'Lagre',
    abort: 'Avbryt',
  },
  codeBlock: {
    copiedCode: 'Kode kopiert til utklippstavle',
    copyButton: 'Kopier kode',
    copyCode: 'Kopier kode til utklippstavle',
  },
  ndlaFilm: {
    slideBackwardsLabel: 'Scroll bakover',
    slideForwardsLabel: 'Scroll framover',
    movieMatchInCategory: 'Treff',
    loadingMovies: 'Hentar filmar...',
    subjectsInMovies: 'Emne i film',
    about: {
      heading: 'Om NDLA Film',
      more: 'Les meir om NDLA film',
      text:
        'NDLA film er ei nettbasert filmteneste for elevar og lærarar i vidaregåande skule. Her finn du spelefilmar, kortfilmar, dokumentarfilmar og TV-seriar.',
    },
    search: {
      placeholder: 'Søk på filmnamn',
      categoryFromNdla: 'Utval frå NDLA',
      chooseCategory: 'Vel filmkategori',
      subjectButton: 'Gå til emne',
    },
    editor: {
      slideshowHeader: 'Slideshow:',
      slideshowTitle: 'Filmar i slideshow',
      slideshowSubTitle: 'på framsida',
      movieGroupHeader: 'Film grupperingar:',
      addMovieToSlideshow: 'Legg til film i slideshow',
      addMovieToGroup: 'Legg til film i "{name}"',
      editMovieGroupName: 'Endre namna til filmgruppa',
      deleteMovieGroup: 'Slett "{name}"',
      moveMovieGroupUp: 'Flytt opp',
      moveMovieGroupDown: 'Flytt ned',
      changeOrder: 'Endre rekkjefølgje',
      removeMovieFromGroup: 'Ta vekk film frå gruppe',
      removeMovieFromSlideshow: 'Ta vekk film frå slideshow',
      createThemeGroup: 'Opprett gruppe',
      saveNameChanges: 'Lagre endringar',
      cancel: 'Avbryt',
      groupNamePlaceholder: 'Skriv namn på {lang}',
      editGroupTitle: 'Endre namn(a) på filmgruppa:',
      newGroupTitle: 'Kva skal gruppa heite?',
    },
  },
  filmfrontpage: {
    resourcetype: {
      documentary: 'Dokumentar',
      featureFilm: 'Spelefilm',
      series: 'TV-serie',
      shortFilm: 'Kortfilm',
      all: 'Alle filmar A-Å',
    },
    moreAboutNdlaFilm: {
      header: 'NDLA Film',
      firstParagraph:
        'Filmane i filmtenesta er henta frå norsk og internasjonal filmarv og er kopla mot læreplanar i fleire fag. Dei er valde av redaksjonane til NDLA i samarbeid med Norgesfilm AS.',
      secondParagraph:
        'Du kan sjå filmane om du er kopla til Internett via datamaskina, nettbrettet eller smarttelefonen din. Vi har gjort jobben med klarering av rettar og betaling. Alt du treng å gjere, er å trykke play.',
      thirdParagraph:
        'Filmane er copyrightmerka. Dei kan fritt spele dei av på ndla.no, men ikkje laste dei ned eller distribuere dei vidare i andre publikasjonar. Alle rettshavarar blir honorerte for dei avspelingane som blir gjort.',
      secondHeading: 'Bruk film i undervisninga',
      fourthParagraph:
        'Ein film fortel historier på måtar som engasjerer og rører oss. Film bruker nokre av dei mest effektive visuelle verkemidla som finst; levande bilete og lyd. Ein god film kan vise sider ved samtida og gi visjonar om framtida eller kommentere fortida. Difor kan film ofte gi oss betre forståing av hendingar, kulturmøte og historie enn ein fagtekst.',
      fifthParagraph:
        'Ved å sjå film blir elevane betre rusta til å lese filmspråket, slik at filmen får ein verdi ut over det reint underhaldningsmessige. Den generelle delen av læreplanen legg vekt på at elevane skal møte kunst og kulturformer som stimulerer, inspirerer eiga skaparevne, og fremjar etisk orienteringsevne og estetisk sans.',
      tipSectionPt1: 'Kom gjerne med tips, spørsmål eller filmønske på',
      tipSectionPt2: 'Facebook-sida',
      ariaLabel: 'Besøk Facebooksida til NDLA-film',
      tipSectionPt3: 'vår',
      ending: 'Vi ønskjer alle filmelskarar ei god og lærerik oppleving!',
    },
  },
  learningPath: {
    createLearningPathText:
      'Lag din eigen, kopier denne eller sjå fleire læringsstiar?',
    createLearningPathButtonText: 'Gå til stiar',
    lastUpdated: 'Sist oppdatert',
    youAreInALearningPath: 'Du er no inne i ein læringssti',
    readTime: '{hours} Skuletimar = {minutes} min',
    pageOf: 'av',
    readTimeHour: 'time',
    readTimeHour_plurals: 'timar',
    readTimeMinutesShort: 'min',
    lastStep: {
      heading: 'Siste steg i læringsstien',
      headingSmall:
        'Du er no på siste steget i læringsstien {learningPathName}',
      topicHeading: 'Gå til emne:',
      subjectHeading: 'Gå til faget:',
    },
    openMenuTooltip: 'Vis læringssti',
    mobileStepInfo: '{currentPage} av {totalPages}',
    nextArrow: 'Neste',
    previousArrow: 'Førre',
  },
  dropdown: {
    numberHits: `Søket gav {hits} treff`,
    searching: 'Søkjer...',
    create: 'Opprett ny',
    isSelectedItem: 'Lagt til',
  },
  blogPosts: {
    blog1: {
      text: 'Kva skjer med fagfornyinga på NDLA?',
      externalLink:
        'https://blogg.ndla.no/2019/11/hva-skjer-med-fagfornyelsen-pa-ndla/',
      linkText: 'Fagblogg',
      license: 'CC-BY-NC-SA-4.0',
      licenseAuthor: 'Scanpix.no',
    },
    blog2: {
      text: 'Nyttige tips til nettundervisning',
      externalLink: 'https://blogg.ndla.no/nettundervisning/',
      linkText: 'Fagblogg',
      license: 'CC-BY-NC-SA-4.0',
      licenseAuthor: 'Scanpix.no',
    },
  },
  editor: {
    versionHistory: {
      who: 'Kven',
      when: 'Når',
      message: 'Merknad',
      status: 'Status',
      inputLabel: 'Legg til merknad:',
      inputPlaceholder: 'Skriv inn merknad',
      buttonLabel: 'Lagre',
    },
  },
  createdBy: {
    content: 'Artikkelen',
    text: 'er utarbeida av',
  },
  fagfornyelse: {
    frontpage: {
      heading: 'Velkommen til sniktitt på Fagfornyelsen i NDLA',
      text:
        'Hausten 2020 vil dei nye læreplanane tre i kraft. I NDLA har vi starta dette arbeidet allereie. Dei innhaldsansvarlege i NDLA lagar kvar dag nye supre læringsressursar som er tilrettelagte for dei nye planane. På denne sida kan du sjå dei allereie nå.',
      blogHeading: 'Vil du vite meir?',
    },
    badge: {
      heading: 'Denne sida er tilrettelagt for fagfornyelsen 2020',
      text: 'Innhaldet er under arbeid. Ikkje på jakt etter dette?',
      linkText: 'Gå til ndla.no for dagens innhald',
    },
  },
  frontPageToolbox: {
    heading: 'Verktøykassa',
    text:
      'Har du lyst til å bli god til å presentere, eller vil du lære å studere smartare ved hjelp av riktig studieteknikk? Treng du råd om korleis du les mest mogleg effektivt til eksamen? I verktøykassa til NDLA finn du masse gode tips og råd!',
    linkText: 'Sjå alle tipsa i verktøykassa her',
    cursorText: 'Tips',
  },
  frontpageMultidisciplinarySubject: {
    heading: 'Tverrfaglege tema',
    text:
      'Dei tre tverrfaglege temaa i læreplanverket tek utgangspunkt i aktuelle samfunnsutfordringar som krev engasjement og innsats frå einskildmenneske og fellesskapet i lokalsamfunnet, nasjonalt og globalt.',
    linkText: 'Sjå casar for tverrfaglege tema',
    publicHealthTopic: 'Folkehelse og livsmeistring',
    democracyTopic: 'Demokrati og medborgarskap',
    sustainableTopic: 'Bærekraftig utvikling',
    cursorText: 'Nyheit',
  },
  frontpageMenu: {
    program: 'Utdanningsprogram',
    allsubjects: 'Alle fag',
    cursorText: 'Finn lærestoff, oppgåver, filmar m.m.',
  },
  navigation: {
    showLongerDescription: 'Vis meir',
    showShorterDescription: 'Vis mindre',
    topics: 'Emne',
    additionalTopic: 'Tilleggsemne',
    additionalTopics: 'Tilleggsemne',
    loadingText: 'Laster emne',
  },
  multidisciplinarySubject: {
    subjectsLinksDescription: 'Case innan',
  },
};

export default messages;
