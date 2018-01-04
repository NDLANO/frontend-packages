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

export const FigureFullscreenDialog = ({
  children,
  messages,
  id,
  authors,
  origin,
  title,
  actionButtons,
  licenseUrl,
  licenseRights,
  caption,
  reuseLabel,
}) => {
  const headingLabelId = `heading-${id}`;
  return (
    <Dialog
      id={id}
      labelledby={headingLabelId}
      messages={messages}
      modifier="fullscreen">
      <div {...classLicenses('', 'fullscreen')}>
        <div {...classLicenses('content')}>
          {children}
          <h3 id={headingLabelId} {...classLicenses('image-title')}>
            {title}
          </h3>
          {caption}
          <p>
            <button className="c-figure__captionbtn">
              <span>{reuseLabel}</span>
            </button>
          </p>
          <div {...classLicenses('hidden-content')}>
            <div>
              <LicenseByline
                withDescription
                messages={messages}
                licenseRights={licenseRights}
              />
              <a
                {...classLicenses('link')}
                target="_blank"
                rel="noopener noreferrer"
                href={licenseUrl}>
                {messages.learnAboutLicenses}
              </a>
            </div>

            <div {...classLicenses('cta-wrapper')}>
              <ul {...classLicenses('list')}>
                {title && (
                  <li {...classLicenses('item')}>
                    {`${messages.title}: ${title}`}
                  </li>
                )}
                {authors.map(author => (
                  <li key={uuid()} {...classLicenses('item')}>{`${
                    author.type
                  }: ${author.name}`}</li>
                ))}
                {origin && (
                  <li {...classLicenses('item')}>
                    {messages.source}:{' '}
                    {origin.startsWith('http') ? (
                      <a
                        href={origin}
                        target="_blank"
                        rel="noopener noreferrer">
                        {origin}
                      </a>
                    ) : (
                      origin
                    )}
                  </li>
                )}
              </ul>
              <div {...classLicenses('cta-block')}>{actionButtons}</div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

FigureFullscreenDialog.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  actionButtons: PropTypes.node.isRequired,
  licenseRights: PropTypes.arrayOf(PropTypes.string).isRequired,
  origin: PropTypes.string,
  authors: PropTypes.arrayOf(ContributorShape),
  messages: PropTypes.shape({
    modelPremission: PropTypes.string,
    close: PropTypes.string.isRequired,
    rulesForUse: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    learnAboutLicenses: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  licenseUrl: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  reuseLabel: PropTypes.string,
};
