import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import {
  PageContainer,
  Content,
  SearchPage,
  SearchResult,
  SearchResultList,
  OneColumn,
  SubjectBadge,
  SubjectMaterialBadge,
  LearningPathBadge,
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
        <MastheadWithTopicMenu />
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
                <div>Test</div>
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
                          url: '#',
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
                              url: '#2',
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
