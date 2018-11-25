/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import FocusTrapReact from 'focus-trap-react';

import { OneColumn } from '@ndla/ui';
import topicShape from './FilmFrontpage';

const classes = new BEMHelper({
  name: 'film-moviesearch',
  prefix: 'c-',
});

class FilmMovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceTypesIsOpen: false,
      topicIsOpen: false,
    };
  }

  render() {
    const {
      topics,
      resourceTypes,
      searchValue,
      topicSelected,
      resourceTypeSelected,
      onChangeSearch,
      onChangeTopic,
      onChangeResourceType,
    } = this.props;

    const { resourceTypesIsOpen, topicIsOpen } = this.state;
    return (
      <OneColumn>
        <div className="u-6/12@tablet u-push-3/12@tablet">
          <input
            type="search"
            {...classes('input')}
            id="search"
            name="search"
            placeholder="Søk på film"
            aria-label="Søk på film"
            value={searchValue}
            onChange={e => onChangeSearch(e.target.value)}
          />
        </div>
        <div {...classes('dropdown-wrap')}>
          <div>
            <FocusTrapReact
              active={topicIsOpen}
              focusTrapOptions={{
                onDeactivate: () => {
                  this.setState({
                    topicIsOpen: false,
                  });
                },
                clickOutsideDeactivates: true,
                escapeDeactivates: true,
              }}>
              <button
                type="button"
                {...classes('dropdown-button', topicIsOpen ? 'open' : '')}
                onClick={() => {
                  if (topicIsOpen) {
                    onChangeTopic();
                  }
                  this.setState({
                    topicIsOpen: !topicIsOpen,
                  });
                }}>
                Velg emne
              </button>
              {topicIsOpen &&
                topics.map(topic => (
                  <button
                    type="button"
                    onClick={() => {
                      onChangeTopic(topic.id);
                      this.setState({
                        topicIsOpen: false,
                      });
                    }}
                    key={topic.id}>
                    {topic.name}
                  </button>
                ))}
            </FocusTrapReact>
          </div>
          <div>
            <FocusTrapReact
              active={resourceTypesIsOpen}
              focusTrapOptions={{
                onDeactivate: () => {
                  this.setState({
                    resourceTypesIsOpen: false,
                  });
                },
                clickOutsideDeactivates: true,
                escapeDeactivates: true,
              }}>
              <button
                type="button"
                {...classes(
                  'dropdown-button',
                  resourceTypesIsOpen ? 'open' : '',
                )}
                onClick={() => {
                  if (resourceTypesIsOpen) {
                    onChangeResourceType();
                  }
                  this.setState({
                    resourceTypesIsOpen: !resourceTypesIsOpen,
                  });
                }}>
                Select topic
              </button>
              {resourceTypesIsOpen &&
                resourceTypes.map(resourceType => (
                  <button
                    type="button"
                    onClick={() => {
                      onChangeResourceType(resourceType.id);
                      this.setState({
                        resourceTypesIsOpen: false,
                      });
                    }}
                    key={resourceType.id}>
                    {resourceType.name}
                  </button>
                ))}
            </FocusTrapReact>
          </div>
        </div>
      </OneColumn>
    );
  }
}

FilmMovieSearch.propTypes = {
  topics: PropTypes.arrayOf(topicShape),
  contextFilter: PropTypes.arrayOf(PropTypes.shape),
  onChangeSearch: PropTypes.func.isRequired,
  onChangeTopic: PropTypes.func.isRequired,
  onChangeResourceType: PropTypes.func.isRequired,
};

export default FilmMovieSearch;
