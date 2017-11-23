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
    this.buttonWrapper = null;
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

        noScroll(false);
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
            jump(this.buttonWrapper, {
              duration: 100,
              offset: -60,
              callback: () => {
                this.focusTrapInstance.activate();
                noScroll(true);
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

    const backdropClasses = classnames({
      'o-backdrop': true,
      'c-licensebox__backdrop': true,
      'c-licensebox__backdrop--expanded': expanded,
    });

    return [
      <span
        ref={r => {
          this.buttonWrapper = r;
        }}>
        <Button
          key="openButton"
          stripped
          className="c-article__license-toggler"
          onClick={this.toogleLicenseBox}>
          {expanded ? closeTitle : openTitle}
        </Button>
      </span>,
      <div className={backdropClasses} key="backdrop" />,
      <div
        key="dialog"
        className={classnames('c-licensebox', {
          'c-licensebox--expanded': expanded,
        })}>
        <div
          ref={r => {
            this.dialog = r;
          }}
          role="dialog"
          aria-hidden={!expanded}
          className="c-licensebox__content"
          aria-labelledby="license-heading">
          <Button
            stripped
            className="c-article__license-toggler"
            onClick={this.toogleLicenseBox}>
            {expanded ? closeTitle : openTitle}
          </Button>
          {expanded ? children : null}
        </div>
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
