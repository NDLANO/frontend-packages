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
  { label: 'Service og samferdsel', id: 13, url: '#' },
  { label: 'Studiespesialisering', id: 14, url: '#' },
  { label: 'Teknikk og industriell produksjon', id: 15, url: '#' },
];

export const subjectCategories = [
  {
    name: 'fellesfag',
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
    name: 'yrkesfag',
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
    name: 'studieforberedende',
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
