import React from 'react'; // useMemo , { Children }
import styled from '@emotion/styled';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import ContentTypeBadge from '../ContentTypeBadge';
import { ContentType } from './SearchTypeResult';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #20588f;
  align-items: center;
  margin: 15px 0;
  justify-content: space-between;
  padding: 0 2px;
`;
const TypeWrapper = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  min-width: 200px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`;

const SubjectName = styled.span`
  font-size: 16px;
  margin: 2px 16px;
  b {
    font-size: 18px;
  }
`;

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
`;

export type FilterOptionsType = {
  id: string;
  name: string;
  active?: boolean;
};

type Props = {
  filters: Array<FilterOptionsType>;
  onFilterClick: (id: string) => void;
  loading: boolean;
  totalCount: number;
  type?: ContentType;
};
const SearchTypeHeader = ({
  filters,
  onFilterClick,
  loading,
  totalCount,
  type,
  t,
}: Props & tType) => {
  return (
    <>
      <HeaderWrapper>
        <TypeWrapper>
          {type && <ContentTypeBadge type={type} background size="large" />}
          <SubjectName>
            {type && <b>{t(`contentTypes.${type}`)}</b>}{' '}
            {totalCount ? `(${totalCount})` : null}
          </SubjectName>
        </TypeWrapper>
        {filters && (
          <CategoryItems>
            {filters.map((option: FilterOptionsType) => (
              <CategoryTypeButtonWrapper key={option.id}>
                <Button
                  size="small"
                  lighter={!option.active}
                  disabled={loading}
                  onClick={() => onFilterClick(option.id)}>
                  {option.name}
                </Button>
              </CategoryTypeButtonWrapper>
            ))}
          </CategoryItems>
        )}
      </HeaderWrapper>
    </>
  );
};
export default React.memo(injectT(SearchTypeHeader));
