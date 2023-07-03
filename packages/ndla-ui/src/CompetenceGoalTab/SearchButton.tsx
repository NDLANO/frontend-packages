/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, mq, breakpoints } from '@ndla/core';
import { Search } from '@ndla/icons/common';
import { SafeLinkButton } from '@ndla/safelink';
import { useTranslation } from 'react-i18next';

const StyledSearch = styled(Search)`
  height: 24px;
  width: 24px;
  min-width: 24px;
`;

const GoalSearchWrapper = styled.div`
  margin-left: ${spacing.normal};
  flex: 0 0 289px;
  span {
    text-align: left;
  }

  ${mq.range({ until: breakpoints.tabletWide })} {
    margin-left: 0;
    margin-top: ${spacing.normal};
    flex-basis: auto;
  }
`;

interface SearchButtonProps {
  url: string;
  id: string;
  isOembed?: boolean;
  variant?: 'competenceGoal' | 'coreElement';
}

const SearchButton = ({ url, id, isOembed, variant = 'competenceGoal' }: SearchButtonProps) => {
  const { t } = useTranslation();
  const isCompetenceGoal = variant === 'competenceGoal';
  return (
    <GoalSearchWrapper>
      <SafeLinkButton variant="outline" to={url} target={isOembed ? '_blank' : '_self'}>
        <StyledSearch size="large" />
        <span>
          {isCompetenceGoal
            ? t('competenceGoals.competenceGoalResourceSearchText', { goal: id })
            : t('competenceGoals.coreResourceSearchText', { coreResourceText: id })}
        </span>
      </SafeLinkButton>
    </GoalSearchWrapper>
  );
};
export default SearchButton;
