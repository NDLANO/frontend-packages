/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import createFocusTrap from 'focus-trap';
import { noScroll } from 'ndla-util';
import jump from 'jump.js';

import Button from '../button/Button';

class ToggleLicenseBox extends Component {
  constructor() {
    super();
    this.toogleLicenseBox = this.toogleLicenseBox.bind(this);
    this.state = {
      expanded: false,
    };

    this.dialog = null;
    this.focusTrapInstance = null;
  }

  componentDidMount() {
    this.focusTrapInstance = createFocusTrap(this.dialog, {
      onDeactivate: () => {
        if (this.state.expanded) {
          this.setState({
            expanded: false,
          });
        }

        if (this.isNarrowScreen) {
          noScroll(false);
        }
      },
      clickOutsideDeactivates: true,
    });

    const computedStyles = window.getComputedStyle(this.dialog);
    this.isNarrowScreen =
      computedStyles.getPropertyValue('position') === 'fixed';
  }

  toogleLicenseBox() {
    this.setState(
      {
        expanded: !this.state.expanded,
      },
      () => {
        if (this.state.expanded) {
          if (!this.isNarrowScreen) {
            jump(this.dialog, {
              duration: 100,
              offset: -100,
              callback: () => {
                this.focusTrapInstance.activate();
              },
            });
          } else {
            this.focusTrapInstance.activate();
            noScroll(true);
          }
        } else {
          this.focusTrapInstance.deactivate();
        }
      },
    );
  }

  render() {
    const { openTitle, closeTitle, children } = this.props;
    const { expanded } = this.state;

    return [
      <Button
        key="open"
        stripped
        className="c-article__license-toggler"
        onClick={this.toogleLicenseBox}>
        {expanded ? closeTitle : openTitle}
      </Button>,
      <div
        key="dialog"
        ref={r => {
          this.dialog = r;
        }}
        role="dialog"
        aria-hidden={!expanded}
        aria-labelledby="license-heading"
        className={classnames('c-licensebox', {
          'c-licensebox--expanded': expanded,
        })}>
        <Button
          key="closeButton"
          stripped
          className="c-article__license-toggler"
          onClick={this.toogleLicenseBox}>
          {expanded ? closeTitle : openTitle}
        </Button>
        {expanded ? children : null}
      </div>,
    ];
  }
}

ToggleLicenseBox.propTypes = {
  openTitle: PropTypes.string.isRequired,
  closeTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ToggleLicenseBox;
