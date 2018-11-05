/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from 'ndla-modal';
import { uuid } from 'ndla-util';
import { spacing, colors, fonts } from 'ndla-core';
import Button from 'ndla-button';
import styled from 'react-emotion';
import { headerWithAccessToken, getToken } from '../apiFunctions';

const LANGUAGE = 'nb';
const COLUMN_WIDTH = 330;

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

const MenuButton = styled('button')`
  ${fonts.sizes(18, 1.25)} font-weight: ${fonts.weight.semibold};
  color: ${colors.brand.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  cursor: pointer;
  height: 52px;
  line-height: 24px;
  padding: 0 ${spacing.small};
  transition: all 0.1s ease-in-out;
  border: 0;
  > span {
    display: flex;
  }
  background: ${props => (props.selected ? colors.brand.light : 'transparent')};
  &:hover,
  &:focus {
    background: ${colors.brand.light};
  }
`;

const TaxonomyMenu = styled('div')`
  display: flex;
  overflow-x: hidden;
  .animatedWrapper {
    width: ${props => `${props.numberOfColumns * COLUMN_WIDTH}px`};
    transition: transform 300ms ease;
    transform: translateX(
      ${props => `-${Math.max(props.numberOfColumns - 3, 0) * COLUMN_WIDTH}px`}
    );
    display: flex;
    > div {
      width: ${COLUMN_WIDTH}px;
      &:nth-child(n + 1) {
        ul {
          animation-name: fadeInLeft;
          animation-duration: 0.5s;
        }
      }
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        list-style-image: none;
        padding: ${spacing.normal};
        min-height: calc(85vh - 300px);
        li {
          margin: 0 0 1px 0;
        }
      }
      &:not(:last-child) {
        ul {
          border-right: 1px solid blue;
        }
      }
      &:first-child {
        ul {
          padding-left: 0;
        }
      }
    }
  }
`;

class TaxonomySelectPath extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainTopics: [],
      mainTopicName: '',
      subTopics: [],
      subTopicNames: [],
      topicFilters: [],
      modalOpen: false,
      filterName: '',
    };
  }

  componentWillReceiveProps(nextProps, prevProps) {
    if (
      nextProps.subjectId !== prevProps.subjectId &&
      nextProps.subjectId !== ''
    ) {
      this.setState({
        modalOpen: true,
      });
      Promise.all([
        fetchData(
          `https://test.api.ndla.no/taxonomy/v1/subjects/${
            nextProps.subjectId
          }/topics/?language=${LANGUAGE}`,
        ),
        fetchData(
          `https://test.api.ndla.no/taxonomy/v1/subjects/${
            nextProps.subjectId
          }/filters/?language=${LANGUAGE}`,
        ),
      ])
        .then(result => {
          this.setState({
            mainTopics: result[0],
            topicFilters: result[1],
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      const hasSubjectId = nextProps.subjectId !== '';
      if (hasSubjectId !== this.state.modalOpen) {
        this.setState({
          modalOpen: hasSubjectId,
        });
      }
    }
  }

  getResources({ id, name, index }) {
    if (index === 0) {
      this.setState({
        mainTopicId: id,
        mainTopicName: name,
        subTopicsIds: [],
        subTopicNames: [],
      });
    } else {
      this.setState(prevState => {
        const subTopicsIds = prevState.subTopicsIds.splice(0, index - 1);
        subTopicsIds[index - 1] = id;
        const subTopicNames = prevState.subTopicNames.splice(0, index - 1);
        subTopicNames[index - 1] = name;
        return {
          subTopicsIds,
          subTopicNames,
        };
      });
    }
    fetchData(
      `https://test.api.ndla.no/taxonomy/v1/topics/${id}/topics/?recursive=true&language=${LANGUAGE}&filter=${
        this.state.filterId
      }`,
    )
      .then(result => {
        const { subTopics } = this.state;
        const newSubTopics = subTopics.slice(0, index);
        newSubTopics[index] = result;
        this.setState({
          subTopics: newSubTopics,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const {
      modalOpen,
      topicFilters,
      filterId,
      mainTopics,
      mainTopicId,
      mainTopicName,
      subTopics,
      subTopicsIds,
      subTopicNames,
      filterName,
    } = this.state;

    return (
      <Modal
        backgroundColor="white"
        animation="subtle"
        size="large"
        minHeight="85vh"
        controllable
        isOpen={modalOpen}
        onClose={() => {
          this.setState({
            filterId: undefined,
            mainTopics: [],
            mainTopicName: '',
            subTopics: [],
            subTopicNames: [],
            topicFilters: [],
          });
          this.props.resetSubject();
        }}>
        {onCloseModal => (
          <Fragment>
            <ModalHeader>
              <ModalCloseButton onClick={onCloseModal} title="Lukk" />
            </ModalHeader>
            <ModalBody>
              <div>Tilbake</div>
              <TaxonomyMenu
                numberOfColumns={subTopics ? subTopics.length + 2 : 0}>
                <div className="animatedWrapper">
                  <div>
                    <span>Velg nivåfilter:</span>
                    <ul>
                      <li>
                        <MenuButton
                          type="button"
                          selected={filterId === 0}
                          onClick={() => {
                            this.setState({
                              filterId: 0,
                              subTopics: [],
                              filterName: 'Ingen nivå valgt',
                            });
                          }}>
                          Alle
                        </MenuButton>
                      </li>
                      {topicFilters.map(filter => (
                        <li key={filter.id}>
                          <MenuButton
                            type="button"
                            selected={filter.id === filterId}
                            onClick={() => {
                              this.setState({
                                filterId: filter.id,
                                subTopics: [],
                                filterName: filter.name,
                              });
                            }}>
                            <span>{filter.name}</span>
                          </MenuButton>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <Button
                        onClick={() => {
                          this.props.addConnection({
                            core: true,
                            filterName: '',
                            subTopicNames: [],
                            mainTopicId,
                            mainTopicName,
                            uniqeId: uuid(),
                          });
                          this.setState({
                            filterId: undefined,
                            mainTopicId: undefined,
                            subTopics: [],
                          });
                        }}>
                        Legg til løst i emne
                      </Button>
                    </div>
                  </div>
                  <div>
                    <span>Velg hovedemne:</span>
                    <ul>
                      {filterId !== undefined &&
                        mainTopics
                          .filter(
                            subject =>
                              filterId === 0 ||
                              subject.filters.some(
                                subjectFilter => subjectFilter.id === filterId,
                              ),
                          )
                          .map(subject => (
                            <li key={subject.id}>
                              <MenuButton
                                type="button"
                                selected={subject.id === mainTopicId}
                                onClick={() =>
                                  this.getResources({
                                    id: subject.id,
                                    index: 0,
                                    name: subject.name,
                                  })
                                }>
                                <span>{subject.name}</span>
                              </MenuButton>
                            </li>
                          ))}
                    </ul>
                  </div>
                  {subTopics.map(
                    (subTopicsGroup, index) =>
                      subTopicsGroup.length ? (
                        <div key={`group_${subTopicsIds[index]}`}>
                          <span>
                            Velg underemne av{' '}
                            {index === 0
                              ? mainTopicName
                              : subTopicNames[index - 1]}
                          </span>
                          <ul>
                            {subTopicsGroup.map(subTopicItem => (
                              <li key={subTopicItem.id}>
                                <MenuButton
                                  type="button"
                                  selected={
                                    subTopicItem.id === subTopicsIds[index]
                                  }
                                  onClick={() =>
                                    this.getResources({
                                      id: subTopicItem.id,
                                      index: index + 1,
                                      name: subTopicItem.name,
                                    })
                                  }>
                                  <span>{subTopicItem.name}</span>
                                </MenuButton>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div>
                          <span>Lag tilknytning:</span>
                          <ul>
                            <li>
                              <Button
                                onClick={() => {
                                  this.props.addConnection({
                                    core: true,
                                    filterId,
                                    mainTopicId,
                                    subTopicsIds,
                                    filterName,
                                    subTopicNames,
                                    mainTopicName,
                                    uniqeId: uuid(),
                                  });
                                  this.setState({
                                    filterId: undefined,
                                    mainTopicId: undefined,
                                    subTopics: [],
                                  });
                                }}>
                                Legg til som kjerneressurs
                              </Button>
                              <Button
                                outline
                                onClick={() => {
                                  this.props.addConnection({
                                    core: false,
                                    filterId,
                                    mainTopicId,
                                    subTopicsIds,
                                    filterName,
                                    subTopicNames,
                                    mainTopicName,
                                    uniqeId: uuid(),
                                  });
                                  this.setState({
                                    filterId: undefined,
                                    mainTopicId: undefined,
                                    subTopics: [],
                                  });
                                }}>
                                Legg til som tilleggressurs
                              </Button>
                            </li>
                          </ul>
                        </div>
                      ),
                  )}
                </div>
              </TaxonomyMenu>
            </ModalBody>
          </Fragment>
        )}
      </Modal>
    );
  }
}

TaxonomySelectPath.propTypes = {
  subjectId: PropTypes.string,
  resetSubject: PropTypes.func.isRequired,
  addConnection: PropTypes.func.isRequired,
};

TaxonomySelectPath.defaultProps = {
  subjectId: '',
};

export default TaxonomySelectPath;
