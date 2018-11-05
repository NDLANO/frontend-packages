/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import {
  FormHeader,
  FormSections,
  FormDropdown,
  FormDropdownButton,
  TaxonomyListSelector,
} from 'ndla-forms';
import { headerWithAccessToken, getToken } from '../apiFunctions';
import TaxonomySelectPath from './TaxonomySelectPath';

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

const fetchSubjects = lang =>
  new Promise((resolve, reject) => {
    getToken().then(token => {
      fetch(`https://test.api.ndla.no/taxonomy/v1/subjects/?language=${lang}`, {
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

const mainTopicConnections = connections => {
  const mainTopics = {};
  connections.forEach(connection => {
    if (!mainTopics[connection.subjectName]) {
      mainTopics[connection.subjectName] = [];
    }
    mainTopics[connection.subjectName].push(connection);
  });

  return Object.keys(mainTopics).length > 1 ? mainTopics : null;
};

class TaxonomyEditorExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceTypes: [],
      resourceTypeSelected: '',
      subjects: [],
      connections: [],
      primaryId: null,
    };
    this.updateResourceType = this.updateResourceType.bind(this);
    this.selectSubject = this.selectSubject.bind(this);
    this.addConnection = this.addConnection.bind(this);
    this.removeConnection = this.removeConnection.bind(this);
    this.toggleItemCore = this.toggleItemCore.bind(this);
    this.selectPrimary = this.selectPrimary.bind(this);
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

    fetchSubjects('nb')
      .then(result => {
        this.setState({
          subjects: result,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateResourceType(resourceTypeSelected) {
    this.setState({
      resourceTypeSelected,
    });
  }

  selectSubject(subjectId) {
    if (subjectId) {
      this.setState(prevState => ({
        subjectId,
        subjectName: prevState.subjects.find(
          subject => subject.id === subjectId,
        ).name,
      }));
    } else {
      this.setState({
        subjectId,
        subjectName: '',
        resourceTypeSelected: '',
      });
    }
  }

  addConnection(addedConnection) {
    console.log('add connections...', addedConnection);

    this.setState(prevState => {
      const { connections, subjectName } = prevState;
      // Does it exist already?
      const testConnection =
        subjectName +
        addedConnection.mainTopicName +
        addedConnection.filterId +
        addedConnection.subTopicNames.toString();

      const alreadyAdded = connections.some(connection => {
        const stingyfied =
          connection.subjectName +
          connection.mainTopicName +
          connection.filterId +
          connection.subTopicNames.toString();
        return testConnection === stingyfied;
      });

      if (!alreadyAdded) {
        const newConnection = addedConnection;
        newConnection.subjectName = subjectName;
        connections.push(newConnection);
        const primaryId =
          connections.length === 1
            ? newConnection.uniqeId
            : prevState.primaryId;
        return {
          subjectId: undefined,
          connections,
          primaryId,
        };
      }
      // Was already added, just reset selected id's and ignore connection update.
      return {
        subjectId: undefined,
      };
    });
  }

  toggleItemCore(id) {
    this.setState(prevState => {
      const { connections } = prevState;
      const editIndex = connections.findIndex(
        connection => connection.uniqeId === id,
      );
      connections[editIndex].core = !connections[editIndex].core;
      return {
        connections,
      };
    });
  }

  removeConnection(id) {
    this.setState(prevState => {
      const { connections } = prevState;
      return {
        connections: connections.filter(
          connection => connection.uniqeId !== id,
        ),
      };
    });
  }

  selectPrimary(primaryId) {
    this.setState({
      primaryId,
    });
  }

  render() {
    const {
      resourceTypes,
      resourceTypeSelected,
      subjects,
      subjectId,
      subjectName,
      connections,
      primaryId,
    } = this.state;
    const topicSortedConnections = mainTopicConnections(connections);
    console.log(topicSortedConnections);
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
          subTitle="Under hvilke fag og emner skal denne siden ligge?"
          width={3 / 4}
        />
        <TaxonomyListSelector
          list={connections}
          removeItem={this.removeConnection}
          toggleItemCore={this.toggleItemCore}
          selectPrimary={this.selectPrimary}
          primaryId={primaryId}
          removeLabel="Ta bort"
        />
        <FormDropdownButton
          value=""
          onChange={e => this.selectSubject(e.target.value)}>
          <option value="">
            {this.state.connections.length > 0
              ? 'Legg til flere emnetilknytninger'
              : 'Legg til emnetilknytning'}
          </option>
          {subjects.map(topic => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </FormDropdownButton>
        <TaxonomySelectPath
          subjectName={subjectName}
          subjectId={subjectId}
          resetSubject={this.selectSubject}
          addConnection={this.addConnection}
        />
        {topicSortedConnections && (
          <Fragment>
            <FormHeader
              title="Flerfaglige primærkoblinger"
              subTitle="Angi primærkobling for hvert av fagene"
              width={3 / 4}
            />
            {Object.keys(topicSortedConnections).map(topicName => (
              <FormSections key={topicName}>
                <div>
                  <h1>{topicName}:</h1>
                  <FormDropdown
                    value=""
                    onChange={() => {
                      console.log('tverfaglig primærkobling');
                    }}>
                    <option value="">Løst i fag</option>
                    {topicSortedConnections[topicName].map(connection => (
                      <option
                        value={connection.uniqeId}
                        key={connection.uniqeId}>
                        {connection.mainTopicName}
                        {connection.filterName ? (
                          <Fragment>
                            {` > `}
                            {connection.filterName}
                          </Fragment>
                        ) : (
                          ''
                        )}
                        {` > `}
                        {connection.subTopicNames.toString(' > ')}
                      </option>
                    ))}
                  </FormDropdown>
                </div>
              </FormSections>
            ))}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default TaxonomyEditorExample;
