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
import FocusTrapReact from 'focus-trap-react';
import Button from 'ndla-button';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from 'ndla-modal';
import { Additional, Core } from 'ndla-icons/common';
import { colors, spacing, fonts, shadows, animations } from 'ndla-core';
import { headerWithAccessToken, getToken } from '../apiFunctions';

const sortByName = (a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

const filterToSubjects = allFilters => {
  const filterObject = {};
  allFilters.forEach(filter => {
    if (!filterObject[filter.subjectId]) {
      filterObject[filter.subjectId] = [];
    }
    filterObject[filter.subjectId].push(filter);
  });
  return filterObject;
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

const RelevanceTitle = styled('div')`
  ${fonts.sizes(16, 1.2)} font-weight: ${fonts.weight.semibold};
  color: ${colors.text.primary};
  margin: ${spacing.small};
`;

const AddTitle = styled('span')`
  ${fonts.sizes(16, 1.2)} font-weight: ${fonts.weight.semibold};
  text-transform: uppercase;
  color: ${colors.text.primary};
  opacity: 0;
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
  ${fonts.sizes(14, 1.2)} opacity: 0;
  white-space: no-wrap;
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
      opacity: 1;
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
    opacity: 1;
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

const hasMatch = (checkSubTopic, findId, paths) => {
  if (checkSubTopic.id === findId) {
    return paths;
  }
};

class FileStructureExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedItems: {},
      structure: [],
      loadedEssentials: false,
    };
    this.renderListItems = this.renderListItems.bind(this);
    this.onOpenPath = this.onOpenPath.bind(this);
  }

  componentDidMount() {
    fetchSubjectsAndFilters('nb')
      .then(result => {
        this.setState(
          {
            structure: result[0].sort(sortByName),
            filters: filterToSubjects(result[1]),
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
                      this.getPathsFromResourceTopics(
                        structure[index].subtopics,
                        this.requestedSubjectsOnLoad === 0,
                      );
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

  getPathsFromResourceTopics(mapToSubject, loadedEssentials) {
    const { resource } = this.state;
    const { parentTopics } = resource;
    if (parentTopics.length) {
      const allPaths = [];
      const removedTopics = [];
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
          removedTopics.push(parentTopicIndex);
        }
      });
    }
    console.log(this.state.structure);
    this.setState({
      loadedEssentials,
    });
  }

  renderListItems({ paths, pathToString, filters, level, names }) {
    if (level === 0) {
      return null; // not allowed to add directly to subject with no topic connection
    }
    const { addedItems: addedItemsState, filters: stateFilters } = this.state;
    if (!stateFilters[paths[0]]) {
      return null;
    }
    return (
      <div className={cx('filestructure')}>
        <AddTitle>Legg på nivå:</AddTitle>
        {stateFilters[paths[0]].map(filter => (
          <ConnectionButton
            type="button"
            key={filter.id}
            disabled={filters && filters.includes(filter.id)}
            className={
              addedItemsState[filter.id + pathToString]
                ? 'checkboxItem--checked'
                : ''
            }
            onClick={() => {
              if (addedItemsState[filter.id + pathToString]) {
                // remove item
                this.setState(prevState => {
                  const { addedItems } = prevState;
                  delete addedItems[filter.id + pathToString];
                  return {
                    addedItems,
                  };
                });
              } else {
                /*
                  contentUri: ""
                  id: "urn:topic:1:110002"
                  isPrimary: false
                  name: "Behov og motiv"
                */
                /*
                ["urn:subject:14", "urn:topic:1:185036", "urn:topic:1:185600"]
                FileStructureExample.jsx:442 names (3) ["Medie- og informasjonskunnskap", "Journalistikk, informasjon og reklame", "Kommunikasjonsvirksomhet"]0: "Medie- og informasjonskunnskap"1: "Journalistikk, informasjon og reklame"2: "Kommunikasjonsvirksomhet"length: 3__proto__: Array(0)
                FileStructureExample.jsx:443 with filter urn:filter:77db55c9-b7ae-4702-8a57-eaa4f88c6332
               */
                console.log('paths', paths);
                console.log('names', names);
                console.log('with filter', filter.id);

                this.setState(prevState => {
                  const { addedItems } = prevState;
                  addedItems[filter.id + pathToString] = true;
                  return {
                    addedItems,
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

  renderConnections() {
    return <h1>Where do I belong????</h1>;
  }

  render() {
    const { loadedEssentials, structure } = this.state;
    console.log(this.addedItems);
    return (
      <Fragment>
        <h1>This article has connections....?????</h1>
        {!loadedEssentials ? (
          <Spinner />
        ) : (
          <Fragment>
            {this.renderConnections()}
            <Modal
              backgroundColor="white"
              animation="subtle"
              size="large"
              narrow
              minHeight="85vh"
              activateButton={<Button>Legg til eller endre koblinger</Button>}>
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
                    />
                  </ModalBody>
                </Fragment>
              )}
            </Modal>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default FileStructureExample;
