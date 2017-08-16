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

import AdditionalIcon from './internal-icons/Additional';
import ArrowIcon from './internal-icons/Arrow';
import AudioIcon from './internal-icons/Audio';
import BoldIcon from './internal-icons/Bold';
import BookIcon from './internal-icons/Book';
import CameraIcon from './internal-icons/Camera';
import CopyIcon from './internal-icons/Copy';
import CropIcon from './internal-icons/Crop';
import CrossIcon from './internal-icons/Cross';
import DocumentIcon from './internal-icons/Document';
import DownloadIcon from './internal-icons/Download';
import EmbedIcon from './internal-icons/Embed';
import GridIcon from './internal-icons/Grid';
import HomeIcon from './internal-icons/Home';
import InsertTemplateIcon from './internal-icons/InsertTemplate';
import ItalicIcon from './internal-icons/Italic';
import LicenseByIcon from './internal-icons/LicenseBy';
import LicenseCcIcon from './internal-icons/LicenseCc';
import LicenseNcIcon from './internal-icons/LicenseNc';
import LicenseNdIcon from './internal-icons/LicenseNd';
import LicenseSaIcon from './internal-icons/LicenseSa';
import LinkIcon from './internal-icons/Link';
import ListCircleIcon from './internal-icons/ListCircle';
import ListNumberedIcon from './internal-icons/ListNumbered';
import ListSquareIcon from './internal-icons/ListSquare';
import OpenWindowIcon from './internal-icons/OpenWindow';
import ParagraphCenterIcon from './internal-icons/ParagraphCenter';
import ParagraphJustifyIcon from './internal-icons/ParagraphJustify';
import ParagraphLeftIcon from './internal-icons/ParagraphLeft';
import ParagraphRightIcon from './internal-icons/ParagraphRight';
import PathIcon from './internal-icons/Path';
import PencilIcon from './internal-icons/Pencil';
import PilcrowIcon from './internal-icons/Pilcrow';
import PlusIcon from './internal-icons/Plus';
import SadIcon from './internal-icons/Sad';
import SearchIcon from './internal-icons/Search';
import SectionIcon from './internal-icons/Section';
import StrikethroughIcon from './internal-icons/Strikethrough';
import TableIcon from './internal-icons/Table';
import TimeIcon from './internal-icons/Time';
import UnderlineIcon from './internal-icons/Underline';
import UserIcon from './internal-icons/User';
import VideoIcon from './internal-icons/Video';

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

export const Additional = props => <Icon {...props} icon={AdditionalIcon} />;
export const Arrow = props => <Icon {...props} icon={ArrowIcon} />;
export const Audio = props => <Icon {...props} icon={AudioIcon} />;
export const Bold = props => <Icon {...props} icon={BoldIcon} />;
export const Book = props => <Icon {...props} icon={BookIcon} />;
export const Camera = props => <Icon {...props} icon={CameraIcon} />;
export const Copy = props => <Icon {...props} icon={CopyIcon} />;
export const Crop = props => <Icon {...props} icon={CropIcon} />;
export const Cross = props => <Icon {...props} icon={CrossIcon} />;
export const Document = props => <Icon {...props} icon={DocumentIcon} />;
export const Download = props => <Icon {...props} icon={DownloadIcon} />;
export const Embed = props => <Icon {...props} icon={EmbedIcon} />;
export const Grid = props => <Icon {...props} icon={GridIcon} />;
export const Home = props => <Icon {...props} icon={HomeIcon} />;
export const InsertTemplate = props =>
  <Icon {...props} icon={InsertTemplateIcon} />;
export const Italic = props => <Icon {...props} icon={ItalicIcon} />;
export const LicenseBy = props => <Icon {...props} icon={LicenseByIcon} />;
export const LicenseCc = props => <Icon {...props} icon={LicenseCcIcon} />;
export const LicenseNc = props => <Icon {...props} icon={LicenseNcIcon} />;
export const LicenseNd = props => <Icon {...props} icon={LicenseNdIcon} />;
export const LicenseSa = props => <Icon {...props} icon={LicenseSaIcon} />;
export const Link = props => <Icon {...props} icon={LinkIcon} />;
export const ListCircle = props => <Icon {...props} icon={ListCircleIcon} />;
export const ListNumbered = props =>
  <Icon {...props} icon={ListNumberedIcon} />;
export const ListSquare = props => <Icon {...props} icon={ListSquareIcon} />;
export const OpenWindow = props => <Icon {...props} icon={OpenWindowIcon} />;
export const ParagraphCenter = props =>
  <Icon {...props} icon={ParagraphCenterIcon} />;
export const ParagraphJustify = props =>
  <Icon {...props} icon={ParagraphJustifyIcon} />;
export const ParagraphLeft = props =>
  <Icon {...props} icon={ParagraphLeftIcon} />;
export const ParagraphRight = props =>
  <Icon {...props} icon={ParagraphRightIcon} />;
export const Path = props => <Icon {...props} icon={PathIcon} />;
export const Pencil = props => <Icon {...props} icon={PencilIcon} />;
export const Pilcrow = props => <Icon {...props} icon={PilcrowIcon} />;
export const Plus = props => <Icon {...props} icon={PlusIcon} />;
export const Sad = props => <Icon {...props} icon={SadIcon} />;
export const Search = props => <Icon {...props} icon={SearchIcon} />;
export const Section = props => <Icon {...props} icon={SectionIcon} />;
export const Strikethrough = props =>
  <Icon {...props} icon={StrikethroughIcon} />;
export const Table = props => <Icon {...props} icon={TableIcon} />;
export const Time = props => <Icon {...props} icon={TimeIcon} />;
export const Underline = props => <Icon {...props} icon={UnderlineIcon} />;
export const User = props => <Icon {...props} icon={UserIcon} />;
export const Video = props => <Icon {...props} icon={VideoIcon} />;

export default Icon;
