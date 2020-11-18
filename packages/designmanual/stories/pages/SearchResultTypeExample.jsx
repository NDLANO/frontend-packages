import React, { Fragment, useState } from 'react';

import {
  SearchTypeResult,
  SearchHeader,
  SearchFieldHeader,
  constants,
  OneColumn,
} from '@ndla/ui';

import { FilterTabs } from '@ndla/tabs';
import Pager from '@ndla/pager';

import {
  subjectTypeResults,
  subjectMaterialResults,
  searchTypeFilterOptions,
  searchSubjectTypeOptions,
  topicResults,
} from '../../dummydata/mockSearchResultType';
import { searchFilterOptions } from '../../dummydata';
import MastheadWithTopicMenu from '../molecules/mastheads';

const { contentTypes } = constants;

const subjectDataSource = {
  items: subjectTypeResults,
  totalCount: subjectTypeResults.length,
  type: contentTypes.SUBJECT,
};

const responseDataSource = [
  {
    items: topicResults,
    totalCount: topicResults.length,
    type: contentTypes.TOPIC,
  },
  {
    items: subjectMaterialResults,
    totalCount: subjectMaterialResults.length,
    type: contentTypes.SUBJECT_MATERIAL,
  },
];

const searchResults = [...responseDataSource, subjectDataSource];
const initialTypeFilter = {};
searchResults.forEach(item => {
  const pageSize = item.type === contentTypes.SUBJECT ? 2 : 4;
  const filters = [];
  if (searchTypeFilterOptions[item.type].length) {
    filters.push({ id: 'all', name: 'Alle', active: true });
    filters.push(...searchTypeFilterOptions[item.type]);
  }
  initialTypeFilter[item.type] = {
    filters: filters,
    page: 1,
    loading: false,
    pageSize,
  };
});

const initialResults = searchResults.map(res => {
  if (res.items.length > initialTypeFilter[res.type].pageSize) {
    return {
      ...res,
      items: res.items.slice(0, initialTypeFilter[res.type].pageSize),
    };
  }
  return res;
});

const resultsReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return state.map(contextItem => {
        if (contextItem.type === action.context) {
          return {
            ...contextItem,
            loading: true,
          };
        } else {
          return contextItem;
        }
      });
    case 'SEARCH_RESULT_UPDATE':
      return state.map(contextItem => {
        if (contextItem.type === action.results.contextType) {
          return {
            ...contextItem,
            // append new items
            items: action.results.items,
            loading: false,
          };
        } else {
          return contextItem;
        }
      });
    default:
      return state;
  }
};

const SearchPageDemo = () => {
  const [currentSubjectType, setCurrentSubjectType] = useState(null);
  const [typeFilter, setTypeFilter] = useState(initialTypeFilter);
  const [searchValue, setSearchValue] = useState('nunorsk');
  const [searchFilter, setSearchFilter] = useState([
    'subjects:bronnteknikk',
    'subjects:kinesisk',
  ]);

  const [searchItems, dispatch] = React.useReducer(
    resultsReducer,
    initialResults,
  );

  // mock search
  const search = async (q, cb) => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const { page = 1, type, pageSize } = q;
    const subjectTypeIndex = searchResults.findIndex(x => x.type === type);

    const pageIndex = page - 1;
    const fromIndex = pageIndex * pageSize;
    const toIndex = page * pageSize;
    const mockDataRes = [
      ...searchResults[subjectTypeIndex].items.slice(fromIndex, toIndex),
    ];
    await delay(500);
    cb(mockDataRes);
  };

  const handleFilterClick = (type, filterId) => {
    // For now changing filters does nothing except toggling on and of
    // Real examples to be implemented
    const filterUpdate = { ...typeFilter[type] };
    const filters = [...filterUpdate.filters];
    const selectedFilter = filters.find(item => filterId === item.id);
    if (filterId === 'all') {
      filters.forEach(filter => {
        filter.active = filter.id === 'all';
      });
    } else {
      const allFilter = filters.find(item => 'all' === item.id);
      allFilter.active = false;
      // First flip active state of clicked element
      selectedFilter.active = !selectedFilter.active;
      if (!filters.some(item => item.active)) {
        allFilter.active = true;
      }
    }
    setTypeFilter({ ...typeFilter, [type]: filterUpdate });
  };

  const handleSetSubjectType = subjectType => {
    // reset mockup data if no subjectType
    if (subjectType === 'ALL') {
      setTypeFilter(initialTypeFilter);
      initialResults.forEach(res => {
        if (res.type !== contentTypes.SUBJECT) {
          // Don't reset subjects
          const results = { ...res, items: res.items, contextType: res.type };
          dispatch({ type: 'SEARCH_RESULT_UPDATE', results });
        }
      });
      setCurrentSubjectType(null);
    } else {
      if (typeFilter[subjectType]) {
        const filterUpdate = { ...typeFilter };
        filterUpdate[subjectType] = {
          ...filterUpdate[subjectType],
          pageSize: 8,
          page: 1,
        };
        setTypeFilter({
          ...filterUpdate,
        });
        dispatch({ type: 'SEARCH', context: subjectType });
        const q = { type: subjectType, ...filterUpdate[subjectType] };
        search(q, res => {
          const results = { items: res, contextType: subjectType };
          dispatch({ type: 'SEARCH_RESULT_UPDATE', results });
        });
      }
      setCurrentSubjectType(subjectType);
    }
  };

  const handleShowMore = type => {
    dispatch({ type: 'SEARCH', context: type });
    const filterUpdate = { ...typeFilter[type] };
    filterUpdate.pageSize += filterUpdate.pageSize;
    setTypeFilter({ ...typeFilter, [type]: filterUpdate });
    const q = { type, ...filterUpdate };
    search(q, res => {
      const results = { items: res, contextType: type };
      dispatch({ type: 'SEARCH_RESULT_UPDATE', results });
    });
  };

  const handleShowAll = type => {
    handleSetSubjectType(type);
  };

  const onPagerNavigate = q => {
    const { type, page } = q;
    dispatch({ type: 'SEARCH', context: type });
    const filterUpdate = { ...typeFilter[type] };
    filterUpdate.page = page;
    setTypeFilter({ ...typeFilter, [type]: filterUpdate });
    const query = { type, ...filterUpdate };
    search(query, res => {
      const results = { items: res, contextType: type };
      dispatch({ type: 'SEARCH_RESULT_UPDATE', results });
    });
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
  };
  const handleFilterRemove = value => {
    setSearchFilter(searchFilter.filter(option => option !== value));
  };

  const activeSubjectFilters = searchFilterOptions.subjects.filter(option =>
    searchFilter.includes(option.value),
  );

  const ResultResponse = ({ type: typeParam }) => {
    const type = typeParam || currentSubjectType;

    const result = (data, type) => {
      const { items, totalCount } = data;
      let pagination = null;
      if (currentSubjectType !== type || type === contentTypes.SUBJECT) {
        // Only show this type of pagination if ALL tab is selected or is subject
        const toCount =
          typeFilter[type].pageSize > totalCount
            ? totalCount
            : typeFilter[type].pageSize;
        pagination = {
          totalCount,
          toCount,
          onShowMore: () => handleShowMore(type),
          onShowAll: () => handleShowAll(type),
        };
      }
      return (
        <SearchTypeResult
          filters={typeFilter[type].filters}
          onFilterClick={id => handleFilterClick(type, id)}
          items={items}
          loading={data.loading}
          type={type}
          totalCount={totalCount}
          pagination={pagination}>
          {!pagination && (
            <Pager
              page={typeFilter[type].page}
              lastPage={Math.ceil(totalCount / typeFilter[type].pageSize)}
              query={{ type: type }}
              pageItemComponentClass="button"
              pathname="#"
              onClick={onPagerNavigate}
            />
          )}
        </SearchTypeResult>
      );
    };
    if (type) {
      const data = searchItems.find(obj => {
        return obj.type === type;
      });
      return result(data, type);
    } else {
      return searchItems
        .filter(item => item.type !== contentTypes.SUBJECT) // Subject items are shown in separate wrapper
        .map(searchItem => (
          <Fragment key={`searchresult-${searchItem.type}`}>
            {result(searchItem, searchItem.type)}
          </Fragment>
        ));
    }
  };

  return (
    <>
      <MastheadWithTopicMenu hideSearchButton isSearchPage>
        <SearchFieldHeader
          value={searchValue}
          onChange={value => setSearchValue(value)}
          onSubmit={handleSearchSubmit}
          activeFilters={{
            filters: activeSubjectFilters,
            onFilterRemove: handleFilterRemove,
          }}
          filters={{
            options: searchFilterOptions.subjects,
            values: searchFilter,
            onSubmit: setSearchFilter,
          }}
        />
      </MastheadWithTopicMenu>
      <OneColumn cssModifier="clear-desktop" wide>
        <SearchHeader
          count={123}
          searchPhrase={searchValue}
          searchPhraseSuggestion="nynorsk"
          searchPhraseSuggestionOnClick={() =>
            console.log('search-phrase suggestion click')
          }
          searchValue={searchValue}
          onSearchValueChange={value => setSearchValue(value)}
          onSubmit={handleSearchSubmit}
          activeFilters={{
            filters: activeSubjectFilters,
            onFilterRemove: handleFilterRemove,
          }}
          filters={{
            options: searchFilterOptions.subjects,
            values: searchFilter,
            onSubmit: setSearchFilter,
          }}
        />
        <ResultResponse type={contentTypes.SUBJECT} />
        <FilterTabs
          dropdownBtnLabel="Velg"
          value={currentSubjectType ? currentSubjectType : 'ALL'}
          options={searchSubjectTypeOptions}
          contentId="search-result-content"
          onChange={handleSetSubjectType}>
          <ResultResponse />
        </FilterTabs>
      </OneColumn>
    </>
  );
};

export default SearchPageDemo;
