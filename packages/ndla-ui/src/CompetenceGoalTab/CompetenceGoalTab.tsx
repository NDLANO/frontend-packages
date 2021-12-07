/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from 'react';
import styled from '@emotion/styled';
import { colors, spacing, mq, breakpoints } from '@ndla/core';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import { ArrowFeatureTips } from '@ndla/icons/common';
// @ts-ignore
import Button from '@ndla/button';
import SafeLink from '@ndla/safelink';
import { BY, CC, LicenseByline } from '@ndla/licenses';
import CompetenceItem, { ListItemProp } from './CompetenceItem';

type CompetenceProps = {
  list: ListItemProp[];
  highlightSearchBox?: boolean;
};

const Wrapper = styled.div`
  h2 {
    margin: 0 0 ${spacing.medium};
  }
  position: relative;
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

const HighlightWrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(180px, 50%);

  svg {
    width: 32px;
    height: auto;
    position: relative;
    left: -38px;
    margin-top: ${spacing.normal};
  }

  ${mq.range({ until: breakpoints.wide })} {
    display: none;
  }
`;

const HighlightText = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light+Two&display=swap');
  display: inline-block;
  color: ${colors.text.light};
  transform: rotate(14deg);
  font-size: 20px;
  max-width: 170px;
  text-align: center;
  font-family: 'Shadows Into Light Two', cursive;
`;

const CompetenceGoalTab = ({ list, highlightSearchBox }: CompetenceProps) => {
  const [currentTabItem, setCurrentTab] = useState(list[0]);
  const { t } = useTranslation();

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
      {highlightSearchBox && (
        <HighlightWrapper>
          <HighlightText>{t('checkOutNewFeature')}</HighlightText>
          <ArrowFeatureTips />
        </HighlightWrapper>
      )}
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
