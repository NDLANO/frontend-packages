export const historieFilters = [
  {
    id: 'urn:filter:2309b75d-197e-4d94-a1b3-55eaab9945f2',
    name: 'SF VG2',
  },
  {
    id: 'urn:filter:fb7e8e6f-de72-4f49-a207-7a94278786a2',
    name: 'PB VG3',
  },
  {
    id: 'urn:filter:66ddbbd8-7c79-4e59-8f95-083027d712cb',
    name: 'SF VG3',
  },
];

export const historieTopics = [
  {
    id: 'urn:topic:1:182020',
    name: 'Historieforståelse og metoder ',
    filters: historieFilters,
    subtopics: [
      {
        id: 'urn:topic:1:144149',
        name: 'Historie + statistikk = sant?',
        filters: historieFilters,
        subtopics: [],
      },
      {
        id: 'urn:topic:1:188087',
        name: 'Historiske sammenhenger',
        filters: historieFilters,
        subtopics: [],
      },
    ],
  },
  {
    id: 'urn:topic:1:182163',
    name: 'Samfunn og mennesker i tid',
    filters: historieFilters,
    subtopics: [
      {
        id: 'urn:topic:1:157787',
        name: 'Ideologiene på 1900-tallet',
        filters: historieFilters.slice(1),
        subtopics: [],
      },
      {
        id: 'urn:topic:1:183762',
        name: 'Industrialisering og arbeidsliv',
        filters: historieFilters.slice(1),
        subtopics: [
          {
            id: 'urn:topic:1:184116',
            name: 'Arbeidsliv og kjønn',
            filters: historieFilters.slice(2),
            subtopics: [],
          },
          {
            id: 'urn:topic:1:183763',
            name: 'Industrialisering',
            filters: historieFilters.slice(1),
            subtopics: [],
          },
        ],
      },
      {
        id: 'urn:topic:1:164660',
        name: 'Kolonialismen',
        filters: historieFilters.slice(1),
        subtopics: [],
      },
      {
        id: 'urn:topic:1:184957',
        name: 'Krig og konflikter',
        filters: historieFilters,
        subtopics: [
          {
            id: 'urn:topic:1:168758',
            name: 'Andre verdenskrig',
            contentUri: 'urn:article:8944',
            filters: historieFilters.slice(1),
            subtopics: [],
          },
          {
            id: 'urn:topic:1:187959',
            name: 'Den kalde krigen',
            filters: historieFilters.slice(1),
            subtopics: [],
          },
          {
            id: 'urn:topic:1:168025',
            name: 'Første verdenskrig – krigen som forandret Europa for godt',
            filters: historieFilters.slice(1),
            subtopics: [],
          },
        ],
      },
      {
        id: 'urn:topic:1:154342',
        name: 'Middelalderen',
        filters: historieFilters.slice(1),
        subtopics: [],
      },
    ],
  },
];

export const kinesiskFilter = [
  {
    id: 'urn:filter:a294489b-7ca6-42a0-9243-6ab0b6be9028',
    name: 'Kinesisk 1',
  },
  {
    id: 'urn:filter:5d6013b3-7a17-4c94-b47e-0b0735ce652f',
    name: 'Kinesisk 2',
  },
];
export const kinesiskTopics = [
  {
    id: 'urn:topic:1:181994',
    name: 'Introduksjon til kinesisk',
    filters: kinesiskFilter.slice(-1),
    subtopics: [],
  },
  {
    id: 'urn:topic:1:181998',
    name: 'Leksjon 1: Hei!',
    filters: [
      {
        id: 'urn:filter:a294489b-7ca6-42a0-9243-6ab0b6be9028',
        name: 'Kinesisk 1',
        relevanceId: 'urn:relevance:core',
      },
    ],
    subtopics: [],
  },
  {
    id: 'urn:topic:1:181980',
    name: 'Leksjon 1: Reise',
    filters: [
      {
        id: 'urn:filter:1ceede07-0824-4dee-b5f6-c2f008b4924a',
        name: 'Kinesisk 2',
        relevanceId: 'urn:relevance:core',
      },
    ],
    subtopics: [],
  },
  {
    id: 'urn:topic:1:181981',
    name: 'Leksjon 2: På tur til Shanghai',
    filters: [
      {
        id: 'urn:filter:1ceede07-0824-4dee-b5f6-c2f008b4924a',
        name: 'Kinesisk 2',
        relevanceId: 'urn:relevance:core',
      },
    ],
    subtopics: [],
  },
  {
    id: 'urn:topic:1:182001',
    name: 'Leksjon 2: Å bli kjent med en medstudent',
    filters: [
      {
        id: 'urn:filter:a294489b-7ca6-42a0-9243-6ab0b6be9028',
        name: 'Kinesisk 1',
        relevanceId: 'urn:relevance:core',
      },
    ],
    subtopics: [],
  },
  {
    id: 'urn:topic:1:182003',
    filters: [
      {
        id: 'urn:filter:a294489b-7ca6-42a0-9243-6ab0b6be9028',
        name: 'Kinesisk 1',
        relevanceId: 'urn:relevance:core',
      },
    ],
    subtopics: [],
  },
  {
    id: 'urn:topic:1:181982',
    name: 'Leksjon 3: I Shanghai',
    contentUri: 'urn:article:8563',
    parent: 'urn:subject:2',
    path: '/subject:2/topic:1:181982',
    connectionId: 'urn:subject-topic:1598c1f8-4d42-40bc-b1fb-3414fd8ca896',
    isPrimary: true,
    rank: 19,
    filters: [
      {
        id: 'urn:filter:1ceede07-0824-4dee-b5f6-c2f008b4924a',
        name: 'kinesisk 2',
        relevanceId: 'urn:relevance:core',
      },
    ],
    subtopics: [],
  },
];

export const helseFilters = [
  {
    id: 'urn:filter:8f224489-e31e-49c4-9fd2-3b9a1dd53c8d',
    name: 'YF VG1',
    relevanceId: 'urn:relevance:core',
  },
];

export const helseTopics = [
  {
    id: 'urn:topic:1:183520',
    name: 'Etikk i arbeidet',
    filters: helseFilters,
    subtopics: [
      {
        id: 'urn:topic:1:183780',
        name: 'Etisk bevissthet og refleksjon',
        filters: helseFilters,
        subtopics: [],
      },
      {
        id: 'urn:topic:1:18171',
        name: 'Yrkesetikk',
        filters: helseFilters,
        subtopics: [],
      },
    ],
  },
  {
    id: 'urn:topic:1:183730',
    name: 'Folkehelsearbeid',
    filters: helseFilters,
    subtopics: [
      {
        id: 'urn:topic:1:4013',
        name: 'Hva er god helse?',
        filters: helseFilters,
        subtopics: [],
      },
      {
        id: 'urn:topic:1:184443',
        name: 'Informasjon og reklame',
        filters: helseFilters,
        subtopics: [],
      },
      {
        id: 'urn:topic:1:184442',
        name: 'Sykdom og behandling',
        filters: helseFilters,
        subtopics: [],
      },
    ],
  },
  {
    id: 'urn:topic:1:183729',
    name: 'Førstehjelp',
    filters: helseFilters,
    subtopics: [
      {
        id: 'urn:topic:1:184421',
        name: 'Grunnleggende førstehjelp',
        filters: helseFilters,
        subtopics: [],
      },
    ],
  },
];

export const subjects = [
  {
    id: 'urn:subject:24',
    name: 'Helse- og oppvekstfag Vg1',
  },
  {
    id: 'urn:subject:2',
    name: 'Kinesisk',
  },
  {
    id: 'urn:subject:9',
    name: 'Historie Vg2 og Vg3',
  },
];

export const allFilters = {
  'urn:subject:2': kinesiskFilter,
  'urn:subject:9': historieFilters,
  'urn:subject:24': helseFilters,
};

export const subjectTopics = {
  'urn:subject:2': kinesiskTopics,
  'urn:subject:9': historieTopics,
  'urn:subject:24': helseTopics,
};
