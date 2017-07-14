/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import PropTypes from 'prop-types';

const ResourcePlaceholderBlock = ({ blockProps: { data } }) =>
  <span className="c-block__resource-placeholder">
    Uhåndtert embed av følgende type: <b>{data.resource}</b>
  </span>;

ResourcePlaceholderBlock.propTypes = {
  blockProps: PropTypes.shape({
    data: PropTypes.shape({
      resource: PropTypes.string.isRequired,
    }),
  }),
};

export default ResourcePlaceholderBlock;
