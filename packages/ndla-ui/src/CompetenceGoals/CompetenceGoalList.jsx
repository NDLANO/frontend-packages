import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { mq, breakpoints, fonts, spacing } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { classes } from './CompetenceGoals';
import { CompetenceGoalShape } from '../shapes';

export const CompetenceGoalListHeading = styled('p')`
  font-weight: ${fonts.weight.semibold};
  margin-bottom: ${spacing.small};
`;

const StyledListItem = styled('li')`
  line-height: ${spacing.normal};
  ${mq.range({ until: breakpoints.tablet })} {
    ${fonts.sizes(16, 1.5)};
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CompetenceGoal = ({ goal }) => {
  const content = goal.url ? <SafeLink to={goal.url}>{goal.name}</SafeLink> : goal.name;

  return <StyledListItem {...classes('topic-item')}>{content}</StyledListItem>;
};

CompetenceGoal.propTypes = {
  goal: CompetenceGoalShape,
};

const StyledList = styled('ul')`
  margin: 0 0 ${spacing.large} ${spacing.normal};
  padding: 0;
  max-width: 650px;
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
