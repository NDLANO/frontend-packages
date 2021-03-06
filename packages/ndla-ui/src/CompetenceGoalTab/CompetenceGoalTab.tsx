import React, { useState } from 'react';
import styled from '@emotion/styled';
// mq, breakpoints,
import { spacing } from '@ndla/core';
// @ts-ignore
import Button from '@ndla/button';
import SafeLink from '@ndla/safelink';
import { BY, CC, LicenseByline } from '@ndla/licenses';
import CompetenceItem, { ListItemProp } from './CompetenceItem';

type CompetenceProps = {
  title: string;
  list: ListItemProp[];
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

const LicenseIconsTextWrapper = styled.span`
  padding-bottom: 5px;
  margin-left: 5px;
`;

const CompetenceGoalTab = ({ title, list }: CompetenceProps) => {
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
      <CompetenceItem item={currentTabItem} />
      <LicenseByline licenseRights={[CC, BY]}>
        <LicenseIconsTextWrapper>UDIR</LicenseIconsTextWrapper>
      </LicenseByline>
      Inneholder data under{' '}
      <SafeLink to="https://data.norge.no/nlod/no" target="_blank">
        NLOD
      </SafeLink>
      , tilgjengeliggjort på{' '}
      <SafeLink to="https://data.udir.no/" target="_blank">
        data.udir.no
      </SafeLink>
    </Wrapper>
  );
};

export default CompetenceGoalTab;
