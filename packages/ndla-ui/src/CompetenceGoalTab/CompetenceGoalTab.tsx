/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
// @ts-ignore
import Button from '@ndla/button';
import SafeLink from '@ndla/safelink';
import { BY, CC, LicenseByline } from '@ndla/licenses';
import CompetenceItem, { ListItemProp } from './CompetenceItem';

type CompetenceProps = {
  list: ListItemProp[];
};

const Wrapper = styled.div`
  h2 {
    margin: 0 0 ${spacing.medium};
  }
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

const CompetenceGoalTab = ({ list }: CompetenceProps) => {
  const [currentTabItem, setCurrentTab] = useState(list[0]);

  return (
    <Wrapper>
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
