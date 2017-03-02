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
import Audio from './Audio';
import Document from './Document';
import ArrowDown from './ArrowDown';
import Grid from './Grid';
import Link from './Link';
import Embed from './Embed';
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
Icon.Audio = props => (<Icon {...props} icon={Audio} />);
Icon.Document = props => (<Icon {...props} icon={Document} />);
Icon.ArrowDown = props => (<Icon {...props} icon={ArrowDown} />);
Icon.Grid = props => (<Icon {...props} icon={Grid} />);
Icon.Link = props => (<Icon {...props} icon={Link} />);
Icon.Embed = props => (<Icon {...props} icon={Embed} />);
// Icon.Info = props => (<Icon {...props} icon={Info} />);
Icon.OpenWindow = props => (<Icon {...props} icon={OpenWindow} />);
Icon.LicenseCc = props => (<Icon {...props} icon={LicenseCc} />);
Icon.LicenseBy = props => (<Icon {...props} icon={LicenseBy} />);
Icon.LicenseNc = props => (<Icon {...props} icon={LicenseNc} />);
Icon.LicenseNd = props => (<Icon {...props} icon={LicenseNd} />);
Icon.LicenseSa = props => (<Icon {...props} icon={LicenseSa} />);

export default Icon;
