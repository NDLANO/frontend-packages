/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts, spacing, mq, breakpoints } from '@ndla/core';
import { Search } from '@ndla/icons/common';
import { SafeLinkButton } from '@ndla/safelink';
import { useTranslation } from 'react-i18next';
import { CompetenceGoalsItemType } from '../types';

const GoalItem = styled.li`
  margin: ${spacing.medium} 0;
  border-bottom: 1px solid #d1d6db;
`;

const GoalsHeading = styled.h3`
  margin-top: 0;
`;

const StyledSearch = styled(Search)`
  height: 24px;
  width: 24px;
  min-width: 24px;
`;

const GoalList = styled.ul`
  padding: 0;
`;

const GoalText = styled.p`
  margin: 0;
`;

const ListItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  ${fonts.sizes('22px', '32px')};
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
  }
`;

const GoalSearchWrapper = styled.div`
  margin-left: ${spacing.normal};
  flex: 0 0 289px;
  span {
    text-align: left;
  }

  ${mq.range({ until: breakpoints.tabletWide })} {
    margin-left: 0;
    margin-top: ${spacing.normal};
    flex-basis: auto;
  }
`;

const CompetenceGoalItem = ({ title, goals, isOembed }: CompetenceGoalsItemType) => {
  const { t } = useTranslation();
  return (
    <GoalItem>
      <GoalsHeading>{title}</GoalsHeading>
      <GoalList>
        {goals.map((goal, index) => (
          <li key={`${goal.text}${index}`}>
            <ListItemContent>
              <GoalText>{goal.text}</GoalText>
              {goal.url && (
                <GoalSearchWrapper>
                  <SafeLinkButton variant="outline" to={goal.url} target={isOembed ? '_blank' : '_self'}>
                    <StyledSearch size="large" />
                    <span>{t('competenceGoals.competenceGoalResourceSearchText', { goal: goal.id })}</span>
                  </SafeLinkButton>
                </GoalSearchWrapper>
              )}
            </ListItemContent>
          </li>
        ))}
      </GoalList>
    </GoalItem>
  );
};

export default CompetenceGoalItem;
