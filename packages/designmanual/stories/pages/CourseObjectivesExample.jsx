import React from 'react';
import PropTypes from 'prop-types';

import { CourseObjectivesDialog, CourseObjectives } from 'ndla-ui';

const CourseObjectivesExample = ({ headingId, multi }) => {
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

  if (multi) {
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
  }

  return (
    <CourseObjectives
      id={multi ? 'course-objectives-multi' : 'course-objectives'}
      headingId={headingId}
      messages={{
        heading: 'Kompetansemål og læreplan',
        description: 'Mål for opplæring er at elevene skal kunne',
      }}
      topics={topics}
    />
  );
};

CourseObjectivesExample.propTypes = {
  headingId: PropTypes.string,
  multi: PropTypes.bool,
};

export default CourseObjectivesExample;

export const CourseObjectivesDialogExample = () => (
  <CourseObjectivesDialog
    id="course-objectives-dialog"
    messages={{
      buttonText: 'Kompetansemål',
      closeButtonText: 'Lukk',
    }}>
    {headingId => <CourseObjectivesExample headingId={headingId} />}
  </CourseObjectivesDialog>
);
