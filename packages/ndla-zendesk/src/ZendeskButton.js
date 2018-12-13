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

const commonStyling = css`
  border-radius: 2px;
  background-color: white;
`;

const desktopStyling = css`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  padding: 0.4rem 0.6rem;
  ${commonStyling}
`;

const mobileStyling = css`
  position: absolute;
  right: 20px;
  margin-top: -8px;
  ${commonStyling}
`;

class ZendeskButton extends React.Component {
  componentDidMount() {
    const { locale, widgetKey } = this.props;
    // Hack to check that zendesk scripts are loaded before we hide the widget.
    // This enables us to provide our own "widget activation" button.
    this.interval = window.setInterval(() => {
      if (window.zE) {
        window.zE('webWidget', 'hide');
        window.zE('webWidget', 'setLocale', locale);
        window.zE('webWidget', 'updateSettings', {
          webWidget: {
            zIndex: 9999, // Reset z-index
          },
        });
        window.clearInterval(this.interval);
      }
    }, 50);

    window.zESettings = {
      webWidget: {
        zIndex: 0, // Prevents flash of zendesk activation button
      },
    };

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
      <Button
        type="button"
        css={isMobile ? mobileStyling : desktopStyling}
        onClick={this.handleClick}
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
  widgetKey: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ZendeskButton;
