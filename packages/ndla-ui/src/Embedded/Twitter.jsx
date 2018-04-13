import React from 'react';
import PropTypes from 'prop-types';
/* react-twitter-widgets inserts a script tag which loads https://platform.twitter.com/widgets.js
   when you import {Timeline} from 'react-twitter-widgets'.

   Import directly to circumvent the issue and let the app determine how to load https://platform.twitter.com/widgets.js
   */
import Timeline from 'react-twitter-widgets/dist/components/Timeline';

const EmbeddedTwitter = props => (
  <div>
    <Timeline
      dataSource={{
        sourceType: 'profile',
        screenName: props.screenName,
      }}
      options={{
        tweetLimit: props.tweetLimit,
        chrome: 'noheader nofooter noborders',
        borderColor: '#e8e3e3',
      }}
    />
  </div>
);

EmbeddedTwitter.propTypes = {
  screenName: PropTypes.string.isRequired,
  tweetLimit: PropTypes.number,
};

EmbeddedTwitter.defaultProps = {
  tweetLimit: 10,
};

export default EmbeddedTwitter;
