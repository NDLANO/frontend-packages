
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

import LicenseCcIcon from './internal-icons/LicenseCc';
import DownloadIcon from './internal-icons/Download';
import CopyIcon from './internal-icons/Copy';
import AudioIcon from './internal-icons/Audio';
import DocumentIcon from './internal-icons/Document';
import HomeIcon from './internal-icons/Home';
import ArrowIcon from './internal-icons/Arrow';
import GridIcon from './internal-icons/Grid';
import LinkIcon from './internal-icons/Link';
import EmbedIcon from './internal-icons/Embed';
import BookIcon from './internal-icons/Book';
import PathIcon from './internal-icons/Path';
import PencilIcon from './internal-icons/Pencil';
import SearchIcon from './internal-icons/Search';
import OpenWindowIcon from './internal-icons/OpenWindow';
import TimeIcon from './internal-icons/Time';
import UserIcon from './internal-icons/User';
import LicenseByIcon from './internal-icons/LicenseBy';
import LicenseNcIcon from './internal-icons/LicenseNc';
import LicenseNdIcon from './internal-icons/LicenseNd';
import LicenseSaIcon from './internal-icons/LicenseSa';
import CameraIcon from './internal-icons/Camera';
import CrossCircleIcon from './internal-icons/CrossCircle';
import PlusCircleIcon from './internal-icons/PlusCircle';

function Icon(props) {
  const { icon, className, ...rest } = props;
  return createElement(icon, { className: classNames('c-icon', className), ...rest });
}

Icon.propTypes = {
  icon: elementType.isRequired,
  className: PropTypes.string,
};


export const Download = props => (<Icon {...props} icon={DownloadIcon} />);
export const Copy = props => (<Icon {...props} icon={CopyIcon} />);
export const Audio = props => (<Icon {...props} icon={AudioIcon} />);
export const Document = props => (<Icon {...props} icon={DocumentIcon} />);
export const Home = props => (<Icon {...props} icon={HomeIcon} />);
export const Arrow = props => (<Icon {...props} icon={ArrowIcon} />);
export const Grid = props => (<Icon {...props} icon={GridIcon} />);
export const Link = props => (<Icon {...props} icon={LinkIcon} />);
export const Embed = props => (<Icon {...props} icon={EmbedIcon} />);
export const Book = props => (<Icon {...props} icon={BookIcon} />);
export const Path = props => (<Icon {...props} icon={PathIcon} />);
export const Pencil = props => (<Icon {...props} icon={PencilIcon} />);
export const Search = props => (<Icon {...props} icon={SearchIcon} />);
export const Time = props => (<Icon {...props} icon={TimeIcon} />);
export const User = props => (<Icon {...props} icon={UserIcon} />);
export const OpenWindow = props => (<Icon {...props} icon={OpenWindowIcon} />);
export const LicenseCc = props => (<Icon {...props} icon={LicenseCcIcon} />);
export const LicenseBy = props => (<Icon {...props} icon={LicenseByIcon} />);
export const LicenseNc = props => (<Icon {...props} icon={LicenseNcIcon} />);
export const LicenseNd = props => (<Icon {...props} icon={LicenseNdIcon} />);
export const LicenseSa = props => (<Icon {...props} icon={LicenseSaIcon} />);
export const Camera = props => (<Icon {...props} icon={CameraIcon} />);
export const CrossCircle = props => (<Icon {...props} icon={CrossCircleIcon} />);
export const PlusCircle = props => (<Icon {...props} icon={PlusCircleIcon} />);

export default Icon;
