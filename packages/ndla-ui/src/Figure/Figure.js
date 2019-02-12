/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B These component is used to render static markup serverside
// Any interactivty is added by scripts located in the ndla-article-scripts package

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { injectT } from '@ndla/i18n';
import {
  ZoomOutMap,
  ArrowCollapse,
  Link as LinkIcon,
} from '@ndla/icons/common';
import LicenseByline from '../LicenseByline';
import SafeLink from '../common/SafeLink';

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
        <LicenseByline licenseRights={licenseRights} locale={locale}>
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

const Figure = ({ children, type, resizeIframe, noFigcaption, t, ...rest }) => {
  const typeClass = `u-float-${type}`;
  const ariaLabel = t('license.images.itemImage.zoomOutImageButtonLabel');
  const ariaLabelExpanded = t('license.images.itemImage.zoomImageButtonLabel');

  return (
    <figure {...classes('', 'resize', typeClass)} {...rest}>
      {noFigcaption ? (
        <button
          {...classes('fullscreen-btn')}
          type="button"
          aria-label={ariaLabel}
          onClick={e => {
            const btn = e.currentTarget;
            const parentFigure = btn.closest('figure');
            if (btn.dataset.expanded) {
              btn.setAttribute('aria-label', ariaLabel);
              btn.classList.remove('c-figure__fullscreen-btn--expanded');
              parentFigure.classList.add(typeClass);
              delete btn.dataset.expanded;
            } else {
              btn.setAttribute('aria-label', ariaLabelExpanded);
              parentFigure.classList.remove(typeClass);
              btn.classList.add('c-figure__fullscreen-btn--expanded');
              btn.dataset.expanded = true;
            }
          }}>
          <ArrowCollapse className="expanded-icon" />
          <ZoomOutMap className="contracted-icon" />
        </button>
      ) : null}
      {children}
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
  noFigcaption: PropTypes.bool,
};

Figure.defaultProps = {
  type: 'full',
  resizeIframe: false,
  noFigcaption: false,
};

export default injectT(Figure);
