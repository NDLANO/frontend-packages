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

export const TopicShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtopics: PropTypes.array,
});

export const FootNoteShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  edition: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
});

export const ArticleShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  copyright: PropTypes.shape({
    authors: PropTypes.array.isRequired,
  }).isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
});
