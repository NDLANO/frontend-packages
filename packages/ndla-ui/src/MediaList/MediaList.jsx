/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import getLicenseByAbbreviation, { COPY } from 'ndla-licenses';
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
  <li {...oClasses(null, null, cClasses('item').className)} itemScope itemType="http://schema.org/CreativeWork">
    {children}
  </li>
);

MediaListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MediaListItemImage = ({ children }) => (
  <div
    {...oClasses('img', null, cClasses('img').className)}
    itemProp="about"
    itemType="http://schema.org/Thing"
    itemScope
  >
    {children}
  </div>
);

MediaListItemImage.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MediaListCCLink = ({ children, url }) => (
  <a
    className="c-figure-license__link"
    target="_blank"
    rel="noopener noreferrer license"
    itemProp="license"
    itemType="http://schema.org/URL"
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

const resourceTypes = {
  video: 'video',
  audio: 'audio',
  text: 'text',
  h5p: 'h5p',
};

const getTypeUrl = (type) => {
  switch (type) {
    case resourceTypes.video:
      return 'http://purl.org/dc/dcmitype/MovingImage';
    case resourceTypes.audio:
      return 'http://purl.org/dc/dcmitype/Sound';
    case resourceTypes.text:
      return 'http://purl.org/dc/dcmitype/Text';
    case resourceTypes.h5p:
      return 'http://purl.org/dc/dcmitype/InteractiveResource';
    default:
      return null;
  }
};

export const MediaListItemBody = ({ children, license, title, resourceUrl, resourceType }) => {
  const licenseRights = getLicenseByAbbreviation(license).rights;

  const isCreativeCommons = licenseRights.every((r => r !== COPY));

  const containerProps = isCreativeCommons ? {
    ...oClasses('body', null, cClasses('body').className),
    'xmlns:cc': 'https://creativecommons.org/ns#',
    'xmlns:dct': 'http://purl.org/dc/terms/',
    about: resourceUrl,
  } : {
    ...oClasses('body', null, cClasses('body').className),
  };

  const metaResourceType = getTypeUrl(resourceType);

  return (
    <div {...containerProps}>
      {metaResourceType && (
        <span rel="dct:type" href={metaResourceType} style={{ display: 'none' }} />
      )}
      {title ? <h3 className="c-medialist__title">{title} </h3> : null}
      <LicenseByline
        withDescription
        licenseRights={licenseRights}
      />
      {children}
    </div>
  );
};

MediaListItemBody.propTypes = {
  children: PropTypes.node.isRequired,
  license: PropTypes.string.isRequired,
  resourceUrl: PropTypes.string,
  resourceType: PropTypes.oneOf(Object.keys(resourceTypes).map(key => resourceTypes[key])),
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

export const HandleLink = ({ text }) => {
  if (isLink(text)) {
    return (
      <a href={text} target="_blank" rel="noopener noreferrer" itemProp="name">
        {text}
      </a>
    );
  }
  return <span itemProp="name">{text}</span>;
};

HandleLink.propTypes = {
  text: PropTypes.string.isRequired,
};

const microDataTypes = {
  person: 'person',
  organisation: 'organisation',
};

const getMicroDataNamespaceByType = (type) => {
  if (type === microDataTypes.organisation) {
    return 'http://schema.org/Organization';
  }

  return 'http://schema.org/Person';
};

export const MediaListItemMeta = ({ authors, copyrightHolders, processers, items }) => {
  const attributionMeta = [
    ...authors,
    ...copyrightHolders,
    ...processers,
  ].map(item => `${item.label}: ${item.description}`).join(', ');

  return (
    <ul {...cClasses('actions')} property="cc:attributionName" content={attributionMeta} >
      {authors.map(item => {
        const type = item.type ? getMicroDataNamespaceByType(item.type) : getMicroDataNamespaceByType(microDataTypes.person);
        return (
          <li key={uuid()} className="c-medialist__meta-item" itemProp="author" itemScope itemType={type}>
            {item.label}: <HandleLink text={item.description} />
          </li>
        )
      })}
      {copyrightHolders.map(item => {
        const type = item.type ? getMicroDataNamespaceByType(item.type) : getMicroDataNamespaceByType(microDataTypes.organisation);

        return (
          <li key={uuid()} className="c-medialist__meta-item" itemProp="copyrightHolder" itemScope itemType={type}>
            {item.label}: <HandleLink text={item.description} />
          </li>
        );
      })}
      {processers.map(item => {
        const type = item.type ? getMicroDataNamespaceByType(item.type) : getMicroDataNamespaceByType(microDataTypes.person);
        return (
          <li key={uuid()} className="c-medialist__meta-item" itemProp="contributor" itemScope itemType={type}>
            {item.label}: <HandleLink text={item.description} />
          </li>
        );
      })}
      {items.map(item => (
        <li key={uuid()} className="c-medialist__meta-item">
          {item.label}: <HandleLink text={item.description} />
        </li>
      ))}
    </ul>
  );
};

const mediaListItemShape = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.oneOf([microDataTypes.person, microDataTypes.organisation]),
  }),
);


MediaListItemMeta.propTypes = {
  authors: mediaListItemShape,
  copyrightHolders: mediaListItemShape,
  processers: mediaListItemShape,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};

MediaListItemMeta.defaultProps = {
  authors: [],
  copyrightHolders: [],
  processers: [],
  items: [],
};
