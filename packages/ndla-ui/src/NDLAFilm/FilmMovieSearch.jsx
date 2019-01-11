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
import topicShape from './FilmFrontpage';

const classes = new BEMHelper({
  name: 'film-moviesearch',
  prefix: 'c-',
});

const classesMovieList = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

class FilmMovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceTypesIsOpen: false,
    };
    this.buttonRef = React.createRef();
    this.dropDownRef = React.createRef();
  }

  render() {
    const {
      topics,
      resourceTypes,
      resourceTypeSelected,
      onChangeResourceType,
      ariaControlId,
      t,
    } = this.props;

    const offsetDropDown = resourceTypeSelected
      ? resourceTypes.findIndex(
          resource => resource.id === resourceTypeSelected.id,
        ) + 1
      : 0;

    const { resourceTypesIsOpen } = this.state;
    return (
      <div {...classes('')}>
        <OneColumn>
          <div {...classes('topic-navigation')}>
            <h2 {...classesMovieList('heading', '', 'u-12/12 u-4/12@tablet')}>
              Emner i film:
            </h2>
            <nav className="u-12/12 u-8/12@tablet">
              <ul>
                {topics.map(topic => (
                  <li>
                    <SafeLink to="#" key={topic.id}>
                      <span>{topic.name}</span>
                    </SafeLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </OneColumn>
        <OneColumn>
          <div {...classes('dropdown-container', '', 'u-12/12')}>
            <FocusTrapReact
              active={resourceTypesIsOpen}
              focusTrapOptions={{
                onDeactivate: () => {
                  this.setState(
                    {
                      resourceTypesIsOpen: false,
                    },
                    () => {
                      this.buttonRef.current.focus();
                    },
                  );
                },
                onActivate: () => {
                  const selectIndex =
                    this.props.resourceTypes.findIndex(
                      resource =>
                        this.props.resourceTypeSelected &&
                        resource.id === this.props.resourceTypeSelected.id,
                    ) + 1;
                  [...this.dropDownRef.current.children][selectIndex].focus();
                },
                clickOutsideDeactivates: true,
                escapeDeactivates: true,
              }}>
              <button
                aria-expanded={!resourceTypesIsOpen}
                aria-controls="selectCategory"
                type="button"
                {...classes('dropdown-button')}
                tabIndex={resourceTypesIsOpen ? -1 : 0}
                ref={this.buttonRef}
                onClick={() => {
                  this.setState({
                    resourceTypesIsOpen: !resourceTypesIsOpen,
                  });
                }}>
                <span>
                  {t('ndlaFilm.search.chooseCategory')}
                  <small>
                    {(resourceTypeSelected && resourceTypeSelected.name) ||
                      t('ndlaFilm.search.categoryFromNdla')}
                  </small>
                </span>
                <ChevronDown className="c-icon--22" />
              </button>
              {resourceTypesIsOpen && (
                <div
                  id="selectCategory"
                  ref={this.dropDownRef}
                  {...classes('dropdown-wrapper')}
                  style={{ top: `-${offsetDropDown * 52 + 13}px` }}>
                  <button
                    aria-controls={ariaControlId}
                    type="button"
                    onClick={() => {
                      onChangeResourceType();
                      this.setState({
                        resourceTypesIsOpen: false,
                      });
                    }}
                    {...classes('dropdown-button')}>
                    <span>{t('ndlaFilm.search.categoryFromNdla')}</span>
                  </button>
                  {resourceTypes.map(resourceType => (
                    <button
                      aria-controls={ariaControlId}
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
                      data-id={resourceType.id}
                      key={resourceType.id}>
                      <span>{resourceType.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </FocusTrapReact>
          </div>
        </OneColumn>
      </div>
    );
  }
}

FilmMovieSearch.propTypes = {
  topics: PropTypes.arrayOf(topicShape),
  onChangeResourceType: PropTypes.func.isRequired,
  resourceTypeSelected: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
  ariaControlId: PropTypes.string.isRequired,
  t: PropTypes.shape({}),
};

export default injectT(FilmMovieSearch);
