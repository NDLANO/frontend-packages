/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@ndla/button';
import { css } from 'emotion';

const desktopStyling = css`
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  padding: 0.4rem 0.6rem;
  border-radius: 2px;
  background-color: white;
`;

class ZendeskButton extends React.Component {
  componentDidMount() {
    const { locale, zendeskHost } = this.props;
    if (window.zEmbed) {
      return;
    }
    (function(e, t) {
      let n,
        d,
        i,
        s,
        a = [],
        r = document.createElement('iframe');
      window.zEmbed = function() {
        a.push(arguments);
      };
      window.zE = window.zE || window.zEmbed;
      window.zE(function() {
        window.zE.setLocale(locale);
        window.zE.hide();
      });
      r.title = '';
      r.role = 'presentation';
      (r.frameElement || r).style.cssText = 'display: none';
      d = document.getElementsByTagName('script');
      d = d[d.length - 1];
      d.parentNode.insertBefore(r, d);
      i = r.contentWindow;
      s = i.document;
      s.open()._l = function() {
        let e = this.createElement('script');
        if (n) {
          this.domain = n;
        }
        e.id = 'js-iframe-async';
        e.src = 'https://assets.zendesk.com/embeddable_framework/main.js';
        this.t = +new Date();
        this.zendeskHost = zendeskHost;
        this.zEQueue = a;
        this.body.appendChild(e);
      };
      s.write('<body onload="document._l();">');
      s.close();
    })();
  }

  render() {
    const { children, locale, zendeskHost, ...rest } = this.props;
    return (
      <Button
        type="button"
        css={desktopStyling}
        onClick={() => (window && window.zE ? window.zE.activate() : undefined)}
        appearance="outline"
        {...rest}>
        {children}
      </Button>
    );
  }
}
ZendeskButton.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
  zendeskHost: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ZendeskButton;
