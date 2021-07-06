/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { injectT, tType } from '@ndla/i18n';
import { fonts } from '@ndla/core';
import { MenuBook } from '@ndla/icons/action';
import CompetenceGoalItem from './CompetenceGoalItem';
import { CompetenceGoalsItemType } from '../types';

const GroupedGoalsWrapper = styled.div`
  margin: 24px 0 52px;
`;

const GroupedGoalsTitleWrapper = styled.div`
  border-bottom: 1px solid #d1d6db;
`;
const GroupedGoalsTitle = styled.h3`
  ${fonts.sizes('22px', '32px')};
  margin-bottom: 0;
  display: flex;
`;

const GroupedGoalsTitleIcon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
`;

const GoalsInfo = styled.h4`
  ${fonts.sizes('22px', '32px')};
  margin-top: 0;
  font-weight: ${fonts.weight.normal};
`;

const Goals = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  list-style-image: none;
`;

const CoreItem = styled.div`
  margin: 16px 0 24px;
`;
const GroupedCoreItemsWrapper = styled.div`
  margin: 24px 0 52px;
`;

const CoreItemTitle = styled.h4`
  font-size: 20px;
`;
const CoreItemText = styled.p`
  font-size: 18px;
  line-height: 32px;
`;

export type CompetenceTypeProps = 'competenceGoals' | 'coreElement';
export type CompetenceGoals = {
  title?: string;
  elements: CompetenceGoalsItemType[];
};
export type CoreElementItems = {
  title?: string;
  elements: any;
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
};

const CompetenceItem = ({ item, t }: ListItemProps & tType) => {
  const { type, groupedCompetenceGoals, groupedCoreElementItems } = item;
  switch (type) {
    case 'competenceGoals':
      return (
        <>
          {groupedCompetenceGoals &&
            groupedCompetenceGoals.map(group => (
              <GroupedGoalsWrapper key={group.title}>
                <GroupedGoalsTitleWrapper>
                  {group.title && (
                    <GroupedGoalsTitle>
                      <GroupedGoalsTitleIcon>
                        <MenuBook style={{ width: '24px', height: '24px' }} />
                      </GroupedGoalsTitleIcon>
                      {group.title}
                    </GroupedGoalsTitle>
                  )}
                  <GoalsInfo>{t('competenceGoals.competenceGoalTitle')}</GoalsInfo>
                </GroupedGoalsTitleWrapper>
                {group.elements.length > 0 && (
                  <Goals>
                    {group.elements.map(goal => (
                      <CompetenceGoalItem
                        key={goal.id}
                        id={goal.id}
                        title={goal.title}
                        goals={goal.goals}
                      />
                    ))}
                  </Goals>
                )}
              </GroupedGoalsWrapper>
            ))}
        </>
      );
    case 'coreElement':
      return (
        <>
          {groupedCoreElementItems &&
            groupedCoreElementItems.map((group: any) => (
              <GroupedCoreItemsWrapper key={group.title}>
                {group.title && (
                  <GroupedGoalsTitle>
                    <GroupedGoalsTitleIcon>
                      <MenuBook style={{ width: '24px', height: '24px' }} />
                    </GroupedGoalsTitleIcon>
                    {group.title}
                  </GroupedGoalsTitle>
                )}
                {group.elements.map((coreItem: any) => (
                  <CoreItem key={coreItem.id}>
                    {coreItem.name && <CoreItemTitle>{coreItem.name}</CoreItemTitle>}
                    {coreItem.text && <CoreItemText>{coreItem.text}</CoreItemText>}
                  </CoreItem>
                ))}
              </GroupedCoreItemsWrapper>
            ))}
        </>
      );
    default:
      return null;
  }
};

export default injectT(CompetenceItem);
