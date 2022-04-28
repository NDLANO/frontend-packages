# NDLA frontend packages

[Monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) containing a set of packages used to build UIs at NDLA. By definition this repo is maintained using [yarn](https://classic.yarnpkg.com/en/).

## Installation

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

### Publish packages to npmjs

```js
yarn run publish
```

### Alias master to designmanual.ndla.sh

```js
yarn deploy
```

## Publishing alpha releases

As an alternative to linking packages locally, alpha versions of packages can be published and used in other repositories.

**READ FIRST:** This guide is not fully functional. When merging and bumping alpha versions in the second step, the released package is not necessarily correct. The guide has to be updated to resolve this issue.

### Creating alpha version and using it

- `yarn lerna publish --canary`. Will bump patch version and add current git sha to version. For example: `1.0.1-alpha.0+${SHA}`
- The scripts fails sometimes, but the alpha version should be released. You have to manually commit the new version in package.json.
- Upgrade packages to alpha versions in your repository. Add the full version number to package.json manually and run `yarn install --force` or install it using `yarn upgrade @ndla/my-package@<version-number>`.

### Merging and bumping alpha versions to latest.

- Merge frontend-packages PR.
- `yarn lerna version`: Now set packages to the desired major/minor/patch version.
- `yarn lerna publish from-git` Publishes versions generated in previous step.

## New Icons

### Download icon
As mentioned on https://designmanual.ndla.no/?path=/story/enkle-komponenter--ikoner, new icons are downloaded from https://material.io/icons/. Find the icon needed and download it. Afterwards copy it to the best matching sub-folder in `frontend-packages/packages/ndla-icons/svg/`. Edit the svg and add license information matching the other svg files.

### Generate typescript component file
Navigate to the root of frontend-packages and run `node scripts/createTsIconComponents.js`. This will generate typescript files for all the svg files, including the newly added one. When finished, create a PR with the new files (should only be svg and ts files). Make sure to publish frontend-packages for the new icons to be available.

## Upcoming features and updates

### Upcoming updates to the designmanual can be previewed here.

[Designmanual WIP](https://designmanual.ndla.no/?path=/story/velkommen--til-ndlas-designmanual)
