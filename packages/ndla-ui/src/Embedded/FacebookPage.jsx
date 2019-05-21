import React from 'react';
import PropTypes from 'prop-types';
import { FacebookProvider, Page } from 'react-facebook';

const EmbeddedFacebookPage = props => (
  <div>
    <FacebookProvider appId="155745961798881">
      <Page href={props.href} tabs="timeline" className="fb-embedded" />
    </FacebookProvider>
  </div>
);

EmbeddedFacebookPage.propTypes = {
  href: PropTypes.string.isRequired,
};

export default EmbeddedFacebookPage;
