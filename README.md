# NDLA frontend packages

[Monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) containing a set of packages used to build UIs at NDLA.

## Installation

```js
npm install [package-name]
```

or

```js
yarn add [package-name]
```

To view all of the available packages, see the [`packages/` directory](packages).

## Development

### Setup

Install root dependencies and [bootstrap](https://github.com/lerna/lerna#bootstrap) packages.

```js
yarn && yarn bootstrap
```

Se package README for package specific details.

### Lint and format

Run lint and format check for all packages:

```js
yarn lint
```

### Test

Run tests for all packages:

```js
yarn test
```

### Check all

Make sure everthing is OK before push:

```js
yarn check-all
```

### Develop

```js
yarn start
```

## Publishing

### Publish packages to npm:

```js
yarn run publish
```

### Alias master to designmanual.ndla.sh

```js
yarn deploy
```

## Upcoming features and updates

### Upcoming updates to the designmanual can be previewed here.

[Designmanual WIP](https://designmanual-ndla-keyteq.surge.sh)
