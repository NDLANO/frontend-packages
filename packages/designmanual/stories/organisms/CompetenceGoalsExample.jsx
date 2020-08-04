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
    name: 'Kompetansemål (KM)',
    description: 'Målet er at eleven skal kunne:',
    type: 'goals',
    goals: [
      {
        id: 'K15502',
        name:
          'gjøre rede for argumentasjonen i andres tekster og skrive egne argumenterende tekster på hovedmål og sidemål',
        /* url: '#1',
        subitems: [
          {
            type: 'core',
            name: 'Utforskning og problemløsning',
            resourceurl: '#',
          },
          {
            type: 'topic',
            name: 'Folkehelse og livsmestring',
            resourceurl: '#',
          },
          {
            type: 'subject',
            name: 'Utforskning og problemløsning',
            resourceurl: '#',
            linkitem: {
              label: 'Se alle kompetansemål i dette faget',
              url: '#',
            },
          },
        ], */
      },
      {
        id: 'K17637',
        name:
          'bruke og vurdere virkemidler og fortellerteknikker i medieuttrykk',
        /* url: '#2',
        subitems: [
          {
            type: 'core',
            name: 'Utforskning og problemløsning',
          },
          {
            type: 'topic',
            name: 'Folkehelse og livsmestring',
            resourceurl: '#',
          },
          {
            type: 'subject',
            name: 'Utforskning og problemløsning',
            linkitem: {
              label: 'Se alle kompetansemål i dette faget',
              url: '#',
            },
          },
        ], */
      },
      {
        id: 'K17635',
        name: 'lage budskap tilpasset målgruppe, formål og kanal',
      },
    ],
  },
  {
    id: 'tmpid2',
    // name: 'Kjerneelementer',
    name: 'Kompetansemål (LK20)',
    description: '',
    // type: 'coreElements',
    type: 'goals',
    goals: [
      {
        id: 'K15504',
        name:
          'gjøre rede for argumentasjonen i andres tekster og skrive egne argumenterende tekster på hovedmål og sidemål - Kjernestuff',
        // url: '#1',
      },
      {
        id: 'K176378',
        name:
          'bruke og vurdere virkemidler og fortellerteknikker i medieuttrykk -Kjernestuff',
        // url: '#1',
      },
      {
        id: 'K176353',
        name: 'lage budskap tilpasset målgruppe, formål og kanal - Kjernestuff',
        // url: '#1',
      }, 
    ],
  },
];

export const CompetenceGoalListExample = () => {
  return (
    <>
      <CompetenceGoalTab
        title="Helse- og oppvekstfag Vg1"
        subtitle="Finn læringsressurser ved å bruke læreplanen"
        list={CompetenceGoalTabdata}
      />
    </>
  );
};
