import { constants } from 'ndla-ui';

import { contentTypeResults } from './mockSearch';

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

export const subtopicList = [
  {
    id: '1',
    name: 'Profesjonell kommunikasjon',
    introduction:
      'Å få til en god dialog er betydningsfullt for å få til en god omsorg. Gode kommunikasjonsevner er derfor en viktig del av helsefagarbeiderens profesjonelle ferdigheter.',
    contentUri: null,
  },
  {
    id: '2',
    name: 'Å kommunisere med mennesker med ulike forutsetninger',
    introduction:
      'Kommunikasjon med mennesker med ulike forutsetninger krever gode kunnskaper og ferdigheter. Helsefagarbeidere lærer dette gjennom utdannelsen sin. ',
    contentUri: null,
  },
  {
    id: '3',
    name: 'Kommunikasjon med alvorlig syke brukere ',
    introduction:
      'Som helsefagarbeider kan du komme tett på en brukers ønsker den siste fasen av livet og døden. En viktig del av kommunikasjonen er å gi alle mulighet til å snakke om dette når de selv ønsker det.',
    contentUri: null,
  },
  {
    id: '4',
    name: 'Kommunikasjon med pårørende ',
    introduction:
      'God kommunikasjon er viktig når man møter pårørende. Man må være bevisst sitt eget kroppsspråk og legge til rette for at pårørende får god nok informasjon om alt de lurer på i enhver situasjon.',
    contentUri: null,
  },
  {
    id: '5',
    name: 'Kommunikasjon med personer med demens',
    introduction:
      'Personer med demens kan ha vansker med å finne de riktige ordene samt oppfatte hva andre sier.  For å få til en god samtale er det viktig å være rolig og sette av tid til kommunikasjon.',
    contentUri: null,
  },
];

export const topicMenu = [
  {
    id: 'urn:topic:172416',
    name: 'Idéutvikling og mediedesign',
    subtopics: [
      {
        id: 'urn:topic:170363',
        name: 'Idéutvikling',
        contentUri: null,
        contentTypeResults,
      },
      {
        id: 'urn:topic:169397',
        name: 'Mediedesign',
        contentUri: null,
        contentTypeResults,
      },
    ],
    contentUri: null,
  },
  {
    id: 'urn:topic:172405',
    name: 'Medieproduksjon',
    subtopics: [
      {
        id: 'urn:topic:111111',
        name: 'Nettsider',
        contentUri: null,
        subtopics: [
          {
            id: 'urn:topic:162334',
            name: 'Html',
            contentUri: null,
            contentTypeResults,
          },
          {
            id: 'urn:topic:165354',
            name: 'Css',
            contentUri: null,
            contentTypeResults,
          },
        ],
      },
      {
        id: 'urn:topic:170356',
        name: 'Produksjonsutstyr og HMS',
        contentUri: null,
        contentTypeResults,
      },
      {
        id: 'urn:topic:170364',
        name: 'Lydarbeid',
        contentUri: null,
        contentTypeResults,
      },
      {
        id: 'urn:topic:30a52046-451e-4302-b62f-21f1a1d0b81e',
        name: 'Levende bilde',
        contentUri: null,
        contentTypeResults,
      },
      {
        id: 'urn:topic:170379',
        name: 'Bilde',
        contentUri: null,
        contentTypeResults,
      },
      {
        id: 'urn:topic:412bdb35-87f6-49e4-b59a-71f6652652ac',
        name: 'Skriftlig tekstarbeid',
        contentUri: null,
        contentTypeResults,
      },
    ],
    contentUri: null,
  },
  {
    id: 'urn:topic:172532',
    name: 'Mediekommunikasjon',
    subtopics: [
      {
        id: 'urn:topic:63b785ca-9bda-4769-a95e-51d621cace34',
        name: 'Fortelleteknikker og virkemidler',
        contentUri: null,
        contentTypeResults,
      },
      {
        id: 'urn:topic:169412',
        name: 'Mediekommunikasjon',
        contentUri: null,
        contentTypeResults,
      },
    ],
    contentUri: null,
  },
];
