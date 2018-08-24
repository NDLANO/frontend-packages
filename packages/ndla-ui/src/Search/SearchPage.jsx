import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';
import { Back } from 'ndla-icons/common';
import { Cross } from 'ndla-icons/action';
import createFocusTrap from 'focus-trap';
import debounce from 'lodash/debounce';
import { noScroll, getCurrentBreakpoint, breakpoints } from 'ndla-util';
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
      isNarrowScreen: false,
    };

    this.filterContainerRef = null;
    this.filterCloseButton = null;
    this.focusTrap = null;

    this.handleToggleFilter = this.handleToggleFilter.bind(this);
    this.checkScreenSize = this.checkScreenSize.bind(this);
    this.checkScreenSizeDebounce = debounce(() => this.checkScreenSize(), 100);
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkScreenSizeDebounce);
    this.checkScreenSize();

    this.focusTrap = createFocusTrap(this.filterContainerRef, {
      onActivate: () => {
        this.props.filterScreenChange(true);
        this.setState({
          filterExpanded: true,
        });
        noScroll(true);
      },
      onDeactivate: () => {
        this.props.filterScreenChange(false);
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
    window.removeEventListener('resize', this.checkScreenSizeDebounce);
    this.focusTrap.deactivate();
  }

  checkScreenSize() {
    const currentBreakpoint = getCurrentBreakpoint();
    const isNarrowScreen =
      currentBreakpoint === breakpoints.mobile ||
      currentBreakpoint === breakpoints.tablet;

    /* eslint react/no-did-mount-set-state: 0 */
    if (isNarrowScreen !== this.state.isNarrowScreen) {
      if (this.state.filterExpanded && !isNarrowScreen) {
        this.focusTrap.deactivate();
      }
      this.setState({
        isNarrowScreen,
      });
    }
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
      onSearch,
      // only on narrow screen
      activeFilters,
      resourceToLinkProps,
      filters,
      children,
      messages,
      closeUrl,
      author,
      hideResultText,
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
            onSearch={onSearch}
            placeholder={searchFieldPlaceholder}
            filters={searchFieldFilters}
            onFilterRemove={onSearchFieldFilterRemove}
            resourceToLinkProps={resourceToLinkProps}
            messages={{
              searchFieldTitle: messages.searchFieldTitle,
            }}
          />
        </div>
        {author}
        <div {...classes('filter-result-wrapper')}>
          <button
            type="button"
            onClick={() => {
              this.handleToggleFilter(false);
            }}
            {...classes('filter-close-button', filterModifiers)}
            ref={ref => {
              this.filterCloseButton = ref;
            }}>
            <Back /> <span>{messages.narrowScreenFilterHeading}</span>
          </button>
          <aside
            {...classes('filter-wrapper', filterModifiers)}
            ref={ref => {
              this.filterContainerRef = ref;
            }}>
            <h1 {...classes('filter-heading')}>{messages.filterHeading}</h1>
            <div {...classes('filters')}>{filters}</div>
          </aside>
          <div {...classes('result-wrapper')}>
            <h2 aria-hidden="true" {...classes('result-label', 'large-screen')}>
              {!hideResultText ? messages.resultHeading : '\u00A0'}
            </h2>
            <div {...classes('active-filters')}>
              <ActiveFilters
                filters={activeFilters}
                onFilterRemove={onSearchFieldFilterRemove}
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
            <h2 aria-hidden="true" {...classes('result-label', 'small-screen')}>
              {!hideResultText ? messages.resultHeading : '\u00A0'}
            </h2>
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
  onSearch: PropTypes.func.isRequired,
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
  messages: PropTypes.shape({
    filterHeading: PropTypes.string.isRequired,
    narrowScreenFilterHeading: PropTypes.string.isRequired,
    resultHeading: PropTypes.string,
    closeButton: PropTypes.string.isRequired,
    searchFieldTitle: PropTypes.string.isRequired,
  }).isRequired,
  closeUrl: PropTypes.string.isRequired,
  author: PropTypes.node,
  hideResultText: PropTypes.bool,
  filterScreenChange: PropTypes.func,
};

SearchPage.defaultProps = {
  author: null,
};
