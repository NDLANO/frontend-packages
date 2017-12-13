/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B This component is used to render static markup serverside
// Any interactivty is added by scripts located in the ndla-article-scripts package

import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from 'ndla-util';
import BEMHelper from 'react-bem-helper';

import Dialog from '../Dialog';
import { ContributorShape } from '../shapes';
import LicenseByline from '../LicenseByline';

const classLicenses = new BEMHelper({
  name: 'figure-license',
  prefix: 'c-',
});

export const FigureLicenseDialog = ({
  children,
  messages,
  id,
  authors,
  origin,
  title,
  licenseUrl,
  licenseRights,
}) => {
  const headingLabelId = `heading-${id}`;
  return (
    <Dialog id={id} labelledby={headingLabelId} messages={messages}>
      <div {...classLicenses()}>
        <h3 id={headingLabelId} {...classLicenses('title')}>
          {messages.rulesForUse}
        </h3>
        <LicenseByline withDescription licenseRights={licenseRights} />
        <a
          {...classLicenses('link')}
          target="_blank"
          rel="noopener noreferrer"
          href={licenseUrl}>
          {messages.learnAboutLicenses}
        </a>
        <div {...classLicenses('cta-wrapper')}>
          <ul {...classLicenses('list')}>
            {title && (
              <li {...classLicenses('item')}>
                {`${messages.title}: ${title}`}
              </li>
            )}
            {authors.map(author => (
              <li key={uuid()} {...classLicenses('item')}>{`${author.type}: ${
                author.name
              }`}</li>
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
      </div>
    </Dialog>
  );
};

FigureLicenseDialog.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  licenseRights: PropTypes.arrayOf(PropTypes.string).isRequired,
  origin: PropTypes.string,
  authors: PropTypes.arrayOf(ContributorShape),
  messages: PropTypes.shape({
    close: PropTypes.string.isRequired,
    rulesForUse: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    learnAboutLicenses: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string,
  licenseUrl: PropTypes.string.isRequired,
};
