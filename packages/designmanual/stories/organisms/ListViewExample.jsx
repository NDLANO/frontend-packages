import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ListView, { activeAlphabet } from '@ndla/listview';
import Tabs from '@ndla/tabs';
import {
  NotionDialogContent,
  NotionDialogImage,
  NotionDialogText,
  NotionDialogTags,
  NotionDialogLicenses,
  NotionDialogWrapper,
} from '@ndla/notion';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import Button from '@ndla/button';
import { injectT } from '@ndla/i18n';
import { mockListView } from '../../dummydata';
import { TextContent, ImageContent } from '../article/LicenseBox';

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
    this.handleSelectItem = this.handleSelectItem.bind(this);
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

  handleSelectItem(selectedItem) {
    this.setState({
      selectedItem,
    });
  }

  filterItems() {
    const { filters, sortByValue, searchValue } = this.state;

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
      filteredItems = filteredItems.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1,
      );
    } else if (sortByValue === 'category') {
      filteredItems = filteredItems.sort((a, b) =>
        a.category.title.toLowerCase() > b.category.title.toLowerCase()
          ? 1
          : -1,
      );
    } else {
      // TODO: Clarify, how do you sort an array of subjects?
      filteredItems = filteredItems.sort((a, b) =>
        a.subject[0].title.toLowerCase() > b.subject[0].title.toLowerCase()
          ? 1
          : -1,
      );
    }
    return filteredItems;
  }

  filterOnSelectedLetter(filteredItems) {
    const { selectedLetter } = this.state;
    if (selectedLetter) {
      return filteredItems.filter(
        item => item.name.toLowerCase().substr(0, 1) === selectedLetter,
      );
    }
    return filteredItems;
  }

  renderSelectedItem() {
    const { selectedItem } = this.state;

    return selectedItem ? (
      <NotionDialogWrapper
        title={selectedItem.name}
        subTitle={selectedItem.category.title}
        closeCallback={() => this.handleSelectItem()}>
        <NotionDialogContent>
          {selectedItem.image ? (
            <NotionDialogImage
              src={selectedItem.image}
              alt={selectedItem.description}
            />
          ) : null}
          <NotionDialogText>{selectedItem.longDescription}</NotionDialogText>
        </NotionDialogContent>
        <NotionDialogTags tags={selectedItem.tags} />
        <NotionDialogLicenses
          license={selectedItem.license}
          source={selectedItem.source}
          authors={selectedItem.authors}
          licenseBox={
            <Modal
              activateButton={
                <Button link>{this.props.t('article.useContent')}</Button>
              }
              size="medium">
              {onClose => (
                <Fragment>
                  <ModalHeader modifier="no-bottom-padding">
                    <ModalCloseButton onClick={onClose} title="lukk" />
                  </ModalHeader>
                  <ModalBody>
                    <Fragment>
                      <h1>{this.props.t('license.heading')}</h1>
                      <Tabs
                        singleLine
                        tabs={[
                          {
                            title: this.props.t('license.tabs.text'),
                            content: <TextContent />,
                          },
                          {
                            title: this.props.t('license.tabs.images'),
                            content: <ImageContent />,
                          },
                        ]}
                      />
                    </Fragment>
                  </ModalBody>
                </Fragment>
              )}
            </Modal>
          }
        />
      </NotionDialogWrapper>
    ) : null;
  }

  render() {
    const {
      detailedItem,
      selectedLetter,
      sortByValue,
      viewStyle,
      searchValue,
    } = this.state;

    const filteredItems = this.filterItems();
    const alphabet = activeAlphabet(filteredItems);

    return (
      <ListView
        items={this.filterOnSelectedLetter(filteredItems)}
        alphabet={alphabet}
        detailedItem={detailedItem}
        selectedLetter={selectedLetter}
        selectCallback={this.setDetailedItem}
        selectedLetterCallback={this.setSelectedLetter}
        onChangedViewStyle={this.handleChangedViewStyle}
        viewStyle={viewStyle}
        searchValue={searchValue}
        onChangedSearchValue={this.handleChangeSearchValue}
        onSelectItem={this.handleSelectItem}
        selectedItem={this.renderSelectedItem()}
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
    );
  }
}

ListViewExample.propTypes = {
  t: PropTypes.func.isRequired,
};

export default injectT(ListViewExample);
