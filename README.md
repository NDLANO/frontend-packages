# NDLA frontend packages

[Monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) containing a set of packages used to build UIs at NDLA.

## Installation

```js
npm install [package-name]
```

To view all of the available packages, see the [`packages/` directory](packages).

## Development

### Setup
Install root dependencies and [bootstrap](https://github.com/lerna/lerna#bootstrap) packages.  

```js
npm install
```

Se package README for package specific details.

### Lint
Run linting for all packages:

```js
npm run lint
```

### Test

Run tests for all packages:

```js
npm test
```


## Publishing

### Publish packages to npm:
[Lerna](https://github.com/lerna/lerna) is needed for easy publishing. Install latest 2.x version of lerna

```js
npm install --global lerna@prerelease
```

Publish with lerna:

```js
lerna publish
```

### Publish storybook to  Github pages

```js
npm run deploy-storybook
```
