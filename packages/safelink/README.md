# ndla-safelink

Link component.

## Installation

```sh
$ yarn add --save ndla-safelink
```

```sh
$ npm install ndla-safelink --save
```

## Usage

### Basic example

```js
import Safelink from '@ndla/safelink';

<Safelink to="/internal-url">Click me!</Safelink>;
```

### Basic example with context

In your app, add this to your top component:

```js
import { MissingRouterContext } from '@ndla/safelink';

<MissingRouterContext.Provider value={true}>
  <SomeComponent />
</MissingRouterContext.Provider>;
```

and use SafeLink like this:

```js
import Safelink from '@ndla/safelink';

<SafeLink to="/no-router-context">Click me!</SafeLink>;
```
