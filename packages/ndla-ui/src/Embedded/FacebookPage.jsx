import React from 'react';
import PropTypes from 'prop-types';
import { FacebookProvider, Page } from 'react-facebook';

const EmbeddedFacebookPage = props => (
  <div>
    <FacebookProvider appId="155745961798881">
      <Page
        href={props.href}
        height={props.height || 500}
        tabs="timeline"
        className="fb-embedded"
        adaptContainerWidth={true}
      />
    </FacebookProvider>
  </div>
);

EmbeddedFacebookPage.propTypes = {
  href: PropTypes.string.isRequired,
  height: PropTypes.number,
};

export default EmbeddedFacebookPage;
