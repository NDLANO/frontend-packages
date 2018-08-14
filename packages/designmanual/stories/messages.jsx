import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import { storiesOf } from '@storybook/react';
import { Logo, PageContainer, FilterList, OneColumn, LayoutItem } from 'ndla-ui';
import { phrases } from 'ndla-i18n';
import { Center } from './helpers';

const classes = BEMHelper('c-table');

const flatten = object => (
  Object.assign({}, ...function _flatten(objectBit, path = '') {
    return [].concat(
      ...Object.keys(objectBit).map(
        key => typeof objectBit[key] === 'object' ?
          _flatten(objectBit[key], `${path}.${key}`) :
          ({[`${path}.${key}`]: objectBit[key]})
      )
    )
  }(object))
);

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      findNotApprovedLabels: false,
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.flattenedNb = flatten(phrases.nb);
    this.flattenedNn = flatten(phrases.nn);
    this.flattenedEn = flatten(phrases.en);
  }

  onSearchChange(e) {
    this.setState({
      searchText: e.target.value,
      findNotApprovedLabels: true,
    });
  }

  filterSearch() {
    const { searchText, findNotApprovedLabels } = this.state;
    const flattened = findNotApprovedLabels ? (Object.keys(this.flattenedNb).filter((key) => (
      this.flattenedNb[key].substr(0, 1) === '*' ||
      this.flattenedNn[key].substr(0, 1) === '*' ||
      this.flattenedEn[key].substr(0, 1) === '*'
    )).reduce((result, key) => ({ ...result, [key]: this.flattenedNb[key] }), {})) : this.flattenedNb;

    if (searchText === '') {
      return flattened;
    }

    const filtered = Object.keys(flattened).filter((key) => (
      key.search(new RegExp(searchText, 'i')) !== -1 ||
      flattened[key].search(new RegExp(searchText, 'i')) !== -1 ||
      flattened[key].search(new RegExp(searchText, 'i')) !== -1 ||
      flattened[key].search(new RegExp(searchText, 'i')) !== -1
    ));

    return filtered.reduce((result, key) => ({ ...result, [key]: flattened[key] }), {});
  }

  renderAllPhrases() {
    // 1. Loop through all phrases with lang "nb"
    // 2. Show other all languages next to it
    return Object.keys(this.filterSearch()).map(key => (
      <tr key={key}>
        <td>
          {key.substr(1)}
        </td>
        <td className={this.flattenedNb[key].substr(0, 1) === '*' ? 'c-styleguide__warning-cell' : ''}>
          {this.flattenedNb[key]}
        </td>
        <td className={this.flattenedNn[key].substr(0, 1) === '*' ? 'c-styleguide__warning-cell' : ''}>
          {this.flattenedNn[key]}
        </td>
        <td className={this.flattenedEn[key].substr(0, 1) === '*' ? 'c-styleguide__warning-cell' : ''}>
          {this.flattenedEn[key]}
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <PageContainer>
        <div style={{ marginTop: '30px' }}>
          <Center>
            <center>
              <Logo label="Nasjonal digital læringsarena" />
              <h1>Tekster og Labels</h1>
            </center>
          </Center>
          <OneColumn>
            <LayoutItem layout="full">
              <article className="c-article c-article--clean">
                <input
                  type="search"
                  id="search"
                  name="search"
                  placeholder="Søk etter tekst eller label"
                  value={this.state.searchString}
                  onChange={this.onSearchChange}
                  style={{ width: '100%' }}
                />
                <div className="c-filter u-margin-top">
                  <FilterList
                    options={[
                      { title: 'Vis alle', value: false },
                      { title: 'Vis ikke godkjente', value: true },
                    ]}
                    values={[this.state.findNotApprovedLabels]}
                    onChange={(e) => {
                      this.setState({
                        findNotApprovedLabels: e.pop(),
                      });
                    }}
                  />
                </div>
                <table {...classes({ extra: ['o-table'] })}>
                  <thead>
                    <tr>
                      <th>Nøkkelord</th>
                      <th>Norsk bokmål</th>
                      <th>Norsk nynorsk</th>
                      <th>Engelsk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderAllPhrases()}
                  </tbody>
                </table>
              </article>
            </LayoutItem>
          </OneColumn>
        </div>
      </PageContainer>
    );
  }
}

storiesOf('Tekster og labels', module)
  .add('Tekster og labels', () => <Messages />);
