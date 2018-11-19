import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import SafeLink from '../common/SafeLink';
import { CompetenceGoalShape } from '../shapes';

const classes = new BEMHelper({
  name: 'competence-goals',
  prefix: 'c-',
});

export const CompetenceGoal = ({ goal }) => {
  const content = goal.url ? (
    <SafeLink to={goal.url}>{goal.name}</SafeLink>
  ) : (
    goal.name
  );

  return <li {...classes('topic-item')}>{content}</li>;
};

CompetenceGoal.propTypes = {
  goal: CompetenceGoalShape,
};

export const CompetenceGoalList = ({ goals, ...rest }) => (
  <ul {...classes('topic-list')} {...rest}>
    {goals.map(goal => (
      <CompetenceGoal key={goal.id} goal={goal} />
    ))}
  </ul>
);
CompetenceGoalList.propTypes = {
  goals: PropTypes.arrayOf(CompetenceGoalShape).isRequired,
};

export default CompetenceGoalList;
