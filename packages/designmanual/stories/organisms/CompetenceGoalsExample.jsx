import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import { CompentenceGoals, ClickToggle } from 'ndla-ui';

const classes = BEMHelper('c-compentence-goals-dialog');

const CompentenceGoalsExample = ({ headingId, menu }) => {
  const topics = [
    {
      heading: 'Emne',
      items: [
        {
          text:
            'Planlegge, produsere og presentere tekst, lyd, stillbilder, levende bilder og kombinasjoner av disse i aktuelle formater og standarder til trykte og elektroniske medier',
        },
        {
          text:
            'bruke relevante metoder for kvalitetssikring av egen arbeidsprosess og eget produkt',
        },
        {
          text:
            'bruke tidsmessig verktøy, programvare og annet teknisk utstyr på en forsvarlig måte',
        },
      ],
    },
  ];

  let filterOptions = null;
  let filterValues = null;

  if (menu) {
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

    filterValues = ['Medieuttrykk'];
  }

  return (
    <CompentenceGoals
      menu={menu}
      subjectName={menu ? 'Fag' : null}
      id={menu ? 'compentence-goals-menu' : 'compentence-goals'}
      headingId={headingId}
      filterOptions={filterOptions}
      filterValues={filterValues}
      messages={{
        heading: 'Kompetansemål',
        description: 'Mål for opplæring er at elevene skal kunne',
      }}
      topics={topics}
    />
  );
};

CompentenceGoalsExample.propTypes = {
  headingId: PropTypes.string,
  menu: PropTypes.bool,
};

export default CompentenceGoalsExample;

export const CompentenceGoalsDialogExample = ({ narrow, wide, headingId }) => (
  <ClickToggle
    useDialog
    id="useArticleId"
    labelledby={headingId}
    dialogModifier='large'
    buttonClassName={classes('toggle-button', { wide, narrow }).className}
    title="Kompetansemål"
    openTitle="Lukk boks"
    renderAsLightButton>
    <CompentenceGoalsExample headingId={headingId} />
  </ClickToggle>
);

CompentenceGoalsDialogExample.propTypes = {
  narrow: PropTypes.bool,
  wide: PropTypes.bool,
  headingId: PropTypes.string,
};

CompentenceGoalsDialogExample.defaultProps = {
  narrow: false,
  wide: false,
  headingId: undefined,
};
