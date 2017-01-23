# ndla-util

Collection of util functions used by NDLA

## Installation

```sh
$ npm install ndla-util
```

## Usage

```js
import util from 'ndla-util');

const unique = util.uuid();
console.log(unique); // > 'b56f476a-bc77-49cd-8be1-9d9aa93117ca'
```

or

```js
import { uuid } from 'ndla-util');

const unique = uuid();
console.log(unique); // > '0ada1b02-5888-43fd-9fbc-ccdbb69528f2'
```

## API(functions)

### `uuid()`

Get an unique identifier.

```js
const unique = util.uuid();
console.log(unique); // > '95821b33-694c-40e8-824c-d115a046d009'
```
