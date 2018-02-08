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
import createHistory from 'history/createBrowserHistory';
import { configureTracker } from 'ndla-tracker';

const browserHistory = createHistory();

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

Tracking can be used in two different ways. Either with your own helmet handling:
```javascript
import { HelmetWithTracker } from 'ndla-tracker';

const SomeTrackableComponent = ({title}) => {
  return (
    <div>
      <HelmetWithTracker title={title} />
      <p>A paragraph (hopefully)</p>
    </div>
  );
};

export default SomeTrackableComponent;
```

or:

```javascript
import Helmet from 'react-helmet'
import { withTracker } from 'ndla-tracker';

const SomeTrackableComponent = ({title}) => {
  return (
    <div>
      <Helmet title={title} />
      <p>A paragraph (hopefully)</p>
    </div>
  );
};

export default withTracker(SomeTrackableComponent);
```

## PropTypes
###### PropTypes for HelmetWithTracker
| Props                | Type    | Required | Description                         |
| -------------------  | :----:  | :------: | :-----------------------------------|
| title                | String  | *        | A title (meta) used for the tracker.|
