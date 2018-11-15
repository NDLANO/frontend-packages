/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import { FileStructure } from 'ndla-editor';
import styled, { cx, css } from 'react-emotion';
import Button from 'ndla-button';
import { FormHeader, FormSections, FormDropdown } from 'ndla-forms';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from 'ndla-modal';
import { Additional, Core } from 'ndla-icons/common';
import { colors, spacing, fonts, shadows, animations } from 'ndla-core';
import { headerWithAccessToken, getToken } from '../apiFunctions';
import { Object } from 'core-js';

const sortByName = (a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

const filterToSubjects = allFilters => {
  const filterObjects = {};
  allFilters.forEach(filter => {
    if (!filterObjects[filter.subjectId]) {
      filterObjects[filter.subjectId] = [];
    }
    filterObjects[filter.subjectId].push(filter);
  });
  Object.keys(filterObjects).forEach(subjectId => {
    filterObjects[subjectId] = filterObjects[subjectId].sort(sortByName);
  });
  return filterObjects;
};

const fetchData = url =>
  new Promise((resolve, reject) => {
    getToken().then(token => {
      fetch(url, {
        method: 'GET',
        headers: headerWithAccessToken(token),
      }).then(res => {
        if (res.ok) {
          return resolve(res.json());
        }
        return res.json().then(json => reject(json));
      });
    });
  });

const fetchTopics = (ids, lang) =>
  Promise.all(
    ids.map(id =>
      fetchData(
        `https://test.api.ndla.no/taxonomy/v1/topics/${id}/?language=${lang}`,
      ),
    ),
  )
    .then(result => result)
    .catch(err => {
      console.log(err);
    });

const fetchResourceConnections = (resourceId, lang) =>
  Promise.all([
    fetchData(
      `https://test.api.ndla.no/taxonomy/v1/resources/${resourceId}/full/?language=${lang}`,
    ),
  ])
    .then(result => result)
    .catch(err => {
      console.log(err);
    });

const fetchSubjectsAndFilters = lang =>
  Promise.all([
    fetchData(
      `https://test.api.ndla.no/taxonomy/v1/subjects/?language=${lang}`,
    ),
    fetchData(`https://test.api.ndla.no/taxonomy/v1/filters`),
  ])
    .then(result => result)
    .catch(err => {
      console.log(err);
    });

const fetchSubjectsTopics = (subjectId, lang) =>
  Promise.all([
    fetchData(
      `https://test.api.ndla.no/taxonomy/v1/subjects/${subjectId}/topics/?recursive=true&language=${lang}`,
    ),
  ])
    .then(result => result[0])
    .catch(err => {
      console.log(err);
    });

const fetchResourceTypes = lang =>
  new Promise((resolve, reject) => {
    getToken().then(token => {
      fetch(
        `https://test.api.ndla.no/taxonomy/v1/resource-types/?language=${lang}`,
        {
          method: 'GET',
          headers: headerWithAccessToken(token),
        },
      ).then(res => {
        if (res.ok) {
          return resolve(res.json());
        }
        return res.json().then(json => reject(json));
      });
    });
  });

const TitleModal = styled('h1')`
  color: ${colors.text.primary};
`;

const Spinner = styled('div')`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-bottom-color: ${colors.brand.primary};
  border-radius: 50%;
  animation: loadVideoSpinner 0.7s linear infinite;
  height: ${spacing.large};
  width: ${spacing.large};
  display: block;
  margin: ${spacing.normal} auto;
`;

const SpinnerWrapper = styled('div')`
  width: 75%;
`;

const RelevanceTitle = styled('div')`
  ${fonts.sizes(16, 1.2)} font-weight: ${fonts.weight.semibold};
  color: ${colors.text.primary};
  margin: ${spacing.small};
`;

const AddTitle = styled('span')`
  ${fonts.sizes(16, 1.2)} font-weight: ${fonts.weight.semibold};
  text-transform: uppercase;
  color: ${colors.text.primary};
  opacity: ${props => (props.show ? 1 : 0)};
  display: flex;
  align-items: center;
  padding-right: ${spacing.small};
  white-space: no-wrap;
`;

const ConnectionButton = styled('button')`
  border: 0;
  margin: 0 0 0 ${spacing.xsmall};
  background: none;
  transition: opacity 100ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: ${spacing.xsmall};
  color: ${colors.brand.primary};
  ${fonts.sizes(14, 1.2)} white-space: no-wrap;
  &:disabled {
    color: ${colors.brand.light};
  }
  > span:first-child {
    border: 2px solid ${colors.brand.tertiary};
    background: transparent;
    width: 18px;
    height: 18px;
    margin: 4px ${spacing.xsmall} 4px 0;
    border-radius: 2px;
    position: relative;

    &:before {
      content: '';
      width: 0px;
      height: 2px;
      border-radius: 2px;
      position: absolute;
      background: ${colors.brand.tertiary};
      transform: rotate(45deg);
      transition: width 50ms ease;
      transform-origin: 0% 0%;
      top: 7px;
      left: 4px;
    }

    &:after {
      content: '';
      width: 0px;
      height: 2px;
      border-radius: 2px;
      position: absolute;
      background: ${colors.brand.tertiary};
      transform: rotate(305deg);
      transition: width 50ms ease;
      transform-origin: 0% 0%;
      top: 10px;
      left: 5px;
    }
  }
  &:not(:disabled) {
    &:hover,
    &:focus {
      > span:first-child {
        &:before {
          width: 5px;
          transition: width 100ms ease;
        }
        &:after {
          width: 10px;
          transition: width 150ms ease 100ms;
        }
      }
    }
  }
  &.checkboxItem--checked {
    > span:first-child {
      background: ${colors.brand.primary};
      border: 2px solid ${colors.brand.primary};
      &:before {
        width: 5px;
        transition: width 100ms ease;
        background: #fff;
      }
      &:after {
        width: 10px;
        transition: width 150ms ease 100ms;
        background: #fff;
      }
    }
  }
`;

const buttonAddition = css`
  opacity: 0;
  height: auto;
  padding: 0 ${spacing.small};
  margin: 3px ${spacing.xsmall};
  ${fonts.sizes(14, 1.1)};
`;

const listClass = css`
  > div {
    > .filestructure {
      display: flex;
      &:focus-within {
        > button {
          opacity: 1;
        }
      }
    }
    &:hover {
      background: #f1f5f8;
      .filestructure {
        > button,
        > span {
          opacity: 1;
        }
      }
    }
  }
  &.active {
    .filestructure {
      > button,
      > span {
        opacity: 1;
      }
    }
  }
`;

const connectSubConnections = (items, parents) => {
  const currentParents = parents;
  items.forEach(connection => {
    const currentConnection = connection;
    if (parents[currentConnection.id]) {
      currentConnection.subtopics = parents[currentConnection.id];
      delete currentParents[currentConnection.id];
      connectSubConnections(connection.subtopics, currentParents);
    } else {
      currentConnection.subtopics = [];
    }
  });
};

const connectionTopicsToParent = (unConnectedTopics, id) => {
  const parents = {};
  // Group into arrays
  unConnectedTopics.forEach(unconnected => {
    if (!parents[unconnected.parent]) {
      parents[unconnected.parent] = [];
    }
    parents[unconnected.parent].push(unconnected);
  });
  // Sort groups by name
  Object.keys(parents).forEach(parentKey => {
    parents[parentKey] = parents[parentKey].sort(sortByName);
  });
  // Get all direct connections
  const directConnections = parents[id];
  delete parents[id];
  // Connect subconnections
  connectSubConnections(directConnections, parents);
  return directConnections;
};

class FileStructureExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      structure: [],
      loadedEssentials: false,
      resourceTypes: [],
      resourceTypeSelected: '',
      FileStructureFilters: [],
      availableFilters: [],
    };
    this.renderListItems = this.renderListItems.bind(this);
    this.onOpenPath = this.onOpenPath.bind(this);
    this.updateResourceType = this.updateResourceType.bind(this);
  }

  componentDidMount() {
    fetchResourceTypes('nb')
      .then(result => {
        this.setState({
          resourceTypes: result,
        });
      })
      .catch(err => {
        console.log(err);
      });

    fetchSubjectsAndFilters('nb')
      .then(result => {
        this.setState(
          {
            structure: result[0].sort(sortByName),
            availableFilters: filterToSubjects(result[1]),
          },
          () => {
            fetchResourceConnections('urn:resource:1:148635', 'nb')
              .then(resourceResult => {
                this.setState({
                  resource: resourceResult[0],
                });
                // Fetch all topics where this connection has been added..
                const fetchTopicsWithId = resourceResult[0].parentTopics.map(
                  parentTopic => parentTopic.id,
                );
                fetchTopics(fetchTopicsWithId, 'nb')
                  .then(topicResults => {
                    const getSubjects = topicResults.map(
                      topic => topic.path.split('/')[1],
                    );
                    this.requestedSubjectsOnLoad = 0;
                    const requestedSubjects = [];
                    getSubjects.forEach(id => {
                      if (!requestedSubjects.includes(id)) {
                        requestedSubjects.push(id);
                        this.requestedSubjectsOnLoad += 1;
                        this.onOpenPath({
                          id: `urn:${id}`,
                          level: 0,
                          updateResource: true,
                        });
                      }
                    });
                  })
                  .catch(err => {
                    console.log(err);
                  });
              })
              .catch(err => {
                console.log(err);
              });
          },
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  onOpenPath({ id, level, updateResource }) {
    if (level === 0) {
      // already loaded?
      const index = this.state.structure.findIndex(
        subject => subject.id === id,
      );
      if (
        !this.state.structure[index].subtopics &&
        !this.state.structure[index].loading
      ) {
        this.setState(
          prevState => {
            const { structure } = prevState;
            structure[index].loading = true;
            return {
              structure,
            };
          },
          () => {
            fetchSubjectsTopics(id, 'nb')
              .then(result => {
                const { structure } = this.state;
                const { id: subjectId } = structure[index];

                structure[index].subtopics = connectionTopicsToParent(
                  result,
                  subjectId,
                );

                structure[index].loading = false;
                this.setState(
                  {
                    structure,
                  },
                  () => {
                    if (updateResource) {
                      // Update connection for resource for easier access..
                      this.requestedSubjectsOnLoad -= 1;
                      this.getPathsFromResourceTopics({
                        mapToSubject: structure[index].subtopics,
                        subjectId: structure[index].id,
                        subjectName: structure[index].name,
                        loadedEssentials: this.requestedSubjectsOnLoad === 0,
                      });
                    }
                  },
                );
              })
              .catch(err => {
                console.log(err);
              });
          },
        );
      }
    }
  }

  getPathsFromResourceTopics({
    mapToSubject,
    subjectName,
    subjectId,
    loadedEssentials,
  }) {
    const { resource } = this.state;
    const { parentTopics } = resource;

    if (parentTopics.length) {
      const allPaths = [];
      const getAllPaths = subtopics => {
        subtopics.forEach(subtopic => {
          allPaths.push(subtopic.path);
          if (subtopic.subtopics.length) {
            getAllPaths(subtopic.subtopics);
          }
        });
      };
      getAllPaths(mapToSubject);
      parentTopics.forEach((parentTopic, parentTopicIndex) => {
        const index = allPaths.findIndex(
          path =>
            `urn:${path.substr(path.lastIndexOf('/') + 1)}` === parentTopic.id,
        );
        if (index !== 0) {
          const pathTopicIds = allPaths[index].split('/').splice(2);
          const pathNames = [];
          let mappedTopics = mapToSubject;
          pathTopicIds.forEach(pathId => {
            mappedTopics = mappedTopics.find(
              topicId => topicId.id === `urn:${pathId}`,
            );
            pathNames.push(mappedTopics.name);
            mappedTopics = mappedTopics.subtopics;
          });
          parentTopics[parentTopicIndex].paths = [subjectName].concat(
            pathNames,
          );
          parentTopics[parentTopicIndex].subjectId = subjectId;
        }
      });
      resource.parentTopics = parentTopics;
    }
    this.setState({
      loadedEssentials,
      resource,
    });
  }

  updateResourceType(resourceTypeSelected) {
    this.setState({
      resourceTypeSelected,
    });
  }

  renderListItems({ paths, names, level, isOpen, id }) {
    const { availableFilters } = this.state;

    if (level === 0) {
      if (!availableFilters[paths[0]] || !isOpen) {
        return null;
      }
      return (
        <div className={cx('filestructure')}>
          <AddTitle show>Filtrer emner:</AddTitle>
          {availableFilters[paths[0]].map(filter => (
            <ConnectionButton
              type="button"
              key={filter.id}
              className={
                this.state.FileStructureFilters.some(
                  FileStructureFilter => FileStructureFilter === filter.id,
                )
                  ? 'checkboxItem--checked'
                  : ''
              }
              onClick={() => {
                const currentIndex = this.state.FileStructureFilters.findIndex(
                  FileStructureFilter => FileStructureFilter === filter.id,
                );
                if (currentIndex === -1) {
                  this.setState(prevState => {
                    const { FileStructureFilters } = prevState;
                    FileStructureFilters.push(filter.id);
                    return {
                      FileStructureFilters,
                    };
                  });
                } else {
                  this.setState(prevState => {
                    const { FileStructureFilters } = prevState;
                    FileStructureFilters.splice(currentIndex, 1);
                    return {
                      FileStructureFilters,
                    };
                  });
                }
              }}>
              <span />
              <span>{filter.name}</span>
            </ConnectionButton>
          ))}
        </div>
      );
    }
    const { resource } = this.state;
    const currentIndex = resource.parentTopics.findIndex(
      parentTopic => parentTopic.id === id,
    );
    return (
      <div className={cx('filestructure')}>
        <Button
          className={buttonAddition}
          style={currentIndex !== -1 ? { opacity: 1 } : null}
          onClick={() => {
            if (currentIndex !== -1) {
              // remove item
              resource.parentTopics.splice(currentIndex, 1);
              this.setState({
                resource,
              });
            } else {
              resource.parentTopics.push({
                id,
                paths: names,
                subjectId: paths[0],
              });
              this.setState({
                resource,
              });
            }
          }}>
          {currentIndex !== -1
            ? 'Ta bort emnetilknytning'
            : 'Opprett emnetilknytning'}
        </Button>
      </div>
    );
  }

  renderConnections() {
    return this.state.resource.parentTopics.map(parentTopic => (
      <FormSections key={parentTopic.id}>
        <div>
          <Button>Primærkobling</Button>
          {parentTopic.paths.map(path => (
            <span key={`${parentTopic.id}${path}`}>{path}</span>
          ))}
        </div>
      </FormSections>
    ));
  }

  renderSubjectFilters() {
    const { availableFilters, resource, structure } = this.state;
    const availableSubjects = {};
    console.log(resource.filters);
    resource.parentTopics.forEach(parentTopic => {
      if (!availableSubjects[parentTopic.subjectId]) {
        availableSubjects[parentTopic.subjectId] = true;
      }
    });
    return (
      <table>
        <thead>
          <th>Nivå</th>
          <th>Relevanse</th>
        </thead>
        <tbody>
          {Object.keys(availableSubjects).map(filterSubjectKey => {
            const subjectName = structure.find(
              structureItem => structureItem.id === filterSubjectKey,
            ).name;
            return availableFilters[filterSubjectKey].map(filter => {
              const currentFilter = resource.filters.find(
                resourceFilter => resourceFilter.id === filter.id,
              );
              return (
                <tr
                  key={filter.id}
                  className={currentFilter ? 'filter--connected' : ''}>
                  <td>
                    {subjectName}: {filter.name}
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        console.log('add or make filter id', filter.id);
                      }}>
                      Tilleggsressurs
                      {currentFilter &&
                        currentFilter.relevanceId ===
                          'urn:relevance:supplementary' &&
                        ' YES!'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        console.log('add or make filter id', filter.id);
                      }}>
                      Kjerneressurs
                      {currentFilter &&
                        currentFilter.relevanceId === 'urn:relevance:core' &&
                        ' YES!'}
                    </button>
                  </td>
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    );
  }

  render() {
    const {
      loadedEssentials,
      structure,
      resourceTypeSelected,
      resourceTypes,
      FileStructureFilters,
      availableFilters,
      resource,
    } = this.state;

    return (
      <Fragment>
        <FormHeader
          title="Innholdstype"
          subTitle="Hvilken innholdstype har denne siden?"
          width={3 / 4}
        />
        <FormSections>
          <div>
            <FormDropdown
              value={resourceTypeSelected}
              onChange={e => this.updateResourceType(e.target.value)}>
              <option value="">Velg innholdstype</option>
              {resourceTypes.map(
                resourceType =>
                  resourceType.subtypes ? (
                    resourceType.subtypes.map(subtype => (
                      <option value={subtype.id} key={subtype.id}>
                        {resourceType.name} - {subtype.name}
                      </option>
                    ))
                  ) : (
                    <option key={resourceType.id} value={resourceType.id}>
                      {resourceType.name}
                    </option>
                  ),
              )}
            </FormDropdown>
          </div>
        </FormSections>
        <FormHeader
          title="Emnetilknytninger"
          subTitle="Hvor i taksonomien skal ressursen ligge?"
          width={3 / 4}
        />
        {!loadedEssentials ? (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        ) : (
          <Fragment>
            {this.renderConnections()}
            <Modal
              backgroundColor="white"
              animation="subtle"
              size="large"
              narrow
              minHeight="85vh"
              activateButton={
                <Button>Opprett tilknytninger for ressurs</Button>
              }>
              {onCloseModal => (
                <Fragment>
                  <ModalHeader>
                    <ModalCloseButton title="Lukk" onClick={onCloseModal} />
                  </ModalHeader>
                  <ModalBody>
                    <TitleModal>Lag tilknytninger for ressurs</TitleModal>
                    <hr />
                    <FileStructure
                      openedPaths={[]}
                      structure={structure}
                      toggleOpen={this.handleOpenToggle}
                      renderListItems={this.renderListItems}
                      listClass={listClass}
                      onOpenPath={this.onOpenPath}
                      FileStructureFilters={FileStructureFilters}
                      filters={availableFilters}
                    />
                  </ModalBody>
                </Fragment>
              )}
            </Modal>
            {resource.parentTopics.length > 0 && (
              <Fragment>
                <FormHeader
                  title="Filter"
                  subTitle="Sett filternivå og relevanser for ressursen"
                  width={3 / 4}
                />
                {this.renderSubjectFilters()}
              </Fragment>
            )}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default FileStructureExample;
