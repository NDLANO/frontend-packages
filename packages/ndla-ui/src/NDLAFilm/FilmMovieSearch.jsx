/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import FocusTrapReact from 'focus-trap-react';

import { OneColumn, SafeLink } from '@ndla/ui';
import { injectT } from '@ndla/i18n';
import { ChevronDown } from '@ndla/icons/common';
import { Done } from '@ndla/icons/editor';
import { Cross } from '@ndla/icons/action';
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
      resourceTypeSelected,
      onChangeSearch,
      onChangeTopic,
      onChangeResourceType,
      t,
    } = this.props;

    const { resourceTypesIsOpen, topicIsOpen } = this.state;
    return (
      <OneColumn>
        <div
          {...classes('input-wrapper', '', 'u-8/12@tablet u-push-2/12@tablet')}>
          <input
            type="search"
            {...classes('input')}
            id="search"
            name="search"
            placeholder={t('ndlaFilm.search.placeholder')}
            aria-label={t('ndlaFilm.search.placeholder')}
            value={searchValue}
            onChange={e => onChangeSearch(e.target.value)}
          />
          {searchValue !== '' && (
            <button
              {...classes('input', 'remove-button')}
              type="button"
              onClick={() => onChangeSearch('')}>
              <Cross className="c-icon--22" />
            </button>
          )}
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
                <span>{t('ndlaFilm.search.subjectButton')}</span>
                <ChevronDown className="c-icon--22" />
              </button>
              {topicIsOpen && (
                <div {...classes('dropdown-wrapper')}>
                  {topics.map(topic => (
                    <SafeLink to="#" key={topic.id}>
                      <span>{topic.name}</span>
                    </SafeLink>
                  ))}
                </div>
              )}
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
                  this.setState({
                    resourceTypesIsOpen: !resourceTypesIsOpen,
                  });
                }}>
                <span>
                  {(resourceTypeSelected && resourceTypeSelected.name) ||
                    t('ndlaFilm.search.categoryButton')}
                </span>
                <ChevronDown className="c-icon--22" />
              </button>
              {resourceTypesIsOpen && (
                <div {...classes('dropdown-wrapper')}>
                  {resourceTypes.map(resourceType => (
                    <button
                      type="button"
                      onClick={() => {
                        onChangeResourceType(resourceType.id);
                        this.setState({
                          resourceTypesIsOpen: false,
                        });
                      }}
                      {...classes('dropdown-button', {
                        selected:
                          resourceTypeSelected &&
                          resourceTypeSelected.id === resourceType.id,
                      })}
                      key={resourceType.id}>
                      <span>{resourceType.name}</span>
                      {resourceTypeSelected &&
                        resourceTypeSelected.id === resourceType.id && (
                          <Done className="c-icon--22" />
                        )}
                    </button>
                  ))}
                </div>
              )}
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
  resourceTypeSelected: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
  t: PropTypes.shape({}),
};

export default injectT(FilmMovieSearch);
