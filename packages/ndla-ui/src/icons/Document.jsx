/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Document = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 78 77">
    <circle fill="#FFF" cx="38.5" cy="38.9" r="38.3" />
    <g fill="none">
      <path fill="#DA788D" d="M39.0741334,76.5226713 C60.3071369,76.5226713 77.5202746,59.4081284 77.5202746,38.2935557 C77.5202746,17.178983 60.3071369,0.061854495 39.0741334,0.061854495 C17.8411299,0.061854495 0.627992189,17.178983 0.627992189,38.2935557 C0.627992189,59.4081284 17.8411299,76.5226713 39.0741334,76.5226713" />
      <polygon fill="#FFF" points="58.32 62.973 58.32 34.859 58.32 20.762 48.164 10.663 19.83 10.663 19.83 21.098 19.83 34.859 19.83 62.973" />
      <polygon fill="gray" points="48.165 20.762 58.321 20.762 48.165 10.662" />
      <polygon fill="#CCC" points="58.32 20.762 48.164 20.762 58.32 30.861" />
      <polygon fill="#DA788D" points="27.12 21.457 38.896 21.457 38.896 20.5 27.12 20.5" />
      <polygon fill="#B3B3B3" points="27.12 26.16 51.033 26.16 51.033 25.203 27.12 25.203" />
      <polygon fill="#B3B3B3" points="27.12 29.162 51.033 29.162 51.033 28.208 27.12 28.208" />
      <polygon fill="#B3B3B3" points="27.12 32.167 51.033 32.167 51.033 31.21 27.12 31.21" />
      <polygon fill="#B3B3B3" points="27.12 35.171 51.033 35.171 51.033 34.214 27.12 34.214" />
      <polygon fill="#DA788D" points="27.12 58.53 50.802 58.53 50.802 39.262 27.12 39.262" />
      <polygon fill="#FFF" points="44.342 48.896 35.73 53.178 35.73 44.614" />
    </g>
  </svg>
);

Document.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Document;
