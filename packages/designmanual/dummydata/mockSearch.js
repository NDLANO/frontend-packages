import { constants } from 'ndla-ui';

const { contentTypes } = constants;

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
      title: 'Forelesning, presentasjon',
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
    contentType: contentTypes.LEARNING_PATH,
    messages: {
      allResultLabel: 'Vis alle læringsstier',
      showLessResultLabel: 'Vis færre læringsstier',
    },
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
    contentType: contentTypes.SUBJECT_MATERIAL,
    messages: {
      allResultLabel: 'Vis alt fagstoff?',
      showLessResultLabel: 'Vis færre fagstoff',
    },
    resources: [
      {
        path: '#1',
        name: 'Hva er makt?',
      },
      {
        path: '#2',
        name: 'Maktfordelingsprinsippet',
        additional: true,
      },
      {
        path: '#3',
        name: 'Fagstoff 3',
      },
      {
        path: '#4',
        name: 'Fagstoff 4',
        additional: true,
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
    contentType: contentTypes.TASKS_AND_ACTIVITIES,
    messages: {
      allResultLabel: 'Vis alle oppgaver og aktiviteter',
      showLessResultLabel: 'Vis færre oppgaver og aktiviteter',
    },
    resources: [],
  },
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
          hits: 7,
        },
        {
          title: 'YF VG3',
          value: 'bronnteknikk:yfvg3',
          hits: 23,
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
          hits: 0,
        },
        {
          title: 'VG2',
          value: 'kinesisk:vg2',
          hits: 3,
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
          hits: 6,
        },
        {
          title: 'VG2',
          value: 'markedsforing_og_ledelse:vg2',
          hits: 8,
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
          hits: 3,
        },
        {
          title: 'Mediesamfunnet',
          value: 'medieuttrykk_og_mediesamfunnet:mediesamfunnet',
          hits: 1,
        },
        {
          title: 'VG1',
          value: 'medieuttrykk_og_mediesamfunnet:vg1',
          hits: 2,
        },
        {
          title: 'VG2',
          value: 'medieuttrykk_og_mediesamfunnet:vg2',
          hits: 6,
        },
        {
          title: 'VG3',
          value: 'medieuttrykk_og_mediesamfunnet:vg3',
          hits: 0,
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
          hits: 8,
        },
      ],
    },
  ],
  contentTypeFilter: [
    {
      title: 'Emne',
      value: 'contentTypeFilter:1',
      hits: 19,
    },
    {
      title: 'Læringssti',
      value: 'contentTypeFilter:2',
      hits: 52,
    },
    {
      title: 'Fagstoff',
      value: 'contentTypeFilter:3',
      hits: 74,
    },
    {
      title: 'Oppgaver og aktiviteter',
      value: 'contentTypeFilter:4',
      hits: 21,
    },
    {
      title: 'Vurderingsressurs',
      value: 'contentTypeFilter:5',
      hits: 21,
    },
    {
      title: 'Delte ressurser',
      value: 'contentTypeFilter:6',
      hits: 21,
    },
  ],
  contentFilter: [
    {
      title: 'Tilleggstoff',
      additional: true,
      value: 'contentFilter:1',
      hits: 46,
    },
    {
      title: 'Kjernestoff',
      value: 'contentFilter:2',
      hits: 102,
    },
  ],
  languageFilter: [
    {
      title: 'Bokmål',
      value: 'languageFilter:1',
      hits: 73,
    },
    {
      title: 'Nynorsk',
      value: 'languageFilter:2',
      hits: 39,
    },
    {
      title: 'Engelsk',
      value: 'languageFilter:3',
      hits: 5,
    },
    {
      title: 'Kinesisk',
      value: 'languageFilter:4',
      hits: 0,
    },
  ],
  createdByFilter: [
    {
      title: 'Ndla',
      value: 'createdByFilter:1',
      hits: 123,
    },
    {
      title: 'Andre',
      value: 'createdByFilter:2',
      hits: 44,
    },
  ],
};
