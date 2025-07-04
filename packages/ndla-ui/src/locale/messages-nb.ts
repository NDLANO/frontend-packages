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
  ...contributorTypes.nb,
  askNDLA: "Spør NDLA",
  subjectCategories: {
    [subjectCategories.ACTIVE_SUBJECTS]: "Aktive",
    [subjectCategories.ARCHIVE_SUBJECTS]: "Utgåtte",
    [subjectCategories.BETA_SUBJECTS]: "Kommende",
    [subjectCategories.OTHER]: "Andre ressurser",
    [subjectTypes.RESOURCE_COLLECTION]: "Ressurssamlinger",
  },
  subjectTypes: {
    [subjectTypes.BETA_SUBJECT]: "Betafag",
    [subjectTypes.RESOURCE_COLLECTION]: "Ressurssamling",
    [subjectTypes.SUBJECT]: "Fag",
  },
  meta: {
    description:
      "Åpne og fritt tilgjengelige ressurser for videregående opplæring. Utviklet og oppdatert i samarbeid med dyktige lærere og elever.",
    keywords: "læremiddel,fag,skole,videregående,lærling,pensum,fagstoff",
  },
  logo: {
    altText: "Nasjonal digital læringsarena",
  },
  article: {
    lastUpdated: "Sist faglig oppdatert",
    useContent: "Sitere eller gjenbruke?",
    authorsLabel: "Skrevet av {{names}}",
    authorsLabelLearningpath: "Laget av {{names}}",
    copyPageLinkCopied: "Lenke kopiert",
    copyHeaderLink: "Kopier lenke til overskriften",
    conjunction: "og",
    authorsLabelExternal: "Denne lenken er lagt til av {{names}}",
    supplierLabel: "Rettighetshaver: {{name}}",
    multipleSuppliersLabel: "Rettighetshavere: {{names}}",
    printPage: "Skriv ut teksten",
    access: {
      onlyTeacher: "Denne ressursen er bare tilgjengelig for lærere som er pålogget med Feide.",
    },
    footnotes: "Fotnoter",
  },
  license: {
    copyTitle: "Kopier kildehenvisning",
    hasCopiedTitle: "Kopiert!",
    embed: "Bygg inn",
    embedCopied: "Kopierte innbyggingskode!",
    copyText: {
      now: "nå",
      podcast: "podkast",
      by: "av",
      internet: "[Internett]. ",
      noTitle: "Uten tittel",
      downloadedFrom: "Hentet fra: ",
      readDate: "Lest: ",
    },
    download: "Last ned",
    openLink: "Åpne i ny fane",
    tabs: {
      text: "Tekst",
      images: "Bilder",
      audio: "Lyd",
      video: "Video",
      h5p: "H5P",
      files: "Filer",
      embedlink: "Innbyggingslenke",
      concept: "Forklaringer",
      gloss: "Gloser",
      podcast: "Podkast",
      other: "Annet innhold",
    },
    embedlink: {
      heading: "Slik viser du artikkelen i annet innhold",
      description: "Denne lenken viser artikkelen uten kontekst (meny og bunntekst)",
      copyTitle: "Kopier lenke",
      hasCopiedTitle: "Lenke kopiert",
    },
    image: {
      rules: "Regler for bruk av bildet:",
    },
    images: {
      heading: "Slik gjenbruker du bilder",
      description: "Husk å kopiere teksten som skal legges ved bildet der du bruker det.",
      rules: "Regler for bruk av bildet",
      itemImage: {
        ariaLabel: "Åpne bilde i et nytt vindu",
        zoomImageButtonLabel: "Forstørr bilde",
        zoomOutImageButtonLabel: "Forminsk bilde",
        expandByline: "Vis byline",
        minimizeByline: "Skjul byline",
      },
      licenseText: "Dette bildet har lisensen",
      restrictedUseText: "Dette bildet har",
    },
    text: {
      heading: "Slik gjenbruker du teksten",
      description: "Husk å henvise til kilden når du gjenbruker tekst.",
      rules: "Regler for bruk av teksten",
      published: "Publiseringsdato",
      licenseText: "Denne teksten har lisensen",
      restrictedUseText: "Denne teksten har",
    },
    audio: {
      heading: "Slik gjenbruker du lydfiler",
      description: "Husk å kopiere teksten som skal legges ved lydfilen der du bruker den.",
      rules: "Regler for bruk av lydfilen",
      licenseText: "Denne lydfilen har lisensen",
      restrictedUseText: "Denne lydfilen har",
    },
    podcast: {
      heading: "Slik gjenbruker du podkaster",
      description: "Husk å kopiere teksten som skal legges ved podkasten der du bruker den.",
      rules: "Regler for bruk av podkasten",
      licenseText: "Denne podkasten har lisensen",
      restrictedUseText: "Denne podkasten har",
    },
    video: {
      heading: "Slik gjenbruker du videoer",
      description: "Husk å kopiere teksten som skal legges ved videoen der du bruker den.",
      rules: "Regler for bruk av videoen",
      itemImage: {
        ariaLabel: "Åpne video i et nytt vindu",
      },
      licenseText: "Denne videoen har lisensen",
      restrictedUseText: "Denne videoen har",
    },
    other: {
      heading: "Slik gjenbruker du annet innhold",
      description: "Du finner retningslinjene for bruk av innholdet i innholdselementet",
      itemImage: {
        ariaLabel: "Åpne i nytt vindu",
      },
    },
    h5p: {
      heading: "Slik gjenbruker du H5P-innhold",
      description: "Du finner retningslinjene for bruk av innholdet i H5P-elementet",
      rules: "Regler for bruk av H5P",
      licenseText: "Denne interaktive oppgaven (H5P) har lisensen",
      restrictedUseText: "Denne interaktive oppgaven (H5P) har",
    },
    concept: {
      heading: "Slik gjenbruker du forklaringer",
      description: "Husk at innebygd innhold i en forklaring kan ha en annen lisens enn selve forklaringsteksten",
      rules: "Regler for bruk av forklaring",
      embedlink: {
        heading: "Slik viser du forklaringen i annet innhold",
        description: "Denne lenken viser forklaringen uten kontekst (meny og bunntekst)",
        copyTitle: "Kopier innbyggingslenke",
        hasCopiedTitle: "Innbyggingslenke kopiert",
      },
      licenseText: "Denne forklaringen har lisensen",
      restrictedUseText: "Denne forklaringen har",
    },
    gloss: {
      heading: "Slik gjenbruker du gloser",
      description: "Husk at innebygd innhold i en glose kan ha en annen lisens enn selve gloseteksten",
      rules: "Regler for bruk av glose",
      showOrHideExamples: "Vis eller skjul eksempler",
      embedlink: {
        heading: "Slik viser du glosen i annet innhold",
        description: "Denne lenken viser glosen uten kontekst (meny og bunntekst)",
        copyTitle: "Kopier innbyggingslenke",
        hasCopiedTitle: "Innbyggingslenke kopiert",
      },
      licenseText: "Denne glosen har lisensen",
      restrictedUseText: "Denne glosen har",
    },
    files: {
      heading: "Slik gjenbruker du filer",
      description: "Husk å kopier teksten som skal legges ved filen der du bruker den.",
      rules: "Regler for bruk av filen",
      itemImage: {
        ariaLabel: "Åpne i nytt vindu",
      },
    },
    processed: "Innholdet har blitt bearbeidet",
  },
  errorMessage: {
    title: "Ops, noe gikk galt",
    description: "Beklager, en feil oppstod.",
    back: "Gå tilbake",
    goToFrontPage: "Gå til forsiden",
  },
  figure: {
    button: {
      alternative: "Bytt til synstolket video",
      original: "Bytt til original video",
    },
  },
  contentTypes: {
    all: "Alle",
    article: "Artikkel",
    subject: "Fag",
    "topic-article": "Emne",
    learningpath: "Læringssti",
    "learning-path": "Læringssti",
    "subject-material": "Fagstoff",
    "tasks-and-activities": "Oppgaver og aktiviteter",
    "source-material": "Kildemateriale",
    "assessment-resources": "Vurderingsressurs",
    topic: "Emne",
    multidisciplinary: "Tverrfaglig case",
    image: "Bilde",
    concept: "Forklaring",
    audio: "Lyd",
    podcast: "Podkast",
    h5p: "H5P",
    video: "Video",
    missing: "Ukjent",
    external: "Ekstern",
    gloss: "Glose",
    programme: "Programfag",
    "podcast-series": "Podkast-serie",
    "frontpage-article": "Om NDLA-artikkel",
  },
  languages: {
    nb: "Bokmål",
    nn: "Nynorsk",
    en: "Engelsk",
    fr: "Fransk",
    de: "Tysk",
    se: "Nordsamisk",
    sma: "Sørsamisk",
    es: "Spansk",
    zh: "Kinesisk",
    ukr: "Ukrainsk",
    unknown: "Ukjent",
    prefixChangeLanguage: "Velg språk",
  },
  breadcrumb: {
    toFrontpage: "NDLA forside",
    breadcrumb: "Brødsmulesti",
  },
  codeBlock: {
    copiedCode: "Kode kopiert til utklippstavle",
    copyCode: "Kopier kode til utklippstavle",
  },
  close: "Lukk",
  loading: "Laster",
  title: "Tittel",
  cancel: "Avbryt",
  save: "Lagre",
  email: "E-post",
  finished: "Ferdig",
  audio: {
    play: "Spill av",
    pause: "Pause",
    progressBar: "Fremdriftsindikator",
    valueText: "{{start}} av {{end}}",
    controls: {
      forward15sec: "Spol 15 sekunder fram",
      rewind15sec: "Spol 15 sekunder tilbake",
      selectSpeed: "Velg avspillingshastighet",
      adjustVolume: "Endre volum",
    },
    textVersion: {
      heading: "Tekstversjon",
      close: "Lukk tekstversjon",
    },
    readMoreDescriptionLabel: "Vis mer",
    readLessDescriptionLabel: "Vis mindre",
  },
  source: "Kilde",
  related: {
    title: "Relatert innhold",
    linkInfo: "Nettside hos",
    showMore: "Vis mer relatert innhold",
    showLess: "Vis mindre",
  },
  download: "Last ned fil: ",
  factbox: {
    open: "Åpne faktaboks",
    close: "Lukk faktaboks",
  },
  embed: {
    linkError: "Klarte ikke å vise lenke.",
    unsupported: `Embed {{type}} er ikke støttet.`,
    embedError: `Beklager, en feil oppstod ved lasting av {{type}}. Prøv å laste inn siden på nytt.`,
    type: {
      image: "Bilde",
      video: "Video",
      audio: "Lyd",
      podcast: "Podkast",
      concept: "Forklaring",
      h5p: "H5P",
      external: "Ekstern ressurs",
      gloss: "Glose",
      copyright: "Tekst",
      code: "Kodeblokk",
      disclaimer: "UU-advarsel",
    },
  },
  uuDisclaimer: { title: "Tilgjengelighet" },
  gloss: {
    examples: "Eksempler",
    showExamples: "Vis eksempler",
    wordClass: "Ordklasse",
    play: "Spill av glose",
    transcriptions: {
      traditional: "Tradisjonell skrivemåte",
      pinyin: "Pinyin",
    },
  },
  wordClass: {
    [wordClass.wordClass.adjective]: "Adjektiv",
    [wordClass.wordClass.adverb]: "Adverb",
    [wordClass.wordClass.properNoun]: "Egennavn",
    [wordClass.wordClass.auxiliary]: "Hjelpeord",
    [wordClass.wordClass.complement]: "Komplement",
    [wordClass.wordClass.conjunction]: "Konjunksjon",
    [wordClass.wordClass.coverb]: "Koverb",
    [wordClass.wordClass.determiner]: "Bestemmerord",
    [wordClass.wordClass.interjection]: "Interjeksjon",
    [wordClass.wordClass.quantifier]: "Kvantor",
    [wordClass.wordClass.marker]: "Markør",
    [wordClass.wordClass.modalVerb]: "Modalverb",
    [wordClass.wordClass.measureWord]: "Målord",
    [wordClass.wordClass.noun]: "Substantiv",
    [wordClass.wordClass["noun-zh"]]: "Nomen",
    [wordClass.wordClass.nounPhrase]: "Nominalfrase",
    [wordClass.wordClass.onomatopoeia]: "Onomatopoetikon",
    [wordClass.wordClass.particle]: "Partikkel",
    [wordClass.wordClass.demonstrative]: "Pekeord",
    [wordClass.wordClass.personalPronoun]: "Personlig pronomen",
    [wordClass.wordClass.preposition]: "Preposisjon",
    [wordClass.wordClass.pronoun]: "Pronomen",
    [wordClass.wordClass.questionWord]: "Spørreord",
    [wordClass.wordClass.locationWord]: "Stedsord",
    [wordClass.wordClass.suffix]: "Suffiks",
    [wordClass.wordClass.numeral]: "Tallord",
    [wordClass.wordClass.timeWord]: "Tidsord",
    [wordClass.wordClass.timeExpression]: "Tidsuttrykk",
    [wordClass.wordClass.stativeVerb]: "Tilstandsverb",
    [wordClass.wordClass.subordinatingConjunction]: "Subjunksjon",
    [wordClass.wordClass.exclamationWord]: "Utropsord",
    [wordClass.wordClass.expression]: "Uttrykk",
    [wordClass.wordClass.verb]: "Verb",
    [wordClass.wordClass.verbComplement]: "Verb-komplement",
    [wordClass.wordClass.verbObject]: "Verb-objekt",
  },
  login: "Logg inn",
  component: {
    tagsInput: {
      clearTriggerLabel: "Fjern alle emneknagger",
      deleteTagTriggerLabel: "Fjern emneknagg {{tag}}",
      tagAdded: "Emneknagg {{tag}} lagt til",
      tagsPasted: "Limte inn {{length}} emneknagger",
      tagEdited: "Redigerer emneknagg {{tag}}. Trykk enter for å lagre, eller esc for å avbryte.",
      tagUpdated: "Emneknagg oppdatert til {{tag}}",
      tagDeleted: "Emneknagg {{tag}} slettet",
      tagSelected: "Emneknagg {{tag}} valgt. Trykk enter for å redigere. Trykk backspace eller delete for å slette",
    },
    combobox: {
      triggerLabel: "Vis resultater",
      clearTriggerLabel: "Fjern valg",
    },
    pagination: {
      rootLabel: "Sidenavigering",
      prevTriggerLabel: "Forrige side",
      nextTriggerLabel: "Neste side",
      lastPage: "Siste side, side {{page}}",
      page: "Side {{page}}",
    },
    imageSearch: {
      searchPlaceholder: "Søk i bilder",
      searchButtonTitle: "Søk",
      imagePreview: {
        creatorsLabel: "Bilde",
        license: "Lisens",
        caption: "Bildetekst",
        altText: "Alt-tekst",
        modelRelease: "Modellklarert",
        tags: "Emneknagger",
        checkboxLabel: "Sett som metabilde",
        close: "Lukk",
        useImageTitle: "Bruk bildet",
      },
    },
    audioSearch: {
      searchPlaceholder: "Søk i lydfiler",
      searchButtonTitle: "Søk",
      useAudio: "Velg lyd",
      noResults: "Ingen resultater funnet",
    },
    videoSearch: {
      searchPlaceholder: "Søk i videoer",
      searchButtonTitle: "Søk",
      loadMoreVideos: "Last flere videoer",
      noResults: "Ingen videoer funnet",
      addVideo: "Bruk video",
      previewVideo: "Forhåndsvis",
      is360Video: "VR-video",
      close: "Lukk",
    },
    datePicker: {
      dayCell: {
        unavailable: "Ikke tilgjengelig dato. {{date}}",
        selected: "Valgt dato. {{date}}",
        select: "Velg dato. {{date}}",
      },
      nextTrigger: {
        day: "Gå til neste måned",
        month: "Gå til neste år",
        year: "Gå til neste tiår",
      },
      prevTrigger: {
        day: "Gå til forrige måned",
        month: "Gå til forrige år",
        year: "Gå til forrige tiår",
      },
      monthSelect: "Velg måned",
      yearSelect: "Velg år",
      viewTrigger: {
        day: "Bytt til dagvisning",
        month: "Bytt til månedvisning",
        year: "Bytt til årvisning",
      },
      presetTrigger: {
        single: "Velg {{date}}",
        range: "Velg fra {{start}} til {{end}}",
      },
      clearTrigger: "Fjern valgte datoer",
      trigger: {
        open: "Åpne datovelger",
        close: "Lukk datovelger",
      },
      content: "Kalender",
    },
  },
  richTextEditor: {
    tooltip: {
      bold: "Fet ({{shortcut}})",
      code: "Kode ({{shortcut}})",
      sub: "Senket skrift ({{shortcut}})",
      sup: "Hevet skrift ({{shortcut}})",
      underlined: "Understreket ({{shortcut}})",
      italic: "Kursiv ({{shortcut}})",
      "numbered-list": "Nummerert liste ({{shortcut}})",
      "letter-list": "Bokstavliste ({{shortcut}})",
      "bulleted-list": "Punktliste ({{shortcut}})",
      heading: "Overskrift {{level}} ({{shortcut}})",
      paragraph: "Paragraf ({{shortcut}})",
      section: "Seksjon ({{shortcut}})",
      link: "Lenke ({{shortcut}})",
    },
  },
};

export default messages;
