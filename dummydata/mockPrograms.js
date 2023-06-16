import { constants } from '@ndla/ui';
import { contentTypeResults } from './mockSearch';
export const programmes = [
  {
    label: 'Bygg- og anleggsteknikk',
    url: '#',
    id: 'programme_1',
  },
  {
    label: 'Elektro og datateknologi',
    url: '#',
    id: 'programme_2',
  },
  {
    label: 'Frisør, blomster, interiør og eksponeringsdesign',
    url: '#',
    id: 'programme_3',
  },
  { label: 'Helse- og oppvekstfag', url: '#', id: 'programme_4' },
  {
    label: 'Håndverk, design og produktutvikling',
    url: '#',
    id: 'programme_5',
  },
  { label: 'Idrett', url: '#', id: 'programme_6' },
  {
    label: 'Informasjonsteknologi og medieproduksjon',
    url: '#',
    id: 'programme_7',
  },
  { label: 'Kunst, design og arkitektur', url: '#', id: 'programme_8' },
  { label: 'Medier og kommunikasjon', url: '#', id: 'programme_9' },
  { label: 'Musikk, dans og drama', url: '#', id: 'programme_10' },
  { label: 'Naturbruk', url: '#', id: 'programme_11' },
  { label: 'Påbygg', url: '#', id: 'programme_12' },
  { label: 'Restaurant- og matfag', url: '#', id: 'programme_13' },
  {
    label: 'Salg, service og reiseliv (Service og samferdsel)',
    url: '#',
    id: 'programme_14',
  },
  { label: 'Studiespesialisering', url: '#', id: 'programme_15' },
  { label: 'Teknologi- og industrifag', url: '#', id: 'programme_16' },
];

export const programme = {
  label: 'Salg, service og reiseliv (Service og samferdsel)',
  image: 'https://api.ndla.no/image-api/raw/5E4fooai.jpg',
  grades: [
    // Klassetrinn
    {
      name: 'Vg1',
      categories: [
        // Fag inndelt i kategorier
        {
          name: 'Felles programfag',
          subjects: [
            {
              label: 'Forretningsdrift',
              url: '#',
            },
            {
              label: 'Kultur og samhandling',
              url: '#',
            },
            {
              label: 'Markedsføring og innovasjon',
              url: '#',
            },
            {
              label: 'Yrkesfaglig fordypning',
              url: '#',
            },
          ],
        },
        {
          name: 'Fellesfag',
          subjects: [
            {
              label: 'Engelsk',
              url: '#',
            },
            {
              label: 'Kroppsøving',
              url: '#',
            },
            {
              label: 'Matematikk 1P-Y',
              url: '#',
            },
            {
              label: 'Matematikk 1T-Y',
              url: '#',
            },
            {
              label: 'Naturfag',
              url: '#',
            },
          ],
        },
      ],
    },
    {
      name: 'Vg2',
      categories: [
        // Fag inndelt i kategorier
        {
          name: 'IKT-service programfag ',
          subjects: [
            {
              label: 'Virksomhetsstøtte',
              url: '#',
            },
            {
              label: 'Bruker- og driftsstøtte',
              url: '#',
            },
            {
              label: 'Drift og vedlikehold',
              url: '#',
            },
          ],
        },
        {
          name: 'Reiseliv',
          subjects: [
            {
              label: 'Etablering og drift',
              url: '#',
            },
            {
              label: 'Sal og marknadsføring',
              url: '#',
            },
            {
              label: 'Vertskapsrolla',
              url: '#',
            },
            {
              label: 'Yrkesfaglig fordypning',
              url: '#',
            },
          ],
        },
        {
          name: 'Salg, service og sikkerhet',
          subjects: [
            {
              label: 'Markedsføring og salg',
              url: '#',
            },
            {
              label: 'Sikkerhet',
              url: '#',
            },
            {
              label: 'Økonomi og administrasjon',
              url: '#',
            },
          ],
        },
        {
          name: 'Transport og logistikk',
          subjects: [
            {
              label: 'Bransjeteknikk',
              url: '#',
            },
            {
              label: 'Transport og logistikk',
              url: '#',
            },
          ],
        },
        {
          name: 'Fellesfag',
          subjects: [
            {
              label: 'Kroppsøving',
              url: '#',
            },
            {
              label: 'Matematikk 2P-Y',
              url: '#',
            },
            {
              label: 'Norsk',
              url: '#',
            },
            {
              label: 'Samfunnsfag',
              url: '#',
            },
            {
              label: 'Sør-samisk',
              url: '#',
            },
          ],
        },
      ],
    },
  ],
};

export const programmeV2 = [
  {
    id: 'Bygg og anleggsteknikk',
    title: { title: 'Bygg og anleggsteknikk', language: 'nb' },
    desktopImage: {
      src: 'https://api.test.ndla.no/image-api/raw/N8X0h6Ns.svg?width=600&ts=1686832638131',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/FFHsjf6w.svg?width=600&ts=1686832507880',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Elektro og datateknologi',
    title: { title: 'Elektro og datateknologi', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/YIAprLg9.svg?width=600&ts=1686832845563',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Frisør, blomster, interiør og eksponeringsdesign',
    title: { title: 'Frisør, blomster, interiør og eksponeringsdesign', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/M3Ewo0Ep.svg?width=600&ts=1686900374397',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Helse- og oppvekstfag',
    title: { title: 'Helse- og oppvekstfag', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/BCQEgA9V.svg?width=600&ts=1686900446038',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Håndverk, design og produktutvikling',
    title: { title: 'Håndverk, design og produktutvikling', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/vO2tqCig.svg?width=600&ts=1686832880287',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Idrett',
    title: { title: 'Idrett', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/OxtI1BCR.svg?width=600&ts=1686900669797',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Informasjonsteknologi og medieproduksjon',
    title: { title: 'Informasjonsteknologi og medieproduksjon', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/YK1fgZEt.svg?width=600&ts=1686900687635',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Kunst, design og arkitektur',
    title: { title: 'Kunst, design og arkitektur', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/2U6k3rWi.svg?width=600&ts=1686832884034',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Medie og kommunikasjon',
    title: { title: 'Medie og kommunikasjon', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/pTfU8vaN.svg?width=600&ts=1686900724635',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Musikk, dans og drama',
    title: { title: 'Musikk, dans og drama', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/2TXzi1QY.svg?width=600&ts=1686832881769',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Naturbruk',
    title: { title: 'Naturbruk', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/gbsSv7aF.svg?width=600&ts=1686900755181',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Påbygg',
    title: { title: 'Påbygg', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/FFHsjf6w.svg?width=600&ts=1686900773999',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Resturant og matfag',
    title: { title: 'Resturant og matfag', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/TcAjLAdb.svg?width=600&ts=1686900804205',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Salg, service og reiseliv',
    title: { title: 'Salg, service og reiseliv', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/XRJl0bfy.svg?width=600&ts=1686901107920',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Studiespesialiserende',
    title: { title: 'Studiespesialiserende', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/XRJl0bfy.svg?width=600&ts=1686901107920',
      alt: '',
    },
    url: '#',
  },
  {
    id: 'Teknologi og industrifag',
    title: { title: 'Teknologi og industrifag', language: 'nb' },
    desktopImage: {
      src: '',
      alt: '',
    },
    mobileImage: {
      src: 'https://api.test.ndla.no/image-api/raw/3ECmPLmR.svg?width=600&ts=1686901280129',
      alt: '',
    },
    url: '#',
  },
];

const contentTypeResultsMenu = [contentTypeResults[0], contentTypeResults[1], contentTypeResults[2]];

export const topics = [
  {
    label: 'Lover og regler',
    id: '22661',
    tags: ['Forretningsdrift'],

    contentTypeResults: contentTypeResultsMenu,
  },
  {
    label: 'Organisering',
    id: '22664',
    tags: ['Forretningsdrift'],

    subTopics: [
      {
        label: 'Organisasjonskart og ansvarsfordeling',
        id: '22830',

        contentTypeResults: contentTypeResultsMenu,
      },
      {
        label: 'Omstilling og utvikling',
        id: '20978',

        contentTypeResults: contentTypeResultsMenu,
      },
    ],
  },
  {
    label: 'Økonomi',
    tags: ['Forretningsdrift'],

    id: '22665',
    subTopics: [
      {
        label: 'Prissetting',
        id: '22703',

        subTopics: [
          {
            label: 'Prissetting underemne',
            id: '22703',

            contentTypeResults: contentTypeResultsMenu,
          },
        ],
      },
      {
        label: 'Budsjett',
        id: '22718',

        contentTypeResults: contentTypeResultsMenu,
      },
      {
        label: 'Regnskap',
        id: '22716',

        contentTypeResults: contentTypeResultsMenu,
      },
      {
        label: 'Lønnsomhet',
        id: '22719',

        isAdditionalResource: true,
        isRestrictedResource: true,
        contentTypeResults: contentTypeResultsMenu,
      },
    ],
  },
  {
    label: 'Verdikjeden og bærekraftig utvikling',
    tags: ['Forretningsdrift'],

    id: '22666',
    isRestrictedResource: true,
    contentTypeResults: contentTypeResultsMenu,
  },
  {
    label: 'Sikkerhet',
    id: '22675',
    tags: ['Forretningsdrift'],

    isAdditionalResource: true,
    contentTypeResults: contentTypeResultsMenu,
  },
  {
    label: 'HMS',
    id: '22678',
    tags: ['Forretningsdrift'],

    contentTypeResults: contentTypeResultsMenu,
  },
];

export const subjectCategories = [
  {
    type: constants.subjectCategories.ACTIVE_SUBJECTS,
    visible: true,
    subjects: [
      { name: 'Samfunnsfag (Vg2)', id: 'common_subject_1', path: '#' },
      { name: 'Samfunnskunnskap', id: 'common_subject_2', path: '#' },
      { name: 'Engelsk (YF)', id: 'common_subject_3', path: '#' },
      { name: 'Engelsk (SF)', id: 'common_subject_4', path: '#' },
      { name: 'Norsk (YF Vg2)', id: 'common_subject_5', path: '#' },
      { name: 'Norsk (SF Vg1)', id: 'common_subject_6', path: '#' },
      { name: 'Norsk (SF Vg2)', id: 'common_subject_7', path: '#' },
      { name: 'Historie (SF Vg2)', id: 'common_subject_8', path: '#' },
      { name: 'Kroppsøving (Vg1)', id: 'common_subject_9', path: '#' },
      { name: 'Kroppsøving (Vg2)', id: 'common_subject_10', path: '#' },
      { name: 'Kroppsøving (Vg3)', id: 'common_subject_11', path: '#' },
      { name: 'Matematikk 2P', id: 'common_subject_12', path: '#' },
      { name: 'Matematikk 1P', id: 'common_subject_13', path: '#' },
      { name: 'Matematikk 2P-Y', id: 'common_subject_14', path: '#' },
      { name: 'Matematikk 1P-Y (HS)', id: 'common_subject_15', path: '#' },
      { name: 'Naturfag for påbygg', id: 'common_subject_16', path: '#' },
      { name: 'Matematikk 1P-Y (RM)', id: 'common_subject_17', path: '#' },
      { name: 'Religion og etikk', id: 'common_subject_18', path: '#' },
      { name: 'Matematikk 1P-Y (TP)', id: 'common_subject_19', path: '#' },
      {
        name: 'Sørsamisk som førstespråk (SF Vg2)',
        id: 'common_subject_20',
        path: '#',
      },
      {
        name: 'Sørsamisk som førstespråk (YF)',
        id: 'common_subject_21',
        path: '#',
      },
      { name: 'Matematikk 1P-Y (BA)', id: 'common_subject_22', path: '#' },
      { name: 'Matematikk 1P-Y (NA)', id: 'common_subject_23', path: '#' },
      { name: 'Matematikk 1P-Y (IM)', id: 'common_subject_24', path: '#' },
      { name: 'Matematikk 1P-Y (SR)', id: 'common_subject_25', path: '#' },
      { name: 'Matematikk 1P-Y (EL)', id: 'common_subject_26', path: '#' },
      { name: 'Matematikk 1P-Y (FD)', id: 'common_subject_27', path: '#' },
      { name: 'Matematikk 1T', id: 'common_subject_28', path: '#' },
      { name: 'Matematikk 1T-Y (HS)', id: 'common_subject_29', path: '#' },
      { name: 'Matematikk 1T-Y (RM)', id: 'common_subject_30', path: '#' },
      { name: 'Matematikk 1T-Y (TP)', id: 'common_subject_31', path: '#' },
      { name: 'Matematikk 1T-Y (BA)', id: 'common_subject_32', path: '#' },
      { name: 'Matematikk 1T-Y (NA)', id: 'common_subject_33', path: '#' },
      { name: 'Matematikk 1T-Y (IM)', id: 'common_subject_34', path: '#' },
      { name: 'Matematikk 1T-Y (SR)', id: 'common_subject_35', path: '#' },
      { name: 'Matematikk 1T-Y (EL)', id: 'common_subject_36', path: '#' },
      { name: 'Matematikk 1T-Y (FD)', id: 'common_subject_37', path: '#' },
      { name: 'Naturfag (HS)', id: 'common_subject_38', path: '#' },
      { name: 'Naturfag (RM)', id: 'common_subject_39', path: '#' },
      { name: 'Naturfag (TP)', id: 'common_subject_40', path: '#' },
      { name: 'Naturfag (BA)', id: 'common_subject_41', path: '#' },
      { name: 'Naturfag (NA)', id: 'common_subject_42', path: '#' },
      { name: 'Naturfag (IM)', id: 'common_subject_43', path: '#' },
      { name: 'Naturfag (SR)', id: 'common_subject_44', path: '#' },
      { name: 'Naturfag (EL)', id: 'common_subject_45', path: '#' },
      { name: 'Naturfag (FD)', id: 'common_subject_46', path: '#' },
      { name: 'Naturfag (DT)', id: 'common_subject_47', path: '#' },
      { name: 'Matematikk 1P-Y (DT)', id: 'common_subject_48', path: '#' },
      { name: 'Matematikk 1T-Y (DT)', id: 'common_subject_49', path: '#' },
      {
        name: 'Sørsamisk som førstespråk (SF Vg1)',
        id: 'common_subject_50',
        path: '#',
      },
      { name: 'Historie (SF Vg3)', id: 'common_subject_51', path: '#' },
      { name: 'Historie (PB Vg3)', id: 'common_subject_52', path: '#' },
      { name: 'Norsk (SF Vg3)', id: 'common_subject_53', path: '#' },
      { name: 'Norsk (PB Vg3)', id: 'common_subject_54', path: '#' },
      {
        name: 'Sørsamisk som førstespråk (SF Vg3)',
        id: 'common_subject_55',
        path: '#',
      },
      {
        name: 'Sørsamisk som førstespråk (PB)',
        id: 'common_subject_56',
        path: '#',
      },
      { name: 'Folkehelse og livsmestring', id: 'common_subject_57', path: '#' },
      { name: 'Demokrati og medborgerskap', id: 'common_subject_58', path: '#' },
      { name: 'Bærekraftig utvikling', id: 'common_subject_59', path: '#' },
      { name: 'Tverrfaglige tema', id: 'common_subject_60', path: '#' },
      { name: 'Verktøykassa', id: 'common_subject_61', path: '#' },
      {
        name: 'Sørsamisk som andrespråk, samisk 4 (YF)',
        id: 'common_subject_62',
        path: '#',
      },
      {
        name: 'Sørsamisk som andrespråk, samisk 4 (SF Vg1)',
        id: 'common_subject_63',
        path: '#',
      },
      { name: 'Naturfag (SF)', id: 'common_subject_64', path: '#' },
      { name: 'Sikkerhet (SS-SSS Vg2)', id: 'programme_subject_1', path: '#' },
      {
        name: 'Økonomi og administrasjon (SS-SSS Vg2)',
        id: 'programme_subject_2',
        path: '#',
      },
      {
        name: 'Markedsføring og salg (SS-SSS Vg2)',
        id: 'programme_subject_3',
        path: '#',
      },
      {
        name: 'Salg og markedsføring (SS-RLV Vg2)',
        id: 'programme_subject_4',
        path: '#',
      },
      {
        name: 'Etablering og drift (SS-RLV Vg2)',
        id: 'programme_subject_5',
        path: '#',
      },
      {
        name: 'Vertskapsrollen (SS-RLV Vg2)',
        id: 'programme_subject_6',
        path: '#',
      },
      {
        name: 'Bransjeteknikk (SS-TRL Vg2)',
        id: 'programme_subject_7',
        path: '#',
      },
      {
        name: 'Transport og logistikk (SS-TRL Vg2)',
        id: 'programme_subject_8',
        path: '#',
      },
      {
        name: 'Kosthold, ernæring og helse (RM Vg2)',
        id: 'programme_subject_9',
        path: '#',
      },
      {
        name: 'Råvarer og produksjon (RM Vg2)',
        id: 'programme_subject_10',
        path: '#',
      },
      {
        name: 'Servering, bransje og miljø (RM Vg2)',
        id: 'programme_subject_11',
        path: '#',
      },
      {
        name: 'Helsefremmende arbeid (HS-HA Vg2)',
        id: 'programme_subject_12',
        path: '#',
      },
      {
        name: 'Kommunikasjon og samhandling (HS-HA Vg2)',
        id: 'programme_subject_13',
        path: '#',
      },
      {
        name: 'Yrkesutøvelse (HS-HA Vg2)',
        id: 'programme_subject_14',
        path: '#',
      },
      {
        name: 'Helsefremmende arbeid (HS Vg1)',
        id: 'programme_subject_15',
        path: '#',
      },
      {
        name: 'Kommunikasjon og samhandling (HS Vg1)',
        id: 'programme_subject_16',
        path: '#',
      },
      {
        name: 'Yrkesliv i helse- og oppvekstfag (HS Vg1)',
        id: 'programme_subject_17',
        path: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (HS Vg1)',
        id: 'programme_subject_18',
        path: '#',
      },
      { name: 'FBIE Vg1 - programfag', id: 'programme_subject_19', path: '#' },
      { name: 'HDP Vg1 - programfag', id: 'programme_subject_22', path: '#' },
      {
        name: 'Elektroniske kretser og nettverk (EL Vg1)',
        id: 'programme_subject_25',
        path: '#',
      },
      {
        name: 'Energi- og styresystemer (EL Vg1)',
        id: 'programme_subject_26',
        path: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (EL Vg1)',
        id: 'programme_subject_27',
        path: '#',
      },
      {
        name: 'Forretningsdrift (SR Vg1)',
        id: 'programme_subject_28',
        path: '#',
      },
      {
        name: 'Kultur og samhandling (SR Vg1)',
        id: 'programme_subject_29',
        path: '#',
      },
      {
        name: 'Markedsføring og innovasjon (SR Vg1)',
        id: 'programme_subject_30',
        path: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (SR Vg1)',
        id: 'programme_subject_31',
        path: '#',
      },
      {
        name: 'Konseptutvikling og programmering (IM Vg1)',
        id: 'programme_subject_32',
        path: '#',
      },
      {
        name: 'Produksjon og historiefortelling (IM Vg1)',
        id: 'programme_subject_33',
        path: '#',
      },
      {
        name: 'Teknologiforståelse (IM Vg1)',
        id: 'programme_subject_34',
        path: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (IM Vg1)',
        id: 'programme_subject_35',
        path: '#',
      },
      {
        name: 'Naturbruk Vg1 - programfag',
        id: 'programme_subject_36',
        path: '#',
      },
      {
        name: 'Konstruksjons- og styringsteknikk (TP Vg1)',
        id: 'programme_subject_39',
        path: '#',
      },
      {
        name: 'Produksjon og tjenester (TP Vg1)',
        id: 'programme_subject_40',
        path: '#',
      },
      {
        name: 'Produktivitet- og kvalitetsstyring (TP Vg1)',
        id: 'programme_subject_41',
        path: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (TP Vg1)',
        id: 'programme_subject_42',
        path: '#',
      },
      {
        name: 'Arbeidsmiljø og dokumentasjon (BA Vg1)',
        id: 'programme_subject_43',
        path: '#',
      },
      {
        name: 'Praktisk yrkesutøvelse (BA Vg1)',
        id: 'programme_subject_44',
        path: '#',
      },
      {
        name: 'Bransje og arbeidsliv (RM Vg1)',
        id: 'programme_subject_46',
        path: '#',
      },
      {
        name: 'Råvare, produksjon og kvalitet (RM Vg1)',
        id: 'programme_subject_47',
        path: '#',
      },
      {
        name: 'Helsefremmende arbeid (HS-BU Vg2)',
        id: 'programme_subject_49',
        path: '#',
      },
      {
        name: 'Kommunikasjon og samhandling (HS-BU Vg2)',
        id: 'programme_subject_50',
        path: '#',
      },
      {
        name: 'Yrkesutøvelse (HS-BU Vg2)',
        id: 'programme_subject_51',
        path: '#',
      },
      { name: 'Brønnteknikk', id: 'programme_subject_52', path: '#' },
      {
        name: 'Komplettering, produksjon og brønnvedlikehold (TP Vg2)',
        id: 'programme_subject_53',
        path: '#',
      },
      {
        name: 'HMS og kvalitet (TP Vg2)',
        id: 'programme_subject_54',
        path: '#',
      },
      {
        name: 'Virksomhetsstøtte (SS-ISF Vg2)',
        id: 'programme_subject_55',
        path: '#',
      },
      {
        name: 'Bruker- og driftsstøtte (SS-ISF Vg2)',
        id: 'programme_subject_56',
        path: '#',
      },
      {
        name: 'Drift og vedlikehold (SS-ISF Vg2)',
        id: 'programme_subject_57',
        path: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (HS-BU Vg2)',
        id: 'programme_subject_58',
        path: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (HS-HA Vg2)',
        id: 'programme_subject_59',
        path: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (SR-RE Vg2)',
        id: 'programme_subject_60',
        path: '#',
      },
      {
        name: 'Markedsføring og ledelse 1',
        id: 'programme_subject_61',
        path: '#',
      },
      {
        name: 'Leting og boring (TP Vg2)',
        id: 'programme_subject_62',
        path: '#',
      },
      { name: 'Biologi 1', id: 'study_specialization_subject_1', path: '#' },
      { name: 'Kinesisk 1', id: 'study_specialization_subject_2', path: '#' },
      { name: 'Kinesisk 2', id: 'study_specialization_subject_3', path: '#' },
      {
        name: 'Engelskspråklig litteratur og kultur (SF Vg3)',
        id: 'study_specialization_subject_4',
        path: '#',
      },
      {
        name: 'Internasjonal engelsk (SF Vg2)',
        id: 'study_specialization_subject_5',
        path: '#',
      },
      {
        name: 'Samfunnsfaglig engelsk (SF VG3)',
        id: 'study_specialization_subject_6',
        path: '#',
      },
      { name: 'Tysk 1', id: 'study_specialization_subject_7', path: '#' },
      { name: 'Tysk 2', id: 'study_specialization_subject_8', path: '#' },
      {
        name: 'Kommunikasjon og kultur 1',
        id: 'study_specialization_subject_9',
        path: '#',
      },
      {
        name: 'Kommunikasjon og kultur 2',
        id: 'study_specialization_subject_10',
        path: '#',
      },
      {
        name: 'Kommunikasjon og kultur 3',
        id: 'study_specialization_subject_11',
        path: '#',
      },
      {
        name: 'Sosiologi og sosialantropologi (SF VG2)',
        id: 'study_specialization_subject_13',
        path: '#',
      },
      {
        name: 'Medie- og informasjonskunnskap 1 og 2',
        id: 'study_specialization_subject_14',
        path: '#',
      },
      {
        name: 'Matematikk R1',
        id: 'study_specialization_subject_16',
        path: '#',
      },
      {
        name: 'Matematikk R2',
        id: 'study_specialization_subject_17',
        path: '#',
      },
      {
        name: 'Matematikk S1',
        id: 'study_specialization_subject_18',
        path: '#',
      },
      {
        name: 'Matematikk S2',
        id: 'study_specialization_subject_19',
        path: '#',
      },
      {
        name: 'Medieuttrykk Vg1',
        id: 'study_specialization_subject_20',
        path: '#',
      },
      {
        name: 'Mediesamfunnet Vg1',
        id: 'study_specialization_subject_21',
        path: '#',
      },
      {
        name: 'Medieuttrykk og mediesamfunnet Vg2 og Vg3',
        id: 'study_specialization_subject_22',
        path: '#',
      },
    ],
  },
  {
    type: constants.subjectCategories.ARCHIVE_SUBJECTS,
    visible: true,
    subjects: [
      { name: 'Matematikk 1P (LK06)', id: 'archived_subject_1', path: '#' },
      { name: 'Matematikk 1P-Y (LK06)', id: 'archived_subject_2', path: '#' },
      { name: 'Matematikk 1T-Y (LK06)', id: 'archived_subject_3', path: '#' },
      {
        name: 'Sørsamisk som førstespråk SF Vg1 (LK06)',
        id: 'archived_subject_4',
        path: '#',
      },
      { name: 'Matematikk 1T (LK06)', id: 'archived_subject_5', path: '#' },
      { name: 'Naturfag SF Vg1 (LK06)', id: 'archived_subject_6', path: '#' },
      { name: 'Naturfag YF Vg1 (LK06)', id: 'archived_subject_7', path: '#' },
      { name: 'Engelsk SF Vg1 (LK06)', id: 'archived_subject_8', path: '#' },
    ],
  },
  {
    type: constants.subjectCategories.BETA_SUBJECTS,
    visible: true,
    subjects: [
      { name: 'Informasjonsteknologi Vg2 - 2021 BETA', id: 'beta_subject_1', path: '#' },
      { name: 'Yrkesfaglig fordypning (HS-HEA Vg2) - 2021 BETA', id: 'beta_subject_2', path: '#' },
      { name: 'Helsefremmende arbeid (HS-HEA Vg2) - 2021 BETA', id: 'beta_subject_3', path: '#' },
      {
        name: 'Kommunikasjon og samhandling (HS-HEA Vg2) - 2021 BETA',
        id: 'beta_subject_4',
        path: '#',
      },
      {
        name: 'Yrkesliv i helsearbeiderfag (HS-HEA Vg2) - 2021 BETA',
        id: 'beta_subject_5',
        path: '#',
      },
      { name: 'Yrkesfaglig fordypning (HS-BUA Vg2) - 2021 BETA', id: 'beta_subject_6', path: '#' },
      { name: 'Pedagogisk arbeid (HS-BUA Vg2) - 2021 BETA', id: 'beta_subject_7', path: '#' },
      {
        name: 'Kommunikasjon og samhandling (HS-BUA Vg2) - 2021 BETA',
        id: 'beta_subject_8',
        path: '#',
      },
      {
        name: 'Yrkesliv i barne- og ungdomsarbeiderfag (HS-BUA Vg2) - 2021 BETA',
        id: 'beta_subject_9',
        path: '#',
      },
      { name: 'Yrkesfaglig fordypning (RM-KOS Vg2) - 2021 BETA', id: 'beta_subject_10', path: '#' },
      {
        name: 'Råvare, produksjon, salg og service (RM-KOS Vg2) - 2021 BETA',
        id: 'beta_subject_11',
        path: '#',
      },
      { name: 'Bransje og arbeidsliv (RM-KOS Vg2) - 2021 BETA', id: 'beta_subject_12', path: '#' },
      { name: 'Medie- og informasjonskunnskap MIK1 - 2021 BETA', id: 'beta_subject_13', path: '#' },
      { name: 'Historie Vg2 - 2021 BETA', id: 'beta_subject_14', path: '#' },
      { name: 'Sosiologi og sosialantropologi - 2021 BETA', id: 'beta_subject_15', path: '#' },
      { name: 'Markedsføring og ledelse 1 - 2021 BETA', id: 'beta_subject_16', path: '#' },
      { name: 'Yrkesfaglig fordypning (SR-SSH Vg2) - 2021 BETA', id: 'beta_subject_17', path: '#' },
      { name: 'Sikkerhet (SR-SSH Vg2) - 2021 BETA', id: 'beta_subject_18', path: '#' },
      {
        name: 'Administrasjon og bærekraftig drift (SR-SSH Vg2) - 2021 BETA',
        id: 'beta_subject_19',
        path: '#',
      },
      {
        name: 'Kommunikasjon og yrkesutøvelse (SR-SSH Vg2) - 2021 BETA',
        id: 'beta_subject_20',
        path: '#',
      },
      { name: 'Yrkesfaglig fordypning (RS-SRL Vg2) - 2021 BETA', id: 'beta_subject_21', path: '#' },
      { name: 'Forretningsdrift (RS-SRL Vg2) - 2021 BETA', id: 'beta_subject_22', path: '#' },
      {
        name: 'Innovasjon og markedsføring (RS-SRL Vg2) - 2021 BETA',
        id: 'beta_subject_23',
        path: '#',
      },
      { name: 'Kultur og kommunikasjon (RS-SRL Vg2) - 2021 BETA', id: 'beta_subject_24', path: '#' },
      { name: 'Norsk SF Vg2 - 2021 BETA', id: 'beta_subject_25', path: '#' },
      { name: 'Norsk YF Vg2 - 2021 BETA', id: 'beta_subject_26', path: '#' },
      { name: 'Matematikk 2P -  2021 BETA', id: 'beta_subject_27', path: '#' },
      { name: 'Matematikk R1 - 2021 BETA', id: 'beta_subject_28', path: '#' },
      { name: 'Matematikk S1 - 2021 BETA', id: 'beta_subject_29', path: '#' },
      { name: 'Kommunikasjon og kultur - 2021 BETA', id: 'beta_subject_30', path: '#' },
      { name: 'Biologi 1 - 2021 BETA', id: 'beta_subject_31', path: '#' },
    ],
  },
  {
    type: constants.subjectCategories.OTHER,
    visible: true,
    subjects: [
      { name: 'NDLA film', id: 'other_subject_1', path: '#' },
      { name: 'Verktøykassa - for elev', id: 'other_subject_2', path: '#' },
      { name: 'Verktøykassa - for lærer', id: 'other_subject_3', path: '#' },
      { name: 'Tverrfaglige tema', id: 'other_subject_4', path: '#' },
    ],
  },
];

export const competenceGoals = [{ name: 'KM1196', id: 'KM1196' }];

export const subjectBreadcrumb = [
  {
    label: 'Forretningsdrift',
    id: 2,
    typename: 'Subject',
  },
];
