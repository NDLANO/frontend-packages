/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { PropTypes } from 'react';

export const LicenseRightShape = PropTypes.shape({
  short: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  userFriendlyTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export const LicenseShape = PropTypes.shape({
  short: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  userFriendlyTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rights: PropTypes.arrayOf(PropTypes.string).isRequired,
});
