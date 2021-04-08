/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { featureDetect } from './featureDetect';

const ScriptLoader = ({ polyfill, scripts }) => {
  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: featureDetect(JSON.stringify(polyfill), JSON.stringify(scripts)),
      }}
    />
  );
};

ScriptLoader.propTypes = {
  polyfill: PropTypes.shape({ src: PropTypes.string.isRequired }),
  scripts: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ScriptLoader;
