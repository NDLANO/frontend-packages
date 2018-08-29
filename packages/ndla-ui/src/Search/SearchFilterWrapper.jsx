import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class SearchFilterWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allValues: props.values,
    };
    this.changedFilter = this.changedFilter.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isNarrowScreen && this.props.isNarrowScreen) {
      this.props.onChange(this.state.allValues);
    }
  }

  changedFilter(changes, key) {
    const { allValues } = this.state;
    allValues[key] = changes;
    this.setState({
      allValues,
    });
    // If allowed to pass on
    if (!this.props.isNarrowScreen) {
      this.props.onChange(allValues);
    }
  }

  render() {
    return (
      <Fragment>
        {this.props.children(this.changedFilter, this.state.allValues)}
      </Fragment>
    );
  }
}

SearchFilterWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  isNarrowScreen: PropTypes.bool.isRequired,
};

export default SearchFilterWrapper;
