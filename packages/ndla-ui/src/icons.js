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
import GridIcon from './internal-icons/Grid';
import Heading1Icon from './internal-icons/Heading1';
import Heading3Icon from './internal-icons/Heading3';
import IngressIcon from './internal-icons/Ingress';
import InsertTemplateIcon from './internal-icons/InsertTemplate';
import OpenWindowIcon from './internal-icons/OpenWindow';
import PilcrowIcon from './internal-icons/Pilcrow';
import StrikethroughIcon from './internal-icons/Strikethrough';

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
export const Grid = props => <Icon {...props} icon={GridIcon} />;
export const Heading1 = props => <Icon {...props} icon={Heading1Icon} />;
export const Heading3 = props => <Icon {...props} icon={Heading3Icon} />;
export const Ingress = props => <Icon {...props} icon={IngressIcon} />;
export const InsertTemplate = props => (
  <Icon {...props} icon={InsertTemplateIcon} />
);
export const OpenWindow = props => <Icon {...props} icon={OpenWindowIcon} />;
export const Pilcrow = props => <Icon {...props} icon={PilcrowIcon} />;
export const Strikethrough = props => (
  <Icon {...props} icon={StrikethroughIcon} />
);

export default Icon;
