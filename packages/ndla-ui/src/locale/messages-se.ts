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
  ...contributorTypes.se,
  askNDLA: "Jeara NDLA:s",
  subjectCategories: {
    [subjectCategories.ACTIVE_SUBJECTS]: "Doaimmas",
    [subjectCategories.ARCHIVE_SUBJECTS]: "Ii doaimmas šat",
    [subjectCategories.BETA_SUBJECTS]: "Boahttevaš",
    [subjectCategories.OTHER]: "Eará resurssat",
    [subjectTypes.RESOURCE_COLLECTION]: "Resursačoakkáldat",
  },
  subjectTypes: {
    [subjectTypes.BETA_SUBJECT]: "Betafága",
    [subjectTypes.RESOURCE_COLLECTION]: "Resursačoakkáldat",
    [subjectTypes.SUBJECT]: "Fága",
  },
  meta: {
    description:
      "Kvalitehta sihkarasttojuvvon ja nuvttá olamuttos neahttavuđot oahpponeavvut joatkkaskuvlla oahpahussii",
    keywords: "oahpponeavvu, fága, skuvla, joatkka, fidnohárjehalli, pensuma, fágaávnnas",
  },
  logo: {
    altText: "Našunála digitála oahppanarena",
  },
  article: {
    lastUpdated: "Maŋemusat ođastuvvon",
    useContent: "Čujuhit vai ođđasit atnit?",
    authorsLabel: "Dán lea/leat čállán {{names}}",
    authorsLabelLearningpath: "Laget av {{names}}",
    copyPageLinkCopied: "Liŋka máŋgejuvvon",
    copyHeaderLink: "Máŋge liŋka bajilčállagii",
    conjunction: "ja",
    externalStepAuthorsLabel: "Denne lenken er lagt til av {{names}}",
    supplierLabel: "Vuoigatvuođaguoddi: {{name}}",
    multipleSuppliersLabel: "Vuoigatvuođaguoddit: {{names}}",
    printPage: "Čálit teavstta",
    access: {
      onlyTeacher: "Dát resursa lea dušše olamuttus oahpaheddjiide geat leat Feide bokte sisaloggejuvvon.",
    },
    footnotes: "Fotnotar",
  },
  license: {
    copyTitle: "Máŋge gáldooainnu",
    hasCopiedTitle: "Máŋgejuvvon!",
    embed: "Hukse sisa",
    embedCopied: "Máŋgejuvvon sisahuksenkoda!",
    copyText: {
      now: "dál",
      podcast: "podkásta",
      by: "geas",
      internet: "[Interneahtta]. ",
      noTitle: "Tihttela haga",
      downloadedFrom: "Gos vižžojuvvon: ",
      readDate: "Lohkan: ",
    },
    download: "Viečča",
    openLink: "Raba ođđa gilkoris",
    tabs: {
      text: "Teaksta",
      images: "Govat",
      audio: "Jietna",
      video: "Video",
      h5p: "H5P",
      files: "Fiillat",
      embedlink: "Sisahuksenliŋka",
      concept: "Čilgehusat",
      gloss: "Gloser",
      podcast: "Podkásta",
      other: "Eará sisdoallu",
    },
    embedlink: {
      heading: "Ná čájehat artihkkala eará sisdoalus",
      description: "Dát liŋka čájeha artihkkala konteavstta haga (fállu ja vuolleteaksta)",
      copyTitle: "Máŋge liŋkka",
      hasCopiedTitle: "Liŋka máŋgejuvvon",
    },
    image: {
      rules: "Njuolggadusat gova geavaheapmái:",
    },
    images: {
      heading: "Ná geavahat govaid ođđasit",
      description: "Muitte máŋget teavstta mii galgá mielddusin govvii go geavahat dan.",
      rules: "Njuolggadusat gova geavaheapmái",
      itemImage: {
        ariaLabel: "Raba gova ođđa siiddus",
        zoomImageButtonLabel: "Stuorit gova",
        zoomOutImageButtonLabel: "Unnit gova",
        expandByline: "Čájet byline",
        minimizeByline: "Čiega byline",
      },
      licenseText: "Dán govas lea liseansa",
      restrictedUseText: "Dán govas lea",
    },
    text: {
      heading: "Ná geavahat teavstta ođđasit",
      description: "Muitte čujuhit gáldui go nuppi teavstta anát.",
      rules: "Njuolggadusat teavstta geavaheapmái",
      published: "Almmuhanbeaivi",
      licenseText: "Dán teavsttas lea liseansa",
      restrictedUseText: "Dán teavsttas lea",
    },
    audio: {
      heading: "Ná geavahat jietnafiilla ođđasit",
      description: "Muitte máŋget teavstta mii galgá čuovvut jietnafiilla doppe gos geavahuvvo.",
      rules: "Njuolggadusat jietnafiilla geavaheapmái",
      licenseText: "Dán jietnafiillas lea liseansa",
      restrictedUseText: "Dán jietnafiillas lea",
    },
    podcast: {
      heading: "Ná geavahat podkásta ođđasit",
      description: "Muitte máŋget teavstta mii galgá čuovvut podkásta doppe gos geavahuvvo.",
      rules: "Njuolggadusat podkásta geavaheapmái",
      licenseText: "Dán podkasttas lea liseansa",
      restrictedUseText: "Dán podkasttas lea",
    },
    video: {
      heading: "Ná geavahat video ođđasit",
      description: "Muitte máŋget teavstta mii galgá čuovvut video doppe gos dat geavahuvvo.",
      rules: "Njuolggadusat video geavaheapmái",
      itemImage: {
        ariaLabel: "Raba video ođđa siiddus",
      },
      licenseText: "Dán videoi lea liseansa",
      restrictedUseText: "Dán videoi lea",
    },
    other: {
      heading: "Ná geavahat eará sisdoalu ođđasit",
      description: "Njuolggadusaid sisdoalu geavaheapmái gávnnat sisdoalloelemeanttas",
      itemImage: {
        ariaLabel: "Raba ođđa siiddus",
      },
    },
    h5p: {
      heading: "Ná geavahat H5P-sisdoalu ođđasit",
      description: "Njuolggadusaid sisdoalu geavaheapmái gávnnat H5P-elemeanttas",
      rules: "Njuolggadusat H5P geavaheapmái",
      licenseText: "Dát interaktiiva bargu (H5P) lea ožžon liseanssa",
      restrictedUseText: "Dát interaktiiva bargu (H5P) lea ožžon",
    },
    concept: {
      heading: "Ná geavahat čilgehusaid ođđasit",
      description: "Husk at innebygd innhald i ei forklaring kan ha ein anna lisens enn sjølve forklaringsteksten",
      rules: "Njuolggadusat čilgehusa geavaheapmái",
      embedlink: {
        heading: "Ná čájehat čilgehusa eará sisdoalus",
        description: "Dát liŋka čájeha čilgehusa konteavstta haga (fállu ja vuolleteaksta)",
        copyTitle: "Máŋge sisahuksenliŋkka",
        hasCopiedTitle: "Sisahuksenliŋka máŋgejuvvon",
      },
      licenseText: "Dán čilgehusas lea liseansa",
      restrictedUseText: "Dán čilgehusas lea",
    },
    gloss: {
      heading: "Movt geavahit ođđasit dajaldagaid",
      description:
        "Muitte ahte sisdoalus mii lea vuojuhuvvon ovtta gihppagii sáhttá leat eará liseansa go dušše jietnadat.",
      rules: "Glossa geavaheami njuolggadusat",
      showOrHideExamples: "Čájet dahje čiega ovdamearkkaid",
      embedlink: {
        heading: "Čájet jietnadaga eará sisdoaluin",
        description: "Dát liŋka čájeha teavstta konteavstta haga (fállu ja juolgeteaksta)",
        copyTitle: "Máŋge sisačálihanliŋkka",
        hasCopiedTitle: "Sajáiduhttinliŋka mángejuvvon",
      },
      licenseText: "Dán jietnadagas lea liseansa",
      restrictedUseText: "Dán jietnadagas lea",
    },
    files: {
      heading: "Ná geavahat fiillaid ođđasit",
      description: "Muitte máŋget teavsttaid mat galget čuovvut fiillaid doppe gos dat geavahuvvet.",
      rules: "Njuolggadusat fiilla geavaheapmái",
      itemImage: {
        ariaLabel: "Raba ođđa siiddus",
      },
    },
    processed: "Sisdoallu lea rievdaduvvon.",
  },
  errorMessage: {
    title: "Ops, juoga manai boastut",
    description: "Šállošit, boasttuvuohta čuožžilii.",
    back: "Mana ruovttoluotta",
    goToFrontPage: "Mana ovdasiidui",
  },
  figure: {
    button: {
      alternative: "Lonut siidui mas dulkojuvvo oaidninváttuid ektui",
      original: "Lonut orginála videoi",
    },
  },
  contentTypes: {
    all: "Buot",
    article: "Artikkel",
    subject: "Fága",
    "topic-article": "Fáddá",
    learningpath: "Oahppanbálggis",
    "learning-path": "Oahppanbálggis",
    "subject-material": "Fágaávdnasat",
    "tasks-and-activities": "Bihtát ja doaimmat",
    "source-material": "Gáldomateriála",
    "assessment-resources": "Árvoštallanresursa",
    topic: "Fáddá",
    multidisciplinary: "Fágaidrasttideaddji fáddá",
    image: "Govva",
    concept: "Čilgehus",
    audio: "Jietna",
    podcast: "Podkásta",
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
    nb: "Girjedárogiella",
    nn: "Ođđadárogiella",
    en: "Eŋgelasgiella",
    fr: "Fránskkagiella",
    de: "Duiskkagiella",
    se: "Davvisámegiella",
    sma: "Máttasámegiella",
    es: "Espánnjagiella",
    zh: "Kiinnágiella",
    ukr: "Ukrainsk",
    unknown: "Amas",
    prefixChangeLanguage: "Vállje giela",
  },
  breadcrumb: {
    toFrontpage: "NDLA ovdasiidu",
    breadcrumb: "Láibemoallobálggis",
  },
  codeBlock: {
    copiedCode: "Koda lea máŋgejuvvon vuorkátávvalii",
    copyCode: "Máŋge koda vuorkátávvalii",
  },
  close: "Govčča",
  loading: "Viežžá",
  title: "Tihttel",
  cancel: "Botkke",
  save: "Vurke",
  email: "E-boasta",
  finished: "Ferdig",
  audio: {
    play: "Čuojat",
    pause: "Boatkke",
    progressBar: "Fremdriftsindikator",
    valueText: "{{start}} av {{end}}",
    controls: {
      forward15sec: "Sirdde 15 sekundda ovddas",
      rewind15sec: "Sirdde 15 sekundda maŋos",
      selectSpeed: "Vállje čuojahanleahtu",
      adjustVolume: "Rievdat voluma",
    },
    textVersion: {
      heading: "Teakstavearšuvdna",
      close: "Govčča teakstavearšuvnna",
    },
    readMoreDescriptionLabel: "Čájet eanet",
    readLessDescriptionLabel: "Čájet unnit",
  },
  source: "Gáldu",
  related: {
    title: "Guoskevaš sisdoallu",
    linkInfo: "Neahttasiidu čuovvuvaččas",
    showMore: "Čájet eanet guoskevaš sisdoalu",
    showLess: "Čájet unnit",
  },
  download: "Viečča fiilla: ",
  factbox: {
    open: "Raba fáktádoasa",
    close: "Govčča fáktádoasa",
  },
  embed: {
    linkError: "Ii sáhttán čájehit liŋkka.",
    unsupported: `Embed {{type}} ii dorjojuvvo.`,
    embedError: `Šattai meattáhus {{type}} vieččadettiin. Geahččal viežžat siiddu ođđasit.`,
    type: {
      image: "Govva",
      video: "Video",
      audio: "Jietna",
      podcast: "Podkast",
      concept: "Čilgehus",
      h5p: "H5P",
      external: "Olgguldas resursa",
      gloss: "Glose",
      copyright: "Tekst",
      code: "Kodeblokk",
      disclaimer: "UU-advarsel",
    },
  },
  uuDisclaimer: { title: "Tilgjengelighet" },
  gloss: {
    examples: "Ovdamearkkat",
    showExamples: "Vis eksempler",
    wordClass: "Sátneluohkká",
    play: "Čuojat glose",
    transcriptions: {
      traditional: "Árbevirolaš čállinvuohki",
      pinyin: "Pinyin",
    },
  },
  wordClass: {
    [wordClass.wordClass.adjective]: "Adjektiivvat",
    [wordClass.wordClass.adverb]: "Advearba",
    [wordClass.wordClass.properNoun]: "Iežas namma",
    [wordClass.wordClass.auxiliary]: "Veahkkesánit",
    [wordClass.wordClass.complement]: "Dievasmahttin",
    [wordClass.wordClass.conjunction]: "Konjunksjon",
    [wordClass.wordClass.coverb]: "Koverb",
    [wordClass.wordClass.determiner]: "Mearrádussánit",
    [wordClass.wordClass.interjection]: "Ovttastuvvon",
    [wordClass.wordClass.quantifier]: "Kvantor",
    [wordClass.wordClass.marker]: "Sieván",
    [wordClass.wordClass.modalVerb]: "Modálavearba",
    [wordClass.wordClass.measureWord]: "Olahussátni",
    [wordClass.wordClass.noun]: "Substantiivvat",
    [wordClass.wordClass["noun-zh"]]: "Nome",
    [wordClass.wordClass.nounPhrase]: "Nomengihppu",
    [wordClass.wordClass.onomatopoeia]: "Onomatopoetikon",
    [wordClass.wordClass.particle]: "Partihkkalat",
    [wordClass.wordClass.demonstrative]: "Čujuhusat",
    [wordClass.wordClass.personalPronoun]: "Persovnnalaš pronomen",
    [wordClass.wordClass.preposition]: "Preposišuvdna",
    [wordClass.wordClass.pronoun]: "Pronomen",
    [wordClass.wordClass.questionWord]: "Jearaldatsánit",
    [wordClass.wordClass.locationWord]: "Báikesánit",
    [wordClass.wordClass.suffix]: "Suffivssat",
    [wordClass.wordClass.numeral]: "Lohkosánit",
    [wordClass.wordClass.timeWord]: "Áigebágo",
    [wordClass.wordClass.timeExpression]: "Áigemearka",
    [wordClass.wordClass.stativeVerb]: "Dili-vearbba",
    [wordClass.wordClass.subordinatingConjunction]: "Subjunkšuvdna",
    [wordClass.wordClass.exclamationWord]: "Ii-rohkossátni",
    [wordClass.wordClass.expression]: "Ovdanbuktin",
    [wordClass.wordClass.verb]: "Vearbbat",
    [wordClass.wordClass.verbComplement]: "Vearbasuorggideapmi",
    [wordClass.wordClass.verbObject]: "Vearbaobjeakta",
  },
  login: "Čálit sisa",
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
      searchPlaceholder: "Søk i videoar",
      searchButtonTitle: "Søk",
      loadMoreVideos: "Last fleire videoar",
      noResults: "Ingen videoar funnet",
      addVideo: "Bruk video",
      previewVideo: "Forhåndsvis",
      is360Video: "VR-video",
      close: "Lukk",
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
