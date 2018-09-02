import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import {
  CompetenceGoals,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from 'ndla-ui';

import { Trans } from 'ndla-i18n';

const classes = BEMHelper('c-competence-goals-dialog');

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
            text:
              'Planlegge, produsere og presentere tekst, lyd, stillbilder, levende bilder og kombinasjoner av disse i aktuelle formater og standarder til trykte og elektroniske medier',
            url: '#1',
          },
          {
            text:
              'bruke relevante metoder for kvalitetssikring av egen arbeidsprosess og eget produkt',
            url: '#2',
          },
          {
            text:
              'bruke tidsmessig verktøy, programvare og annet teknisk utstyr på en forsvarlig måte',
            url: '#3',
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
            text: 'Lorum ipsum',
          },
          {
            text: 'Lorum ipsum 2',
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

export const CompetenceGoalsDialogExample = ({ narrow, wide }) => (
  <Trans>
    {({ t }) => (
      <Modal
        activateButton={
          <Button lighter {...classes('toggle-button', { wide, narrow })}>
            {t('competenceGoals.showCompetenceGoals')}
          </Button>
        }
        narrow>
        {onClose => (
          <Fragment>
            <ModalHeader>
              <ModalCloseButton
                onClick={onClose}
                title={t('competenceGoals.closeCompetenceGoals')}
              />
            </ModalHeader>
            <ModalBody>
              <CompetenceGoalsExample />
            </ModalBody>
          </Fragment>
        )}
      </Modal>
    )}
  </Trans>
);

CompetenceGoalsDialogExample.propTypes = {
  narrow: PropTypes.bool,
  wide: PropTypes.bool,
};

CompetenceGoalsDialogExample.defaultProps = {
  narrow: false,
  wide: false,
};
