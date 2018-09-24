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
      hits: 5,
    },
    {
      title: 'Forelesning, presentasjon',
      value: 'value1',
      hits: 4,
    },
    {
      title: 'Fagartikkel',
      value: 'value2',
      hits: 13,
    },
    {
      title: 'Tegning og illustrasjon',
      value: 'value3',
      hits: 4,
    },
    {
      title: 'Simulering',
      value: 'value4',
      hits: 0,
    },
    {
      title: 'Verktøy og mal',
      value: 'value5',
      hits: 0,
    },
    {
      title: 'Veiledning',
      value: 'value6',
      hits: 1,
    },
    {
      title: 'Lydopptak',
      value: 'value7',
      hits: 0,
    },
    {
      title: 'Oppslagsverk og ordliste',
      value: 'value8',
      hits: 6,
    },
  ],
  TASKS_AND_ACTIVITIES: [
    {
      title: 'Oppgave',
      value: 'value',
      hits: 6,
    },
    {
      title: 'Øvelse',
      value: 'value1',
      hits: 3,
    },
    {
      title: 'Arbeidsoppdrag',
      value: 'value2',
      hits: 7,
    },
    {
      title: 'Forsøk',
      value: 'value3',
      hits: 0,
    },
    {
      title: 'Spill',
      value: 'value4',
      hits: 0,
    },
  ],
  EVALUATION_RESOURCE: [
    {
      title: 'Lærervurdering',
      value: 'value',
      hits: 12,
    },
    {
      title: 'Egenvurdering',
      value: 'value1',
      hits: 3,
    },
    {
      title: 'Medelevvurdering',
      value: 'value2',
      hits: 0,
    },
  ],
  SOURCE_MATERIAL: [
    {
      title: 'Spillefilm',
      value: 'value',
      hits: 1,
    },
    {
      title: 'Kortfilm',
      value: 'value1',
      hits: 0,
    },
    {
      title: 'Historiske kilder',
      value: 'value2',
      hits: 4,
    },
    {
      title: 'Malerier- grafikk- kunstfoto',
      value: 'value3',
      hits: 3,
    },
    {
      title: 'Litterærere tekster',
      value: 'value4',
      hits: 9,
    },
  ],
  SHARED_RESOURCES: [
    {
      title: 'Ekstern kilde',
      value: 'value',
      hits: 12,
    },
    {
      title: 'Delt læringsressurs',
      value: 'value1',
      hits: 8,
    },
    {
      title: 'FYR-ressurs',
      value: 'value2',
      hits: 0,
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
  contentTypeFilter: [
    {
      title: 'Emne',
      value: 'contentTypeFilter:1',
    },
    {
      title: 'Læringssti',
      value: 'contentTypeFilter:2',
    },
    {
      title: 'Fagstoff',
      value: 'contentTypeFilter:3',
    },
    {
      title: 'Oppgaver og aktiviteter',
      value: 'contentTypeFilter:4',
    },
    {
      title: 'Vurderingsressurs',
      value: 'contentTypeFilter:5',
    },
    {
      title: 'Delte ressurser',
      value: 'contentTypeFilter:6',
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
    },
    {
      title: 'Andre',
      value: 'createdByFilter:2',
    },
  ],
};
