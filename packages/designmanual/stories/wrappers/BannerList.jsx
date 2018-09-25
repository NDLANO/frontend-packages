/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { breakpoints, copyTextToClipboard } from 'ndla-util';
import { Copy } from 'ndla-icons/action';
import {
  PageContainer,
  LayoutItem,
  OneColumn,
  SubjectHeader,
  CopyButton,
} from 'ndla-ui';

const addLeadingSlash = str => {
  if (str.startsWith('/')) {
    return str;
  }
  return `/${str}`;
};

class BannerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerSearch: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      bannerSearch: e.target.value,
    });
  }

  render() {
    const { banners } = this.props;
    const bannerSearchLowerCase = this.state.bannerSearch.toLowerCase();
    return (
      <PageContainer>
        <OneColumn>
          <LayoutItem layout="full">
            <article className="c-article c-article--clean">
              <input
                type="search"
                id="search"
                name="search"
                placeholder="Søk etter fag"
                value={this.state.bannerSearch}
                onChange={this.handleInputChange}
                style={{ width: '100%' }}
              />
            </article>
          </LayoutItem>
        </OneColumn>
        {banners
          .filter(
            banner =>
              bannerSearchLowerCase === '' ||
              banner.name.toLowerCase().indexOf(bannerSearchLowerCase) !== -1,
          )
          .map(banner => (
            <div key={banner.desktop} style={{ marginTop: '26px' }}>
              <SubjectHeader
                heading={banner.name}
                images={[
                  {
                    url: banner.desktop,
                    types: [
                      breakpoints.desktop,
                      breakpoints.tablet,
                      breakpoints.wide,
                    ],
                  },
                  { url: banner.mobile, types: [breakpoints.mobile] },
                ]}
              />
              <div style={{ margin: '13px' }}>
                <CopyButton
                  style={{ margin: '13px' }}
                  copyNode={
                    <Fragment>
                      <Copy /> Kopiert!
                    </Fragment>
                  }
                  onClick={() => {
                    copyTextToClipboard(
                      `${window.location.origin}${addLeadingSlash(
                        banner.mobile,
                      )}`,
                      this.buttonContainer,
                    );
                  }}
                  outline
                  title="Kopier mobil banner til importskjema">
                  <Fragment>
                    <Copy /> Kopier mobil banner
                  </Fragment>
                </CopyButton>
                <CopyButton
                  style={{ margin: '13px' }}
                  outline
                  copyNode={
                    <Fragment>
                      <Copy /> Kopiert!
                    </Fragment>
                  }
                  onClick={() => {
                    copyTextToClipboard(
                      `${window.location.origin}${addLeadingSlash(
                        banner.desktop,
                      )}`,
                      this.buttonContainer,
                    );
                  }}
                  title="Kopier mobil banner til importskjema">
                  <Fragment>
                    <Copy /> Kopier desktop banner
                  </Fragment>
                </CopyButton>
              </div>
            </div>
          ))}
      </PageContainer>
    );
  }
}

BannerList.propTypes = {
  banners: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default BannerList;
