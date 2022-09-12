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
      edit: 'Endre mappenavn',
      delete: 'Slett',
    },
    createFolder: 'Lag mappe',
    maxFoldersAlreadyAdded: 'Maks nivå av undermapper nådd',
    newFolder: {
      placeholder: 'Skriv navn på mappe',
      defaultName: 'Ny mappe',
    },
  },
  tagSelector: {
    label: 'Legg til emneknagg',
    placeholder: 'Skriv inn emneknagg',
    removeTag: 'Ta vekk {{name}}',
    hideAllTags: 'Skjul alle emneknagger',
    showAllTags: 'Vis alle emneknagger',
  },
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
    errorDescription: 'Beklager, en feil oppstod under lasting av ressursen.',
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
  subjectCategories: {
    [subjectCategories.ACTIVE_SUBJECTS]: 'Aktive',
    [subjectCategories.ARCHIVE_SUBJECTS]: 'Utgåtte',
    [subjectCategories.BETA_SUBJECTS]: 'Kommende',
    [subjectCategories.COMMON_SUBJECTS]: 'Fellesfag',
    [subjectCategories.PROGRAMME_SUBJECTS]: 'Programfag SF',
    [subjectCategories.SPECIALIZED_SUBJECTS]: 'Yrkesfag',
  },
  subjectTypes: {
    [subjectTypes.SUBJECT]: 'Fag',
    [subjectTypes.RESOURCE_COLLECTION]: 'Ressurssamling',
  },
  searchPage: {
    noHits: 'Ingen artikler samsvarte med søket ditt på: {{query}}',
    noHitsShort: 'Ingen treff på søk: {{query}}',
    removeFilterSuggestion: 'Prøv å fjerne filter',
    search: 'Søk',
    close: 'Lukk',
    abilities: 'Egenskaper',
    searchFieldPlaceholder: 'Søk i fagstoff, oppgaver og aktiviteter eller læringsstier',
    searchFieldPlaceholderShort: 'Søk',
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
      subHeading: '{{totalCount}} treff i NDLA',
    },
    searchResultListMessages: {
      subjectsLabel: 'Åpne i fag:',
      noResultHeading: 'Hmm, ikke noe innhold ...',
      noResultDescription:
        'Vi har dessverre ikke noe å tilby her. Hvis du vil foreslå noe innhold til dette området, kan du bruke Spør NDLA som du finner nede til høyre på skjermen.',
    },
    searchPageMessages: {
      filterHeading: 'Filter',
      resultHeading: '{{totalCount}} treff i NDLA',
      resultHeadingByAuthor: '{{totalCount}} artikler skrevet av {{author}}',
      narrowScreenFilterHeading: '{{totalCount}} treff på «{{query}}»',
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
      removeFilter: 'Fjern filter {{filterName}}',
      additionalSubjectFilters: '+ {{count}} fag',
      coreRelevance: 'Kjernestoff',
      supplementaryRelevance: 'Tilleggsstoff',
      resourceTypeFilter: {
        heading: 'Filtrer på innholdstype',
        button: 'Filtrer på innholdstype',
      },
    },
    resultType: {
      showing: 'Viser {{count}} av {{totalCount}} {{contentType}}',
      showingAll: 'Viser alle',
      showMore: 'Vis mer',
      showAll: 'Vis alle',
      toTopOfPage: 'Til toppen',
      toSubjectPageLabel: 'Gå til fagsiden',
      all: 'Alle',
      allContentTypes: 'Alle innholdstyper',
      hits: '{{count}} treff',
      showingSearchPhrase: 'Viser treff for',
      showingCompetenceGoalSearchPhrase: 'Viser resultater for kompetansemål {text}',
      searchPhraseSuggestion: 'Søk heller',
      notionLabels: 'Brukes i',
      notionsHeading: 'Begrepsforklaring',
      notionsRemove: 'Fjern',
      showVideo: 'Se video',
      showNotion: 'Se forklaring',
      gridView: 'Gallerivisning',
      listView: 'Listevisning',
    },
    contextModal: {
      button: '+ {{count}} flere steder',
      heading: 'Ressursen er brukt flere steder',
      ariaLabel: 'Se flere kontekster',
    },
  },
  subjectPage: {
    errorDescription: 'Beklager, en feil oppstod under lasting av emnene.',
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
      dialogHeader: '{{title}} er under arbeid.',
      dialogText: 'Du kan lese mer om hva dette betyr på',
    },
    archived: 'Dette er et utgått fag som ikke vedlikeholdes.',
  },
  subjectsPage: {
    errorDescription: 'Beklager, en feil oppstod under lasting av fagene.',
    chooseSubject: 'Velg fag',
  },
  topicPage: {
    articleErrorDescription: 'Beklager, en feil oppstod under lasting av emnebeskrivelsen.',
    topic: 'EMNE',
    topics: 'Emner',
    imageModal: 'Se bildet i full størrelse',
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
      description: 'NDLA har mange Facebook- og Twitter-kontoer. Finn den som passer for deg, og følg oss!',
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
    errorDescription: 'Beklager, en feil oppstod under lasting av fagene.',
    film: {
      header: 'NDLA film',
      text: 'NDLA film er en tjeneste i samarbeid med Norgesfilm. Denne tjenesten lar deg se en rekke spillefilmer, kortfilmer, dokumentarer og serier. Du kan også se undervisningsfilm og filmklipp. Velkommen inn i filmens verden!',
      textShort: 'Velkommen inn i filmens verden!',
      linkLabel: 'Gå til NDLA film',
    },
    blog: 'Fra bloggen',
  },
  meta: {
    description: 'Kvalitetssikrede og fritt tilgjengelige nettbaserte læremidler for videregående opplæring',
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
      modalLabel: 'Velg innhold',
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
        [contentTypes.TASKS_AND_ACTIVITIES]: 'Vis flere oppgaver og aktiviteter',
        [contentTypes.LEARNING_PATH]: 'Vis flere læringsstier',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Vis flere vurderingsressurser',
        [contentTypes.SOURCE_MATERIAL]: 'Vis flere kildematerialer',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]: 'Vis flere eksterne læringsressurser',
        unGrouped: 'Vis flere ressurser',
      },
      contentTypeResultsShowLess: {
        [contentTypes.SUBJECT_MATERIAL]: 'Vis mindre fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'Vis færre oppgaver og aktiviteter',
        [contentTypes.LEARNING_PATH]: 'Vis færre læringsstier',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Vis færre vurderingsressurser',
        [contentTypes.SOURCE_MATERIAL]: 'Vis færre kildematerialer',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]: 'Vis færre eksterne læringsressurser',
        unGrouped: 'Vis færre ressurser',
      },
      contentTypeResultsNoHit: {
        [contentTypes.SUBJECT_MATERIAL]: 'Ikke noe fagstoff',
        [contentTypes.TASKS_AND_ACTIVITIES]: 'Ingen oppgaver',
        [contentTypes.LEARNING_PATH]: 'Ingen læringsstier',
        [contentTypes.ASSESSMENT_RESOURCES]: 'Ingen vurderingsressurser',
        [contentTypes.SOURCE_MATERIAL]: 'Ingen kildematerialer',
        [contentTypes.EXTERNAL_LEARNING_RESOURCES]: 'Ingen eksterne læringsressurser',
        unGrouped: 'Ingen ressurser',
      },
    },
  },
  logo: {
    altText: 'Nasjonal digital læringsarena',
  },
  resource: {
    errorDescription: 'Beklager, men en feil oppstod under lasting av emneressurser.',
    error: 'Beklager, en del av innholdet kunne ikke vises.',
    noCoreResourcesAvailableUnspecific: 'Det er ikke noe kjernestoff tilgjengelig.',
    noCoreResourcesAvailable: 'Det er ikke noe kjernestoff for {{name}}.',
    activateAdditionalResources: 'Tilleggsstoff',
    toggleFilterLabel: 'Tilleggsressurser',
    label: 'Læringsressurser',
    allResources: 'Ressurser',
    shortcutButtonText: 'Lærestoff',
    tooltipCoreTopic: 'Kjernestoff',
    tooltipAdditionalTopic: 'Tilleggsstoff',
    additionalTooltip: 'Tilleggsstoff',
    shortcutsTooltip: 'Vis {{count}} artikler i dette emnet',
    dialogTooltip: 'Hva er kjernestoff og tilleggsstoff?',
    dialogHeading: 'Kjernestoff og tilleggsstoff',
    dialogText1: 'Når du lærer deg kjernestoffet, skaffer du deg den kompetansen som beskrives i læreplanen for faget.',
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

  messageBoxInfo: {
    outdatedCoursePlan:
      'Dette faget følger en utgått læreplan. Gå til faget som er oppdatert etter gjeldende læreplan:',
    updateBrowser:
      'Nettleseren din er utdatert. Oppdater den, eller finn en trygg og oppdatert nettleser på https://browsehappy.com.',
    noContent: 'Vi har dessverre ikke noen programfag ennå.',
    feide: 'Denne ressursen er bare tilgjengelig for lærere som er pålogget med Feide.',
    resources: 'Dette er ikke et komplett læremiddel, men ei ressurssamling som vi håper kan være nyttig for deg.',
    subjectOutdated: 'Dette faget følger en utgått læreplan.',
    subjectBeta: 'Dette faget er i betaversjon. Vi fyller på med ressurser fortløpende.',
    newVersion:
      'Denne læringsressursen er ikke oppdatert etter gjeldende læreplan. Du finner en oppdatert versjon her: ',
    frontPageBeta:
      'Kommende fag er tilpassa ny læreplan som gjelder fra høsten 2022. Betafag er fag under arbeid. Vi håper likevel at læringsressursene i betafaga kan være nyttige allerede nå.',
    frontPageExpired:
      'Utgåtte fag undervises det ikke i lenger, men det kan fortsatt være mulig å ta eksamen i faga som privatist.',
    frontPageRevised: 'Kommende fag er tilpassa ny læreplan som gjelder fra høsten 2022.',
  },
  article: {
    lastUpdated: 'Sist oppdatert',
    edition: 'Utgave',
    publisher: 'Utgiver',
    useContent: 'Regler for bruk',
    closeLabel: 'Lukk',
    additionalLabel: 'Tilleggsstoff',
    urlContributionsLabel: 'Se hva {{name}} har bidratt med',
    urlAuthorLabel: 'Les mer om {name}',
    multipleAuthorsLabelAbbreviation: 'm. fl.',
    authorsLabel: 'Skrevet av {{names}}',
    multipleAuthorsLabelAriaConjunction: 'og',
    copyPageLink: 'Kopier lenke til siden',
    copyPageLinkCopied: 'Lenke kopiert',
    copyHeaderLink: 'Kopier lenke til overskriften',
    conjunction: 'og',
    supplierLabel: 'Rettighetshaver: {{name}}',
    multipleSuppliersLabel: 'Rettighetshavere: {{names}}',
    writtenBy: 'Skrevet av {{authors}}',
    cite: 'Bruk innhold',
    notionsPrompt: 'Kan du begrepene?',
    citeNotion: 'Bruk forklaringen',
    printPage: 'Skriv ut',
    access: {
      onlyTeacher: 'Denne ressursen er bare tilgjengelig for lærere som er pålogget med Feide.',
    },
    possiblyOutdated: 'Artikkelen er foreldet.',
  },
  competenceGoals: {
    competenceGoal: 'kompetansemål',
    title: 'Kompetansemål og læreplan',
    modalText: 'Utforsk læreplankoblinger',
    closeCompetenceGoals: 'Lukk kompetansemål',
    showCompetenceGoals: 'Vis kompetansemål',
    openCompentenceGoalsFilter: 'Filtrer kompetansemål',
    useCompentenceGoalsFilter: 'Bruk filter',
    closeCompentenceGoalsFilter: 'Lukk filter',
    competenceGoalsNarrowBackButton: 'Tilbake',
    competenceGoalResourceSearchText: 'Søk på alle ressurser som passer til dette kompetansemålet',
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
    competenceGoalItem: {
      title: 'Kompetansemål og vurdering',
    },
    licenseData: 'Inneholder data under',
    licenseFrom: 'tilgjengeliggjort på',
  },
  subject: {
    associatedTopics: 'Tilhørende emner',
  },
  accordion: {
    closeAll: 'Lukk alle',
    openAll: 'Åpne alle',
  },
  license: {
    heading: 'Slik gjenbruker du innhold',
    learnMore: 'Lær mer om åpne lisenser',
    copyTitle: 'Kildehenvisning',
    hasCopiedTitle: 'Kopiert!',
    embed: 'Bygg inn',
    embedCopied: 'Kopierte innbyggingskode!',
    copyText: {
      now: 'nå',
      podcast: 'podkast',
      by: 'av',
      internet: '[Internett]. ',
      noTitle: 'Uten tittel',
      downloadedFrom: 'Hentet fra: ',
      readDate: 'Lest: ',
    },
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
      podcast: 'Podkast',
      other: 'Annet innhold',
    },
    embedlink: {
      heading: 'Slik viser du artikkelen i annet innhold',
      description: 'Denne lenken viser artikkelen uten kontekst (meny og bunntekst)',
      copyTitle: 'Kopier lenke',
      hasCopiedTitle: 'Lenke kopiert',
    },
    image: {
      rules: 'Regler for bruk av bildet:',
    },
    images: {
      heading: 'Slik gjenbruker du bilder',
      description: 'Husk å kopiere teksten som skal legges ved bildet der du bruker det.',
      rules: 'Regler for bruk av bildet:',
      itemImage: {
        ariaLabel: 'Åpne bilde i et nytt vindu',
        zoomImageButtonLabel: 'Forstørr bilde',
        zoomOutImageButtonLabel: 'Forminsk bilde',
        expandByline: 'Vis byline',
        minimizeByline: 'Skjul byline',
      },
      source: 'Kilde',
      title: 'Tittel',
    },
    text: {
      heading: 'Slik gjenbruker du teksten',
      description: 'Husk å henvise til kilden når du gjenbruker tekst.',
      rules: 'Regler for bruk av teksten:',
      published: 'Publiseringsdato',
    },
    audio: {
      heading: 'Slik gjenbruker du lydfiler',
      description: 'Husk å kopiere teksten som skal legges ved lydfilen der du bruker den.',
      rules: 'Regler for bruk av lydfilen:',
    },
    podcast: {
      heading: 'Slik gjenbruker du podkaster',
      description: 'Husk å kopiere teksten som skal legges ved podkasten der du bruker den.',
      rules: 'Regler for bruk av podkasten:',
    },
    video: {
      heading: 'Slik gjenbruker du videoer',
      description: 'Husk å kopiere teksten som skal legges ved videoen der du bruker den.',
      rules: 'Regler for bruk av videoen:',
      itemImage: {
        ariaLabel: 'Åpne video i et nytt vindu',
      },
    },
    other: {
      heading: 'Slik gjenbruker du annet innhold',
      description: 'Du finner retningslinjene for bruk av innholdet i innholdselementet',
      itemImage: {
        ariaLabel: 'Åpne i nytt vindu',
      },
    },
    h5p: {
      heading: 'Slik gjenbruker du H5P-innhold',
      description: 'Du finner retningslinjene for bruk av innholdet i H5P-elementet',
      rules: 'Regler for bruk av H5P:',
    },
    concept: {
      heading: 'Slik gjenbruker du forklaringer',
      description: 'Du finner retningslinjene for bruk av innholdet i forklaring-elementet',
      rules: 'Regler for bruk av forklaring:',
      title: 'Tittel',
      embedlink: {
        heading: 'Slik viser du forklaringen i annet innhold',
        description: 'Denne lenken viser forklaringen uten kontekst (meny og bunntekst)',
        copyTitle: 'Kopier innbyggingslenke',
        hasCopiedTitle: 'Innbyggingslenke kopiert',
      },
    },
    files: {
      heading: 'Slik gjenbruker du filer',
      description: 'Husk å kopier teksten som skal legges ved filen der du bruker den.',
      rules: 'Regler for bruk av filen:',
      itemImage: {
        ariaLabel: 'Åpne i nytt vindu',
      },
    },
    title: 'Tittel',
    originator: 'Opphaver',
    published: 'Publiseringsdato',
    rightsholder: 'Rettighetshaver',
    source: 'Kilde',
  },
  errorMessage: {
    title: 'Ops, noe gikk galt',
    description: 'Beklager, en feil oppstod.',
    linksTitle: 'Kom igang:',
    back: 'Gå tilbake',
    goToFrontPage: 'Gå til forsiden',
  },
  figure: {
    button: {
      alternative: 'Bytt til synstolket video',
      original: 'Bytt til original video',
    },
  },
  footer: {
    aboutNDLA: 'Om NDLA',
    selectLanguage: 'Velg språk (language): ',
    vision: 'Sammen skaper vi framtidas læring',
    footerLinksHeader: 'Andre NDLA-nettsteder',
    footerInfo: 'Nettstedet er utarbeidet av NDLA med åpen kildekode.',
    footerEditiorInChief: 'Ansvarlig redaktør: ',
    footerManagingEditor: 'Utgaveansvarlig: ',
    footerPrivacyLink: 'Personvernerklæring og cookies',
    socialMediaLinks: {
      facebook: 'NDLA på Facebook',
      facebookAria: 'Besøk NDLA på Facebook',
      newsletter: 'Meld deg på vårt nyhetsbrev',
      newsletterAria: 'Meld deg på vårt nyhetsbrev',
      youtube: 'NDLA på YouTube',
      youtubeAria: 'NDLA på YouTube',
      linkedin: 'NDLA på LinkedIn',
      linkedinAria: 'Besøk NDLA på LinkedIn',
      instagram: 'NDLA på Instagram',
      instagramAria: 'Besøk NDLA på Instagram',
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
    'multidisciplinary-topic': 'Tverrfaglig case',
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
    prefixChangeLanguage: 'Velg språk',
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
    toFrontpage: 'NDLA forside',
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
        filteredBy: 'Filtrert på',
      },
      alphabet: {
        letterFilter: 'Vis innhald på (bokstaven) {{letter}}.',
      },
    },
    relatedLinks: {
      label: 'Tilknyttede artikler',
    },
    hits: '{{count}} treff',
  },
  notions: {
    usedIn: 'Brukes i',
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
      text: 'Ndla film er en nettbasert filmtjeneste for elever og lærere i videregående skole. Her funner du spillefilmer, kortfilmer, dokumentarfilmer og TV-serier.',
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
      addMovieToGroup: 'Legg til film i "{{name}}"',
      editMovieGroupName: 'Endre navnene til filmgruppen',
      deleteMovieGroup: 'Slett "{{name}}"',
      moveMovieGroupUp: 'Flytt opp',
      moveMovieGroupDown: 'Flytt ned',
      changeOrder: 'Endre rekkefølge',
      removeMovieFromGroup: 'Ta vekk film fra gruppe',
      removeMovieFromSlideshow: 'Ta vekk film fra slideshow',
      createThemeGroup: 'Opprett gruppe',
      saveNameChanges: 'Lagre endringer',
      cancel: 'Avbryt',
      groupNamePlaceholder: 'Skriv navn på {{lang}}',
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
    createLearningPathText: 'Lag din egen, kopier denne eller se flere læringsstier?',
    createLearningPathButtonText: 'Gå til stier',
    lastUpdated: 'Sist oppdatert',
    youAreInALearningPath: 'Du er nå inne i en læringssti',
    readTime: '{{hours}} Skoletimer = {{minutes}} min',
    readTimeHour: 'time',
    readTimeHour_plurals: 'timer',
    readTimeMinutesShort: 'min',
    pageOf: 'av',
    lastStep: {
      heading: 'Siste steg i læringsstien',
      headingSmall: 'Du er nå på siste steget i læringsstien {{learningPathName}}',
      topicHeading: 'Gå til emne:',
      subjectHeading: 'Gå til faget:',
    },
    openMenuTooltip: 'Vis læringssti',
    mobileStepInfo: '{{currentPage}} av {{totalPages}}',
    nextArrow: 'Neste',
    previousArrow: 'Forrige',
  },
  dropdown: {
    numberHits: `Søket gav {{hits}} treff`,
    searching: 'Søker...',
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
    content: 'Ressursen',
    text: 'er hentet fra',
    concept: {
      content: 'Forklaringen',
      text: 'er utarbeidet av',
    },
    listing: {
      content: 'Listen',
      text: 'er utarbeidet av',
    },
  },
  frontPageToolbox: {
    heading: 'Verktøykassa',
    text: 'Har du lyst til å bli god til å presentere, eller vil du lære å studere smartere ved hjelp av riktig studieteknikk? Trenger du råd om hvordan du leser mest mulig effektivt til eksamen? I verktøykassa til NDLA finner du masse gode tips og råd!',
    linkTextStudents: 'Se alle tipsene for elever her',
    linkTextTeachers: 'Se alle tipsene for lærere her',
    cursorText: 'Tips',
  },
  frontpageMultidisciplinarySubject: {
    heading: 'Tverrfaglige temaer',
    text: 'De tre tverrfaglige temaene i læreplanverket tar utgangspunkt i aktuelle samfunnsutfordringer som krever engasjement og innsats fra enkeltmennesker og fellesskapet i lokalsamfunnet, nasjonalt og globalt.',
    linkText: 'Se caser for tverrfaglige temaer',
    publicHealthTopic: 'Folkehelse og livsmestring',
    democracyTopic: 'Demokrati og medborgerskap',
    sustainableTopic: 'Bærekraftig utvikling',
    cursorText: 'Nyhet',
  },
  frontpageMenu: {
    program: 'Utdanningsprogram',
    allsubjects: 'Alle fag',
    cursorText: 'Se smakebiter fra fag under utvikling.',
  },
  navigation: {
    showLongerDescription: 'Vis hele emnebeskrivelsen',
    showShorterDescription: 'Skjul emnebeskrivelsen',
    topics: 'Emner',
    additionalTopic: 'Tilleggsemne',
    additionalTopics: 'Tilleggsemner',
    loadingText: 'Laster emne',
  },
  multidisciplinarySubject: {
    subjectsLinksDescription: 'Case innen',
  },
  multibutton: {
    open: 'Åpne meny',
    close: 'Lukk meny',
  },
  close: 'Lukk',
  title: 'Tittel',
  cancel: 'Avbryt',
  save: 'Lagre',
  image: {
    altText: 'Alt-tekst',
    caption: 'Bildetekst',
    type: 'Filtype',
    width: 'Bredde',
    height: 'Høyde',
    size: 'Størrelse (bytes)',
    modelReleased: {
      label: 'Modellklarert',
      yes: 'Ja',
      no: 'Nei',
      'not-applicable': 'Ikke relevant',
      'not-set': 'Ikke valgt',
      description: 'Om bildet er modellklarert eller ikke:',
    },
    download: 'Last ned bildet',
    reuse: 'Bruk bildet',
    largeSize: 'Se stor utgave av bilde',
    error: {
      url: 'Feil ved lasting av bildet.',
      caption: 'Beklager, en feil oppstod ved lasting av bildet.',
    },
  },
  audio: {
    download: 'Last ned lydfil',
    reuse: 'Bruk lydfil',
    error: {
      url: 'Feil ved lasting av lydfila.',
      caption: 'Beklager, en feil oppstod ved lasting av lydfil.',
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
    readMoreDescriptionLabel: 'vis mer',
  },
  h5p: {
    reuse: 'Bruk H5P',
  },
  video: {
    download: 'Last ned video',
    reuse: 'Bruk video',
    error: 'Beklager, en feil oppstod ved lasting av videoen eller metadata om videoen.',
  },
  other: {
    download: 'Last ned innhold',
    reuse: 'Bruk innhold',
  },
  concept: {
    showDescription: 'Vis beskrivelsen av forklaringen.',
    reuse: 'Bruk forklaring',
    error: {
      title: 'En feil oppstod',
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
  visualElement: {
    show: 'Vis',
    showVideo: 'Vis video',
  },
  user: {
    loggedInAs: 'Du er pålogget som {{role}}.',
    loggedInAsButton: 'Du er pålogget som {{role}}',
    role: {
      employee: 'Lærer',
      staff: 'Ansatt',
      student: 'Elev',
    },
    buttonLogIn: 'Logg inn med Feide',
    buttonLogOut: 'Logg ut',
    generalFooter: 'Enkelte ressurser er bare tilgjengelige for påloggede lærere.',
    modal: {
      collectedInfo: 'Vi har hentet følgende informasjon om deg fra Feide:',
      general: 'Ressursene som krever pålogging med Feide, vises med ikonet',
      topic: 'Logg inn med Feide for å få tilgang til dette emnet.',
      isAuth: 'Brukerinfo',
      isNotAuth: 'Logg inn med Feide',
    },
    resource: {
      accessDenied: 'Vi beklager, men denne ressursen er bare for lærere innlogget med Feide.',
    },
    primarySchool: 'Hovedskole',
    name: 'Navn',
    mail: 'E-post',
    username: 'Brukernavn',
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
    support: 'Brukerstøtte',
    resources: '{{count}} ressurs',
    resources_plural: '{{count}} ressurser',
    folders: '{{count}} mappe',
    folders_plural: '{{count}} mapper',
    folder: {
      folder: 'Mappe',
      delete: 'Slett',
      edit: 'Rediger',
      missingName: 'Skriv navn på mappe',
      folderDeleted: '"{{folderName}}" er slettet',
    },
    tags: '{{count}} emneknagg',
    tags_plural: '{{count}} emneknagger',
    confirmDeleteFolder: 'Er du sikker på at du vil slette mappen? Denne handlingen kan ikke endres.',
    confirmDeleteTag: 'Er du sikker på at du vil slette emneknagg? Denne handlingen kan ikke endres.',
    myFolders: 'Mine mapper',
    myTags: 'Mine emneknagger',
    newFolder: 'Ny mappe',
    newFolderUnder: 'Lag ny mappe under {{folderName}}',
    myAccount: 'Min konto',
    favourites: 'Favoritter',
    addToFavourites: 'Legg til i mine favoritter',
    alreadyFavourited: 'Allerede lagt til i mine favoritter',
    alreadyInFolder: 'Finnes allerede i mappen',
    help: 'Hjelp',
    more: 'Flere valg',
    listView: 'Listevisning',
    detailView: 'Detaljert listevisning',
    shortView: 'Kort visning',
    myPage: {
      confirmDeleteAccount: 'Er du sikker på at du vil slette kontoen?',
      confirmDeleteAccountButton: 'Slett konto',
      myPage: 'Min side',
      deleteAccount: 'Slett Min NDLA',
      logout: 'Logg ut av Min NDLA',
      loginTerms: 'Logg på med Feide for å få tilgang. Ved å logge på godkjenner du våre vilkår for bruk',
      loginResourcePitch: 'Ønsker du å favorittmerke denne siden?',
      loginWelcome: 'Velkommen til NDLA! Her kan du organisere fagstoffet på <i>din</i> måte!',
      welcome:
        'Velkommen til Min NDLA! Nå kan du lagre dine favorittressurser fra NDLA og organisere dem slik du ønsker i mapper og med emneknagger.',
      read: { our: 'Les vår', ours: 'Les våre' },
      privacy: 'personvernerklæring her',
      questions: { question: 'Lurer du på noe?', ask: 'Spør oss i chatten' },
      wishToDelete: 'Vil du ikke ha brukerprofil hos oss lenger?',
      terms: {
        terms: 'Vilkår for bruk',
        term1: 'Ikke skriv personsensitiv informasjon eller persondata i tekstfelt.',
        term2: 'Ikke skriv noe støtende i tekstfelt.',
        term3: 'NDLA forbeholder seg retten til å oppdatere eller slette utdaterte ressurser.',
      },
      newFavourite: 'Nylig lagt til',
      feide: 'Dette henter vi om deg fra Feide',
      storageInfo: {
        title: 'Slik lagrer du dine favorittressurser fra NDLA',
        text: 'Klikk på hjerteknappen for å lagre en ressurs. Du vil da få mulighet til å lagre ressursen i en mappe.',
      },
      folderInfo: {
        title: 'Slik organiserer du dine favorittressurser i mapper',
        text: 'Klikk på mine mapper i menyen til venstre for å komme til mappeoversikten. Her kan du opprette nye mapper og undermapper. Du kan også opprette en ny mappe i dialogvinduet som kommer når du klikker på et hjerte i en ressurs.',
      },
      tagInfo: {
        title: 'Slik tagger du dine favorittressurser',
        text: 'Når du lagrer en ressurs får du mulighet til å markere ressursen med en emneknagg. Emneknaggen er et nøkkelord du kan bruke til å finne tilbake til ressurser på tvers av mapper. Du finner alle emneknaggene du har brukt ved å velge mine emneknagger i venstremenyen. Her kan du også se hvilke ressurser du har markert med hver enkel emneknagg.',
      },
    },
    resource: {
      add: 'Legg til mappe/emneknagg',
      remove: 'Fjern',
      removeTitle: 'Fjern ressurs',
      confirmRemove: 'Er du sikker på at du ønsker å fjerne ressursen fra denne mappen?',
      copyLink: 'Kopier lenke til siden',
      linkCopied: 'Kopiert til utklippstavle',
      addToMyNdla: 'Legg i Min NDLA',
      addedToMyNdla: 'Lagt i Min NDLA',
      addedToFolder: 'Ressurs er lagt i "{{folderName}}"',
      removedFromFolder: 'Fjernet fra "{{folderName}}"',
      titleUpdated: 'Tittel oppdatert',
      tagsUpdated: 'Emneknagger oppdatert',
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
    other: 'Annet',
  },
  listingPage: {
    or: 'eller',
    noFilters: 'Har ingenting å filtrere',
    loadMore: 'Last mer',
  },
  siteNav: {
    search: 'Søk',
    contact: 'Kontakt',
    help: 'Hjelp',
  },
};

export default messages;
