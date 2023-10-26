import { ComponentType } from 'react';
import AudioPlayerExamples from './components/AudioExample';
import FactBoxExample from './components/FactBoxExample';
import SolutionExample from './components/SolutionExample';
import Markdown from './components/Markdown';

export interface Story {
  title?: string;
  lead?: string;
  imageUrl?: string;
  body?: (ImageBody | ComponentBody | TextBody | LinkBody)[];
}

interface Body<Type extends string, Content> {
  type: Type;
  content: Content;
}

type ImageBody = Body<'image', string>;
type ComponentBody = Body<'component', ComponentType>;
type TextBody = Body<'text', string>;
type LinkBody = Body<'link', { href: string; text: string }>;

export type StoryType =
  | 'Paragraph'
  | 'FactASide'
  | 'Table'
  | 'BodyBox'
  | 'Details'
  | 'Blueprint'
  | 'Images'
  | 'Videos'
  | 'Audios'
  | 'Podcasts'
  | 'H5P'
  | 'ResourceFromLink'
  | 'File'
  | 'RelatedArticle'
  | 'userAgreements'
  | 'userLicense'
  | 'MetaKeyword'
  | 'MetaDescription'
  | 'MetaImage'
  | 'VisualElement'
  | 'TaxonomyContentTypes'
  | 'TaxonomySubjectConnections'
  | 'TaxonomyTopicConnections'
  | 'TaxonomySubjectFilters'
  | 'Markdown'
  | 'CodeBlock'
  | 'Concept'
  | 'ConceptList'
  | 'BlogPost'
  | 'status'
  | 'ContactBlock'
  | 'Grid'
  | 'KeyFigure';

export const stories: Record<StoryType, Story> = {
  Paragraph: {
    title: 'Paragraf',
    lead: 'Dette lager en ny seksjon i teksten. Det skiller seg fra et hard linjeskrift..',
  },
  FactASide: {
    title: 'Faktaboks',
    lead: 'Denne funksjonen setter inn en faktaboks i teksten. En faktaboks er et avgrenset område i teksten med en ramme rundt seg. Den kan ha en overskrift og en kort mengde tekst. Marker teksten du ønsker som tittel og velg H1 fra verktøyslinjen.',
    body: [
      {
        type: 'component',
        content: FactBoxExample,
      },
    ],
  },
  Table: {
    title: 'Tabeller',
    lead: 'Tabeller skal brukes til å presentere data (tabulære data), ikke til utforming. Det anbefales å holde tabellene så enkle som mulig. Ved mer kompleksitet kan data heller deles opp i flere tabeller.',
  },
  BodyBox: {
    title: '',
    lead: 'Tekst i ramme kan brukes for å framheve noe av særlig interesse, annet enn sitat',
    body: [
      {
        type: 'text',
        content: 'Teksten bør være kortfattet og ikke ha mer enn omtrent 100 ord eller 500 tegn.',
      },
    ],
  },
  Details: {
    title: 'Ekspanderbar boks',
    lead: 'En ekspanderbar boks består av en tittel som er synlig og en kort tekst som er skjult. Brukeren kan klikke på en liten pil til venstre og utvide boksen for å se hele teksten.',
  },

  Blueprint: {
    title: 'Fasitboks',
    lead: 'En ekspanderende fasitboks, primært tiltenkt matte- og realfag hvor man ønsker å engasjere eleven til å finne riktig løsning selv først.',
    body: [
      {
        type: 'component',
        content: SolutionExample,
      },
    ],
  },
  Images: {
    title: 'Bilder',
    lead: 'Denne funksjonen lar deg legge til et bilde i teksten. Du kan søke frem bilder fra NDLA sitt arkiv eller laste opp et nytt. Klikk på bildet etter du har lagt det inn i artikkelen for å velge plassering, utsnitt, størrelse og bildetekst på bildet.',
    body: [
      {
        type: 'text',
        content: 'Se lenken under for mer informasjon om bilder, rettigheter, universal utformning, motiv, m.m.',
      },
      {
        type: 'link',
        content: {
          href: 'https://ndla.zendesk.com/hc/no/articles/4405380397714-KAPITTEL-7-Bruk-av-bilder',
          text: 'https://ndla.zendesk.com/hc/no/articles/4405380397714-KAPITTEL-7-Bruk-av-bilder',
        },
      },
    ],
  },
  Videos: {
    title: 'Video',
    lead: 'Denne funksjonen lar deg legge inn en video i artikkelen. Du kan søke frem videoer fra NDLA sin konto på Brightcove.',
  },
  Audios: {
    title: 'Lydfiler',
    lead: 'Denne funksjonen lar deg legge til en lydfil i artikkelen.',
    body: [
      {
        type: 'text',
        content: 'Når du har lagt til en lydfil kan du klikke på den for å velge type avspiller eller legge til tekst.',
      },
      {
        type: 'component',
        content: AudioPlayerExamples,
      },
    ],
  },
  Podcasts: {
    title: 'Podkastepisoder',
    lead: 'Denne funksjonen lar deg legge til en podkastepisode i artikkelen.',
  },
  H5P: {
    title: 'h5p',
    lead: 'H5P er oppgaver man kan legge til en artikkel. Dette hjelper brukeren å bedre huske hva som blir lest, skaper engasjement og gjør det gøyere å lære.',
    body: [
      {
        type: 'text',
        content:
          'Ønsker du å bruke eksisterende oppgaver vil du finne disse i listen. Du kan også søke deg fram eller filtrere listen for enklere finne det du leter etter.',
      },
      {
        type: 'text',
        content: 'For å legge til oppgaven trykker du "Use Resource"',
      },
      {
        type: 'text',
        content: 'Du kan også redigere en H5P eller lage en ny en. For mer informasjon se lenken under:',
      },
      {
        type: 'link',
        content: {
          href: 'https://h5p.org/',
          text: 'https://h5p.org/',
        },
      },
    ],
  },
  ResourceFromLink: {
    title: 'Ressurs fra lenke?',
    lead: 'Hva er dette?',
  },
  File: {
    title: 'Last opp filer til artikkel',
    lead: 'Denne funksjonen gir deg mulighet til å laste opp filer som brukeren kan laste ned. Eksempelvis PDF-filer e.l.',
  },
  RelatedArticle: {
    title: 'RelatedArticle',
    lead: 'Denne funksjonen lar deg lar deg vise og lenke til relaterte artikler.',
    body: [
      {
        type: 'text',
        content: 'Dette hjelper brukeren å få oversikt og lettere finne nyttige ressurser i konteksten de står i.',
      },
      {
        type: 'text',
        content: 'Artiklene det lenkes til kan være interne eller eksterne.',
      },
    ],
  },
  userAgreements: {
    title: 'Avtaler',
    lead: 'Avtaler beskriver lisensiering samt hvem som er rettighethavere, opphavspersoner m.m. for ressursen. I tilfeller hvor flere ressurser deler samme lisensiering anbefales det å bruke en avtale.',
    body: [
      {
        type: 'text',
        content:
          'Du kan opprette nye avtaler ved å bruke hovedmenyen med pluss-tegnet oppe til venstre og så trykke på "avtale" knappen',
      },
    ],
  },
  userLicense: {
    title: 'Lisenser',
    lead: 'Alle ressurser skal merkes med en lisensiering. I NDLA ønsker vi å bidra til deling og gjenbruk. Vi bruker derfor åpne lisenser så langt det er mulig.',
    body: [
      {
        type: 'text',
        content: 'Vi skal også ivareta alle rettigheter til åndsverk. For mer informasjon se:',
      },
      {
        type: 'link',
        content: {
          href: 'https://ndla.zendesk.com/hc/no/articles/4405386986898-KAPITTEL-10-Bruk-av-lisenser',
          text: 'https://ndla.zendesk.com/hc/no/articles/4405386986898-KAPITTEL-10-Bruk-av-lisenser',
        },
      },
    ],
  },
  MetaKeyword: {
    title: 'Nøkkelord',
    lead: 'Nøkkelord hjelper søkemotorer og søk intern på ndla.no og finne relevant og riktig innhold. Et nyttig tips er å legge til synonymer for ord som brukt i teksten eller som er relevant for ressursen',
  },
  MetaDescription: {
    title: 'Metabeskrivelse',
    lead: 'Metabeskrivelsen gir kort informasjon om hva emnebeskrivelsen inneholder. Den skal brukes til utlisting både eksternt, i f.eks. Google og på sosiale medier, og i emnelister på ndla.no.',
    body: [
      {
        type: 'text',
        content:
          'Den formuleres derfor slik at den er til hjelp både for de som søker på Internett, og for elevene våre når de orienterer seg på sidene våre og skaffer seg oversikt. Metabeskrivelsen bør beskrive essensen av innholdet og være en selvstendig tekst og er begrenset til 155 tegn.',
      },
    ],
  },
  MetaImage: {
    title: 'Metabilde',
    body: [
      {
        type: 'text',
        content:
          'Dette bildet skal kunne benyttes som bilde på emnekortene (både som bannerbilde og lite bannerbilde), ved visning i sosiale medier og ved opplisting i søkemotorer. Bildet må ha god pikselbredde, som f.eks. Scanpix-bilder.',
      },
      {
        type: 'text',
        content:
          'Metabilde kan settes forskjellig for hvert språk. Dersom metabilde ikke finnes vil det hentes automatisk fra et annet språk.',
      },
    ],
  },
  VisualElement: {
    title: 'Visuelt element',
    body: [
      {
        type: 'text',
        content:
          'Visuelt element kan settes forskjellig for hvert språk. Dersom visuelt element ikke finnes vil det hentes automatisk fra et annet språk.',
      },
    ],
  },
  TaxonomyContentTypes: {
    title: 'Innholdstyper',
    lead: 'Alle ressurser skal få en innholdstype. Du kan lese mer om innholdstyper i Brukskvalitetsplattformen',
    body: [
      {
        type: 'link',
        content: {
          href: 'https://ndla.zendesk.com/hc/no/articles/4405380403218-KAPITTEL-5-Innholdstyper',
          text: 'https://ndla.zendesk.com/hc/no/articles/4405380403218-KAPITTEL-5-Innholdstyper',
        },
      },
    ],
  },
  TaxonomySubjectConnections: {
    title: 'Emnetilknytninger',
    lead: 'For at en ressurs skal bli tilgjengelig i meny må den tilknyttes et (eller flere) emne.',
  },
  TaxonomyTopicConnections: {
    title: 'Emneplassering',
    lead: 'Her kan du velge hvor emnet skal ligge i taksonomi.',
    body: [
      {
        type: 'text',
        content:
          'OBS! Dersom du endrer plassering i taksonomi, vil ikke det gamle emnet slettes om det har underemner eller ressurser knyttet til seg.',
      },
    ],
  },
  TaxonomySubjectFilters: {
    title: 'Fagfilter',
    lead: 'Alle ressurser må ha ett eller fagfilter. Fagfilterene du kan velge mellom blir gitt utfra emnetilknytningen og derav faget det tilhører. Itillegg til å velge fagfilter kan velge om ressursen skal være tilleggsstoff og kjernestoff under hvert av fagfilterene.',
  },
  status: {
    title: 'Forklaring for ulike statuser',
    lead: 'Denne teksten kommer snart. Veeeldig snart!.',
  },
  Markdown: {
    title: 'Markdown',
    body: [
      {
        type: 'component',
        content: Markdown,
      },
    ],
  },
  CodeBlock: {
    title: 'CodeBlock',
    lead: 'Legg til formatert kodesnutt.',
    body: [
      {
        type: 'text',
        content: 'Vis og presenter kodesnutter formatert i valgt språk.',
      },
    ],
  },
  Concept: {
    title: 'Forklaring',
    lead: 'Legg til forklaring.',
    body: [
      {
        type: 'text',
        content: 'Søk opp og legg til forklaring som blokkvisning i artikkel.',
      },
    ],
  },
  ConceptList: {
    title: 'Forklaringsliste',
    lead: 'Legg til forklaringsliste.',
    body: [
      {
        type: 'text',
        content: 'Legg til en liste av forklaringer som blokkvisning i artikkel.',
      },
    ],
  },
  BlogPost: {
    title: 'Blogginnlegg',
    lead: 'Legg til et blogginnlegg',
    body: [{ type: 'text', content: 'Lim inn lenke til artikkel og legg til tittel for å generere en bloggpost.' }],
  },
  ContactBlock: {
    title: 'Kontaktblokk',
    lead: 'Legg til kontaktblokk',
    body: [{ type: 'text', content: 'Lag en kontaktblokk ved å legge til tittel, beskrivelse og bilde.' }],
  },
  Grid: {
    title: 'Grid',
    lead: 'Legg til grid',
    body: [{ type: 'text', content: 'Gjør det mulig å plassere embeds eller tekst i grid på enten 1x2 eller 1x4.' }],
  },
  KeyFigure: {
    title: 'Nøkkeltall',
    lead: 'Legg til nøkkeltall',
    body: [
      { type: 'text', content: 'Embed for å kunne legge til nøkkelinformasjon i form av bilde, tittel og deltittel.' },
    ],
  },
};
