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
import { mockFilters } from './mockData/mockTopics';

const sortByName = (a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
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

const fetchSubjects = lang =>
  Promise.all([
    fetchData(
      `https://test.api.ndla.no/taxonomy/v1/subjects/?language=${lang}`,
    ),
  ])
    .then(result => result[0].sort(sortByName))
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

const NoRelevanceIcon = styled('span')`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid ${colors.text.light};
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

const AddRelevanceButton = styled('button')`
  border: 0;
  margin: 0 0 0 ${spacing.xsmall};
  padding: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: ${spacing.xsmall} ${spacing.small} ${spacing.xsmall}
    ${spacing.xsmall};
  color: ${colors.brand.primary};
  &:disabled {
    color: ${colors.brand.light};
  }
  &:not(:disabled) {
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  span {
    margin-left: ${spacing.xsmall};
  }
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
  color: ${colors.text.light};
  ${fonts.sizes(14, 1.2)} opacity: 0;
  white-space: no-wrap;
  > :first-child {
    margin-right: ${spacing.xsmall};
  }
  &:disabled {
    color: ${colors.brand.light};
    > :first-child {
      border-color: ${colors.brand.light};
    }
  }
  &:not(:disabled) {
    &:hover,
    &:focus {
      text-decoration: underline;
      color: ${colors.brand.primary};
      > :first-child {
        border-color: ${colors.brand.primary};
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

const SelectRelevanceWrapper = styled('div')`
  position: relative;
  > div {
    background: #fff;
    padding: ${spacing.small} ${spacing.small} ${spacing.normal};
    position: absolute;
    bottom: 100%;
    box-shadow: ${shadows.levitate1};
    ${animations.fadeInBottom(animations.durations.fast)};
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
      addedItems: {},
      structure: [],
      loadingEssentials: true,
    };
    this.renderListItems = this.renderListItems.bind(this);
    this.onOpenPath = this.onOpenPath.bind(this);
  }

  componentDidMount() {
    fetchSubjects('nb')
      .then(result => {
        this.setState(
          {
            structure: result,
          },
          () => {
            fetchResourceConnections('urn:resource:1:148635', 'nb')
              .then(resourceResult => {
                this.setState({
                  resource: resourceResult[0],
                });
                const subjectId = resourceResult[0].path.split('/');
                this.onOpenPath({
                  id: `urn:${subjectId[1]}`,
                  level: 0,
                  updateResource: true,
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
                      console.log(
                        'connect resource to subject!',
                        this.state.resource,
                      );
                      this.setState({
                        loadingEssentials: false,
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

  addItem(relevance) {
    this.setState(prevState => {
      const { addedItems, activeFilterPath } = prevState;
      addedItems[activeFilterPath] = relevance;
      return {
        addedItems,
        activeFilterPath: null,
        activePath: null,
      };
    });
  }

  renderListItems(path, filters, level) {
    if (level === 0) {
      return null; // not allowed to add directly to subject with no topic connection
    }
    const { addedItems: addedItemsState, activeFilterPath } = this.state;
    return (
      <div
        className={cx('filestructure', {
          'filterstructure--active': this.state.activePath === path,
        })}>
        <AddTitle>Legg på nivå:</AddTitle>
        {mockFilters.map(filter => (
          <Fragment>
            {activeFilterPath === filter.id + path && (
              <FocusTrapReact
                focusTrapOptions={{
                  onDeactivate: () => {
                    this.setState({ activeFilterPath: null, activePath: null });
                  },
                  clickOutsideDeactivates: true,
                  escapeDeactivates: true,
                }}>
                <SelectRelevanceWrapper>
                  <div>
                    <RelevanceTitle>Sett relevans:</RelevanceTitle>
                    <AddRelevanceButton
                      type="button"
                      onClick={() => this.addItem('core')}>
                      <Core className="c-icon--20" />
                      <span>Kjerneressurs</span>
                    </AddRelevanceButton>
                    <AddRelevanceButton
                      link
                      onClick={() => this.addItem('additional')}>
                      <Additional className="c-icon--20" />
                      <span>Tillleggssressurs</span>
                    </AddRelevanceButton>
                  </div>
                </SelectRelevanceWrapper>
              </FocusTrapReact>
            )}
            <ConnectionButton
              type="button"
              key={filter.id}
              style={addedItemsState[filter.id + path] ? { opacity: 1 } : null}
              disabled={filters && filters.includes(filter.id)}
              onClick={() => {
                if (addedItemsState[filter.id + path]) {
                  // remove item
                  this.setState(prevState => {
                    const { addedItems } = prevState;
                    delete addedItems[filter.id + path];
                    return {
                      addedItems,
                    };
                  });
                } else {
                  this.setState({
                    activeFilterPath: filter.id + path,
                    activePath: path,
                  });
                }
              }}>
              {addedItemsState[filter.id + path] === 'core' && (
                <Core className="c-icon--20" />
              )}
              {addedItemsState[filter.id + path] === 'additional' && (
                <Additional className="c-icon--20" />
              )}
              {!addedItemsState[filter.id + path] && <NoRelevanceIcon />}
              {filter.name}
            </ConnectionButton>
          </Fragment>
        ))}
      </div>
    );
  }

  render() {
    const { loadingEssentials, activePath, structure } = this.state;
    return (
      <Fragment>
        <h1>This article has connections....</h1>
        {loadingEssentials ? (
          <Spinner />
        ) : (
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
                    activeItem={activePath}
                    onOpenPath={this.onOpenPath}
                  />
                </ModalBody>
              </Fragment>
            )}
          </Modal>
        )}
      </Fragment>
    );
  }
}

export default FileStructureExample;
