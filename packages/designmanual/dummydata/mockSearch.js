export const searchTabOptions = [
  {
    title: 'Alle',
    value: 'all',
  },
  {
    title: 'Emne',
    value: 'SUBJECT',
  },
  {
    title: 'Læringssti',
    value: 'LEARNING_PATH',
  },
  {
    title: 'Fagstoff',
    value: 'SUBJECT_MATERIAL',
  },
  {
    title: 'Oppgaver..',
    value: 'TASKS_AND_ACTIVITIES',
  },
  {
    title: 'Vurderingsressurs',
    value: 'EVALUATION_RESOURCE',
  },
  {
    title: 'Delte ressurser',
    value: 'SHARED_RESOURCES',
  },
];

export const searchTabFilterOptions = {
  SUBJECT: null,
  LEARNING_PATH: null,
  SUBJECT_MATERIAL: [
    {
      title: 'Undervisningsfilm',
      value: 'value',
    },
    {
      title: 'Forelesning og presentasjon',
      value: 'value1',
    },
    {
      title: 'Fagartikkel',
      value: 'value2',
    },
    {
      title: 'Tegning og illustrasjon',
      value: 'value3',
    },
    {
      title: 'Simulering',
      value: 'value4',
    },
    {
      title: 'Verktøy og mal',
      value: 'value5',
    },
    {
      title: 'Veiledning',
      value: 'value6',
    },
    {
      title: 'Lydopptak',
      value: 'value7',
    },
    {
      title: 'Oppslagsverk og ordliste',
      value: 'value8',
    },
  ],
  TASKS_AND_ACTIVITIES: [
    {
      title: 'Oppgave',
      value: 'value',
    },
    {
      title: 'Øvelse',
      value: 'value1',
    },
    {
      title: 'Arbeidsoppdrag',
      value: 'value2',
    },
    {
      title: 'Forsøk',
      value: 'value3',
    },
    {
      title: 'Spill',
      value: 'value4',
    },
  ],
  EVALUATION_RESOURCE: [
    {
      title: 'Lærervurdering',
      value: 'value',
    },
    {
      title: 'Egenvurdering',
      value: 'value1',
    },
    {
      title: 'Medelevvurdering',
      value: 'value2',
    },
  ],
  SOURCE_MATERIAL: [
    {
      title: 'Spillefilm',
      value: 'value',
    },
    {
      title: 'Kortfilm',
      value: 'value1',
    },
    {
      title: 'Historiske kilder',
      value: 'value2',
    },
    {
      title: 'Malerier- grafikk- kunstfoto',
      value: 'value3',
    },
    {
      title: 'Litterærere tekster',
      value: 'value4',
    },
  ],
  SHARED_RESOURCES: [
    {
      title: 'Ekstern kilde',
      value: 'value',
    },
    {
      title: 'Delt læringsressurs',
      value: 'value1',
    },
    {
      title: 'FYR-ressurs',
      value: 'value2',
    },
  ],
};

export const contentTypeResults = [
  {
    title: 'Læringsstier',
    resources: [
      {
        path: '#1',
        name: 'Mediemakt',
      },
      {
        path: '#2',
        name: 'Media som den fjerde statsmakt',
      },
    ],
  },
  {
    title: 'Fagstoff',
    resources: [
      {
        path: '#1',
        name: 'Hva er makt?',
      },
      {
        path: '#2',
        name: 'Maktfordelingsprinsippet',
      },
      {
        path: '#3',
        name: 'Fagstoff 3',
      },
      {
        path: '#4',
        name: 'Fagstoff 4',
      },
      {
        path: '#5',
        name: 'Fagstoff 5',
      },
      {
        path: '#6',
        name: 'Fagstoff 6',
      },
    ],
  },
  {
    title: 'Oppgaver og aktiviteter',
    resources: [],
  },
];
