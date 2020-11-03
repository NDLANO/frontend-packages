import React, { Fragment, useState } from 'react';

import { SearchTypeResult, SearchHeader, constants } from '@ndla/ui';

import { FilterTabs } from '@ndla/tabs';

import {
  subjectTypeResults,
  subjectMaterialResults,
  searchTypeFilterOptions,
  searchSubjectTypeOptions,
  topicResults,
} from '../../dummydata/mockSearchResultType';

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
  initialTypeFilter[item.type] = {
    filter: [],
    page: 0,
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

  const [searchItems, dispatch] = React.useReducer(
    resultsReducer,
    initialResults,
  );

  // mock search
  const search = async (q, cb) => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const { page = 0, type } = q;
    const subjectTypeIndex = searchResults.findIndex(x => x.type === type);
    let mockDataRes;
    if (page === 0) {
      mockDataRes = [
        ...searchResults[subjectTypeIndex].items.slice(
          0,
          typeFilter[type].pageSize,
        ),
      ];
    } else {
      if (
        searchResults[subjectTypeIndex].items.length >
        (q.page + 1) * typeFilter[type].pageSize
      ) {
        const to = (q.page + 1) * typeFilter[type].pageSize;
        mockDataRes = [...searchResults[subjectTypeIndex].items.slice(0, to)];
      } else {
        mockDataRes = [...searchResults[subjectTypeIndex].items];
      }
    }
    await delay(500);
    cb(mockDataRes);
  };

  const handleFilterUpdate = async (type, filterUpdate) => {
    setTypeFilter({ ...typeFilter, [type]: filterUpdate });
    dispatch({ type: 'SEARCH', context: type });
    const q = { type, ...filterUpdate };
    search(q, res => {
      const results = { items: res, contextType: type };
      dispatch({ type: 'SEARCH_RESULT_UPDATE', results });
    });
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
        filterUpdate[subjectType].pageSize = 8;
        setTypeFilter({
          ...typeFilter,
          [subjectType]: filterUpdate[subjectType],
        });
        dispatch({ type: 'SEARCH', context: subjectType });
        const q = { type: subjectType, ...filterUpdate };
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
    filterUpdate.page = filterUpdate.page + 1;
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

  const ResultResponse = ({ type: typeParam }) => {
    const type = typeParam || currentSubjectType;

    const result = (data, type) => {
      const { items, totalCount } = data;
      let pagination = null;
      if (currentSubjectType !== type) {
        // Only show this type of pagination if ALL tab is selected
        pagination = {
          totalCount,
          page: typeFilter[type].page,
          pageSize: typeFilter[type].pageSize,
          onShowMore: () => handleShowMore(type),
          onShowAll: () => handleShowAll(type),
        };
      }
      return (
        <SearchTypeResult
          filterOptions={searchTypeFilterOptions[type]}
          typeFilter={typeFilter[type]}
          onFilterUpdate={handleFilterUpdate}
          items={items}
          loading={data.loading}
          type={type}
          totalCount={totalCount}
          pagination={pagination}
        />
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
      <SearchHeader
        count={123}
        searchPhrase="nunorsk"
        searchPhraseSuggestion="nynorsk"
        searchPhraseSuggestionOnClick={() =>
          console.log('search-phrase suggestion click')
        }
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
    </>
  );
};

export default SearchPageDemo;
