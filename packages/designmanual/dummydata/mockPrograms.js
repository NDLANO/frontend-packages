import { SubjectMaterialBadge } from '@ndla/ui';
import React from 'react';

export const subject = {
  subjectName: 'Salg, service og reiseliv Vg1',
  label: 'Forretningsdrift',
  url: '#',
  description: {
    heading: 'Om salg, service og reiseliv',
    text: 'Beskrivelse av faget',
    image: '',
  },
  filters: [
    {
      title: 'Forretningsdrift',
      value: 'Forretningsdrift',
      url: '#',
      id: 'urn:subject:12', // Id til faget
    },
    {
      title: 'Kultur og samhandling',
      value: 'Kultur og samhandling',
      url: '#',
      id: 'urn:subject:12', // Id til faget
    },
    {
      title: 'Markedsføring og innovasjon',
      value: 'Markedsføring og innovasjon',
      url: '#',
      id: 'urn:subject:12', // Id til faget
    },
    {
      title: 'Yrkesfaglig fordypning',
      value: 'Yrkesfaglig fordypning',
      url: '#',
      id: 'urn:subject:12', // Id til faget
    },
  ],
};

export const topics = [
  /*{
    label: 'Praksis i bedrift',
    tags: ['Yrkesfaglig fordypning'],
    url: '#',
    description:
      'Det er nyttig å prøve ut teorien du lærer på skulen, i praksis. Du kan vere utplassert innan vektarfaget, kontor og resepsjon, sal eller reiseliv.',
  },
  {
    label: 'Tverrfaglege oppgåver',
    tags: ['Yrkesfaglig fordypning'],
    url: '#',
    description:
      'Tverrfaglege oppgåver inneheld læreplanmål frå alle programfaga: forretningsdrift, marknadsføring og innovasjon og kultur og samhandling.',
  },
  {
    label: 'Å starte ungdomsbedrift',
    tags: ['Yrkesfaglig fordypning'],
    url: '#',
    description:
      'Alle elevar i vidaregåande skule kan starte ei ungdomsbedrift i samarbeid med lærar.',
  },
  {
    label: 'Å starte eiga bedrift',
    tags: ['Yrkesfaglig fordypning'],
    url: '#',
    description:
      'Tips og råd til deg som har lyst til å starte di eiga bedrift.',
  },*/
  {
    label: 'Lover og regler',
    id: 22661,
    tags: ['Forretningsdrift'],
    url: '#',
    description:
      'Det er mange lover og reglar som regulerer drift av verksemder innan servicenæringa. Alle lovene finn vi digitalt på Lovdata.',
  },
  {
    label: 'Organisering',
    id: 22664,
    tags: ['Forretningsdrift'],
    url: '#',
    description:
      'Alle verksemder treng ei tydeleg ansvarsfordeling der dei ulike rollene er klart definerte. Organisasjonskart blir utarbeidde for å presentere strukturen.',
  },
  {
    label: 'Økonomi',
    tags: ['Forretningsdrift'],
    url: '#',
    id: 22665,
    description:
      'Lær å rekne ut pris på eit produkt, setje opp budsjett, føre enkle rekneskap og vurdere lønsemd.',
    subTopics: [
      {
        label: 'Prissetting',
        id: 22703,
        url: '#',
        description:
          'Vi har tre prissetjingsmetodar: kostnadsbasert, marknadsbasert og konkurransebasert.',
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
        description:
          'Ein rekneskap viser eit oversyn over inntekter, kostnader, eigendelar og gjeld. Lær korleis du fører enkle rekneskap.',
      },
      {
        label: 'Lønnsomhet',
        id: 22719,
        url: '#',
        description:
          'For å vurdere lønsemda til ei bedrift utfører vi ein rekneskapsanalyse som gir oss oversyn over den økonomiske tilstanden og utviklinga i bedrifta.',
        isAdditionalResource: true,
      },
    ],
  },
  {
    label: 'Verdikjeden og bærekraftig utvikling',
    tags: ['Forretningsdrift'],
    url: '#',
    id: 22666,
    description:
      'Prosessen frå råvare til endeleg produkt blir kalla verdikjeda. For å fremje kvalitet og berekraftig utvikling må vi analysere dei ulike ledda.',
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
    description:
      'Arbeidsmiljølova og forskrifter krev at det blir arbeidd systematisk for å tryggje helse, miljø og sikkerheit/tryggleik for arbeidstakarane, HMS.',
  },
  /*{
    label: 'Kommunikasjon og kundebehandling',
    tags: ['Kultur og samhandling'],
    url: '#',
    description:
      'Kommunikasjon og kundebehandling omfattar tema som kulturforståing, vertskapsrolla, nettverksbygging, konflikthandtering og digital kommunikasjon.',
  },
  {
    label: 'Etikk og berekraft',
    tags: ['Kultur og samhandling'],
    url: '#',
    description:
      'Forbrukarane forventar at bedrifter skal handle både etisk og berekraftig. Korleis bedrifta gjer dette, blir ofte omtalt i verdigrunnlaget til bedrifta.',
  },
  {
    label: 'Partane i arbeidslivet',
    tags: ['Kultur og samhandling'],
    url: '#',
    description:
      'Korleis samarbeider partane i arbeidslivet for å utvikle arbeidslivet? I arbeidslivet har både arbeidsgivarar og arbeidstakarar sine eigne organisasjonar.',
  },
  {
    label: 'Innovasjon',
    tags: ['Markedsføring og innovasjon'],
    url: '#',
    description:
      'Nytenking, kreativitet og berekraft er viktig når du utarbeider ein forretningsidé.',
    isAdditionalResource: true,
  },
  {
    label: 'Marknadsføring og sal',
    tags: ['Markedsføring og innovasjon'],
    url: '#',
    description:
      'Ein medarbeidar innan sal og marknadsføring treng mellom anna kunnskap om forbrukaråtferd, marknadsføringsstrategiar, marknadsplanar og regelverk.',
  },
  {
    label: 'Administrasjon',
    tags: ['Markedsføring og innovasjon'],
    url: '#',
    description:
      'På eit kontor er det mange administrative oppgåver som består i å yte service internt og eksternt.',
  },*/
];

export const programs = [
  {
    label: 'Bygg- og anleggsteknikk',
    id: 1,
    url: '#',
    grades: [
      // Klassetrinn
      {
        name: 'VG1',
        categories: [
          // Fag inndelt i kategorier
          {
            name: 'programfag',
            subjects: [
              { id: 'urn:subject:39' }, // Id til faget som er spesifisert i fagstruktur
              { id: 'urn:subject:39' },
              { id: 'urn:subject:39' },
              { id: 'urn:subject:39' },
            ],
          },
          {
            name: 'fellesfag',
            subjects: [
              { id: 'urn:subject:39' },
              { id: 'urn:subject:39' },
              { id: 'urn:subject:39' },
              { id: 'urn:subject:39' },
            ],
          },
        ],
      },
      {
        name: 'VG2 & VG3',
        categories: [
          // Fag inndelt i kategorier
          {
            name: 'programfag',
            subjects: [
              { id: 'urn:subject:39' }, // Id til faget som er spesifisert i fagstruktur
              { id: 'urn:subject:39' },
              { id: 'urn:subject:39' },
              { id: 'urn:subject:39' },
            ],
          },
          {
            name: 'fellesfag',
            subjects: [
              { id: 'urn:subject:39' },
              { id: 'urn:subject:39' },
              { id: 'urn:subject:39' },
              { id: 'urn:subject:39' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Design og håndverk',
    id: 2,
    url: '#',
    subjectCategories: [
      {
        name: 'programfag',
        subjects: [
          { id: 'urn:subject:39' },
          { id: 'urn:subject:39' },
          { id: 'urn:subject:39' },
          { id: 'urn:subject:39' },
        ],
      },
      {
        name: 'fellesfag',
        subjects: [
          { id: 'urn:subject:39' },
          { id: 'urn:subject:39' },
          { id: 'urn:subject:39' },
          { id: 'urn:subject:39' },
        ],
      },
    ],
  },
  {
    label: 'Elektrofag',
    id: 3,
    url: '#',
    subjectCategories: [
      {
        name: 'programfag',
        subjects: [
          { id: 'urn:subject:39' },
          { id: 'urn:subject:39' },
          { id: 'urn:subject:39' },
          { id: 'urn:subject:39' },
        ],
      },
      {
        name: 'fellesfag',
        subjects: [
          { id: 'urn:subject:39' },
          { id: 'urn:subject:39' },
          { id: 'urn:subject:39' },
          { id: 'urn:subject:39' },
        ],
      },
    ],
  },
  { label: 'Helse- og oppvekstfag', id: 4, url: '#' },
  { label: 'Idrett', id: 5, url: '#' },
  { label: 'Kunst, design og akitektur', id: 6, url: '#' },
  { label: 'Medier og kommunikasjon', id: 7, url: '#' },
  { label: 'Musikk, dans og drama', id: 8, url: '#' },
  { label: 'Naturbruk', id: 10, url: '#' },
  { label: 'Påbygg', id: 11, url: '#' },
  { label: 'Restaurant- og matfag', id: 12, url: '#' },
  {
    label: 'Salg, service og reiseliv (Service og samferdsel)',
    id: 13,
    url: '#',
    image: 'https://api.ff.ndla.no/image-api/raw/378616471.jpg?width=10720',
    grades: [
      // Klassetrinn
      {
        name: 'Vg1',
        categories: [
          // Fag inndelt i kategorier
          {
            name: 'programfag',
            subjects: [
              {
                subjectName: 'Salg, service og reiseliv Vg1',
                label: 'Forretningsdrift',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                subjectName: 'Salg, service og reiseliv Vg1',
                label: 'Kultur og samhandling',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                subjectName: 'Salg, service og reiseliv Vg1',
                label: 'Markedsføring og innovasjon',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                subjectName: 'Salg, service og reiseliv Vg1',
                label: 'Yrkesfaglig fordypning',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
            ],
          },
          {
            name: 'fellesfag',
            subjects: [
              {
                label: 'Engelsk for yrkesfag',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                label: 'Kroppsøving',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                label: '(Matematikk 1T-Y for salg, service og reiseliv)',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                label: 'Matematikk 1P-Y for salg, service og reiseliv',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                label: 'Naturfag for salg, service og reiseliv',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
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
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                label: 'Bruker- og driftsstøtte',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                label: 'Drift og vedlikehold',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
            ],
          },
          {
            name: 'Reiseliv programfag ',
            subjects: [
              {
                label: 'Etablering og drift',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                label: 'Sal og marknadsføring',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                label: 'Vertskapsrolla',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                label: 'Yrkesfaglig fordypning',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
            ],
          },
          {
            name: 'Salg, service og sikkerhet programfag ',
            subjects: [
              {
                label: 'Markedsføring og salg',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                label: 'Sikkerhet',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                label: 'Økonomi og administrasjon',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
            ],
          },
          {
            name: 'Fellesfag',
            subjects: [
              {
                label: '06 Samfunnsfag',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                label: 'Kroppsøving',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                label: '06 Norsk for yrkesfag',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
              {
                label: '06 Sør-samisk som førstespråk for yrkesfag',
                url: '#',
                id: 'urn:subject:12', // Id til faget
                showFilters: true, // Skal filtre på faget fra taksonomi vises som egne innganger
              },
            ],
          },
        ],
      },
    ],
  },
  { label: 'Studiespesialisering', id: 14, url: '#' },
  { label: 'Teknikk og industriell produksjon', id: 15, url: '#' },
];

export const subjectCategories = [
  {
    name: 'Fellesfag',
    subjects: [
      {
        nodeId: '42',
        lang: 'en',
        name: 'Engelsk',
        id: 'urn:subject:39',
        url: '#',
      },
      {
        url: '#',
        id: 'urn:subject:9',
        nodeId: '52253',
        name: 'Historie Vg2 og Vg3',
      },
      { nodeId: '46', name: 'Kroppsøving', url: '#', id: 'urn:subject:26' },
      { nodeId: '55', name: 'Matematikk 1P', url: '#', id: 'urn:subject:34' },
      { nodeId: '54', name: 'Matematikk 1T', url: '#', id: 'urn:subject:33' },
      { nodeId: '53', name: 'Matematikk 2P', url: '#', id: 'urn:subject:29' },
      { name: 'Matematikk 1P-Y', url: '#', id: 'urn:subject:30' },
      { name: 'Matematikk 1T-Y', url: '#', id: 'urn:subject:30' },
      { name: 'Matematikk 2P-Y', url: '#', id: 'urn:subject:30' },
      { nodeId: '7', name: 'Naturfag', url: '#', id: 'urn:subject:21' },
      {
        nodeId: '27',
        name: 'Norsk Vg2 og Vg3 SF',
        shortname: 'SF Vg2,SF Vg3',
        url: '#',
        id: 'urn:subject:19',
      },
      {
        nodeId: '116784',
        name: 'Norsk YF og SF',
        shortname: 'SF Vg1,PB Vg3,YF Vg1/Vg2',
        url: '#',
        id: 'urn:subject:19',
      },
      {
        nodeId: '185100',
        beta: true,
        name: 'Religion og etikk',
        url: '#',
        id: 'urn:subject:44',
      },
      { nodeId: '36', name: 'Samfunnsfag', url: '#', id: 'urn:subject:3' },
      {
        nodeId: '126960',
        beta: true,
        name: 'Sørsamisk som førstespråk',
        url: '#',
        id: 'urn:subject:15',
      },
    ],
  },
  {
    name: 'Yrkesfag',
    subjects: [
      {
        nodeId: '51',
        name: 'Barne- og ungdomsarbeiderfag Vg2',
        url: '#',
        id: 'urn:subject:40',
      },
      { nodeId: '137414', name: 'Brønnteknikk', url: '#', id: 'urn:subject:6' },
      {
        nodeId: '127013',
        name: 'Bygg- og anleggsteknikk Vg1',
        url: '#',
        id: 'urn:subject:11',
      },
      {
        nodeId: '44',
        name: 'Design og håndverk Vg1',
        url: '#',
        id: 'urn:subject:38',
      },
      { nodeId: '43', name: 'Elektrofag Vg1', url: '#', id: 'urn:subject:16' },
      {
        nodeId: '8',
        name: 'Helse- og oppvekstfag Vg1',
        url: '#',
        id: 'urn:subject:24',
      },
      {
        nodeId: '52',
        name: 'Helsearbeiderfag Vg2',
        url: '#',
        id: 'urn:subject:4',
      },
      {
        nodeId: '102783',
        name: 'IKT-servicefag Vg2',
        url: '#',
        id: 'urn:subject:25',
      },
      {
        nodeId: '86643',
        name: 'Kokk- og servitørfag Vg2',
        url: '#',
        id: 'urn:subject:41',
      },
      {
        nodeId: '137415',
        name: 'Naturbruk Vg1',
        url: '#',
        id: 'urn:subject:13',
      },
      {
        nodeId: '102780',
        name: 'Reiseliv Vg2',
        url: '#',
        id: 'urn:subject:35',
      },
      {
        nodeId: '37',
        name: 'Restaurant- og matfag Vg1',
        url: '#',
        id: 'urn:subject:37',
      },
      {
        nodeId: '102781',
        name: 'Salg, service og sikkerhet Vg2',
        url: '#',
        id: 'urn:subject:22',
      },
      {
        nodeId: '52291',
        name: 'Service og samferdsel Vg1',
        url: '#',
        id: 'urn:subject:12',
      },
      {
        nodeId: '35',
        name: 'Teknikk og industriell produksjon Vg1',
        url: '#',
        id: 'urn:subject:28',
      },
      {
        nodeId: '102782',
        name: 'Transport og logistikk Vg2',
        url: '#',
        id: 'urn:subject:36',
      },
    ],
  },
  {
    name: 'Studieforberedende',
    subjects: [
      { nodeId: '52234', name: 'Biologi 1', url: '#', id: 'urn:subject:42' },
      {
        nodeId: '71085',
        lang: 'en',
        name: 'Engelskspråklig litteratur og kultur',
        url: '#',
        id: 'urn:subject:17',
      },
      {
        nodeId: '56850',
        lang: 'en',
        name: 'Internasjonal engelsk',
        url: '#',
        id: 'urn:subject:27',
      },
      { nodeId: '127756', name: 'Kinesisk 1', url: '#', id: 'urn:subject:2' },
      { nodeId: '138654', name: 'Kinesisk 2', url: '#', id: 'urn:subject:2' },
      {
        nodeId: '6118',
        name: 'Kommunikasjon og kultur 1',
        shortname: 'KK1',
        url: '#',
        id: 'urn:subject:18',
      },
      {
        nodeId: '2602',
        name: 'Kommunikasjon og kultur 2',
        shortname: 'KK2',
        url: '#',
        id: 'urn:subject:18',
      },
      {
        nodeId: '2603',
        name: 'Kommunikasjon og kultur 3',
        shortname: 'KK3',
        url: '#',
        id: 'urn:subject:18',
      },
      {
        nodeId: '52293',
        name: 'Markedsføring og ledelse 1',
        url: '#',
        id: 'urn:subject:7',
      },

      {
        nodeId: '57933',
        name: 'Matematikk R1',
        url: '#',
        id: 'urn:subject:32',
      },
      {
        nodeId: '98361',
        name: 'Matematikk R2',
        url: '#',
        id: 'urn:subject:32',
      },
      {
        nodeId: '57934',
        name: 'Matematikk S1',
        url: '#',
        id: 'urn:subject:31',
      },
      {
        nodeId: '98366',
        name: 'Matematikk S2',
        url: '#',
        id: 'urn:subject:31',
      },
      {
        name: 'Medie- og informasjonskunnskap',
        url: '#',
        id: 'urn:subject:14',
      },
      {
        nodeId: '156500',
        beta: true,
        name: 'Medieuttrykk og mediesamfunnet',
        url: '#',
        id: 'urn:subject:1',
      },
      {
        nodeId: '71082',
        lang: 'en',
        name: 'Samfunnsfaglig engelsk',
        url: '#',
        id: 'urn:subject:23',
      },
      {
        nodeId: '185103',
        name: 'Sosiologi og sosialantropologi',
        url: '#',
        id: 'urn:subject:43',
      },
      { nodeId: '137416', name: 'Tysk 1', url: '#', id: 'urn:subject:8' },
      { nodeId: '138655', name: 'Tysk 2', url: '#', id: 'urn:subject:8' },
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
