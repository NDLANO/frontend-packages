import React, { useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import SafeLink from '@ndla/safelink';
// @ts-ignore
import { ChevronUp, ChevronDown } from '@ndla/icons/common';
// mq, breakpoints,
import { spacing } from '@ndla/core';
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
  list-style-type: none;
  list-style-image: none;
`;

const GoalItem = styled.li`
  background: ${colors.white};
  padding: 24px 24px 24px 64px;
  margin: 12px 0;
  list-style-type: none;
  display: flex;
  position: relative;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  &::before {
    content: '';
    position: absolute;
    left: 25px;
    top: 32px;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    background-color: #20588f;
  }
`;

const GoalWrapper = styled.div`
  width: 100%;
`

const GoalSearchitem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  justify-content: space-between;
  a {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.6667 12.0001L14 12.6667V2.00008C14 1.26675 13.4 0.666748 12.6667 0.666748H5.99333C5.26 0.666748 4.66667 1.26675 4.66667 2.00008H11.3333C12.0667 2.00008 12.6667 2.60008 12.6667 3.33341V12.0001ZM10 3.33341H3.33333C2.6 3.33341 2 3.93341 2 4.66675V15.3334L6.66667 13.3334L11.3333 15.3334V4.66675C11.3333 3.93341 10.7333 3.33341 10 3.33341Z' fill='%2320588F'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-color: ${colors.brand.greyLightest};
    background-position: 12px center;
    padding: 12px 32px;
    margin: 16px 16px 0 0;
    display: inline-block;
    text-decoration: none;
    box-shadow: none;
    border-radius: 4px;
    font-size: 14px;
  }
  button {
    box-shadow: none;
    position: relative;
    top: 5px;
    &:focus {
      outline: none;
    }
    &:hover {
      box-shadow: none;
    }
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

const ToggleWrapper = styled.span`
  display: flex;
  flex: 1;
  flex-direction: row;
  position: relative;
  line-height: 16px;
  color: #20588f;
  font-size: 14px;
`;

const ToggleItem = styled.span`
  width: 40px;
  height: 40px;
  background: #f8f8f8;
  border-radius: 100%;
  position: absolute;
  left: -50px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleText = styled.span`
  text-align: left;
  line-height: 16px;
  color: #20588f;
  font-size: 14px;
  max-width: 90px;
`;

const GoalSubItemWrapper = styled.div`
  padding: 12px 0px 12px 12px;
  margin: 16px 0 0 0;
  text-decoration: none;
  box-shadow: none;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.brand.greyLightest};
`;

const GoalSubItem = styled.div`
  display: flex;
  flex-direction: column;
  a {
    box-shadow: none;
  }
`;
const GoalSubItemLabel = styled.span`
  color: #ccc;
`;
const GoalSubItemName = styled.span`
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.6667 12.0001L14 12.6667V2.00008C14 1.26675 13.4 0.666748 12.6667 0.666748H5.99333C5.26 0.666748 4.66667 1.26675 4.66667 2.00008H11.3333C12.0667 2.00008 12.6667 2.60008 12.6667 3.33341V12.0001ZM10 3.33341H3.33333C2.6 3.33341 2 3.93341 2 4.66675V15.3334L6.66667 13.3334L11.3333 15.3334V4.66675C11.3333 3.93341 10.7333 3.33341 10 3.33341Z' fill='%2320588F'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: 0 center;
  padding-left: 24px;
`;

const GoalSubItemLink = styled.span`
  padding-left: 24px;
`;
const Item = ({ goal, t }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const labelByType = (type: string) => {
    switch (type) {
      case 'core':
        return t('competenceGoals.competenceCoreLabel');
      case 'topic':
        return t('competenceGoals.competenceTopicLabel');
      case 'subject':
        return t('competenceGoals.competenceSubjectLabel');
      default:
        return '';
    }
  };
  const linkTextbyType = (type: string) => {
    switch (type) {
      case 'core':
        return t('competenceGoals.competenceCoreSearchText');
      case 'topic':
        return t('competenceGoals.competenceTopicSearchText');
      case 'subject':
        return t('competenceGoals.competenceSubjectSearchText');
      default:
        return '';
    }
  };
  const { subitems = null } = goal;
  return (
    <GoalItem>
      <GoalWrapper>
        {goal.name}
        {goal.url && (
          <div>
            <GoalSearchitem>
              <SafeLink to={goal.url}>
                {t('competenceGoals.competenceGoalResourceSearchText')}
                <ForwarArrowWrapper>
                  <ForwardArrowIcon className="forwardArrowIcon" />
                </ForwarArrowWrapper>
              </SafeLink>
              {subitems && (
                <Button link onClick={() => setIsExpanded(!!!isExpanded)}>
                  <ToggleWrapper className="showMore">
                    <ToggleItem>
                      {isExpanded ? <ChevronUp /> : <ChevronDown />}
                    </ToggleItem>
                    {isExpanded ? (
                      <ToggleText>{t('competenceGoals.competenceGoalCloseExtra')}</ToggleText>
                    ) : (
                      <ToggleText>{t('competenceGoals.competenceGoalShowExtra')}</ToggleText>
                    )}
                  </ToggleWrapper>
                </Button>
              )}
            </GoalSearchitem>
          </div>
        )}
        {subitems &&
          isExpanded &&
          subitems.map((subItem: any) => {
            return (
              <GoalSubItemWrapper key={`${subItem.type}-${subItem.name}`}>
                <GoalSubItem>
                  <GoalSubItemLabel>
                    {labelByType(subItem.type)}
                  </GoalSubItemLabel>
                  <GoalSubItemName>{subItem.name}</GoalSubItemName>
                  {subItem.linkitem && (
                    <GoalSubItemLink>
                      <SafeLink to={subItem.linkitem.resourceurl}>
                        {subItem.linkitem.label}
                      </SafeLink>
                    </GoalSubItemLink>
                  )}
                </GoalSubItem>
                {subItem.resourceurl && (
                  <GoalSubItem>
                    <SafeLink to={subItem.resourceurl}>
                      {linkTextbyType(subItem.type)}
                      <ForwarArrowWrapper>
                        <ForwardArrowIcon className="forwardArrowIcon" />
                      </ForwarArrowWrapper>
                    </SafeLink>
                  </GoalSubItem>
                )}
              </GoalSubItemWrapper>
            );
          })}
      </GoalWrapper>
    </GoalItem>
  );
};

const CompetenceCurriculumGoal = ({ title, subtitle, list, t }: any) => {
  const [currentTab, setCurrentTab] = useState(list[0]);
  return (
    <Wrapper>
      {title && title !== '' ? <Title>{title}</Title> : null}
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
        {currentTab.goals.map((goal: any) => (
          <Item key={goal.id} goal={goal} t={t} />
        ))}
      </Goals>
    </Wrapper>
  );
};

export default injectT(CompetenceCurriculumGoal);
