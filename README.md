# NDLA frontend packages

[Monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) containing a set of packages used to build UIs at NDLA. By definition this repo is maintained using [yarn v4](https://yarnpkg.com/getting-started).

## Installation

Using windows? See notes at the bottom.

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

### Check for dependency version mismatch

To check for any mismatch between versions of common dependencies for our packages in the monorepo:

```sh
yarn syncpack lint
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
yarn link @ndla/[package-name] react react-dom react-router
yarn
```

## Publishing

### Publish packages to npmjs

```js
yarn run publish
```

If script was interrupted, resulting in new versions being commited but not published to npm, this can be resolved by running

```
yarn lerna publish from-package
```

### Alias master to designmanual.ndla.sh

```js
yarn deploy
```

## New Icons

### Download icon

As mentioned on https://designmanual.ndla.no/?path=/story/components--icons, new icons are downloaded from https://remixicon.com/. To avoid naming conflicts and duplicates, and also make it easy to check if an icon has already been imported, the naming chosen by RemixIcon has largely been kept. This means that:

- Icons are explicitly named 'Fill' or 'Line' for all variants wherever applicable
- Icon names are Camel case versions of the kebab case names on the website
- Sizing is written in full (link-m-line = LinkMediumLine, arrow-up-s-line = ArrowUpShortLine)
- Some icons have several variants, indicated by numbers. Since we won't be using more than one such variant, the number is omitted

Icons are downloaded and placed in the best matching sub-folder in `frontend-packages/packages/icons/svg/`. Edit the svg and add license information matching the other svg files.

### Generate typescript component file

Navigate to the root of frontend-packages and run `node scripts/createTsIconComponents.mjs`. This will generate typescript files for all the svg files, including the newly added one. When finished, create a PR with the new files (should only be svg and ts files). Make sure to publish frontend-packages for the new icons to be available.

## Upcoming features and updates

### Upcoming updates to the designmanual can be previewed here.

[Designmanual WIP](https://designmanual.ndla.no/?path=/story/velkommen--velkommen)

## Windows

Powershell is currently not supported as it does not recognize `cp` commands for copying in the package.json scripts. GitBash or equivalent will work. WSL is also recommended if you want to use Windows.
