# Tooltip component

A Tooltip component that can be used to wrap any element. A tooltip is shown when the mouse pointer is hovering the wrapped element.

## Installation

```sh
yarn add @ndla/tooltip
```

## Usage

### Tooltip wrapper for any element.

Tooltip indirectly uses css provided by `@reach/tooltip`. This package exposes a single css file for import, named `all.css`. If you are importing `all.css` from `@ndla/ui`, the required css file is imported automatically.

```js
import Tooltip from '@ndla/tooltip';
import '@ndla/tooltip/all.css';

<Tooltip tooltip="Tooltip text">{children}</Tooltip>;
```
