import { useEffect, useState, useReducer } from 'react';

import {
  SearchTypeResult,
  SearchHeader,
  SearchNotionsResult,
  SearchSubjectResult,
  constants,
  FilterButtons,
} from '@ndla/ui';
import { useTranslation } from 'react-i18next';

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
import FigureWithLicense from '../article/FigureWithLicense';
import { competenceGoals, programmes, subjectCategories } from '../../dummydata/mockPrograms';

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

const searchResults = responseDataSource.map((resourceType) => {
  const filters = [];
  resourceType.items.forEach((item) => {
    if (item.labels) {
      item.labels.forEach((label) => {
        if (!filters.some((filter) => filter.name === label)) {
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

const initialResourceResults = searchResults.map((res) => {
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
      return state.map((contextItem) => {
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
      return state.map((contextItem) => {
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
      return state.map((contextItem) => {
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
      return state.map((contextItem) => {
        if (action.contextTypes.indexOf(contextItem.type) > -1) {
          return {
            ...contextItem,
            items: action.resourceTypeItems[contextItem.type].items,
            pageSize: PAGESIZE_SINGLE,
            active: true,
          };
        } else {
          return { ...contextItem, active: false };
        }
      });
    case 'RESOURCE_TYPE_ALL_SELECTED':
      return state.map((contextItem) => {
        return { ...contextItem, pageSize: PAGESIZE_ALL, active: true };
      });
    default:
      return state;
  }
};

const initNotionResult = () => {
  return notionResults.map((item) => {
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
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  await delay(200);
  return true;
};

const resourceItemsByTypeAndFilters = (type, filters = []) => {
  const resources = searchResults.find((item) => item.type === type);
  if (!filters.length || filters.indexOf('Alle') > -1) {
    return resources.items;
  }
  return resources.items.filter((item) => item.labels.some((label) => filters.includes(label)));
};

const SearchPageDemo = ({ showCompetenceGoals }) => {
  const { t } = useTranslation();
  const [selectedResourceTypes, setSelectedResourceTypes] = useState([]);
  const [hideNotionsResult, setHideNotionsResult] = useState(false);
  const [searchValue, setSearchValue] = useState(() => (showCompetenceGoals ? '' : 'nunorsk'));
  const [searchPhrase, setSearchPhrase] = useState(() => (showCompetenceGoals ? '' : 'nunorsk'));
  const [searchPhraseSuggestion, setSearchPhraseSuggestion] = useState(() => (showCompetenceGoals ? '' : 'nynorsk'));
  const [subjectFilter, setSubjectFilter] = useState(() => (showCompetenceGoals ? [] : ['programme_subject_5']));
  const [programmeFilter, setProgrammeFilter] = useState(() => (showCompetenceGoals ? [] : ['programme_9']));
  // eslint-disable-next-line no-unused-vars
  const [competenceGoalFilter, setCompetenceGoalFilter] = useState(() => (showCompetenceGoals ? ['KM1196'] : []));

  const [notionsItems] = useState(initNotionResult);

  const [subjectItems] = useState(subjectTypeResults);

  const [resourceItems, dispatchResources] = useReducer(resourcesReducer, initialResourceResults);

  const handleFilterClick = (type, filterId) => {
    // For now changing filters does nothing except toggling on and of
    // Real examples to be implemented
    dispatchResources({ type: 'RESOURCE_TYPE_LOADING', context: type });
    mockSearchDelay().then(() => {
      const resources = resourceItems.find((obj) => {
        return obj.type === type;
      });
      const updateFilters = [...resources.filters];
      const selectedFilter = updateFilters.find((item) => filterId === item.id);
      if (filterId === 'all') {
        updateFilters.forEach((filter) => {
          filter.active = filter.id === 'all';
        });
      } else {
        const allFilter = updateFilters.find((item) => 'all' === item.id);
        allFilter.active = false;
        // First flip active state of clicked element
        selectedFilter.active = !selectedFilter.active;
        if (!resources.filters.some((item) => item.active)) {
          allFilter.active = true;
        }
      }
      const activeFilters = updateFilters.filter((filter) => filter.active);
      const filterArray = activeFilters.map((filter) => filter.name);
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
    if (!selectedResourceTypes.length) {
      dispatchResources({ type: 'RESOURCE_TYPE_ALL_SELECTED' });
    } else {
      const data = {
        contextTypes: selectedResourceTypes,
        resourceTypeItems: {},
      };
      resourceItems.forEach((item) => {
        if (selectedResourceTypes.indexOf(item.type) > -1) {
          data.resourceTypeItems[item.type] = item;
          if (item.items.length >= PAGESIZE_SINGLE) {
            data.resourceTypeItems[item.type] = item;
          } else {
            const activeFilters = item.filters.filter((filter) => filter.active);
            const filterArray = activeFilters.map((filter) => filter.name);
            const allFilteredItems = resourceItemsByTypeAndFilters(item.type, filterArray);
            data.resourceTypeItems[item.type] = {
              ...item,
              items: [...allFilteredItems.slice(0, PAGESIZE_SINGLE)],
            };
          }
        }
      });
      dispatchResources({ type: 'RESOURCE_TYPE_SELECTED', ...data });
    }
  }, [selectedResourceTypes]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleShowMore = (type) => {
    dispatchResources({ type: 'RESOURCE_TYPE_LOADING', context: type });
    mockSearchDelay().then(() => {
      const currentShown = resourceItems.find((item) => item.type === type);

      const activeFilters = currentShown.filters.filter((filter) => filter.active);
      const filterArray = activeFilters.map((filter) => filter.name);
      const allFilteredItems = resourceItemsByTypeAndFilters(type, filterArray);

      const data = { contextType: type };
      data.items = [
        ...allFilteredItems.slice(currentShown.items.length, currentShown.items.length + currentShown.pageSize),
      ];
      dispatchResources({ type: 'RESOURCE_TYPE_ADD_ITEMS', ...data });
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchPhrase(searchValue);
    setSearchPhraseSuggestion('');
  };
  const handleFilterRemove = (value) => {
    setSubjectFilter(subjectFilter.filter((option) => option !== value));
    setProgrammeFilter(programmeFilter.filter((option) => option !== value));
    setCompetenceGoalFilter(competenceGoalFilter.filter((option) => option !== value));
  };

  const handleContentTypeFilterToggle = (value) => {
    const index = selectedResourceTypes.indexOf(value);
    const updated = [...selectedResourceTypes];
    if (index > -1) {
      updated.splice(index, 1);
    } else {
      updated.push(value);
    }
    setSelectedResourceTypes(updated);
  };

  const activeSubjectFilters = [];
  subjectCategories.forEach((category) => {
    category.subjects.forEach((subject) => {
      if (subjectFilter.includes(subject.id)) {
        activeSubjectFilters.push({
          name: subject.name,
          value: subject.id,
          title: subject.name,
        });
      }
    });
  });
  programmes.forEach((item) => {
    if (programmeFilter.includes(item.id)) {
      activeSubjectFilters.push({
        name: item.label,
        value: item.id,
        title: item.label,
      });
    }
  });
  competenceGoals.forEach((item) => {
    if (competenceGoalFilter.includes(item.id)) {
      activeSubjectFilters.push({
        name: item.name,
        value: item.id,
        title: item.name,
      });
    }
  });

  const subjectFilterProps = {
    messages: {
      filterLabel: t('searchPage.searchFilterMessages.filterLabel'),
      closeButton: t('searchPage.close'),
      buttonText: t('searchPage.searchFilterMessages.noValuesButtonText'),
    },
    programmes: {
      options: programmes.map((item) => ({ name: item.label, ...item })),
      values: programmeFilter,
      onProgrammeValuesChange: setProgrammeFilter,
    },
    subjectCategories: {
      categories: subjectCategories,
      values: subjectFilter,
      onSubjectValuesChange: setSubjectFilter,
    },
  };

  const visibleResourceTypes = resourceItems.filter((item) => item.active);
  const contentTypeFilters = searchSubjectTypeOptions.map((item) => {
    return {
      ...item,
      selected: selectedResourceTypes.indexOf(item.value) > -1,
    };
  });

  const searchPhraseText = competenceGoalFilter.length
    ? `${t('competenceGoals.competenceGoal')} ${competenceGoalFilter.join(', ')} ${
        searchPhrase && ` - ${searchPhrase}`
      }`
    : searchPhrase;

  return (
    <>
      <SearchHeader
        searchPhrase={searchPhraseText}
        searchPhraseSuggestion={searchPhraseSuggestion}
        searchPhraseSuggestionOnClick={
          () => console.log('search-phrase suggestion click') // eslint-disable-line no-console
        }
        searchValue={searchValue}
        onSearchValueChange={(value) => setSearchValue(value)}
        onSubmit={handleSearchSubmit}
        activeFilters={{
          filters: activeSubjectFilters,
          onFilterRemove: handleFilterRemove,
        }}
        filters={subjectFilterProps}
        competenceGoals={
          showCompetenceGoals && competenceGoalFilter.length
            ? [
                {
                  id: 'KV112',
                  title: 'Vg2 yrkesfaglige utdanningsprogram (KV112)',
                  goals: [
                    {
                      text: 'kombinere virkemidler og uttrykksformer kreativt i egen tekstskaping (KM1196)',
                    },
                  ],
                },
              ]
            : undefined
        }
      />
      {!hideNotionsResult && !showCompetenceGoals && (
        <SearchNotionsResult
          items={notionsItems}
          totalCount={notionsItems.length}
          onRemove={() => {
            setHideNotionsResult(true);
          }}
        />
      )}
      {!showCompetenceGoals && <SearchSubjectResult id="search-result-content" items={subjectItems} />}
      <FilterButtons
        heading={t('searchPage.searchFilterMessages.resourceTypeFilter.heading')}
        items={contentTypeFilters}
        onFilterToggle={handleContentTypeFilterToggle}
        onRemoveAllFilters={() => setSelectedResourceTypes([])}
        labels={{
          openFilter: t('searchPage.searchFilterMessages.resourceTypeFilter.button'),
        }}
      />
      {visibleResourceTypes.map((item) => (
        <SearchTypeResult
          key={`search-result-${item.type}`}
          filters={item.filters}
          onFilterClick={(id) => handleFilterClick(item.type, id)}
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
    </>
  );
};

export default SearchPageDemo;
