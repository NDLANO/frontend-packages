/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { spacing } from 'ndla-core';

import FormRemoveButton from './FormRemoveButton';
import FormSections from './FormSections';

const TaxonomyListSelectorCSS = css`
  display: flex;
  > * {
    flex-grow: 1;
    flex-basis: 0;
    &:not(:first-child) {
      margin-left: ${spacing.small};
    }
  }
  &:only-child {
    > * {
      flex-basis: 1;
    }
  }
`;

const TaxonomyListSelector = ({
  list,
  removeItem,
  toggleItemCore,
  removeLabel,
}) => (
  <Fragment>
    {list.length
      ? list.map(listItem => (
          <FormSections key={listItem.uniqeId}>
            <div>
              {listItem.mainTopicName}
              <button
                type="button"
                onClick={() => toggleItemCore(listItem.uniqeId)}>
                {listItem.core ? 'Kjerne' : 'Tillegg'}
              </button>
              {listItem.subTopicNames.map(subTopicName => (
                <Fragment key={subTopicName}>{subTopicName}</Fragment>
              ))}
            </div>
            <div>
              <FormRemoveButton
                onClick={() => {
                  removeItem(listItem.uniqeId);
                }}>
                {removeLabel}
              </FormRemoveButton>
            </div>
          </FormSections>
        ))
      : null}
  </Fragment>
);

TaxonomyListSelector.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      uniqeId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      filter: PropTypes.string.isRequired,
      subTopicNames: PropTypes.arrayOf(PropTypes.string),
      core: PropTypes.bool,
    }),
  ).isRequired,
  removeLabel: PropTypes.string,
  primaryLabel: PropTypes.string,
  coreLabel: PropTypes.string,
  primary: PropTypes.number,
  removeItem: PropTypes.func.isRequired,
  selectPrimary: PropTypes.func.isRequired,
  toggleItemCore: PropTypes.func.isRequired,
};

TaxonomyListSelector.defaultProps = {
  primary: 0,
};

export default TaxonomyListSelector;
