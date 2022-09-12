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
      edit: 'Endre mappenamn',
      delete: 'Slett',
    },
    createFolder: 'Lag mappe',
    maxFoldersAlreadyAdded: 'Maks nivå av undermapper nådd',
    newFolder: {
      placeholder: 'Skriv namn på mappe',
      defaultName: 'Ny mappe',
    },
  },
  tagSelector: {
    label: 'Legg til emneknagg',
    placeholder: 'Skriv inn emneknagg',
    removeTag: 'Ta vekk {{name}}',
    hideAllTags: 'Skjul alle emneknaggar',
    showAllTags: 'Vis alle emneknaggar',
  },
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
    error404Description: 'Orsak, vi kunne ikkje finne ressursen du leiter etter.',
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
  subjectCategories: {
    [subjectCategories.ACTIVE_SUBJECTS]: 'Aktive',
    [subjectCategories.ARCHIVE_SUBJECTS]: 'Utgåtte',
    [subjectCategories.BETA_SUBJECTS]: 'Kommande',
    [subjectCategories.COMMON_SUBJECTS]: 'Fellesfag',
    [subjectCategories.PROGRAMME_SUBJECTS]: 'Programfag SF',
    [subjectCategories.SPECIALIZED_SUBJECTS]: 'Yrkesfag',
  },
  subjectTypes: {
    [subjectTypes.SUBJECT]: 'Fag',
    [subjectTypes.RESOURCE_COLLECTION]: 'Ressurssamling',
  },
  searchPage: {
    noHits: 'Ingen artiklar samsvarte med søket ditt på: {{query}}',
    noHitsShort: 'Ingen treff på søk: {{query}}',
    removeFilterSuggestion: 'Prøv å fjerne filter',
    search: 'Søk',
    abilities: 'Eigenskapar',
    close: 'Lukk',
    searchFieldPlaceholder: 'Søk i fagstoff, oppgåver og aktivitetar eller læringsstiar',
    searchFieldPlaceholderShort: 'Søk',
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
      subjects: 'Byt fag',
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
      subHeading: '{{totalCount}} treff i NDLA',
    },
    searchResultListMessages: {
      subjectsLabel: 'Opne i fag:',
      noResultHeading: 'Hmm, ikkje noko innhald ...',
      noResultDescription:
        'Vi har dessverre ikkje noko å tilby her. Om du vil føreslå noko innhald til dette området, kan du bruke Spør NDLA som du finn nede til høgre på skjermen.',
    },
    searchPageMessages: {
      filterHeading: 'Filter',
      resultHeading: '{{totalCount}} treff i NDLA',
      resultHeadingByAuthor: '{{totalCount}} artiklar skrive av {{author}}',
      narrowScreenFilterHeading: '{{totalCount}} treff på «{{query}}»',
      dropdownBtnLabel: 'Fleire innhaldstypar',
    },
    searchFilterMessages: {
      backButton: 'Tilbake til filter',
      filterLabel: 'Filtrer søket',
      confirmButton: 'Oppdater filter',
      hasValuesButtonText: 'Fleire fag',
      noValuesButtonText: 'Filtrer på fag',
      useFilter: 'Bruk filter',
      removeFilter: 'Fjern filter {{filterName}}',
      closeFilter: 'Lukk filter',
      additionalSubjectFilters: '+ {{count}} fag',
      coreRelevance: 'Kjernestoff',
      supplementaryRelevance: 'Tilleggsstoff',
      resourceTypeFilter: {
        heading: 'Filtrer på innhaldstype',
        button: 'Filtrer på innhaldstype',
      },
    },
    resultType: {
      showing: 'Viser {{count}} av {{totalCount}} {{contentType}}',
      showingAll: 'Viser alle',
      showMore: 'Vis meir',
      showAll: 'Vis alle',
      toTopOfPage: 'Til toppen',
      toSubjectPageLabel: 'Gå til fagsida',
      all: 'Alle',
      allContentTypes: 'Alle innhaldstyper',
      hits: '{{count}} treff',
      showingSearchPhrase: 'Viser treff for',
      searchPhraseSuggestion: 'Søk heller',
      showingCompetenceGoalSearchPhrase: 'Viser resultat for kompetansemål {text}',
      notionLabels: 'Brukes i',
      notionsHeading: 'Begrepsforklaring',
      notionsRemove: 'Fjern',
      showVideo: 'Sjå video',
      showNotion: 'Sjå forklaring',
      gridView: 'Gallerivisning',
      listView: 'Listevisning',
    },
    contextModal: {
      button: '+ {{count}} fleire stader',
      heading: 'Ressursen er brukt fleire stader',
      ariaLabel: 'Sjå fleire kontekstar',
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
      dialogHeader: '{{title}} er under arbeid.',
      dialogText: 'Du kan lese meir om kva dette betyr på',
    },
    archived: 'Dette er eit utgått fag som ikkje blir halde ved like.',
  },
  subjectsPage: {
    errorDescription: 'Orsak, ein feil oppstod under lasting av faga.',
    chooseSubject: 'Vel fag',
  },
  topicPage: {
    articleErrorDescription: 'Orsak, ein feil oppstod under lasting av emneskildringa.',
    topic: 'EMNE',
    topics: 'Emne',
    imageModal: 'Sjå biletet i full storleik',
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
      description: 'NDLA har mange Facebook- og Twitter-kontoar. Finn den som passar for deg, og følg oss!',
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
      text: 'NDLA film er ei teneste i samarbeid med Norgesfilm. Denne tenesta lar deg sjå ei rekkje spelefilmar, kortfilmar, dokumentarar og seriar. Du kan òg sjå undervisningsfilm og filmklipp. Velkomen inn i filmen si verd!',
      textShort: 'Velkomen inn i filmen si verd!',
      linkLabel: 'Gå til NDLA film',
    },
    blog: 'Frå bloggen',
    errorDescription: 'Orsak, ein feil oppstod under lasting av faga.',
  },
  meta: {
    description: 'Kvalitetssikra og fritt tilgjengelege nettbaserte læremiddel for vidaregåande opplæring',
    keywords: 'læremiddel,fag,skole,skule,vidaregåande,lærling,pensum,fagstoff, ',
  },
  masthead: {
    skipToContent: 'Hopp til innhald',
    menu: {
      close: 'Lukk',
      goTo: 'Gå til',
      search: 'Søk',
      toFrontpage: 'Til framsida',
      subjectOverview: 'Alle fag',
      title: 'Innhald',
      modalLabel: 'Vel innhald',
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
        [contentTypes.TASKS_AND_ACTIVITIES]: 'Vis fleire oppgåver og aktivitetar',
        [contentTypes.LEARNING_PATH]: 'Vis fleire læringsstiar',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Vis fleire vurderingsressursar',
        [contentTypes.SOURCE_MATERIAL]: 'Vis fleire kjeldemateriale',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]: 'Vis fleire eksterne læringsressursar',
        unGrouped: 'Vis fleire ressursar',
      },
      contentTypeResultsShowLess: {
        [contentTypes.SUBJECT_MATERIAL]: 'Vis mindre fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'Vis færre oppgåver og aktivitetar',
        [contentTypes.LEARNING_PATH]: 'Vis færre læringsstiar',
        [contentTypes.LEARNING_PATH]: 'Vis færre læringsstiar',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Vis færre vurderingsressursar',
        [contentTypes.SOURCE_MATERIAL]: 'Vis færre kjeldemateriale',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]: 'Vis færre eksterne læringsressursar',
        unGrouped: 'Vis færre ressursar',
      },
      contentTypeResultsNoHit: {
        [contentTypes.SUBJECT_MATERIAL]: 'Ikkje noko fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'Ingen oppgåver',
        [contentTypes.LEARNING_PATH]: 'Ingen læringsstiar',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Ingen vurderingsressursar',
        [contentTypes.SOURCE_MATERIAL]: 'Ingen kjeldemateriale',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]: 'Ingen eksterne læringsressursar',
        unGrouped: 'Ingen ressursar',
      },
    },
  },
  logo: {
    altText: 'Nasjonal digital læringsarena',
  },
  resource: {
    errorDescription: 'Orsak, ein feil oppstod under lasting av emneressursar.',
    error: 'Orsak, ein del av innhaldet kunne ikkje visast.',
    noCoreResourcesAvailableUnspecific: 'Det er ikkje noko kjernestoff tilgjengeleg.',
    noCoreResourcesAvailable: 'Det er ikkje noko kjernestoff tilgjengeleg for {{name}}.',
    toggleFilterLabel: 'Tilleggsressursar',
    activateAdditionalResources: 'Tilleggsressursar',
    label: 'Læringsressursar',
    allResources: 'Ressursar',
    shortcutButtonText: 'Lærestoff',
    tooltipCoreTopic: 'Kjernestoff',
    tooltipAdditionalTopic: 'Tilleggsstoff',
    additionalTooltip: 'Tilleggsstoff',
    shortcutsTooltip: 'Vis {{count}} artiklar i dette emnet',
    dialogTooltip: 'Kva er kjernestoff og tilleggsstoff?',
    dialogHeading: 'Kjernestoff og tilleggsstoff',
    dialogText1: 'Når du lærer deg kjernestoffet, får du den kompetansen som blir beskrive i læreplanen for faget.',
    dialogText2:
      'Tilleggsstoff er innhald du kan velje i tillegg til kjernestoffet. Gjennom dette kan du fordjupe deg i eit emne eller nærme deg emnet på ein annan måte.',
    showLess: 'Vis mindre',
    showMore: 'Vis meir',
    youAreHere: 'Du er her',
    trait: {
      video: 'Video',
      h5p: 'Interaktiv',
    },
  },

  messageBoxInfo: {
    outdatedCoursePlan:
      'Dette faget følgjer ein utgått læreplan. Gå til faget som er oppdatert etter gjeldande læreplan: ',
    updateBrowser:
      'Nettlesaren din er utdatert. Oppdater han, eller finn ein trygg og oppdatert nettlesar på https://browsehappy.com. ',
    noContent: 'Vi har dessverre ikkje nokon programfag enno.',
    feide: 'Denne ressursen er berre tilgjengeleg for lærarar som er pålogga med Feide.',
    resources: 'Dette er ikkje eit komplett læremiddel, men ei ressurssamling som vi håper kan vere nyttig for deg.',
    subjectOutdated: 'Dette faget følgjer ein utgått læreplan.',
    subjectBeta: 'Dette faget er i betaversjon. Vi fyller på med ressurser fortløpande.',
    newVersion:
      'Denne læringsressursen er ikkje oppdatert etter gjeldande læreplan. Du finn ein oppdatert versjon her: ',
    frontPageBeta:
      'Kommande fag er tilpassa ny læreplan som gjeld fra hausten 2022. Betafag er fag under arbeid. Vi håper likevel at læringsressursane i betafaga kan vere nyttige allereie no.',
    frontPageExpired:
      'Utgåtte fag blir det ikkje undervist i lenger, men det kan framleis vere mogleg å ta eksamen i faget som privatist.',
    frontPageRevised: 'Kommande fag er tilpassa ny læreplan som gjeld frå hausten 2022.',
  },
  article: {
    lastUpdated: 'Sist oppdatert',
    edition: 'Utgåve',
    publisher: 'Utgjevar',
    closeLabel: 'Lukk',
    useContent: 'Reglar for bruk',
    additionalLabel: 'Tilleggsstoff',
    urlContributionsLabel: 'Sjå kva {{name}} har bidratt med',
    urlAuthorLabel: 'Les meir om {{name}}',
    multipleAuthorsLabelAbbreviation: 'm. fl.',
    authorsLabel: 'Skrive av {{names}}',
    multipleAuthorsLabelAriaConjunction: 'og',
    copyPageLink: 'Kopier lenke til sida',
    copyPageLinkCopied: 'Lenke kopiert',
    copyHeaderLink: 'Kopier lenke til overskrifta',
    conjunction: 'og',
    supplierLabel: 'Rettshavar: {{name}}',
    multipleSuppliersLabel: 'Rettshavarar: {{names}}',
    writtenBy: 'Skrive av {{authors}}',
    cite: 'Bruk innhald',
    notionsPrompt: 'Kan du begrepa?',
    citeNotion: 'Bruk forklaringa',
    printPage: 'Skriv ut',
    access: {
      onlyTeacher: 'Denne ressursen er berre tilgjengeleg for lærarar som er pålogga med Feide.',
    },
    possiblyOutdated: 'Artikkelen er foreldet.',
  },
  competenceGoals: {
    competenceGoal: 'kompetansemål',
    title: 'Kompetansemål og læreplan',
    modalText: 'Utforsk læreplankoplingar',
    closeCompetenceGoals: 'Lukk kompetansemål',
    showCompetenceGoals: 'Vis kompetansemål',
    openCompentenceGoalsFilter: 'Filtrer kompetansemål',
    useCompentenceGoalsFilter: 'Bruk filter',
    closeCompentenceGoalsFilter: 'Lukk filter',
    competenceGoalsNarrowBackButton: 'Tilbake',
    competenceGoalResourceSearchText: 'Søk på alle ressursar som passar til dette kompetansemålet',
    competenceGoalShowExtra: 'Vis støtte til læreplanen',
    competenceGoalCloseExtra: 'Skjul støtte til læreplanen',
    competenceCoreLabel: 'Kjerneelement',
    competenceTopicLabel: 'Tverrfaglege tema',
    competenceSubjectLabel: 'Fag',
    competenceCoreSearchText: 'Søk ressursar for kjerneelementet',
    competenceTopicSearchText: 'Søk ressursar for tema',
    competenceSubjectSearchText: 'Gå til fagsiden',
    competenceGoalClose: 'Lukk',
    competenceGoalTitle: 'Målet er at eleven skal kunne:',
    competenceTabLK06label: 'Kompetansemål (LK06)',
    competenceTabLK20label: 'Kompetansemål (LK20)',
    competenceTabCorelabel: 'Kjerneelement',
    competenceGoalItem: {
      title: 'Kompetansemål og vurdering',
    },
    licenseData: 'Inneheld data under',
    licenseFrom: 'tilgjengeleggjort på',
  },
  subject: {
    associatedTopics: 'Tilhøyrande emne',
  },
  accordion: {
    closeAll: 'Lukk alle',
    openAll: 'Åpne alle',
  },
  license: {
    heading: 'Slik gjenbruker du innhald',
    learnMore: 'Lær meir om opne lisensar',
    copyTitle: 'Kjeldetilvising',
    hasCopiedTitle: 'Kopiert!',
    embed: 'Bygg inn',
    embedCopied: 'Kopierte innbyggingskode!',
    copyText: {
      now: 'nå',
      podcast: 'podkast',
      by: 'av',
      internet: '[Internett]. ',
      noTitle: 'Utan tittel',
      downloadedFrom: 'Henta frå: ',
      readDate: 'Lese: ',
    },
    download: 'Last ned',
    tabs: {
      text: 'Tekst',
      images: 'Bilete',
      audio: 'Lyd',
      video: 'Video',
      h5p: 'H5P',
      files: 'Filer',
      embedlink: 'Innbyggingslenke',
      concept: 'Forklaringar',
      podcast: 'Podkast',
      other: 'Anna innhald',
    },
    embedlink: {
      heading: 'Slik viser du artikkelen i anna innhald',
      description: 'Denne lenka viser artikkelen utan kontekst (meny og botntekst)',
      copyTitle: 'Kopier lenke',
      hasCopiedTitle: 'Lenke kopiert',
    },
    image: {
      rules: 'Reglar for bruk av biletet:',
    },
    images: {
      heading: 'Slik gjenbruker du bileta',
      description: 'Hugs å kopiere teksten som skal leggjast ved biletet der du bruker det.',
      rules: 'Reglar for bruk av biletet:',
      itemImage: {
        ariaLabel: 'Opne bilete i eit nytt vindauge',
        zoomImageButtonLabel: 'Forstørr bilete',
        zoomOutImageButtonLabel: 'Forminsk bilete',
        expandByline: 'Vis byline',
        minimizeByline: 'Skjul byline',
      },
      source: 'Kjelde',
      title: 'Tittel',
    },
    text: {
      heading: 'Slik gjenbruker du teksten',
      description: 'Hugs å vise til kjelda når du gjenbruker tekst.',
      rules: 'Reglar for bruk av teksten:',
      published: 'Publiseringsdato',
    },
    audio: {
      heading: 'Slik gjenbruker du lydfiler',
      description: 'Hugs å kopiera teksten som skal leggjast ved lydfila der du bruker ho.',
      rules: 'Reglar for bruk av lydfila:',
    },
    podcast: {
      heading: 'Slik gjenbruker du podkaster',
      description: 'Hugs å kopiera teksten som skal leggjast ved podkasten der du bruker ho.',
      rules: 'Reglar for bruk av podkasten:',
    },
    video: {
      heading: 'Slik gjenbruker du videoar',
      description: 'Hugs å kopiera teksten som skal leggjast ved videoen der du bruker han.',
      rules: 'Reglar for bruk av videoen:',
      itemImage: {
        ariaLabel: 'Opne video i eit nytt vindauge',
      },
    },
    other: {
      heading: 'Slik gjenbruker du anna innhald',
      description: 'Du finn retningslinjene for bruk av innhaldet i innhaldselementet.',
      itemImage: {
        ariaLabel: 'Opne i nytt vindauge',
      },
    },
    h5p: {
      heading: 'Slik gjenbruker du H5P-innhald',
      description: 'Du finn retningslinjene for bruk av innhaldet i H5P-elementet.',
      rules: 'Reglar for bruk av H5P:',
    },
    concept: {
      embedlink: {
        heading: 'Slik viser du forklaringa i anna innhald',
        description: 'Denne lenka viser forklaringa utan kontekst (meny og botntekst)',
        copyTitle: 'Kopier innbyggingslenke',
        hasCopiedTitle: 'Innbyggingslenke kopiert',
      },
      heading: 'Slik gjenbruker du forklaringar',
      description: 'Du finn retningslinjene for bruk av innhaldet i forklaring-elementet',
      rules: 'Reglar for bruk av forklaring:',
      title: 'Tittel',
    },
    files: {
      heading: 'Slik gjenbruker du filer',
      description: 'Hugs å kopiere teksten som skal leggjast ved fila der du bruker ho.',
      rules: 'Regler for bruk av fila:',
      itemImage: {
        ariaLabel: 'Opne i nytt vindauge',
      },
    },
    title: 'Tittel',
    originator: 'Opphavar',
    rightsholder: 'Rettshavar',
    source: 'Kjelde',
    published: 'Publiseringsdato',
  },
  errorMessage: {
    title: 'Ops, noko gjekk gale',
    description: 'Orsak, ein feil oppstod.',
    linksTitle: 'Kom i gang:',
    back: 'Tilbake',
    goToFrontPage: 'Gå til framsida',
  },
  figure: {
    button: {
      alternative: 'Byt til synstolka video',
      original: 'Byt til original video',
    },
  },
  footer: {
    aboutNDLA: 'Om NDLA',
    selectLanguage: 'Vel språk (language): ',
    vision: 'Saman skapar vi framtidas læring',
    footerLinksHeader: 'Andre NDLA-nettstader',
    footerInfo: 'Nettstaden er utarbeida av NDLA med open kjeldekode.',
    footerEditiorInChief: 'Ansvarleg redaktør: ',
    footerManagingEditor: 'Utgåveansvarleg: ',
    footerPrivacyLink: 'Personvernerklæring og cookies',
    socialMediaLinks: {
      facebook: 'NDLA på Facebook',
      facebookAria: 'Besøk NDLA på Facebook',
      newsletter: 'Meld deg på vårt nyheitsbrev',
      newsletterAria: 'Meld deg på vårt nyheitsbrev',
      youtube: 'NDLA på YouTube',
      youtubeAria: 'NDLA på YouTube',
      linkedin: 'NDLA på LinkedIn',
      linkedinAria: 'Besøk NDLA på LinkedIn',
      instagram: 'NDLA på Instagram',
      instagramAria: 'Besøk NDLA på Instagram',
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
    'multidisciplinary-topic': 'Tverrfagleg case',
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
    se: 'Nordsamisk',
    sma: 'Sørsamisk',
    es: 'Spansk',
    zh: 'Kinesisk',
    unknown: 'Ukjent',
    prefixChangeLanguage: 'Vel språk',
  },
  changeLanguage: {
    nb: 'Endre språk til bokmål',
    nn: 'Endre språk til nynorsk',
    en: 'Change language to English',
  },
  currentLanguageText: {
    nb: 'Sidene blir viste på bokmål',
    nn: 'Sidene blir viste på nynorsk',
    en: 'Not all pages are available in English. These will be shown in Norwegian',
  },
  breadcrumb: {
    toFrontpage: 'NDLA framside',
    youAreHere: 'Du er her',
    breadcrumb: 'Brødsmulesti',
  },
  listview: {
    search: {
      placeholder: 'Søk',
    },
    embedlink: {
      copyTitle: 'Kopier innbyggingskode',
      hasCopiedTitle: 'Innbyggingskode kopiert',
    },
    filters: {
      subject: {
        useFilter: 'Bruk filter',
        openFilter: 'Vel fag',
        closeFilter: 'Lukk filter',
      },
      category: {
        useFilter: 'Bruk filter',
        openFilter: 'Vel liste',
        closeFilter: 'Lukk filter',
      },
      default: {
        useFilter: 'Bruk filter',
        openFilter: 'Filtrer',
        closeFilter: 'Lukk filter',
        heading: 'Filter',
        filteredBy: 'Filtrert på',
      },
      alphabet: {
        letterFilter: 'Vis innhold på {{letter}}.',
      },
    },
    relatedLinks: {
      label: 'Tilknytta artiklar',
    },
    hits: '{{count}} treff',
  },
  notions: {
    usedIn: 'Brukast i',
    closeNotion: 'Lukk',
  },
  carousel: {
    back: 'Bla tilbake',
    forward: 'Bla framover',
  },
  codeEditor: {
    title: 'LEGG TIL',
    titleLabel: 'Tittel:',
    subtitle: 'kodeeksempel',
    languageSelect: 'Velg kodespråk:',
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
      text: 'NDLA film er ei nettbasert filmteneste for elevar og lærarar i vidaregåande skule. Her finn du spelefilmar, kortfilmar, dokumentarfilmar og TV-seriar.',
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
      addMovieToGroup: 'Legg til film i "{{name}}"',
      editMovieGroupName: 'Endre namna til filmgruppa',
      deleteMovieGroup: 'Slett "{{name}}"',
      moveMovieGroupUp: 'Flytt opp',
      moveMovieGroupDown: 'Flytt ned',
      changeOrder: 'Endre rekkjefølgje',
      removeMovieFromGroup: 'Ta vekk film frå gruppe',
      removeMovieFromSlideshow: 'Ta vekk film frå slideshow',
      createThemeGroup: 'Opprett gruppe',
      saveNameChanges: 'Lagre endringar',
      cancel: 'Avbryt',
      groupNamePlaceholder: 'Skriv namn på {{lang}}',
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
    createLearningPathText: 'Lag din eigen, kopier denne eller sjå fleire læringsstiar?',
    createLearningPathButtonText: 'Gå til stiar',
    lastUpdated: 'Sist oppdatert',
    youAreInALearningPath: 'Du er no inne i ein læringssti',
    readTime: '{{hours}} Skuletimar = {{minutes}} min',
    pageOf: 'av',
    readTimeHour: 'time',
    readTimeHour_plurals: 'timar',
    readTimeMinutesShort: 'min',
    lastStep: {
      heading: 'Siste steg i læringsstien',
      headingSmall: 'Du er no på siste steget i læringsstien {{learningPathName}}',
      topicHeading: 'Gå til emne:',
      subjectHeading: 'Gå til faget:',
    },
    openMenuTooltip: 'Vis læringssti',
    mobileStepInfo: '{{currentPage}} av {{totalPages}}',
    nextArrow: 'Neste',
    previousArrow: 'Førre',
  },
  dropdown: {
    numberHits: `Søket gav {{hits}} treff`,
    searching: 'Søkjer...',
    create: 'Opprett ny',
    isSelectedItem: 'Lagt til',
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
    content: 'Ressursen',
    text: 'er henta frå',
    concept: {
      content: 'Forklaringa',
      text: 'er utarbeida av',
    },
    listing: {
      content: 'Lista',
      text: 'er utarbeida av',
    },
  },
  frontPageToolbox: {
    heading: 'Verktøykassa',
    text: 'Har du lyst til å bli god til å presentere, eller vil du lære å studere smartare ved hjelp av riktig studieteknikk? Treng du råd om korleis du les mest mogleg effektivt til eksamen? I verktøykassa til NDLA finn du masse gode tips og råd!',
    linkTextStudents: 'Sjå alle tipsa for elever her',
    linkTextTeachers: 'Sjå alle tipsa for lærarar her',
    cursorText: 'Tips',
  },
  frontpageMultidisciplinarySubject: {
    heading: 'Tverrfaglege tema',
    text: 'Dei tre tverrfaglege temaa i læreplanverket tek utgangspunkt i aktuelle samfunnsutfordringar som krev engasjement og innsats frå einskildmenneske og fellesskapet i lokalsamfunnet, nasjonalt og globalt.',
    linkText: 'Sjå casar for tverrfaglege tema',
    publicHealthTopic: 'Folkehelse og livsmeistring',
    democracyTopic: 'Demokrati og medborgarskap',
    sustainableTopic: 'Bærekraftig utvikling',
    cursorText: 'Nyheit',
  },
  frontpageMenu: {
    program: 'Utdanningsprogram',
    allsubjects: 'Alle fag',
    cursorText: 'Sjå smakebitar frå fag under utvikling.',
  },
  navigation: {
    showLongerDescription: 'Vis heile emneskildringa',
    showShorterDescription: 'Skjul emneskildringa',
    topics: 'Emne',
    additionalTopic: 'Tilleggsemne',
    additionalTopics: 'Tilleggsemne',
    loadingText: 'Laster emne',
  },
  multidisciplinarySubject: {
    subjectsLinksDescription: 'Case innan',
  },
  multibutton: {
    open: 'Åpne meny',
    close: 'Lukk meny',
  },
  cancel: 'Avbryt',
  close: 'Lukk',
  title: 'Tittel',
  save: 'Lagre',
  image: {
    altText: 'Alt-tekst',
    caption: 'Bilettekst',
    type: 'Filtype',
    width: 'Breidde',
    height: 'Høgde',
    size: 'Størrelse (bytes)',
    modelReleased: {
      label: 'Modellklarert',
      yes: 'Ja',
      no: 'Nei',
      'not-applicable': 'Ikkje relevant',
      'not-set': 'Ikkje valgt',
      description: 'Om bildet er modellklarert eller ikkje:',
    },
    download: 'Last ned biletet',
    reuse: 'Bruk biletet',
    largeSize: 'Sjå stor utgave av biletet',
    error: {
      url: 'Feil ved lasting av biletet.',
      caption: 'Orsak, ein feil oppstod ved lasting av biletet.',
    },
  },
  audio: {
    download: 'Last ned lydfil',
    reuse: 'Bruk lydfil',
    error: {
      url: 'Feil ved lasting av lydfila.',
      caption: 'Orsak, ein feil oppstod ved lasting av lydfil.',
    },
    controls: {
      forward15sec: 'Spol 15 sekundar fram',
      rewind15sec: 'Spol 15 sekundar tilbake',
      selectSpeed: 'Velg avspelingshastigheit',
      adjustVolume: 'Endre volum',
    },
    textVersion: {
      heading: 'Tekstversjon',
      close: 'Lukk tekstversjon',
    },
    readMoreDescriptionLabel: 'vis meir',
  },
  h5p: {
    reuse: 'Bruk H5P',
  },
  video: {
    download: 'Last ned video',
    reuse: 'Bruk video',
    error: 'Orsak, ein feil oppstod ved lasting av videoen eller metadata om videoen.',
  },
  other: {
    download: 'Last ned innhald',
    reuse: 'Bruk innhald',
  },
  concept: {
    showDescription: 'Vis skildring av forklaringa',
    reuse: 'Bruk forklaring',
    error: {
      title: 'Ein feil oppstod',
      content: 'Kunne ikkje laste skildringa av forklaringa.',
    },
  },
  related: {
    title: 'Relatert innhald',
    linkInfo: 'Nettside hos',
    showMore: 'Vis meir relatert innhald',
    showLess: 'Vis mindre',
  },
  'external.error': 'Ein feil oppstod ved lasting av ein ekstern ressurs.',
  'h5p.error': 'Ein feil oppstod ved lasting av H5P.',
  source: 'Kjelde',
  files: 'Filer',
  download: 'Last ned fil: ',
  expandButton: 'Vis stor versjon',
  ...contributorTypes.nn,
  filterButtons: {
    removeAllFilters: 'Fjern filter',
  },
  visualElement: {
    show: 'Vis',
    showVideo: 'Vis video',
  },
  user: {
    loggedInAs: 'Du er pålogga som {{role}}.',
    loggedInAsButton: 'Du er pålogga som {{role}}',
    role: {
      employee: 'Lærar',
      staff: 'Tilsett',
      student: 'Elev',
    },
    buttonLogIn: 'Logg inn med Feide',
    buttonLogOut: 'Logg ut',
    generalFooter: 'Enkelte ressursar er berre tilgjengelege for pålogga lærarar.',
    modal: {
      collectedInfo: 'Vi har henta denne informasjonen om deg frå Feide:',
      general: 'Ressursane som krev pålogging med Feide, vises med ikonet',
      topic: ' Logg inn med Feide for å få tilgang til dette emnet.',
      isAuth: 'Brukarinfo',
      isNotAuth: 'Logg inn med Feide',
    },
    resource: {
      accessDenied: 'Vi beklagar, men denne ressursen er berre for lærarar innlogga med Feide.',
    },
    primarySchool: 'Hovudskule',
    name: 'Namn',
    mail: 'E-post',
    username: 'Brukarnamn',
    groupTypes: {
      basic: 'Basisgruppe',
      teaching: 'Undervisningsgruppe',
      other: 'Andre grupper',
    },
  },
  checkOutNewFeature: 'Sjekk ut ny funksjonalitet',
  slateBlockMenu: {
    open: 'Åpne meny',
    close: 'Lukk meny',
  },
  factbox: {
    open: 'Åpne faktaboks',
    close: 'Lukk faktaboks',
  },
  myNdla: {
    myNDLA: 'Min NDLA',
    support: 'Brukarstøtte',
    resources: '{{count}} ressurs',
    resources_plural: '{{count}} ressursar',
    folders: '{{count}} mappe',
    folders_plural: '{{count}} mapper',
    folder: {
      folder: 'Mappe',
      delete: 'Slett',
      edit: 'Rediger',
      missingName: 'Skriv namn på mappe',
      folderDeleted: '"{{folderName}}" er sletta',
    },
    tags: '{{count}} emneknagg',
    tags_plural: '{{count}} emneknaggar',
    confirmDeleteFolder: 'Er du sikker på at du vil slette mappa? Denne handlinga kan ikkje endrast.',
    confirmDeleteTag: 'Er du sikker på at du vil slette tag? Denne handlinga kan ikkje endrast.',
    myFolders: 'Mine mapper',
    myTags: 'Emneknaggane mine',
    newFolder: 'Ny mappe',
    newFolderUnder: 'Lag ny mappe under {{folderName}}',
    myAccount: 'Min konto',
    favourites: 'Favorittar',
    addToFavourites: 'Legg til i mine favorittar',
    alreadyFavourited: 'Allereie lagt til i mine favorittar',
    alreadyInFolder: 'Finst allereie i mappa',
    help: 'Hjelp',
    more: 'Fleire val',
    listView: 'Listevisning',
    detailView: 'Detaljert listevisning',
    shortView: 'Kortvisning',
    myPage: {
      confirmDeleteAccount: 'Er du sikker på at du vil slette kontoen?',
      confirmDeleteAccountButton: 'Slett konto',
      myPage: 'Mi side',
      deleteAccount: 'Slett Min NDLA',
      logout: 'Logg ut av Min NDLA',
      loginTerms: 'Logg på med Feide for å få tilgang. Ved å logge på godkjennar du våre vilkår for bruk',
      loginResourcePitch: 'Ønsker du å favorittmerke denne sida?',
      loginWelcome: 'Velkommen til NDLA! Her kan du organisere fagstoffet på <i>din</i> måte!',
      welcome:
        'Velkommen til Min NDLA! Nå kan du lagre dine favorittressurser fra NDLA og organisere dem slik du ønsker i mapper og med tags.',
      read: { our: 'Les vår', ours: 'Les våre' },
      privacy: 'personvernerklæring her',
      questions: { question: 'Lurer du på noko?', ask: 'Spør oss i chatten' },
      wishToDelete: 'Vil du ikkje ha brukerprofil hos oss lenger?',
      terms: {
        terms: 'Vilkår for bruk',
        term1: 'Ikkje skriv personsensitiv informasjon eller persondata i tekstfelt.',
        term2: 'Ikkje skriv noko støytande i tekstfelt.',
        term3: 'NDLA tek atterhald om retten til å oppdatere eller slette utdaterte ressursar.',
      },
      newFavourite: 'Nyleg lagt til',
      feide: 'Dette hentar vi om deg frå Feide',
      storageInfo: {
        title: 'Slik lagrar du favorittressursene dine frå NDLA',
        text: 'Klikk på hjarteknappen for å lagre ein ressurs. Du vil då få høve til å lagre ressursen i ei mappe.',
      },
      folderInfo: {
        title: 'Slik organiserer du favorittressursene dine i mapper',
        text: 'Klikk på mine mapper i menyen til venstre for å kome til mappeoversikta. Her kan du opprette nye mapper og undermapper. Du kan også opprette ny mappe i vindauget som kjem opp når du klikkar på eit hjarte i ein ressurs.',
      },
      tagInfo: {
        title: 'Slik tagger du dine favorittressurser',
        text: 'Når du lagrar ein ressurs får du høve til å markere ressursen med ein emneknagg. Emneknaggen er eit nøkkelord du kan bruke til å finne tilbake til ressursar på tvers av mapper. Du finn alle emneknaggane du har brukt ved å velje mine emneknaggar i venstremenyen. Her kan du også sjå kva for nokre ressursar du har markert med kvar enkel emneknagg.',
      },
    },
    resource: {
      add: 'Legg til mappe/tag',
      remove: 'Fjern',
      removeTitle: 'Fjern ressurs',
      confirmRemove: 'Er du sikker på at du ønsker å fjerne ressursen frå denne mappa?',
      copyLink: 'Kopier lenke til sida',
      linkCopied: 'Kopiert til utklippstavla',
      addToMyNdla: 'Legg i Min NDLA',
      addedToMyNdla: 'Lagt i Min NDLA',
      addedToFolder: 'Ressurs er lagt i ',
      removedFromFolder: 'Fjerna fra "{{folderName}}"',
      titleUpdated: 'Tittel oppdatert',
      tagsUpdated: 'Emneknaggar oppdatert',
      show: 'Vis',
      save: 'Lagre ressurs',
    },
  },
  snackbar: {
    close: 'Lukk melding',
  },
  labels: {
    category: 'Kategori',
    subject: 'Fag',
    other: 'Anna',
  },
  listingPage: {
    or: 'eller',
    noFilters: 'Har ikkje noko å filtrere',
    loadMore: 'Last meir',
  },
  siteNav: {
    search: 'Søk',
    contact: 'Kontakt',
    help: 'Hjelp',
  },
};

export default messages;
