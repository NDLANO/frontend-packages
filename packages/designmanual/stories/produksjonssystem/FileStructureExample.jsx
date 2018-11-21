/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import { FileStructure, Spinner } from '@ndla/editor';
import styled, { cx, css } from 'react-emotion';
import Button from '@ndla/button';
import { FormHeader, FormDropdown } from '@ndla/forms';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { Additional, Core, ChevronRight } from '@ndla/icons/common';
import { Check } from '@ndla/icons/editor';
import { Cross } from '@ndla/icons/action';
import { colors, spacing, fonts, misc } from '@ndla/core';
import { headerWithAccessToken, getToken } from '../apiFunctions';

const FILTER_SUPPLEMENTARY_ID = 'urn:relevance:supplementary';
const FILTER_CORE_ID = 'urn:relevance:core';

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

const fetchSubjectsAndResourceTypesAndFilters = lang =>
  Promise.all([
    fetchData(
      `https://test.api.ndla.no/taxonomy/v1/subjects/?language=${lang}`,
    ),
    fetchData(
      `https://test.api.ndla.no/taxonomy/v1/resource-types/?language=${lang}`,
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

const FilterButton = styled('button')`
  border: 0;
  background: none;
  transition: opacity 200ms ease;
  opacity: ${props => (props.selected ? 1 : 0.3)};
  &:hover,
  &:focus {
    opacity: 1;
  }
  display: flex;
  align-items: center;
  ${fonts.sizes(14, 1.1)};
  svg {
    margin-right: ${spacing.xsmall};
  }
`;

const filterbuttonwrapper = css`
  display: flex;
  align-items: center;
`;

const FilterListTR = styled('tr')`
  border-bottom: 1px solid ${colors.brand.lighter};
  td:last-child {
    transition: opacity 200ms ease;
    &:hover {
      opacity: 1;
    }
  }
  ${props =>
    !props.active &&
    css`
      td:last-child {
        opacity: 0;
      }
      &:hover,
      &:focus-within {
        td:last-child {
          opacity: 1;
        }
      }
    `};
`;

const FilterTable = styled('table')`
  width: 100%;
  td:first-child {
    width: 100%;
  }
`;

const PrimaryConnectionButton = styled('button')`
  background: ${colors.support.green};
  border: 0;
  border-radius: ${misc.borderRadius};
  padding: ${spacing.xsmall} ${spacing.small};
  margin-right: ${spacing.xsmall};
  text-transform: uppercase;
  opacity: 0.3;
  ${fonts.sizes(14, 1.1)} font-weight: ${fonts.weight.semibold};
  ${props =>
    props.isPrimary &&
    css`
      opacity: 1;
    `};
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

const checkboxItemCSS = css`
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
`;

const checkboxItemSelectedCSS = css`
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
`;

const checkboxItemHoverCSS = css`
  &:before {
    width: 5px;
    transition: width 100ms ease;
  }
  &:after {
    width: 10px;
    transition: width 150ms ease 100ms;
  }
`;

const FilterCheckBox = styled('button')`
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: ${spacing.xsmall};
  color: ${colors.text.primary};
  ${fonts.sizes(16, 1.1)} font-weight: ${fonts.weight.semibold};
  > span:first-child {
    ${checkboxItemCSS};
    margin-right: ${spacing.small};
  }
  &:hover,
  &:focus {
    > span:first-child {
      ${checkboxItemHoverCSS};
    }
  }
  &.checkboxItem--checked {
    > span:first-child {
      ${checkboxItemSelectedCSS};
    }
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
  color: ${colors.brand.primary};
  ${fonts.sizes(14, 1.2)} white-space: no-wrap;
  &:disabled {
    color: ${colors.brand.light};
  }
  > span:first-child {
    ${checkboxItemCSS};
  }
  &:not(:disabled) {
    &:hover,
    &:focus {
      > span:first-child {
        ${checkboxItemHoverCSS};
      }
    }
  }
  &.checkboxItem--checked {
    > span:first-child {
      ${checkboxItemSelectedCSS};
    }
  }
`;

const RemoveConnectionButton = styled('button')`
  border: 0;
  background: none;
`;

const SubjectName = styled('div')`
  padding: ${props => (props.firstSubject ? spacing.small : spacing.medium)} 0
    ${spacing.xsmall};
`;

const buttonAddition = css`
  opacity: 0;
  height: auto;
  padding: 0 ${spacing.small};
  margin: 3px ${spacing.xsmall};
  transition: background 200ms ease;
  ${fonts.sizes(14, 1.1)};
`;

const ConnectionsWrapper = styled('div')`
  padding-bottom: ${spacing.small};
`;

const Connections = styled('div')`
  display: flex;
  align-items: center;
  background: ${colors.brand.greyLightest};
  padding: ${spacing.xsmall};
  margin-bottom: 2px;
  border-radius: ${misc.borderRadius};
  span {
    padding: ${spacing.xsmall};
    ${fonts.sizes(16, 1.1)} &:nth-child(2) {
      font-weight: ${fonts.weight.semibold};
    }
  }
`;

const BreadCrumb = styled('div')`
  flex-grow: 1;
  span:last-of-type {
    font-weight: ${fonts.weight.semibold};
  }
`;

const Checked = styled('div')`
  ${fonts.sizes(16, 1.1)} font-weight: ${fonts.weight.semibold};
  display: flex;
  align-items: center;
  span {
    margin: 0 ${spacing.xsmall};
  }
  svg {
    fill: ${colors.support.green};
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

class FileStructureExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      structure: [],
      loadedEssentials: false,
      resourceTypes: [],
      resourceTypeSelected: '',
      fileStructureFilters: [],
      availableFilters: [],
      modalIsOpen: false,
    };
    this.renderListItems = this.renderListItems.bind(this);
    this.onOpenPath = this.onOpenPath.bind(this);
    this.updateResourceType = this.updateResourceType.bind(this);
  }

  componentDidMount() {
    fetchSubjectsAndResourceTypesAndFilters('nb')
      .then(result => {
        this.setState(
          {
            structure: result[0].sort(sortByName),
            resourceTypes: result[1],
            availableFilters: filterToSubjects(result[2]),
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
    if (loadedEssentials) {
      // map resourceType.
      const resourceTypeSelected =
        resource.resourceTypes &&
        resource.resourceTypes.find(
          resourceType => resourceType.parentId !== null,
        );
      this.setState({
        loadedEssentials,
        resource,
        resourceTypeSelected: resourceTypeSelected
          ? resourceTypeSelected.id
          : '',
      });
    } else {
      this.setState({
        resource,
      });
    }
  }

  setFilter({ hasFilter, filter, filterId, removeIfAdded }) {
    if (hasFilter) {
      this.setState(prevState => {
        const { resource: editResource } = prevState;
        const index = editResource.filters.findIndex(
          filterItem => filterItem.id === filter.id,
        );
        if (removeIfAdded) {
          editResource.filters.splice(index, 1);
        } else {
          editResource.filters[index].relevanceId = filterId;
        }

        return {
          resource: editResource,
        };
      });
    } else {
      this.setState(prevState => {
        const { resource: editResource } = prevState;
        editResource.filters.push({
          name: filter.name,
          id: filter.id,
          relevanceId: filterId,
        });
        return {
          resource: editResource,
        };
      });
    }
  }

  setPrimaryConnection(parentTopicId) {
    this.setState(prevState => {
      const { resource } = prevState;
      const oldPrimaryIndex = resource.parentTopics.findIndex(
        topic => topic.isPrimary,
      );
      const newPrimaryIndex = resource.parentTopics.findIndex(
        topic => topic.id === parentTopicId,
      );
      resource.parentTopics[oldPrimaryIndex].isPrimary = false;
      resource.parentTopics[newPrimaryIndex].isPrimary = true;
      return {
        resource,
      };
    });
  }

  removeConnection(id) {
    this.setState(prevState => {
      const { resource } = prevState;
      resource.parentTopics = resource.parentTopics.filter(
        parentTopic => parentTopic.id !== id,
      );
      return {
        resource,
      };
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
                this.state.fileStructureFilters.some(
                  FileStructureFilter => FileStructureFilter === filter.id,
                )
                  ? 'checkboxItem--checked'
                  : ''
              }
              onClick={() => {
                const currentIndex = this.state.fileStructureFilters.findIndex(
                  FileStructureFilter => FileStructureFilter === filter.id,
                );
                if (currentIndex === -1) {
                  this.setState(prevState => {
                    const { fileStructureFilters } = prevState;
                    fileStructureFilters.push(filter.id);
                    return {
                      fileStructureFilters,
                    };
                  });
                } else {
                  this.setState(prevState => {
                    const { fileStructureFilters } = prevState;
                    fileStructureFilters.splice(currentIndex, 1);
                    return {
                      fileStructureFilters,
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
        {currentIndex === -1 ? (
          <Button
            outline
            className={buttonAddition}
            onClick={() => {
              resource.parentTopics.push({
                id,
                paths: names,
                subjectId: paths[0],
                isPrimary: resource.parentTopics.length === 0,
              });
              this.setState({
                resource,
                modalIsOpen: false,
              });
            }}>
            Opprett emnetilknytning
          </Button>
        ) : (
          <Checked>
            <Check
              className="c-icon--22"
              style={{ fill: colors.support.green }}
            />{' '}
            <span>Lagt til</span>
          </Checked>
        )}
      </div>
    );
  }

  renderConnections() {
    return (
      <ConnectionsWrapper>
        {this.state.resource.parentTopics.map(parentTopic => (
          <Connections key={parentTopic.id}>
            <PrimaryConnectionButton
              isPrimary={parentTopic.isPrimary}
              onClick={() => {
                this.setPrimaryConnection(parentTopic.id);
              }}>
              Primærkobling
            </PrimaryConnectionButton>
            <BreadCrumb style={{ flexGrow: 1 }}>
              {parentTopic.paths.map(path => (
                <Fragment>
                  <span key={`${parentTopic.id}${path}`}>{path}</span>
                  <ChevronRight />
                </Fragment>
              ))}
            </BreadCrumb>
            <RemoveConnectionButton
              type="button"
              onClick={() => this.removeConnection(parentTopic.id)}>
              <Cross />
            </RemoveConnectionButton>
          </Connections>
        ))}
      </ConnectionsWrapper>
    );
  }

  renderSubjectFilters() {
    const { availableFilters, resource, structure } = this.state;
    const availableSubjects = {};
    resource.parentTopics.forEach(parentTopic => {
      if (!availableSubjects[parentTopic.subjectId]) {
        availableSubjects[parentTopic.subjectId] = {};
      }
    });
    return (
      <FilterTable>
        <tbody>
          {Object.keys(availableSubjects).map((filterSubjectKey, index) => {
            const subjectName = structure.find(
              structureItem => structureItem.id === filterSubjectKey,
            ).name;

            return (
              <Fragment>
                <tr>
                  <td>
                    <SubjectName firstSubject={index === 0}>
                      {subjectName}:
                    </SubjectName>
                  </td>
                </tr>
                {availableFilters[filterSubjectKey].map(filter => {
                  const currentFilter = resource.filters.find(
                    resourceFilter => resourceFilter.id === filter.id,
                  );
                  const active = currentFilter !== undefined;
                  return (
                    <FilterListTR key={filter.id} active={active}>
                      <td>
                        <FilterCheckBox
                          type="button"
                          onClick={() =>
                            this.setFilter({
                              hasFilter: active,
                              filter,
                              filterId: FILTER_CORE_ID,
                              removeIfAdded: true,
                            })
                          }
                          className={active ? 'checkboxItem--checked' : ''}>
                          <span />
                          <span>{filter.name}</span>
                        </FilterCheckBox>
                      </td>
                      <td>
                        <div className={filterbuttonwrapper}>
                          <FilterButton
                            type="button"
                            selected={
                              currentFilter &&
                              currentFilter.relevanceId ===
                                FILTER_SUPPLEMENTARY_ID
                            }
                            onClick={() =>
                              this.setFilter({
                                hasFilter: active,
                                filter,
                                filterId: FILTER_SUPPLEMENTARY_ID,
                              })
                            }>
                            <Additional className="c-icon--22" />{' '}
                            Tilleggsressurs
                          </FilterButton>
                          <FilterButton
                            type="button"
                            selected={
                              currentFilter &&
                              currentFilter.relevanceId === FILTER_CORE_ID
                            }
                            onClick={() => {
                              this.setFilter({
                                hasFilter: active,
                                filter,
                                filterId: FILTER_CORE_ID,
                              });
                            }}>
                            <Core className="c-icon--22" /> Kjerneressurs
                          </FilterButton>
                        </div>
                      </td>
                    </FilterListTR>
                  );
                })}
              </Fragment>
            );
          })}
        </tbody>
      </FilterTable>
    );
  }

  render() {
    const {
      loadedEssentials,
      structure,
      resourceTypeSelected,
      resourceTypes,
      fileStructureFilters,
      availableFilters,
      resource,
      modalIsOpen,
    } = this.state;

    return !loadedEssentials ? (
      <Spinner />
    ) : (
      <Fragment>
        <FormHeader
          title="Innholdstype"
          subTitle="Hvilken innholdstype har denne ressursen?"
        />
        <FormDropdown
          value={resourceTypeSelected}
          onChange={e => this.updateResourceType(e.target.value)}>
          <option value="">Velg innholdstype</option>
          {resourceTypes.map(resourceType =>
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
        <FormHeader
          title="Emnetilknytninger"
          subTitle="Hvor i taksonomien skal ressursen ligge?"
        />
        {this.renderConnections()}
        <Button onClick={() => this.setState({ modalIsOpen: true })}>
          Opprett emnetilknytning
        </Button>
        <Modal
          backgroundColor="white"
          animation="subtle"
          size="large"
          narrow
          minHeight="85vh"
          controllable
          onClose={() => this.setState({ modalIsOpen: false })}
          isOpen={modalIsOpen}>
          {onCloseModal => (
            <Fragment>
              <ModalHeader>
                <ModalCloseButton title="Lukk" onClick={onCloseModal} />
              </ModalHeader>
              <ModalBody>
                <TitleModal>Velg emnetilknytning:</TitleModal>
                <hr />
                <FileStructure
                  openedPaths={[]}
                  structure={structure}
                  toggleOpen={this.handleOpenToggle}
                  renderListItems={this.renderListItems}
                  listClass={listClass}
                  onOpenPath={this.onOpenPath}
                  fileStructureFilters={fileStructureFilters}
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
              subTitle="Hvilket fagfilter gjelder for denne ressursen?"
            />
            {this.renderSubjectFilters()}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default FileStructureExample;
