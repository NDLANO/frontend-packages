/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" className={className}>
    <path d="M 19.625 0.15625 C 17.996 0.23425 16.42875 0.94625 15.21875 2.15625 L 10.46875 6.90625 C 11.21675 6.15725 13.98425 6.67175 14.65625 7.34375 L 17.53125 4.46875 C 18.16825 3.83175 18.96425 3.44325 19.78125 3.40625 C 20.33525 3.37825 21.1215 3.4955 21.8125 4.1875 C 22.4565 4.8335 22.59375 5.58375 22.59375 6.09375 C 22.59375 6.94775 22.20225 7.80075 21.53125 8.46875 L 16.53125 13.5 C 15.27425 14.759 13.36 14.858 12.25 13.75 C 11.616 13.116 10.5725 13.115 9.9375 13.75 C 9.3025 14.385 9.3005 15.4275 9.9375 16.0625 C 11.0765 17.2035 12.58 17.78125 14.125 17.78125 C 15.796 17.78125 17.5025 17.09625 18.8125 15.78125 L 23.84375 10.78125 C 25.11975 9.50925 25.84275 7.80375 25.84375 6.09375 C 25.84375 4.50575 25.244 2.992 24.125 1.875 C 22.931 0.681 21.324 0.07825 19.625 0.15625 z M 11.875 8.21875 C 10.205 8.21875 8.46825 8.90575 7.15625 10.21875 L 2.15625 15.21875 C 0.88025 16.49075 0.15725 18.19625 0.15625 19.90625 C 0.15625 21.49425 0.756 23.008 1.875 24.125 C 3.07 25.32 4.675 25.92375 6.375 25.84375 C 8.003 25.76575 9.57225 25.05375 10.78125 23.84375 L 15.53125 19.09375 C 14.78225 19.84275 12.01575 19.32725 11.34375 18.65625 L 8.46875 21.53125 C 7.83175 22.16825 7.03575 22.55475 6.21875 22.59375 C 5.66475 22.61975 4.8785 22.5025 4.1875 21.8125 C 3.5425 21.1665 3.40625 20.41425 3.40625 19.90625 C 3.40625 19.05225 3.79875 18.19925 4.46875 17.53125 L 9.46875 12.5 C 10.72675 11.243 12.641 11.143 13.75 12.25 C 14.385 12.885 15.4285 12.885 16.0625 12.25 C 16.6975 11.615 16.6985 10.5725 16.0625 9.9375 C 14.9215 8.7965 13.418 8.21875 11.875 8.21875 z" />
  </svg>
);

Grid.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Grid;
