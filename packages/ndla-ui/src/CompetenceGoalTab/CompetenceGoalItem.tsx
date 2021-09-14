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
import { useTranslation } from 'react-i18next';
import { CompetenceGoalsItemType } from '../types';
import SearchButton from './SearchButton';

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
const GoalList = styled.ul`
  padding: 0;
`;
const GoalListElement = styled.li`
  ${fonts.sizes('22px', '32px')};
`;
const GoalListElementInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const GoalSearchWrapper = styled.div`
  margin-left: ${spacing.normal};
`;

const CompetenceGoalItem = ({ title, goals }: CompetenceGoalsItemType) => {
  const { t } = useTranslation();
  return (
    <GoalItem>
      <GoalWrapper>
        <GoalsLabel>{t('competenceGoals.competenceGoalItem.title')}</GoalsLabel>
        <GoalsHeading>{title}</GoalsHeading>
        <GoalList>
          {goals.map((goal, index: number) => (
            <GoalListElement key={`${goal.text}${index}`}>
              <GoalListElementInnerWrapper>
                <div>{goal.text}</div>
                {goal.url && (
                  <GoalSearchWrapper>
                    <SearchButton to={goal.url} text={t('competenceGoals.competenceGoalResourceSearchText')} />
                  </GoalSearchWrapper>
                )}
              </GoalListElementInnerWrapper>
            </GoalListElement>
          ))}
        </GoalList>
      </GoalWrapper>
    </GoalItem>
  );
};

export default CompetenceGoalItem;
