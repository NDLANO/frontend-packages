/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B This component is used to render static markup serverside
// Any interactivty is added by scripts located in the ndla-article-scripts package

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { uuid } from '@ndla/util';
import { LicenseDescription } from '@ndla/licenses';
import { ContributorShape, LicenseShape } from '../shapes';

export const classLicenses = new BEMHelper({
  name: 'figure-license',
  prefix: 'c-',
});

export const FigureLicenseCta = ({ children, messages, authors, origin, title }) => (
  <div {...classLicenses('cta-wrapper')}>
    <ul {...classLicenses('list')}>
      {title && <li {...classLicenses('item')}>{`${messages.title}: ${title}`}</li>}
      {authors.map(author => (
        <li key={uuid()} {...classLicenses('item')}>{`${author.type}: ${author.name}`}</li>
      ))}
      {origin && (
        <li {...classLicenses('item')}>
          {messages.source}:{' '}
          {origin.startsWith('http') ? (
            <a href={origin} target="_blank" rel="noopener noreferrer">
              {origin}
            </a>
          ) : (
            origin
          )}
        </li>
      )}
    </ul>
    <div {...classLicenses('cta-block')}>{children}</div>
  </div>
);

FigureLicenseCta.propTypes = {
  children: PropTypes.node,
  origin: PropTypes.string,
  authors: PropTypes.arrayOf(ContributorShape),
  messages: PropTypes.shape({
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string,
};

export const FigureLicenseByline = ({ messages, license, locale }) => [
  <LicenseDescription
    key="byline"
    highlightCC
    locale={locale}
    messages={messages}
    licenseRights={license.rights}
  />,
  <a
    key="link"
    {...classLicenses('link')}
    target="_blank"
    rel="noopener noreferrer"
    href={license.url}>
    {license.linkText}
  </a>,
];

FigureLicenseByline.propTypes = {
  messages: PropTypes.shape({
    modelPremission: PropTypes.string,
    learnAboutLicenses: PropTypes.string.isRequired,
  }).isRequired,
  license: LicenseShape.isRequired,
  locale: PropTypes.string.isRequired,
};
