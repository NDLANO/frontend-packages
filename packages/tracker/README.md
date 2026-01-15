# @ndla/tracker

NDLA's tracker for Matomo

## Installation

```sh
# Using yarn:
yarn add @ndla/tracker

# Using npm:
npm install @ndla/tracker --save
```

## Usage

To use the tracker you need to configure the tracker with correct google analytics id, google tag manager id and a listener for when the history changes:

```javascript
import { createBrowserHistory } from 'history';
import { configureTracker } from '@ndla/tracker';

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
import { HelmetWithTracker } from "@ndla/tracker";

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
import { useTracker } from "@ndla/tracker";
const TestComponent = () => {
  const { trackPageView } = useTracker();

  useEffect(() => {
    if (!article || !condB) return;
    // We recommend creating a custom function for converting to matomo dimensions
    const dims = getAllDimensions({ article });
    trackPageView({ dimensions: dims, title: "Test title" });
  }, [condA, condB]);

  return <div>Test</div>;
};

export default TestComponent;
```
