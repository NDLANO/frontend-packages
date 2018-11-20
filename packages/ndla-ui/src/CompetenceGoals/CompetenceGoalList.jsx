import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { mq, breakpoints, fonts } from '@ndla/core';

import { classes } from './CompetenceGoals';
import SafeLink from '../common/SafeLink';
import { CompetenceGoalShape } from '../shapes';

const StyledListItem = styled('li')`
  ${mq.range({ until: breakpoints.tablet })} {
    ${fonts.sizes(16, 1.5)};
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CompetenceGoal = ({ goal }) => {
  const content = goal.url ? (
    <SafeLink to={goal.url}>{goal.name}</SafeLink>
  ) : (
    goal.name
  );

  return <StyledListItem {...classes('topic-item')}>{content}</StyledListItem>;
};

CompetenceGoal.propTypes = {
  goal: CompetenceGoalShape,
};

const StyledList = styled('ul')`
  margin: 0 0 0 18px;
  padding: 0;
  max-width: 650px;
  ${mq.range({ from: breakpoints.desktop })} {
    margin: 0;
  }
`;

export const CompetenceGoalList = ({ goals, ...rest }) => (
  <StyledList {...classes('topic-list')} {...rest}>
    {goals.map(goal => (
      <CompetenceGoal key={goal.id} goal={goal} />
    ))}
  </StyledList>
);
CompetenceGoalList.propTypes = {
  goals: PropTypes.arrayOf(CompetenceGoalShape).isRequired,
};

export default CompetenceGoalList;
