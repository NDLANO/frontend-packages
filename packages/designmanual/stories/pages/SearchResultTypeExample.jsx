import React, { useEffect, useState } from 'react';

import {
  SearchTypeResult,
  SearchHeader,
  SearchNotionsResult,
  SearchSubjectResult,
  constants,
} from '@ndla/ui';

import { FilterTabs } from '@ndla/tabs';
import { injectT } from '@ndla/i18n';

import {
  subjectTypeResults,
  subjectMaterialResults,
  searchTypeFilterOptions,
  searchSubjectTypeOptions,
  topicResults,
  notionResults,
} from '../../dummydata/mockSearchResultType';
import { searchFilterOptions } from '../../dummydata';

const { contentTypes } = constants;

const PAGESIZE_SINGLE = 8;
const PAGESIZE_ALL = 4;

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

const searchResults = responseDataSource.map(resourceType => {
  const filters = [];
  if (searchTypeFilterOptions[resourceType.type].length) {
    filters.push({ id: 'all', name: 'Alle', active: true });
    filters.push(...searchTypeFilterOptions[resourceType.type]);
  }
  return { ...resourceType, pageSize: PAGESIZE_ALL, filters };
});

const initialResourceResults = searchResults.map(res => {
  if (res.items.length > res.pageSize) {
    return {
      ...res,
      items: res.items.slice(0, res.pageSize),
    };
  }
  return res;
});

const resourcesReducer = (state, action) => {
  switch (action.type) {
    case 'RESOURCE_TYPE_LOADING':
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
    case 'RESOURCE_TYPE_ADD_ITEMS':
      return state.map(contextItem => {
        if (contextItem.type === action.contextType) {
          return {
            ...contextItem,
            // append new items
            items: [...contextItem.items, ...action.items],
            loading: false,
          };
        } else {
          return contextItem;
        }
      });
    case 'RESOURCE_TYPE_UPDATE':
      return state.map(contextItem => {
        if (contextItem.type === action.contextType) {
          return {
            ...contextItem,
            items: action.items,
            filters: action.filters,
            loading: false,
          };
        } else {
          return contextItem;
        }
      });
    case 'RESOURCE_TYPE_SELECTED':
      return state.map(contextItem => {
        if (contextItem.type === action.contextType) {
          return {
            ...contextItem,
            items: action.items,
            pageSize: PAGESIZE_SINGLE,
            active: true,
          };
        } else {
          return { ...contextItem, active: false };
        }
      });
    case 'RESOURCE_TYPE_ALL_SELECTED':
      return state.map(contextItem => {
        return { ...contextItem, pageSize: PAGESIZE_ALL, active: true };
      });
    default:
      return state;
  }
};

const mockSearchDelay = async () => {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  await delay(200);
  return true;
};

const SearchPageDemo = ({ t }) => {
  const [currentResourceType, setCurrentResourceType] = useState(null);
  const [hideNotionsResult, setHideNotionsResult] = useState(false);
  const [searchValue, setSearchValue] = useState('nunorsk');
  const [searchPhrase, setSearchPhrase] = useState('nunorsk');
  const [searchPhraseSuggestion, setSearchPhraseSuggestion] = useState(
    'nynorsk',
  );
  const [searchFilter, setSearchFilter] = useState([
    'subjects:bronnteknikk',
    'subjects:kinesisk',
  ]);

  const [notionsItems] = React.useState(notionResults);

  const [subjectItems] = React.useState(subjectTypeResults);

  const [resourceItems, dispatchResources] = React.useReducer(
    resourcesReducer,
    initialResourceResults,
  );

  const handleFilterClick = (type, filterId) => {
    // For now changing filters does nothing except toggling on and of
    // Real examples to be implemented
    dispatchResources({ type: 'RESOURCE_TYPE_LOADING', context: type });
    mockSearchDelay().then(() => {
      const resources = resourceItems.find(obj => {
        return obj.type === type;
      });
      const updateFilters = [...resources.filters];
      const selectedFilter = updateFilters.find(item => filterId === item.id);
      if (filterId === 'all') {
        updateFilters.forEach(filter => {
          filter.active = filter.id === 'all';
        });
      } else {
        const allFilter = updateFilters.find(item => 'all' === item.id);
        allFilter.active = false;
        // First flip active state of clicked element
        selectedFilter.active = !selectedFilter.active;
        if (!resources.filters.some(item => item.active)) {
          allFilter.active = true;
        }
      }
      const results = {
        items: resources.items,
        contextType: type,
        filters: updateFilters,
      };
      dispatchResources({ type: 'RESOURCE_TYPE_UPDATE', ...results });
    });
  };

  useEffect(() => {
    // reset mockup data if no subjectType
    if (!currentResourceType || currentResourceType === 'ALL') {
      dispatchResources({ type: 'RESOURCE_TYPE_ALL_SELECTED' });
    } else {
      const currentShown = resourceItems.find(
        item => item.type === currentResourceType,
      );
      if (currentShown) {
        const data = { contextType: currentResourceType };
        if (currentShown.items.length >= PAGESIZE_SINGLE) {
          data.items = currentShown.items;
        } else {
          const resources = searchResults.find(
            item => item.type === currentResourceType,
          );
          data.items = [...resources.items.slice(0, PAGESIZE_SINGLE)];
        }
        dispatchResources({ type: 'RESOURCE_TYPE_SELECTED', ...data });
      }
    }
  }, [currentResourceType]);

  const handleShowMore = type => {
    dispatchResources({ type: 'RESOURCE_TYPE_LOADING', context: type });
    mockSearchDelay().then(() => {
      const currentShown = resourceItems.find(item => item.type === type);
      const resources = searchResults.find(item => item.type === type);
      const data = { contextType: type };
      data.items = [
        ...resources.items.slice(
          currentShown.items.length,
          currentShown.items.length + currentShown.pageSize,
        ),
      ];
      dispatchResources({ type: 'RESOURCE_TYPE_ADD_ITEMS', ...data });
    });
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearchPhrase(searchValue);
    setSearchPhraseSuggestion('');
  };
  const handleFilterRemove = value => {
    setSearchFilter(searchFilter.filter(option => option !== value));
  };

  const activeSubjectFilters = searchFilterOptions.subjects.filter(option =>
    searchFilter.includes(option.value),
  );

  const filterProps = {
    options: searchFilterOptions.subjects,
    values: searchFilter,
    onSubmit: setSearchFilter,
    messages: {
      filterLabel: t('searchPage.searchFilterMessages.filterLabel'),
      closeButton: t('searchPage.close'),
      confirmButton: t('searchPage.searchFilterMessages.confirmButton'),
      buttonText: t('searchPage.searchFilterMessages.noValuesButtonText'),
    },
  };

  const visibleResourceTypes = resourceItems.filter(item => item.active);

  return (
    <>
      <SearchHeader
        searchPhrase={searchPhrase}
        searchPhraseSuggestion={searchPhraseSuggestion}
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
        filters={filterProps}
      />
      {!hideNotionsResult && (
        <SearchNotionsResult
          items={notionsItems}
          totalCount={notionsItems.length}
          onRemove={() => {
            setHideNotionsResult(true);
          }}
        />
      )}
      <SearchSubjectResult items={subjectItems} />
      <FilterTabs
        dropdownBtnLabel="Velg"
        value={currentResourceType ? currentResourceType : 'ALL'}
        options={searchSubjectTypeOptions}
        contentId="search-result-content"
        onChange={setCurrentResourceType}>
        {visibleResourceTypes.map(item => (
          <SearchTypeResult
            key={`search-result-${item.type}`}
            filters={item.filters}
            onFilterClick={id => handleFilterClick(item.type, id)}
            items={item.items}
            type={item.type}
            totalCount={item.totalCount}
            loading={item.loading}
            pagination={{
              totalCount: item.totalCount,
              toCount: item.items.length,
              onShowMore: () => handleShowMore(item.type),
            }}
          />
        ))}
      </FilterTabs>
    </>
  );
};

export default injectT(SearchPageDemo);
