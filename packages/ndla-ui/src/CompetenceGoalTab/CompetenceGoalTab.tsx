import React, { useState } from 'react';
import styled from '@emotion/styled';
// mq, breakpoints,
import { spacing } from '@ndla/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import Button from '@ndla/button';
import CompetenceItem, { ListItemProp } from './CompetenceItem';

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
  flex-wrap: wrap;
  button {
    margin: 8px 8px 8px 0;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const CompetenceGoalTab = ({ title, list, t }: CompetenceProps) => {
  const [currentTabItem, setCurrentTab] = useState(list[0]);

  return (
    <Wrapper>
      {title && title !== '' ? <Title>{title}</Title> : null}
      <TabWrapper>
        {list.map((tabItem, index: number) => {
          const { id, title: tabTitle } = tabItem;
          return (
            <Button
              borderShape="rounded"
              lighter={id !== currentTabItem.id}
              size="normal"
              onClick={() => setCurrentTab(list[index])}
              key={`tabitem-${id}`}>
              {tabTitle}
            </Button>
          );
        })}
      </TabWrapper>
      <CompetenceItem item={currentTabItem} t={t} />
    </Wrapper>
  );
};

export default injectT(CompetenceGoalTab);
