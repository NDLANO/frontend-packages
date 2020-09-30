import React, { useState } from 'react';

import {
  SubjectBadge,
  SubjectMaterialBadge,
  SearchTypeResult,
  /* SearchTypeTopicFilter,
  ContentTypeBadge,
  SourceMaterialBadge,
  TasksAndActivitiesBadge,
  ExternalLearningResourcesBadge,
  LearningPathBadge, */
  SubjectTypeBadge,
} from '@ndla/ui';

/* import {
  // MenuBook as MenuBookIcon,
  // @ts-ignore
} from '@ndla/icons/action'; */

import { FilterTabs } from '@ndla/tabs';

import {
  subjectTypeResults,
  subjectResults,
  subjectMaterialResults,
  searchTypeFilterOptions,
  searchSubjectTypeOptions,
} from '../../dummydata/mockSearchResultType';

const responseDataSource = [
  {
    context: {
      type: 'SUBJECT_TYPE',
      typeicon: <SubjectTypeBadge size="small" background />,
      typelabel: 'Fag',
    },
    items: subjectTypeResults,
    totalCount: subjectTypeResults.length,
  },
  {
    context: {
      type: 'SUBJECT',
      typeicon: <SubjectBadge size="small" background />,
      typelabel: 'Emne',
    },
    items: subjectResults,
    totalCount: subjectResults.length,
  },
  {
    context: {
      type: 'SUBJECT_MATERIAL',
      typeicon: <SubjectMaterialBadge size="small" background />,
      typelabel: 'Fagstoff',
    },
    items: subjectMaterialResults,
    totalCount: subjectMaterialResults.length,
  },
];

const searchResults = responseDataSource;
const resultsReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return state.map(contextItem => {
        if (contextItem.context.type === action.context) {
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
        if (contextItem.context.type === action.results.contextType) {
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
  const initialTypeFilter = {};
  responseDataSource.forEach(item => {
    const pageSize = item.context.type === 'SUBJECT_TYPE' ? 2 : 4;
    initialTypeFilter[item.context.type] = {
      filter: [],
      page: 0,
      loading: false,
      pageSize,
    };
  });
  const [typeFilter, setTypeFilter] = useState(initialTypeFilter);
  const initialResults = searchResults.map(res => {
    if (res.items.length > initialTypeFilter[res.context.type].pageSize) {
      return {
        ...res,
        items: res.items.slice(0, initialTypeFilter[res.context.type].pageSize),
      };
    }
    return res;
  });
  const [searchItems, dispatch] = React.useReducer(
    resultsReducer,
    initialResults,
    // searchResults,
  );

  // mock search
  const search = async (q, cb) => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const { page = 0, type } = q;
    const subjectTypeIndex = searchResults.findIndex(
      x => x.context.type === type,
    );
    let mockDataRes = [];
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
        const results = { items: res.items, contextType: res.context.type };
        dispatch({ type: 'SEARCH_RESULT_UPDATE', results });
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

  const SubjectTypeResponse = () => {
    const currentSubjectTypeData = searchItems.find(obj => {
      return obj.context.type === currentSubjectType;
    });
    if (!currentSubjectTypeData) {
      return <p>ingen treff</p>;
    }
    const { context, items } = currentSubjectTypeData;
    const { type } = context;
    return (
      <SearchTypeResult
        currentSubjectType={currentSubjectType}
        context={{ ...context }}
        filterOptions={searchTypeFilterOptions[type]}
        typeFilter={typeFilter[type]}
        onFilterUpdate={handleFilterUpdate}
        items={items}
        loading={currentSubjectTypeData.loading}
      />
    );
  };

  const SearchResponse = () => {
    return searchItems.map(searchItem => {
      const { context, totalCount, ...rest } = searchItem;
      const { type } = context;
      const searchItemResult = {
        ...rest,
      };
      const pagination = {
        totalCount,
        page: typeFilter[type].page,
        pageSize: typeFilter[type].pageSize,
      };
      return (
        <SearchTypeResult
          key={`searchresult-${type}`}
          currentSubjectType={currentSubjectType}
          context={{ ...context }}
          filterOptions={searchTypeFilterOptions[type]}
          typeFilter={typeFilter[type]}
          onFilterUpdate={handleFilterUpdate}
          items={searchItemResult.items}
          loading={searchItemResult.loading}
          totalCount={totalCount}
          setSubjectType={handleSetSubjectType}
          pagination={pagination}
        />
      );
    });
  };

  return (
    <>
      <FilterTabs
        dropdownBtnLabel="Velg"
        value={currentSubjectType ? currentSubjectType : 'ALL'}
        options={searchSubjectTypeOptions}
        contentId="search-result-content"
        onChange={handleSetSubjectType}>
        <div>
          <h5>185 treff</h5>
        </div>
        {currentSubjectType ? <SubjectTypeResponse /> : <SearchResponse />}
      </FilterTabs>
    </>
  );
};

export default SearchPageDemo;
