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
import { mockListView } from '../../dummydata';
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

  const getFilters = () => {
    const filtersBySubject = {
      category: [],
      subCategory: [],
    };
    // Loop through all items and fetch all corresponding filters
    mockListView.items.forEach(item => {
      const hasValue = item.subject.some(itemSubject => {
        return subjectFilter.includes(itemSubject.value);
      });
      if (hasValue) {
        if (item.category) {
          item.category.forEach(categoryItem => {
            const exists = filtersBySubject.category.some(element => {
              return element.value === categoryItem.value;
            });
            if (!exists) {
              filtersBySubject.category.push(categoryItem);
            }
          });
        }
        if (item.subCategory) {
          item.subCategory.forEach(categoryItem => {
            const exists = filtersBySubject.subCategory.some(element => {
              return element.value === categoryItem.value;
            });
            if (!exists) {
              filtersBySubject.subCategory.push(categoryItem);
            }
          });
        }
      }
    });

    const filteredFilters = [];

    if (filtersBySubject.category.length) {
      const category = {
        options: filtersBySubject.category,
        filterValues: filters.category,
        onChange: handleChangeFilters,
        key: 'category',
      };
      filteredFilters.push(category);
    }
    if (filtersBySubject.subCategory.length) {
      const category = {
        options: filtersBySubject.subCategory,
        filterValues: filters.subCategory,
        onChange: handleChangeFilters,
        key: 'subCategory',
      };
      filteredFilters.push(category);
    }

    // Disbale filters that will give zero results in combination with the selected filters
    const items = filterItems();

    filteredFilters.forEach(filterGroup => {
      const type = filterGroup.key;
      const options = filterGroup.options;

      options.forEach(option => {
        const optionValue = option.value;
        const hasItems = items.some(item => {
          if (item[type]) {
            return item[type].some(category => category.value === optionValue);
          }
          return false;
        });
        option.disabled = !hasItems;
      });
    });
    return filteredFilters;
  };

  const filterItems = () => {
    let filteredItems = mockListView.items;

    // Filter items on subject. Item must include SOME of the selected subjects
    if (subjectFilter && subjectFilter.length) {
      filteredItems = filteredItems.filter(item => {
        if (item.subject) {
          return subjectFilter.some(subject => {
            return item.subject.some(
              itemSubject => itemSubject.value === subject,
            );
          });
        }
        return false;
      });
    }

    // 1. Filter items on category. Item must include ALL of the selected categories
    if (filters.category && filters.category.length) {
      filteredItems = filteredItems.filter(item => {
        if (item.category) {
          return filters.category.every(category => {
            return item.category.some(
              itemCategory => itemCategory.value === category,
            );
          });
        }
        return false;
      });
    }

    // 2 Filter items on sub-category. Item must include ALL of the selected categories
    if (filters.subCategory && filters.subCategory.length) {
      filteredItems = filteredItems.filter(item => {
        if (item.subCategory) {
          return filters.subCategory.every(category => {
            return item.subCategory.some(
              itemCategory => itemCategory.value === category,
            );
          });
        }
        return false;
      });
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
          label={t(`listview.filters.subject.openFilter`)}
          options={mockListView.subjects}
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
        filters={getFilters()}
      />
    </>
  );
};
ExplanationService.propTypes = {
  t: PropTypes.func.isRequired,
};

export default injectT(ExplanationService);
