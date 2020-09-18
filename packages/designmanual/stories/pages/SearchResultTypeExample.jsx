import React, { useState } from 'react';

import {
  SubjectBadge,
  SubjectMaterialBadge,
  SearchTypeResult,
  SearchTypeTopicFilter,
} from '@ndla/ui';

import {
  subjectResults,
  subjectMaterialResults,
  searchTypeFilterOptions,
  searchTopicOptions,
} from '../../dummydata/mockSearchResultType';

let searchResponse = [
  {
    context: {
      type: 'SUBJECT',
      typeicon: <SubjectBadge size="small" background />,
      typelabel: 'Fag',
    },
    items: subjectResults,
    totalCount: 13,
    page: 0,
    loading: false,
  },
  {
    context: {
      type: 'SUBJECT_MATERIAL',
      typeicon: <SubjectMaterialBadge size="small" background />,
      typelabel: 'Fagstoff',
    },
    items: subjectMaterialResults,
    totalCount: 12,
    page: 0,
    loading: false,
  },
];

const initialTypeFilter = {};
searchResponse.forEach(item => {
  initialTypeFilter[item.context.type] = {
    filter: [],
    page: 0,
    sortOrder: null,
    limit: 4,
  };
});
const searchResults = searchResponse;
const resultsReducer = (state, action) => {
  // return state;
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
        console.log('SEARCH_RESULT_UPDATE');
        if (contextItem.context.type === action.results.contextType) {
          return {
            ...contextItem,
            // items: [...state[0].items, ...action.res],
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
  const [typeFilter, setTypeFilter] = useState(initialTypeFilter);
  const [currentTopic, setCurrentTopic] = useState(null);
  // console.log('searchResults', searchResults);
  const [searchItems, dispatch] = React.useReducer(
    resultsReducer,
    searchResults,
  );

  // mock search
  const search = async (q, callback) => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const { page = 0, type } = q;
    const topicIndex = searchResults.findIndex(x => x.context.type === type);
    let mockDataRes = [];
    if (page === 0) {
      mockDataRes = [...searchResults[topicIndex].items];
    } else {
      searchResults[topicIndex].items.forEach((item, index) => {
        const id = searchResults[topicIndex].items.length + index + 1;
        const title = `Tittel artikkel - ${id} - ${page}`;
        const mockItem = { ...item, id, title, url: `#${id}` };
        mockDataRes.push(mockItem);
      });
    }
    await delay(1000);
    callback(mockDataRes);
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

  const handleSetTopic = topic => {
    setCurrentTopic(topic);
  };

  const TopicResponse = () => {
    const currentTopicItem = searchItems.find(obj => {
      return obj.context.type === currentTopic;
    });

    if (!currentTopicItem) {
      return <p>ingen treff</p>;
    }
    const { context, ...rest } = currentTopicItem;
    const { type } = context;
    const searchItemResult = {
      ...rest,
    };

    return (
      <SearchTypeResult
        currentTopic={currentTopic}
        context={{ ...context }}
        filterOptions={searchTypeFilterOptions[type]}
        typeFilter={typeFilter[type]}
        onFilterUpdate={handleFilterUpdate}
        searchResult={searchItemResult}
        items={searchItemResult.items}
      />
    );
  };

  const SearchResponse = () => {
    return searchItems.map(searchItem => {
      const { context, ...rest } = searchItem;
      const { type } = context;
      const searchItemResult = {
        ...rest,
      };
      console.log('searchItemResult', searchItemResult);
      return (
        <SearchTypeResult
          key={`searchresult-${type}`}
          currentTopic={currentTopic}
          context={{ ...context }}
          filterOptions={searchTypeFilterOptions[type]}
          typeFilter={typeFilter[type]}
          onFilterUpdate={handleFilterUpdate}
          searchResult={searchItemResult}
          items={
            searchItemResult.items && searchItemResult.items.length > 4
              ? [...searchItemResult.items.slice(0, 4)]
              : searchItemResult.items
          }
          setTopic={handleSetTopic}
          topics={searchTopicOptions}
        />
      );
    });
  };

  return (
    <>
      <SearchTypeTopicFilter
        currentTopic={currentTopic}
        setTopic={handleSetTopic}
        topics={searchTopicOptions}
      />
      {currentTopic ? <TopicResponse /> : <SearchResponse />}
    </>
  );

  /* searchTabOptions: any; */
  /* if (currentTopic === null) {
    return (
      <>
        <SearchTypeTopicFilter
          currentTopic={currentTopic}
          setTopic={handleSetTopic}
          topics={searchTopicOptions}
        />
        {searchItems.map(searchItem => {
          const { context, ...rest } = searchItem;
          const { type } = context;
          const searchItemResult = {
            ...rest,
          };
          return (
            <div key={`searchresult-${type}`}>
              <SearchTypeResult
                currentTopic={currentTopic}
                context={{ ...context, currentTopic }}
                filterOptions={searchTypeFilterOptions[type]}
                typeFilter={typeFilter[type]}
                onFilterUpdate={handleFilterUpdate}
                searchResult={searchItemResult}
                setTopic={handleSetTopic}
                topics={searchTopicOptions}
              />
            </div>
          );
        })}
      </>
    );
  }
  if (currentTopic !== 'all') {
    const currentTopicItem = searchItems.find(obj => {
      return obj.context.type === currentTopic;
    });
    if (currentTopicItem) {
      const { context, ...rest } = currentTopicItem;
      const { type } = context;
      const searchItemResult = {
        ...rest,
      };

      return (
        <>
          <SearchTypeTopicFilter
            currentTopic={currentTopic}
            setTopic={handleSetTopic}
            topics={searchTopicOptions}
          />
          <SearchTypeResult
            currentTopic={currentTopic}
            context={{ ...context, currentTopic }}
            filterOptions={searchTypeFilterOptions[type]}
            typeFilter={typeFilter[type]}
            onFilterUpdate={handleFilterUpdate}
            searchResult={searchItemResult}
          />
        </>
      );
    }
  }
  return null; */
};

export default SearchPageDemo;
