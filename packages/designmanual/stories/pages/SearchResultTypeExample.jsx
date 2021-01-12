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
  searchSubjectTypeOptions,
  topicResults,
  notionResults,
  resourcesTasksAndActivitiesResults,
  resourcesLearningPathResults,
  resourcesAssessmentResults,
  resourcesExternalResults,
  resourcesSourceMaterialResults,
} from '../../dummydata/mockSearchResultType';
import { searchFilterOptions } from '../../dummydata';
import FigureWithLicense from '../article/FigureWithLicense';

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
  {
    items: resourcesTasksAndActivitiesResults,
    totalCount: resourcesTasksAndActivitiesResults.length,
    type: contentTypes.TASKS_AND_ACTIVITIES,
  },
  {
    items: resourcesLearningPathResults,
    totalCount: resourcesLearningPathResults.length,
    type: contentTypes.LEARNING_PATH,
  },
  {
    items: resourcesAssessmentResults,
    totalCount: resourcesAssessmentResults.length,
    type: contentTypes.ASSESSMENT_RESOURCES,
  },
  {
    items: resourcesExternalResults,
    totalCount: resourcesExternalResults.length,
    type: contentTypes.EXTERNAL_LEARNING_RESOURCES,
  },
  {
    items: resourcesSourceMaterialResults,
    totalCount: resourcesSourceMaterialResults.length,
    type: contentTypes.SOURCE_MATERIAL,
  },
];

const searchResults = responseDataSource.map(resourceType => {
  const filters = [];
  resourceType.items.forEach(item => {
    if (item.labels) {
      item.labels.forEach(label => {
        if (!filters.some(filter => filter.name === label)) {
          filters.push({ id: label, name: label });
        }
      });
    }
  });
  if (filters.length) {
    filters.unshift({ id: 'all', name: 'Alle', active: true });
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
            totalCount: action.totalCount,
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

const initNotionResult = () => {
  return notionResults.map(item => {
    if (item.media) {
      switch (item.media.type) {
        case 'video':
          return {
            ...item,
            media: {
              ...item.media,
              element: (
                <FigureWithLicense
                  type="full-column"
                  resizeIframe
                  caption="Utholdenhet - animasjon av oksygentransporten">
                  <iframe
                    title="Video: Utholdenhet - animasjon av oksygentransporten"
                    height="270"
                    width="480"
                    frameBorder="0"
                    src="https://players.brightcove.net/4806596774001/default_default/index.html?videoId=ref:19011"
                    allowFullScreen
                  />
                </FigureWithLicense>
              ),
            },
          };
        case 'other':
          return {
            ...item,
            media: {
              ...item.media,
              element: (
                <FigureWithLicense
                  type="full-column"
                  resizeIframe
                  caption="Utholdenhet - animasjon av oksygentransporten">
                  <iframe
                    title="Ekskresjon"
                    loading="lazy"
                    width="762"
                    height="571.5"
                    allowFullScreen="allowfullscreen"
                    src="https://h5p.ndla.no/resource/d1816a8f-4641-483a-980b-743defd0f709?locale=nb-no"
                    data-ratio="0.75"
                  />
                </FigureWithLicense>
              ),
            },
          };
        default:
          return item;
      }
    }
    return item;
  });
};

const mockSearchDelay = async () => {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  await delay(200);
  return true;
};

const resourceItemsByTypeAndFilters = (type, filters = []) => {
  const resources = searchResults.find(item => item.type === type);
  if (!filters.length || filters.indexOf('Alle') > -1) {
    return resources.items;
  }
  return resources.items.filter(item =>
    item.labels.some(label => filters.includes(label)),
  );
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

  const [notionsItems] = React.useState(initNotionResult);

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
      const activeFilters = updateFilters.filter(filter => filter.active);
      const filterArray = activeFilters.map(filter => filter.name);
      const allFilteredItems = resourceItemsByTypeAndFilters(type, filterArray);
      const filteredItems = [...allFilteredItems.slice(0, resources.pageSize)];

      const results = {
        items: filteredItems,
        contextType: type,
        filters: updateFilters,
        totalCount: allFilteredItems.length,
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
          const activeFilters = currentShown.filters.filter(
            filter => filter.active,
          );
          const filterArray = activeFilters.map(filter => filter.name);
          const allFilteredItems = resourceItemsByTypeAndFilters(
            currentResourceType,
            filterArray,
          );

          data.items = [...allFilteredItems.slice(0, PAGESIZE_SINGLE)];
        }
        dispatchResources({ type: 'RESOURCE_TYPE_SELECTED', ...data });
      }
    }
  }, [currentResourceType]);

  const handleShowMore = type => {
    dispatchResources({ type: 'RESOURCE_TYPE_LOADING', context: type });
    mockSearchDelay().then(() => {
      const currentShown = resourceItems.find(item => item.type === type);

      const activeFilters = currentShown.filters.filter(
        filter => filter.active,
      );
      const filterArray = activeFilters.map(filter => filter.name);
      const allFilteredItems = resourceItemsByTypeAndFilters(type, filterArray);

      const data = { contextType: type };
      data.items = [
        ...allFilteredItems.slice(
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
