/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  getLicenseByAbbreviation,
  resourceTypes,
  getResourceTypeNamespace,
  isCreativeCommonsLicense,
  metaTypes,
} from 'ndla-licenses';
import BEMHelper from 'react-bem-helper';
import { uuid } from 'ndla-util';
import LicenseByline from '../LicenseByline';

const oClasses = new BEMHelper({
  name: 'media',
  prefix: 'o-',
});

const cClasses = new BEMHelper({
  name: 'medialist',
  prefix: 'c-',
});

export const MediaList = ({ children }) => <ul {...cClasses()}>{children}</ul>;

MediaList.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MediaListItem = ({ children }) => (
  <li {...oClasses(null, null, cClasses('item').className)}>{children}</li>
);

MediaListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MediaListItemImage = ({ children }) => (
  <div {...oClasses('img', null, cClasses('img').className)}>{children}</div>
);

MediaListItemImage.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MediaListCCLink = ({ children, url }) => (
  <a
    className="c-figure-license__link"
    target="_blank"
    rel="noopener noreferrer license"
    href={url}>
    {children}
  </a>
);

MediaListCCLink.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};

MediaListCCLink.defaultProps = {
  language: 'no',
};

export const MediaListItemBody = ({
  children,
  license: licenseAbbreviation,
  messages,
  title,
  resourceUrl,
  resourceType,
}) => {
  const license = getLicenseByAbbreviation(licenseAbbreviation);

  const containerProps = isCreativeCommonsLicense(license.rights)
    ? {
        ...oClasses('body', null, cClasses('body').className),
        'xmlns:cc': 'https://creativecommons.org/ns#',
        'xmlns:dct': 'http://purl.org/dc/terms/',
        about: resourceUrl,
      }
    : {
        ...oClasses('body', null, cClasses('body').className),
      };

  const metaResourceType = getResourceTypeNamespace(resourceType);

  return (
    <div {...containerProps}>
      {metaResourceType && (
        <span
          rel="dct:type"
          href={metaResourceType}
          style={{ display: 'none' }}
        />
      )}
      {title ? <h3 className="c-medialist__title">{title} </h3> : null}
      <LicenseByline
        withDescription
        messages={messages}
        licenseRights={license.rights}
      />
      <MediaListCCLink url={license.url}>{license.linkText}</MediaListCCLink>
      {children}
    </div>
  );
};

MediaListItemBody.propTypes = {
  children: PropTypes.node.isRequired,
  license: PropTypes.string.isRequired,
  resourceUrl: PropTypes.string,
  resourceType: PropTypes.oneOf(
    Object.keys(resourceTypes).map(key => resourceTypes[key]),
  ),
  messages: PropTypes.shape({
    modelPremission: PropTypes.string,
  }),
  title: PropTypes.string,
};

MediaListItemBody.defaultProps = {
  resourceUrl: '', // defaults to current page
};

export const MediaListItemActions = ({ children }) => (
  <div {...cClasses('actions')}>{children}</div>
);

MediaListItemActions.propTypes = {
  children: PropTypes.node.isRequired,
};

const isLink = text => text.startsWith('http') || text.startsWith('https');

export const HandleLink = ({ text, children }) => {
  if (isLink(text)) {
    return (
      <a href={text} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <span>{children}</span>;
};

HandleLink.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const attributionTypes = [
  metaTypes.author,
  metaTypes.copyrightHolder,
  metaTypes.contributor,
];

export const MediaListItemMeta = ({ items }) => {
  const attributionItems = items.filter(item =>
    attributionTypes.some(type => type === item.metaType),
  );
  const attributionMeta = attributionItems
    .map(item => `${item.label}: ${item.description}`)
    .join(', ');

  return (
    <ul
      {...cClasses('actions')}
      property="cc:attributionName"
      content={attributionMeta}>
      {items.map(item => (
        <li key={uuid()} className="c-medialist__meta-item">
          {item.label}:{' '}
          <HandleLink text={item.description}>{item.description}</HandleLink>
        </li>
      ))}
    </ul>
  );
};

const mediaListItemShape = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    metaType: PropTypes.oneOf(Object.keys(metaTypes).map(key => metaTypes[key]))
      .isRequired,
  }),
);

MediaListItemMeta.propTypes = {
  items: mediaListItemShape,
};

MediaListItemMeta.defaultProps = {
  items: [],
};
