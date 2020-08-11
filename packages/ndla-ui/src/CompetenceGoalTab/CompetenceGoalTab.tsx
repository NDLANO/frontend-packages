import React, { useState } from 'react';
import styled from '@emotion/styled';
// mq, breakpoints,
import { spacing } from '@ndla/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import Button from '@ndla/button';
import CompetenceItem, {
  ListItemProp,
  CompetenceTypeProps,
} from './CompetenceItem';

type CompetenceProps = {
  title: string;
  list: [ListItemProp];
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

const Wrapper = styled.div`
  h2 {
    margin: 0 0 ${spacing.medium};
  }
  h3 {
    margin: ${spacing.xxsmall} 0 ${spacing.small};
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
`;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  button {
    margin: 8px;
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const CompetenceGoalTab = ({ title, list, t }: CompetenceProps) => {
  const [currentTabItem, setCurrentTab] = useState(list[0]);
  const tabLabelTextbyType = (type: CompetenceTypeProps) => {
    switch (type) {
      case 'LK06':
        return t('competenceGoals.competenceTabLK06label');
      case 'LK20':
        return t('competenceGoals.competenceTabLK20label');
      case 'coreElement':
        return t('competenceGoals.competenceTabCorelabel');
      default:
        return '';
    }
  };

  return (
    <Wrapper>
      {title && title !== '' ? <Title>{title}</Title> : null}
      <TabWrapper>
        {list.map((tabItem, index: number) => {
          const { id, type } = tabItem;
          return (
            <Button
              borderShape="rounded"
              lighter={id !== currentTabItem.id}
              size="normal"
              onClick={() => setCurrentTab(list[index])}
              key={`tabitem-${id}`}>
              {tabLabelTextbyType(type)}
            </Button>
          );
        })}
      </TabWrapper>
      <CompetenceItem item={currentTabItem} t={t} />
    </Wrapper>
  );
};

export default injectT(CompetenceGoalTab);
