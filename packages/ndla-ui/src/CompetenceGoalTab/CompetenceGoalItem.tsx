/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts, spacing } from '@ndla/core';
import { injectT, tType } from '@ndla/i18n';
import { CompetenceGoalsItemType } from '../types';

const GoalItem = styled.li`
  margin: ${spacing.medium} 0;
  list-style-type: none;
  display: flex;
  font-size: 18px;
  line-height: 24px;
  border-bottom: 1px solid #d1d6db;
`;

const GoalWrapper = styled.div`
  width: 100%;
  padding-bottom: ${spacing.small};
`;

const GoalsLabel = styled.div`
  ${fonts.sizes('16px', '32px')};
  text-transform: uppercase;
`;

const GoalsHeading = styled.h3`
  margin-top: 0;
  font-weight: ${fonts.weight.semibold};
`;

const GoalListElement = styled.li`
  ${fonts.sizes('22px', '32px')};
`;

const CompetenceGoalItem = ({ title, goals, t }: CompetenceGoalsItemType & tType) => {
  return (
    <GoalItem>
      <GoalWrapper>
        <GoalsLabel>{t('competenceGoals.competenceGoalItem.title')}</GoalsLabel>
        <GoalsHeading>{title}</GoalsHeading>
        <ul>
          {goals.map(goal => (
            <GoalListElement>{goal.text}</GoalListElement>
          ))}
        </ul>
      </GoalWrapper>
    </GoalItem>
  );
};

export default injectT(CompetenceGoalItem);
