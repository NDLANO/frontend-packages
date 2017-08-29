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
import { BY, NC, ND } from 'ndla-licenses';
import BEMHelper from 'react-bem-helper';
import ClickableLicenseByline from '../license/ClickableLicenseByline';

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
  messages,
}) =>
  <div {...classes('license')} id="figmeta">
    <button {...classes('close')}>
      {messages.close}
    </button>
    <div className="u-expanded">
      <div {...classLicenses('details')}>
        <h3 {...classLicenses('title')}>
          {messages.rulesForUse}
        </h3>
        <ClickableLicenseByline
          license={[BY, NC, ND]}
        />
        <a className="c-figure-license__link" href="https://creativecommons.org/licenses/by-nc/4.0/no/legalcode">Lær mer om åpne lisenser</a>
        <div {...classLicenses('cta-wrapper')}>
          <ul {...classes('list')}>
            {authors.map(author =>
              <li
                key={uuid()}
                className="c-figure-list__item">{`${author.type}: ${author.name}`}</li>,
            )}
          </ul>
          {children
            ? <div {...classLicenses('cta-block')}>
                {' '}{children}{' '}
              </div>
            : null}
        </div>
      </div>
    </div>
  </div>;

FigureDetails.propTypes = {
  children: PropTypes.node,
  licenseAbbreviation: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  messages: PropTypes.shape({
    close: PropTypes.string.isRequired,
    rulesForUse: PropTypes.string.isRequired,
    howToReference: PropTypes.string.isRequired,
  }).isRequired,
};

export const FigureCaption = ({
  caption,
  authors,
  reuseLabel,
  licenseAbbreviation,
}) =>
  <figcaption {...classes('caption')}>
    {caption
      ? <div className="c-figure__info">
          {caption}
        </div>
      : null}
    <footer {...classes('byline')}>
      <div {...classes('byline-licenselist')}>
        <ClickableLicenseByline noText license={[BY, NC, ND]}>
          <span className="article_meta">
            {authors.map(author => author.name).join(', ')}
          </span>
        </ClickableLicenseByline>
        <div dangerouslySetInnerHTML={{__html:`
        <div class="c-figure__licensetag" xmlnsCc="http://creativecommons.org/ns" xmlnsDc="http://purl.org/dc/elements/1.1/">
          <a href="http://ndla.no/nb/node/115785" rel="dc:source">
            Produksjonsplanlegging
          </a> av
          <a href="http://ndla.no/nb/node/12390" rel="dc:creator">
            ${authors.map(author => author.name).join(', ')}
          </a>.
          Tilgjengelig under <a rel="license" href="https://creativecommons.org/licenses/by-sa/2.0/deed.no">${licenseAbbreviation} 2.0 Lisens</a>.
        </div>`}} />
      </div>
      <button className="c-figure__captionbtn">
        {reuseLabel}
      </button>
    </footer>
  </figcaption>;

FigureCaption.propTypes = {
  caption: PropTypes.string,
  reuseLabel: PropTypes.string.isRequired,
  licenseAbbreviation: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

export const Figure = ({ children, ...rest }) =>
  <figure {...classes()} {...rest}>
    {children}
  </figure>;

Figure.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Figure;
