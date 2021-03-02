/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { contributorTypes } from '@ndla/licenses';
import constants from '../model';

export const { contentTypes } = constants;

const titleTemplate = ' - NDLA';

const messages = {
  htmlTitles: {
    titleTemplate,
    welcomePage: `Forsiden${titleTemplate}`,
    topicPage: 'Emne',
    subjectsPage: `Velg fag${titleTemplate}`,
    searchPage: `Søk${titleTemplate}`,
    notFound: `Siden finnes ikke${titleTemplate}`,
  },
  newsLetter: {
    heading: 'Nyhetsbrev',
    description: 'Hold deg oppdatert. Abonner på siste nytt fra NDLA.',
    mainLinkName: 'Meld deg på',
    iconLinkName: 'Meld deg på nyhetsbrev',
  },
  askNDLA: 'Spør NDLA',
  articlePage: {
    errorDescription: 'Beklager, en feil oppsto under lasting av ressursen.',
    error404Description: 'Beklager, finner ikke ressursen du leter etter.',
  },
  notFoundPage: {
    title: 'Siden finnes ikke',
    errorDescription: 'Beklager, finner ikke siden du prøvde å komme til.',
  },
  movedResourcePage: {
    title: 'Siden har flyttet, men du kan finne den her:',
  },
  lti: {
    embed: 'Sett inn',
    notSupported:
      'Det fungerte ikke å sette inn innholdet automatisk. Kopier kildekoden under for å sette inn på din side.',
  },
  searchPage: {
    noHits: 'Ingen artikler samsvarte med søket ditt på: {query}',
    search: 'Søk',
    close: 'Lukk',
    abilities: 'Egenskaper',
    searchFieldPlaceholder:
      'Søk i fagstoff, oppgaver og aktiviteter eller læringsstier',
    label: {
      content: 'Innhold:',
      contentTypes: 'Innholdstyper:',
      levels: 'Nivå:',
      languageFilter: 'Språk:',
      subjects: 'Fag:',
      noFilter: 'Ingen filter valgt',
      createdBy: 'Laget av:',
    },
    showLabel: {
      contentTypes: 'Flere innholdstyper',
      levels: 'Flere nivåer',
      languageFilter: 'Flere språk',
      subjects: 'Bytt fag',
    },
    hideLabel: {
      contentTypes: 'Færre innholdstyper',
      levels: 'Færre nivåer',
      languageFilter: 'Færre språk',
      subjects: 'Færre fag',
    },
    searchField: {
      contentTypeResultShowMoreLabel: 'Se flere resultater',
      contentTypeResultShowLessLabel: 'Se færre resultater',
      allResultButtonText: 'Vis alle søketreff',
      searchResultHeading: 'Forslag:',
      contentTypeResultNoHit: 'Ingen treff på søk ...',
    },
    searchResultMessages: {
      searchStringLabel: 'Du søkte på:',
      subHeading: '{totalCount} treff i NDLA',
    },
    searchResultListMessages: {
      subjectsLabel: 'Åpne i fag:',
      noResultHeading: 'Hmm, ikke noe innhold ...',
      noResultDescription:
        'Vi har dessverre ikke noe å tilby her. Hvis du vil foreslå noe innhold til dette området, kan du bruke Spør NDLA som du finner nede til høyre på skjermen.',
    },
    searchPageMessages: {
      filterHeading: 'Filter',
      resultHeading: '{totalCount} treff i NDLA',
      resultHeadingByAuthor: '{totalCount} artikler skrevet av {author}',
      narrowScreenFilterHeading: '{totalCount} treff på «{query}»',
      dropdownBtnLabel: 'Flere innholdstyper',
    },
    searchFilterMessages: {
      backButton: 'Tilbake til filter',
      filterLabel: 'Filtrer søket',
      confirmButton: 'Oppdater filter',
      hasValuesButtonText: 'Flere fag',
      noValuesButtonText: 'Filtrer på fag',
      useFilter: 'Bruk filter',
      closeFilter: 'Lukk filter',
      removeFilter: 'Fjern filter {filterName}',
      coreRelevance: 'Kjernestoff',
      supplementaryRelevance: 'Tilleggsstoff',
    },
    resultType: {
      showing: 'Viser {fromCount} til {toCount} av {totalCount}',
      showMore: 'Vis mer',
      showAll: 'Vis alle',
      toSubjectPageLabel: 'Gå til fagsiden',
      all: 'Alle',
      hits: '{count} Treff',
      showingSearchPhrase: 'Viser resultater for',
      searchPhraseSuggestion: 'Søk i stedet for',
      notionLabels: 'Brukes i',
      notionsHeading: 'Begrepsforklaring',
      notionsRemove: 'Fjern',
      showVideo: 'Se video',
      showNotion: 'Se forklaring',
    },
    contextModal: {
      button: '+ {count} flere steder',
      heading: 'Ressursen er brukt flere steder',
    },
  },
  subjectPage: {
    errorDescription: 'Beklager, en feil oppsto under lasting av emnene.',
    tabs: {
      topics: 'Emner',
    },
    subjectShortcuts: {
      heading: 'Gå direkte til',
      showMore: 'Vis flere',
      showLess: 'Vis færre',
    },
    mostRead: {
      heading: 'Mest brukt',
    },
    editorsChoices: {
      heading: 'Litt forskjellig fra faget',
      unknown: 'Ukjent',
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
      heading: 'Har du fått med deg?',
    },
    subjectIsBeta: {
      iconLabel: 'i arbeid',
      dialogHeader: '{title} er under arbeid.',
      dialogText: 'Du kan lese mer om hva dette betyr på',
    },
  },
  subjectsPage: {
    errorDescription: 'Beklager, en feil oppsto under lasting av fagene.',
    chooseSubject: 'Velg fag',
  },
  topicPage: {
    articleErrorDescription:
      'Beklager, en feil oppsto under lasting av emnebeskrivelsen.',
    topic: 'EMNE',
    topics: 'Emner',
  },
  welcomePage: {
    search: 'Søk',
    searchDisclaimer:
      'Vi jobber stadig med å forbedre oss! Har du kommentarer til søket, blir vi glad om du legger dem inn i «spør NDLA» nede i høyre hjørne.',
    resetSearch: 'Tøm søk',
    closeSearch: 'Lukk søk',
    searchAllInfo: 'Se alle treff på søk',
    topicsConjunction: 'og',
    highlighted: 'Aktuelt',
    heading: {
      heading: 'Nasjonal digital læringsarena',
      searchFieldPlaceholder: 'Hva vil du lære om i dag?',
      messages: {
        searchFieldTitle: 'Søk',
        menuButton: 'Innhold',
      },
      links: {
        aboutNDLA: 'Om NDLA',
        changeLanguage: 'Skift språk',
      },
    },
    socialMedia: {
      heading: 'Følg oss',
      description:
        'NDLA har mange Facebook- og Twitter-kontoer. Finn den som passer for deg, og følg oss!',
      mainLink: {
        name: 'Følg oss',
      },
    },
    category: {
      fellesfag: 'Fellesfag',
      yrkesfag: 'Yrkesfag',
      studiespesialiserende: 'Studieforberedende',
      imported: 'Spolte fag',
      heading: 'Hva lærer du?',
    },
    errorDescription: 'Beklager, en feil oppsto under lasting av fagene.',
    film: {
      header: 'NDLA film',
      text:
        'NDLA film er en tjeneste i samarbeid med Norgesfilm. Denne tjenesten lar deg se en rekke spillefilmer, kortfilmer, dokumentarer og serier. Du kan også se undervisningsfilm og filmklipp. Velkommen inn i filmens verden!',
      textShort: 'Velkommen inn i filmens verden!',
      linkLabel: 'Gå til NDLA film',
    },
    blog: 'Fra bloggen',
  },
  meta: {
    description:
      'Kvalitetssikrede fritt tilgjengelige nettbaserte læremidler for videregående opplæring',
    keywords: 'læremiddel,fag,skole,videregående,lærling,pensum,fagstoff',
  },
  masthead: {
    skipToContent: 'Hopp til innhold',
    menu: {
      close: 'Lukk',
      goTo: 'Gå til',
      search: 'Søk',
      toFrontpage: 'Til forsiden',
      subjectOverview: 'Alle fag',
      title: 'Innhold',
      subjectPage: 'Fagforside',
      backToSubjectFrontpage: 'Tilbake til fagforsiden',
      openFilter: 'Filter',
      useFilter: 'Bruk filter',
      closeFilter: 'Lukk filter',
      learningResourcesHeading: 'Læringsressurser',
      back: 'Tilbake',
      additionalFilterLabel: 'Tilleggsressurser',
      contentTypeResultsShowMore: {
        [contentTypes.SUBJECT_MATERIAL]: 'Vis mer fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]:
          'Vis flere oppgaver og aktiviteter',
        [contentTypes.LEARNING_PATH]: 'Vis flere læringsstier',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Vis flere vurderingsressurser',
        [contentTypes.SOURCE_MATERIAL]: 'Vis flere kildematerialer',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]:
          'Vis flere eksterne læringsressurser',
      },
      contentTypeResultsShowLess: {
        [contentTypes.SUBJECT_MATERIAL]: 'Vis mindre fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]:
          'Vis færre oppgaver og aktiviteter',
        [contentTypes.LEARNING_PATH]: 'Vis færre læringsstier',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Vis færre vurderingsressurser',
        [contentTypes.SOURCE_MATERIAL]: 'Vis færre kildematerialer',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]:
          'Vis færre eksterne læringsressurser',
      },
      contentTypeResultsNoHit: {
        [contentTypes.SUBJECT_MATERIAL]: 'Ikke noe fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'Ingen oppgaver',
        [contentTypes.LEARNING_PATH]: 'Ingen læringsstier',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Ingen vurderingsressurser',
        [contentTypes.SOURCE_MATERIAL]: 'Ingen kildematerialer',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]:
          'Ingen eksterne læringsressurser',
      },
    },
  },
  logo: {
    altText: 'Nasjonal digital læringsarena',
  },
  resource: {
    errorDescription:
      'Beklager, men en feil oppsto under lasting av emneressurser.',
    error: 'Beklager, en del av innholdet kunne ikke vises.',
    noCoreResourcesAvailableUnspecific:
      'Det er ikke noe kjernestoff tilgjengelig.',
    noCoreResourcesAvailable: 'Det er ikke noe kjernestoff for {name}.',
    activateAdditionalResources: 'Tilleggsstoff',
    toggleFilterLabel: 'Tilleggsressurser',
    label: 'Læringsressurser',
    shortcutButtonText: 'Lærestoff',
    tooltipCoreTopic: 'Kjernestoff',
    tooltipAdditionalTopic: 'Tilleggsstoff',
    additionalTooltip: 'Tilleggsstoff',
    shortcutsTooltip: 'Vis {count} artikler i dette emnet',
    dialogTooltip: 'Hva er kjernestoff og tilleggsstoff?',
    dialogHeading: 'Kjernestoff og tilleggsstoff',
    dialogText1:
      'Når du lærer deg kjernestoffet, skaffer du deg den kompetansen som beskrives i læreplanen for faget.',
    dialogText2:
      'Tilleggsstoff er innhold i faget som du kan velge i tillegg til kjernestoffet. Gjennom tilleggsstoffet kan du fordype deg i et emne eller tilnærme deg emnet på en annen måte.',
    showLess: 'Vis mindre',
    showMore: 'Vis mer',
    youAreHere: 'Du er her',
    trait: {
      video: 'Video',
      h5p: 'Interaktiv',
    },
  },
  article: {
    lastUpdated: 'Sist oppdatert',
    edition: 'Utgave',
    publisher: 'Utgiver',
    useContent: 'Regler for bruk',
    closeLabel: 'Lukk',
    additionalLabel: 'Tilleggsstoff',
    urlContributionsLabel: 'Se hva {name} har bidratt med',
    urlAuthorLabel: 'Les mer om {name}',
    multipleAuthorsLabelAbbreviation: 'm. fl.',
    multipleAuthorsLabel: 'Tekst:',
    multipleAuthorsLabelAria: 'Tekst: {names}',
    multipleAuthorsLabelAriaConjunction: 'og',
    singleAuthorsLabel: 'Tekst:',
    singleAuthorsLabelAria: 'Tekst: {name}',
    copyPageLink: 'Kopier lenke til siden',
    copyPageLinkCopied: 'Lenke kopiert',
    conjunction: 'og',
    supplierLabel: 'Rettighetshaver:',
    multipleSuppliersLabel: 'Rettighetshavere:',
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
      'Søk på alle ressurser som passer til dette kompetansemålet',
    competenceGoalShowExtra: 'Vis støtte til læreplanen',
    competenceGoalCloseExtra: 'Skjul støtte til læreplanen',
    competenceCoreLabel: 'Kjerneelement',
    competenceTopicLabel: 'Tverrfaglige tema',
    competenceSubjectLabel: 'Fag',
    competenceCoreSearchText: 'Søk ressurser for kjerneelementet',
    competenceTopicSearchText: 'Søk ressurser for temaet',
    competenceSubjectSearchText: 'Gå til fagsiden',
    competenceGoalClose: 'Lukk',
    competenceGoalTitle: 'Målet er at eleven skal kunne:',
    competenceTabLK06label: 'Kompetansemål (LK06)',
    competenceTabLK20label: 'Kompetansemål (LK20)',
    competenceTabCorelabel: 'Kjerneelement',
  },
  subject: {
    associatedTopics: 'Tilhørende emner',
  },
  license: {
    heading: 'Slik gjenbruker du innhold',
    learnMore: 'Lær mer om åpne lisenser',
    copyTitle: 'Kopier referanse',
    hasCopiedTitle: 'Kopiert!',
    embed: 'Bygg inn',
    embedCopied: 'Kopierte innbyggingskode!',
    download: 'Last ned',
    tabs: {
      text: 'Tekst',
      images: 'Bilder',
      audio: 'Lyd',
      video: 'Video',
      h5p: 'H5P',
      files: 'Filer',
      embedlink: 'Innbyggingslenke',
      concept: 'Forklaringer',
      other: 'Annet innhold',
    },
    embedlink: {
      heading: 'Slik viser du artikkelen i annet innhold',
      description:
        'Denne lenken viser artikkelen uten kontekst(meny og bunntekst)',
      copyTitle: 'Kopier lenke',
      hasCopiedTitle: 'Lenke kopiert',
    },
    images: {
      heading: 'Slik bruker du bilder fra artikkelen',
      description:
        'Husk å kopiere teksten som skal legges ved bildet der du bruker det.',
      rules: 'Regler for bruk av bildet:',
      itemImage: {
        ariaLabel: 'Åpne bilde i et nytt vindu',
        zoomImageButtonLabel: 'Forstørr bilde',
        zoomOutImageButtonLabel: 'Forminsk bilde',
      },
      source: 'Kilde',
      title: 'Tittel',
    },
    text: {
      heading: 'Slik bruker du tekst fra artikkelen',
      description: 'Husk å henvise til kilden når du gjenbruker tekst.',
      rules: 'Regler for bruk av teksten:',
      published: 'Publiseringsdato',
    },
    audio: {
      heading: 'Slik bruker du lydfiler',
      description:
        'Husk å kopiere teksten som skal legges ved lydfilen der du bruker den.',
      rules: 'Regler for bruk av lydfilen:',
    },
    video: {
      heading: 'Slik bruker du video fra artikkelen',
      description:
        'Husk å kopiere teksten som skal legges ved videoen der du bruker den.',
      rules: 'Regler for bruk av videoen:',
      itemImage: {
        ariaLabel: 'Åpne video i et nytt vindu',
      },
    },
    other: {
      heading: 'Slik bruker du annet innhold fra artikkelen',
      description:
        'Du finner retningslinjene for bruk av innholdet i innholdselementet',
      itemImage: {
        ariaLabel: 'Åpne i nytt vindu',
      },
    },
    h5p: {
      heading: 'Slik bruker du H5P-innhold fra artikkelen',
      description:
        'Du finner retningslinjene for bruk av innholdet i H5P-elementet',
      rules: 'Regler for bruk av H5P:',
    },
    concept: {
      heading: 'Slik bruker du forklaringer fra artikkelen',
      description:
        'Du finner retningslinjene for bruk av innholdet i forklaring-elementet',
      rules: 'Regler for bruk av forklaring:',
      title: 'Tittel',
    },
    files: {
      heading: 'Slik bruker du filer fra artikkelen',
      description:
        'Husk å kopier teksten som skal legges ved filen der du bruker den.',
      rules: 'Regler for bruk av filen:',
      itemImage: {
        ariaLabel: 'Åpne i nytt vindu',
      },
    },
    creditType: {
      originator: 'Opphaver',
      authorDesc: 'Denne artikkelen er laget av flere opphavere',
      photographer: 'Fotograf',
      artist: 'Kunstner',
      editorial: 'Redaksjonelt',
      writer: 'Forfatter',
      scriptwriter: 'Manusforfatter',
      reader: 'Innleser',
      translator: 'Oversetter',
      director: 'Regissør',
      illustrator: 'Illustratør',
      cowriter: 'Medforfatter',
      composer: 'Komponist',
      processor: 'Bearbeider',
      facilitator: 'Tilrettelegger',
      linguistic: 'Språklig',
      idea: 'Idé',
      compiler: 'Sammenstiller',
      correction: 'Korrektur',
      rightsholder: 'Rettighetshaver',
      publisher: 'Forlag',
      distributor: 'Distributør',
      supplier: 'Leverandør',
    },
  },
  errorMessage: {
    title: 'Ops, noe gikk galt',
    description: 'Beklager, en feil oppsto.',
    linksTitle: 'Kom igang:',
    back: 'Gå tilbake',
    goToFrontPage: 'Gå til forsiden',
  },
  footer: {
    aboutNDLA: 'Om NDLA',
    selectLanguage: 'Velg språk (language): ',
    vision:
      'NDLA sin visjon er å lage gode, åpne digitale læremidler for alle fag i videregående opplæring og støtte opp om elever og lærere i aktivt og deltakende læringsarbeid.',
    footerLinksHeader: 'Andre NDLA nettsteder',
    footerInfo: 'Nettstedet er utarbeidet av NDLA med åpen kildekode.',
    footerEditiorInChief: 'Ansvarlig redaktør: ',
    footerManagingEditor: 'Utgaveansvarlig: ',
    footerPrivacyLink: 'Personvernerklæring',
    socialMediaLinks: {
      facebook: 'NDLA på Facebook',
      facebookAria: 'Besøk NDLA på Facebook',
      newsletter: 'Meld deg på vårt nyhetsbrev',
      newsletterAria: 'Meld deg på vårt nyhetsbrev',
      youtube: 'NDLA på YouTube',
      youtubeAria: 'NDLA på YouTube',
      twitter: 'NDLA på Twitter',
      twitterAria: 'Besøk NDLA på Twitter',
      sharePage: 'Del denne siden',
      sharePageAria: 'Del denne siden',
    },
    ndlaLinks: {
      ndla: 'ndla.no',
      omNdla: 'Om NDLA',
      aboutNdla: 'About NDLA',
      blog: 'Fagblogg',
      tips: 'Tips til elever',
      fyr: 'FYR-prosjektet',
      sharing: 'Delingsarena',
      vacancies: 'Ledige stillinger',
    },
  },
  contentTypes: {
    all: 'Alle',
    subject: 'Fag',
    'topic-article': 'Emne',
    'learning-path': 'Læringssti',
    'subject-material': 'Fagstoff',
    'tasks-and-activities': 'Oppgaver og aktiviteter',
    'external-learning-resources': 'Ekstern læringsressurs',
    'source-material': 'Kildemateriale',
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
    prefixChangeLanguage: 'Velg målform',
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
    toFrontpage: 'NDLA forside',
    youAreHere: 'Du er her',
    breadcrumb: 'Brødsmulesti',
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
      label: 'Tilknyttede artikler',
    },
    hits: '{count} treff',
  },
  notions: {
    closeNotion: 'Lukk',
  },
  carousel: {
    back: 'Bla tilbake',
    forward: 'Bla fremover',
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
    slideForwardsLabel: 'Scroll fremover',
    movieMatchInCategory: 'Treff',
    loadingMovies: 'Henter filmer...',
    subjectsInMovies: 'Emner i film',
    about: {
      heading: 'Om NDLA Film',
      more: 'Les mer om NDLA film',
      text:
        'Ndla film er en nettbasert filmtjeneste for elever og lærere i videregående skole. Her funner du spillefilmer, kortfilmer, dokumentarfilmer og TV-serier.',
    },
    search: {
      placeholder: 'Søk på filmnavn',
      categoryFromNdla: 'Utvalg fra NDLA',
      chooseCategory: 'Velg filmkategori:',
      subjectButton: 'Gå til emne',
    },
    editor: {
      slideshowHeader: 'Slideshow:',
      slideshowTitle: 'Filmer i slideshow',
      slideshowSubTitle: 'på forsiden',
      movieGroupHeader: 'Film grupperinger:',
      addMovieToSlideshow: 'Legg til film i slideshow',
      addMovieToGroup: 'Legg til film i "{name}"',
      editMovieGroupName: 'Endre navnene til filmgruppen',
      deleteMovieGroup: 'Slett "{name}"',
      moveMovieGroupUp: 'Flytt opp',
      moveMovieGroupDown: 'Flytt ned',
      changeOrder: 'Endre rekkefølge',
      removeMovieFromGroup: 'Ta vekk film fra gruppe',
      removeMovieFromSlideshow: 'Ta vekk film fra slideshow',
      createThemeGroup: 'Opprett gruppe',
      saveNameChanges: 'Lagre endringer',
      cancel: 'Avbryt',
      groupNamePlaceholder: 'Skriv navn på {lang}',
      editGroupTitle: 'Endre navn(ene) på filmgruppen:',
      newGroupTitle: 'Hva skal gruppen hete?',
    },
  },
  filmfrontpage: {
    resourcetype: {
      documentary: 'Dokumentar',
      featureFilm: 'Spillefilm',
      series: 'Tv-serie',
      shortFilm: 'Kortfilm',
      all: 'Alle filmer A-Å',
    },
    moreAboutNdlaFilm: {
      header: 'NDLA Film',
      firstParagraph:
        'Filmene i filmtjenesten er hentet fra norsk og internasjonal filmarv og kobles mot læreplaner i flere fag. De er valgt ut av NDLAs redaksjoner i samarbeid med Norgesfilm AS.',
      secondParagraph:
        'Du kan se filmene om du er koblet til Internett via datamaskinen, nettbrettet eller smarttelefonen din. Vi har gjort jobben med rettighetsklarering og betaling. Alt du trenger å gjøre, er å trykke play.',
      thirdParagraph:
        'Filmene er copyrightmerket. De kan fritt spilles av på ndla.no, men ikke lastes ned eller distribueres videre i andre publikasjoner. Alle rettighetshavere honoreres for de avspillinger som gjøres.',
      secondHeading: 'Bruk film i undervisningen',
      fourthParagraph:
        'En film forteller historier på måter som engasjerer og berører oss. I film brukes noen av de mest effektive visuelle virkemidlene som finnes; bevegelige bilder og lyd. En god film kan vise sider ved samtiden og gi visjoner om framtiden eller kommentere fortiden. Derfor kan film ofte gi oss bedre forståelse av hendelser, kulturmøter og historie enn en fagtekst.',
      fifthParagraph:
        'Ved å se film blir elevene bedre rustet til å lese filmspråket, slik at filmen får en verdi ut over det rent underholdningsmessige. Den generelle delen av læreplanen legger vekt på at elevene skal møte kunst og kulturformer som stimulerer, inspirerer egen skaperevne, og fremmer etisk orienteringsevne og estetisk sans.',
      tipSectionPt1: 'Kom gjerne med tips, spørsmål eller filmønsker på',
      tipSectionPt2: 'Facebook-siden',
      ariaLabel: 'Besøk Facebooksiden til NDLA-film',
      tipSectionPt3: 'vår',
      ending: 'Vi ønsker alle filmelskere en god og lærerik opplevelse!',
    },
  },
  learningPath: {
    createLearningPathText:
      'Lag din egen, kopier denne eller se flere læringsstier?',
    createLearningPathButtonText: 'Gå til stier',
    lastUpdated: 'Sist oppdatert',
    youAreInALearningPath: 'Du er nå inne i en læringssti',
    readTimeHour: 'time',
    readTimeHour_plurals: 'timer',
    readTimeMinutesShort: 'min',
    pageOf: 'av',
    lastStep: {
      heading: 'Siste steg i læringsstien',
      headingSmall:
        'Du er nå på siste steget i læringsstien {learningPathName}',
      topicHeading: 'Gå til emne:',
      subjectHeading: 'Gå til faget:',
    },
    openMenuTooltip: 'Vis læringssti',
    mobileStepInfo: '{currentPage} av {totalPages}',
    nextArrow: 'Neste',
    previousArrow: 'Forrige',
  },
  dropdown: {
    numberHits: `Søket gav {hits} treff`,
    searching: 'Søker...',
    create: 'Opprett ny',
    isSelectedItem: 'Lagt til',
  },
  blogPosts: {
    blog1: {
      text: 'Hva skjer med fagfornyelsen på NDLA?',
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
      who: 'Hvem',
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
    text: 'er utarbeidet av',
  },
  fagfornyelse: {
    frontpage: {
      heading: 'Velkommen til sniktitt på Fagfornyelsen i NDLA',
      text:
        'Høsten 2020 vil de nye læreplanene tre i kraft. I NDLA har vi startet med dette arbeidet allerede. Våre innholdsansvarlige lager hver dag nye supre læringsressurser som er tilrettelagt for de nye planene. På denne siden kan du se dem allerede nå.',
      blogHeading: 'Vil du vite mer?',
    },
    badge: {
      heading: 'Denne siden er tilrettelagt for fagfornyelsen 2020',
      text: 'Innholdet er under arbeid. Ikke på jakt etter dette?',
      linkText: 'Gå til ndla.no for dagens innhold',
    },
  },
  frontPageToolbox: {
    heading: 'Verktøykassa',
    text:
      'Har du lyst til å bli god til å presentere, eller vil du lære å studere smartere ved hjelp av riktig studieteknikk? Trenger du råd om hvordan du leser mest mulig effektivt til eksamen? I verktøykassa til NDLA finner du masse gode tips og råd!',
    linkText: 'Se alle tipsene i verktøykassa her',
    cursorText: 'Tips',
  },
  frontpageMultidisciplinarySubject: {
    heading: 'Tverrfaglige temaer',
    text:
      'De tre tverrfaglige temaene i læreplanverket tar utgangspunkt i aktuelle samfunnsutfordringer som krever engasjement og innsats fra enkeltmennesker og fellesskapet i lokalsamfunnet, nasjonalt og globalt.',
    linkText: 'Se caser for tverrfaglige temaer',
    publicHealthTopic: 'Folkehelse og livsmestring',
    democracyTopic: 'Demokrati og medborgerskap',
    sustainableTopic: 'Bærekraftig utvikling',
    cursorText: 'Nyhet',
  },
  frontpageMenu: {
    program: 'Utdanningsprogram',
    allsubjects: 'Alle fag',
    cursorText: 'Finn lærestoff, oppgaver, filmer m.m.',
  },
  navigation: {
    showLongerDescription: 'Les emnebeskrivelse',
    showShorterDescription: 'Skjul emnebeskrivelse',
    topics: 'Emner',
    additionalTopic: 'Tillegsemne',
    additionalTopics: 'Tillegsemner',
    loadingText: 'Laster emne',
  },
  multidisciplinarySubject: {
    subjectsLinksDescription: 'Case innen',
  },
  close: 'Lukk',
  title: 'Tittel',
  image: {
    download: 'Last ned bildet',
    reuse: 'Bruk bildet',
    largeSize: 'Se stor utgave av bilde',
    error: {
      url: 'Feil ved lasting av bildet.',
      caption: 'Beklager, en feil oppsto ved lasting av bildet.',
    },
  },
  audio: {
    download: 'Last ned lydfil',
    reuse: 'Bruk lydfil',
    error: {
      url: 'Feil ved lasting av lydfila.',
      caption: 'Beklager, en feil oppsto ved lasting av lydfil.',
    },
    controls: {
      forward15sec: 'Spol 15 sekunder frem',
      rewind15sec: 'Spol 15 sekunder tilbake',
      selectSpeed: 'Velg avspillingshastighet',
      adjustVolume: 'Endre volum',
    },
    textVersion: {
      heading: 'Tekstversjon',
      close: 'Lukk tekstversjon',
    },
  },
  video: {
    download: 'Last ned video',
    reuse: 'Bruk video',
    error:
      'Beklager, en feil oppstod ved lasting av videoen eller metadata om videoen.',
  },
  concept: {
    showDescription: 'Vis beskrivelsen av forklaringen.',
    error: {
      title: 'En feil oppstod ikke',
      content: 'Kunne ikke laste beskrivelsen av forklaringen.',
    },
  },
  source: 'Kilde',
  related: {
    title: 'Relatert innhold',
    linkInfo: 'Nettside hos',
    showMore: 'Vis mer relatert innhold',
    showLess: 'Vis mindre',
  },
  'external.error': 'En feil oppstod ved lasting av en ekstern ressurs.',
  'h5p.error': 'En feil oppstod ved lasting av H5P.',
  files: 'Filer',
  download: 'Last ned fil: ',
  expandButton: 'Vis stor versjon',
  ...contributorTypes.nb,
  filterButtons: {
    removeAllFilters: 'Fjern filter',
  },
};

export default messages;
