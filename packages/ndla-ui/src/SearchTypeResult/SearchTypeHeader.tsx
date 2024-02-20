/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MouseEvent, memo } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { ButtonV2 } from "@ndla/button";
import { breakpoints, fonts, mq, spacing } from "@ndla/core";
import { Cross } from "@ndla/icons/action";
import { ContentType } from "./SearchTypeResult";
import ContentTypeBadge from "../ContentTypeBadge";

const Wrapper = styled.div`
  margin: ${spacing.small} 0;
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

const BadgeWrapper = styled.span`
  margin-right: ${spacing.small};
`;

const SubjectName = styled.div`
  display: flex;
  gap: ${spacing.small};
  ${fonts.sizes("18px", "24px")};
  margin: 2px 0;
  h2 {
    margin: 0;
    ${fonts.sizes("18px", "24px")};
    margin-right: 4px;
  }
`;

const Count = styled.span``;

const CategoryItems = styled.div`
  position: relative;
  button {
    white-space: nowrap;
    max-height: 29px;
  }
  white-space: nowrap;
  display: flex;
  flex-wrap: wrap;
  margin: ${spacing.small} 0 0;
`;

const CategoryTypeButtonWrapper = styled.div`
  margin: 4px;
`;

const CategoryTypeCrossWrapper = styled.span`
  margin-left: ${spacing.xsmall};
`;

export type FilterOptionsType = {
  id: string;
  name: string;
  active?: boolean;
};

type Props = {
  filters?: FilterOptionsType[];
  onFilterClick?: (id: string) => void;
  totalCount: number;
  type?: ContentType;
};
const SearchTypeHeader = ({ filters = [], onFilterClick, totalCount, type }: Props) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <HeaderWrapper>
        <TypeWrapper>
          {type && (
            <BadgeWrapper>
              <ContentTypeBadge type={type} title={t(`contentTypes.${type}`)} background border={false} size="large" />
            </BadgeWrapper>
          )}
          <SubjectName role="status">
            <h2 id={`searchitem-header-${type}`}>
              {type ? t(`contentTypes.${type}`) : t(`searchPage.resultType.allContentTypes`)}
            </h2>
            {totalCount && <Count>{t(`searchPage.resultType.hits`, { count: totalCount })}</Count>}
          </SubjectName>
        </TypeWrapper>
      </HeaderWrapper>
      {filters.length > 0 && (
        <CategoryItems>
          {filters.map((option: FilterOptionsType) => (
            <CategoryTypeButtonWrapper key={option.id}>
              <ButtonV2
                aria-current={option.active}
                size="xsmall"
                shape="pill"
                colorTheme={!option.active ? "greyLighter" : undefined}
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  if (e.currentTarget && option.active) {
                    e.currentTarget.blur();
                  }
                  onFilterClick?.(option.id);
                }}
              >
                {option.name}
                {option.active && (
                  <CategoryTypeCrossWrapper>
                    <Cross />
                  </CategoryTypeCrossWrapper>
                )}
              </ButtonV2>
            </CategoryTypeButtonWrapper>
          ))}
        </CategoryItems>
      )}
    </Wrapper>
  );
};

export default memo(SearchTypeHeader);
