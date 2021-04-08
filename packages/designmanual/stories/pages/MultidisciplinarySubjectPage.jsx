/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MultidisciplinarySubject } from '@ndla/ui';
import { filters, getResources } from '../../dummydata/mockMultidisciplinarySubject';

const getFilters = selectedFilters =>
  filters.map(filter => {
    const item = { ...filter };
    item.selected = selectedFilters.indexOf(item.id) > -1;
    return item;
  });

const getItems = selectedFilters => {
  const items = getResources();
  if (!selectedFilters.length) {
    return items;
  }

  return items.filter(item =>
    item.filters.some(filterId => {
      return selectedFilters.indexOf(filterId) > -1;
    }),
  );
};

const MultidisciplinarySubjectPage = ({ selectedFilters: selectedFiltersProps = [] }) => {
  const [selectedFilters, setSelectedFilters] = useState(selectedFiltersProps);

  const onFilterClick = id => {
    const newFilters = [...selectedFilters];
    const idIndex = newFilters.indexOf(id);
    if (idIndex > -1) {
      newFilters.splice(idIndex, 1);
    } else {
      newFilters.push(id);
    }
    setSelectedFilters(newFilters);
  };

  const items = getItems(selectedFilters);
  return (
    <MultidisciplinarySubject
      filters={getFilters(selectedFilters)}
      onFilterClick={onFilterClick}
      items={items}
      totalItemsCount={items.length}
    />
  );
};

MultidisciplinarySubjectPage.propTypes = {
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
};

export default MultidisciplinarySubjectPage;
