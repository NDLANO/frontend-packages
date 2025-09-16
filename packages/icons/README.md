# @ndla/icons

A package containing icons used in NDLA frontends.

## Installation

```sh
yarn add @ndla/icons
```

```sh
npm install @ndla/icons --save
```

## Usage

```js
import { VoiceprintLine, CameraFill } from "@ndla/icons";

const IconList = () => (
  <ul>
    <li>
      <VoiceprintLine /> Audio icon
    </li>
    <li>
      <CameraFill /> Camera icon
    </li>
  </ul>
);
```

### Icons are currently grouped into four folders

- common
- license
- editor
- contentType

## Development

_TLDR:_ Change/Add/Remove svg file(s). Run `node scripts/createTsIconComponents.mjs`. Commit.

### Add new svg file:

1. Add svg file to an appropiate folder in [icons/svg](/packages/icons/svg).
2. Ensure that `data-license` and `data-source` attributes are on the `<svg>` element.
3. Run `node scripts/createTsIconComponents.mjs` from root folder.
4. Commit changes.

### Edit svg file:

1. Edit existing svg file.
2. Run `node scripts/createTsIconComponents.mjs` from root folder.
3. Commit changes.

### Delete svg file:

1. Delete svg file.
2. Run `node scripts/createTsIconComponents.mjs` from root folder.
3. Commit changes.

### Rename or add new folders

1. Do changes.
2. Run `node scripts/createTsIconComponents.mjs` from root folder.
3. Update files array in [packages.json](/packages/icons/package.json).
