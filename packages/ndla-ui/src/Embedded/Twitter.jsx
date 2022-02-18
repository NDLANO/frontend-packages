import { Component, createElement } from 'react';
import PropTypes from 'prop-types';

class EmbeddedTwitter extends Component {
  static removeChildren(node) {
    if (node) {
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
    }
  }

  constructor(props) {
    super(props);
    this.loadWidget = this.loadWidget.bind(this);
  }

  componentDidMount() {
    if (window.twttr) {
      this.loadWidget();
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.screenName !== nextProps.screenName;
  }

  componentDidUpdate() {
    if (window.twttr) {
      this.loadWidget();
    }
  }

  componentWillUnmount() {
    EmbeddedTwitter.removeChildren(this.widgetWrapper);
  }

  loadWidget() {
    window.twttr.ready((tw) => {
      // Delete existing
      EmbeddedTwitter.removeChildren(this.widgetWrapper);

      const { screenName, tweetLimit } = this.props;
      // Create widget
      tw.widgets.createTimeline({ sourceType: 'profile', screenName }, this.widgetWrapper, {
        tweetLimit,
        chrome: 'noheader nofooter noborders',
        borderColor: '#e8e3e3',
      });
    });
  }

  render() {
    return createElement('div', {
      ref: (c) => {
        this.widgetWrapper = c;
      },
    });
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
