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

const subjectResults = [
  {
    id: 1,
    title: 'Ideskapning',
    url: '#1',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    contentTypeLabel: 'Emne',
    breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
    img: {
      url:
        'https://api.ndla.no/image-api/raw/id/28404?focalX=50&focalY=50&ratio=1.75',
      alt: 'Forstørrelsesglass',
    },
  },
  {
    id: 2,
    title: 'Ideskapning og mediedesign',
    url: '#2',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    contentTypeLabel: 'Læringssti',
    breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
    resourceTypes: [
      {
        id: 'urn:resourcetype:tasksAndActivities',
        name: 'Oppgaver og aktiviteter',
      },
      { id: 'urn:resourcetype:task', name: 'Øvelse' },
    ],
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
    contentTypeLabel: 'Fagstoff',
    additional: true,
    img: {
      url:
        'https://staging.api.ndla.no/image-api/raw/42-45210905.jpg?focalX=50&focalY=50&ratio=1.75',
      alt: 'Forstørrelsesglass',
    },
    subjects: [
      {
        url: '#1',
        title: 'Flerfaglig',
      },
      {
        url: '#2',
        title: 'Medieuttrykk og mediesamfunnet',
      },
      {
        url: '#3',
        title: 'Norsk',
      },
    ],
    matchTab: ['SUBJECT'],
    type: 'Undervisningsfilm',
  },
  {
    id: 4,
    title: 'Hva kan du om platetektonikk?',
    url: '#4',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    contentTypeLabel: 'Oppgaver og aktiveter',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    type: 'Oppgave',
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
    contentTypeLabel: 'Oppgaver og aktiveter',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    type: 'Oppgave',
  },
  {
    id: 6,
    title: 'Hva kan du om platetektonikk 6?',
    url: '#6',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    contentTypeLabel: 'Oppgaver og aktiveter',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    type: 'Oppgave',
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
    contentTypeLabel: 'Oppgaver og aktiveter',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    type: 'Oppgave',
  },
  {
    id: 8,
    title: 'Hva kan du om platetektonikk 8?',
    url: '#8',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    contentTypeLabel: 'Oppgaver og aktiveter',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    type: 'Oppgave',
  },
  {
    id: 9,
    title: 'Hva kan du om platetektonikk 9?',
    url: '#9',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    contentTypeLabel: 'Oppgaver og aktiveter',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    type: 'Oppgave',
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
    contentTypeLabel: 'Oppgaver og aktiveter',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    type: 'Oppgave',
  },
];

const subjectMaterialResults = [
  {
    id: 10,
    title: 'Ideskapning og mediedesign 10',
    url: '#1',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    contentTypeLabel: 'Emne',
    breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
  },
  {
    id: 11,
    title: 'Ideskapning og mediedesign 20',
    url: '#2',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    contentTypeLabel: 'Læringssti',
    breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
    resourceTypes: [
      {
        id: 'urn:resourcetype:tasksAndActivities',
        name: 'Oppgaver og aktiviteter',
      },
      { id: 'urn:resourcetype:task', name: 'Øvelse' },
    ],
  },
  {
    id: 12,
    title: 'Ideskapning og mediedesign 30',
    url: '#3',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    contentTypeLabel: 'Fagstoff',
    additional: true,
    img: {
      url:
        'https://api.ndla.no/image-api/raw/id/28404?focalX=50&focalY=50&ratio=1.75',
      alt: 'Forstørrelsesglass',
    },
    subjects: [
      {
        url: '#1',
        title: 'Flerfaglig',
      },
      {
        url: '#2',
        title: 'Medieuttrykk og mediesamfunnet',
      },
      {
        url: '#3',
        title: 'Norsk',
      },
    ],
    type: 'Undervisningsfilm',
  },
  {
    id: 13,
    title: 'Hva kan du om platetektonikk? 40',
    url: '#4',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    contentTypeLabel: 'Oppgaver og aktiveter',
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    type: 'Oppgave',
  },
  {
    id: 14,
    title: 'Hva kan du om platetektonikk? 50',
    url: '#5',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    contentTypeLabel: 'Oppgaver og aktiveter',
    breadcrumb: ['Brønnteknikk', 'Geologi for brønnteknikk'],
    type: 'Oppgave',
  },
];

const searchTypeFilterOptions = {
  subject: null,
  'learning-path': null,
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
  EVALUATION_RESOURCE: null,
  SOURCE_MATERIAL: null,
  SHARED_RESOURCES: null,
  topic: null,
};

const searchSubjectTypeOptions = [
  {
    title: 'Alle',
    value: 'ALL',
  },
  {
    title: 'Fag',
    value: 'subject',
  },
  {
    title: 'Emne',
    value: 'topic',
  },
  {
    title: 'Fagstoff',
    value: 'subject-material',
  },
  {
    title: 'Oppgaver og aktiviteter',
    value: 'tasks-and-activities',
  },
  {
    title: 'Læringssti',
    value: 'learning-path',
  },
];

export {
  subjectResults,
  subjectMaterialResults,
  searchTypeFilterOptions,
  searchSubjectTypeOptions,
  subjectTypeResults,
};
