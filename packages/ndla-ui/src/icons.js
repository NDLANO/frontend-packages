/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';

import BookIcon from './internal-icons/Book';
import DownloadIcon from './internal-icons/Download';
import EmbedIcon from './internal-icons/Embed';
import OpenWindowIcon from './internal-icons/OpenWindow';

function Icon(props) {
  const { icon, className, ...rest } = props;
  return createElement(icon, {
    className: classNames('c-icon', className),
    ...rest,
  });
}

Icon.propTypes = {
  icon: elementType.isRequired,
  className: PropTypes.string,
};

export const Book = props => <Icon {...props} icon={BookIcon} />;
export const Download = props => <Icon {...props} icon={DownloadIcon} />;
export const Embed = props => <Icon {...props} icon={EmbedIcon} />;
export const OpenWindow = props => <Icon {...props} icon={OpenWindowIcon} />;

export default Icon;
