/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Audio = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="21"
    viewBox="0 0 34 21"
    className={className}>
    <path
      fill="none"
      stroke="#444"
      d="M32.515 8c.268 0 .485.217.485.485v3.363a.485.485 0 1 1-.97 0V8.485c0-.268.217-.485.485-.485zM17 8c.268 0 .485.217.485.485v3.363a.485.485 0 1 1-.97 0V8.485c0-.268.217-.485.485-.485zm-3.879-3c.268 0 .485.217.485.485v8.697a.485.485 0 0 1-.97 0V5.485c0-.268.217-.485.485-.485zM9.242 1c.268 0 .485.217.485.485v18.03a.485.485 0 0 1-.97 0V1.485c0-.268.218-.485.485-.485zM20.88 5c.268 0 .485.217.485.485v8.697a.485.485 0 0 1-.97 0V5.485c0-.268.217-.485.485-.485zm3.879-4c.267 0 .484.217.484.485v18.03a.485.485 0 0 1-.97 0V1.485c0-.268.218-.485.486-.485zm3.878 4c.268 0 .485.217.485.485v8.697a.485.485 0 1 1-.97 0V5.485c0-.268.218-.485.485-.485zM1.485 8c.268 0 .485.217.485.485v3.363a.485.485 0 1 1-.97 0V8.485C1 8.217 1.217 8 1.485 8zm3.879-3c.267 0 .484.217.484.485v8.697a.485.485 0 0 1-.97 0V5.485c0-.268.218-.485.486-.485z"
    />
  </svg>
);

Audio.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Audio;
