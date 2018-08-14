import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import { storiesOf } from '@storybook/react';
import { Logo, PageContainer } from 'ndla-ui';
import { phrases } from 'ndla-i18n';
import { StoryBody } from './wrappers';
import { Center } from './helpers';

const classes = BEMHelper('c-table');
const styleguideClass = BEMHelper('c-styleguide');

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
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.flattenedNb = flatten(phrases.nb);
    this.flattenedNn = flatten(phrases.nn);
    this.flattenedEn = flatten(phrases.en);
  }

  onSearchChange(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  filterSearch() {
    const { searchText } = this.state;
    if (searchText === '') {
      return this.flattenedNb;
    }

    const filtered = Object.keys(this.flattenedNb).filter((key) => (
      key.search(new RegExp(searchText, 'i')) !== -1 ||
      this.flattenedNb[key].search(new RegExp(searchText, 'i')) !== -1 ||
      this.flattenedNn[key].search(new RegExp(searchText, 'i')) !== -1 ||
      this.flattenedEn[key].search(new RegExp(searchText, 'i')) !== -1
    ));

    return filtered.reduce((result, key) => ({ ...result, [key]: this.flattenedNb[key] }), {});
  }

  renderAllPhrases() {
    // 1. Loop through all phrases with lang "nb"
    // 2. Show other all languages next to it
    return Object.keys(this.filterSearch()).map(key => (
      <tr key={key}>
        <td>
          {key.substr(1)}
        </td>
        <td>
          {this.flattenedNb[key]}
        </td>
        <td>
          {this.flattenedNn[key]}
        </td>
        <td>
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
          <StoryBody>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Søk etter tekst eller label"
              value={this.state.searchString}
              onChange={this.onSearchChange}
              style={{ width: '100%' }}
            />
            <table {...classes({ extra: ['o-table'] })}>
              <thead>
                <tr>
                  <th>Nøkkelord</th>
                  <th>Forklaring</th>
                  <th>Tekst</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.renderAllPhrases()}
              </tbody>
            </table>
          </StoryBody>
        </div>
      </PageContainer>
    );
  }
}

storiesOf('Tekster og labels', module)
  .add('Tekster og labels', () => <Messages />);
