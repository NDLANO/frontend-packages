import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import SubjectConcept from './SubjectConcept';

const classes = BEMHelper('c-subject-concepts');

const SubjectConcepts = ({ concepts }) => (
  <section {...classes('')}>
    <ul {...classes('list')}>
      {concepts.map(concept => (
        <SubjectConcept
          key={`subjectconcept-${concept.id}`}
          concept={concept}
        />
      ))}
    </ul>
  </section>
);

SubjectConcepts.propTypes = {
  concepts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      source: PropTypes.string,
      content: PropTypes.string.isRequired,
      messages: PropTypes.shape({
        ariaLabel: PropTypes.string.isRequired,
        close: PropTypes.string.isRequired,
      }),
      license: PropTypes.string,
      children: PropTypes.string,
      visible: PropTypes.bool,
      closeCallback: PropTypes.func,
      dialogRef: PropTypes.func,
    }),
  ),
};

SubjectConcepts.defaultProps = {
  concepts: [],
};

export default SubjectConcepts;
