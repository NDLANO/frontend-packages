/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { OneColumn, SafeLink } from '@ndla/ui';
import { injectT } from '@ndla/i18n';
import Button from '@ndla/button';
import CategorySelect from './CategorySelect';

import { topicShape } from './shapes';
import { ChevronDown } from '@ndla/icons/lib/common';

const FilmMovieSearch = ({ topics, t, ...props }) => {
  const [isOpen, toggleOpenState] = useState(false);
  return (
    <OneColumn>
        <Button ghostPill onClick={() => toggleOpenState(!isOpen)}>
          hello <ChevronDown />
        </Button>
        {isOpen && (
          <nav className="u-12/12 u-8/12@tablet">
            <ul>
              {topics.map(topic => (
                <li key={topic.id}>
                  <SafeLink to={`/subjects${topic.path}`} key={topic.id}>
                    <span>{topic.name}</span>
                  </SafeLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      <CategorySelect {...props} />
    </OneColumn>
  );
};

FilmMovieSearch.propTypes = {
  topics: PropTypes.arrayOf(topicShape),
  onChangeResourceType: PropTypes.func.isRequired,
  resourceTypeSelected: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
  ariaControlId: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

FilmMovieSearch.defaultProps = {
  topics: [],
};

export default injectT(FilmMovieSearch);
