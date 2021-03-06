/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react'; // useMemo , { Children }
import styled from '@emotion/styled';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import Button from '@ndla/button';
import { breakpoints, mq, spacing } from '@ndla/core';
// @ts-ignore
import ContentTypeBadge from '../ContentTypeBadge';
import { ContentType } from './SearchTypeResult';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #20588f;
  align-items: center;
  margin: ${spacing.small} 0;
  justify-content: space-between;
  padding: 0 2px;
  ${mq.range({ until: breakpoints.tablet })} {
    flex-wrap: wrap;
  }
`;
const TypeWrapper = styled.div`
  flex: 1 0 auto;
  flex-direction: row;
  display: flex;
  min-width: 200px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${spacing.xsmall};
`;

const SubjectName = styled.span`
  font-size: 18px;
  margin: 2px ${spacing.small};
  b {
    font-size: 18px;
    margin-right: 4px;
    font-weight: 600;
  }
`;

const Count = styled.span``;

const CategoryTypeButtonWrapper = styled.div`
  margin: 4px;
`;

const CategoryItems = styled.div`
  position: relative;
  right: -4px;
  button {
    white-space: nowrap;
    max-height: 29px;
  }
  white-space: nowrap;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  ${mq.range({ until: breakpoints.tablet })} {
    justify-content: flex-start;
  }
`;

export type FilterOptionsType = {
  id: string;
  name: string;
  active?: boolean;
};

type Props = {
  filters: FilterOptionsType[];
  onFilterClick: (id: string) => void;
  totalCount: number;
  type?: ContentType;
};
const SearchTypeHeader = ({ filters, onFilterClick, totalCount, type, t }: Props & tType) => (
  <HeaderWrapper>
    <TypeWrapper>
      {type && <ContentTypeBadge type={type} background size="large" />}
      <SubjectName>
        {type && <b>{t(`contentTypes.${type}`)}</b>}{' '}
        {totalCount && <Count>{t(`searchPage.resultType.hits`, { count: totalCount })}</Count>}
      </SubjectName>
    </TypeWrapper>
    {filters && (
      <CategoryItems>
        {filters.map((option: FilterOptionsType) => (
          <CategoryTypeButtonWrapper key={option.id}>
            <Button
              size="small"
              lighter={!option.active}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                if (e.currentTarget && option.active) {
                  e.currentTarget.blur();
                }
                onFilterClick(option.id);
              }}>
              {option.name}
            </Button>
          </CategoryTypeButtonWrapper>
        ))}
      </CategoryItems>
    )}
  </HeaderWrapper>
);
export default React.memo(injectT(SearchTypeHeader));
