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

import Dialog from '../Dialog';
import { ContributorShape, LicenseShape } from '../shapes';
import { classLicenses, FigureLicenseByline, FigureLicenseCta } from './FigureLicense';

export const FigureLicenseDialog = ({ children, messages, id, authors, origin, title, locale, license }) => {
  const headingLabelId = `heading-${id}`;
  return (
    <Dialog id={id} labelledby={headingLabelId} messages={messages}>
      <div {...classLicenses()}>
        <h3 id={headingLabelId} {...classLicenses('title')}>
          {messages.rulesForUse}
        </h3>
        <FigureLicenseByline license={license} messages={messages} locale={locale} />
        <FigureLicenseCta authors={authors} title={title} origin={origin} messages={messages}>
          {children}
        </FigureLicenseCta>
      </div>
    </Dialog>
  );
};

FigureLicenseDialog.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
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
  title: PropTypes.string,
  license: LicenseShape.isRequired,
  locale: PropTypes.string.isRequired,
};
