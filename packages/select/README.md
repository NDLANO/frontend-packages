# Select

Select component.

## Installation

```sh
yarn add @ndla/select
```

```sh
npm i --save @ndla/select
```

## Usage

```js
import { Select } from '@ndla/select';

<Select options={[{ value: 'blå', label: 'blå' }]} placeholder="Farger" />;
```

Can be controlled using `value` and `onChange` props.
