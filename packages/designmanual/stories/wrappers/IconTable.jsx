/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { createElement } from 'react';
import PropTypes from 'prop-types';

const IconTable = ({ icons }) => (
  <table className="c-table">
    <thead>
      <tr>
        <th>Ikon</th>
        <th>Navn</th>
        <th>Lisens</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(icons).map(key => (
        <tr key={key}>
          <td>
            {createElement(icons[key], {
              className: 'c-icon--medium',
            })}
          </td>
          <td>{key}</td>
          <td>{icons[key]().props['data-license']}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

IconTable.propTypes = {
  icons: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default IconTable;
