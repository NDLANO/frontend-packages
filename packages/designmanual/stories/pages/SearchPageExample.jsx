import React, { Fragment, Component } from 'react';
import { Core, Additional } from 'ndla-icons/common';

import {
  SearchPage,
  SearchResult,
  SearchResultList,
  SearchFilter,
  SearchPopoverFilter,
  SubjectBadge,
  SubjectMaterialBadge,
  LearningPathBadge,
  Image,
  Button,
} from 'ndla-ui';

class SearchPageExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'all',
    };
  }
  render() {
    const results = [
      {
        id: 1,
        title: 'Ideskapning og mediedesign',
        url: '#1',
        ingress:
          'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
        contentTypeLabel: 'Emne',
        contentTypeIcon: <SubjectBadge size="x-small" />,
        breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
      },
      {
        id: 2,
        title: 'Ideskapning og mediedesign',
        url: '#2',
        ingress:
          'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
        contentTypeLabel: 'Fagstoff',
        contentTypeIcon: <SubjectMaterialBadge size="x-small" />,
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
            title: 'Medieuttrykk og mediesamfunn',
          },
          {
            url: '#3',
            title: 'Norsk',
          },
        ],
      },
      {
        id: 3,
        title: 'Ideskapning og mediedesign',
        url: '#3',
        ingress:
          'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
        contentTypeLabel: 'Læringssti',
        contentTypeIcon: <LearningPathBadge size="x-small" />,
        breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
      },
    ];

    let currentResult = null;

    switch (this.state.currentTab) {
      case 'learningPath':
        currentResult = [results[2]];
        break;
      case 'subject':
        currentResult = [results[0]];
        break;
      case 'subjectMaterial':
        currentResult = [results[1]];
        break;
      case 'externalLearningResources':
        currentResult = [];
        break;
      default:
        currentResult = results;
    }

    const contextFilter =
      this.state.currentTab !== 'all' &&
      this.state.currentTab !== 'LEARNING_PATH' &&
      currentResult.length > 0 ? (
        <SearchFilter
          contextFilter
          label="Egenskaper"
          options={[
            {
              title: 'Film og filmklipp',
              value: 'value',
            },
            {
              title: 'Fagartikkel',
              value: 'value1',
            },
            {
              title: 'Veilleding',
              value: 'value2',
            },
            {
              title: 'Verktøy og mal',
              value: 'value3',
            },
            {
              title: 'Verktøy og mal',
              value: 'value4',
            },
          ]}
          values={['value']}
        />
      ) : null;

    const onSearch = evt => {
      evt.preventDefault();
    };
    return (
      <SearchPage
        closeUrl="#"
        searchString=""
        onSearchFieldChange={() => {}}
        searchFieldPlaceholder="Søk i fagstoff, oppgaver og aktiviteter eller læringsstier"
        onSearchFieldFilterRemove={() => {}}
        onSearch={onSearch}
        searchFieldFilters={[
          {
            value: 'value',
            title: 'Medieuttrykk og mediesamfunn',
          },
        ]}
        activeFilters={[
          {
            value: 'value',
            title: 'Medieuttrykk og mediesamfunn',
            filterName: 'subject',
          },
          {
            value: 'value2',
            title: 'Kjernestoff',
            filterName: 'content',
          },
        ]}
        onActiveFilterRemove={() => {}}
        messages={{
          filterHeading: 'Filter',
          resultHeading: '43 treff i Ndla',
          closeButton: 'Lukk',
          narrowScreenFilterHeading: '10 treff på «ideutvikling»',
          searchFieldTitle: 'Søk',
        }}
        resourceToLinkProps={() => {}}
        filters={
          <Fragment>
            <SearchFilter
              label="Fag:"
              options={[
                {
                  title: 'Medieuttrykk og mediasamfunnet',
                  value: 'value',
                },
              ]}
              values={['value']}>
              <SearchPopoverFilter
                messages={{
                  backButton: 'Tilbake til filter',
                  filterLabel: 'Velg fag',
                  closeButton: 'Lukk',
                  confirmButton: 'Bruk fag',
                  hasValuesButtonText: 'Vis flere fag',
                  noValuesButtonText: 'Filtrer på fag',
                }}
                options={[
                  {
                    title: 'Brønnteknikk',
                    value: 'value2',
                  },
                  {
                    title: 'Kinesisk',
                    value: 'value1',
                  },
                  {
                    title: 'Markedsføring og ledelse',
                    value: 'value3',
                  },
                  {
                    title: 'Medieuttrykk og mediasamfunnet',
                    value: 'value',
                  },
                  {
                    title: 'Naturbruk',
                    value: 'value4',
                  },
                ]}
                values={['value']}
              />
            </SearchFilter>
            <SearchFilter
              label="Medieuttrykk og mediasamfunnet:"
              options={[
                {
                  title: 'Medieuttrykk',
                  value: 'value',
                },
                {
                  title: 'Mediesamfunnet',
                  value: 'value1',
                },
                {
                  title: 'VG1',
                  value: 'value2',
                },
                {
                  title: 'VG2',
                  value: 'value3',
                },
                {
                  title: 'VG3',
                  value: 'value4',
                },
              ]}
              values={[]}
            />
            <SearchFilter
              label="Innholdstype:"
              narrowScreenOnly
              defaultVisibleCount={2}
              showLabel="Flere innholdstyper"
              hideLabel="Færre innholdstyper"
              options={[
                {
                  title: 'Emne',
                  value: 'SUBJECT',
                },
                {
                  title: 'Læringssti',
                  value: 'LEARNING_PATH',
                },
                {
                  title: 'Fagstoff',
                  value: 'SUBJECT_MATERIAL',
                },
                {
                  title: 'Oppgaver og aktiviteter',
                  value: 'TASKS_AND_ACTIVITIES',
                },
              ]}
              values={['LEARNING_PATH']}
            />
            <SearchFilter
              label="Innhold:"
              options={[
                {
                  title: 'Tilleggstoff',
                  value: 'additional',
                  icon: Additional,
                },
                {
                  title: 'Kjernestoff',
                  value: 'core',
                  icon: Core,
                },
              ]}
              values={['additional']}
            />
            <SearchFilter
              label="Språk:"
              options={[
                {
                  title: 'Bokmål',
                  value: 'nb',
                },
                {
                  title: 'Nynorsk',
                  value: 'nn',
                },
                {
                  title: 'Engelsk',
                  value: 'en',
                },
                {
                  title: 'Kinesisk',
                  value: 'cn',
                },
              ]}
              values={['nb']}
              defaultVisibleCount={2}
              showLabel="Flere språk"
              hideLabel="Færre språk"
            />
            <SearchFilter
              label="Laget av:"
              options={[
                {
                  title: 'Ndla',
                  value: 'ndla',
                },
                {
                  title: 'Andre',
                  value: 'other',
                },
              ]}
              values={['ndla']}
            />
            <Button outline>Vis flere filter</Button>
          </Fragment>
        }>
        <SearchResult
          messages={{
            searchStringLabel: 'Du søkte på:',
            subHeading: '43 treff i Ndla',
          }}
          searchString="Test"
          tabOptions={[
            {
              title: 'Alle',
              value: 'all',
            },
            {
              title: 'Emne',
              value: 'SUBJECT',
            },
            {
              title: 'Læringssti',
              value: 'LEARNING_PATH',
            },
            {
              title: 'Fagstoff',
              value: 'SUBJECT_MATERIAL',
            },
            {
              title: 'Oppgaver og aktiviteter',
              value: 'TASKS_AND_ACTIVITIES',
            },
          ]}
          onTabChange={currentTab => {
            this.setState({
              currentTab,
            });
          }}
          currentTab={this.state.currentTab}>
          {contextFilter}
          <SearchResultList
            messages={{
              subjectsLabel: 'Åpne i fag:',
              noResultHeading: 'Hmm, ikke noe innhold ...',
              noResultDescription:
                'Vi har dessverre ikke noe å tilby her. Hvis du vil foreslå noe innhold til dette området, kan du bruke Spør NDLA som du finner nede til høyre på skjermen.',
            }}
            results={currentResult}
          />
        </SearchResult>
      </SearchPage>
    );
  }
}

export default SearchPageExample;
