/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { breakpoints, copyTextToClipboard } from 'ndla-util';
import { Copy } from 'ndla-icons/action';
import { Button, SubjectHeader } from 'ndla-ui';

class CopyButton extends Component {
  constructor(props) {
    super(props);
    this.state = { hasCopied: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  handleClick() {
    const { stringToCopy } = this.props;
    console.log(stringToCopy);
    const success = copyTextToClipboard(stringToCopy, this.buttonContainer);

    if (success) {
      this.setState({ hasCopied: true });

      this.timeout = setTimeout(() => {
        this.setState({ hasCopied: false });
      }, 10000);
    }
  }

  render() {
    const { hasCopied } = this.state;
    const { children, hasCopiedTitle, ...rest } = this.props;
    return (
      <span
        ref={r => {
          this.buttonContainer = r;
        }}>
        <Button disabled={hasCopied} onClick={this.handleClick} {...rest}>
          {hasCopied ? hasCopiedTitle : children}
        </Button>
      </span>
    );
  }
}

CopyButton.propTypes = {
  stringToCopy: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  hasCopiedTitle: PropTypes.string.isRequired,
};

const addLeadingSlash = str => {
  if (str.startsWith('/')) {
    return str;
  }
  return `/${str}`;
};

const BannerList = ({ banners }) =>
  banners.map(banner => (
    <div key={banner.desktop} style={{ marginTop: '26px' }}>
      <SubjectHeader
        heading={banner.name}
        images={[
          {
            url: banner.desktop,
            types: [breakpoints.desktop, breakpoints.tablet, breakpoints.wide],
          },
          { url: banner.mobile, types: [breakpoints.mobile] },
        ]}
      />
      <div style={{ margin: '13px' }}>
        <CopyButton
          style={{ margin: '13px' }}
          hasCopiedTitle="Kopiert!"
          stringToCopy={`${window.location.origin}${addLeadingSlash(
            banner.mobile,
          )}`}
          outline
          title="Kopier mobil banner til importskjema">
          <Copy /> Kopier mobil banner
        </CopyButton>
        <CopyButton
          style={{ margin: '13px' }}
          outline
          hasCopiedTitle="Kopiert!"
          stringToCopy={`${window.location.origin}${addLeadingSlash(
            banner.desktop,
          )}`}
          title="Kopier mobil banner til importskjema">
          <Copy /> Kopier desktop banner
        </CopyButton>
      </div>
    </div>
  ));

BannerList.propTypes = {
  banners: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default BannerList;
