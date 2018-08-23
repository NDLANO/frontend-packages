/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ClickToggle } from 'ndla-ui';
import Tabs from 'ndla-tabs';

export const FooterText = ({ children }) => (
  <p className="footer_text">{children}</p>
);

FooterText.propTypes = {
  children: PropTypes.node.isRequired,
};

export const FooterRuler = () => <div className="footer_ruler" />;

export const FooterEditor = ({ title, name }) => (
  <span className="footer_editor">
    {title} <strong>{name}</strong>
  </span>
);

const FooterPrivacy = () => (
  <ClickToggle
    id="privacyId"
    renderAsLink
    containerClass="span"
    title="Personvernserklæring">
    <Fragment>
      <h1 id="privacyId">Retningslinjer for personvern og bruk av informasjonskapsler</h1>
      <Tabs
        tabs={[
          { title: 'Bilder1', content: <div>Lorem</div> },
          { title: 'Bilder2', content: <div>Lorem</div> },
          { title: 'Bilder3', content: <div>Lorem</div> },
        ]}
      />
    </Fragment>
  </ClickToggle>
);

FooterEditor.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const Footer = ({ children }) => <footer className="footer">{children}<FooterPrivacy /></footer>;

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.oneOf(['nb', 'nn', 'en']),
};

Footer.defaultProps = {
  lang: 'nb',
};

// expose the children to top level exports for ease of use
Footer.Text = FooterText;
Footer.Ruler = FooterRuler;
Footer.Editor = FooterEditor;

export default Footer;
