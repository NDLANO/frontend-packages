import React from 'react'; // useMemo , { Children }
import styled from '@emotion/styled';
// @ts-ignore
import { ChevronLeft, ChevronRight } from '@ndla/icons/common';
// @ts-ignore
import Button from '@ndla/button';
// import SearchTypeTopicFilter from './SearchTypeTopicFilter';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 75px;
  border-bottom: 1px solid #ceddea;
  align-items: center;
  margin: 15px 0;
`;

const SubjectName = styled.span`
  font-size: 22px;
  margin: 5px 20px;
`;

const CategoryTypeButtonWrapper = styled.div`
  margin: 0 5px;
`;

const CategoryItems = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  max-height: 35px;
  overflow: hidden;
`;

const ResultNav = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-left: 10px;
  button.nav {
    box-shadow: none;
  }
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

const SearchTypeHeader = ({
  context,
  filterOptions,
  onFilterUpdate,
  typeFilter,
  loading,
  totalCount,
  setTopic,
  currentTopic,
}: // topics,
any) => {
  const rowCount = 4;
  const { type, typeicon, typelabel } = context;
  console.log('headertype', currentTopic, ' - THE TYPE: ', type);
  // TMP - move up?
  const isLast = rowCount * (typeFilter.page + 1) >= totalCount;
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
  const goTo = (page: number) => {
    let filterUpdate = { ...typeFilter };
    filterUpdate.page = page;
    onFilterUpdate(type, filterUpdate);
  };
  return (
    <>
      <HeaderWrapper>
        {typeicon}
        <SubjectName>
          {typelabel} {totalCount ? `(${totalCount})` : null}
        </SubjectName>
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
        {!currentTopic && (
          <ResultNav>
            <Button link onClick={() => setTopic(type)}>
              Se alle resultater
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              className="nav"
              disabled={typeFilter.page === 0 || loading}
              link
              onClick={() =>
                goTo(typeFilter.page > 0 ? (typeFilter.page -= 1) : 0)
              }>
              <ChevronLeft />
            </Button>
            &nbsp; &nbsp;
            <Button
              className="nav"
              link
              disabled={isLast || loading}
              onClick={() => goTo((typeFilter.page += 1))}>
              <ChevronRight />
            </Button>
          </ResultNav>
        )}
      </HeaderWrapper>
    </>
  );
};
export default React.memo(SearchTypeHeader);
