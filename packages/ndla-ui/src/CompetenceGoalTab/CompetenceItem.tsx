/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { MenuBook } from '@ndla/icons/action';
import { spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import CompetenceGoalItem from './CompetenceGoalItem';
import { CompetenceGoalsItemType, CoreElementsItemType } from '../types';
import CoreElementItem from './CoreElementItem';

const GroupedGoalsWrapper = styled.div`
  margin: 24px 0 52px;
`;

const GroupedGoalsTitleWrapper = styled.div`
  border-bottom: 1px solid #d1d6db;
`;
const GroupedGoalsTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
  svg {
    width: 24px;
    height: 24px;
  }
`;

const GoalsInfo = styled.p`
  margin: 0;
`;

const GoalList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  list-style-image: none;
`;

const GroupedCoreItemsWrapper = styled.div`
  margin: 24px 0 52px;
`;

export type CompetenceTypeProps = 'competenceGoals' | 'coreElement';
export type CompetenceGoals = {
  title: string;
  elements: CompetenceGoalsItemType[];
};
export type CoreElementItems = {
  title?: string;
  elements: CoreElementsItemType[];
};
export type ListItemProp = {
  id: string;
  title: string;
  type: CompetenceTypeProps;
  groupedCompetenceGoals?: CompetenceGoals[];
  groupedCoreElementItems?: CoreElementItems[];
};
export type ListItemProps = {
  item: ListItemProp;
  isOembed?: boolean;
};

const CompetenceItem = ({ item, isOembed }: ListItemProps) => {
  const { t } = useTranslation();
  const { type, groupedCompetenceGoals, groupedCoreElementItems } = item;

  switch (type) {
    case 'competenceGoals':
      return (
        <>
          {groupedCompetenceGoals?.map((group) => (
            <GroupedGoalsWrapper key={group.title}>
              <GroupedGoalsTitleWrapper>
                <hgroup>
                  <GroupedGoalsTitle>
                    <MenuBook />
                    {group.title}
                  </GroupedGoalsTitle>
                  <GoalsInfo>{t('competenceGoals.competenceGoalTitle')}</GoalsInfo>
                </hgroup>
              </GroupedGoalsTitleWrapper>
              {group.elements.length > 0 && (
                <GoalList>
                  {group.elements.map((goal) => (
                    <CompetenceGoalItem
                      key={goal.id}
                      id={goal.id}
                      title={goal.title}
                      goals={goal.goals}
                      isOembed={isOembed}
                    />
                  ))}
                </GoalList>
              )}
            </GroupedGoalsWrapper>
          ))}
        </>
      );
    case 'coreElement':
      return (
        <>
          {groupedCoreElementItems?.map((group) => (
            <GroupedCoreItemsWrapper key={group.title}>
              <GroupedGoalsTitle>
                <MenuBook />
                {group.title}
              </GroupedGoalsTitle>
              <GoalList>
                {group.elements.map((coreItem) => (
                  <CoreElementItem
                    key={coreItem.id}
                    id={coreItem.id}
                    title={coreItem.title}
                    text={coreItem.text}
                    url={coreItem.url}
                    isOembed={isOembed}
                  />
                ))}
              </GoalList>
            </GroupedCoreItemsWrapper>
          ))}
        </>
      );
    default:
      return null;
  }
};

export default CompetenceItem;
