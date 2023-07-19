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
import { colors, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import CompetenceGoalItem from './CompetenceGoalItem';
import { CompetenceGoalsItemType, CoreElementsItemType } from '../types';
import CoreElementItem from './CoreElementItem';

const GroupedElementWrapper = styled.div`
  margin: ${spacing.normal} 0 ${spacing.large};
`;

const GroupedGoalsTitleWrapper = styled.div`
  border-bottom: 1px solid ${colors.brand.neutral7};
`;
const GroupedGoalsTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
  svg {
    width: ${spacing.normal};
    height: ${spacing.normal};
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
            <GroupedElementWrapper key={group.title}>
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
            </GroupedElementWrapper>
          ))}
        </>
      );
    case 'coreElement':
      return (
        <>
          {groupedCoreElementItems?.map((group) => (
            <GroupedElementWrapper key={group.title}>
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
            </GroupedElementWrapper>
          ))}
        </>
      );
    default:
      return null;
  }
};

export default CompetenceItem;
