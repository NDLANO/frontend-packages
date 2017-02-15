/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { createElement } from 'react';
import classNames from 'classnames';

import LicenseCc from './LicenseCc';
import Download from './Download';
import Copy from './Copy';
import OpenWindow from './OpenWindow';
import LicenseBy from './LicenseBy';
import LicenseNc from './LicenseNc';
import LicenseNd from './LicenseNd';
import LicenseSa from './LicenseSa';

function Icon(props) {
  const { icon, ...rest } = props;
  return createElement(icon, { className: classNames('icon', rest.className) });
}

Icon.Download = props => (<Icon {...props} icon={Download} />);
Icon.Copy = props => (<Icon {...props} icon={Copy} />);
Icon.OpenWindow = props => (<Icon {...props} icon={OpenWindow} />);
Icon.LicenseCc = props => (<Icon {...props} icon={LicenseCc} />);
Icon.LicenseBy = props => (<Icon {...props} icon={LicenseBy} />);
Icon.LicenseNc = props => (<Icon {...props} icon={LicenseNc} />);
Icon.LicenseNd = props => (<Icon {...props} icon={LicenseNd} />);
Icon.LicenseSa = props => (<Icon {...props} icon={LicenseSa} />);

export default Icon;
