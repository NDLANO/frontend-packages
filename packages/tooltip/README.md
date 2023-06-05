# Tooltip component

A Tooltip component that can be used to wrap any element. A tooltip is shown when the mouse pointer is hovering the wrapped element

## Installation

```sh
yarn add @ndla/tooltip
```

## Usage

### Tooltip wrapper for any element

```js
import Tooltip from '@ndla/tooltip';

<Tooltip tooltip="Tooltip text">{children}</Tooltip>;
```

### Popover wrapper for any element. Requires button as children for keyboard actions to work

```js
import { Popover } from '@ndla/tooltip';

<Popover popover="Popover text">
  <button>{children}</button>
</Popover>;
```
