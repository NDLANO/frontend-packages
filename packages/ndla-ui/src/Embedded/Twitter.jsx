import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Timeline } from 'react-twitter-widgets';

class EmbeddedTwitter extends Component {
  render() {
    const { props } = this
    return (
      <div>
        <h1>Twitter</h1>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: props.screenName,
          }}
          options={{
            tweetLimit: props.tweetLimit,
            chrome: 'noheader nofooter noborders',
            borderColor: '#e8e3e3',
          }} />
      </div>
    );
  }
}

EmbeddedTwitter.propTypes = {
  screenName: PropTypes.string.isRequired,
  tweetLimit: PropTypes.number,
};

EmbeddedTwitter.defaultProps = {
  tweetLimit: 10,
};

export default EmbeddedTwitter;
