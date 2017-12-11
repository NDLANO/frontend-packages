/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B These component is used to render static markup serverside
// Any interactivty is added by scripts located in the ndla-article-scripts package

import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from 'ndla-util';
import BEMHelper from 'react-bem-helper';
import { createUniversalPortal } from './createUniversalPortal';

import LicenseByline from '../LicenseByline';
import Button from '../button/Button';

const classes = new BEMHelper({
  name: 'figure',
  prefix: 'c-',
});

const classLicenses = new BEMHelper({
  name: 'figure-license',
  prefix: 'c-',
});

export const FigureDetails = ({
  children,
  authors,
  origin,
  title,
  messages,
  licenseRights,
  id,
  licenseUrl,
}) => {
  const headingLabelId = `heading-${id}`;
  return createUniversalPortal(
    <div
      className="c-dialog"
      data-modal-id={id}
      role="dialog"
      aria-hidden="true"
      aria-labelledby={headingLabelId}>
      <div {...classes('license')}>
        <button {...classes('close')}>{messages.close}</button>
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
                  <li {...classLicenses('item')} key={uuid()}>
                    {`${messages.title}: ${title}`}
                  </li>
                )}
                {authors.map(author => (
                  <li key={uuid()} {...classLicenses('item')}>{`${
                    author.type
                  }: ${author.name}`}</li>
                ))}
                {origin && (
                  <li {...classLicenses('item')} key={uuid()}>
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
              <div {...classLicenses('cta-block')}>{children}</div>
            </div>
          </div>
      </div>
      <div key="backdrop" className="o-backdrop" />
    </div>,
    'body',
  );
};

FigureDetails.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  licenseRights: PropTypes.arrayOf(PropTypes.string).isRequired,
  origin: PropTypes.string,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
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

export const FigureCaption = ({
  caption,
  authors,
  reuseLabel,
  licenseRights,
}) => (
  <figcaption {...classes('caption')}>
    {caption ? <div {...classes('info')}>{caption}</div> : null}
    <footer {...classes('byline')}>
      <div {...classes('byline-licenselist')}>
        <LicenseByline licenseRights={licenseRights}>
          <span {...classes('byline-authors')}>
            {authors.map(author => author.name).join(', ')}
          </span>
          <button {...classes('captionbtn')}>{reuseLabel}</button>
        </LicenseByline>
      </div>
    </footer>
  </figcaption>
);

FigureCaption.propTypes = {
  caption: PropTypes.string,
  reuseLabel: PropTypes.string.isRequired,
  licenseRights: PropTypes.arrayOf(PropTypes.string).isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

export const Figure = ({
  id,
  children,
  captionView,
  type,
  resizeIframe,
  supportFloating,
  ...rest
}) => {
  let typeClass = null;
  let content = null;

  if (type !== 'full') {
    typeClass = `u-float-${type}`;
    content = (
      <Button stripped className="u-fullw">
        {children}
      </Button>
    );
  } else {
    content = children;
  }

  const modifiers = [];

  if (resizeIframe) {
    modifiers.push('resize');
  }

  if (supportFloating) {
    modifiers.push('support-floating');
  }

  return (
    <figure
      id={id}
      {...classes('', modifiers, typeClass)}
      data-toggleclass={typeClass}
      {...rest}>
      {content}
      {captionView}
    </figure>
  );
};

Figure.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['full', 'left', 'small-left', 'right', 'small-right']),
  resizeIframe: PropTypes.bool,
  captionView: PropTypes.node,
  // only to support aside (temp).
  supportFloating: PropTypes.bool,
};

Figure.defaultProps = {
  type: 'full',
  resizeIframe: false,
  captionView: null,
  supportFloating: false,
};

export default Figure;
