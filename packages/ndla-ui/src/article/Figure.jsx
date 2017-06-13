
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
import { getLicenseByAbbreviation } from 'ndla-licenses';
import BEMHelper from 'react-bem-helper';
// import './fitvids';
import LicenseByline from '../license/LicenseByline';

const classes = new BEMHelper({
  name: 'figure',
  prefix: 'c-',
});
const classLicenses = new BEMHelper({
  name: 'figure-license',
  prefix: 'c-',
});

export const FigureDetails = ({ children, authors, licenseAbbreviation }) => (
  <div {...classes('license')} id="figmeta">
    <button {...classes('close')}>Lukk</button>
    <div className="u-expanded">
      <div {...classLicenses('details')}>
        <h3 {...classLicenses('title')}>Regler for bruk av bildet</h3>
        <LicenseByline license={getLicenseByAbbreviation(licenseAbbreviation)} />
        <div {...classLicenses('cta-wrapper')}>
          <h3 {...classLicenses('title')}>Slik skal du referere til dette bildet</h3>
          <ul {...classes('list')}>
            { authors.map(author => <li key={uuid()} className="c-figure-list__item">{ `${author.type}: ${author.name}`}</li>) }
          </ul>
          { children ? <div {...classLicenses('cta-block')}> {children} </div> : null }
        </div>
      </div>
    </div>
  </div>
);

FigureDetails.propTypes = {
  children: PropTypes.node,
  licenseAbbreviation: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

export const FigureCaption = ({ caption, authors, reuseLabel, licenseAbbreviation }) => (
  <figcaption {...classes('caption')}>
    {caption ? <div className="c-figure__info">{caption}</div> : null}
    <div {...classes('byline')}>
      <div {...classes('byline-licenselist')}>
        <LicenseByline license={getLicenseByAbbreviation(licenseAbbreviation)}>
          <span className="article_meta">{ authors.map(author => author.name).join(', ') }</span>
        </LicenseByline>
      </div>
      <button className="c-button c-button--outline c-figure__captionbtn">{reuseLabel}</button>
    </div>
  </figcaption>
);

FigureCaption.propTypes = {
  caption: PropTypes.string,
  reuseLabel: PropTypes.string.isRequired,
  licenseAbbreviation: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
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
