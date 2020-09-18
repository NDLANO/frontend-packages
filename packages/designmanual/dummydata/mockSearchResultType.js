const subjectResults = [
  {
    id: 1,
    title: 'Ideskapning',
    url: '#1',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    contentTypeLabel: 'Emne',
    breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
    matchTab: ['SUBJECT'],
    img: {
      // url: 'https://staging.api.ndla.no/image-api/raw/42-45210905.jpg?width=1024&focalX=50&focalY=50&ratio=16.9',
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
    matchTab: ['SUBJECT'],
    resourceTypes: [
      {
        id: 'urn:resourcetype:tasksAndActivities',
        name: 'Oppgaver og aktiviteter',
      },
      { id: 'urn:resourcetype:task', name: 'Øvelse' },
    ],
    img: {
      // url: 'https://staging.api.ndla.no/image-api/raw/42-45210905.jpg?width=1024&focalX=50&focalY=50&ratio=16.9',
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
      // url: 'https://staging.api.ndla.no/image-api/raw/42-45210905.jpg?width=1024&focalX=50&focalY=50&ratio=16.9',
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
    // contentTypeIcon: <TasksAndActivitiesBadge size="xx-small" background />,
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    matchTab: ['SUBJECT'],
    type: 'Oppgave',
    img: {
      // url: 'https://staging.api.ndla.no/image-api/raw/42-45210905.jpg?width=1024&focalX=50&focalY=50&ratio=16.9',
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
    // contentTypeIcon: <TasksAndActivitiesBadge size="xx-small" background />,
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    matchTab: ['SUBJECT'],
    type: 'Oppgave',
  },
  {
    id: 6,
    title: 'Hva kan du om platetektonikk 6?',
    url: '#6',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    contentTypeLabel: 'Oppgaver og aktiveter',
    // contentTypeIcon: <TasksAndActivitiesBadge size="xx-small" background />,
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    matchTab: ['SUBJECT'],
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
    // contentTypeIcon: <TasksAndActivitiesBadge size="xx-small" background />,
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    matchTab: ['SUBJECT'],
    type: 'Oppgave',
  },
  {
    id: 8,
    title: 'Hva kan du om platetektonikk 8?',
    url: '#8',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    contentTypeLabel: 'Oppgaver og aktiveter',
    // contentTypeIcon: <TasksAndActivitiesBadge size="xx-small" background />,
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    matchTab: ['SUBJECT'],
    type: 'Oppgave',
  },
  {
    id: 9,
    title: 'Hva kan du om platetektonikk 9?',
    url: '#9',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    contentTypeLabel: 'Oppgaver og aktiveter',
    // contentTypeIcon: <TasksAndActivitiesBadge size="xx-small" background />,
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    matchTab: ['SUBJECT'],
    type: 'Oppgave',
    img: {
      // url: 'https://staging.api.ndla.no/image-api/raw/42-45210905.jpg?width=1024&focalX=50&focalY=50&ratio=16.9',
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
    matchTab: ['SUBJECT'],
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
    matchTab: ['SUBJECT'],
  },
  {
    id: 11,
    title: 'Ideskapning og mediedesign 20',
    url: '#2',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    contentTypeLabel: 'Læringssti',
    breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
    matchTab: ['SUBJECT'],
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
    matchTab: ['SUBJECT'],
    type: 'Undervisningsfilm',
  },
  {
    id: 13,
    title: 'Hva kan du om platetektonikk? 40',
    url: '#4',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    contentTypeLabel: 'Oppgaver og aktiveter',
    // contentTypeIcon: <TasksAndActivitiesBadge size="xx-small" background />,
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    matchTab: ['SUBJECT'],
    type: 'Oppgave',
  },
];

const searchTypeFilterOptions = {
  SUBJECT: [
    {
      name: 'Oppgave test',
      id: 'urn:resourcetype:task:test',
    },
    {
      name: 'Øvelse test',
      id: 'urn:resourcetype:exercise:test',
    },
    {
      name: 'Øvelse test 2',
      id: 'urn:resourcetype:exercise:test2',
    },
  ],
  LEARNING_PATH: null,
  SUBJECT_MATERIAL: [
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
  TASKS_AND_ACTIVITIES: [
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
};

const searchTopicOptions = [
  {
    title: 'Alle',
    value: null,
  },
  {
    title: 'Emne',
    value: 'SUBJECT',
  },
  {
    title: 'Fagstoff',
    value: 'SUBJECT_MATERIAL',
  },
  {
    title: 'Oppgaver og aktiviteter',
    value: 'TASKS_AND_ACTIVITIES',
  },
  {
    title: 'Læringssti',
    value: 'LEARNING_PATH',
  },
];

export {
  subjectResults,
  subjectMaterialResults,
  searchTypeFilterOptions,
  searchTopicOptions,
};
