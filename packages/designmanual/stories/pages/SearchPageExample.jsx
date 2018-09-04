import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Core, Additional } from 'ndla-icons/common';

import {
  SearchPage,
  SearchResult,
  SearchResultList,
  SearchFilter,
  SearchResultAuthor,
  SearchPopoverFilter,
  SubjectBadge,
  SubjectMaterialBadge,
  LearningPathBadge,
  AssessmentResourcesBadge,
  ExternalLearningResourcesBadge,
  TasksAndActivitiesBadge,
  Image,
} from 'ndla-ui';

import { injectT } from 'ndla-i18n';

import CompetenceGoalsExample from '../organisms/CompetenceGoalsExample';

import {
  searchTabOptions,
  searchTabFilterOptions,
  searchFilterOptions,
} from '../../dummydata/index';

const results = [
  {
    id: 1,
    title: 'Ideskapning og mediedesign',
    url: '#1',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    contentTypeLabel: 'Emne',
    contentTypeIcon: <SubjectBadge size="x-small" background />,
    breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
    matchTab: ['SUBJECT'],
  },
  {
    id: 2,
    title: 'Ideskapning og mediedesign',
    url: '#2',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    contentTypeLabel: 'Læringssti',
    contentTypeIcon: <LearningPathBadge size="x-small" background />,
    breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
    matchTab: ['LEARNING_PATH'],
  },
  {
    id: 3,
    title: 'Ideskapning og mediedesign',
    url: '#3',
    ingress:
      'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
    contentTypeLabel: 'Fagstoff',
    contentTypeIcon: <SubjectMaterialBadge size="x-small" background />,
    additional: true,
    image: (
      <Image
        alt="Forstørrelsesglass"
        src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
      />
    ),
    subjects: [
      {
        url: '#1',
        title: 'Flerfaglig',
      },
      {
        url: '#2',
        title: 'Medieuttrykk og mediesamfunnet',
      },
      {
        url: '#3',
        title: 'Norsk',
      },
    ],
    matchTab: ['SUBJECT_MATERIAL'],
  },
  {
    id: 4,
    title: 'Hva kan du om platetektonikk?',
    url: '#4',
    ingress:
      'Interaktiv oppgave om platetektonikkens påvirkning på jordskorpa. Hvilken retning beveger platene seg og hvilke resultater gir det? Plasser ord og bilder på riktig sted.',
    contentTypeLabel: 'Oppgaver og aktiveter',
    contentTypeIcon: <TasksAndActivitiesBadge size="x-small" background />,
    breadcrumb: [
      'Brønnteknikk',
      'Leting og boring',
      'Geologi for brønnteknikk',
    ],
    matchTab: ['TASKS_AND_ACTIVITIES'],
  },
  {
    id: 5,
    title: 'Brukertips medier og kommunikasjon Vg1',
    url: '#5',
    ingress:
      'Faget Medieuttrykk og mediesamfunnet Vg1 dekker kompetansemålene i de to felles programfagene i utdanningsprogrammet medier og kommunikasjon.',
    contentTypeLabel: 'Vurderingsressurs',
    contentTypeIcon: <AssessmentResourcesBadge size="x-small" background />,
    breadcrumb: ['Medieuttrykk og mediesamfunnet', 'Brukertips og årsplaner'],
    matchTab: ['EVALUATION_RESOURCE'],
  },
  {
    id: 6,
    title: 'En helt vanlig dag på jobben',
    url: '#6',
    ingress:
      'Filmen En helt vanlig dag på jobben er regissert av Terje Rangnes etter et manus av Erlend Loe. Manuset er basert på en bok av tidligere Se og Hør-journalist Håvard Melnæs med samme tittel.',
    contentTypeLabel: 'Delte ressurser',
    contentTypeIcon: (
      <ExternalLearningResourcesBadge size="x-small" background />
    ),
    breadcrumb: [
      'Medieuttrykk og mediesamfunnet',
      'Mediebransjen',
      'Journalistikk',
    ],
    matchTab: ['SHARED_RESOURCES'],
  },
];

const getActiveFilters = (filterName, fromOptions, currentState) => {
  if (currentState.length) {
    return currentState.map(value => {
      const activeFilter = fromOptions.find(option => option.value === value);
      activeFilter.filterName = filterName;
      return activeFilter;
    });
  }
  return [];
};

class SearchPageExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'all',
      competenceGoalsOpen: false,
      filter_subjects: ['subjects:medieuttrykk_og_mediesamfunnet'],
      filter_subject_values: {
        'subjects:medieuttrykk_og_mediesamfunnet': [],
      },
      filter_contentFilter: [],
      filter_contentTypeFilter: [],
      filter_languageFilter: [],
      filter_createdByFilter: [],
    };
  }

  render() {
    const { t } = this.props;
    const { currentTab } = this.state;
    const currentResult =
      currentTab === 'all'
        ? results
        : results.filter(result => result.matchTab.indexOf(currentTab) !== -1);

    const author = modifier =>
      this.props.showAuthor ? (
        <SearchResultAuthor
          modifier={modifier}
          messages={{
            authorName: 'Cecilie Isaksen Eftedal',
            role: 'Stilling / rolle',
            phone: '+47 123 45 678',
            email: 'cecilie@ndla.no',
            readmoreLabel: t('article.urlAuthorLabel', { name: 'Cecilie' }),
          }}
          url="/?selectedKind=Sidevisninger&selectedStory=Forfatter%20sidemal&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel"
          image="http://www.placehold.it/300x300"
        />
      ) : null;

    const contextFilter = searchTabFilterOptions[currentTab] ? (
      <SearchFilter
        contextFilter
        label={t('searchPage.abilities')}
        options={searchTabFilterOptions[currentTab]}
        values={['value']}
      />
    ) : null;

    const onSearch = evt => {
      evt.preventDefault();
    };

    const activeSubjectFilters = searchFilterOptions.subjects.filter(option =>
      this.state.filter_subjects.includes(option.value),
    );

    const activeSubjects = [].concat(
      ...this.state.filter_subjects.map(subjectKey =>
        searchFilterOptions.subjects
          .find(option => option.value === subjectKey)
          .subjectFilters.filter(
            subjectFilter =>
              this.state.filter_subject_values[subjectKey] &&
              this.state.filter_subject_values[subjectKey].includes(
                subjectFilter.value,
              ),
          )
          .map(subjects => ({
            filterName: subjectKey,
            ...subjects,
          })),
      ),
    );

    const activeOtherFilters = [
      ...activeSubjects,
      ...getActiveFilters(
        'filter_contentFilter',
        searchFilterOptions.contentFilter,
        this.state.filter_contentFilter,
      ),
      ...getActiveFilters(
        'filter_contentTypeFilter',
        searchFilterOptions.contentTypeFilter,
        this.state.filter_contentTypeFilter,
      ),
      ...getActiveFilters(
        'filter_languageFilter',
        searchFilterOptions.languageFilter,
        this.state.filter_languageFilter,
      ),
      ...getActiveFilters(
        'filter_createdByFilter',
        searchFilterOptions.createdByFilter,
        this.state.filter_createdByFilter,
      ),
    ];

    const authorTablet = author('tablet');
    const authorDesktop = author('desktop');
    const hasAuthor = authorTablet !== null;
    const searchString = this.props.competenceGoals
      ? 'Kompetansemål'
      : 'Ideskaping';

    return (
      <SearchPage
        searchString={hasAuthor ? '«Cecilie Isaksen Eftedal»' : searchString}
        hideResultText={this.state.competenceGoalsOpen}
        onSearchFieldChange={() => {}}
        onSearchFieldFilterRemove={(value, filterName) => {
          if (this.state[filterName]) {
            this.setState(prevState => ({
              [filterName]: prevState[filterName].filter(
                option => option !== value,
              ),
            }));
          } else {
            this.setState(prevState => {
              const currentFilterSubjects = prevState.filter_subject_values;
              currentFilterSubjects[filterName] = currentFilterSubjects[
                filterName
              ].filter(option => option !== value);
              return {
                filter_subject_values: currentFilterSubjects,
              };
            });
          }
        }}
        onSearch={onSearch}
        searchFieldFilters={activeSubjectFilters}
        activeFilters={activeSubjectFilters.concat(activeOtherFilters)}
        author={authorTablet}
        messages={{
          resultHeading: hasAuthor
            ? t('searchPage.searchPageMessages.resultHeadingByAuthor', {
                totalCount: 37,
                author: 'Cecilie',
              })
            : t('searchPage.searchPageMessages.resultHeading', {
                totalCount: 43,
              }),
          narrowScreenFilterHeading: '10 treff på «ideutvikling»',
        }}
        resourceToLinkProps={() => {}}
        filters={
          <Fragment>
            <SearchFilter
              label={t('searchPage.label.subjects')}
              noFilterSelectedLabel={t('searchPage.label.noFilter')}
              options={searchFilterOptions.subjects.filter(option =>
                this.state.filter_subjects.includes(option.value),
              )}
              onChange={values => {
                this.setState({ filter_subjects: values });
              }}
              values={this.state.filter_subjects}>
              <SearchPopoverFilter
                messages={{
                  backButton: t('searchPage.searchFilterMessages.backButton'),
                  filterLabel: t('searchPage.searchFilterMessages.filterLabel'),
                  closeButton: t('searchPage.searchFilterMessages.closeFilter'),
                  confirmButton: t(
                    'searchPage.searchFilterMessages.confirmButton',
                  ),
                  hasValuesButtonText: t(
                    'searchPage.searchFilterMessages.hasValuesButtonText',
                  ),
                  noValuesButtonText: t(
                    'searchPage.searchFilterMessages.noValuesButtonText',
                  ),
                }}
                options={searchFilterOptions.subjects}
                values={this.state.filter_subjects}
                onChange={values => {
                  this.setState({ filter_subjects: values });
                }}
              />
            </SearchFilter>
            {this.state.filter_subjects.map(subjectValue => {
              const subjectOption = searchFilterOptions.subjects.find(
                option => option.value === subjectValue,
              );
              return (
                <SearchFilter
                  key={subjectValue}
                  label={`${subjectOption.title}:`}
                  options={subjectOption.subjectFilters}
                  values={this.state.filter_subject_values[subjectValue]}
                  onChange={values => {
                    this.setState(prevState => {
                      const newValues = prevState.filter_subject_values;
                      newValues[subjectValue] = values;
                      return {
                        filter_subject_values: newValues,
                      };
                    });
                  }}
                />
              );
            })}
            <SearchFilter
              label={t('searchPage.label.contentTypes')}
              narrowScreenOnly
              defaultVisibleCount={2}
              showLabel={t('searchPage.showLabel.contentTypes')}
              hideLabel={t('searchPage.hideLabel.contentTypes')}
              options={searchFilterOptions.contentTypeFilter}
              values={this.state.filter_contentTypeFilter}
              onChange={values => {
                this.setState({ filter_contentTypeFilter: values });
              }}
            />
            <SearchFilter
              label={t('searchPage.label.content')}
              options={searchFilterOptions.contentFilter.map(option => ({
                title: option.title,
                value: option.value,
                icon: option.additional ? Additional : Core,
              }))}
              values={this.state.filter_contentFilter}
              onChange={values => {
                this.setState({ filter_contentFilter: values });
              }}
            />
            <SearchFilter
              label={t('searchPage.label.language-filter')}
              options={searchFilterOptions.languageFilter}
              defaultVisibleCount={2}
              showLabel={t('searchPage.showLabel.language-filter')}
              hideLabel={t('searchPage.hideLabel.language-filter')}
              values={this.state.filter_languageFilter}
              onChange={values => {
                this.setState({ filter_languageFilter: values });
              }}
            />
            <SearchFilter
              label={t('searchPage.label.createdBy')}
              options={searchFilterOptions.createdByFilter}
              values={this.state.filter_createdByFilter}
              onChange={values => {
                this.setState({ filter_createdByFilter: values });
              }}
            />
          </Fragment>
        }>
        <SearchResult
          author={authorDesktop}
          messages={{
            searchStringLabel: t(
              'searchPage.searchResultMessages.searchStringLabel',
            ),
            subHeading: t('searchPage.searchPageMessages.resultHeading', {
              totalCount: 43,
            }),
            openCompetenceGoalsButtonPrefix: '1 av',
            openCompetenceGoalsButton:
              '16 kompetansemål i medieuttrykk- og mediesamfunnet',
          }}
          currentCompetenceGoal={
            this.props.competenceGoals
              ? 'Planlegge, produsere og presentere tekst, lyd, stillbilder, levende bilder og kombinasjoner av disse i aktuelle formater og standarder til trykte og elektroniske medier'
              : null
          }
          competenceGoals={
            this.props.competenceGoals ? (
              <CompetenceGoalsExample search />
            ) : null
          }
          competenceGoalsOpen={this.state.competenceGoalsOpen}
          onToggleCompetenceGoals={() => {
            this.setState(prevState => ({
              competenceGoalsOpen: !prevState.competenceGoalsOpen,
            }));
          }}
          searchString={hasAuthor ? null : searchString}
          tabOptions={searchTabOptions}
          onTabChange={newCurrentTab => {
            this.setState({
              currentTab: newCurrentTab,
            });
          }}
          currentTab={currentTab}>
          {contextFilter}
          <SearchResultList results={currentResult} />
        </SearchResult>
      </SearchPage>
    );
  }
}

SearchPageExample.propTypes = {
  showAuthor: PropTypes.bool,
  competenceGoals: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

SearchPageExample.defaultProps = {
  showAuthor: false,
  competenceGoals: false,
};

export default injectT(SearchPageExample);
