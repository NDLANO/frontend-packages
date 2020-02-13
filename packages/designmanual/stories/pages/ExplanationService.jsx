import React, { useState } from 'react';
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
import { FilterListPhone } from '@ndla/ui';
import styled from '@emotion/styled';
import { mockListView, searchFilterOptions } from '../../dummydata';
import { TextContent, ImageContent } from '../article/LicenseBox';

const SubjectFilterWrapper = styled.div`
  margin-bottom: 13px;
`;

const ExplanationService = ({ t }) => {
  const [detailedItem, setDetailedItem] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [viewStyle, setViewStyle] = useState('grid');
  const [searchValue, setSearchValue] = useState('');
  const [filters, setFilters] = useState({});
  const [subjectFilter, setSubjectFilter] = useState([]);

  const setDetailedItemHandler = item => {
    setDetailedItem(item);
  };

  const setSelectedLetterHandler = letter => {
    setSelectedLetter(letter);
  };

  const handleChangeFilters = (key, values) => {
    const newFilter = { [key]: values };
    setFilters({ ...filters, ...newFilter });
  };

  const handleChangeSearchValue = e => {
    setSearchValue(e.target.value);
  };

  const handleChangedViewStyle = ({ viewStyle }) => {
    setViewStyle(viewStyle);
  };

  const handleChangedSubjectFilter = values => {
    setSubjectFilter(values);
  };

  const filterItems = () => {
    let filteredItems = mockListView.items;
    // 1. Filter items on subjects
    if (filters.subject && filters.subject.length) {
      filteredItems = filteredItems.filter(item =>
        item.subject.some(subject => filters.subject.includes(subject.value)),
      );
    }

    // 2 Filter items on category
    if (filters.category && filters.category.length) {
      filteredItems = filteredItems.filter(
        item => item.category && filters.category.includes(item.category.value),
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
    return filteredItems;
  };

  const filterOnSelectedLetter = filteredItems => {
    if (selectedLetter) {
      return filteredItems.filter(
        item => item.name.toLowerCase().substr(0, 1) === selectedLetter,
      );
    }
    return filteredItems;
  };

  const renderSelectedItem = () => {
    return detailedItem ? (
      <NotionDialogWrapper
        title={detailedItem.name}
        subTitle={detailedItem.category.title}
        closeCallback={() => setDetailedItemHandler(null)}>
        <NotionDialogContent>
          {detailedItem.image ? (
            <NotionDialogImage
              src={detailedItem.image}
              alt={detailedItem.description}
            />
          ) : null}
          <NotionDialogText>{detailedItem.longDescription}</NotionDialogText>
        </NotionDialogContent>
        <NotionDialogTags tags={detailedItem.tags} />
        <NotionDialogLicenses
          license={detailedItem.license}
          source={detailedItem.source}
          authors={detailedItem.authors}
          licenseBox={
            <Modal
              activateButton={<Button link>{t('article.useContent')}</Button>}
              size="medium">
              {onClose => (
                <>
                  <ModalHeader modifier="no-bottom-padding">
                    <ModalCloseButton onClick={onClose} title="lukk" />
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
  };

  const filteredItems = filterItems();
  const alphabet = activeAlphabet(filteredItems);
  return (
    <>
      <SubjectFilterWrapper>
        <FilterListPhone
          preid="subject-list"
          label="Filtrer på fag"
          options={searchFilterOptions.subjects}
          alignedGroup
          values={subjectFilter}
          messages={{
            useFilter: t(`listview.filters.subject.useFilter`),
            openFilter: t(`listview.filters.subject.openFilter`),
            closeFilter: t(`listview.filters.subject.closeFilter`),
          }}
          onChange={handleChangedSubjectFilter}
          viewMode="allModal"
        />
      </SubjectFilterWrapper>
      <ListView
        items={filterOnSelectedLetter(filteredItems)}
        alphabet={alphabet}
        selectedLetter={selectedLetter}
        selectedLetterCallback={setSelectedLetterHandler}
        onChangedViewStyle={handleChangedViewStyle}
        viewStyle={viewStyle}
        searchValue={searchValue}
        onChangedSearchValue={handleChangeSearchValue}
        onSelectItem={setDetailedItemHandler}
        selectedItem={renderSelectedItem()}
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
            filterValues: filters.subject,
            onChange: handleChangeFilters,
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
            filterValues: filters.category,
            onChange: handleChangeFilters,
            key: 'category',
            //label: 'Verktøy',
          },
        ]}
      />
    </>
  );
};
ExplanationService.propTypes = {
  t: PropTypes.func.isRequired,
};

export default injectT(ExplanationService);
