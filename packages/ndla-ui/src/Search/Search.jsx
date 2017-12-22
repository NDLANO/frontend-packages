/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Search as SearchIcon} from 'ndla-icons/common';

const classes = new BEMHelper('c-search');

const Search = ({ placeholder="Søk etter innhold", value="" }) => (
  <div {...classes()}>
    <input 
      type="search" 
      autofocus="" {...classes('input')} 
      role="combobox" 
      aria-autocomplete="list" 
      aria-expanded="false" 
      autocomplete="on" 
      id="search" 
      tabindex="0" 
      name="search" 
      placeholder={placeholder}
    />
    <button 
      tabindex="1" 
      {...classes('button')}
      type="submit"
      value="Search" 
    >
      <SearchIcon />
    </button>
  </div>
);

Search.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Search;
