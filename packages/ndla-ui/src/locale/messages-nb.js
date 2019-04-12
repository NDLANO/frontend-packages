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
    welcomePage: `Forsiden${titleTemplate}`,
    topicPage: 'Emne',
    subjectsPage: `Velg fag${titleTemplate}`,
    searchPage: `Søk${titleTemplate}`,
    notFound: `Siden finnes ikke${titleTemplate}`,
  },
  newsLetter: {
    heading: 'Nyhetsbrev',
    description: 'Hold deg oppdatert. Abonnér på siste nytt fra NDLA.',
    mainLinkName: 'Meld deg på',
    iconLinkName: 'Meld deg på nyhetsbrev',
  },
  askNDLA: 'Spør NDLA',
  articlePage: {
    errorDescription: 'Beklager, en feil oppsto under lasting av ressursen.',
    error404Description: 'Beklager, finner ikke ressursen du leter etter.',
  },
  notFoundPage: {
    errorDescription: 'Beklager, finner ikke siden du prøvde å komme til.',
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
      contentTypeResultNoHit: 'Ingen treff',
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
      filterLabel: 'Velg fag',
      confirmButton: 'Oppdater filter',
      hasValuesButtonText: 'Flere fag',
      noValuesButtonText: 'Filtrer på fag',
      useFilter: 'Bruk filter',
      closeFilter: 'Lukk filter',
      coreRelevance: 'Kjernestoff',
      supplementaryRelevance: 'Tilleggsstoff',
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
    highlighted: 'Aktuelt',
    heading: {
      heading: 'Nasjonal digital læringsarena',
      searchFieldPlaceholder: 'Søk etter f.eks emner, lærestoff, nøkkelord...',
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
        'NDLA har mange facebook- og twitterkontoer. Finn den som passer for deg, og følg oss!',
      mainLink: {
        name: 'Følg oss',
      },
    },
    aboutNDLA: {
      heading: 'Om NDLA',
      description:
        'NDLAs visjon er å lage gode, åpne digitale læremidler for alle fag i videregående opplæring og støtte opp om elever og lærere i aktivt og deltakende læringsarbeid.',
      mainLink: {
        name: 'Mer om NDLA',
      },
    },
    category: {
      fellesfag: 'Fellesfag',
      yrkesfag: 'Yrkesfag',
      studiespesialiserende: 'Studiespesialisering',
      imported: 'Spoltefag',
    },
    errorDescription: 'Beklager, en feil oppsto under lasting av fagene.',
    film: {
      header: 'NDLA film',
      text:
        'NDLA film er en tjeneste i samarbeid med Norgesfilm. Denne tjenesten lar deg se en rekke spillefilmer, kortfilmer, dokumentarer og serier. Du kan også se undervisningsfilm og filmklipp. Velkommen inn i filmens verden!',
      textShort: 'Velkommen inn i filmens verden!',
      linkLabel: 'Gå til NDLA film',
    },
  },
  meta: {
    description:
      'Kvalitetssikrede fritt tilgjengelige nettbaserte læremidler for videregående opplæring',
    keywords: 'læremiddel,fag,skole,videregående,lærling,pensum,fagstoff',
  },
  masthead: {
    menu: {
      close: 'Lukk',
      goTo: 'Gå til',
      search: 'Søk',
      subjectOverview: 'Alle fag',
      title: 'Meny',
      subjectPage: 'Fagforside',
      backToSubjectFrontpage: 'Tilbake til fagforsiden',
      openFilter: 'Filter',
      useFilter: 'Bruk filter',
      closeFilter: 'Lukk filter',
      learningResourcesHeading: 'Læringsressurser',
      back: 'Tilbake',
      additionalFilterLabel: 'Vis tilleggsressurser',
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
    noCoreResourcesAvailableUnspecific:
      'Det er ikke noe kjernestoff tilgjengelig.',
    noCoreResourcesAvailable: 'Det er ikke noe kjernestoff for {name}.',
    activateAdditionalResources: 'Vis tilleggsstoff',
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
      'Når du lærer deg kjernestoffet skaffer du deg den kompetansen som beskrives i læreplanen for faget.',
    dialogText2:
      'Tilleggsstoff er innhold i faget som du kan velge i tillegg til kjernestoffet. Gjennom tilleggsstoffet kan du fordype deg i et emne eller tilnærme deg emnet på en annen måte.',
    showLess: 'Vis mindre',
    showMore: 'Vis mer',
    youAreHere: 'Du er her',
  },
  article: {
    lastUpdated: 'Sist oppdatert',
    edition: 'Utgave',
    publisher: 'Utgiver',
    useContent: 'Bruk innhold',
    closeLabel: 'Lukk',
    additionalLabel: 'Tilleggsstoff',
    urlContributionsLabel: 'Se hva {name} har bidratt med',
    urlAuthorLabel: 'Les mer om {name}',
    multipleAuthorsLabelAbbreviation: 'm. fl.',
    multipleAuthorsLabel: 'Rettighetshavere:',
    multipleAuthorsLabelAria: 'Rettighetshavere er {names}',
    multipleAuthorsLabelAriaConjunction: 'og',
    singleAuthorsLabelAria: 'Rettighetshaver av artikkelen er {name}',
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
      other: 'Annet innhold',
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
      originator: 'Opphavsmann',
      authorDesc: 'Denne artikkelen er laget av flere opphavsmenn',
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
    footerInfo: 'Nettstedet er utarbeidet av NDLA med åpen kildekode.',
    footerEditiorInChief: 'Ansvarlig redaktør: ',
    footerManagingEditor: 'Utgaveansvarlig: ',
  },
  contentTypes: {
    all: 'Alle',
    subject: 'Emne',
    'topic-article': 'Emne',
    'learning-path': 'Læringssti',
    'subject-material': 'Fagstoff',
    'tasks-and-activities': 'Oppgaver og aktiviteter',
    'external-learning-resources': 'Ekstern læringsressurs',
    'source-material': 'Kildemateriale',
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
  changeLanguage: {
    nb: 'Endre språk til bokmål',
    nn: 'Endre språk til nynorsk',
    en: 'Change language to English',
  },
  currentLanguageText: {
    nb: 'Sidene vises på bokmål',
    nn: 'Sidane vises på nynorsk',
    en:
      'Not all pages are available in English. These will be shown in Norwegian',
  },
  breadcrumb: {
    toFrontpage: 'Til forsiden',
  },
  listview: {
    filters: {
      subject: {
        useFilter: 'Bruk filter',
        openFilter: 'Filtrer på fag',
        closeFilter: 'Lukk filter',
      },
      category: {
        useFilter: 'Bruk filter',
        openFilter: 'Filtrer på kategori',
        closeFilter: 'Lukk filter',
      },
    },
  },
  notions: {
    closeNotion: 'Lukk',
  },
  carousel: {
    back: 'Bla tilbake',
    forward: 'Bla fremover',
  },
  ndlaFilm: {
    slideBackwardsLabel: 'Scroll bakover',
    slideForwardsLabel: 'Scroll fremover',
    movieMatchInCategory: 'Treff',
    loadingMovies: 'Henter filmer..',
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
    },
    moreAboutNdlaFilm: {
      header: 'NDLA Film',
      firstParagraph:
        'Filmene i filmtjenesten er hentet fra norsk og internasjonal filmarv og kobles mot læreplaner i flere fag. De er valgt ut av NDLAs redaksjoner i samarbeid med Norgesfilm AS og Norsk filminstitutt.',
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
};

export default messages;
