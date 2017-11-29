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

import Button from '../button/Button';

class ToggleLicenseBox extends Component {
  constructor(props) {
    super(props);
    this.toogleLicenseBox = this.toogleLicenseBox.bind(this);
    this.state = {
      expanded: props.expanded,
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

        noScroll(false);
      },
      clickOutsideDeactivates: true,
    });
  }

  toogleLicenseBox() {
    this.setState(
      {
        expanded: !this.state.expanded,
      },
      () => {
        if (this.state.expanded) {
          this.focusTrapInstance.activate();
          noScroll(true);
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
      <Button
        key="openButton"
        stripped
        className="c-article__license-toggler"
        onClick={this.toogleLicenseBox}>
        {expanded ? closeTitle : openTitle}
      </Button>,
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
  // only used in design manual for preview
  expanded: PropTypes.bool,
};

ToggleLicenseBox.defaultProps = {
  expanded: false,
};

export default ToggleLicenseBox;
