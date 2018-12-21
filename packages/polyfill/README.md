# Polyfill

This package includes polyfills for various browsers, but is mainly intended for IE 11. It includes minimum requirements and commonly used language features used by NDLA projects.

## Installation

```sh
$ yarn @ndla/polyfill
```

## Usage

### Simple

```js
// This must be the first line in your bundle
import '@ndla/polyfill';
```

### Advanced

1. Create an umd build of `@ndla/polyfill`
2. Conditionally load it in `<head>`

```js
import useragent from 'useragent';
...
<head>
  {useragent.parse(userAgentString).family === 'IE' && (
    <script src="https://example.com/polyfill.min.js" />
  )}
</head>;
```
