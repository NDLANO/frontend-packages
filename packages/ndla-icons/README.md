# ndla-icons

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
import { Audio } from '@ndla/icons/common';
import { Camera } from '@ndla/icons/editor';

const IconList = () => (
  <ul>
    <li>
      <Audio /> Audio icon
    </li>
    <li>
      <Camera /> Camera icon
    </li>
  </ul>
);
```

or

```js
import { Audio } from '@ndla/icons/lib/common/Audio';

<Audio />;
```

### Icons are currently grouped into four folders

- common
- license
- editor
- contentType

## Development

_TLDR:_ Change/Add/Remove svg file(s). Run `node scripts/createTsIconComponents.js`. Commit.

### Add new svg file:

1. Add svg file to an appropiate folder in [ndla-icons/svg](/packages/ndla-icons/svg).
2. Ensure that `data-license` and `data-source` attributes are on the `<svg>` element.
3. Run `node scripts/createTsIconComponents.js` from root folder.
4. Commit changes.

### Edit svg file:

1. Edit existing svg file.
2. Run `node scripts/createTsIconComponents.js` from root folder.
3. Commit changes.

### Delete svg file:

1. Delete svg file.
2. Run `node scripts/createTsIconComponents.js` from root folder.
3. Commit changes.

### Rename or add new folders

1. Do changes.
2. Run `node scripts/createTsIconComponents.js` from root folder.
3. Update files array in [packages.json](/packages/ndla-icons/package.json).
