/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';

export const FooterText = ({ children }) => (
  <p className="footer_text">
    { children }
  </p>
);

FooterText.propTypes = {
  children: PropTypes.node.isRequired,
};


export const FooterRuler = () => <div className="footer_ruler" />;

export const FooterEditor = ({ title, name }) => (
  <span className="footer_editor">{ title }<strong>{ name }</strong></span>
);

FooterEditor.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export const Footer = ({ children }) =>
  <footer className="footer">
    { children }
  </footer>;


Footer.propTypes = {
  children: PropTypes.node.isRequired,
};
