/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { ButtonV2 } from '@ndla/button';
import { spacing } from '@ndla/core';
import { BY, CC } from '@ndla/licenses';
import { LicenseByline } from '@ndla/notion';
import SafeLink from '@ndla/safelink';
import Tooltip from '@ndla/tooltip';
import CompetenceItem, { ListItemProp } from './CompetenceItem';

type CompetenceProps = {
  list: ListItemProp[];
  isOembed?: boolean;
};

const ButtonWrapper = styled.div`
  display: flex;
  padding-top: ${spacing.small};
  gap: ${spacing.small};
  flex-wrap: wrap;
`;

const LicenseIconsTextWrapper = styled.span`
  padding-bottom: ${spacing.xxsmall};
  margin-left: ${spacing.xxsmall};
`;

const CompetenceGoalTab = ({ list, isOembed }: CompetenceProps) => {
  const [currentTabItem, setCurrentTab] = useState(list[0]);
  const { t } = useTranslation();

  return (
    <>
      {list.length > 1 && (
        <ButtonWrapper>
          {list.map((tabItem, index) => {
            const { id, title: tabTitle, type } = tabItem;
            return (
              <Tooltip
                tooltip={
                  type === 'coreElement'
                    ? t('competenceGoals.competenceTabCoreTooltip')
                    : t('competenceGoals.showCompetenceGoals')
                }
                key={`tabitem-${id}`}
              >
                <ButtonV2
                  shape="pill"
                  aria-current={id === currentTabItem.id}
                  colorTheme={id !== currentTabItem.id ? 'lighter' : undefined}
                  onClick={() => setCurrentTab(list[index])}
                >
                  {tabTitle}
                </ButtonV2>
              </Tooltip>
            );
          })}
        </ButtonWrapper>
      )}
      <CompetenceItem item={currentTabItem} isOembed={isOembed} />
      <LicenseByline licenseRights={[CC, BY]}>
        <LicenseIconsTextWrapper>UDIR</LicenseIconsTextWrapper>
      </LicenseByline>
      {`${t('competenceGoals.licenseData')} `}
      <SafeLink to="https://data.norge.no/nlod/no" target="_blank">
        NLOD
      </SafeLink>
      {`, ${t('competenceGoals.licenseFrom')} `}
      <SafeLink to="https://data.udir.no/" target="_blank">
        data.udir.no
      </SafeLink>
    </>
  );
};

export default CompetenceGoalTab;
