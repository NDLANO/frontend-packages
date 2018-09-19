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
      'language-filter': 'Språk:',
      subjects: 'Fag:',
      noFilter: 'Ingen filter valgt',
      createdBy: 'Laget av:',
    },
    showLabel: {
      contentTypes: 'Flere innholdstyper',
      levels: 'Flere nivåer',
      'language-filter': 'Flere språk',
      subjects: 'Bytt fag',
    },
    hideLabel: {
      contentTypes: 'Færre innholdstyper',
      levels: 'Færre nivåer',
      'language-filter': 'Færre språk',
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
      heading: 'Nytt innhold',
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
      additionalFilterLabel: 'Vis tilleggsressurser',
      contentTypeResultsShowMore: {
        [contentTypes.SUBJECT_MATERIAL]: 'Vis mer fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]:
          'Vis flere oppgaver og aktiviteter',
        [contentTypes.LEARNING_PATH]: 'Vis flere læringsstier',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Vis flere vurderingsressurser',
        [contentTypes.SOURCE_MATERIAL]: 'Vis flere kildematerialer',
      },
      contentTypeResultsShowLess: {
        [contentTypes.SUBJECT_MATERIAL]: 'Vis mindre fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]:
          'Vis færre oppgaver og aktiviteter',
        [contentTypes.LEARNING_PATH]: 'Vis færre læringsstier',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Vis færre vurderingsressurser',
        [contentTypes.SOURCE_MATERIAL]: 'Vis færre kildematerialer',
      },
      contentTypeResultsNoHit: {
        [contentTypes.SUBJECT_MATERIAL]: 'Ikke noe fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'Ingen oppgaver',
        [contentTypes.LEARNING_PATH]: 'Ingen læringsstier',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Ingen vurderingsressurser',
        [contentTypes.SOURCE_MATERIAL]: 'Ingen kildematerialer',
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
      'Tilleggstoff er innhold i faget som du kan velge i tillegg til kjernestoffet. Gjennom tilleggsstoffet kan du fordype deg i et emne eller tilnærme deg emnet på en annen måte.',
    showLess: 'Vis mindre',
    showMore: 'Vis mer',
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
    multipleAuthorsLabel: 'Opphavsmenn',
    multipleAuthorsExplanation:
      'Denne artikkelen er laget av flere opphavsmenn',
  },
  competenceGoals: {
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
      files: 'Filer',
      other: 'Annet innhold',
    },
    images: {
      heading: 'Slik bruker du bilder fra artikkelen',
      description:
        'Husk å kopiere teksten som skal legges ved bildet der du bruker det.',
      rules: 'Regler for bruk av bildet:',
      source: 'Kilde',
      title: 'Tittel',
    },
    text: {
      heading: 'Slik bruker du tekst fra artikkelen',
      description:
        'Artikkelen kan være sammensatt av flere tekster som listes opp her.',
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
  breadcrumb: {
    toFrontpage: 'Til forsiden',
  },
};

export default messages;
