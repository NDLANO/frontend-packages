/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { CompetenceGoalsItemType } from '../types';
import SearchButton from './SearchButton';
import { GoalItem, GoalList, GoalText, GoalsHeading, ListItemContent } from './styles';

const CompetenceGoalItem = ({ title, goals, isOembed }: CompetenceGoalsItemType) => {
  return (
    <GoalItem>
      <GoalsHeading>{title}</GoalsHeading>
      <GoalList>
        {goals.map((goal, index) => (
          <li key={`${goal.text}${index}`}>
            <ListItemContent>
              <GoalText>{goal.text}</GoalText>
              {goal.url && <SearchButton url={goal.url} id={goal.id} isOembed={isOembed} />}
            </ListItemContent>
          </li>
        ))}
      </GoalList>
    </GoalItem>
  );
};

export default CompetenceGoalItem;
