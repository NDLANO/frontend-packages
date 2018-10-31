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

class TaxonomyEditorExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceTypes: [],
      resourceTypeSelected: '',
      subjects: [],
      connections: [],
    };
    this.updateResourceType = this.updateResourceType.bind(this);
    this.selectSubject = this.selectSubject.bind(this);
    this.addConnection = this.addConnection.bind(this);
    this.removeConnection = this.removeConnection.bind(this);
    this.toggleItemCore = this.toggleItemCore.bind(this);
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
    this.setState({
      subjectId,
    });
  }

  addConnection(newConnection) {
    this.setState(prevState => {
      const { connections } = prevState;
      connections.push(newConnection);
      return {
        subjectId: undefined,
        connections,
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

  render() {
    const {
      resourceTypes,
      resourceTypeSelected,
      subjects,
      subjectId,
      connections,
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
          subTitle="Under hvilke fag og emner skal denne siden ligge?"
          width={3 / 4}
        />
        <TaxonomyListSelector
          list={connections}
          removeItem={this.removeConnection}
          toggleItemCore={this.toggleItemCore}
          removeLabel="Ta bort"
        />
        <FormDropdownButton
          value=""
          onChange={e => this.selectSubject(e.target.value)}>
          <option value="">
            {this.state.addedConnection
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
          subjectId={subjectId}
          resetSubject={this.selectSubject}
          addConnection={this.addConnection}
        />
      </Fragment>
    );
  }
}

export default TaxonomyEditorExample;
