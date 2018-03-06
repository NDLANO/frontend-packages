import React from 'react';
import PropTypes from 'prop-types';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';

const EmbeddedFacebook = props => (
  <div>
    <h1>Facebook</h1>
    <FacebookProvider appId="155745961798881">
      <EmbeddedPost href={props.href} />
    </FacebookProvider>
  </div>
);

EmbeddedFacebook.propTypes = {
  href: PropTypes.string.isRequired,
};

export default EmbeddedFacebook;
