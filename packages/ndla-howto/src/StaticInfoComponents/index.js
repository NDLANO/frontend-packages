import React from 'react';
import AudioPlayerExamples from './components/AudioExample';
import FactboxExample from './components/FactboxExample';

export const stories = {
  Paragraph: {
    title: 'Paragraf',
    lead: 'Lead tekst',
  },
  FactASide: {
    title: 'Faktaboks',
    lead:
      'Denne funksjonen setter inn en faktaboks i teksten. En faktaboks er et avgrenset område i teksten med en ramme rundt seg. Den kan ha en overskrift og en kort mengde tekst. Marker teksten du ønsker som tittel og velg H1 fra verktøyslinjen.',
    body: [
      {
        type: 'component',
        content: <FactboxExample />,
      },
    ],
  },
  Table: {
    title: 'Tabeller',
    lead:
      'Tabeller skal brukes til å presentere data (tabulære data), ikke til utforming. Det anbefales å holde tabellene så enkle som mulig. Ved mer kompleksitet kan data heller deles opp i flere tabeller.',
  },
  BodyBox: {
    title: 'Tekst i ramme',
    lead:
      'Tekst i ramme kan brukes for å framheve noe av særlig interesse, annet enn sitat',
    body: [
      {
        type: 'text',
        content:
          'Teksten bør være kortfattet og ikke ha mer enn omtrent 100 ord eller 500 tegn.',
      },
    ],
  },
  Details: {
    title: 'Ekspanderbar boks',
    lead:
      'En ekspanderbar boks består av en tittel som er synlig og en kort tekst som er skjult. Brukeren kan klikke på en liten pil til venstre og utvide boksen for å se hele teksten.',
  },
  Images: {
    title: 'Bilder',
    lead:
      'Denne funksjonen lar deg legge til et bilde i teksten. Du kan søke frem bilder fra NDLA sitt arkiv eller laste opp et nytt. Klikk på bildet etter du har lagt det inn i artikkelen for å velge plassering, utsnitt, størrelse og bildetekst på bildet.',
    body: [
      {
        type: 'text',
        content:
          'Se lenken under for mer informasjon om bilder, rettigheter, universal utformning, motiv, m.m.',
      },
      {
        type: 'link',
        content: {
          href: 'https://brukskvalitetsplattform.ndla.no/bruk-av-bilder.html',
          text: 'https://brukskvalitetsplattform.ndla.no/bruk-av-bilder.html',
        },
      },
    ],
  },
  Videos: {
    title: 'Video',
    lead:
      'Denne funksjonen lar deg legge inn en video i artikkelen. Du kan søke frem videoer fra NDLA sin konto på Brightcove og YouTube.',
  },
  Audios: {
    title: 'Lydfiler',
    lead: 'Denne funksjonen lar deg legge til en lydfil i artikkelen.',
    body: [
      {
        type: 'text',
        content:
          'Når du har lagt til en lydfil kan du klikke på den for å velge type avspiller eller legge til tekst.',
      },
      {
        type: 'component',
        content: <AudioPlayerExamples />,
      },
    ],
  },
  H5P: {
    title: 'H5P',
    lead:
      'H5P er oppgaver man kan legge til en artikkel. Dette hjelper brukeren å bedre huske hva som blir lest, skaper engasjement og gjør det gøyere å lære.',
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
        content:
          'Du kan også redigere en H5P eller lage en ny en. For mer informasjon se lenken under:',
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
    lead:
      'Denne funksjonen gir deg mulighet til å laste opp filer som brukeren kan laste ned. Eksempelvis PDF-filer e.l.',
  },
  RelatedArticle: {
    title: 'RelatedArticle',
    lead:
      'Denne funksjonen lar deg lar deg vise og lenke til relaterte artikler.',
    body: [
      {
        type: 'text',
        content:
          'Dette hjelper brukeren å få oversikt og lettere finne nyttige ressurser i konteksten de står i.',
      },
      {
        type: 'text',
        content: 'Artiklene det lenkes til kan være interne eller eksterne.',
      },
    ],
  },
};
