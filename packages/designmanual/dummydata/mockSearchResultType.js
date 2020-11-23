const subjectTypeResults = [
  {
    id: 1,
    title: 'Norsk',
    url: '#1',
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/51959',
    },
  },
  {
    id: 2,
    title: 'Engelsk',
    url: '#2',
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/51990',
    },
  },
  {
    id: 3,
    title: 'Matte',
    url: '#3',
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/51959',
    },
  },
];

const topicResults = [
  {
    id: 1,
    title: 'Ideskapning',
    url: '#1',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
    img: {
      url:
        'https://api.ndla.no/image-api/raw/id/28404?focalX=50&focalY=50&ratio=1.75',
      alt: 'Forstørrelsesglass',
    },
    labels: ['Type', 'Type2'],
  },
  {
    id: 2,
    title: 'Ideskapning og mediedesign',
    url: '#2',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
    img: {
      url:
        'https://staging.api.ndla.no/image-api/raw/42-45210905.jpg?focalX=50&focalY=50&ratio=1.75',
      alt: 'Forstørrelsesglass',
    },
  },
  {
    id: 3,
    title: 'Ideskapning og mediedesign 3',
    url: '#3',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé. Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    img: {
      url:
        'https://staging.api.ndla.no/image-api/raw/42-45210905.jpg?focalX=50&focalY=50&ratio=1.75',
      alt: 'Forstørrelsesglass',
    },
  },
  {
    id: 4,
    title: 'Hva kan du om platetektonikk 4?',
    url: '#4',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    img: {
      url:
        'https://api.ndla.no/image-api/raw/id/28404?focalX=50&focalY=50&ratio=1.75',
      alt: 'Forstørrelsesglass',
    },
  },
  {
    id: 5,
    title: 'Hva kan du om platetektonikk 5?',
    url: '#5',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
  },
  {
    id: 6,
    title: 'Hva kan du om platetektonikk 6?',
    url: '#6',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    img: {
      url:
        'https://api.ndla.no/image-api/raw/id/28404?focalX=50&focalY=50&ratio=1.75',
      alt: 'Forstørrelsesglass',
    },
  },
  {
    id: 7,
    title: 'Hva kan du om platetektonikk 7?',
    url: '#7',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
  },
  {
    id: 8,
    title: 'Hva kan du om platetektonikk 8?',
    url: '#8',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
  },
  {
    id: 9,
    title: 'Hva kan du om platetektonikk 9?',
    url: '#9',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    img: {
      url:
        'https://staging.api.ndla.no/image-api/raw/42-45210905.jpg?focalX=50&focalY=50&ratio=1.75',
      alt: 'Forstørrelsesglass',
    },
  },
  {
    id: 10,
    title: 'Hva kan du om platetektonikk 10?',
    url: '#10',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
  },
];

const subjectMaterialResults = [
  {
    id: 10,
    title: 'Ideskapning og mediedesign 10',
    url: '#1',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
    labels: ['h5p', 'Simulering', 'Oppgave'],
  },
  {
    id: 11,
    title: 'Ideskapning og mediedesign 20',
    url: '#2',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
    labels: ['h5p', 'Simulering', 'Oppgave'],
  },
  {
    id: 12,
    title: 'Ideskapning og mediedesign 30',
    url: '#3',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    img: {
      url:
        'https://api.ndla.no/image-api/raw/id/28404?focalX=50&focalY=50&ratio=1.75',
      alt: 'Forstørrelsesglass',
    },
    labels: ['h5p', 'Simulering', 'Oppgave'],
  },
  {
    id: 13,
    title: 'Hva kan du om platetektonikk? 40',
    url: '#4',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
  },
  {
    id: 14,
    title: 'Hva kan du om platetektonikk? 50',
    url: '#5',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    breadcrumb: ['Brønnteknikk', 'Geologi for brønnteknikk'],
  },
];

const searchTypeFilterOptions = {
  subject: [],
  'learning-path': [],
  'subject-material': [
    {
      name: 'Veiledning',
      id: 'urn:resourcetype:guidance',
    },
    {
      name: 'Forelesning og presentasjon',
      id: 'urn:resourcetype:lectureAndPresentation',
    },
    {
      name: 'Fagartikkel',
      id: 'urn:resourcetype:academicArticle',
    },
  ],
  'tasks-and-activities': [
    {
      name: 'Oppgave',
      id: 'urn:resourcetype:task',
    },
    {
      name: 'Øvelse',
      id: 'urn:resourcetype:exercise',
    },
  ],
  EVALUATION_RESOURCE: [],
  SOURCE_MATERIAL: [],
  SHARED_RESOURCES: [],
  topic: [],
};

const searchSubjectTypeOptions = [
  {
    title: 'Alle',
    value: 'ALL',
  },
  {
    title: 'Emne',
    value: 'topic',
  },
  {
    title: 'Fagstoff',
    value: 'subject-material',
  },
  /*{
    title: 'Oppgaver og aktiviteter',
    value: 'tasks-and-activities',
  },
  {
    title: 'Læringssti',
    value: 'learning-path',
  },*/
];

export const searchFilterOptions = {
  subjects: [
    {
      title: 'Brønnteknikk',
      value: 'subjects:bronnteknikk',
      filterName: 'filter_subjects',
      subjectFilters: [
        {
          title: 'YF VG2',
          value: 'bronnteknikk:yfvg2',
        },
        {
          title: 'YF VG3',
          value: 'bronnteknikk:yfvg3',
        },
      ],
    },
    {
      title: 'Kinesisk',
      value: 'subjects:kinesisk',
      filterName: 'filter_subjects',
      subjectFilters: [
        {
          title: 'VG1',
          value: 'kinesisk:vg1',
        },
        {
          title: 'VG2',
          value: 'kinesisk:vg2',
        },
      ],
    },
    {
      title: 'Markedsføring og ledelse',
      value: 'subjects:markedsforing_og_ledelse',
      filterName: 'filter_subjects',
      subjectFilters: [
        {
          title: 'VG1',
          value: 'markedsforing_og_ledelse:vg1',
        },
        {
          title: 'VG2',
          value: 'markedsforing_og_ledelse:vg2',
        },
      ],
    },
    {
      title: 'Medieuttrykk og mediesamfunnet',
      value: 'subjects:medieuttrykk_og_mediesamfunnet',
      filterName: 'filter_subjects',
      subjectFilters: [
        {
          title: 'Medieuttrykk',
          value: 'medieuttrykk_og_mediesamfunnet:medieuttrykk',
        },
        {
          title: 'Mediesamfunnet',
          value: 'medieuttrykk_og_mediesamfunnet:mediesamfunnet',
        },
        {
          title: 'VG1',
          value: 'medieuttrykk_og_mediesamfunnet:vg1',
        },
        {
          title: 'VG2',
          value: 'medieuttrykk_og_mediesamfunnet:vg2',
        },
        {
          title: 'VG3',
          value: 'medieuttrykk_og_mediesamfunnet:vg3',
        },
      ],
    },
    {
      title: 'Naturbruk',
      value: 'subjects:naturbruk',
      filterName: 'filter_subjects',
      subjectFilters: [
        {
          title: 'VG1',
          value: 'naturbruk:vg1',
        },
      ],
    },
  ],
};

export const notionResults = [
  {
    id: 1,
    title: 'And',
    text:
      'Ender tilhører andefamilien. I Norge har det vært vanlig å dele endene inn i tre grupper etter levevis: Gressender som spiser planter på grunt vann, dykkender som dykker etter virvelløse dyr, og fiskeender som spiser fisk. Ender ble husdyr i middelhavslandene kort tid før Kristi fødsel. Hos hannen, andriken, er de fire midtre halefjærene bøyd oppover. Som ofte ellers i fugleriket har hannen finere farger enn hunnen. Det finnes en rekke raser og krysninger. På bildet ser vi tamme ender, pekinand.',
    image: {
      url: 'https://api.ndla.no/image-api/raw/id/40164',
      alt: 'And',
    },
    labels: ['Naturbruk Vg1'],
  },
  {
    id: 2,
    title: 'Breiflabb',
    text:
      'Hos breiflabben – eller marulken som den også kalles – utgjør det store hodet om lag halvparten av den totale lengden. Den finnes fra fjæra og ned til 600 meters dyp, der den gjemmer seg blant planter eller delvis nedgravd i sanden. Breiflabben lever hovedsakelig av fisk og skalldyr.',
    image: {
      url: 'https://api.ndla.no/image-api/raw/id/9825',
      alt: 'Breiflabb',
    },
    labels: ['Naturbruk Vg1'],
  },
];

export {
  topicResults,
  subjectMaterialResults,
  searchTypeFilterOptions,
  searchSubjectTypeOptions,
  subjectTypeResults,
};
