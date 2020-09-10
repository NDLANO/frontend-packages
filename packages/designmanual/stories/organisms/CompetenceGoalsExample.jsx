import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CompetenceGoals, CompetenceGoalTab } from '@ndla/ui';

class CompetenceGoalsExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValues: props.menu || props.search ? ['Medieuttrykk'] : [],
    };
  }

  render() {
    const { menu, search, subjectName } = this.props;
    const topics = [
      {
        heading: 'Emne',
        items: [
          {
            id: 'med-1',
            name:
              'Planlegge, produsere og presentere tekst, lyd, stillbilder, levende bilder og kombinasjoner av disse i aktuelle formater og standarder til trykte og elektroniske medier',
            url: '#1',
            text: 'demo',
          },
          {
            id: 'med-2',
            name:
              'bruke relevante metoder for kvalitetssikring av egen arbeidsprosess og eget produkt',
            url: '#2',
            text: 'demo',
          },
          {
            id: 'med-3',
            name:
              'bruke tidsmessig verktøy, programvare og annet teknisk utstyr på en forsvarlig måte',
            url: '#3',
            text: 'demo',
          },
        ],
      },
    ];

    let filterOptions = null;

    if (menu || search) {
      topics.push({
        heading: 'Emne 2',
        items: [
          {
            id: 'lorem 1',
            name: 'Lorum ipsum',
            text: 'demo',
          },
          {
            id: 'lorem 2',
            name: 'Lorum ipsum 2',
            text: 'demo',
          },
        ],
      });

      filterOptions = [
        {
          title: 'Medieuttrykk',
          value: 'Medieuttrykk',
        },
        {
          title: 'Mediesamfunnet',
          value: 'Mediesamfunnet',
        },
        {
          title: 'VG1',
          value: 'VG1',
        },
        {
          title: 'VG1',
          value: 'VG2',
        },
        {
          title: 'VG1',
          value: 'VG3',
        },
      ];
    }
    return (
      <CompetenceGoals
        menu={menu}
        search={search}
        subjectName={menu ? subjectName : null}
        filterOptions={!search ? filterOptions : null}
        filterValues={!search ? this.state.filterValues : null}
        onFilterClick={filterValues => {
          this.setState({ filterValues });
        }}
        description="Læreplan i medieuttrykk - felles programfag i utdanningsprogram for medier og kommunikasjon"
        messages={{
          heading: 'Kompetansemål og læreplan',
          listDescription: 'Mål for opplæring er at elevene skal kunne:',
        }}
        topics={topics}
      />
    );
  }
}

CompetenceGoalsExample.propTypes = {
  menu: PropTypes.bool,
  subjectName: PropTypes.string,
  search: PropTypes.bool,
};

export default CompetenceGoalsExample;

const CompetenceGoalTabdata = [
  {
    id: 'tmpid1',
    title: 'Kompetansemål (LK06)',
    type: 'LK06',
    groupedItems: [
      {
        name: 'Læreplan i matematikk fellesfag Vg1...',
        id: 'tmpid323',
        goals: [
          {
            id: 'K15504',
            name:
              'gjøre rede for argumentasjonen i andres tekster og skrive egne argumenterende tekster på hovedmål og sidemål - 2',
          },
          {
            id: 'K176378',
            name:
              'bruke og vurdere virkemidler og fortellerteknikker i medieuttrykk - 2',
          },
          {
            id: 'K176353',
            name: 'lage budskap tilpasset målgruppe, formål og kanal - 2',
          },
        ],
      },
      {
        name: 'Læreplan i matematikk fellesfag Vg1...',
        id: 'tmpid3342',
        goals: [
          {
            id: 'K15504',
            name:
              'gjøre rede for argumentasjonen i andres tekster og skrive egne argumenterende tekster på hovedmål og sidemål - 2',
          },
          {
            id: 'K176378',
            name:
              'bruke og vurdere virkemidler og fortellerteknikker i medieuttrykk - 2',
          },
          {
            id: 'K176353',
            name: 'lage budskap tilpasset målgruppe, formål og kanal - 2',
          },
        ],
      },
    ],
  },
  {
    id: 'tmpid2',
    title: 'Kompetansemål (LK20)',
    type: 'LK20',
    groupedItems: [
      {
        name: 'En tittel 1',
        id: 'tmpid32',
        goals: [
          {
            id: 'K15504',
            name:
              'gjøre rede for argumentasjonen i andres tekster og skrive egne argumenterende tekster på hovedmål og sidemål - 2',
          },
          {
            id: 'K176378',
            name:
              'bruke og vurdere virkemidler og fortellerteknikker i medieuttrykk - 2',
          },
          {
            id: 'K176353',
            name: 'lage budskap tilpasset målgruppe, formål og kanal - 2',
          },
        ],
      },
    ],
  },
  {
    id: 'tmpid3',
    title: 'Kjerneelement',
    type: 'coreElement',
    groupedItems: [
      {
        name: 'En tittel 1',
        id: 'tmpid4',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        goals: [
          {
            id: 'K15504',
            name:
              'gjøre rede for argumentasjonen i andres tekster og skrive egne argumenterende tekster på hovedmål og sidemål - 2',
          },
          {
            id: 'K176378',
            name:
              'bruke og vurdere virkemidler og fortellerteknikker i medieuttrykk - 2',
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
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ],
  },
];

export const CompetenceGoalListExample = () => {
  return (
    <CompetenceGoalTab
      title="Helse- og oppvekstfag Vg1"
      list={CompetenceGoalTabdata}
    />
  );
};
