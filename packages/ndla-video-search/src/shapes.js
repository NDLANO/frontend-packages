/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import PropTypes from 'prop-types';

export const LicenseShape = PropTypes.shape({
  short: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  userFriendlyTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rights: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export const BrightcoveShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  custom_fields: PropTypes.shape({
    licenseinfo: PropTypes.string.isRequired,
    license: PropTypes.string.isRequired,
  }),
  images: PropTypes.shape({
    thumbnail: PropTypes.shape({
      src: PropTypes.string.isRequired,
    }),
  }),
});

export const YouTubeShape = PropTypes.shape({
  pagemap: PropTypes.shape({
    videoobject: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        videoid: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        thumbnailurl: PropTypes.string.isRequired,
        embedurl: PropTypes.string.isRequired,
        interactioncount: PropTypes.string.isRequired,
        datepublished: PropTypes.string.isRequired,
      }),
    ),
  }),
});
