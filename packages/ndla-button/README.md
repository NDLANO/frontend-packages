# ndla-button

Button component.

## Installation

```sh
$ yarn add --save ndla-button
```

```sh
$ npm install ndla-button --save
```

## Usage

### Styling

```scss
/* Your project's main .scss import file */
@import '~ndla-button/scss/button'; // with webpack and sass-loader
@import '../path/to/node_modules/ndla-button/scss/button'; // direct reference
```

### Basic example

```js
import Button from '@ndla/button'

<Button onClick={() => alert('Hello worls')}>Click me!</Button>
```
