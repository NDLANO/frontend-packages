/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import getLicenseByAbbreviation from 'ndla-licenses';
import BEMHelper from 'react-bem-helper';
import { uuid } from 'ndla-util';
import LicenseByline from '../license/LicenseByline';

const oClasses = new BEMHelper({
  name: 'media',
  prefix: 'o-',
});

const cClasses = new BEMHelper({
  name: 'medialist',
  prefix: 'c-',
});

export const MediaList = ({ children }) =>
  <ul {...cClasses()}>
    {children}
  </ul>;

MediaList.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MediaListItem = ({ children }) =>
  <li {...oClasses(null, null, cClasses('item').className)}>
    {children}
  </li>;

MediaListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MediaListItemImage = ({ children }) =>
  <div {...oClasses('img', null, cClasses('img').className)}>
    {children}
  </div>;

MediaListItemImage.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MediaListCCLink = ({ children }) =>
  <a
    className="c-figure-license__link"
    href="https://creativecommons.org/licenses/by-nc-nd/3.0/deed.no">
    {children}
  </a>;

MediaListCCLink.propTypes = {
  children: PropTypes.node.isRequired,
};

MediaListCCLink.defaultProps = {
  language: 'no',
};

export const MediaListItemBody = ({ children, license, title }) =>
  <div {...oClasses('body', null, cClasses('body').className)}>
    {title
      ? <h3 className="c-medialist__title">
          {title}{' '}
        </h3>
      : null}
    <LicenseByline
      withDescription
      licenseRights={getLicenseByAbbreviation(license).rights}
    />
    {children}
  </div>;

MediaListItemBody.propTypes = {
  children: PropTypes.node.isRequired,
  license: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export const MediaListItemActions = ({ children }) =>
  <div {...cClasses('actions')}>
    {children}
  </div>;

MediaListItemActions.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MediaListItemMeta = ({ items }) =>
  <ul {...cClasses('actions')}>
    {items.map(item =>
      <li
        key={uuid()}
        className="c-medialist__meta-item"
        dangerouslySetInnerHTML={{ __html: item }}
      />,
    )}
  </ul>;

MediaListItemMeta.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired),
};
