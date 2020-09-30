import React from 'react'; // useMemo , { Children }
import styled from '@emotion/styled';
// @ts-ignore
import Button from '@ndla/button';

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

const CategoryTypeButton = React.memo(
  ({ item, onFilterUpdate, isActive, loading }: any) => {
    const { id, name } = item;
    return (
      <CategoryTypeButtonWrapper>
        <Button
          size="small"
          lighter={!isActive}
          disabled={loading}
          onClick={() => onFilterUpdate(id)}>
          {name}
        </Button>
      </CategoryTypeButtonWrapper>
    );
  },
);
export type ContextType = {
  type: string;
  typeicon: React.ReactNode;
  typelabel: string;
};
export type FilterOptionsType = {
  id: string;
  name: string;
};
export type TypeFilterType = {
  filter: Array<string>;
  page: number;
  pageSize: number;
};

type Props = {
  context: ContextType;
  filterOptions: Array<FilterOptionsType>;
  onFilterUpdate: (type: string, filter: any) => void;
  typeFilter: TypeFilterType;
  loading: boolean;
  totalCount: number;
};
const SearchTypeHeader = ({
  context,
  filterOptions,
  onFilterUpdate,
  typeFilter,
  loading,
  totalCount,
}: Props) => {
  const { type, typeicon, typelabel } = context;
  const updateFilter = (id: string, clear: boolean = false) => {
    let filterUpdate: any = {};
    if (clear) {
      filterUpdate.filter = [];
      filterUpdate.page = 0;
      onFilterUpdate(type, filterUpdate);
    } else {
      filterUpdate = { ...typeFilter };
      if (filterUpdate.filter.includes(id)) {
        filterUpdate.filter = filterUpdate.filter.filter(
          (item: string) => item !== id,
        );
      } else {
        filterUpdate.filter.push(id);
      }
      filterUpdate.page = 0;
      onFilterUpdate(type, filterUpdate);
    }
  };
  return (
    <>
      <HeaderWrapper>
        <TypeWrapper>
          {typeicon}
          <SubjectName>
            <b>{typelabel}</b> {totalCount ? `(${totalCount})` : null}
          </SubjectName>
        </TypeWrapper>
        {filterOptions && (
          <CategoryItems>
            <CategoryTypeButtonWrapper>
              <Button
                size="small"
                disabled={loading}
                lighter={typeFilter.filter && typeFilter.filter.length > 0}
                onClick={() => updateFilter('', true)}>
                Alle
              </Button>
            </CategoryTypeButtonWrapper>

            {filterOptions.slice(0, 3).map((option: any) => (
              <CategoryTypeButton
                loading={loading}
                key={`${type}_${option.id}`}
                type={type}
                item={option}
                onFilterUpdate={updateFilter}
                isActive={typeFilter.filter.includes(option.id)}
              />
            ))}
          </CategoryItems>
        )}
      </HeaderWrapper>
    </>
  );
};
export default React.memo(SearchTypeHeader);
