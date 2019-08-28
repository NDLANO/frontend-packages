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
import { isFunction } from '@ndla/util';
import { injectT } from '@ndla/i18n';
import { Link as LinkIcon } from '@ndla/icons/common';
import { LicenseByline } from '@ndla/licenses';
import SafeLink from '@ndla/safelink';

const classes = new BEMHelper({
  name: 'figure',
  prefix: 'c-',
});

export const FigureCaption = ({
  figureId,
  id,
  children,
  caption,
  authors,
  reuseLabel,
  licenseRights,
  locale,
  link,
  hideFigcaption,
}) => (
  <figcaption {...classes('caption', hideFigcaption && 'hidden-caption')}>
    {caption ? <div {...classes('info')}>{caption}</div> : null}
    <footer {...classes('byline')}>
      <div {...classes('byline-licenselist')}>
        <LicenseByline
          licenseRights={licenseRights}
          locale={locale}
          marginRight>
          <span {...classes('byline-authors')}>
            {authors.map(author => author.name).join(', ')}
          </span>
          <button
            type="button"
            data-dialog-trigger-id={id}
            data-dialog-source-id={figureId}
            {...classes('captionbtn')}>
            <span>{reuseLabel}</span>
          </button>

          {children}
        </LicenseByline>
        {link && (
          <div {...classes('link-wrapper')}>
            <SafeLink
              to={link.url}
              {...classes('link')}
              target={link.external ? '_blank' : null}
              rel={link.external ? 'noopener noreferrer' : null}>
              <span {...classes('link-text')}>{link.text}</span>
              <LinkIcon />
            </SafeLink>
            {link.description && (
              <p {...classes('link-description')}>{link.description}</p>
            )}
          </div>
        )}
      </div>
    </footer>
  </figcaption>
);

FigureCaption.propTypes = {
  figureId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  caption: PropTypes.string,
  reuseLabel: PropTypes.string.isRequired,
  licenseRights: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string,
    external: PropTypes.bool,
  }),
  locale: PropTypes.string,
  hideFigcaption: PropTypes.bool,
};

FigureCaption.defaultProps = {
  link: null,
};

const Figure = ({ children, type, resizeIframe, t, ...rest }) => {
  const typeClass =
    type === 'full-column' ? 'c-figure--full-column' : `u-float-${type}`;
  return (
    <figure
      data-sizetype={type}
      {...classes('', { resize: resizeIframe }, typeClass)}
      {...rest}>
      {isFunction(children) ? children({ typeClass }) : children}
    </figure>
  );
};

Figure.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.func.isRequired,
  ]).isRequired,
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
  noFigcaption: PropTypes.bool,
};

Figure.defaultProps = {
  type: 'full',
};

export default injectT(Figure);
