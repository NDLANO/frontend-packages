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

#### Usage during development

```js
cd packages/[package-name]
yarn link
```

In repo using the package (ie. ndla-frontend). Forces usage of the same react versions as in frontend-packages.

```js
yarn link @ndla/[package-name] react react-dom react-router react-router-dom
yarn
```

## Publishing

### Publish packages to npm

```js
yarn run publish
```

### Alias master to designmanual.ndla.sh

```js
yarn deploy
```

## Publishing alpha releases

As an alternative to linking packages locally, alpha versions of packages can be published and used in other repositories.

_READ FIRST:_ This guide is not fully functional. When merging and bumping alpha versions in the second step, the released package is not necessarily correct. The guide has to be updated to resolve this issue.

### Creating alpha version and using it

- `yarn lerna publish --canary`. Will bump patch version and add current git sha to version. For example: `1.0.1-alpha.0+${SHA}`
- The scripts fails sometimes, but the alpha version should be released. You have to manually commit the new version in package.json.
- Upgrade packages to alpha versions in your repository. Add the full version number to package.json manually and run `yarn install --force` or install it using `yarn upgrade @ndla/my-package@<version-number>`.

### Merging and bumping alpha versions to latest.

- Merge frontend-packages PR.
- `yarn lerna version`: Now set packages to the desired major/minor/patch version.
- `yarn lerna publish from-git` Publishes versions generated in previous step.

## Upcoming features and updates

### Upcoming updates to the designmanual can be previewed here.

[Designmanual WIP](https://designmanual.ndla.no/?path=/story/velkommen--til-ndlas-designmanual)
