/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css, Global } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@ndla/button';
import { mq, breakpoints } from '@ndla/core';

const styling = css`
  border-radius: 2px;
  background-color: white;
  float: right;
  ${mq.range({ from: breakpoints.desktop })} {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    padding: 0.4rem 0.6rem;
  }
`;

class ZendeskButton extends React.Component {
  componentDidMount() {
    // Check if Zendesk is already loaded..
    if (window.zE) {
      return;
    }

    const { locale, widgetKey } = this.props;
    // Hack to check that zendesk scripts are loaded before we set the locale.
    this.interval = window.setInterval(() => {
      if (window.zE) {
        window.zE('webWidget', 'setLocale', locale);
        window.clearInterval(this.interval);
      }
    }, 50);

    // Asynchronously load zendesk scripts for better performance
    const script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${widgetKey}`;
    script.async = true;
    document.body.appendChild(script);
  }

  handleClick = () => {
    if (window && window.zE) {
      window.zE.activate();
    }
  };

  render() {
    const { children, locale, isMobile, ...rest } = this.props;

    return (
      <>
        <Global
          styles={css`
            /* Hide default launcher so that we can provide our own. */
            .zEWidget-launcher {
              display: none;
            }
          `}
        />
        <Button
          type="button"
          css={styling}
          onClick={this.handleClick}
          appearance="outline"
          {...rest}>
          {children}
        </Button>
      </>
    );
  }
}
ZendeskButton.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
  widgetKey: PropTypes.string.isRequired,
};

export default ZendeskButton;
