# ndla-tracker

NDLA's tracker for google tag manager.

## Installation

```shell
# Using npm:
$ npm install ndla-tracker --save

# Using yarn:
$ yarn add ndla-tracker
```

## Usage

To use the tracker you need to configure the tracker with correct google analytics id, google tag manager id and a listener for when the history changes:

```javascript
import { createBrowserHistory } from 'history';
import { configureTracker } from 'ndla-tracker';

const browserHistory = createBrowserHistory();

configureTracker({
  listen: browserHistory.listen,
  gaTrackingId: 'someGoogleAnalyticsId',
  googleTagManagerId: 'someGoogleTagMangerId',
});

ReactDOM.render(
  ...,
  document.getElementById('app'),
);
```

Tracking can be used in two different ways. Either with a default React component called `HelmetWithTracker`:

```javascript
import { HelmetWithTracker } from 'ndla-tracker';

const SomeTrackableComponent = ({ title }) => {
  return (
    <div>
      <HelmetWithTracker title={title} />
      <p>A paragraph (hopefully)</p>
    </div>
  );
};

export default SomeTrackableComponent;
```

or you can customize when the tracking should be done and add dimensions:

```javascript
import Helmet from 'react-helmet'
import { withTracker } from 'ndla-tracker';

class SomeTrackableComponent extends React.Component {
  static getDocumentTitle(currentProps) {
    return currentProps.title;
  }

  static willTrackPageView(trackPageView, currentProps) {
    const { condition } = currentProps;
    if (condition) {
      trackPageView(currentProps);
    }
  }

  /*
    Add this function if you want to add custom dimensions to google tag manager or google analytics.
  */
  static getDimensions(props) {
    return {
      ga: {
        dimensionGAOne: 'Some dimension in ga',
      },
      gtm: {
        dimensionGTMOne: 'Some dimension in gtm',
      },
    };
  }

  render() {
    const ({ title }) = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${this.constructor.getDocumentTitle(this.props)}`}</title>
        </Helmet>
        <p>A paragraph (hopefully)</p>
      </div>
    );
  }
}

export default withTracker(SomeTrackableComponent);
```

## PropTypes

###### PropTypes for HelmetWithTracker

| Props |  Type  | Required | Description                          |
| ----- | :----: | :------: | :----------------------------------- |
| title | String |    \*    | A title (meta) used for the tracker. |
