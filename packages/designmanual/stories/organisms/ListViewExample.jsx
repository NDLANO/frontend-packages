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
      viewStyle: 'grid',
      searchValue: '',
      filters: {},
    };
    this.setSelectedLetter = this.setSelectedLetter.bind(this);
    this.setDetailedItem = this.setDetailedItem.bind(this);
    this.handleChangeSortBy = this.handleChangeSortBy.bind(this);
    this.handleChangeFilters = this.handleChangeFilters.bind(this);
    this.handleChangedViewStyle = this.handleChangedViewStyle.bind(this);
    this.handleChangeSearchValue = this.handleChangeSearchValue.bind(this);
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

  handleChangeSearchValue(e) {
    this.setState({
      searchValue: e.target.value,
    });
  }

  handleChangeSortBy(e) {
    this.setState({
      sortByValue: e.target.value,
    });
  }

  handleChangedViewStyle({ viewStyle }) {
    this.setState({
      viewStyle,
    });
  }

  filterItems() {
    const { filters, sortByValue, selectedLetter, searchValue } = this.state;
    let filteredItems = mockListView.items;
    // 1. Filter items on subjects
    if (filters.subject && filters.subject.length) {
      filteredItems = filteredItems.filter(item =>
        item.subject.some(subject => filters.subject.includes(subject.value)),
      );
    }

    // 2 Filter items on category
    if (filters.category && filters.category.length) {
      filteredItems = filteredItems.filter(item =>
        filters.category.includes(item.category.value),
      );
    }

    // 3. Filter with search (testing name, description and tags[])
    if (searchValue.length > 0) {
      const searchValueLowercase = searchValue.toLowerCase();
      filteredItems = filteredItems.filter(
        item =>
          (item.tags &&
            item.tags.some(
              tag => tag.toLowerCase().indexOf(searchValueLowercase) !== -1,
            )) ||
          (item.description &&
            item.description.toLowerCase().indexOf(searchValueLowercase) !==
              -1) ||
          item.name.toLowerCase().indexOf(searchValueLowercase) !== -1,
      );
    }

    // 4. Sort filtered results
    if (sortByValue === 'title') {
      filteredItems = filteredItems.sort(
        (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
      );
    } else if (sortByValue === 'category') {
      filteredItems = filteredItems.sort(
        (a, b) =>
          a.category.title.toLowerCase() > b.category.title.toLowerCase()
            ? 1
            : -1,
      );
    } else {
      // TODO: Clarify, how do you sort an array of subjects?
      filteredItems = filteredItems.sort(
        (a, b) =>
          a.subject[0].title.toLowerCase() > b.subject[0].title.toLowerCase()
            ? 1
            : -1,
      );
    }
    return filteredItems;
  }

  render() {
    const {
      detailedItem,
      selectedLetter,
      sortByValue,
      viewStyle,
      searchValue,
    } = this.state;

    return (
      <div>
        <ListView
          items={this.filterItems()}
          detailedItem={detailedItem}
          selectedLetter={selectedLetter}
          selectCallback={this.setDetailedItem}
          selectedLetterCallback={this.setSelectedLetter}
          onChangedViewStyle={this.handleChangedViewStyle}
          viewStyle={viewStyle}
          searchValue={searchValue}
          onChangedSearchValue={this.handleChangeSearchValue}
          sortBy={{
            onChange: this.handleChangeSortBy,
            value: sortByValue,
            label: 'Sorter etter',
            id: 'sortbyId',
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
