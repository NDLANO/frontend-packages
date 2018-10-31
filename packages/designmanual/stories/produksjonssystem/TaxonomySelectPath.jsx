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
import { headerWithAccessToken, getToken } from '../apiFunctions';

const LANGUAGE = 'nb';

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
        controllable
        isOpen={modalOpen}
        onClose={() => {
          this.setState({
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
              <ul>
                {topicFilters.map(filter => (
                  <li key={filter.id}>
                    <button
                      type="button"
                      style={{ backgroundColor: filter.id === filterId }}
                      onClick={() => {
                        this.setState({
                          filterId: filter.id,
                          subTopics: [],
                          filterName: filter.name,
                        });
                      }}>
                      {filter.name}
                    </button>
                  </li>
                ))}
              </ul>
              <ul>
                {filterId &&
                  mainTopics
                    .filter(subject =>
                      subject.filters.some(
                        subjectFilter => subjectFilter.id === filterId,
                      ),
                    )
                    .map(subject => (
                      <li key={subject.id}>
                        <button
                          type="button"
                          style={{
                            backgroundColor: subject.id === mainTopicId,
                          }}
                          onClick={() =>
                            this.getResources({
                              id: subject.id,
                              index: 0,
                              name: subject.name,
                            })
                          }>
                          {subject.name}
                        </button>
                      </li>
                    ))}
              </ul>
              {subTopics.map(
                (subTopicsGroup, index) =>
                  subTopicsGroup.length ? (
                    <ul key={`group_${subTopicsIds[index]}`}>
                      {subTopicsGroup.map(subTopicItem => (
                        <li key={subTopicItem.id}>
                          <button
                            type="button"
                            style={{
                              backgroundColor:
                                subTopicItem.id === subTopicsIds[index],
                            }}
                            onClick={() =>
                              this.getResources({
                                id: subTopicItem.id,
                                index: index + 1,
                                name: subTopicItem.name,
                              })
                            }>
                            {subTopicItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul>
                      <li>
                        <button
                          type="button"
                          onClick={() =>
                            this.props.addConnection({
                              core: true,
                              filterId,
                              mainTopicId,
                              subTopicsIds,
                              filterName,
                              subTopicNames,
                              mainTopicName,
                              uniqeId: uuid(),
                            })
                          }>
                          Legg til som kjerne!
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            this.props.addConnection({
                              core: false,
                              filterId,
                              mainTopicId,
                              subTopicsIds,
                              filterName,
                              subTopicNames,
                              mainTopicName,
                              uniqeId: uuid(),
                            })
                          }>
                          Legg til som tillegg!
                        </button>
                      </li>
                    </ul>
                  ),
              )}
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
