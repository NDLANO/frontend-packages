import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Additional } from 'ndla-icons/common';

import {
  PageContainer,
  Content,
  SearchPage,
  SearchResult,
  SearchResultList,
  SearchFilter,
  OneColumn,
  SubjectBadge,
  SubjectMaterialBadge,
  LearningPathBadge,
  Image,
} from 'ndla-ui';

import { MastheadWithTopicMenu } from './molecules/mastheads';
import FooterExample from './molecules/footers';

storiesOf('Søk', module)
  .add('Søkefelt', () => (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu searchFieldExpanded />
      </Content>
    </PageContainer>
  ))
  .add('Søkeside', () => (
    <PageContainer background>
      <Content>
        <MastheadWithTopicMenu hideOnNarrowScreen hideSearchButton />
        <OneColumn cssModifier="clear" wide noPadding>
          <SearchPage
            searchString=""
            onSearchFieldChange={() => {}}
            searchFieldPlaceholder="Søk..."
            onSearchFieldFilterRemove={() => {}}
            searchFieldFilters={[
              {
                value: 'value',
                display: 'Medieuttrykk og mediesamfunn',
              },
            ]}
            messages={{
              filterHeading: 'Filter',
              resultHeading: '43 treff i Ndla',
            }}
            filters={
              <Fragment>
                <SearchFilter
                  label="Nivå"
                  options={[
                    {
                      title: 'VG1',
                      value: 'VG1',
                    },
                    {
                      title: 'VG2',
                      value: 'VG2',
                    },
                    {
                      title: 'VG3',
                      value: 'VG3',
                    },
                  ]}
                  values={['VG1']}
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
              </Fragment>
            }>
            <SearchResult
              messages={{
                searchStringLabel: 'Du søkte på:',
              }}
              searchString="Test"
              tabs={[
                {
                  title: 'Alle',
                  content: (
                    <SearchResultList
                      messages={{
                        subjectsLabel: 'Åpne i fag:',
                      }}
                      results={[
                        {
                          title: 'Ideskapning og mediedesign',
                          url: '#1',
                          ingress:
                            'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
                          contentTypeLabel: 'Emne',
                          contentTypeIcon: <SubjectBadge size="x-small" />,
                          breadcrumb: [
                            'Mediene i samfunnet',
                            'Mediestruktur i Norge',
                          ],
                        },
                        {
                          title: 'Ideskapning og mediedesign',
                          url: '#2',
                          ingress:
                            'Trykkpressen til Gutenberg og Tim Berners Lees The World Wide Web er begge revolusjonerende oppfinnelser som har endret historien. Utgangspunktet var en god idé.',
                          contentTypeLabel: 'Fagstoff',
                          contentTypeIcon: (
                            <SubjectMaterialBadge size="x-small" />
                          ),
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
                              display: 'Flerfaglig',
                            },
                            {
                              url: '#2',
                              display: 'Medieuttrykk og mediesamfunn',
                            },
                            {
                              url: '#3',
                              display: 'Norsk',
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
                          breadcrumb: [
                            'Mediene i samfunnet',
                            'Mediestruktur i Norge',
                          ],
                        },
                      ]}
                    />
                  ),
                },
              ]}
            />
          </SearchPage>
        </OneColumn>
      </Content>
      <FooterExample />
    </PageContainer>
  ));
