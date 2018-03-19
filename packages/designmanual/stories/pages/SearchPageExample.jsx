import React, { Fragment, Component } from 'react';
import { Additional } from 'ndla-icons/common';

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
        title: 'Ideskapning og mediedesign',
        url: '#1',
        ingress:
          'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
        contentTypeLabel: 'Emne',
        contentTypeIcon: <SubjectBadge size="x-small" />,
        breadcrumb: ['Mediene i samfunnet', 'Mediestruktur i Norge'],
      },
      {
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
      this.state.currentTab !== 'all' && currentResult.length > 0 ? (
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

    return (
      <SearchPage
        closeUrl="#"
        searchString=""
        onSearchFieldChange={() => {}}
        searchFieldPlaceholder="Søk i fagstoff, oppgaver og aktiviteter eller læringsstier"
        onSearchFieldFilterRemove={() => {}}
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
              label="Medieuttrykk og mediasamfunnet"
              options={[
                {
                  title: 'Medieuttrykk',
                  value: 'value',
                },
                {
                  title: 'Mediesamfunnet',
                  value: 'value2',
                },
              ]}
              values={['value']}>
              <SearchPopoverFilter
                messages={{
                  backButton: 'Tilbake til filter',
                  filterLabel: 'Velg fag',
                  closeButton: 'Lukk',
                  confirmButton: 'Bruk fag',
                  hasValuesButtonText: 'Bytt fag',
                  noValuesButtonText: 'Velg fag',
                }}
                options={[
                  {
                    title: 'Kinesisk',
                    value: 'value1',
                  },
                  {
                    title: 'Brønnteknikk',
                    value: 'value2',
                  },
                  {
                    title: 'Markedsføring og ledelse',
                    value: 'value3',
                  },
                  {
                    title: 'Naturbruk',
                    value: 'value4',
                  },
                ]}
                values={[]}
              />
            </SearchFilter>
            <SearchFilter
              label="Innholdstype"
              narrowScreenOnly
              defaultVisibleCount={3}
              showLabel="Flere innholdstyper"
              hideLabel="Færre innholdstyper"
              options={[
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
                {
                  title: 'Ekstern læringsressurs',
                  value: 'EXTERNAL_LEARNING_RESOURCES',
                },
                {
                  title: 'Kildemateriale',
                  value: 'SOURCE_MATERIAL',
                },
              ]}
              values={['LEARNING_PATH']}
            />
            <SearchFilter
              label="Nivå"
              options={[
                {
                  title: 'VG1 (15)',
                  value: 'VG1',
                },
                {
                  title: 'VG2 (20)',
                  value: 'VG2',
                },
                {
                  title: 'VG3',
                  value: 'VG3',
                  noResults: true,
                },
              ]}
              values={[]}
            />
            <SearchFilter
              label="Innhold"
              options={[
                {
                  title: 'Tilleggstoff',
                  value: 'additional',
                  icon: Additional,
                },
              ]}
              values={['additional']}
            />
            <SearchFilter
              label="Språk"
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
              defaultVisibleCount={3}
              showLabel="Flere språk"
              hideLabel="Færre språk"
            />
            <SearchFilter
              label="Laget av"
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
              value: 'all',
              title: 'Alle',
            },
            {
              value: 'subject',
              title: 'Emne',
            },
            {
              value: 'subjectMaterial',
              title: 'Fagstoff',
            },
            {
              value: 'learningPath',
              title: 'Læringssti',
            },
            {
              value: 'externalLearningResources',
              title: 'Ekstern læringsressurs',
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
