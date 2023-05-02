const subjectTypeResults = [
  {
    id: 1,
    title: 'Norsk',
    url: '#1',
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/51959',
    },
  },
  {
    id: 2,
    title: 'Engelsk',
    url: '#2',
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/51990',
    },
  },
  {
    id: 3,
    title: 'Matte',
    url: '#3',
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/51959',
    },
  },
];

const topicResults = [
  {
    id: 12627,
    title: 'Løping',
    ingress: 'Løping er ofte med som hovedaktivitet i den generelle oppvarmingen.',
    url: '#12627',
    labels: ['En label', 'En annen label'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/43283',
      alt: 'Kvinne jogger på gata. Foto.',
    },
    contexts: [{ breadcrumb: ['Kroppsøving', 'Øvingsbank', 'Oppvarming'], url: '#1' }],
  },
  {
    id: 20681,
    title: 'Føkk fossils II – tipping point',
    ingress:
      'Året er 2050, og den globale oppvarminga har steget over 2,5 grader. Reis fram i tid og utforsk årsaker, konsekvenser og løsninger.',
    url: '#20681',
    labels: [],
    img: null,
    contexts: [{ breadcrumb: ['Tverrfaglige temaer'], url: '#1' }],
  },
  {
    id: 12451,
    title: 'Uheldige sider ved trening',
    ingress:
      'Hvilke konsekvenser kan overdrevent fokus på trening medføre? Kroppsfokus, prestasjonsangst, spiseforstyrrelser og doping er negative sider av trening.',
    url: '#12451',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/43229',
      alt: 'Ung jente holder en ispose på et skadet kne. Foto.',
    },
    contexts: [
      { breadcrumb: ['Kroppsøving', 'Helse og livsstil'], url: '#1' },
      { breadcrumb: ['Kroppsøving', 'Helse og livsstil'], url: '#2' },
    ],
  },
  {
    id: 9009,
    title: 'Idéskaping og mediedesign',
    ingress:
      'Idéskaping og mediedesign står sentralt i utformingen av medieuttrykk. Trender og stilarter har utviklet seg opp gjennom tidene.',
    url: '#9009',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/193',
      alt: 'person med mange armer som gjør forskjellige ting samtidig. Foto.',
    },
    contexts: [
      { breadcrumb: ['Medieuttrykk og mediesamfunnet Vg2 og Vg3'], url: '#1' },
      { breadcrumb: ['Medieuttrykk og mediesamfunnet Vg2 og Vg3'], url: '#2' },
    ],
  },
  {
    id: 10091,
    title: 'Hestenæringa',
    ingress:
      'Om hestenæringas mangfold, betydning og verdiskaping. Du lærer om kvalitetssystemer for stall- og forretningsdrift, økonomi, regler, miljø og bærekraft.',
    url: '#10091',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/40927',
      alt: 'Hoppe som koser med føllet sitt. Foto.',
    },
    contexts: [
      { breadcrumb: ['Naturbruk Vg1', 'Hestefag'], url: '#1' },
      { breadcrumb: ['Naturbruk Vg1', 'Hestefag'], url: '#2' },
    ],
  },
  {
    id: 9177,
    title: 'Videoproduksjon',
    ingress:
      'Videoproduksjon handler om alt fra konkretisering av idéen, uttegning og opptak, til redigering og klipping.',
    url: '#9177',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/6448',
      alt: 'Symbolbilde for filmopplegg. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Medieuttrykk og mediesamfunnet Vg2 og Vg3', 'Medieproduksjon'],
        url: '#1',
      },
      {
        breadcrumb: ['Medieuttrykk og mediesamfunnet Vg2 og Vg3', 'Medieproduksjon'],
        url: '#2',
      },
    ],
  },
  {
    id: 5660,
    title: 'Levende bilder',
    ingress:
      'Filmproduksjon handler om alt fra konkretisering av idéen, uttegning og filming, til redigering og klipping.',
    url: '#5660',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/6448',
      alt: 'Symbolbilde for filmopplegg. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Medie- og informasjonskunnskap', 'Medieproduksjon'],
        url: '#1',
      },
      {
        breadcrumb: ['Medie- og informasjonskunnskap', 'Medieproduksjon'],
        url: '#2',
      },
    ],
  },
  {
    id: 21346,
    title: 'Kultur og tradisjon',
    ingress:
      'Å forstå og respektere din egen og andres kultur- og håndverkstradisjon er en viktig del av kulturarven. Kunnskap om dette kan inspirere til nyskaping.  ',
    url: '#21346',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/45661',
      alt: 'To smykker med samisk solgud. Foto.',
    },
    contexts: [{ breadcrumb: ['Håndverk, design og produktutvikling Vg1'], url: '#1' }],
  },
  {
    id: 22813,
    title: 'Bærekraftig utvikling',
    ingress:
      'For å sikre en bærekraftig utvikling må alle bedrifter sørge for bærekraftig verdiskaping i alle ledd i verdikjeden.',
    url: '#22813',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/24749',
      alt: 'En globus ligger oppå søppel på en gate. Illustrasjon.',
    },
    contexts: [
      {
        breadcrumb: ['Salg, service og reiseliv Vg1', 'Verdikjeden og bærekraftig utvikling'],
        url: '#1',
      },
    ],
  },
  {
    id: 22572,
    title: 'Kultur og tradisjon ',
    ingress:
      'Å respektere egen og andres kultur er grunnleggende i møte med andre. Kultur og håndverkstradisjoner skaper identitet og kan inspirere til nyskaping.  ',
    url: '#22572',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/43404',
      alt: 'Glade venner med ulik etnisitet tar selfie. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Frisør, blomster, interiør og eksponeringsdesign Vg1'],
        url: '#1',
      },
      {
        breadcrumb: ['Frisør, blomster, interiør og eksponeringsdesign Vg1'],
        url: '#2',
      },
    ],
  },
  {
    id: 24169,
    title: 'Dyrenæringa',
    ingress:
      'Dyrenæringa er mangfoldig og spesialisert. I emnet lærer du om næringas betydning og verdiskaping, økonomi, kvalitet, lovgiving, miljø og bærekraft.',
    url: '#24169',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/50093',
      alt: ' Ung hund som spring gjennom en treningsbane. Foto.',
    },
    contexts: [{ breadcrumb: ['Naturbruk Vg1', 'Dyrefag'], url: '#1' }],
  },
  {
    id: 689,
    title: 'Brønndreping',
    ingress:
      'Brønndreping vil si å fylle brønnen med en væske som holder trykket tilbake i reservoaret. Det gjøres for å kunne vedlikeholde eller plugge brønnen.',
    url: '#689',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/4627',
      alt: 'Drepemetode mosaikk. Illustrasjon.',
    },
    contexts: [
      {
        breadcrumb: ['Brønnteknikk Vg2', 'Komplettering, produksjon og brønnvedlikehold'],
        url: '#1',
      },
    ],
  },
  {
    id: 1666,
    title: 'Verdikjeden',
    ingress:
      'Begrepet verdikjede kan brukes om prosessen, gjennom alle ledd, fra produsent og fram til forbruker. Lær om verdikjedens betydning for kundetilfredshet.',
    url: '#1666',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/41134',
      alt: 'En rød binders er brukt som et ledd i en metallenke.Foto.',
    },
    contexts: [{ breadcrumb: ['Salg, service og sikkerhet Vg2'], url: '#1' }],
  },
  {
    id: 25319,
    title: 'Video',
    ingress:
      'Videoproduksjon handler om alt fra konkretisering av idéen, valg av virkemidler, uttegning og opptak til redigering og klipping.',
    url: '#25319',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/11892',
      alt: 'Elev som lager film. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Frisør, blomster, interiør og eksponeringsdesign Vg1', 'Visualisering '],
        url: '#1',
      },
      {
        breadcrumb: ['Frisør, blomster, interiør og eksponeringsdesign Vg1', 'Visualisering '],
        url: '#2',
      },
    ],
  },
  {
    id: 24733,
    title: 'Video',
    ingress:
      'Videoproduksjon handler om alt fra konkretisering av idéen, valg av virkemidler, uttegning og opptak til redigering og klipping.',
    url: '#24733',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/11892',
      alt: 'Elev som lager film. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Håndverk, design og produktutvikling Vg1', 'Visualisering '],
        url: '#1',
      },
    ],
  },
  {
    id: 23265,
    title: 'Skriftlig tekstskaping',
    ingress: 'Øv deg på å skrive fagartikler, kreative tekster, argumenterende tekster og tekstanalyser.',
    url: '#23265',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/42574',
      alt: 'En kulepenn og skrivebok ligger oppå en datamaskin. Foto.',
    },
    contexts: [
      { breadcrumb: ['Norsk SF Vg1'], url: '#1' },
      { breadcrumb: ['Norsk SF Vg1'], url: '#2' },
    ],
  },
  {
    id: 16750,
    title: 'Skriftlig tekstskaping',
    ingress:
      'Øv deg på å skrive kreative tekster, argumenterende tekster og tekstanalyser, og få råd om hvordan du kan skrive fordypningsoppgave.',
    url: '#16750',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/42574',
      alt: 'En kulepenn og skrivebok ligger oppå en bærbar datamaskin. Foto.',
    },
    contexts: [
      { breadcrumb: ['Norsk'], url: '#1' },
      { breadcrumb: ['Norsk'], url: '#2' },
      { breadcrumb: ['Norsk'], url: '#3' },
      { breadcrumb: ['Norsk'], url: '#4' },
    ],
  },
  {
    id: 15548,
    title: 'Yrkesfaglige situasjonsbeskrivelser',
    ingress:
      'Her finner du praksissituasjoner som du kan løse alene eller i gruppe, til bruk i programfag eller i yrkesfaglig fordypning.',
    url: '#15548',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/24212',
      alt: '',
    },
    contexts: [
      { breadcrumb: ['Barne- og ungdomsarbeiderfag Vg2'], url: '#1' },
      { breadcrumb: ['Barne- og ungdomsarbeiderfag Vg2'], url: '#2' },
      { breadcrumb: ['Barne- og ungdomsarbeiderfag Vg2'], url: '#3' },
    ],
  },
  {
    id: 21736,
    title: 'Video',
    ingress:
      'Hvordan bruke fortelleteknikker og virkemidler i video? Hvordan håndtere og bruke produksjonsutstyr? Og hvordan planlegge og gjennomføre en produksjon?',
    url: '#21736',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/51785',
      alt: ' ',
    },
    contexts: [{ breadcrumb: ['Mediesamfunnet og medieuttrykk Vg1'], url: '#1' }],
  },
  {
    id: 1157,
    title: 'Salgskanaler',
    ingress:
      'Med salgskanal menes kanaler vi kan bruke for å få til et salg mellom virksomheten og en kunde. Valg av salgskanaler er en del av en markedsstrategien.',
    url: '#1157',
    labels: [],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/41152',
      alt: 'Shopping i nettbutikk på mobiltelefonen. Foto.',
    },
    contexts: [],
  },
];

const subjectMaterialResults = [
  {
    id: 12458,
    title: 'Doping',
    ingress: 'Doping er bruk av medikamenter eller andre metoder for å øke prestasjonsevnen på en unaturlig måte.',
    url: '#12458',
    labels: ['Fagartikkel'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/20509?width=600',
      alt: '',
    },
    contexts: [
      {
        breadcrumb: ['Kroppsøving', 'Helse og livsstil', 'Uheldige sider ved trening'],
        url: '#1',
      },
      {
        breadcrumb: ['Kroppsøving', 'Helse og livsstil', 'Uheldige sider ved trening'],
        url: '#2',
      },
    ],
  },
  {
    id: 12459,
    title: 'Fakta om doping',
    ingress:
      'Verdens antidopingbyrå har laget en liste over forbudte prestasjonsfremmende stoffer. Dersom du bruker medikamenter som står på denne lista, doper du deg.',
    url: '#12459',
    labels: ['Fagartikkel'],
    img: null,
    contexts: [
      {
        breadcrumb: ['Kroppsøving', 'Helse og livsstil', 'Uheldige sider ved trening'],
        url: '#1',
      },
      {
        breadcrumb: ['Kroppsøving', 'Helse og livsstil', 'Uheldige sider ved trening'],
        url: '#2',
      },
    ],
  },
  {
    id: 12447,
    title: 'Teiping av ankelskader',
    ingress:
      'Hvis behandlingen er god, klarer de fleste idrettsutøvere å trene og konkurrere igjen noen uker etter en akutt ankelskade.',
    url: '#12447',
    labels: ['Film og filmklipp'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/38156?width=600',
      alt: '',
    },
    contexts: [
      {
        breadcrumb: ['Kroppsøving', 'Helse og livsstil', 'Idrettsskader'],
        url: '#1',
      },
      {
        breadcrumb: ['Kroppsøving', 'Helse og livsstil', 'Idrettsskader'],
        url: '#2',
      },
    ],
  },
  {
    id: 17764,
    title: 'Bresert og dampet',
    ingress:
      'Til bresering bruker vi kjøtt fra kam, mørbrad, lår eller bog. Damping brukes til steker, kjøttpudding, rull, tunge, svineribbe og pinnekjøtt.',
    url: '#17764',
    labels: ['Forelesning og presentasjon'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/29233?width=600',
      alt: 'Reinsdyrstek. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Kokk- og servitørfag Vg2', 'Råvarer og produksjon', 'Kjøtt'],
        url: '#1',
      },
    ],
  },
  {
    id: 12448,
    title: 'Aktivitetsteiping av lår',
    ingress:
      'For å gjenoppta aktiviteten så fort som mulig etter en «lårhøne» kan utøveren legge aktivitetsteip på skadestedet.',
    url: '#12448',
    labels: ['Film og filmklipp'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/37860?width=600',
      alt: '',
    },
    contexts: [
      {
        breadcrumb: ['Kroppsøving', 'Helse og livsstil', 'Idrettsskader'],
        url: '#1',
      },
      {
        breadcrumb: ['Kroppsøving', 'Helse og livsstil', 'Idrettsskader'],
        url: '#2',
      },
    ],
  },
  {
    id: 21001,
    title: 'Kontinuitetsklipping ',
    ingress: 'Her får du en innføring i ulike klippeteknikker.',
    url: '#21001',
    labels: ['Fagartikkel'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/40605?width=600',
      alt: 'Filmrull og saks. foto.',
    },
    contexts: [
      {
        breadcrumb: ['Mediesamfunnet og medieuttrykk Vg1', 'Video'],
        url: '#1',
      },
      {
        breadcrumb: ['Informasjonsteknologi og medieproduksjon Vg1', 'Videoproduksjon'],
        url: '#2',
      },
    ],
  },
  {
    id: 14054,
    title: 'DNA-typing – sammenligning av DNA',
    ingress:
      'DNA-typing vil si å sammenligne DNA fra to eller flere prøver. Formålet er å finne ut hvor sannsynlig det er at prøvene stammer fra samme person.',
    url: '#14054',
    labels: ['Fagartikkel'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/43883?width=600',
      alt: 'Forsker undersøker utskrift med resultat av DNA-test. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Naturfag Påbygg', 'Bioteknologi', 'Medisinsk bruk av bioteknologi'],
        url: '#1',
      },
    ],
  },
  {
    id: 5109,
    title: 'Klipping',
    ingress: 'En innføring i ulike klippeteknikker.',
    url: '#5109',
    labels: ['Fagartikkel'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/40605?width=600',
      alt: 'Filmrull og saks. Illustrasjon.',
    },
    contexts: [
      {
        breadcrumb: [
          'Medie- og informasjonskunnskap',
          'Medietekster og medieanalyse',
          'Fortelleteknikk i medietekster',
        ],
        url: '#1',
      },
      {
        breadcrumb: [
          'Medie- og informasjonskunnskap',
          'Medietekster og medieanalyse',
          'Fortelleteknikk i medietekster',
        ],
        url: '#2',
      },
      {
        breadcrumb: ['Medie- og informasjonskunnskap', 'Medieproduksjon', 'Levende bilder'],
        url: '#3',
      },
      {
        breadcrumb: ['Medie- og informasjonskunnskap', 'Medieproduksjon', 'Levende bilder'],
        url: '#4',
      },
      {
        breadcrumb: ['Medieuttrykk og mediesamfunnet Vg2 og Vg3', 'Medieproduksjon', 'Videoproduksjon'],
        url: '#5',
      },
    ],
  },
  {
    id: 3135,
    title: 'Rettskrivingsregler for pinyin',
    ingress: 'Her lærer du hvordan du skriver pinyin riktig.',
    url: '#3135',
    labels: ['Forelesning og presentasjon'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/5772?width=600',
      alt: 'Kinesiske tegn. Betydning: uttale. Illustrasjon.',
    },
    contexts: [{ breadcrumb: ['Kinesisk', 'Introduksjon til kinesisk'], url: '#1' }],
  },
  {
    id: 5108,
    title: 'Klipping og klipperytme',
    ingress:
      'Rekkefølgen som bildene vises i avgjør hvordan vi oppfatter en filmsekvens. Klipperytmen er også et viktig fortellerelement.',
    url: '#5108',
    labels: ['Fagartikkel'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/40605?width=600',
      alt: 'Filmrull og saks. Illustrasjon.',
    },
    contexts: [
      {
        breadcrumb: [
          'Medieuttrykk og mediesamfunnet Vg2 og Vg3',
          'Idéskaping og mediedesign',
          'Fortelleteknikker og virkemidler',
        ],
        url: '#1',
      },
      {
        breadcrumb: ['Mediesamfunnet og medieuttrykk Vg1', 'Video'],
        url: '#2',
      },
    ],
  },
  {
    id: 9577,
    title: 'Støping av gulv på grunn',
    ingress:
      'I denne bildeserien viser vi hvordan vi støper gulv på grunn. Forarbeidet med byggegrunn, isolering, forskaling og armering er gjort på forhånd.',
    url: '#9577',
    labels: ['Fagartikkel'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/8275?width=600',
      alt: 'Bil leverer betong som betongarbeidere legger ut som gulv. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Bygg- og anleggsteknikk', 'Yrkesutøvelse', 'Betongarbeideren'],
        url: '#1',
      },
    ],
  },
  {
    id: 9571,
    title: 'Støping av betong',
    ingress:
      'Støping av betong starter med transporten av den ferske betongen fra betongfabrikken til forskalinga på byggeplassen. ',
    url: '#9571',
    labels: ['Fagartikkel'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/3272?width=600',
      alt: 'Betongbil. Foto',
    },
    contexts: [
      {
        breadcrumb: ['Bygg- og anleggsteknikk', 'Yrkesutøvelse', 'Betongarbeideren'],
        url: '#1',
      },
    ],
  },
  {
    id: 12460,
    title: 'Tenåringer bruker treningsdop',
    ingress:
      '&ndash; Det er mange som doper seg. Gutta på skolen som trener styrke, snakker ofte om hva de bruker, sier en 17 år gammel gutt på en videregående skole i Oslo.',
    url: '#12460',
    labels: ['Fagartikkel'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/17953?width=600',
      alt: '',
    },
    contexts: [
      {
        breadcrumb: ['Kroppsøving', 'Helse og livsstil', 'Uheldige sider ved trening'],
        url: '#1',
      },
      {
        breadcrumb: ['Kroppsøving', 'Helse og livsstil', 'Uheldige sider ved trening'],
        url: '#2',
      },
    ],
  },
  {
    id: 12461,
    title: 'Tidenes juksemaker',
    ingress:
      'Lance Armstrong, en av idrettens mest beundrede, hyllede og anerkjente legende er avslørt som tidenes juksemaker.',
    url: '#12461',
    labels: ['Fagartikkel'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/17922?width=600',
      alt: '',
    },
    contexts: [
      {
        breadcrumb: ['Kroppsøving', 'Helse og livsstil', 'Uheldige sider ved trening'],
        url: '#1',
      },
      {
        breadcrumb: ['Kroppsøving', 'Helse og livsstil', 'Uheldige sider ved trening'],
        url: '#2',
      },
    ],
  },
  {
    id: 20614,
    title: 'Terminering av RJ45-plugg',
    ingress: 'Her lærer du hvordan du terminerer en nettverkskabel med 8-pin-plugg (RJ-45).',
    url: '#20614',
    labels: ['Fagartikkel'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/49935?width=600',
      alt: 'Terminering av nettverkskabel i plugg (RJ-45). Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Elektro og datateknologi Vg1', 'Nettverk', 'Nettverksenheter'],
        url: '#1',
      },
      {
        breadcrumb: ['Informasjonsteknologi og medieproduksjon Vg1', 'Praktisk IT'],
        url: '#2',
      },
    ],
  },
  {
    id: 14443,
    title: 'Støping av gipsformer',
    ingress:
      'Når du skal støpe med flytende leire, må du først lage en form til å støpe i. Gips er et godt materiale til å lage en slik avstøpning med.',
    url: '#14443',
    labels: ['Veiledning'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/13982?width=600',
      alt: 'Tre bilder som viser hvordan du kan lage ei gipsform ut fra et annet produkt. Foto. ',
    },
    contexts: [
      {
        breadcrumb: ['Håndverk, design og produktutvikling Vg1', 'Keramikk'],
        url: '#1',
      },
      {
        breadcrumb: ['Håndverk, design og produktutvikling Vg1', 'Keramikk'],
        url: '#2',
      },
    ],
  },
  {
    id: 12638,
    title: 'Stigningsløp',
    ingress: 'Stigningsløp er en øvelse som passer godt som spesiell oppvarming til økter som inneholder løping.',
    url: '#12638',
    labels: ['Film og filmklipp'],
    img: null,
    contexts: [
      {
        breadcrumb: ['Kroppsøving', 'Øvingsbank', 'Oppvarming', 'Løping'],
        url: '#1',
      },
    ],
  },
  {
    id: 13223,
    title: 'Overnatting',
    ingress:
      'Overnattingsstedet, enten det er et hotell eller en campingplass, er sentralt for gjestenes videre planlegging av oppholdet.',
    url: '#13223',
    labels: ['Fagartikkel'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/28348?width=600',
      alt: 'Bilde fra fiskteur ved Florø',
    },
    contexts: [
      {
        breadcrumb: ['Reiseliv', 'Det helhetlige reiselivsproduktet'],
        url: '#1',
      },
    ],
  },
  {
    id: 691,
    title: 'Pumping, starttrykk og sikkerhetsmargin',
    ingress:
      'Dreping av produksjonsbrønn kan forårsake skade på formasjonen. Vi må beregne de grenseverdiene som er viktige.',
    url: '#691',
    labels: ['Fagartikkel'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/4643?width=600',
      alt: 'Pumping, starttrykk og sikkerhetsmargin. Illustrasjon.',
    },
    contexts: [
      {
        breadcrumb: ['Brønnteknikk Vg2', 'Komplettering, produksjon og brønnvedlikehold', 'Brønndreping'],
        url: '#1',
      },
    ],
  },
  {
    id: 26897,
    title: 'Håndsirkelsag',
    ingress: 'Lær deg sikker bruk av ei håndsirkelsag. Saga brukes både til kapping og kløyving. ',
    url: '#26897',
    labels: ['Film og filmklipp'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/4509?width=600',
      alt: 'Plate kuttes med håndsirkelsag. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Håndverk, design og produktutvikling Vg1', 'Trearbeid', 'Verktøy'],
        url: '#1',
      },
      {
        breadcrumb: ['Håndverk, design og produktutvikling Vg1', 'Trearbeid', 'Verktøy'],
        url: '#2',
      },
    ],
  },
];

const resourcesTasksAndActivitiesResults = [
  {
    id: 14,
    title: 'Utforme informasjon til nettsidene',
    url: '#1',
    ingress: 'Oppgave til fagstoff om å utforme informasjon til nettsider.',
    labels: ['Oppgave'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/43541?width=600',
      alt: 'Solnedgang over campingplass. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Salg og markedsføring (SS-RLV Vg2)', 'Webdesign'],
        url: '#1',
      },
    ],
  },
  {
    id: 15,
    title: 'Oppsummering: nynorske pronomen',
    url: '#1',
    ingress: 'Lag deg ei enkel oversikt over pronomena som er ulike i bokmål og nynorsk. Kjekt å ha!',
    labels: ['Tilleggsstoff', 'Øvelse', 'Oppgave'],
    contexts: [{ breadcrumb: ['Språket som system', 'Nynorskkurs'], url: '#1' }],
  },
  {
    id: 16,
    title: 'Spørjeord',
    url: '#1',
    ingress: 'Enkel gjennomgang av spørjeorda i nynorsk.',
    labels: ['Tilleggsstoff', 'Øvelse', 'Oppgave'],
    contexts: [{ breadcrumb: ['Språket som system', 'Heilt grei nynorsk'], url: '#1' }],
  },
  {
    id: 17,
    title: 'Sterke verb',
    url: '#1',
    ingress:
      'Sterke verb er ein type verb som vi har i både bokmål og nynorsk. Ein del av dei er svært mykje brukte. Nokon av dei viktigaste sterke verba bør du kunne bøye utanåt.',
    labels: ['Tilleggsstoff', 'Øvelse', 'Oppgave'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/46762?width=600',
      alt: 'Person som hoppar over ordet verb. Illustrasjon.',
    },
    contexts: [{ breadcrumb: ['Språket som system', 'Heilt grei nynorsk'], url: '#1' }],
  },
];

const resourcesLearningPathResults = [
  {
    id: 14,
    title: 'Lær deg myk filmklipping',
    url: '#1',
    ingress:
      'Bli bedre på å klippe usynlige overganger når du jobber med levende bilder. Her er noen praktiske øvelser i redigering.',
    labels: ['Medieuttrykk Vg1', 'Video'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/51786?width=600',
      alt: 'Bilde',
    },
    contexts: [
      {
        breadcrumb: ['Salg og markedsføring (SS-RLV Vg2)', 'Webdesign'],
        url: '#1',
      },
    ],
  },
  {
    id: 15,
    title: 'Norsk næringsutvikling 1500–1800',
    url: '#1',
    ingress: 'Læringssti om næringsutviklingen i Norge i perioden 1500–1800.',
    labels: ['Norge 1500–1800', 'Næringslivet i Norge 1500–1800'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/41345?width=600',
      alt: 'Bilde',
    },
    contexts: [
      {
        breadcrumb: ['Salg og markedsføring (SS-RLV Vg2)', 'Webdesign'],
        url: '#1',
      },
    ],
  },
  {
    id: 16,
    title: 'Ideskapning og mediedesign 10',
    url: '#1',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    labels: ['h5p', 'Simulering', 'Oppgave'],
    contexts: [
      {
        breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
        url: '#1',
      },
    ],
  },
];

const resourcesAssessmentResults = [
  {
    id: 15,
    title: 'Hva kan du om armering?',
    url: '#1',
    ingress: 'Quiz om armering i betong.',
    labels: ['Egenvurdering'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/10866?width=600',
      alt: 'Skjøtearmering til ringmur. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Praktisk yrkesutøvelse (BA Vg1)', 'Yrkesutøvelse', 'Betongarbeideren'],
        url: '#1',
      },
    ],
  },
  {
    id: 16,
    title: 'Informasjonsfilm mot nettmobbing – vurderingsskjema',
    url: '#1',
    ingress: 'Forslag til vurderingskriterier for et praktisk arbeidsoppdrag.',
    labels: ['Egenvurdering'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/22186?width=600',
      alt: 'Jente som huker av for grønt. Manipulert foto.',
    },
    contexts: [
      {
        breadcrumb: [
          'Medieuttrykk og mediesamfunnet Vg2 og Vg3',
          'Tverrfaglige medieoppdrag',
          'Tverrfaglige arbeidsoppdrag nivå 2',
        ],
        url: '#1',
      },
    ],
  },
  {
    id: 17,
    title: 'Ideskapning og mediedesign 10',
    url: '#1',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    labels: ['h5p', 'Simulering', 'Oppgave'],
    contexts: [
      {
        breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
        url: '#1',
      },
    ],
  },
];

const resourcesExternalResults = [
  {
    id: 10810,
    title: 'Veggmonterte panelovner',
    ingress: 'Lær om veggmonterte panelovner, som finnes i de fleste norsk hjem.',
    url: '#10810',
    labels: ['Ekstern lenke'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/51711?width=600',
      alt: 'Panelovn montert ved gulvet under vinduet. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Elektro og datateknologi Vg1', 'Energisystemer', 'Elektro i boliger', 'Varme og varmestyring'],
        url: '#1',
      },
    ],
  },
  {
    id: 14422,
    title: 'Kostyme',
    ingress:
      'Dette er en tverrfaglig ressurs i fagene norsk og produksjon på design og håndverk. I denne oppgaven skal du jobbe med kostyme.',
    url: '#14422',
    labels: ['FYR-ressurs'],
    img: null,
    contexts: [
      {
        breadcrumb: ['Design og håndverk Vg1 2019-2020', 'Tverrfaglige arbeidsoppdrag'],
        url: '#1',
      },
      {
        breadcrumb: ['Design og håndverk Vg1 2019-2020', 'Tverrfaglige arbeidsoppdrag'],
        url: '#2',
      },
    ],
  },
  {
    id: 14421,
    title: 'Bokomslag',
    ingress:
      'Dette er en tverrfaglig ressurs i fagene norsk og produksjon på desing og håndverk. I oppgaven skal du lage illustrasjon til et bokomslag.',
    url: '#14421',
    labels: ['FYR-ressurs'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/4656?width=600',
      alt: 'En mann som måler og tegner. Bilde.',
    },
    contexts: [
      {
        breadcrumb: ['Design og håndverk Vg1 2019-2020', 'Tverrfaglige arbeidsoppdrag'],
        url: '#1',
      },
      {
        breadcrumb: ['Design og håndverk Vg1 2019-2020', 'Tverrfaglige arbeidsoppdrag'],
        url: '#2',
      },
    ],
  },
  {
    id: 14420,
    title: 'Profilering',
    ingress:
      'Dette er en tverrfaglig ressurs i fagene norsk og kvalitet og dokumentasjon på design og håndverk. Oppgaven handler om å presentere et produkt ved å lage en film.',
    url: '#14420',
    labels: ['FYR-ressurs'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/10311?width=600',
      alt: 'Film',
    },
    contexts: [
      {
        breadcrumb: ['Design og håndverk Vg1 2019-2020', 'Tverrfaglige arbeidsoppdrag'],
        url: '#1',
      },
      {
        breadcrumb: ['Design og håndverk Vg1 2019-2020', 'Tverrfaglige arbeidsoppdrag'],
        url: '#2',
      },
    ],
  },
  {
    id: 13694,
    title: 'Oppslagsverk for feltarbeid',
    ingress:
      'På denne siden finner du lenker til oppslagsverk du kan bruke når du skal finne navn på og lese om ulike arter.',
    url: '#13694',
    labels: ['Delt læringsressurs'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/40884?width=600',
      alt: 'En ung kvinne ser på en plante i et forstørrelsesglass. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Naturfag Påbygg', 'Bærekraftig utvikling', 'Feltarbeid – vi undersøker et økosystem'],
        url: '#1',
      },
      {
        breadcrumb: ['Naturfag Påbygg', 'Bærekraftig utvikling', 'Feltarbeid – vi undersøker et økosystem'],
        url: '#2',
      },
      {
        breadcrumb: ['Naturfag Påbygg', 'Nyttig fra naturfag', 'Verktøy'],
        url: '#3',
      },
      {
        breadcrumb: ['Naturfag Påbygg', 'Nyttig fra naturfag', 'Verktøy'],
        url: '#4',
      },
      { breadcrumb: ['Naturfag', 'Nyttig i naturfag', 'Verktøy'], url: '#5' },
      { breadcrumb: ['Naturfag', 'Nyttig i naturfag', 'Verktøy'], url: '#6' },
      { breadcrumb: ['Naturfag', 'Nyttig i naturfag', 'Verktøy'], url: '#7' },
      { breadcrumb: ['Naturfag', 'Nyttig i naturfag', 'Verktøy'], url: '#8' },
      { breadcrumb: ['Naturfag', 'Nyttig i naturfag', 'Verktøy'], url: '#9' },
      { breadcrumb: ['Naturfag', 'Nyttig i naturfag', 'Verktøy'], url: '#10' },
      { breadcrumb: ['Naturfag', 'Nyttig i naturfag', 'Verktøy'], url: '#11' },
      { breadcrumb: ['Naturfag', 'Nyttig i naturfag', 'Verktøy'], url: '#12' },
      { breadcrumb: ['Naturfag', 'Nyttig i naturfag', 'Verktøy'], url: '#13' },
      { breadcrumb: ['Naturfag', 'Nyttig i naturfag', 'Verktøy'], url: '#14' },
      { breadcrumb: ['Naturfag', 'Nyttig i naturfag', 'Verktøy'], url: '#15' },
      { breadcrumb: ['Naturfag', 'Nyttig i naturfag', 'Verktøy'], url: '#16' },
      {
        breadcrumb: ['Naturbruk Vg1', 'Naturgrunnlaget', 'Økologi og kretsløp'],
        url: '#17',
      },
      {
        breadcrumb: ['Naturbruk Vg1', 'Naturgrunnlaget', 'Økologi og kretsløp'],
        url: '#18',
      },
    ],
  },
];

const resourcesSourceMaterialResults = [
  {
    id: 15,
    title: 'The Program',
    url: '#1',
    ingress:
      'The Program handler om sykkelsport, doping og kritisk sportsjournalistikk. Etter å ha overlevd kreft vant Lance Armstrong Tour de France sju ganger.',
    labels: ['Dokumentarfilm'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/1209?width=600',
      alt: 'Utsnitt fra filmen The Program.',
    },
    contexts: [
      {
        breadcrumb: ['NDLA film', 'Folkehelse og livsmestring', 'Helse'],
        url: '#1',
      },
    ],
  },
  {
    id: 16,
    title: 'Bibelens skapelsesberetning',
    url: '#1',
    ingress: 'Eirin Edvardsen forteller Bibelens skapelsesberetning.',
    labels: ['Kortfilm', 'Tilleggsstoff'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/36701?width=600',
      alt: 'Detalj fra adams tilblivelse av michelangelo.maleri.',
    },
    contexts: [
      {
        breadcrumb: ['Religion og etikk', 'Metoder for utforsking og dialog', 'Metoder for utforskning'],
        url: '#1',
      },
    ],
  },
  {
    id: 19,
    title: 'Ideskapning og mediedesign 10',
    url: '#1',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    labels: ['h5p', 'Simulering', 'Oppgave'],
    contexts: [
      {
        breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
        url: '#1',
      },
    ],
  },
  {
    id: 20,
    title: 'Norske krigsforlis under 1. verdenskrig',
    url: '#1',
    ingress:
      'Den norske handelsflåten ble hardt rammet av tyskernes ubåtkrig i 1. verdenskrig. Omtrent 2000 norske sjømenn mistet livet.',
    labels: ['Historisk materiale'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/9471?width=600',
      alt: 'Skip som blir torpedert av ubåt',
    },
    contexts: [
      {
        breadcrumb: [
          'Historie Vg2 og Vg3',
          'Samfunn og mennesker i tid',
          'Krig og konflikter',
          'Første verdenskrig – krigen som forandret Europa for godt',
        ],
        url: '#1',
      },
    ],
  },
  {
    id: 21,
    title: 'Gjemt bak en e-post',
    url: '#1',
    ingress: 'Den kritiske journalistikken angripes fra mange hold. Et av de farligste angrepene kommer som e-post.',
    labels: ['Litterære tekster'],
    img: {
      url: 'https://api.ndla.no/image-api/raw/id/8576?width=600',
      alt: 'øye som titter ut av a-tegnet i alfakrøll. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Medie- og informasjonskunnskap', 'Mediekritikk og medieforskning', 'Mediekritikk'],
        url: '#1',
      },
    ],
  },
];

const multidiscinplinaryResults = [
  {
    id: 22277,
    title: 'Kan ungdommen redde klimaet?',
    ingress:
      'Klimaspørsmålet står sentralt i temaet bærekraftig utvikling. 16-årige Greta Thunberg startet sin kamp for klimaet med en skolestreik. Hva kan du gjøre?',
    url: '#22277',
    labels: [],
    img: {
      url: 'https://api.staging.ndla.no/image-api/raw/id/44263?width=600',
      alt: 'Greta Thunberg protesterer utenfor Sveriges Riksdag i august 2018. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Bærekraftig utvikling', 'Klimaendringer'],
        url: '#1',
      },
    ],
    filters: ['Demokrati og medborgerskap', 'Bærekraftig utvikling'],
  },
  {
    id: 22279,
    title: 'Fuck fossils – en framtid du ikke vil ha',
    ingress:
      'Fuck fossils – en framtid du ikke vil ha er en fiksjonsfilm som handler om hvordan hverdagen vil kunne arte seg i år 2050',
    url: '#22279',
    labels: [],
    img: {
      url: 'https://api.staging.ndla.no/image-api/raw/id/43699?width=600',
      alt: 'Kvinne sitter foran stort kontrollpanel med berøringsskjerm. Foto.',
    },
    contexts: [
      {
        breadcrumb: ['Bærekraftig utvikling', 'Klimaendringer'],
        url: '#1',
      },
    ],
    filters: ['Demokrati og medborgerskap', 'Bærekraftig utvikling'],
  },
];

const searchSubjectTypeOptions = [
  {
    label: 'Emne',
    value: 'topic',
  },
  {
    label: 'Fagstoff',
    value: 'subject-material',
  },
  {
    label: 'Oppgaver og aktiviteter',
    value: 'tasks-and-activities',
  },
  {
    label: 'Læringssti',
    value: 'learning-path',
    selected: false,
  },
  {
    label: 'Vurderingsressurs',
    value: 'assessment-resources',
  },
  {
    label: 'Ekstern læringsressurs',
    value: 'external-learning-resources',
  },
  {
    label: 'Kildemateriale',
    value: 'source-material',
  },
  {
    label: 'Tverrfaglig case',
    value: 'multidisciplinary-topic',
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
};

export {
  topicResults,
  subjectMaterialResults,
  searchSubjectTypeOptions,
  subjectTypeResults,
  resourcesTasksAndActivitiesResults,
  resourcesLearningPathResults,
  resourcesAssessmentResults,
  resourcesExternalResults,
  resourcesSourceMaterialResults,
  multidiscinplinaryResults,
};
