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
import { COPY } from 'ndla-licenses';

import LicenseByline from '../LicenseByline';

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
  messages,
  licenseRights,
  licenseUrl,
  resourceUrl,
  resourceType,
}) => {
  const metaResourceType = resourceType === 'video' ? 'http://purl.org/dc/dcmitype/MovingImage' : 'http://purl.org/dc/dcmitype/Image';
  const attributionMeta = authors.map(author => `${author.type}: ${author.name}`).join(',');

  const isCreativeCommons = licenseRights.every((license => license !== COPY));

  const expandedProps = isCreativeCommons ? {
    className: 'u-expanded',
    'xmlns:cc': 'https://creativecommons.org/ns#',
    'xmlns:dct': 'http://purl.org/dc/terms/',
    about: resourceUrl,
  } : {
    className: 'u-expanded',
  };

  const origionRel = isCreativeCommons ? 'noopener noreferrer cc:attributionURL' : 'noopener noreferrer';

  return (
    <div {...classes('license')} id="figmeta">
      <button {...classes('close')}>{messages.close}</button>
      {React.createElement('div', expandedProps, (
        <div {...classLicenses('details')}>
          {isCreativeCommons && (
            <div style={{display: 'none'}}>
              <span rel="dct:type" href={metaResourceType} />
              <span property="cc:attributionName" content={attributionMeta} />
            </div>
          )}

          <h3 {...classLicenses('title')}>{messages.rulesForUse}</h3>
          <LicenseByline withDescription licenseRights={licenseRights} />
          <a
            className="c-figure-license__link"
            target="_blank"
            rel="noopener noreferrer license"
            href={licenseUrl}>
            {messages.learnAboutLicenses}
          </a>
          <div {...classLicenses('cta-wrapper')}>
            <ul {...classes('list')} >
              {authors.map(author => (
                <li
                  key={uuid()}
                  className="c-figure-list__item">{`${author.type}: ${author.name}`}</li>
              ))}
              {origin && (
                <li>
                  {messages.source}:{' '}
                  {origin.startsWith('http') ? (
                    <a href={origin} target="_blank" rel={origionRel}>
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
      )
      )}
    </div>
  )
};

FigureDetails.propTypes = {
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
  }).isRequired,
  licenseUrl: PropTypes.string.isRequired,
  resourceUrl: PropTypes.string.isRequired,
  resourceType: PropTypes.oneOf(['video', 'image']).isRequired,
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
          <span className="article_meta">
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

export const Figure = ({ children, ...rest }) => (
  <figure {...classes()} {...rest}>
    {children}
  </figure>
);

Figure.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Figure;
