# @ndla/error-reporter

Error reporter for NDLA. Listens to window.onerror and sends client errors to Loggly

N.B. Number of messages is limited to 10 per session (reset by browser refresh).

## Installation

```sh
yarn add @ndla/error-reporter
```

```sh
npm install @ndla/error-reporter
```

A polyfill for [fetch](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) is needed for cross-browser support.

## Usage

```js
import { ErrorReporter } from '@ndla/error-reporter');

const reduxStore = configureStore();

window.errorReporter = ErrorReporter.getInstance({ logglyApiKey: 'xxx', store: reduxStore, environment: 'test', componentName: 'ndla-frontend' });

ReactDOM.render(
  <Provider store={store} locale={locale}>
    ...
  </Provider>,
  document.getElementById('app-container')
);
```

**ErrorReporter is a singleton:**

```js
// After initial instantiation
import { ErrorReporter } from "@ndla/error-reporter";

ErrorReporter.getInstance().captureMessage("Testing");
```

## API(functions)

### `ErrorReporter.captureError(error, [additionalInfo])`

Processes error and sends error info to Loggly with optional additional info.

```js
try {
  // some "dangerous" code
} catch (e) {
  errorReporter.captureError(e, { url: "http://example.com" });
}
```

**Parameters:**

| Name             | Type     | Description                                                                                                                                        |
| ---------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `error`          | `Object` | **Required.** [Error object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) to process and send to Loggy. |
| `additionalInfo` | `Object` | **Optional.** Additional information you want to send to Loggly.                                                                                   |

### `ErrorReporter.captureMessage(msg)`

Sends a text/message to Loggly with log level info

```js
errorReporter.captureMessage("Testing");
```

**Parameters:**

| Name  | Type     | Description                                           |
| ----- | -------- | ----------------------------------------------------- |
| `msg` | `String` | **Required.** The message you want to send to Loggly. |

### `ErrorReporter.refresh()`

Reset remaining messages to 10.

```js
errorReporter.refresh();
```
