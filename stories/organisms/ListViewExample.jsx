import React, { Component } from 'react';
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
import { ButtonV2 } from '@ndla/button';
import { withTranslation } from 'react-i18next';
import { mockListView } from '../../dummydata';
import { TextContent, ImageContent } from '../article/LicenseBox';

class ListViewExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailedItem: null,
      selectedLetter: '',
      viewStyle: 'grid',
      searchValue: '',
      filters: {},
    };
    this.setSelectedLetter = this.setSelectedLetter.bind(this);
    this.setDetailedItem = this.setDetailedItem.bind(this);
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
    this.setState((prevState) => {
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
    const { filters, searchValue } = this.state;

    let filteredItems = mockListView.items;
    // 1. Filter items on subjects
    if (filters.subject && filters.subject.length) {
      filteredItems = filteredItems.filter((item) =>
        item.subject.some((subject) => filters.subject.includes(subject.value)),
      );
    }

    // 2 Filter items on category
    if (filters.category && filters.category.length) {
      filteredItems = filteredItems.filter((item) => item.category && filters.category.includes(item.category.value));
    }

    // 3. Filter with search (testing name, description and tags[])
    if (searchValue.length > 0) {
      const searchValueLowercase = searchValue.toLowerCase();
      filteredItems = filteredItems.filter(
        (item) =>
          (item.tags && item.tags.some((tag) => tag.toLowerCase().indexOf(searchValueLowercase) !== -1)) ||
          (item.description && item.description.toLowerCase().indexOf(searchValueLowercase) !== -1) ||
          item.name.toLowerCase().indexOf(searchValueLowercase) !== -1,
      );
    }
    return filteredItems;
  }

  filterOnSelectedLetter(filteredItems) {
    const { selectedLetter } = this.state;
    if (selectedLetter) {
      return filteredItems.filter((item) => item.name.toLowerCase().substr(0, 1) === selectedLetter);
    }
    return filteredItems;
  }

  renderSelectedItem() {
    const { selectedItem } = this.state;
    const { t } = this.props;

    return selectedItem ? (
      <NotionDialogWrapper
        title={selectedItem.name}
        subTitle={selectedItem.category.title}
        closeCallback={() => this.handleSelectItem()}>
        <NotionDialogContent>
          {selectedItem.image ? <NotionDialogImage src={selectedItem.image} alt={selectedItem.description} /> : null}
          <NotionDialogText>{selectedItem.longDescription}</NotionDialogText>
        </NotionDialogContent>
        <NotionDialogTags tags={selectedItem.tags} />
        <NotionDialogLicenses
          license={selectedItem.license}
          source={selectedItem.source}
          authors={selectedItem.authors}
          licenseBox={
            <Modal activateButton={<ButtonV2 variant="link">{t('article.useContent')}</ButtonV2>} size="medium">
              {(onClose) => (
                <>
                  <ModalHeader modifier="no-bottom-padding">
                    <ModalCloseButton onClick={onClose} />
                  </ModalHeader>
                  <ModalBody>
                    <>
                      <h1>{t('license.heading')}</h1>
                      <Tabs
                        singleLine
                        tabs={[
                          {
                            title: t('license.tabs.text'),
                            content: <TextContent t={t} />,
                          },
                          {
                            title: t('license.tabs.images'),
                            content: <ImageContent t={t} />,
                          },
                        ]}
                      />
                    </>
                  </ModalBody>
                </>
              )}
            </Modal>
          }
        />
      </NotionDialogWrapper>
    ) : null;
  }

  render() {
    const { detailedItem, selectedLetter, viewStyle, searchValue } = this.state;

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
        filters={[
          {
            options: [
              { title: 'Betongfaget', value: 'betongfaget' },
              { title: 'Innredningsfaget', value: 'innredningsfaget' },
              { title: 'Murerfaget', value: 'murerfaget' },
              {
                title: 'Trelastfaget',
                value: 'trelastfaget',
                disabled: true,
              },
              { title: 'Tømrerfaget', value: 'tomrerfaget' },
            ],
            filterValues: this.state.filters.subject,
            onChange: this.handleChangeFilters,
            key: 'subject',
            //label: 'Fag',
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

export default withTranslation()(ListViewExample);
