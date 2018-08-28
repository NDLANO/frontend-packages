/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import PropTypes from 'prop-types';

const Trans = ({ children, prefix = '' }, context) =>
  children({
    t: (id, value = {}) => context.formatMessage(prefix + id, value),
  });

Trans.contextTypes = {
  formatMessage: PropTypes.func.isRequired,
};

export default Trans;
