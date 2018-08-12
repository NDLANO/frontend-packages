import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FilterList } from '../Filter';

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

export default class LanguageSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: LANGUAGES[0].value,
    };
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
  }

  onChangeLanguage(lang) {
    this.setState({
      lang: lang.pop(),
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
            values={[this.state.lang]}
            onChange={this.onChangeLanguage}
          />
        </div>
        {this.props.children(this.state.lang)}
      </Fragment>
    );
  }
}

LanguageSelector.propTypes = {
  children: PropTypes.func.isRequired,
};
