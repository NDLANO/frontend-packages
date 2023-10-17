# Typography

Typography components. We have two typography components: `Heading` and `Text`.

## Installation

```sh
yarn add @ndla/typography
```

```sh
npm i --save @ndla/typography
```

## Usage

### Heading

```js
import { Heading } from '@ndla/typography';

<Heading headingStyle="h1" element="h1" margin="normal">
  {title}
</Heading>;
```

Can be controlles using `headingStyle`, `element`, `serif`, `margin` props. The rendered element can be updated using the element prop.

### Text

```js
import { Text } from '@ndla/typography';

<Text textStyle="ingress" element="span" margin="normal" />;
```

Can be controlles using `textStyle`, `element`, `margin` props. The rendered element can be updated using the element prop.
