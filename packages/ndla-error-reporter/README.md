# ndla-error-reporter

Error reporter for NDLA. Listens to window.onerror and sends client errors to Loggly.
  
## Installation

```sh
$ npm install ndla-error-reporter
```

## Usage

```js
import ErrorReporter from 'ndla-error-reporter');

const reduxStore = configureStore();

window.ErrorReporter = ErrorReporter.getInstance({ logglyApiKey: 'xxx', store: reduxStore, environment: 'test', componentName: 'ndla-frontend' });

ReactDOM.render(
  <Provider store={store} locale={locale}>
    ...
  </Provider>,
  document.getElementById('app-container')
);
```

## API(functions)

### `ErrorReporter.captureMessage()`

Sends a text/message to Loggly with log level info

```js
ErrorReporter.captureMessage('Testing');
```
