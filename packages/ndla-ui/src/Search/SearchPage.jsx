import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';
import { Back } from 'ndla-icons/common';
import { Cross } from 'ndla-icons/action';
import createFocusTrap from 'focus-trap';
import { noScroll } from 'ndla-util';
import Button from '../Button';

import SafeLink from '../common/SafeLink';
import SearchField from './SearchField';
import ActiveFilters from './ActiveFilters';

const classes = BEMHelper('c-search-page');

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterExpanded: false,
    };

    this.filterContainerRef = null;
    this.filterCloseButton = null;
    this.focusTrap = null;

    this.handleToggleFilter = this.handleToggleFilter.bind(this);
  }

  componentDidMount() {
    this.focusTrap = createFocusTrap(this.filterContainerRef, {
      onActivate: () => {
        this.setState({
          filterExpanded: true,
        });
        noScroll(true);
      },
      onDeactivate: () => {
        if (this.state.filterExpanded) {
          this.setState({
            filterExpanded: false,
          });
        }
        noScroll(false);
      },
      clickOutsideDeactivates: true,
      initialFocus: this.filterCloseButton,
    });
  }

  componentWillUnmount() {
    this.focusTrap.deactivate();
  }

  handleToggleFilter(expanded) {
    if (expanded) {
      this.focusTrap.activate();
    } else {
      this.focusTrap.deactivate();
    }
  }

  render() {
    const {
      searchString,
      onSearchFieldChange,
      searchFieldPlaceholder,
      onSearchFieldFilterRemove,
      searchFieldFilters,
      // only on narrow screen
      activeFilters,
      onActiveFilterRemove,
      resourceToLinkProps,
      filters,
      children,
      messages,
      closeUrl,
    } = this.props;

    const filterModifiers = [];

    if (this.state.filterExpanded) {
      filterModifiers.push('expanded');
    }

    return (
      <main {...classes()}>
        <SafeLink to={closeUrl} {...classes('close-button')}>
          <span>{messages.closeButton}</span> <Cross />
        </SafeLink>
        <div {...classes('search-field-wrapper')}>
          <SearchField
            value={searchString}
            onChange={onSearchFieldChange}
            placeholder={searchFieldPlaceholder}
            filters={searchFieldFilters}
            onFilterRemove={onSearchFieldFilterRemove}
            resourceToLinkProps={resourceToLinkProps}
            messages={{
              searchFieldTitle: messages.searchFieldTitle,
            }}
          />
        </div>
        <div {...classes('filter-result-wrapper')}>
          <aside
            {...classes('filter-wrapper', filterModifiers)}
            ref={ref => {
              this.filterContainerRef = ref;
            }}>
            <button
              onClick={() => {
                this.handleToggleFilter(false);
              }}
              {...classes('filter-close-button')}
              ref={ref => {
                this.filterCloseButton = ref;
              }}>
              <Back /> <span>{messages.narrowScreenFilterHeading}</span>
            </button>
            <h1>{messages.filterHeading}</h1>
            <div {...classes('filters')}>{filters}</div>
          </aside>
          <div {...classes('result-wrapper')}>
            <h2 aria-hidden="true">{messages.resultHeading}</h2>
            <div {...classes('active-filters')}>
              <ActiveFilters
                filters={activeFilters}
                onFilterRemove={onActiveFilterRemove}
              />
            </div>
            <div {...classes('toggle-filter')}>
              <Button
                outline
                onClick={() => {
                  this.handleToggleFilter(true);
                }}>
                Filter
              </Button>
            </div>
            {children}
          </div>
        </div>
      </main>
    );
  }
}

SearchPage.propTypes = {
  // should be <Fragment />
  filters: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  searchString: PropTypes.string.isRequired,
  onSearchFieldChange: PropTypes.func.isRequired,
  searchFieldPlaceholder: PropTypes.string.isRequired,
  onSearchFieldFilterRemove: PropTypes.func.isRequired,
  resourceToLinkProps: PropTypes.func.isRequired,
  searchFieldFilters: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  activeFilters: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      filterName: PropTypes.string.isRequired,
    }),
  ),
  onActiveFilterRemove: PropTypes.func.isRequired,
  messages: PropTypes.shape({
    filterHeading: PropTypes.string.isRequired,
    narrowScreenFilterHeading: PropTypes.string.isRequired,
    resultHeading: PropTypes.string,
    closeButton: PropTypes.string.isRequired,
    searchFieldTitle: PropTypes.string.isRequired,
  }).isRequired,
  closeUrl: PropTypes.string.isRequired,
};
