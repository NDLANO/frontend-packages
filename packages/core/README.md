# ndla-core

ndla-core contains common styling for all NDLA components. It includes all global variables for stuff like typography, colors, etc

## Installation

```sh
yarn add --save @ndla/core
```

```sh
npm i --save @ndla/core
```

## Usage

```scss
/* Your project's main .scss import file */
@import '~ndla-core/scss/core'; // with webpack and sass-loader
@import '../path/to/node_modules/ndla-core/scss/core'; // direct reference
```

Utilities are located in a seperate file and should be imported last (after component styling)

```scss
@import '~@ndla/core/scss/core';
@import 'my-awesome-component';
@import '~@ndla/core/scss/utilities';
```
