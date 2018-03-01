import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FacebookProvider, { Page } from 'react-facebook';

class EmbeddedFacebook extends Component {
  render() {
    const { props } = this;
    return (
      <div>
        <h1>Facebook</h1>
        <FacebookProvider appId="155745961798881">
          <Page
            href={props.href}
            tabs="timeline"
            hideCover={true}
            smallHeader={true}
            showFacepile={false} />
        </FacebookProvider>
      </div>
    );
  }
}

export default EmbeddedFacebook;
