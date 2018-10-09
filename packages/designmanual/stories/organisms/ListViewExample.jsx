import React, { Component } from 'react';
import ListView from 'ndla-listview';
import { mockListView } from '../../dummydata';

class ListViewExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailedItem: null,
      selectedLetter: '',
      sortByValue: 'category',
      filters: [],
    };
    this.setSelectedLetter = this.setSelectedLetter.bind(this);
    this.setDetailedItem = this.setDetailedItem.bind(this);
    this.handleChangeSortBy = this.handleChangeSortBy.bind(this);
  }

  setDetailedItem(item) {
    this.setState({ detailedItem: item });
  }

  setSelectedLetter(letter) {
    this.setState({ selectedLetter: letter });
  }

  handleChangeFilters(key, values) {
    this.setState(prevState => {
      const currentFilters = prevState.filters;
      currentFilters[key] = values;
      return {
        filters: currentFilters,
      };
    });
  }

  handleChangeSortBy(e) {
    this.setState({
      sortByValue: e.target.value,
    });
  }

  render() {
    const { detailedItem, selectedLetter, sortByValue } = this.state;

    return (
      <div>
        <ListView
          items={mockListView.items}
          detailedItem={detailedItem}
          selectedLetter={selectedLetter}
          selectCallback={this.setDetailedItem}
          selectedLetterCallback={this.setSelectedLetter}
          disableViewOption
          sortBy={{
            onChange: this.handleChangeSortBy,
            value: sortByValue,
            options: [
              {
                label: 'Tittel',
                value: 'title',
              },
              {
                label: 'Fag',
                value: 'subject',
              },
              {
                label: 'Kategori',
                value: 'category',
              },
            ],
          }}
          activeFilters={{
            subject: ['murerfaget', 'betongfaget'],
          }}
          filters={[
            {
              options: [
                { title: 'Betongfaget', value: 'betongfaget' },
                { title: 'Innredningsfaget', value: 'innredningsfaget' },
                { title: 'Murerfaget', value: 'murerfaget' },
                { title: 'Trelastfaget', value: 'trelastfaget' },
                { title: 'Tømrerfaget', value: 'tomrerfaget' },
              ],
              filterValues: this.state.filters.subject,
              onChange: this.handleChangeFilters,
              key: 'subject',
              label: 'Fag',
            },
            {
              options: [
                { title: 'El-håndverkøy', value: 'elhandverktoy' },
                { title: 'Håndverkøy', value: 'handverktoy' },
                { title: 'Maskiner', value: 'maskiner' },
                { title: 'Måleverkøy', value: 'maleverktoy' },
              ],
              filterValues: this.state.filters.category,
              onChange: this.handleChangeFilters,
              key: 'category',
              label: 'Verktøy',
            },
          ]}
        />
      </div>
    );
  }
}

export default ListViewExample;
