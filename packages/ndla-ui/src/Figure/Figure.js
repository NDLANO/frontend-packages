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
import BEMHelper from 'react-bem-helper';
import { Fullscreen } from 'ndla-icons/common';

import LicenseByline from '../LicenseByline';
import Button from '../button/Button';

const classes = new BEMHelper({
  name: 'figure',
  prefix: 'c-',
});

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
  fullscreenView,
  type,
  resizeIframe,
  noFigcaption,
  ...rest
}) => {
  let typeClass = null;
  let content = null;

  typeClass = `u-float-${type}`;
  content = (
    <Button stripped className="u-fullw">
      {children}
    </Button>
  );

  const modifiers = [];

  if (resizeIframe) {
    modifiers.push('resize');
  }

  if (type === 'full-column') {
    modifiers.push('full-column');
  }

  return (
    <figure
      id={id}
      {...classes('', fullscreenView ? 'fs' : modifiers, typeClass)}
      {...rest}>
      {noFigcaption ? (
        <div 
        {...classes('fullscreen-btn')}>
          <Fullscreen />
        </div>
      ) : null}
      {fullscreenView}
      {content}
      {captionView}
    </figure>
  );
};

Figure.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    'full',
    'full-column',
    'left',
    'small-left',
    'right',
    'small-right',
    'xsmall-right',
    'xsmall-left',
  ]),
  resizeIframe: PropTypes.bool,
  captionView: PropTypes.node,
  fullscreenView: PropTypes.node,
};

Figure.defaultProps = {
  type: 'full',
  resizeIframe: false,
  captionView: null,
  fullscreenView: null,
};

export default Figure;
