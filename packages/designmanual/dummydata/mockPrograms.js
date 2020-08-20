import { SubjectMaterialBadge } from '@ndla/ui';
import React from 'react';

export const programmes = [
  {
    label: 'Bygg- og anleggsteknikk',
    url: '#',
  },
  {
    label: 'Elektro og datateknologi',
    url: '#',
  },
  {
    label: 'Frisør, blomster, interiør og eksponeringsdesign',
    url: '#',
  },
  { label: 'Helse- og oppvekstfag', url: '#' },
  {
    label: 'Håndverk, design og produktutvikling',
    url: '#',
  },
  { label: 'Idrett', url: '#' },
  { label: 'Informasjonsteknologi og medieproduksjon', url: '#' },
  { label: 'Kunst, design og arkitektur', url: '#' },
  { label: 'Medier og kommunikasjon', url: '#' },
  { label: 'Musikk, dans og drama', url: '#' },
  { label: 'Naturbruk', url: '#' },
  { label: 'Påbygg', url: '#' },
  { label: 'Restaurant- og matfag', url: '#' },
  {
    label: 'Salg, service og reiseliv (Service og samferdsel)',
    url: '#',
  },
  { label: 'Studiespesialisering', url: '#' },
  { label: 'Teknologi- og industrifag', url: '#' },
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
      { name: 'Engelsk (SF)', url: '#' },
      { name: 'Engelsk (YF)', url: '#' },
      { name: 'Historie (Vg2 og Vg3)', url: '#' },
      { name: 'Kroppsøving (Vg1)', url: '#' },
      { name: 'Kroppsøving (Vg2)', url: '#' },
      { name: 'Kroppsøving (Vg3)', url: '#' },
      { name: 'Matematikk (1T)', url: '#' },
      { name: 'Matematikk 1P', url: '#' },
      { name: 'Matematikk 1P-Y (BA)', url: '#' },
      { name: 'Matematikk 1P-Y (DT)', url: '#' },
      { name: 'Matematikk 1P-Y (EL)', url: '#' },
      { name: 'Matematikk 1P-Y (FD)', url: '#' },
      { name: 'Matematikk 1P-Y (HS)', url: '#' },
      { name: 'Matematikk 1P-Y (IM)', url: '#' },
      { name: 'Matematikk 1P-Y (NA)', url: '#' },
      { name: 'Matematikk 1P-Y (RM)', url: '#' },
      { name: 'Matematikk 1P-Y (SR)', url: '#' },
      { name: 'Matematikk 1P-Y (TP)', url: '#' },
      { name: 'Matematikk 1T-Y (BA)', url: '#' },
      { name: 'Matematikk 1T-Y (DT)', url: '#' },
      { name: 'Matematikk 1T-Y (EL)', url: '#' },
      { name: 'Matematikk 1T-Y (FD)', url: '#' },
      { name: 'Matematikk 1T-Y (HS)', url: '#' },
      { name: 'Matematikk 1T-Y (IM)', url: '#' },
      { name: 'Matematikk 1T-Y (NA)', url: '#' },
      { name: 'Matematikk 1T-Y (RM)', url: '#' },
      { name: 'Matematikk 1T-Y (SR)', url: '#' },
      { name: 'Matematikk 1T-Y (TP)', url: '#' },
      { name: 'Matematikk 2P', url: '#' },
      { name: 'Matematikk 2P-Y', url: '#' },
      { name: 'Naturfag (BA)', url: '#' },
      { name: 'Naturfag (DT)', url: '#' },
      { name: 'Naturfag (EL)', url: '#' },
      { name: 'Naturfag (FD)', url: '#' },
      { name: 'Naturfag (HS)', url: '#' },
      { name: 'Naturfag (IM)', url: '#' },
      { name: 'Naturfag (NA)', url: '#' },
      { name: 'Naturfag (RM)', url: '#' },
      { name: 'Naturfag (SR)', url: '#' },
      { name: 'Naturfag (TP)', url: '#' },
      { name: 'Naturfag for påbygg', url: '#' },
      { name: 'Norsk (SF Vg1)', url: '#' },
      { name: 'Norsk (SF Vg2 og Vg3)', url: '#' },
      { name: 'Norsk (YF Vg2)', url: '#' },
      { name: 'Religion og etikk', url: '#' },
      { name: 'Samfunnsfag (Vg2)', url: '#' },
      { name: 'Samfunnskunnskap', url: '#' },
      { name: 'Sør-samisk (SF Vg2 og Vg3)', url: '#' },
      { name: 'Sør-samisk (YF Vg2)', url: '#' },
    ],
  },
  {
    name: 'Programfag',
    subjects: [
      { name: 'Arbeidsmiljø og dokumentasjon (BA Vg1)', url: '#' },
      { name: 'Bransje og arbeidsliv (RM Vg1)', url: '#' },
      { name: 'Bransjeteknikk (SR Vg2)', url: '#' },
      { name: 'Bruker- og driftsstøtte (SR Vg2)', url: '#' },
      { name: 'Drift og vedlikehold (SR Vg2)', url: '#' },
      { name: 'Elektroniske kretser og nettverk (EL Vg1)', url: '#' },
      { name: 'Energi- og styresystemer (EL Vg1)', url: '#' },
      { name: 'Etablering og drift (SR Vg2)', url: '#' },
      { name: 'Forretningsdrift (SR Vg1)', url: '#' },
      { name: 'HMS og kvalitet (TP Vg2)', url: '#' },
      { name: 'Helsefremmende arbeid (HS Vg1)', url: '#' },
      { name: 'Helsefremmende arbeid (HS-BU Vg2)', url: '#' },
      { name: 'Helsefremmende arbeid (HS-HA Vg2)', url: '#' },
      { name: 'Kommunikasjon (HS-BU Vg2)', url: '#' },
      { name: 'Kommunikasjon og samhandling (HS Vg1)', url: '#' },
      { name: 'Kommunikasjon og samhandlinger (HS-HA Vg2)', url: '#' },
      { name: 'Kommunikasjon, kunde og arbeidsliv (FD Vg1)', url: '#' },
      {
        name: 'Komplettering, produksjon og brønnvedlikehold (TP Vg2)',
        url: '#',
      },
      { name: 'Konseptutvikling og programmering (IM Vg1)', url: '#' },
      { name: 'Konstruksjons- og styringsteknikk (TP Vg1)', url: '#' },
      { name: 'Kosthold, ernæring og helse (RM Vg2)', url: '#' },
      { name: 'Kultur og samhandling (SR Vg1)', url: '#' },
      { name: 'Leting og boring (TP Vg2)', url: '#' },
      { name: 'Markedsføring og innovasjon (SR Vg1)', url: '#' },
      { name: 'Markedsføring og ledelse 1', url: '#' },
      { name: 'Markedsføring og salg (SR Vg2)', url: '#' },
      { name: 'Materialer og teknikker (DT Vg1)', url: '#' },
      { name: 'Naturbasert næringsaktivitet (NA Vg1)', url: '#' },
      { name: 'Naturbasert produksjon og tjenesteyting (NA Vg1)', url: '#' },
      { name: 'Praktisk yrkesutøvelse (BA Vg1)', url: '#' },
      { name: 'Produksjon og historiefortelling (IM Vg1)', url: '#' },
      { name: 'Produksjon og tjenester (TP Vg1)', url: '#' },
      { name: 'Produktivitet- og kvalitetsstyring (TP Vg1)', url: '#' },
      { name: 'Produktutvikling og produksjon (FD Vg1)', url: '#' },
      { name: 'Produktutvikling og skapende prosesser (DT Vg1)', url: '#' },
      { name: 'Råvare, produksjon og kvalitet (RM Vg1)', url: '#' },
      { name: 'Råvarer og produksjon (RM Vg2)', url: '#' },
      { name: 'Sal og marknadsføring (SR Vg2)', url: '#' },
      { name: 'Servering, bransje og miljø (RM Vg2)', url: '#' },
      { name: 'Sikkerhet (SR Vg2)', url: '#' },
      { name: 'Teknologiforståelse (IM Vg1)', url: '#' },
      { name: 'Transport og logistikk (SR Vg2)', url: '#' },
      { name: 'Vertskapsrolla (SR Vg2)', url: '#' },
      { name: 'Virksomhetsstøtte (SR Vg2)', url: '#' },
      { name: 'Yrkesfaglig fordypning (BA Vg1)', url: '#' },
      { name: 'Yrkesfaglig fordypning (DT Vg1)', url: '#' },
      { name: 'Yrkesfaglig fordypning (EL Vg1)', url: '#' },
      { name: 'Yrkesfaglig fordypning (FD Vg1)', url: '#' },
      { name: 'Yrkesfaglig fordypning (HS Vg1)', url: '#' },
      { name: 'Yrkesfaglig fordypning (HS-BU Vg2)', url: '#' },
      { name: 'Yrkesfaglig fordypning (HS-HA Vg2)', url: '#' },
      { name: 'Yrkesfaglig fordypning (IM Vg1)', url: '#' },
      { name: 'Yrkesfaglig fordypning (NA Vg1)', url: '#' },
      { name: 'Yrkesfaglig fordypning (RM Vg1)', url: '#' },
      { name: 'Yrkesfaglig fordypning (SR Vg1)', url: '#' },
      { name: 'Yrkesfaglig fordypning (SR-RE Vg2)', url: '#' },
      { name: 'Yrkesfaglig fordypning (TP Vg1)', url: '#' },
      { name: 'Yrkesliv i helse- og oppvekstfag (HS Vg1)', url: '#' },
      { name: 'Yrkesutøvelse (HS-BU Vg2)', url: '#' },
      { name: 'Yrkesutøvelse (HS-HA Vg2)', url: '#' },
      { name: 'Økonomi og administrasjon (SR Vg2)', url: '#' },
    ],
  },
  {
    name: 'Studieforberedende',
    subjects: [
      { name: 'Biologi 1', url: '#' },
      { name: 'Engelskspråklig litteratur og kultur (SF Vg3)', url: '#' },
      { name: 'Internasjonal engelsk (SF Vg2)', url: '#' },
      { name: 'Kinesisk 1', url: '#' },
      { name: 'Kinesisk 2', url: '#' },
      { name: 'Kommunikasjon og kultur 1', url: '#' },
      { name: 'Kommunikasjon og kultur 2', url: '#' },
      { name: 'Kommunikasjon og kultur 3', url: '#' },
      { name: 'Matematikk R1', url: '#' },
      { name: 'Matematikk R2', url: '#' },
      { name: 'Matematikk S1', url: '#' },
      { name: 'Matematikk S2', url: '#' },
      { name: 'Medie- og informasjonskunnskap 1', url: '#' },
      { name: 'Medie- og informasjonskunnskap 2', url: '#' },
      { name: 'Mediesamfunnet 1', url: '#' },
      { name: 'Mediesamfunnet 2', url: '#' },
      { name: 'Mediesamfunnet 3', url: '#' },
      { name: 'Medieuttrykk 1', url: '#' },
      { name: 'Medieuttrykk 2', url: '#' },
      { name: 'Medieuttrykk 3', url: '#' },
      { name: 'Naturfag (SF)', url: '#' },
      { name: 'Samfunnsfaglig engelsk (SF VG3)', url: '#' },
      { name: 'Sosiologi og sosialantropologi (SF VG2)', url: '#' },
      { name: 'Sør-samisk (SF Vg1)', url: '#' },
      { name: 'Tysk 1', url: '#' },
      { name: 'Tysk 2', url: '#' },
    ],
  },
];

export const articleBreadCrumb = [
  {
    label: 'Salg, service og reiseliv (Service og samferdsel)',
    id: 13,
    url: '#',
    typename: 'Subjecttype',
  },
  {
    label: 'Salg, service og reiseliv Vg1',
    id: 14,
    url: '#',
    typename: 'Subject',
  },
  {
    label: 'Økonomi',
    id: 15,
    url: '#',
    typename: 'Topic',
  },
  {
    label: 'Budsjett',
    id: 16,
    url: '#',
    typename: 'Subtopic',
  },
  {
    label: 'Artikkel fagstoff',
    id: 17,
    url: '#',
    isCurrent: true,
    icon: <SubjectMaterialBadge background size="xx-small" />,
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
