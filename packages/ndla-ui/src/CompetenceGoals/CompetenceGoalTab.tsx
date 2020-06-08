import React, { useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
// mq, breakpoints, 
import { fonts, spacing } from '@ndla/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import {
  ForwardArrow as ForwardArrowIcon,
  // @ts-ignore
} from '@ndla/icons/action';
// @ts-ignore
import Button from '@ndla/button';

const Wrapper = styled.div`
  h2 {
    margin: 0 0 ${spacing.xxsmall};
  }
  h3 {
    margin: ${spacing.xxsmall} 0 ${spacing.small};
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
`;

const Subtitle = styled.h3`
  font-weight: ${fonts.weight.semibold};
  font-size: 24px;
`;

const Info = styled.p`
  font-weight: 600;
  font-size: 20px;
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

const Goals = styled.ul`
  margin: 0;
  padding: 0;
`;

const GoalItem = styled.li`
  background: ${colors.white};
  padding: 24px;
  margin: 12px 0;
  list-style-position: inside;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const GoalSearchitem = styled.div`
  a {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.6667 12.0001L14 12.6667V2.00008C14 1.26675 13.4 0.666748 12.6667 0.666748H5.99333C5.26 0.666748 4.66667 1.26675 4.66667 2.00008H11.3333C12.0667 2.00008 12.6667 2.60008 12.6667 3.33341V12.0001ZM10 3.33341H3.33333C2.6 3.33341 2 3.93341 2 4.66675V15.3334L6.66667 13.3334L11.3333 15.3334V4.66675C11.3333 3.93341 10.7333 3.33341 10 3.33341Z' fill='%2320588F'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-color: ${colors.brand.greyLightest};
    background-position: 12px center;
    padding: 12px 32px;
    margin: 16px 16px 0;
    display: inline-block;
    text-decoration: none;
    box-shadow: none;
    border-radius: 4px;
  }
`;
const ForwarArrowWrapper = styled.span`
  padding: 0 16px;
  svg {
    &.forwardArrowIcon {
      transform: rotate(-45deg);
    }
  }
`;

const CompetenceCurriculumGoal = ({ title, subtitle, list, t }: any) => {
  const [currentTab, setCurrentTab] = useState(list[0]);
  return (
    <Wrapper>
      {title && title !== '' ? <Title>{title}</Title> : null}
      {subtitle && subtitle !== '' ? <Subtitle>{subtitle}</Subtitle> : null}
      <TabWrapper>
        {list.map((tabItem: any, index: number) => {
          return (
            <Button
              borderShape="rounded"
              lighter={tabItem.id !== currentTab.id}
              size="normal"
              onClick={() => setCurrentTab(list[index])}
              key={`tabitem-${tabItem.id}`}>
              {tabItem.name}
            </Button>
          );
        })}
      </TabWrapper>
      <Info>{currentTab.description ? currentTab.description : ''}</Info>
      <Goals>
        {currentTab.goals.map((goal: any) => {
          return (
            <GoalItem key={goal.id}>
              {goal.name}
              {goal.url ? (
                <GoalSearchitem>
                  <a href={goal.url}>
                    {t('competenceGoals.competenceGoalResourceSearchText')}
                    <ForwarArrowWrapper>
                      <ForwardArrowIcon className="forwardArrowIcon" />
                    </ForwarArrowWrapper>
                  </a>
                </GoalSearchitem>
              ) : null}
            </GoalItem>
          );
        })}
      </Goals>
    </Wrapper>
  );
};

export default injectT(CompetenceCurriculumGoal);
