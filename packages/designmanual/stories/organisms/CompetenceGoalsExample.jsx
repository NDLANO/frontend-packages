import React from 'react';

import { CompetenceGoalTab } from '@ndla/ui';

const CompetenceGoalTabdata = [
  {
    id: 'tmpid1',
    type: 'competenceGoals',
    title: 'Kompetansemål (LK06)',
    groupedCompetenceGoals: [
      {
        title: 'Læreplan i norsk (NOR01-06)',
        elements: [
          {
            id: 'KV112',
            title: 'Vg2 yrkesfaglige utdanningsprogram (KV112)',
            goals: [
              {
                text:
                  'kombinere virkemidler og uttrykksformer kreativt i egen tekstskaping (KM1196)',
              },
            ],
          },
          {
            id: 'KV114',
            title: 'Vg1 studieforberedende utdanningsprogram (KV114)',
            goals: [
              {
                text:
                  'kombinere virkemidler og uttrykksformer kreativt i egen tekstskaping (KM1209)',
              },
            ],
          },
        ],
      },
      {
        title: 'Kompetansemål og vurdering produksjon og historiefortelling 2',
        elements: [
          {
            id: 'KV112',
            title: 'Vg2 yrkesfaglige utdanningsprogram (KV112)',
            goals: [
              {
                text:
                  'kombinere virkemidler og uttrykksformer kreativt i egen tekstskaping (KM1196)',
              },
            ],
          },
          {
            id: 'KV114',
            title: 'Vg1 studieforberedende utdanningsprogram (KV114)',
            goals: [
              {
                text:
                  'kombinere virkemidler og uttrykksformer kreativt i egen tekstskaping (KM1209)',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'tmpid2',
    type: 'competenceGoals',
    title: 'Kompetansemål (LK20)',
    groupedCompetenceGoals: [
      {
        title: 'Læreplan i norsk (NOR01-06)',
        elements: [
          {
            id: 'KV112',
            title: 'Vg2 yrkesfaglige utdanningsprogram (KV112)',
            goals: [
              {
                text:
                  'kombinere virkemidler og uttrykksformer kreativt i egen tekstskaping (KM1196)',
              },
            ],
          },
          {
            id: 'KV114',
            title: 'Vg1 studieforberedende utdanningsprogram (KV114)',
            goals: [
              {
                text:
                  'kombinere virkemidler og uttrykksformer kreativt i egen tekstskaping (KM1209)',
              },
            ],
          },
        ],
      },
      {
        title: 'Læreplan i medieuttrykk (MOK02-02)',
        elements: [
          {
            id: 'KV112',
            title: 'Vg2 yrkesfaglige utdanningsprogram (KV112)',
            goals: [
              {
                text:
                  'utføre arbeidsoppgaver knyttet til stell av dyr eller fisk basert på etiske retningslinjer og kunnskaper om orgamismens miljøkrav',
              },
            ],
          },
          {
            id: 'KV114',
            title: 'Vg1 studieforberedende utdanningsprogram (KV114)',
            goals: [
              {
                text:
                  'kombinere virkemidler og uttrykksformer kreativt i egen tekstskaping (KM1196)',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'tmpid3',
    type: 'coreElement',
    title: 'Kjernelement',
    groupedCoreElementItems: [
      {
        title: 'Læreplan i Vg1 informasjonsteknologi og medieproduksjon',
        elements: [
          {
            name: 'En tittel 1',
            id: 'tmpid4',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            goals: [
              {
                id: 'K15504',
                name:
                  'gjøre rede for argumentasjonen i andres tekster og skrive egne argumenterende tekster på hovedmål og sidemål - 2',
              },
              {
                id: 'K176378',
                name: 'bruke og vurdere virkemidler og fortellerteknikker i medieuttrykk - 2',
              },
              {
                id: 'K176353',
                name: 'lage budskap tilpasset målgruppe, formål og kanal - 2',
              },
            ],
          },
          {
            name: 'En tittel 2',
            id: 'tmpid5',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
        ],
      },
      {
        title: 'Læreplan i norsk',
        elements: [
          {
            name: 'En tittel 1',
            id: 'tmpid6',
            text:
              'Elevene skal kunne reflektere kritisk over hva slags påvirkningskraft og troverdighet tekster har. De skal kunne bruke og variere språklige og retoriske virkemidler hensiktsmessig i egne muntlige og skriftlige tekster. De skal vise digital dømmekraft og opptre etisk og reflektert i kommunikasjon med andre.',
            goals: [
              {
                id: 'K15504',
                name:
                  'gjøre rede for argumentasjonen i andres tekster og skrive egne argumenterende tekster på hovedmål og sidemål - 2',
              },
              {
                id: 'K176378',
                name: 'bruke og vurdere virkemidler og fortellerteknikker i medieuttrykk - 2',
              },
              {
                id: 'K176353',
                name: 'lage budskap tilpasset målgruppe, formål og kanal - 2',
              },
            ],
          },
          {
            name: 'En tittel 2',
            id: 'tmpid7',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
        ],
      },
    ],
  },
];

export const CompetenceGoalListExample = () => {
  return <CompetenceGoalTab title="Helse- og oppvekstfag Vg1" list={CompetenceGoalTabdata} />;
};
