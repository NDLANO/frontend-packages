import { constants } from '@ndla/ui';

const { contentTypes } = constants;

export const topicList = [
  {
    id: 'urn:topic:1:179373',
    name: 'Utforskeren',
    contentUri: 'urn:article:6104',
    introduction:
      'Hovudområdet grip over i og inn i dei andre hovudområda i faget, og difor skal ein arbeide med kompetansemåla i utforskaren samtidig med at ein arbeider med mål frå andre hovudområde. Hovudområdet handlar om korleis ein byggjer opp samfunnsfagleg forståing gjennom nysgjerrigheit, undring og skapande aktivitetar.',
    parent: 'urn:subject:100',
    author: 'Inga Berntsen Rudi',
    path: '/subject:100/topic:1:179373',
    connectionId: 'urn:subject-topic:9f04fc8c-7b4b-4742-b0d0-21a9c227192b',
    tags: ['VG1'],
    additional: true,
    shortcuts: [
      {
        contentType: contentTypes.LEARNING_PATH,
        count: 4,
        url: '#',
        tooltip: 'Vis 4 læringsstier',
        id: '1',
      },
      {
        contentType: contentTypes.SUBJECT_MATERIAL,
        count: 12,
        url: '#',
        tooltip: 'Vis 12 fagartikler',
        id: '2',
      },
      {
        contentType: contentTypes.TASKS_AND_ACTIVITIES,
        count: 5,
        url: '#',
        tooltip: 'Vis 5 oppgaver og aktiviteter',
        id: '3',
      },
      {
        contentType: contentTypes.ASSESSMENT_RESOURCES,
        count: 1,
        url: '#',
        tooltip: 'Vis 1 vurderingsressurs',
        id: '4',
      },
    ],
  },
  {
    id: 'urn:topic:1:55163',
    name: 'Individ, samfunn og kultur',
    contentUri: 'urn:article:6074',
    author: 'Inga Berntsen Rudi',
    introduction:
      'Spørsmålet «Hvem er jeg?» står sentralt når du skal arbeide med hovedområdet «Individ, samfunn og kultur». Spørsmålet kan være både lett og vanskelig å svare på. Oppfølgingsspørsmålene kan være: Hvordan er jeg blitt til den jeg er i dag? Hva gjør meg unik? Hva gjør meg lik andre?',
    parent: 'urn:subject:100',
    path: '/subject:100/topic:1:55163',
    connectionId: 'urn:subject-topic:3e9772e9-14f6-4439-a8d2-5d75b3e5d772',
    tags: ['VG2'],
    additional: false,
    shortcuts: [
      {
        contentType: contentTypes.LEARNING_PATH,
        count: 4,
        url: '#',
        tooltip: 'Vis 4 artikler i dette emnet',
        id: '1',
      },
      {
        contentType: contentTypes.SUBJECT_MATERIAL,
        count: 12,
        url: '#',
        tooltip: 'Vis 12 artikler i dette emnet',
        id: '2',
      },
      {
        contentType: contentTypes.TASKS_AND_ACTIVITIES,
        count: 5,
        url: '#',
        tooltip: 'Vis 5 artikler i dette emnet',
        id: '3',
      },
      {
        contentType: contentTypes.ASSESSMENT_RESOURCES,
        count: 1,
        url: '#',
        tooltip: 'Vis 1 artikler i dette emnet',
        id: '4',
      },
    ],
  },
  {
    id: 'urn:topic:1:55212',
    name: 'Arbeids- og næringsliv',
    contentUri: 'urn:article:2513',
    parent: 'urn:subject:100',
    author: 'Inga Berntsen Rudi',
    introduction:
      'Hva skal du bli når du blir stor? Dette er et spørsmål de aller fleste av oss har fått en eller annen gang. Svarene vi ga, kunne være politi, brannmann, flyvertinne eller … indianer. Mange oppfyller drømmen sin. For noen endrer drømmen seg mange ganger i løpet av barne- og ungdomstiden. På veien er det mange valg vi må ta.',
    path: '/subject:100/topic:1:55212',
    connectionId: 'urn:subject-topic:a3c98195-098a-48e2-b612-6b2e0e83ec64',
    tags: ['VG3'],
    additional: false,
    shortcuts: [
      {
        contentType: contentTypes.LEARNING_PATH,
        count: 4,
        url: '#',
        tooltip: 'Vis 4 artikler i dette emnet',
        id: '1',
      },
      {
        contentType: contentTypes.SUBJECT_MATERIAL,
        count: 12,
        url: '#',
        tooltip: 'Vis 12 artikler i dette emnet',
        id: '2',
      },
      {
        contentType: contentTypes.TASKS_AND_ACTIVITIES,
        count: 5,
        url: '#',
        tooltip: 'Vis 5 artikler i dette emnet',
        id: '3',
      },
      {
        contentType: contentTypes.ASSESSMENT_RESOURCES,
        count: 1,
        url: '#',
        tooltip: 'Vis 1 artikler i dette emnet',
        id: '4',
      },
    ],
  },
];

export const topicListFilm = topicList.map((topic) => ({
  ...topic,
  metaImage: { url: 'http://placehold.it/200x160', alt: 'some image' },
}));
