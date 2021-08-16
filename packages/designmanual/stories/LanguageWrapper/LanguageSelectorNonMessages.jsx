import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { FilterList } from '@ndla/ui';

const LANGUAGES = [
  {
    title: 'Norsk bokmål',
    value: 'nb',
  },
  {
    title: 'Norsk nynorsk',
    value: 'nn',
  },
  {
    title: 'Engelsk',
    value: 'en',
  },
];

class LanguageSelectorNonMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: LANGUAGES[0].value,
    };
  }

  changeLanguage(value) {
    this.setState({
      value,
    });
  }

  render() {
    return (
      <Fragment>
        <h2 className="u-heading">Velg språk for labels</h2>
        <div className="c-filter u-margin-top">
          <FilterList
            labelNotVisible
            options={LANGUAGES}
            values={[this.state.value]}
            onChange={(e) => {
              this.changeLanguage(e.pop());
            }}
          />
        </div>
        {this.props.children({ lang: this.state.value })}
      </Fragment>
    );
  }
}

LanguageSelectorNonMessages.propTypes = {
  children: PropTypes.func.isRequired,
};

export default LanguageSelectorNonMessages;
