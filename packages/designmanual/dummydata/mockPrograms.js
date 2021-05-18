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
          name: null,
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
          name: 'fellesfag',
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

export const topics = [
  {
    label: 'Lover og regler',
    id: 22661,
    tags: ['Forretningsdrift'],
    url: '#',
  },
  {
    label: 'Organisering',
    id: 22664,
    tags: ['Forretningsdrift'],
    url: '#',
    subTopics: [
      {
        label: 'Organisasjonskart og ansvarsfordeling',
        id: 22830,
        url: '#',
      },
      {
        label: 'Omstilling og utvikling',
        id: 20978,
        url: '#',
      },
    ],
  },
  {
    label: 'Økonomi',
    tags: ['Forretningsdrift'],
    url: '#',
    id: 22665,
    subTopics: [
      {
        label: 'Prissetting',
        id: 22703,
        url: '#',
        subTopics: [
          {
            label: 'Prissetting underemne',
            id: 22703,
            url: '#',
          },
        ],
      },
      {
        label: 'Budsjett',
        id: 22718,
        url: '#',
      },
      {
        label: 'Regnskap',
        id: 22716,
        url: '#',
      },
      {
        label: 'Lønnsomhet',
        id: 22719,
        url: '#',
        isAdditionalResource: true,
      },
    ],
  },
  {
    label: 'Verdikjeden og bærekraftig utvikling',
    tags: ['Forretningsdrift'],
    url: '#',
    id: 22666,
  },
  {
    label: 'Sikkerhet',
    id: 22675,
    tags: ['Forretningsdrift'],
    url: '#',
    isAdditionalResource: true,
  },
  {
    label: 'HMS',
    id: 22678,
    tags: ['Forretningsdrift'],
    url: '#',
  },
];

export const subjectCategories = [
  {
    name: 'Fellesfag',
    subjects: [
      { name: 'Samfunnsfag (Vg2)', id: 'common_subject_1', url: '#' },
      { name: 'Samfunnskunnskap', id: 'common_subject_2', url: '#' },
      { name: 'Engelsk (YF)', id: 'common_subject_3', url: '#' },
      { name: 'Engelsk (SF)', id: 'common_subject_4', url: '#' },
      { name: 'Norsk (YF Vg2)', id: 'common_subject_5', url: '#' },
      { name: 'Norsk (SF Vg1)', id: 'common_subject_6', url: '#' },
      { name: 'Norsk (SF Vg2)', id: 'common_subject_7', url: '#' },
      { name: 'Historie (SF Vg2)', id: 'common_subject_8', url: '#' },
      { name: 'Kroppsøving (Vg1)', id: 'common_subject_9', url: '#' },
      { name: 'Kroppsøving (Vg2)', id: 'common_subject_10', url: '#' },
      { name: 'Kroppsøving (Vg3)', id: 'common_subject_11', url: '#' },
      { name: 'Matematikk 2P', id: 'common_subject_12', url: '#' },
      { name: 'Matematikk 1P', id: 'common_subject_13', url: '#' },
      { name: 'Matematikk 2P-Y', id: 'common_subject_14', url: '#' },
      { name: 'Matematikk 1P-Y (HS)', id: 'common_subject_15', url: '#' },
      { name: 'Naturfag for påbygg', id: 'common_subject_16', url: '#' },
      { name: 'Matematikk 1P-Y (RM)', id: 'common_subject_17', url: '#' },
      { name: 'Religion og etikk', id: 'common_subject_18', url: '#' },
      { name: 'Matematikk 1P-Y (TP)', id: 'common_subject_19', url: '#' },
      {
        name: 'Sørsamisk som førstespråk (SF Vg2)',
        id: 'common_subject_20',
        url: '#',
      },
      {
        name: 'Sørsamisk som førstespråk (YF)',
        id: 'common_subject_21',
        url: '#',
      },
      { name: 'Matematikk 1P-Y (BA)', id: 'common_subject_22', url: '#' },
      { name: 'Matematikk 1P-Y (NA)', id: 'common_subject_23', url: '#' },
      { name: 'Matematikk 1P-Y (IM)', id: 'common_subject_24', url: '#' },
      { name: 'Matematikk 1P-Y (SR)', id: 'common_subject_25', url: '#' },
      { name: 'Matematikk 1P-Y (EL)', id: 'common_subject_26', url: '#' },
      { name: 'Matematikk 1P-Y (FD)', id: 'common_subject_27', url: '#' },
      { name: 'Matematikk 1T', id: 'common_subject_28', url: '#' },
      { name: 'Matematikk 1T-Y (HS)', id: 'common_subject_29', url: '#' },
      { name: 'Matematikk 1T-Y (RM)', id: 'common_subject_30', url: '#' },
      { name: 'Matematikk 1T-Y (TP)', id: 'common_subject_31', url: '#' },
      { name: 'Matematikk 1T-Y (BA)', id: 'common_subject_32', url: '#' },
      { name: 'Matematikk 1T-Y (NA)', id: 'common_subject_33', url: '#' },
      { name: 'Matematikk 1T-Y (IM)', id: 'common_subject_34', url: '#' },
      { name: 'Matematikk 1T-Y (SR)', id: 'common_subject_35', url: '#' },
      { name: 'Matematikk 1T-Y (EL)', id: 'common_subject_36', url: '#' },
      { name: 'Matematikk 1T-Y (FD)', id: 'common_subject_37', url: '#' },
      { name: 'Naturfag (HS)', id: 'common_subject_38', url: '#' },
      { name: 'Naturfag (RM)', id: 'common_subject_39', url: '#' },
      { name: 'Naturfag (TP)', id: 'common_subject_40', url: '#' },
      { name: 'Naturfag (BA)', id: 'common_subject_41', url: '#' },
      { name: 'Naturfag (NA)', id: 'common_subject_42', url: '#' },
      { name: 'Naturfag (IM)', id: 'common_subject_43', url: '#' },
      { name: 'Naturfag (SR)', id: 'common_subject_44', url: '#' },
      { name: 'Naturfag (EL)', id: 'common_subject_45', url: '#' },
      { name: 'Naturfag (FD)', id: 'common_subject_46', url: '#' },
      { name: 'Naturfag (DT)', id: 'common_subject_47', url: '#' },
      { name: 'Matematikk 1P-Y (DT)', id: 'common_subject_48', url: '#' },
      { name: 'Matematikk 1T-Y (DT)', id: 'common_subject_49', url: '#' },
      {
        name: 'Sørsamisk som førstespråk (SF Vg1)',
        id: 'common_subject_50',
        url: '#',
      },
      { name: 'Historie (SF Vg3)', id: 'common_subject_51', url: '#' },
      { name: 'Historie (PB Vg3)', id: 'common_subject_52', url: '#' },
      { name: 'Norsk (SF Vg3)', id: 'common_subject_53', url: '#' },
      { name: 'Norsk (PB Vg3)', id: 'common_subject_54', url: '#' },
      {
        name: 'Sørsamisk som førstespråk (SF Vg3)',
        id: 'common_subject_55',
        url: '#',
      },
      {
        name: 'Sørsamisk som førstespråk (PB)',
        id: 'common_subject_56',
        url: '#',
      },
      { name: 'Folkehelse og livsmestring', id: 'common_subject_57', url: '#' },
      { name: 'Demokrati og medborgerskap', id: 'common_subject_58', url: '#' },
      { name: 'Bærekraftig utvikling', id: 'common_subject_59', url: '#' },
      { name: 'Tverrfaglige tema', id: 'common_subject_60', url: '#' },
      { name: 'Verktøykassa', id: 'common_subject_61', url: '#' },
      {
        name: 'Sørsamisk som andrespråk, samisk 4 (YF)',
        id: 'common_subject_62',
        url: '#',
      },
      {
        name: 'Sørsamisk som andrespråk, samisk 4 (SF Vg1)',
        id: 'common_subject_63',
        url: '#',
      },
      { name: 'Naturfag (SF)', id: 'common_subject_64', url: '#' },
    ],
  },
  {
    name: 'Yrkesfag',
    subjects: [
      { name: 'Sikkerhet (SS-SSS Vg2)', id: 'programme_subject_1', url: '#' },
      {
        name: 'Økonomi og administrasjon (SS-SSS Vg2)',
        id: 'programme_subject_2',
        url: '#',
      },
      {
        name: 'Markedsføring og salg (SS-SSS Vg2)',
        id: 'programme_subject_3',
        url: '#',
      },
      {
        name: 'Salg og markedsføring (SS-RLV Vg2)',
        id: 'programme_subject_4',
        url: '#',
      },
      {
        name: 'Etablering og drift (SS-RLV Vg2)',
        id: 'programme_subject_5',
        url: '#',
      },
      {
        name: 'Vertskapsrollen (SS-RLV Vg2)',
        id: 'programme_subject_6',
        url: '#',
      },
      {
        name: 'Bransjeteknikk (SS-TRL Vg2)',
        id: 'programme_subject_7',
        url: '#',
      },
      {
        name: 'Transport og logistikk (SS-TRL Vg2)',
        id: 'programme_subject_8',
        url: '#',
      },
      {
        name: 'Kosthold, ernæring og helse (RM Vg2)',
        id: 'programme_subject_9',
        url: '#',
      },
      {
        name: 'Råvarer og produksjon (RM Vg2)',
        id: 'programme_subject_10',
        url: '#',
      },
      {
        name: 'Servering, bransje og miljø (RM Vg2)',
        id: 'programme_subject_11',
        url: '#',
      },
      {
        name: 'Helsefremmende arbeid (HS-HA Vg2)',
        id: 'programme_subject_12',
        url: '#',
      },
      {
        name: 'Kommunikasjon og samhandling (HS-HA Vg2)',
        id: 'programme_subject_13',
        url: '#',
      },
      {
        name: 'Yrkesutøvelse (HS-HA Vg2)',
        id: 'programme_subject_14',
        url: '#',
      },
      {
        name: 'Helsefremmende arbeid (HS Vg1)',
        id: 'programme_subject_15',
        url: '#',
      },
      {
        name: 'Kommunikasjon og samhandling (HS Vg1)',
        id: 'programme_subject_16',
        url: '#',
      },
      {
        name: 'Yrkesliv i helse- og oppvekstfag (HS Vg1)',
        id: 'programme_subject_17',
        url: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (HS Vg1)',
        id: 'programme_subject_18',
        url: '#',
      },
      { name: 'FBIE Vg1 - programfag', id: 'programme_subject_19', url: '#' },
      { name: 'HDP Vg1 - programfag', id: 'programme_subject_22', url: '#' },
      {
        name: 'Elektroniske kretser og nettverk (EL Vg1)',
        id: 'programme_subject_25',
        url: '#',
      },
      {
        name: 'Energi- og styresystemer (EL Vg1)',
        id: 'programme_subject_26',
        url: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (EL Vg1)',
        id: 'programme_subject_27',
        url: '#',
      },
      {
        name: 'Forretningsdrift (SR Vg1)',
        id: 'programme_subject_28',
        url: '#',
      },
      {
        name: 'Kultur og samhandling (SR Vg1)',
        id: 'programme_subject_29',
        url: '#',
      },
      {
        name: 'Markedsføring og innovasjon (SR Vg1)',
        id: 'programme_subject_30',
        url: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (SR Vg1)',
        id: 'programme_subject_31',
        url: '#',
      },
      {
        name: 'Konseptutvikling og programmering (IM Vg1)',
        id: 'programme_subject_32',
        url: '#',
      },
      {
        name: 'Produksjon og historiefortelling (IM Vg1)',
        id: 'programme_subject_33',
        url: '#',
      },
      {
        name: 'Teknologiforståelse (IM Vg1)',
        id: 'programme_subject_34',
        url: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (IM Vg1)',
        id: 'programme_subject_35',
        url: '#',
      },
      {
        name: 'Naturbruk Vg1 - programfag',
        id: 'programme_subject_36',
        url: '#',
      },
      {
        name: 'Konstruksjons- og styringsteknikk (TP Vg1)',
        id: 'programme_subject_39',
        url: '#',
      },
      {
        name: 'Produksjon og tjenester (TP Vg1)',
        id: 'programme_subject_40',
        url: '#',
      },
      {
        name: 'Produktivitet- og kvalitetsstyring (TP Vg1)',
        id: 'programme_subject_41',
        url: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (TP Vg1)',
        id: 'programme_subject_42',
        url: '#',
      },
      {
        name: 'Arbeidsmiljø og dokumentasjon (BA Vg1)',
        id: 'programme_subject_43',
        url: '#',
      },
      {
        name: 'Praktisk yrkesutøvelse (BA Vg1)',
        id: 'programme_subject_44',
        url: '#',
      },
      {
        name: 'Bransje og arbeidsliv (RM Vg1)',
        id: 'programme_subject_46',
        url: '#',
      },
      {
        name: 'Råvare, produksjon og kvalitet (RM Vg1)',
        id: 'programme_subject_47',
        url: '#',
      },
      {
        name: 'Helsefremmende arbeid (HS-BU Vg2)',
        id: 'programme_subject_49',
        url: '#',
      },
      {
        name: 'Kommunikasjon og samhandling (HS-BU Vg2)',
        id: 'programme_subject_50',
        url: '#',
      },
      {
        name: 'Yrkesutøvelse (HS-BU Vg2)',
        id: 'programme_subject_51',
        url: '#',
      },
      { name: 'Brønnteknikk', id: 'programme_subject_52', url: '#' },
      {
        name: 'Komplettering, produksjon og brønnvedlikehold (TP Vg2)',
        id: 'programme_subject_53',
        url: '#',
      },
      {
        name: 'HMS og kvalitet (TP Vg2)',
        id: 'programme_subject_54',
        url: '#',
      },
      {
        name: 'Virksomhetsstøtte (SS-ISF Vg2)',
        id: 'programme_subject_55',
        url: '#',
      },
      {
        name: 'Bruker- og driftsstøtte (SS-ISF Vg2)',
        id: 'programme_subject_56',
        url: '#',
      },
      {
        name: 'Drift og vedlikehold (SS-ISF Vg2)',
        id: 'programme_subject_57',
        url: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (HS-BU Vg2)',
        id: 'programme_subject_58',
        url: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (HS-HA Vg2)',
        id: 'programme_subject_59',
        url: '#',
      },
      {
        name: 'Yrkesfaglig fordypning (SR-RE Vg2)',
        id: 'programme_subject_60',
        url: '#',
      },
      {
        name: 'Markedsføring og ledelse 1',
        id: 'programme_subject_61',
        url: '#',
      },
      {
        name: 'Leting og boring (TP Vg2)',
        id: 'programme_subject_62',
        url: '#',
      },
    ],
  },
  {
    name: 'Programfag SF',
    subjects: [
      { name: 'Biologi 1', id: 'study_specialization_subject_1', url: '#' },
      { name: 'Kinesisk 1', id: 'study_specialization_subject_2', url: '#' },
      { name: 'Kinesisk 2', id: 'study_specialization_subject_3', url: '#' },
      {
        name: 'Engelskspråklig litteratur og kultur (SF Vg3)',
        id: 'study_specialization_subject_4',
        url: '#',
      },
      {
        name: 'Internasjonal engelsk (SF Vg2)',
        id: 'study_specialization_subject_5',
        url: '#',
      },
      {
        name: 'Samfunnsfaglig engelsk (SF VG3)',
        id: 'study_specialization_subject_6',
        url: '#',
      },
      { name: 'Tysk 1', id: 'study_specialization_subject_7', url: '#' },
      { name: 'Tysk 2', id: 'study_specialization_subject_8', url: '#' },
      {
        name: 'Kommunikasjon og kultur 1',
        id: 'study_specialization_subject_9',
        url: '#',
      },
      {
        name: 'Kommunikasjon og kultur 2',
        id: 'study_specialization_subject_10',
        url: '#',
      },
      {
        name: 'Kommunikasjon og kultur 3',
        id: 'study_specialization_subject_11',
        url: '#',
      },
      {
        name: 'Sosiologi og sosialantropologi (SF VG2)',
        id: 'study_specialization_subject_13',
        url: '#',
      },
      {
        name: 'Medie- og informasjonskunnskap 1 og 2',
        id: 'study_specialization_subject_14',
        url: '#',
      },
      {
        name: 'Matematikk R1',
        id: 'study_specialization_subject_16',
        url: '#',
      },
      {
        name: 'Matematikk R2',
        id: 'study_specialization_subject_17',
        url: '#',
      },
      {
        name: 'Matematikk S1',
        id: 'study_specialization_subject_18',
        url: '#',
      },
      {
        name: 'Matematikk S2',
        id: 'study_specialization_subject_19',
        url: '#',
      },
      {
        name: 'Medieuttrykk Vg1',
        id: 'study_specialization_subject_20',
        url: '#',
      },
      {
        name: 'Mediesamfunnet Vg1',
        id: 'study_specialization_subject_21',
        url: '#',
      },
      {
        name: 'Medieuttrykk og mediesamfunnet Vg2 og Vg3',
        id: 'study_specialization_subject_22',
        url: '#',
      },
    ],
  },
  {
    name: 'LK06 fag',
    subjects: [
      { name: 'Matematikk 1P (LK06)', id: 'archived_subject_1', url: '#' },
      { name: 'Matematikk 1P-Y (LK06)', id: 'archived_subject_2', url: '#' },
      { name: 'Matematikk 1T-Y (LK06)', id: 'archived_subject_3', url: '#' },
      {
        name: 'Sørsamisk som førstespråk SF Vg1 (LK06)',
        id: 'archived_subject_4',
        url: '#',
      },
      { name: 'Matematikk 1T (LK06)', id: 'archived_subject_5', url: '#' },
      { name: 'Naturfag SF Vg1 (LK06)', id: 'archived_subject_6', url: '#' },
      { name: 'Naturfag YF Vg1 (LK06)', id: 'archived_subject_7', url: '#' },
      { name: 'Engelsk SF Vg1 (LK06)', id: 'archived_subject_8', url: '#' },
    ],
  },
  {
    name: 'Betafag',
    subjects: [
      { name: 'Informasjonsteknologi Vg2 - 2021 BETA', id: 'beta_subject_1', url: '#' },
      { name: 'Yrkesfaglig fordypning (HS-HEA Vg2) - 2021 BETA', id: 'beta_subject_2', url: '#' },
      { name: 'Helsefremmende arbeid (HS-HEA Vg2) - 2021 BETA', id: 'beta_subject_3', url: '#' },
      {
        name: 'Kommunikasjon og samhandling (HS-HEA Vg2) - 2021 BETA',
        id: 'beta_subject_4',
        url: '#',
      },
      {
        name: 'Yrkesliv i helsearbeiderfag (HS-HEA Vg2) - 2021 BETA',
        id: 'beta_subject_5',
        url: '#',
      },
      { name: 'Yrkesfaglig fordypning (HS-BUA Vg2) - 2021 BETA', id: 'beta_subject_6', url: '#' },
      { name: 'Pedagogisk arbeid (HS-BUA Vg2) - 2021 BETA', id: 'beta_subject_7', url: '#' },
      {
        name: 'Kommunikasjon og samhandling (HS-BUA Vg2) - 2021 BETA',
        id: 'beta_subject_8',
        url: '#',
      },
      {
        name: 'Yrkesliv i barne- og ungdomsarbeiderfag (HS-BUA Vg2) - 2021 BETA',
        id: 'beta_subject_9',
        url: '#',
      },
      { name: 'Yrkesfaglig fordypning (RM-KOS Vg2) - 2021 BETA', id: 'beta_subject_10', url: '#' },
      {
        name: 'Råvare, produksjon, salg og service (RM-KOS Vg2) - 2021 BETA',
        id: 'beta_subject_11',
        url: '#',
      },
      { name: 'Bransje og arbeidsliv (RM-KOS Vg2) - 2021 BETA', id: 'beta_subject_12', url: '#' },
      { name: 'Medie- og informasjonskunnskap MIK1 - 2021 BETA', id: 'beta_subject_13', url: '#' },
      { name: 'Historie Vg2 - 2021 BETA', id: 'beta_subject_14', url: '#' },
      { name: 'Sosiologi og sosialantropologi - 2021 BETA', id: 'beta_subject_15', url: '#' },
      { name: 'Markedsføring og ledelse 1 - 2021 BETA', id: 'beta_subject_16', url: '#' },
      { name: 'Yrkesfaglig fordypning (SR-SSH Vg2) - 2021 BETA', id: 'beta_subject_17', url: '#' },
      { name: 'Sikkerhet (SR-SSH Vg2) - 2021 BETA', id: 'beta_subject_18', url: '#' },
      {
        name: 'Administrasjon og bærekraftig drift (SR-SSH Vg2) - 2021 BETA',
        id: 'beta_subject_19',
        url: '#',
      },
      {
        name: 'Kommunikasjon og yrkesutøvelse (SR-SSH Vg2) - 2021 BETA',
        id: 'beta_subject_20',
        url: '#',
      },
      { name: 'Yrkesfaglig fordypning (RS-SRL Vg2) - 2021 BETA', id: 'beta_subject_21', url: '#' },
      { name: 'Forretningsdrift (RS-SRL Vg2) - 2021 BETA', id: 'beta_subject_22', url: '#' },
      {
        name: 'Innovasjon og markedsføring (RS-SRL Vg2) - 2021 BETA',
        id: 'beta_subject_23',
        url: '#',
      },
      { name: 'Kultur og kommunikasjon (RS-SRL Vg2) - 2021 BETA', id: 'beta_subject_24', url: '#' },
      { name: 'Norsk SF Vg2 - 2021 BETA', id: 'beta_subject_25', url: '#' },
      { name: 'Norsk YF Vg2 - 2021 BETA', id: 'beta_subject_26', url: '#' },
      { name: 'Matematikk 2P -  2021 BETA', id: 'beta_subject_27', url: '#' },
      { name: 'Matematikk R1 - 2021 BETA', id: 'beta_subject_28', url: '#' },
      { name: 'Matematikk S1 - 2021 BETA', id: 'beta_subject_29', url: '#' },
      { name: 'Kommunikasjon og kultur - 2021 BETA', id: 'beta_subject_30', url: '#' },
      { name: 'Biologi 1 - 2021 BETA', id: 'beta_subject_31', url: '#' },
    ],
  },
];

export const subjectBreadcrumb = [
  {
    label: 'Salg, service og reiseliv (Service og samferdsel)',
    id: 11,
    url: '#',
    typename: 'Subjecttype',
  },
  {
    label: 'Forretningsdrift',
    id: 2,
    url: '#',
    typename: 'Subject',
  },
];
