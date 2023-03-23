import React, { useState } from 'react';
import ListView, { activeAlphabet } from '@ndla/listview';
import Tabs from '@ndla/tabs';
import {
  NotionDialogContent,
  NotionDialogImage,
  NotionDialogText,
  NotionDialogTags,
  NotionDialogLicenses,
  NotionDialogWrapper,
  NotionDialogRelatedLinks,
} from '@ndla/notion';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { ButtonV2 } from '@ndla/button';
import { colors, fonts, spacing } from '@ndla/core';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { FilterListPhone } from '@ndla/ui';
import styled from '@emotion/styled';
import { DropdownInput, DropdownMenu } from '@ndla/forms';
import { ChevronDown, Search } from '@ndla/icons/common';
import Downshift from 'downshift';
import { mockExplanationService } from '../../dummydata';
import { TextContent, ImageContent } from '../article/LicenseBox';

const SubjectFilterWrapper = styled.div`
  margin-bottom: ${spacing.small};
`;

const SeparatorWrapper = styled.div`
  margin-bottom: ${spacing.small};
  padding-left: ${spacing.small};
`;

const CategoriesFilterWrapper = styled.div`
  margin-bottom: ${spacing.small};
  position: relative;
  display: inline-block;
`;

const placeholderCSS = css`
  color: initial;
  font-weight: initial;
  opacity: 0.5;
`;
const placeholderHasValuesCSS = (props) =>
  !props.hasValues
    ? css`
        color: ${colors.brand.primary};
        font-weight: bold;
        ${fonts.sizes('16px')};
      `
    : placeholderCSS;

const categoryFilterCSS = (props) => css`
  border: 2px solid ${colors.brand.primary};
  min-height: auto;
  cursor: pointer;
  background-color: transparent;
  flex-grow: 0;
  input {
    cursor: pointer;
    ::placeholder {
      ${placeholderHasValuesCSS(props)}
    }
    :focus {
      ::placeholder {
        ${placeholderCSS}
      }
    }
  }
`;

const availableCategories = () => {
  const categories = [];
  mockExplanationService.items.forEach((item) => {
    if (item.category) {
      item.category.forEach((categoryItem) => {
        const exists = categories.some((element) => {
          return element.value === categoryItem.value;
        });
        if (!exists) {
          categories.push(categoryItem);
        }
      });
    }
  });
  return categories;
};

const ExplanationService = () => {
  const { t } = useTranslation();
  const [detailedItem, setDetailedItem] = useState(null);
  const [viewStyle, setViewStyle] = useState('grid');
  const [searchValue, setSearchValue] = useState('');
  const [filters, setFilters] = useState([]);
  const [subjectFilter, setSubjectFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [categoryFilterData, setCategoryFilterData] = useState(availableCategories());
  const [categoryFilterOpen, setCategoryFilterOpen] = useState(false);
  const [categoryFilterSearchValue, setCategoryFilterSearchValue] = useState('');

  const setDetailedItemHandler = (item) => {
    setDetailedItem(item);
  };

  const handleChangeFilters = (key, values) => {
    setFilters(values);
  };

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleChangedViewStyle = ({ viewStyle }) => {
    setViewStyle(viewStyle);
  };

  const handleChangedSubjectFilter = (values) => {
    setCategoryFilter([]);
    setFilters([]);
    setSubjectFilter(values);
  };

  const handleChangedCategoryFilter = (values) => {
    setSubjectFilter([]);
    setFilters([]);
    setCategoryFilter([values]);
    setCategoryFilterOpen(false);
    setCategoryFilterSearchValue('');
  };

  const handleStateChangeCategoryFilter = (changes) => {
    const { isOpen, type } = changes;

    if (type === Downshift.stateChangeTypes.mouseUp) {
      setCategoryFilterOpen(isOpen);
      if (!isOpen) {
        setCategoryFilterSearchValue('');
      }
    }

    if (type === Downshift.stateChangeTypes.keyDownEnter) {
      setCategoryFilterSearchValue('');
    }
  };

  const onCategoryFilterSearch = (e) => {
    const {
      target: { value },
    } = e;
    const searchValueLowercase = value.toLowerCase();
    const filteredCategories = availableCategories().filter((item) =>
      item.title.toLowerCase().startsWith(searchValueLowercase),
    );
    setCategoryFilterSearchValue(value);
    setCategoryFilterData(filteredCategories);
  };

  const onCategoryFilterSearchFocus = () => {
    setCategoryFilterData(availableCategories());
    setCategoryFilterOpen(true);
  };

  const removeCategoryFilter = (value) => {
    const filteredCategories = categoryFilter.filter((item) => item.title !== value);
    setCategoryFilter(filteredCategories);
  };

  const getFilters = () => {
    if (subjectFilter.length) {
      return [];
    }
    const filtersBySelectedCategory = {
      subCategory: [],
      subCategory2: [],
    };
    // Loop through all items and fetch all corresponding filters
    mockExplanationService.items.forEach((item) => {
      const hasValue =
        item.category &&
        item.category.some((itemCategory) => {
          return categoryFilter.some((categoryFilterItem) => categoryFilterItem.value === itemCategory.value);
        });
      if (hasValue) {
        if (item.subCategory) {
          item.subCategory.forEach((categoryItem) => {
            const exists = filtersBySelectedCategory.subCategory.some((element) => {
              return element.value === categoryItem.value;
            });
            if (!exists) {
              filtersBySelectedCategory.subCategory.push(categoryItem);
            }
          });
        }
        if (item.subCategory2) {
          item.subCategory2.forEach((categoryItem) => {
            const exists = filtersBySelectedCategory.subCategory2.some((element) => {
              return element.value === categoryItem.value;
            });
            if (!exists) {
              filtersBySelectedCategory.subCategory2.push(categoryItem);
            }
          });
        }
      }
    });

    const filteredFilter = {
      onChange: handleChangeFilters,
      key: 'default',
      filterValues: filters,
      options: [],
      isGroupedOptions: true,
      label: t(`listview.filters.default.heading`),
    };

    if (filtersBySelectedCategory.subCategory.length) {
      filteredFilter.options.push(filtersBySelectedCategory.subCategory);
    }
    if (filtersBySelectedCategory.subCategory2.length) {
      filteredFilter.options.push(filtersBySelectedCategory.subCategory2);
    }

    const items = filterItems();

    // Disable filters that will give zero results in combination with the selected filters
    filteredFilter.options.forEach((filterGroup) => {
      filterGroup.forEach((option) => {
        const optionValue = option.value;
        const hasItems = items.some((item) => {
          let hasValue = false;
          if (item.subCategory) {
            hasValue = item.subCategory.some((category) => category.value === optionValue);
          }
          if (!hasValue && item.subCategory2) {
            hasValue = item.subCategory2.some((category) => category.value === optionValue);
          }
          return hasValue;
        });
        option.disabled = !hasItems;
      });
    });

    if (filteredFilter.options.length) {
      return [filteredFilter];
    }
    return [];
  };

  const filterItems = () => {
    let filteredItems = mockExplanationService.items;

    // Filter items on subject. Item must include SOME of the selected subjects
    if (subjectFilter && subjectFilter.length) {
      filteredItems = filteredItems.filter((item) => {
        if (item.subject) {
          return subjectFilter.some((subject) => {
            return item.subject.some((itemSubject) => itemSubject.value === subject);
          });
        }
        return false;
      });
    }

    // Filter items on category. Item must include SOME of the selected categories
    if (categoryFilter && categoryFilter.length) {
      filteredItems = filteredItems.filter((item) => {
        if (item.category) {
          return categoryFilter.some((category) => {
            return item.category.some((itemCategory) => itemCategory.value === category.value);
          });
        }
        return false;
      });
    }

    // Filter items on subCategory. Item must include ALL of the selected categories
    if (filters && filters.length) {
      filteredItems = filteredItems.filter((item) => {
        return filters.every((category) => {
          let hasValue = false;
          if (item.subCategory) {
            hasValue = item.subCategory.some((itemCategory) => itemCategory.value === category);
          }

          if (!hasValue && item.subCategory2) {
            hasValue = item.subCategory2.some((itemCategory) => itemCategory.value === category);
          }
          return hasValue;
        });
      });
    }

    // Filter with search (testing name, description and tags[])
    if (searchValue.length > 0) {
      const searchValueLowercase = searchValue.toLowerCase();
      filteredItems = filteredItems.filter((item) => item.name.toLowerCase().startsWith(searchValueLowercase));
    }
    return filteredItems;
  };

  const renderSelectedItem = () => {
    return detailedItem ? (
      <NotionDialogWrapper
        title={detailedItem.name}
        subTitle={detailedItem.category && detailedItem.category[0].title}
        closeCallback={() => setDetailedItemHandler(null)}>
        <NotionDialogContent>
          {detailedItem.image ? <NotionDialogImage src={detailedItem.image} alt={detailedItem.description} /> : null}
          <NotionDialogText>{detailedItem.longDescription}</NotionDialogText>
        </NotionDialogContent>
        <NotionDialogTags tags={detailedItem.tags} />
        <NotionDialogRelatedLinks label={t(`listview.relatedLinks.label`)} links={detailedItem.relatedArticles} />
        <NotionDialogLicenses
          license={detailedItem.license}
          source={detailedItem.source}
          authors={detailedItem.authors}
          licenseBox={
            <Modal activateButton={<ButtonV2 variant="link">{t('article.useContent')}</ButtonV2>} size="medium">
              {(onClose) => (
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

  const renderMarkdown = (text) => text;

  const filteredItems = filterItems();
  const alphabet = activeAlphabet(filteredItems);

  const categoryFilterInputProps = {
    value: categoryFilterSearchValue,
    onChange: onCategoryFilterSearch,
    onFocus: onCategoryFilterSearchFocus,
    onClick: onCategoryFilterSearchFocus,
    placeholder: t(`listview.filters.category.openFilter`),
  };
  return (
    <>
      <SubjectFilterWrapper>
        <FilterListPhone
          preid="subject-list"
          label={t(`listview.filters.subject.openFilter`)}
          options={mockExplanationService.subjects}
          values={subjectFilter}
          messages={{
            useFilter: t(`listview.filters.subject.useFilter`),
            openFilter: t(`listview.filters.subject.openFilter`),
            closeFilter: t(`listview.filters.subject.closeFilter`),
          }}
          onChange={handleChangedSubjectFilter}
          viewMode="allModal"
          showActiveFiltersOnSmallScreen
        />
      </SubjectFilterWrapper>
      <SeparatorWrapper>eller</SeparatorWrapper>
      <CategoriesFilterWrapper>
        <Downshift
          onSelect={handleChangedCategoryFilter}
          itemToString={(item) => {
            return item ? item.title || '' : '';
          }}
          onStateChange={handleStateChangeCategoryFilter}
          isOpen={categoryFilterOpen}>
          {({ getInputProps, getMenuProps, getItemProps }) => {
            return (
              <div>
                <DropdownInput
                  multiSelect
                  {...getInputProps(categoryFilterInputProps)}
                  data-testid={'dropdownInput'}
                  idField="title"
                  labelField="title"
                  iconRight={
                    categoryFilterOpen ? (
                      <Search aria-hidden="true" />
                    ) : (
                      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                      <span onClick={onCategoryFilterSearchFocus}>
                        <ChevronDown aria-hidden="true" />
                      </span>
                    )
                  }
                  values={categoryFilter}
                  removeItem={removeCategoryFilter}
                  customCSS={categoryFilterCSS({
                    hasValues: categoryFilter.length,
                  })}
                />
                <DropdownMenu
                  getMenuProps={getMenuProps}
                  getItemProps={getItemProps}
                  isOpen={categoryFilterOpen}
                  idField="title"
                  labelField="title"
                  items={categoryFilterData}
                  maxRender={1000}
                  hideTotalSearchCount
                  positionAbsolute
                />
              </div>
            );
          }}
        </Downshift>
      </CategoriesFilterWrapper>
      <div>
        <ListView
          items={filteredItems}
          alphabet={alphabet}
          onChangedViewStyle={handleChangedViewStyle}
          viewStyle={viewStyle}
          searchValue={searchValue}
          onChangedSearchValue={handleChangeSearchValue}
          onSelectItem={setDetailedItemHandler}
          selectedItem={renderSelectedItem()}
          filters={getFilters()}
          renderMarkdown={renderMarkdown}
          totalCount={filteredItems.length}
        />
      </div>
    </>
  );
};

export default ExplanationService;
